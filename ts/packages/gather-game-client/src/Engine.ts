/*

The Engine is what manages the connection with the game server.
Its job is to provide Game.ts with the abstraction of
"send actions whenever you want and events will come back when they're ready",
so Game.ts doesn't have to worry about connection, reconnection, or authentication logic.

Be careful changing this file! Please talk to the Engine Team/get them to review

*/

/** Init flow:
 * 1. Open ws connection to server
 * 2. Send 'init' action first, with auth token/key and spaceId of interest. All other actions will fail until this succeeds
 * 3. Server sends 'ready' event
 * 4. Send 'updateSubscriptions' action second (not required by server, but we always want to get the world state asap)
 * 5. (simultaneous) Send 'enter' action third, if 'game.enter' was ever called.
 *      All changes to your player require you to be entered, so it's important this is sent before other actions (e.g. move)
 * 6. Send any actions queued while disconnected/initializing
 * 7. Receive full world state from server. Resolve 'game.waitForInit'
 * 8. (if 'enter' sent) Player appears in space for themselves and others
 * 9. Results of any other actions show up
 */

import { v4 as uuid } from "uuid";
import {
  ClientServerAction,
  Enter,
  PlayerInitInfo,
  ServerClientBatch,
  ServerClientEvent,
} from "@gathertown/gather-game-common/dist/src/public/events";
import { GameWsCloseCode } from "@gathertown/gather-game-common/dist/src/public/responseCodes";
import { ClientServerActionAction } from "@gathertown/gather-game-common/dist/src/public/utils";
import { logger } from "./Logger";
import { TransactionManager } from "./TransactionManager";
import {
  abortable,
  anySignal,
  fetchGameServerAssignment,
  SlidingWindow,
  testConnection,
} from "./Utils";
import { ClientError } from "./Error";
import { isBrowser } from "./config";

const HEARTBEAT_INTERVAL = 10_000; // check interval
const HEARTBEAT_TIMEOUT = 30_000; // max time without sign of life from the gs
const INITIAL_RECONNECT_DELAY = 1000;
const MAX_RECONNECT_DELAY = 30000; // max time to wait before trying to connect again
const RESET_RECONNECT_ATTEMPTS_DELAY = 30_000; // have to be connected for 30 seconds to be considered a successful reconnect
const MAX_WAIT_FOR_CONNECTION = 45000; // maximum time to wait after calling connect before giving up on waiting for ws.onopen
const SUSPEND_CHECK_DELAY = 3000; // how often to refresh whether there was a suspend or not
const CONSIDERED_SUSPEND_DELAY = 10000; // how long between suspend checks before we flag it as a suspend
const REUSE_SERVERURL_1006_SIGN_OF_LIFE_LIMIT = 5000; // if we got a 1006 but received something from the GS within this time allow reuse of the serverURL

const SENDING_LARGE_MESSAGE_WARN = "sending large message:";

// Max # of "move" events we'll buffer in sendQ before start to drop them. Buffering too many
// of these while we're disconnected from the server can flood the server and in turn flood other
// clients in the space.
const MAX_BUFFERABLE_MOVE_EVENTS = 10;

export type EngineAuth = { token: string } | { apiKey: string };
type DisconnectInfo = {
  code: GameWsCloseCode;
  reason: string;
};

const SINCE_START_UNLOAD_DELAY = 12_000; // the minimum time since start after which to write dc unload status (bad dc popup after 12sec)
const CONSIDERED_REFRESH_DELAY = 30_000; // the maximum delay between an unload and reload to consider this a browser refresh
const LOCAL_STORAGE_UNLOAD_DC_DATA_KEY_NAME = "engine-unload-dc-data";

type EngineUnloadDcData = {
  timestamp: number;
  history: string;
  hasEverFullyConnected: boolean;
  timeSinceDisconnect: number;
  attempts?: number;
};

type TimeoutOrUndefined = ReturnType<typeof setTimeout> | undefined; // number or Timeout, depending on browser vs. node

export class Engine {
  ws?: WebSocket;
  serverURL = "";
  getAuth: () => Promise<EngineAuth>;
  spaceId: string;
  clientUid?: string;
  debugOverrideServer?: string;
  debugOverrideHttpServer?: string;

  /* state tracking */
  private started = false;
  private startTime = 0;
  _connected = false;
  private connectionInitTime = 0;
  private gotFirstMessage = false;
  private sizeOfNextLargeMessage = 0;
  private sizeOfLargestMessageReceived = 0;

  /* for tracking actions and stuff */
  private _sendQ: { action: ClientServerActionAction; txnId?: number }[] = [];
  // A value cache storing the # of move events currently in sendQ. Keep this in sync with sendQ!
  private numMoveEventsBuffered = 0;
  private transactionManager = new TransactionManager();

  /* reconnect tracking */
  private connectionFailedTimeout: TimeoutOrUndefined;
  private uploadLogTimeout: TimeoutOrUndefined;
  private uploadLogTimeoutLong: TimeoutOrUndefined;
  private lastSignOfLife = 0; // ms
  private abortConnectionAttempt = () => {};
  private lastSuccessfulFetch = 0;

  /* Stats */
  _bufferedAmounts = new SlidingWindow(10);
  private latencies = new SlidingWindow(10);
  _timeSpentDisconnected = new SlidingWindow(10);
  _eventCountsSinceOpen: { [event: string]: number } = {};
  _closeCounts: { [code: number]: number } = {}; // does not reset

  private connectMetrics = {
    gotGameServerUrl: 0,
    gotWsOpen: 0,
    gotReady: 0,
    gotSubscriptionsUpdated: 0, // sent before map state
    gotSpaceSetsIdMapping: 0, // sent after map state, before player state
    gotSpaceSetsCapacity: 0, // sent after player state
  };

  private readonly userIdForABTest: string = "";

  private preRefreshDcData: EngineUnloadDcData | undefined = undefined;

  private connectionId = "";

  /* to be overridden by user */
  onevent(_e: ServerClientEvent) {}
  onconnect() {}
  ondisconnect(_code?: number, _reason?: string) {}
  onmetric(_metricName: string, _metricValue: unknown) {}
  subscriptionHook() {}

  // getAuth: A function that returns an auth token/key that the Engine should
  //   use to authenticate itself with the game server.
  constructor(
    spaceId: string,
    getAuth: () => Promise<EngineAuth>,
    overrideServer?: string,
    overrideHttpServer?: string,
  ) {
    this.getAuth = getAuth;
    this.spaceId = spaceId;
    this.debugOverrideServer = overrideServer;
    this.debugOverrideHttpServer = overrideHttpServer;

    if (isBrowser) {
      window.addEventListener("beforeunload", () => {
        this.saveUnloadDcState();
        this.stop();
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/consistent-type-assertions
      const globalUserId = (window as any)["userIdForEngineABTestHack_DoNotUse"];
      this.userIdForABTest = typeof globalUserId === "string" ? globalUserId : "";

      this.loadUnloadDcState();
    }
  }

  /**
   * if we're disconnected write to local storage so we can detect browser refresh fixes
   */
  private saveUnloadDcState() {
    if (!this.started || this._connected) return; // don't write if connected or not started
    const dcLength = Date.now() - (this.disconnectedStartTime || this.startTime);
    if (dcLength < SINCE_START_UNLOAD_DELAY) return; // don't write if not enough time elapsed
    try {
      const data: EngineUnloadDcData = {
        timestamp: Date.now(),
        history: logger.exportHistory().slice(-5000),
        hasEverFullyConnected: this.hasEverFullyConnected,
        timeSinceDisconnect: dcLength,
        attempts: this._reconnectionAttempts,
      };
      window.localStorage.setItem(LOCAL_STORAGE_UNLOAD_DC_DATA_KEY_NAME, JSON.stringify(data));
    } catch {
      // localStorage disabled or QuotaExceededError?
    }
  }

  /**
   * try to load the last disconnected unload state to detect whether the user refreshed their browser
   */
  private loadUnloadDcState() {
    try {
      const json = window.localStorage.getItem(LOCAL_STORAGE_UNLOAD_DC_DATA_KEY_NAME);
      if (!json) return;
      const data: EngineUnloadDcData = JSON.parse(json);
      if (!data?.timestamp) return;
      const timeSinceLastUnload = Date.now() - (data.timestamp || 0);
      if (timeSinceLastUnload > CONSIDERED_REFRESH_DELAY) return; // not a refresh
      this.preRefreshDcData = data;
    } catch {
      // JSON parse error or localStorage disabled?
    }
  }

  private clearUnloadDcState() {
    try {
      this.preRefreshDcData = undefined;
      window.localStorage.removeItem(LOCAL_STORAGE_UNLOAD_DC_DATA_KEY_NAME);
    } catch {
      // localStorage disabled?
    }
  }

  //

  /*** CONNECTION LOGIC
   *
   * lifecycle is now:
   * - start / stop -- for making the engine do anything at all
   * - createConnection / destroyConnection -- internal to engine. for managing the specific connection at any given time
   * - cleanUpAndQueueReconnect -- for reconnects
   *
   * connection attempt flow (in this.createConnection):
   * - fetch game server assignment (ws url) from `https://api.gather.town/api/v2/spaces/${spaceId}/game-server-assignment`
   * - open ws connection to that^ url (e.g. wss://game-aaai-xxx.gather.town:443)
   * - connection opens successfully
   * - receive all init data (maps and players)
   * if any of those steps fail, we reset everything, wait an exponential backoff, and try again
   *
   *
   * reconnect/retry safeguards:
   * - if the connection closes, clean up (destroy) and queue reconnect
   * - start a timeout when you first try to connect, cancel it when you get the first message. destroys and queues reconnect if it goes off (MAX_WAIT_FOR_CONNECTION)
   * - start a heartbeat when you open the connection. if you don't hear anything for a while, destroy and queue reconnect (HEARTBEAT_TIMEOUT)
   * - cleanUpAndQueueReconnect sets a timeout to create a new connection, if one doesn't exist already
   *   - timeout length increases (up to MAX_RECONNECT_DELAY) each time until it's been a while (RESET_RECONNECT_ATTEMPTS_DELAY) since last call to reconnect
   *
   ***/

  start() {
    if (this.started) {
      logger.warn("already started");
      return;
    }
    this.started = true;
    this.startTime = Date.now();
    this.createConnection();
    this.startRecordingIntentToConnect();
    this.startSuspendCheck();
  }

  stop(disconnectInfo?: DisconnectInfo) {
    this.destroyConnection(
      disconnectInfo ?? {
        code: GameWsCloseCode.NORMAL_CLOSURE,
        reason: "Game client disconnecting normally",
      },
    );
    this.stopRecordingIntentToConnect();
    this.stopSuspendCheck();
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
    }
    this.resetDisconnectionTracking();
    this.started = false;
  }

  private get isOnline() {
    return isBrowser ? window?.navigator?.onLine ?? true : true;
  }

  // Calls `getAuth` but aborts (returning `null`) if the signal is aborted
  private async getAuthWithAbort(signal: AbortSignal): Promise<EngineAuth | null> {
    try {
      // the 'abortable' helper will race the 'getAuth' promise against the abort signal, this
      // ensures that if the 'getAuth' method does not return in time we still cancel the connection
      // attempt in case of a timeout.
      // Otherwise what may happen is that we timeout above and start another connection attempt
      // after which this promise is resolved and tries to continue the previous attempt.
      return await abortable(this.getAuth(), signal);
    } catch (e) {
      const message = e && typeof e === "object" && "message" in e ? e.message : "";
      logger.warn(`failed to get auth: ${message}`);
      return null;
    }
  }

  private async createConnection(reuseServerURL = false) {
    if (this.ws) {
      logger.error("createConnection called, but connection already exists");
      return;
    }
    this.connectionInitTime = Date.now();
    logger.checkpoint(`creating a new connection at t = ${this.connectionInitTime}`);

    this.queueDebugUpload(); // if the connection doesn't open for a while, automatically send debug info

    const aborter = new AbortController();
    const isAttemptAborted = () => aborter.signal.aborted;
    this.abortConnectionAttempt = () => aborter.abort(new Error("Connection attempt aborted"));

    // important that this is first -- if anything goes wrong, it's a catchall retry
    this.connectionFailedTimeout = setTimeout(() => {
      logger.warn(
        `t: ${
          Date.now() - this.connectionInitTime
        } : didn't get a ws.onopen for ${MAX_WAIT_FOR_CONNECTION}ms after creating connection. destroying and trying again. connectionId: ${
          this.connectionId
        }`,
      );
      this.onmetric("create-connection-timeout", {
        ...this.getBaseMetricsInfo(),
        space: this.spaceId,
        attempts: this._reconnectionAttempts,
        serverURL: this.serverURL,
      });
      this.cleanUpAndQueueReconnect();
    }, MAX_WAIT_FOR_CONNECTION);

    // if we have a serverURL and can reuse it then don't fetch again, faster reconnects
    if (!reuseServerURL || !this.serverURL) {
      const serverURL = await this.getGameServerUrl(aborter.signal);
      // in case the connection attempt was aborted (e.g. timed out) while we were waiting
      if (isAttemptAborted()) return;
      if (serverURL) {
        this.serverURL = serverURL;
        this.redirectToProdIfOnProdServer();
      } else {
        this.serverURL = "";
        this.cleanUpAndQueueReconnect();
        return;
      }
    }

    this.connectMetrics.gotGameServerUrl = Date.now();

    logger.checkpoint(
      `t: ${Date.now() - this.connectionInitTime} : got game server url: ${this.serverURL}`,
    );
    this.lastSuccessfulFetch = Date.now();

    const auth = await this.getAuthWithAbort(aborter.signal);
    if (!auth) {
      // in case the connection attempt was aborted (e.g. timed out) while we were waiting
      if (!isAttemptAborted()) {
        this.cleanUpAndQueueReconnect();
      }
      return;
    }

    logger.checkpoint(`t: ${Date.now() - this.connectionInitTime} : got auth`);

    this.connectionId = uuid();

    // connect to server
    try {
      this.ws = new WebSocket(this.serverURL + `?connectionId=${this.connectionId}`, "gather-v2");
    } catch (e) {
      logger.warn(
        `Failed to create websocket object with gameserver ${this.serverURL} : ${logger.errString(
          e,
        )}`,
      );
      this.cleanUpAndQueueReconnect();
      return;
    }
    this.ws.binaryType = "arraybuffer";

    let timeConnectionOpened = 0;

    // when created, initialize with our auth token
    this.ws.onopen = () => {
      logger.checkpoint(`t: ${Date.now() - this.connectionInitTime} : ws connection opened`);
      this.lastSignOfLife = timeConnectionOpened = Date.now();
      this.connectMetrics.gotWsOpen = Date.now();

      clearTimeout(this.connectionFailedTimeout);

      this.startByteTracker();

      // kind of annoying, we have to send this before onconnect
      this.sendAction(
        {
          $case: "init",
          init: {
            spaceId: this.spaceId,
            auth:
              "token" in auth
                ? { $case: "token", token: auth.token }
                : { $case: "apiKey", apiKey: auth.apiKey },
          },
        },
        true,
      );

      this.startHeartbeat();
      this.onconnect();
    };

    this.ws.onmessage = (msg) => {
      if (!this.gotFirstMessage) {
        const connectionInitTime = Date.now() - this.connectionInitTime;
        logger.checkpoint(`t: ${connectionInitTime} : got first message`);
        this.onmetric("connection_init_time", {
          ...this.getBaseMetricsInfo(),
          space: this.spaceId,
          attempts: this._reconnectionAttempts,
          value: connectionInitTime,
        });
        this.gotFirstMessage = true;
      }
      this._bytesReceivedSinceConnect += msg.data.byteLength;
      this.sizeOfLargestMessageReceived = Math.max(
        this.sizeOfLargestMessageReceived,
        msg.data.byteLength,
      );
      this.lastSignOfLife = Date.now(); // if we get any message, it means the server is alive
      this.sizeOfNextLargeMessage = 0;

      try {
        const data = new Uint8Array(msg.data);
        const { events } = ServerClientBatch.decode(data);
        events.forEach((event) => this.processEvent(event));

        // If we're throttled, meaning that timers are only waking up at 1-minute intervals and we haven't sent any
        // heartbeat to the server within the heartbeat interval then send a heartbeat here.
        //
        // The reason this works is because even if the browser is throttling our timers to 1-minute intervals
        // these handlers won't be throttled.
        //
        // This is to attempt to detect cases where:
        //  - client is throttled by the browser, timers awake at 1-min intervals so regular 10sec heartbeats not sent
        //  - server is busy sending a large or many events which blocks/delays the 'serverHeartbeat' event send
        //  - server then disconnects the client because it hasn't received a sign of life

        const hasSentRegularHeartbeatRecently =
          Date.now() - this._lastRegularHeartbeatSent < HEARTBEAT_INTERVAL;
        const hasSentBackupHeartbeatRecently =
          Date.now() - this._lastBackupHeartbeatSent < HEARTBEAT_INTERVAL;

        if (
          this._connected &&
          !hasSentRegularHeartbeatRecently &&
          !hasSentBackupHeartbeatRecently
        ) {
          this.sendBackupHeartbeat();
        }
      } catch (e) {
        logger.error(`unexpected error in ws.onmessage, maybe decode?: ${logger.errString(e)}`);
      }
    };

    // NOTE: onclose can be called without onopen having been called. it happens when you fail to establish a connection
    this.ws.onclose = (event) => {
      this.checkAndHandleSuspend();

      this.onmetric(`client_ws_close_code_${event.code}`, {
        ...this.getBaseMetricsInfo(),
        value: event.reason,
        wasClean: event.wasClean,
        bytesReceivedSinceConnect: this._bytesReceivedSinceConnect,
        timeSinceConnectionOpened:
          timeConnectionOpened > 0 ? Date.now() - timeConnectionOpened : null,
        timeSinceLastSuspend: Date.now() - this.lastSuspendDate,
        timeSinceLastSignOfLife: Date.now() - this.lastSignOfLife,
        sizeOfLargestMessageReceived: this.sizeOfLargestMessageReceived,
        ...(this.sizeOfNextLargeMessage && {
          wasWaitingForMessageOfSize: this.sizeOfNextLargeMessage,
        }),
        timeSinceLastSend: Date.now() - this._lastActionSentAt,
        hasEverFullyConnected: this.hasEverFullyConnected,
        bufferedAmount: this.ws?.bufferedAmount || null,
      });
      this._closeCounts[event.code] = (this._closeCounts[event.code] ?? 0) + 1;
      logger.checkpoint(
        `t: ${Date.now() - this.connectionInitTime} : onclose. last sign of life was ${
          this.lastSignOfLife ? Date.now() - this.lastSignOfLife + "ms ago" : "never"
        }. wasClean: ${event.wasClean}`,
      );
      // We're finding that you can't pass DomEvents (which is the CloseEvent type) to
      // `logger.errString` and enumerate across `code` and `reason` properly for the logger. So
      // we'll create a plain object here to capture it explicitly. Lawrence may investigate this
      // further in a sleepless night some day.
      const disconnectInfo = { code: event.code, reason: event.reason };
      switch (event.code) {
        case GameWsCloseCode.SPACE_CLOSED:
          logger.warn("Space is closed: " + event.reason);
          // reload for FE to show them a message
          if (isBrowser) {
            window.location.reload();
          }
          this.stop(disconnectInfo); // don't reconnect
          break;
        case GameWsCloseCode.SPACE_AT_CAPACITY:
          logger.warn("Space is currently at capacity, please try again later: " + event.reason);
          this.stop(disconnectInfo); // don't reconnect!
          break;
        case GameWsCloseCode.PROTOCOL_ERROR:
          logger.error("ws closed: protocol error. " + event.reason);
          // reload to hopefully get a new client that works?
          if (isBrowser) {
            window.location.reload();
          }
          this.stop(disconnectInfo); // don't reconnect, it's not going to work the second time
          break;
        case GameWsCloseCode.INTERNAL_ERROR:
          logger.error("connection closed due to internal server error: " + event.reason);
          // reload to hopefully get a new client that works?
          if (isBrowser) {
            window.location.reload();
          }
          this.cleanUpAndQueueReconnect(disconnectInfo); // try reconnect, it might work a second time...
          break;
        case GameWsCloseCode.CLIENT_KICKED:
          logger.warn("connection closed due to client being kicked: " + event.reason);
          if (isBrowser) {
            window.location.reload();
          }
          this.cleanUpAndQueueReconnect(disconnectInfo); // if it's a mod/extension, it's fine, reconnect
          break;
        case GameWsCloseCode.UNAUTHORIZED:
          logger.warn("connection closed because user does not have access: " + event.reason);
          // reload because the FE will show them a nice landing screen instead
          if (isBrowser) {
            window.location.reload();
          }
          this.stop(disconnectInfo); // don't bother reconnecting
          break;
        case GameWsCloseCode.CONN_TIMED_OUT:
          logger.warn("connection timed out: " + event.reason);
          this.cleanUpAndQueueReconnect(disconnectInfo);
          break;
        case GameWsCloseCode.NO_STATUS_RECEIVED:
          logger.warn(
            "connection closed unexpectedly with no status: " + logger.errString(disconnectInfo),
          );
          this.cleanUpAndQueueReconnect(disconnectInfo);
          break;
        case GameWsCloseCode.GOING_AWAY:
          logger.warn("connection closed with code 1001 GOING_AWAY - " + event.reason);
          this.cleanUpAndQueueReconnect(disconnectInfo);
          break;
        case GameWsCloseCode.SPACE_REASSIGNED:
          logger.warn("connection closed with code 4009 SPACE_REASSIGNED - " + event.reason);
          this.cleanUpAndQueueReconnect(disconnectInfo);
          break;
        case GameWsCloseCode.NO_CLOSE_FRAME:
          logger.warn(`connection closed unexpectedly (${event.code}: ${event.reason})`);
          this.cleanUpAndQueueReconnect(disconnectInfo);
          break;
        case GameWsCloseCode.NONFATAL_INTERNAL_ERROR:
          logger.warn(`unknown nonfatal internal error (${event.code}: ${event.reason})`);
          this.cleanUpAndQueueReconnect(disconnectInfo);
          break;
        default:
          logger.error(
            `connection closed with unrecognized non-default code ${event.code}: ${event.reason}`,
          );
          this.cleanUpAndQueueReconnect(disconnectInfo);
      }
    };

    // NOTE: onerror can be called without onopen having been called. it happens when you fail to establish a connection
    this.ws.onerror = (e) => {
      logger.warn(`ws.onerror in Engine: ${logger.errString(e)}`);
      this.onmetric(`ws error`, {
        ...this.getBaseMetricsInfo(),
        error: e,
        timeSinceConnectionOpened:
          timeConnectionOpened > 0 ? Date.now() - timeConnectionOpened : null,
        timeSinceLastSuspend: Date.now() - this.lastSuspendDate,
        timeSinceLastSignOfLife: Date.now() - this.lastSignOfLife,
        sizeOfLargestMessageReceived: this.sizeOfLargestMessageReceived,
        ...(this.sizeOfNextLargeMessage && {
          wasWaitingForMessageOfSize: this.sizeOfNextLargeMessage,
        }),
      });
    };
  }

  private destroyConnection(disconnectInfo?: DisconnectInfo) {
    this.checkAndHandleSuspend(); // important that this is first, so the metrics recorded aren't thrown off
    logger.checkpoint(`t: ${Date.now() - this.connectionInitTime} : destroying connection`);

    this.abortConnectionAttempt();

    if (this.ws) {
      this.onmetric(`client_ws_destroy`, {
        ...this.getBaseMetricsInfo(),
        ...(disconnectInfo?.code && { closeCode: disconnectInfo?.code }),
        timeSinceLastSignOfLife: Date.now() - this.lastSignOfLife,
        sizeOfLargestMessageReceived: this.sizeOfLargestMessageReceived,
      });

      this.ws.onopen = () => {};
      this.ws.onclose = () => {};
      this.ws.onmessage = () => {};
      this.ws.onerror = () => {};
      try {
        const disconnectInfoCode = disconnectInfo?.code ?? 0;
        if (disconnectInfoCode >= 4000 || disconnectInfoCode === GameWsCloseCode.NORMAL_CLOSURE) {
          this.ws.close(disconnectInfo?.code, disconnectInfo?.reason);
        } else {
          this.ws.close();
        }
      } catch (err) {
        logger.error("error closing connection: " + logger.errString(err));
      }
      this.ws = undefined; // DO NOT SET ws TO UNDEFINED ANYWHERE ELSE!
      // it's way easier to reason about this if there aren't loose ws.onclose functions floating around for old connections doing unexpected things
    }

    clearTimeout(this.connectionFailedTimeout);
    this.logDisconnectionStart();
    this._connected = false;
    this.stopHeartbeat();
    this.stopByteTracker();
    this.transactionManager.rejectAllTransactions(
      // Exclude transactions that are currently in `sendQ` (since these will get retried)
      new Set(
        this._sendQ
          .map(({ txnId }) => txnId)
          .filter((txnId): txnId is number => txnId !== undefined),
      ),
      "Transaction failed due to forced reset, likely because the connection failed",
    );
    this._eventCountsSinceOpen = {};
    this.gotFirstMessage = false;
    this.sizeOfNextLargeMessage = 0;
    this.sizeOfLargestMessageReceived = 0;
    this.connectMetrics = {
      gotGameServerUrl: 0,
      gotWsOpen: 0,
      gotReady: 0,
      gotSubscriptionsUpdated: 0,
      gotSpaceSetsIdMapping: 0,
      gotSpaceSetsCapacity: 0,
    };
    this.connectionId = "";

    this.ondisconnect(disconnectInfo?.code, disconnectInfo?.reason);
  }

  get isReconnectScheduled(): boolean {
    return this.reconnectTimeout != null;
  }

  get reconnectionAttempts(): number {
    return this._reconnectionAttempts;
  }

  private reconnectTimeout: TimeoutOrUndefined;
  private _reconnectionAttempts = 0;

  // this function just waits a bit and then starts the connection cycle again
  private cleanUpAndQueueReconnect(disconnectInfo?: DisconnectInfo) {
    this.destroyConnection(disconnectInfo); // if we're going to do a reconnect, the current connection better not exist
    this.trackRefreshFixedConnectionIssue(false); // failed during connection process, if we refreshed recently track the failure to fix dc issue

    // if it's been a while since we had to reconnect and we've been connected recently, reset the attempt count (and thus the backoff)
    const uninterruptedLastFullSyncTime = this.uninterruptedLastFullSyncTime;
    if (
      uninterruptedLastFullSyncTime > 0 &&
      Date.now() > uninterruptedLastFullSyncTime + RESET_RECONNECT_ATTEMPTS_DELAY
    ) {
      this._reconnectionAttempts = 0;
    }
    this.uninterruptedLastFullSyncTime = 0;

    // don't set a new one if we've already got one
    if (this.reconnectTimeout) return;

    const timeSinceLastSignOfLife = Date.now() - this.lastSignOfLife;

    // we can immediately attempt to reconnect on the first attempt without setTimeout, saves ~1sec (unthrottled)
    // if we've previously ever fully connected or this is a dc due to a 1006 (i.e. we didn't fail at fetching GS url)
    const fastReconnect =
      this.isOnline &&
      this._reconnectionAttempts === 0 &&
      (this.hasEverFullyConnected || disconnectInfo?.code === GameWsCloseCode.NO_CLOSE_FRAME);

    // if the connection was closed due to a 1006 or a 1001 with a 'Cloudflare proxy restart' reason
    // and we received something from the GS recently then assume that the GS hasn't been reassigned
    // and try connecting to the same GS immediately.
    // saves the HTTP GS fetch time
    const reuseServerURL =
      fastReconnect &&
      this.hasEverFullyConnected &&
      (disconnectInfo?.code === GameWsCloseCode.NO_CLOSE_FRAME ||
        (disconnectInfo?.code === GameWsCloseCode.GOING_AWAY &&
          disconnectInfo?.reason?.toLowerCase().includes("cloudflare"))) &&
      timeSinceLastSignOfLife < REUSE_SERVERURL_1006_SIGN_OF_LIFE_LIMIT;

    this.onmetric("reconnect-attempt", {
      ...this.getBaseMetricsInfo(),
      attempts: this._reconnectionAttempts,
      hasEverFullyConnected: this.hasEverFullyConnected,
      timeSinceLastSuccessfulFetch: Date.now() - this.lastSuccessfulFetch, // to isolate http vs ws failures
      timeSinceLastSignOfLife, // to isolate spectrum-like failures
      timeSinceLastSuspend: Date.now() - this.lastSuspendDate,
      uninterruptedTimeSinceLastFullSync:
        uninterruptedLastFullSyncTime > 0 ? Date.now() - uninterruptedLastFullSyncTime : null,
      fastReconnect,
      reuseServerURL,
    });

    // Apply exponential backoff with INITIAL_RECONNECT_DELAY on the
    // number of attempts so far as inputs. Do not allow the number to exceed
    // MAX_RECONNECT_DELAY
    let reconnectDelay = Math.min(
      INITIAL_RECONNECT_DELAY * 2 ** this._reconnectionAttempts,
      MAX_RECONNECT_DELAY,
    );
    // Apply some jitter of +/- 25% from the reconnectDelay
    const jitter = 0.25;
    reconnectDelay = reconnectDelay * (1 - jitter + Math.random() * 2 * jitter);
    // But never delay less than INITIAL_RECONNECT_DELAY
    reconnectDelay = Math.max(INITIAL_RECONNECT_DELAY, reconnectDelay);

    logger.checkpoint(
      `queuing reconnect after ${this._reconnectionAttempts} recent attempts, ${reconnectDelay}ms`,
    );
    if (this.isOnline) {
      this._reconnectionAttempts++;
    }

    if (fastReconnect) {
      logger.checkpoint(`fast reconnect`);
      this.createConnection(reuseServerURL);
      return;
    }

    this.reconnectTimeout = setTimeout(() => {
      this.reconnectTimeout = undefined;
      logger.checkpoint("reconnect timer fired, destroying and starting over");
      this.destroyConnection();
      this.createConnection();
    }, reconnectDelay);
  }

  //

  /*** action/event handling ***/

  // enter and exit are special cases of game logic that the Engine has to worry about,
  // since the Engine is supposed to provide the abstraction of a continuous connection,
  // but you need to re-enter each time to connect.
  private wantsToEnter = false;
  private tempInitInfo?: PlayerInitInfo;
  private tempSpawnToken?: string;
  private tempTargetId?: string;
  // we want to call enter exactly once, first thing once the gs is ready.
  // we don't want to call it with the original params after the first time though,
  //   in case the user has changed their outfit or something since joining
  // so: send an enter event if _connected (gs ready), otherwise just save the info and queue it.
  // also: wipe the info after the first time you use it, so you don't use it again next time
  queueOrExecuteEnter(info?: PlayerInitInfo, spawnToken?: string, targetId?: string) {
    this.wantsToEnter = true;

    // save params in case it doesn't work out this time
    if (info) {
      this.tempInitInfo = info;
    }
    if (spawnToken) {
      this.tempSpawnToken = spawnToken;
    }
    if (targetId) {
      this.tempTargetId = targetId;
    }

    if (this._connected) {
      const enterParams: Enter = {};
      if (this.tempInitInfo) {
        enterParams.info = this.tempInitInfo;
      }
      if (this.tempSpawnToken) {
        enterParams.spawnToken = this.tempSpawnToken;
      }
      if (this.tempTargetId) {
        enterParams.targetId = this.tempTargetId;
      }
      this.sendAction({
        $case: "enter",
        enter: enterParams,
      });
      this.tempInitInfo = undefined;
      this.tempSpawnToken = undefined;
      this.tempTargetId = undefined;
    }
  }
  exit(useTxn = false) {
    this.wantsToEnter = false;
    return this.sendAction(
      {
        $case: "exit",
        exit: {},
      },
      false,
      useTxn,
    );
  }

  private processEvent(serverClientEvent: ServerClientEvent) {
    const event = serverClientEvent.event;
    if (!event) {
      logger.error("Nullish server client event; this shouldn't happen! " + serverClientEvent);
      return;
    }
    this._eventCountsSinceOpen[event.$case] = (this._eventCountsSinceOpen[event.$case] ?? 0) + 1;
    try {
      switch (event.$case) {
        case "serverHeartbeat":
          this.sendAction({
            $case: "clientHeartbeat",
            clientHeartbeat: {},
          });
          this._lastRegularHeartbeatSent = Date.now();
          break;
        case "ready":
          this.connectMetrics.gotReady = Date.now();

          this.clientUid = event.ready.id;
          this._connected = true;

          // (for a summary of the init flow, see the top of this file)
          this.subscriptionHook();
          if (this.wantsToEnter) {
            // need to enter first because most future actions will depend
            // on the the player being initialized/pending initialization
            this.queueOrExecuteEnter();
          }

          if (this._sendQ.length >= 20) {
            this.onmetric("large-sendQ", {
              sendQLength: this._sendQ.length,
            });
          }
          this._sendQ.forEach(({ action, txnId }) => {
            if (txnId && !this.transactionManager.isPending(txnId)) {
              logger.warn(
                `dropping action '${action.$case}' because the transaction already expired`,
              );
              return;
            }
            this.sendAction(action, false, false, txnId);
          });
          this._sendQ = [];
          this.numMoveEventsBuffered = 0;
          break;
        case "info":
          logger.log("[info from gs] " + event.info.message);
          break;
        case "warn":
          logger.warn("[warn from gs] " + event.warn.message);
          if (event.warn.message.startsWith(SENDING_LARGE_MESSAGE_WARN)) {
            this.sizeOfNextLargeMessage = parseInt(
              event.warn.message.substring(SENDING_LARGE_MESSAGE_WARN.length),
            );
          }
          break;
        case "error":
          logger.error(`[error from gs] ${event.error.code}: ` + event.error.message);
          // TODO later: do different things with different error codes, when they actually have meanings assigned
          break;
        case "transactionStatus": {
          this.transactionManager.handleTransactionStatusEvent(event.transactionStatus);
          break;
        }
        case "subscriptionsUpdated":
          this.connectMetrics.gotSubscriptionsUpdated = Date.now(); // sent before map data
          break;
        case "spaceSetsIdMapping":
          this.connectMetrics.gotSpaceSetsIdMapping = Date.now(); // sent after map data
          break;
        case "spaceSetsCapacity":
          this.connectMetrics.gotSpaceSetsCapacity = Date.now(); // sent after player data
          break;
      }

      this.onevent(serverClientEvent);
    } catch (e) {
      logger.error(`Failed to process event ${event.$case} with error: ${logger.errString(e)}`);
      this.onmetric("failed-to-process-event", {
        errorMessage: e instanceof Error ? e.message : "Failed to process event",
        eventName: event.$case,
        serverUrl: this.serverURL,
      });
    }
  }

  private _lastActionSentAt = 0; // the time the last action was sent to the server

  /**
   * @returns A promise if createTxnId is true, otherwise nothing.
   */
  sendAction(
    action: ClientServerActionAction,
    bypass: boolean,
    createTxnId: true,
    txnId: undefined,
    txnTimeout?: number,
  ): Promise<unknown>;
  sendAction(
    action: ClientServerActionAction,
    bypass?: boolean,
    createTxnId?: false,
    txnId?: number,
    txnTimeout?: number,
  ): void;
  sendAction(
    action: ClientServerActionAction,
    bypass?: boolean,
    createTxnId?: boolean,
    txnId?: number,
    txnTimeout?: number,
  ): Promise<unknown> | void;
  sendAction(
    action: ClientServerActionAction,
    bypass = false,
    createTxnId = false,
    txnId?: number,
    txnTimeout?: number,
  ): Promise<unknown> | void {
    let transaction;
    logger.debug("New action", action.$case);
    if (createTxnId) {
      transaction = this.transactionManager.addTransaction(txnTimeout);
      logger.debug("Creating new transaction", transaction.txnId);
      txnId = transaction.txnId;
    }
    if (!this._connected && !bypass) {
      // If we're disconnected, drop all active speaker events. Queueing them will flood the
      // server on reconnect, and they're not harmful to drop.
      // Similarly, drop move events after a certain threshold. We should queue these when possible
      // to preserve client prediction, but at some point it's not worth flooding the server that much.
      // There are more harmless events, but these 2 are so common they're probably the only ones that
      // make a difference, so might as well keep the special cases to a minimum.
      if (
        (action.$case === "move" && this.numMoveEventsBuffered >= MAX_BUFFERABLE_MOVE_EVENTS) ||
        action.$case === "activelySpeaking" ||
        action.$case === "interact" || // better to drop these and the person retry on reconnect, can also build up a ton
        action.$case === "interactWithObject" ||
        action.$case === "triggerItem" ||
        action.$case === "triggerObject"
      ) {
        logger.debug(`[Engine] dropping ${action.$case} action because we're not connected`);
        if (txnId !== undefined) {
          this.transactionManager.rejectTransaction(txnId, "Engine is not connected");
        }
      } else {
        this._sendQ.push({ action, txnId });
        if (action.$case === "move") {
          this.numMoveEventsBuffered++;
        }
      }
      return transaction?.txnPromise;
    }
    try {
      const serializedAction = ClientServerAction.encode({
        txnId,
        action,
      }).finish();
      this._bufferedAmounts.push(this.ws?.bufferedAmount ?? 0);
      if (!this.ws) {
        logger.error(`WebSocket not initialized during ${action.$case}, this should never happen!`);
      }
      this.ws?.send(serializedAction);
      this._lastActionSentAt = Date.now();
      this._bytesSentSinceConnect += serializedAction.byteLength;
    } catch (e) {
      if (txnId) {
        this.transactionManager.rejectTransaction(
          txnId,
          e instanceof Error ? e.message : "failed to send action",
        );
      }
      logger.error("websocket send error: " + logger.errString(e));
    }
    return transaction?.txnPromise;
  }

  //

  /*** MONITORING ***/

  private recordHeartbeatTime(time: number) {
    // sample these since there are a lot of them
    if (Math.random() < 0.1) {
      this.onmetric("heartbeat-latency", { value: time, serverUrl: this.serverURL });
    }
    this.latencies.push(time);
  }

  _heartbeatInterval: TimeoutOrUndefined;

  private _lastRegularHeartbeatSent = 0;
  private _lastBackupHeartbeatSent = 0;

  private sendBackupHeartbeat() {
    // measure latency, and actually send the heartbeat
    const start = Date.now();
    this.sendAction({ $case: "clientBackupHeartbeat", clientBackupHeartbeat: {} }, false, true)
      ?.then(() => {
        this.recordHeartbeatTime(Date.now() - start);
      })
      .catch(() => {
        this.recordHeartbeatTime(Date.now() - start);
        this.onmetric("heartbeat-txn-timed-out", { value: 1, serverUrl: this.serverURL });
      });
    this._lastBackupHeartbeatSent = start;
  }

  startHeartbeat() {
    if (this._heartbeatInterval) return;

    this._heartbeatInterval = setInterval(() => {
      this.checkAndHandleSuspend();
      this.sendBackupHeartbeat();

      // check if it's been too long
      if (this.lastSignOfLife < Date.now() - HEARTBEAT_TIMEOUT && this.ws != null) {
        logger.warn(
          `t: ${Date.now() - this.connectionInitTime} : no heartbeat since ${
            this.lastSignOfLife
          }, closing connection`,
        );
        this.onmetric("ws-close-timeout", {
          ...this.getBaseMetricsInfo(),
          lastHeartbeat: this.lastSignOfLife,
          readyState: this.ws.readyState,
          timeSinceLastSuspend: Date.now() - this.lastSuspendDate,
          sizeOfLargestMessageReceived: this.sizeOfLargestMessageReceived,
          ...(this.sizeOfNextLargeMessage && {
            wasWaitingForMessageOfSize: this.sizeOfNextLargeMessage,
          }),
        });
        this.cleanUpAndQueueReconnect({
          code: GameWsCloseCode.CONN_TIMED_OUT,
          reason: `Game Server timed out for ${this.clientUid}. No heartbeat since ${this.lastSignOfLife}`,
        });
        logger.checkpoint("successfully closed ws connection with TIMEOUT code");
      }
    }, HEARTBEAT_INTERVAL);
  }

  stopHeartbeat() {
    clearInterval(this._heartbeatInterval);
    this._heartbeatInterval = undefined;
  }

  private _byteTrackerInterval: TimeoutOrUndefined;
  private _bytesSentSinceConnect = 0;
  private _bytesReceivedSinceConnect = 0;
  private _lastBytesSent = 0;
  private _lastBytesReceived = 0;

  startByteTracker() {
    // track data sent and received for debug
    if (!this._byteTrackerInterval) {
      this._byteTrackerInterval = setInterval(() => {
        // these should never happen -- the gs hasn't sent anything at all for 15 seconds??
        if (this._bytesSentSinceConnect === this._lastBytesSent) {
          logger.warn(
            `warning: bytes sent hasn't changed in the last 15 seconds, currently ${this._lastBytesSent}`,
          );
          this.onmetric("no-bytes-sent-recently", { value: 1, serverUrl: this.serverURL });
        }
        if (this._bytesReceivedSinceConnect === this._lastBytesReceived) {
          logger.warn(
            `warning: bytes received hasn't changed in the last 15 seconds, currently ${this._lastBytesReceived}`,
          );
          this.onmetric("no-bytes-recv-recently", { value: 1, serverUrl: this.serverURL });
        }
        this._lastBytesSent = this._bytesSentSinceConnect;
        this._lastBytesReceived = this._bytesReceivedSinceConnect;
      }, 15000);
    }
  }

  stopByteTracker() {
    clearInterval(this._byteTrackerInterval);
    this._byteTrackerInterval = undefined;
    this._bytesSentSinceConnect = 0;
    this._bytesReceivedSinceConnect = 0;
  }

  // adding this so we can measure what fraction of people are getting disconnected in newrelic.
  // basically just a thing that fires every min so we have a way to count currently connected users from the browser metrics
  private CONNECT_INTENT_POST_INTERVAL = 60 * 1000; // ms // make sure this lines up with how we do the measurement in NR
  private connectIntentInterval: TimeoutOrUndefined;
  private startRecordingIntentToConnect() {
    const both = () => ({
      ...this.getBaseMetricsInfo(),
      serverUrl: this.serverURL,
      connected: this._connected,
      online: this.isOnline,
      timeSinceLastSuspend: Date.now() - this.lastSuspendDate,
    });
    this.onmetric("intend-to-be-connected", {
      ...both(),
      first: true,
    });
    this.connectIntentInterval = setInterval(
      () =>
        this.onmetric("intend-to-be-connected", {
          ...both(),
        }),
      this.CONNECT_INTENT_POST_INTERVAL,
    );
  }
  private stopRecordingIntentToConnect() {
    clearInterval(this.connectIntentInterval);
  }

  private trackRefreshFixedConnectionIssue(fixed: boolean) {
    if (!this.preRefreshDcData) return;
    try {
      this.onmetric("refresh-fixed-connection", {
        ...this.getBaseMetricsInfo(),
        value: fixed,
        history: this.preRefreshDcData.history,
        attemptsBeforeRefresh: this.preRefreshDcData.attempts,
        hasEverFullyConnectedBeforeRefresh: this.preRefreshDcData.hasEverFullyConnected,
        timeSinceDisconnectBeforeRefresh: this.preRefreshDcData.timeSinceDisconnect,
        timeSinceUnload: Date.now() - this.preRefreshDcData.timestamp,
        timeSinceStart: Date.now() - this.startTime,
      });
    } catch {
      // invalid pre-refresh data in JSON?
    }
    this.clearUnloadDcState();
  }

  // this bit measures how bad disconnections are
  // - a disconnection is defined as the time between when you first get disconnected to when you've successfully re-synced (end of updateSubscriptions)
  // - each disconnection results in exactly one "dc-length" metric (if they don't refresh)
  // - each disconnection results in exactly one "dc-length" with preTimeout: true OR one "dc-at-least-${this.LOG_THRESH_MS}-ms"
  //   (if they don't refresh in the first LOG_THRESH_MS ms)
  // The latter is so we can worry less about people refreshing and know
  // what fraction of people have a "bad" experience during a deploy vs an acceptable one
  LOG_THRESH_MS = 10000;
  private uninterruptedLastFullSyncTime = 0;
  private hasEverFullyConnected = false;
  private disconnectedStartTime = 0;
  private dcLogTimeout: TimeoutOrUndefined;
  // ^use this timeout to make sure we measure the long tail of people who never reconnect, or refresh too quickly

  logDisconnectionStart() {
    if (!this.hasEverFullyConnected || this.disconnectedStartTime) {
      // the disconnection started earlier, so don't reset the tracking now
      // have to include hasEverFullyConnected to avoid counting the case when they've never successfully connected (muddies this metric)
      return;
    }
    this.disconnectedStartTime = Date.now();
    this.dcLogTimeout = setTimeout(() => {
      this.dcLogTimeout = undefined;
      this.onmetric(`dc-at-least-${this.LOG_THRESH_MS}-ms`, {
        ...this.getBaseMetricsInfo(),
        timeSinceLastSuspend: Date.now() - this.lastSuspendDate, // if recent, idk stuff could still be warming back up, ignore probably
        timeSinceLastSignOfLife: Date.now() - this.lastSignOfLife, // if recent, maybe opened ws but then got dc'ed
        timeSinceLastSuccessfulFetch: Date.now() - this.lastSuccessfulFetch, // if >10s, no successful fetch yet this dc cycle
        history: logger.exportHistory().slice(-700),
      });
    }, this.LOG_THRESH_MS);
  }

  // called when we've successfully received the initial batch of data from first subscribing
  logInitialSyncComplete(isPartialSubscribe: boolean) {
    logger.checkpoint(
      `t: ${Date.now() - this.connectionInitTime} : successfully${
        isPartialSubscribe ? " partially" : ""
      } subscribed and re-synced`,
    );
    if (!this.hasEverFullyConnected && !isPartialSubscribe) {
      // ignore guest connections, they're only partial syncs, throw off the data
      this.onmetric("time-to-first-full-sync", {
        ...this.getBaseMetricsInfo(),
        ms: Date.now() - this.startTime,
      });
    }
    if (!isPartialSubscribe) {
      const {
        gotGameServerUrl,
        gotWsOpen,
        gotReady,
        gotSubscriptionsUpdated,
        gotSpaceSetsIdMapping,
        gotSpaceSetsCapacity,
      } = this.connectMetrics;

      // if no players are connected then `spaceSetsIdMapping` is not sent
      const mapDataEndTime = gotSpaceSetsIdMapping ? gotSpaceSetsIdMapping : gotSpaceSetsCapacity;

      this.onmetric("time-to-sync", {
        ...this.getBaseMetricsInfo(),
        hasEverFullyConnected: this.hasEverFullyConnected,
        timeSinceLastSuspend: Date.now() - this.lastSuspendDate,
        reconnectAttempts: this._reconnectionAttempts,
        // when disconnect started or when 'start' was called, time spent waiting or in unsuccessful reconnect attempts
        timeBeforeConnectionInit:
          this.connectionInitTime -
          (this.disconnectedStartTime ? this.disconnectedStartTime : this.startTime),
        // metrics for the last successful reconnect attempt that resulted in this full sync
        timeToGetGameServerUrl: gotGameServerUrl - this.connectionInitTime,
        timeToOpenWs: gotWsOpen - gotGameServerUrl,
        timeToGetReady: gotReady - gotWsOpen,
        timeToGetSubscriptions: gotSubscriptionsUpdated - gotReady,
        timeToGetMaps: mapDataEndTime - gotSubscriptionsUpdated,
        timeToGetPlayers: gotSpaceSetsCapacity - mapDataEndTime,
        timeSinceConnectionInitTime: Date.now() - this.connectionInitTime,
      });
    }

    this.hasEverFullyConnected = true;
    this.uninterruptedLastFullSyncTime = Date.now();

    if (this.disconnectedStartTime) {
      this.onmetric("dc-length", {
        ...this.getBaseMetricsInfo(),
        ms: Date.now() - this.disconnectedStartTime,
        [`preTimeout${this.LOG_THRESH_MS}`]: !!this.dcLogTimeout,
        timeSinceLastSuspend: Date.now() - this.lastSuspendDate,
      });

      // also separately, update this for the stats
      this._timeSpentDisconnected.push(Date.now() - this.disconnectedStartTime);
    }
    // reset dc start since we're no longer disconnected
    this.resetDisconnectionTracking();
    this.trackRefreshFixedConnectionIssue(true);
  }

  resetDisconnectionTracking() {
    this.disconnectedStartTime = 0;
    if (this.dcLogTimeout) {
      clearTimeout(this.dcLogTimeout);
      this.dcLogTimeout = undefined;
    }
    if (this.uploadLogTimeout) {
      clearTimeout(this.uploadLogTimeout);
      this.uploadLogTimeout = undefined;
    }
    if (this.uploadLogTimeoutLong) {
      clearTimeout(this.uploadLogTimeoutLong);
      this.uploadLogTimeoutLong = undefined;
    }
  }

  // If connection time exceeds a threshold, auto-publish the recent debug history, so we can look at it.
  // We're interested in two lengths:
  // - the short one is lots of data, tells us what's common
  // - the long one is people with persistent issues or permanent failures
  queueDebugUpload() {
    if (process.env.ENVIRONMENT === "test") return; // just to avoid using axios -- metrics wouldn't have been posted anyways
    const uploadDebug = async (metricName: string) => {
      const testId = uuid();
      this.onmetric(metricName, {
        ...this.getBaseMetricsInfo(),
        history: logger.exportHistory().slice(-5000),
        hasEverFullyConnected: this.hasEverFullyConnected,
        openAndGettingData: this.gotFirstMessage, // gets reset on dc
        testId,
        timeSinceLastSuccessfulFetch: Date.now() - this.lastSuccessfulFetch,
      });
      logger.checkpoint(`starting test: ${testId}`);
      // also start a connection test, so we can see if it's just us that's the problem.
      // don't want to risk waiting for it, so instead just attach a testId to both to correlate after the fact
      const testResult = await testConnection(this.serverURL, testId);
      logger.checkpoint(
        `test ${testId} result just came back: ` +
          Object.entries(testResult).map((l) => l.join(":")), // logs it like a:5,b:6,etc
      );
      this.onmetric("engine-network-test", {
        ...testResult,
        testId,
        serverUrl: this.serverURL,
      });
    };

    if (!this.uploadLogTimeout) {
      this.uploadLogTimeout = setTimeout(() => {
        uploadDebug("31s-to-connect");
      }, 31000);
    }
    if (!this.uploadLogTimeoutLong) {
      this.uploadLogTimeoutLong = setTimeout(() => {
        uploadDebug("120s-to-connect");
      }, 120000);
    }
  }

  // the reasoning here is that the only thing that would cause us to not call this function for a while
  // (besides catastrophically thread-blocking perf, or changing their system clock -- both rare)
  // is if the code just wasn't running for a while, in which case there's definitely a disconnection, and we shouldn't be alarmed
  private lastSuspendCheck = 0; // Date.now()
  private suspendCheckInterval: TimeoutOrUndefined;
  private lastSuspendDate = 0;

  checkAndHandleSuspend() {
    const timeSinceLastCheck = Date.now() - this.lastSuspendCheck;
    this.lastSuspendCheck = Date.now();

    if (timeSinceLastCheck < CONSIDERED_SUSPEND_DELAY) {
      // not a suspend
      return;
    }

    logger.warn(`resume from suspend detected, ${timeSinceLastCheck}ms elapsed`);
    this.lastSuspendDate = Date.now();

    // make sure this doesn't mess up our metrics
    this.resetDisconnectionTracking();
  }

  startSuspendCheck() {
    this.lastSuspendCheck = Date.now();
    this.suspendCheckInterval = setInterval(
      () => this.checkAndHandleSuspend(),
      SUSPEND_CHECK_DELAY,
    );
  }

  stopSuspendCheck() {
    clearInterval(this.suspendCheckInterval);
  }

  //

  /*** UTILS  ***/

  getBaseMetricsInfo() {
    return {
      serverUrl: this.serverURL,
      connectionId: this.connectionId,
      // A/B tests go here
    };
  }

  /**
   * Returns the serverURL for the spaceId or null in case of timeout/error
   */
  private async getGameServerUrl(signal: AbortSignal): Promise<string | null> {
    if (this.debugOverrideServer) return this.debugOverrideServer;

    let fetchTooSlowTimeout: ReturnType<typeof setTimeout> | undefined;
    try {
      // This request can take an unbounded amount of time, and we don't want to have to reason about old,
      // slow to surface errors, so just we just cancel it if it's been too long.
      // axios's built in timeouts are insufficient so we have to manually cancel them instead
      // (see https://stackoverflow.com/a/54573024/7343159)
      // TODO: when AbortSignal.timeout is supported everywhere use that instead of manually creating a timeout
      const timeoutController = new AbortController();
      fetchTooSlowTimeout = setTimeout(
        () => timeoutController.abort(new Error(`gs fetch timed out`)),
        MAX_WAIT_FOR_CONNECTION * 0.66,
      );
      const cancelSignal = anySignal([signal, timeoutController.signal]);
      return await fetchGameServerAssignment(
        cancelSignal,
        this.spaceId,
        this.debugOverrideHttpServer,
      );
    } catch (e) {
      // in case someone called `engine.stop()` while we were waiting for that request
      if (!this.started) return null;
      const message = e && typeof e === "object" && "message" in e ? e.message : "";
      let failedStatus;
      if (e instanceof ClientError) {
        failedStatus = e.code;
      }
      logger.warn(`failed to fetch gameserver assignment: ${message}`);
      const online = this.isOnline;
      if (!online) {
        logger.checkpoint("User is offline, retrying connection...");
      }
      this.onmetric("gs-assignment-failed", {
        space: this.spaceId,
        attempts: this._reconnectionAttempts,
        online,
        failedStatus,
        errorMessage: message,
        timeSinceLastSuspend: Date.now() - this.lastSuspendDate,
      });
      return null;
    } finally {
      clearTimeout(fetchTooSlowTimeout);
    }
  }

  getMetrics() {
    return {
      connected: this._connected,
      latency: this.latencies.getMetrics(),
      reconnects: {
        recentAttempts: this._reconnectionAttempts,
        timeSpentDisconnectedMs: this._timeSpentDisconnected.getMetrics(),
      },
      bufferedAmount: this._bufferedAmounts.getMetrics(),
      bytesSentSinceConnect: this._bytesSentSinceConnect,
      bytesReceivedSinceConnect: this._bytesReceivedSinceConnect,
      eventCountsSinceOpen: this._eventCountsSinceOpen,
      closeCodeCount: this._closeCounts,
    };
  }

  redirectToProdIfOnProdServer() {
    if (
      isBrowser &&
      // technically this isn't a sufficiently tight check for if they're not on prod, but we only have this problem with staging,
      // and I don't want to leave a land mine here making it too easy to refresh-loop everyone on prod
      window.location.hostname === "app.staging.gather.town" &&
      this.serverURL.match(/(engine-.+\.prod\.do\.)/)
    ) {
      this.stop();
      window.location.href = "https://app.gather.town" + window.location.pathname;
    }
  }
}
