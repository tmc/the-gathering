"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
const uuid_1 = require("uuid");
const events_1 = require("@gathertown/gather-game-common/dist/src/public/events");
const responseCodes_1 = require("@gathertown/gather-game-common/dist/src/public/responseCodes");
const Logger_1 = require("./Logger");
const TransactionManager_1 = require("./TransactionManager");
const Utils_1 = require("./Utils");
const Error_1 = require("./Error");
const config_1 = require("./config");
const HEARTBEAT_INTERVAL = 10000;
const HEARTBEAT_TIMEOUT = 30000;
const INITIAL_RECONNECT_DELAY = 1000;
const MAX_RECONNECT_DELAY = 30000;
const RESET_RECONNECT_ATTEMPTS_DELAY = 30000;
const MAX_WAIT_FOR_CONNECTION = 45000;
const SUSPEND_CHECK_DELAY = 3000;
const CONSIDERED_SUSPEND_DELAY = 10000;
const REUSE_SERVERURL_1006_SIGN_OF_LIFE_LIMIT = 5000;
const SENDING_LARGE_MESSAGE_WARN = "sending large message:";
const MAX_BUFFERABLE_MOVE_EVENTS = 10;
const SINCE_START_UNLOAD_DELAY = 12000;
const CONSIDERED_REFRESH_DELAY = 30000;
const LOCAL_STORAGE_UNLOAD_DC_DATA_KEY_NAME = "engine-unload-dc-data";
class Engine {
    onevent(_e) { }
    onconnect() { }
    ondisconnect(_code, _reason) { }
    onmetric(_metricName, _metricValue) { }
    subscriptionHook() { }
    constructor(spaceId, getAuth, overrideServer, overrideHttpServer) {
        this.serverURL = "";
        this.started = false;
        this.startTime = 0;
        this._connected = false;
        this.connectionInitTime = 0;
        this.gotFirstMessage = false;
        this.sizeOfNextLargeMessage = 0;
        this.sizeOfLargestMessageReceived = 0;
        this._sendQ = [];
        this.numMoveEventsBuffered = 0;
        this.transactionManager = new TransactionManager_1.TransactionManager();
        this.lastSignOfLife = 0;
        this.abortConnectionAttempt = () => { };
        this.lastSuccessfulFetch = 0;
        this._bufferedAmounts = new Utils_1.SlidingWindow(10);
        this.latencies = new Utils_1.SlidingWindow(10);
        this._timeSpentDisconnected = new Utils_1.SlidingWindow(10);
        this._eventCountsSinceOpen = {};
        this._closeCounts = {};
        this.connectMetrics = {
            gotGameServerUrl: 0,
            gotWsOpen: 0,
            gotReady: 0,
            gotSubscriptionsUpdated: 0,
            gotSpaceSetsIdMapping: 0,
            gotSpaceSetsCapacity: 0,
        };
        this.userIdForABTest = "";
        this.preRefreshDcData = undefined;
        this.connectionId = "";
        this._reconnectionAttempts = 0;
        this.wantsToEnter = false;
        this._lastActionSentAt = 0;
        this._lastRegularHeartbeatSent = 0;
        this._lastBackupHeartbeatSent = 0;
        this._bytesSentSinceConnect = 0;
        this._bytesReceivedSinceConnect = 0;
        this._lastBytesSent = 0;
        this._lastBytesReceived = 0;
        this.CONNECT_INTENT_POST_INTERVAL = 60 * 1000;
        this.LOG_THRESH_MS = 10000;
        this.uninterruptedLastFullSyncTime = 0;
        this.hasEverFullyConnected = false;
        this.disconnectedStartTime = 0;
        this.lastSuspendCheck = 0;
        this.lastSuspendDate = 0;
        this.getAuth = getAuth;
        this.spaceId = spaceId;
        this.debugOverrideServer = overrideServer;
        this.debugOverrideHttpServer = overrideHttpServer;
        if (config_1.isBrowser) {
            window.addEventListener("beforeunload", () => {
                this.saveUnloadDcState();
                this.stop();
            });
            const globalUserId = window["userIdForEngineABTestHack_DoNotUse"];
            this.userIdForABTest = typeof globalUserId === "string" ? globalUserId : "";
            this.loadUnloadDcState();
        }
    }
    saveUnloadDcState() {
        if (!this.started || this._connected)
            return;
        const dcLength = Date.now() - (this.disconnectedStartTime || this.startTime);
        if (dcLength < SINCE_START_UNLOAD_DELAY)
            return;
        try {
            const data = {
                timestamp: Date.now(),
                history: Logger_1.logger.exportHistory().slice(-5000),
                hasEverFullyConnected: this.hasEverFullyConnected,
                timeSinceDisconnect: dcLength,
                attempts: this._reconnectionAttempts,
            };
            window.localStorage.setItem(LOCAL_STORAGE_UNLOAD_DC_DATA_KEY_NAME, JSON.stringify(data));
        }
        catch {
        }
    }
    loadUnloadDcState() {
        try {
            const json = window.localStorage.getItem(LOCAL_STORAGE_UNLOAD_DC_DATA_KEY_NAME);
            if (!json)
                return;
            const data = JSON.parse(json);
            if (!data?.timestamp)
                return;
            const timeSinceLastUnload = Date.now() - (data.timestamp || 0);
            if (timeSinceLastUnload > CONSIDERED_REFRESH_DELAY)
                return;
            this.preRefreshDcData = data;
        }
        catch {
        }
    }
    clearUnloadDcState() {
        try {
            this.preRefreshDcData = undefined;
            window.localStorage.removeItem(LOCAL_STORAGE_UNLOAD_DC_DATA_KEY_NAME);
        }
        catch {
        }
    }
    start() {
        if (this.started) {
            Logger_1.logger.warn("already started");
            return;
        }
        this.started = true;
        this.startTime = Date.now();
        this.createConnection();
        this.startRecordingIntentToConnect();
        this.startSuspendCheck();
    }
    stop(disconnectInfo) {
        this.destroyConnection(disconnectInfo ?? {
            code: responseCodes_1.GameWsCloseCode.NORMAL_CLOSURE,
            reason: "Game client disconnecting normally",
        });
        this.stopRecordingIntentToConnect();
        this.stopSuspendCheck();
        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout);
        }
        this.resetDisconnectionTracking();
        this.started = false;
    }
    get isOnline() {
        return config_1.isBrowser ? window?.navigator?.onLine ?? true : true;
    }
    async getAuthWithAbort(signal) {
        try {
            return await (0, Utils_1.abortable)(this.getAuth(), signal);
        }
        catch (e) {
            const message = e && typeof e === "object" && "message" in e ? e.message : "";
            Logger_1.logger.warn(`failed to get auth: ${message}`);
            return null;
        }
    }
    async createConnection(reuseServerURL = false) {
        if (this.ws) {
            Logger_1.logger.error("createConnection called, but connection already exists");
            return;
        }
        this.connectionInitTime = Date.now();
        Logger_1.logger.checkpoint(`creating a new connection at t = ${this.connectionInitTime}`);
        this.queueDebugUpload();
        const aborter = new AbortController();
        const isAttemptAborted = () => aborter.signal.aborted;
        this.abortConnectionAttempt = () => aborter.abort(new Error("Connection attempt aborted"));
        this.connectionFailedTimeout = setTimeout(() => {
            Logger_1.logger.warn(`t: ${Date.now() - this.connectionInitTime} : didn't get a ws.onopen for ${MAX_WAIT_FOR_CONNECTION}ms after creating connection. destroying and trying again. connectionId: ${this.connectionId}`);
            this.onmetric("create-connection-timeout", {
                ...this.getBaseMetricsInfo(),
                space: this.spaceId,
                attempts: this._reconnectionAttempts,
                serverURL: this.serverURL,
            });
            this.cleanUpAndQueueReconnect();
        }, MAX_WAIT_FOR_CONNECTION);
        if (!reuseServerURL || !this.serverURL) {
            const serverURL = await this.getGameServerUrl(aborter.signal);
            if (isAttemptAborted())
                return;
            if (serverURL) {
                this.serverURL = serverURL;
                this.redirectToProdIfOnProdServer();
            }
            else {
                this.serverURL = "";
                this.cleanUpAndQueueReconnect();
                return;
            }
        }
        this.connectMetrics.gotGameServerUrl = Date.now();
        Logger_1.logger.checkpoint(`t: ${Date.now() - this.connectionInitTime} : got game server url: ${this.serverURL}`);
        this.lastSuccessfulFetch = Date.now();
        const auth = await this.getAuthWithAbort(aborter.signal);
        if (!auth) {
            if (!isAttemptAborted()) {
                this.cleanUpAndQueueReconnect();
            }
            return;
        }
        Logger_1.logger.checkpoint(`t: ${Date.now() - this.connectionInitTime} : got auth`);
        this.connectionId = (0, uuid_1.v4)();
        try {
            this.ws = new WebSocket(this.serverURL + `?connectionId=${this.connectionId}`, "gather-v2");
        }
        catch (e) {
            Logger_1.logger.warn(`Failed to create websocket object with gameserver ${this.serverURL} : ${Logger_1.logger.errString(e)}`);
            this.cleanUpAndQueueReconnect();
            return;
        }
        this.ws.binaryType = "arraybuffer";
        let timeConnectionOpened = 0;
        this.ws.onopen = () => {
            Logger_1.logger.checkpoint(`t: ${Date.now() - this.connectionInitTime} : ws connection opened`);
            this.lastSignOfLife = timeConnectionOpened = Date.now();
            this.connectMetrics.gotWsOpen = Date.now();
            clearTimeout(this.connectionFailedTimeout);
            this.startByteTracker();
            this.sendAction({
                $case: "init",
                init: {
                    spaceId: this.spaceId,
                    auth: "token" in auth
                        ? { $case: "token", token: auth.token }
                        : { $case: "apiKey", apiKey: auth.apiKey },
                },
            }, true);
            this.startHeartbeat();
            this.onconnect();
        };
        this.ws.onmessage = (msg) => {
            if (!this.gotFirstMessage) {
                const connectionInitTime = Date.now() - this.connectionInitTime;
                Logger_1.logger.checkpoint(`t: ${connectionInitTime} : got first message`);
                this.onmetric("connection_init_time", {
                    ...this.getBaseMetricsInfo(),
                    space: this.spaceId,
                    attempts: this._reconnectionAttempts,
                    value: connectionInitTime,
                });
                this.gotFirstMessage = true;
            }
            this._bytesReceivedSinceConnect += msg.data.byteLength;
            this.sizeOfLargestMessageReceived = Math.max(this.sizeOfLargestMessageReceived, msg.data.byteLength);
            this.lastSignOfLife = Date.now();
            this.sizeOfNextLargeMessage = 0;
            try {
                const data = new Uint8Array(msg.data);
                const { events } = events_1.ServerClientBatch.decode(data);
                events.forEach((event) => this.processEvent(event));
                const hasSentRegularHeartbeatRecently = Date.now() - this._lastRegularHeartbeatSent < HEARTBEAT_INTERVAL;
                const hasSentBackupHeartbeatRecently = Date.now() - this._lastBackupHeartbeatSent < HEARTBEAT_INTERVAL;
                if (this._connected &&
                    !hasSentRegularHeartbeatRecently &&
                    !hasSentBackupHeartbeatRecently) {
                    this.sendBackupHeartbeat();
                }
            }
            catch (e) {
                Logger_1.logger.error(`unexpected error in ws.onmessage, maybe decode?: ${Logger_1.logger.errString(e)}`);
            }
        };
        this.ws.onclose = (event) => {
            this.checkAndHandleSuspend();
            this.onmetric(`client_ws_close_code_${event.code}`, {
                ...this.getBaseMetricsInfo(),
                value: event.reason,
                wasClean: event.wasClean,
                bytesReceivedSinceConnect: this._bytesReceivedSinceConnect,
                timeSinceConnectionOpened: timeConnectionOpened > 0 ? Date.now() - timeConnectionOpened : null,
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
            Logger_1.logger.checkpoint(`t: ${Date.now() - this.connectionInitTime} : onclose. last sign of life was ${this.lastSignOfLife ? Date.now() - this.lastSignOfLife + "ms ago" : "never"}. wasClean: ${event.wasClean}`);
            const disconnectInfo = { code: event.code, reason: event.reason };
            switch (event.code) {
                case responseCodes_1.GameWsCloseCode.SPACE_CLOSED:
                    Logger_1.logger.warn("Space is closed: " + event.reason);
                    if (config_1.isBrowser) {
                        window.location.reload();
                    }
                    this.stop(disconnectInfo);
                    break;
                case responseCodes_1.GameWsCloseCode.SPACE_AT_CAPACITY:
                    Logger_1.logger.warn("Space is currently at capacity, please try again later: " + event.reason);
                    this.stop(disconnectInfo);
                    break;
                case responseCodes_1.GameWsCloseCode.PROTOCOL_ERROR:
                    Logger_1.logger.error("ws closed: protocol error. " + event.reason);
                    if (config_1.isBrowser) {
                        window.location.reload();
                    }
                    this.stop(disconnectInfo);
                    break;
                case responseCodes_1.GameWsCloseCode.INTERNAL_ERROR:
                    Logger_1.logger.error("connection closed due to internal server error: " + event.reason);
                    if (config_1.isBrowser) {
                        window.location.reload();
                    }
                    this.cleanUpAndQueueReconnect(disconnectInfo);
                    break;
                case responseCodes_1.GameWsCloseCode.CLIENT_KICKED:
                    Logger_1.logger.warn("connection closed due to client being kicked: " + event.reason);
                    if (config_1.isBrowser) {
                        window.location.reload();
                    }
                    this.cleanUpAndQueueReconnect(disconnectInfo);
                    break;
                case responseCodes_1.GameWsCloseCode.UNAUTHORIZED:
                    Logger_1.logger.warn("connection closed because user does not have access: " + event.reason);
                    if (config_1.isBrowser) {
                        window.location.reload();
                    }
                    this.stop(disconnectInfo);
                    break;
                case responseCodes_1.GameWsCloseCode.CONN_TIMED_OUT:
                    Logger_1.logger.warn("connection timed out: " + event.reason);
                    this.cleanUpAndQueueReconnect(disconnectInfo);
                    break;
                case responseCodes_1.GameWsCloseCode.NO_STATUS_RECEIVED:
                    Logger_1.logger.warn("connection closed unexpectedly with no status: " + Logger_1.logger.errString(disconnectInfo));
                    this.cleanUpAndQueueReconnect(disconnectInfo);
                    break;
                case responseCodes_1.GameWsCloseCode.GOING_AWAY:
                    Logger_1.logger.warn("connection closed with code 1001 GOING_AWAY - " + event.reason);
                    this.cleanUpAndQueueReconnect(disconnectInfo);
                    break;
                case responseCodes_1.GameWsCloseCode.SPACE_REASSIGNED:
                    Logger_1.logger.warn("connection closed with code 4009 SPACE_REASSIGNED - " + event.reason);
                    this.cleanUpAndQueueReconnect(disconnectInfo);
                    break;
                case responseCodes_1.GameWsCloseCode.NO_CLOSE_FRAME:
                    Logger_1.logger.warn(`connection closed unexpectedly (${event.code}: ${event.reason})`);
                    this.cleanUpAndQueueReconnect(disconnectInfo);
                    break;
                case responseCodes_1.GameWsCloseCode.NONFATAL_INTERNAL_ERROR:
                    Logger_1.logger.warn(`unknown nonfatal internal error (${event.code}: ${event.reason})`);
                    this.cleanUpAndQueueReconnect(disconnectInfo);
                    break;
                default:
                    Logger_1.logger.error(`connection closed with unrecognized non-default code ${event.code}: ${event.reason}`);
                    this.cleanUpAndQueueReconnect(disconnectInfo);
            }
        };
        this.ws.onerror = (e) => {
            Logger_1.logger.warn(`ws.onerror in Engine: ${Logger_1.logger.errString(e)}`);
            this.onmetric(`ws error`, {
                ...this.getBaseMetricsInfo(),
                error: e,
                timeSinceConnectionOpened: timeConnectionOpened > 0 ? Date.now() - timeConnectionOpened : null,
                timeSinceLastSuspend: Date.now() - this.lastSuspendDate,
                timeSinceLastSignOfLife: Date.now() - this.lastSignOfLife,
                sizeOfLargestMessageReceived: this.sizeOfLargestMessageReceived,
                ...(this.sizeOfNextLargeMessage && {
                    wasWaitingForMessageOfSize: this.sizeOfNextLargeMessage,
                }),
            });
        };
    }
    destroyConnection(disconnectInfo) {
        this.checkAndHandleSuspend();
        Logger_1.logger.checkpoint(`t: ${Date.now() - this.connectionInitTime} : destroying connection`);
        this.abortConnectionAttempt();
        if (this.ws) {
            this.onmetric(`client_ws_destroy`, {
                ...this.getBaseMetricsInfo(),
                ...(disconnectInfo?.code && { closeCode: disconnectInfo?.code }),
                timeSinceLastSignOfLife: Date.now() - this.lastSignOfLife,
                sizeOfLargestMessageReceived: this.sizeOfLargestMessageReceived,
            });
            this.ws.onopen = () => { };
            this.ws.onclose = () => { };
            this.ws.onmessage = () => { };
            this.ws.onerror = () => { };
            try {
                const disconnectInfoCode = disconnectInfo?.code ?? 0;
                if (disconnectInfoCode >= 4000 || disconnectInfoCode === responseCodes_1.GameWsCloseCode.NORMAL_CLOSURE) {
                    this.ws.close(disconnectInfo?.code, disconnectInfo?.reason);
                }
                else {
                    this.ws.close();
                }
            }
            catch (err) {
                Logger_1.logger.error("error closing connection: " + Logger_1.logger.errString(err));
            }
            this.ws = undefined;
        }
        clearTimeout(this.connectionFailedTimeout);
        this.logDisconnectionStart();
        this._connected = false;
        this.stopHeartbeat();
        this.stopByteTracker();
        this.transactionManager.rejectAllTransactions(new Set(this._sendQ
            .map(({ txnId }) => txnId)
            .filter((txnId) => txnId !== undefined)), "Transaction failed due to forced reset, likely because the connection failed");
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
    get isReconnectScheduled() {
        return this.reconnectTimeout != null;
    }
    get reconnectionAttempts() {
        return this._reconnectionAttempts;
    }
    cleanUpAndQueueReconnect(disconnectInfo) {
        this.destroyConnection(disconnectInfo);
        this.trackRefreshFixedConnectionIssue(false);
        const uninterruptedLastFullSyncTime = this.uninterruptedLastFullSyncTime;
        if (uninterruptedLastFullSyncTime > 0 &&
            Date.now() > uninterruptedLastFullSyncTime + RESET_RECONNECT_ATTEMPTS_DELAY) {
            this._reconnectionAttempts = 0;
        }
        this.uninterruptedLastFullSyncTime = 0;
        if (this.reconnectTimeout)
            return;
        const timeSinceLastSignOfLife = Date.now() - this.lastSignOfLife;
        const fastReconnect = this.isOnline &&
            this._reconnectionAttempts === 0 &&
            (this.hasEverFullyConnected || disconnectInfo?.code === responseCodes_1.GameWsCloseCode.NO_CLOSE_FRAME);
        const reuseServerURL = fastReconnect &&
            this.hasEverFullyConnected &&
            (disconnectInfo?.code === responseCodes_1.GameWsCloseCode.NO_CLOSE_FRAME ||
                (disconnectInfo?.code === responseCodes_1.GameWsCloseCode.GOING_AWAY &&
                    disconnectInfo?.reason?.toLowerCase().includes("cloudflare"))) &&
            timeSinceLastSignOfLife < REUSE_SERVERURL_1006_SIGN_OF_LIFE_LIMIT;
        this.onmetric("reconnect-attempt", {
            ...this.getBaseMetricsInfo(),
            attempts: this._reconnectionAttempts,
            hasEverFullyConnected: this.hasEverFullyConnected,
            timeSinceLastSuccessfulFetch: Date.now() - this.lastSuccessfulFetch,
            timeSinceLastSignOfLife,
            timeSinceLastSuspend: Date.now() - this.lastSuspendDate,
            uninterruptedTimeSinceLastFullSync: uninterruptedLastFullSyncTime > 0 ? Date.now() - uninterruptedLastFullSyncTime : null,
            fastReconnect,
            reuseServerURL,
        });
        let reconnectDelay = Math.min(INITIAL_RECONNECT_DELAY * 2 ** this._reconnectionAttempts, MAX_RECONNECT_DELAY);
        const jitter = 0.25;
        reconnectDelay = reconnectDelay * (1 - jitter + Math.random() * 2 * jitter);
        reconnectDelay = Math.max(INITIAL_RECONNECT_DELAY, reconnectDelay);
        Logger_1.logger.checkpoint(`queuing reconnect after ${this._reconnectionAttempts} recent attempts, ${reconnectDelay}ms`);
        if (this.isOnline) {
            this._reconnectionAttempts++;
        }
        if (fastReconnect) {
            Logger_1.logger.checkpoint(`fast reconnect`);
            this.createConnection(reuseServerURL);
            return;
        }
        this.reconnectTimeout = setTimeout(() => {
            this.reconnectTimeout = undefined;
            Logger_1.logger.checkpoint("reconnect timer fired, destroying and starting over");
            this.destroyConnection();
            this.createConnection();
        }, reconnectDelay);
    }
    queueOrExecuteEnter(info, spawnToken, targetId) {
        this.wantsToEnter = true;
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
            const enterParams = {};
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
        return this.sendAction({
            $case: "exit",
            exit: {},
        }, false, useTxn);
    }
    processEvent(serverClientEvent) {
        const event = serverClientEvent.event;
        if (!event) {
            Logger_1.logger.error("Nullish server client event; this shouldn't happen! " + serverClientEvent);
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
                    this.subscriptionHook();
                    if (this.wantsToEnter) {
                        this.queueOrExecuteEnter();
                    }
                    if (this._sendQ.length >= 20) {
                        this.onmetric("large-sendQ", {
                            sendQLength: this._sendQ.length,
                        });
                    }
                    this._sendQ.forEach(({ action, txnId }) => {
                        if (txnId && !this.transactionManager.isPending(txnId)) {
                            Logger_1.logger.warn(`dropping action '${action.$case}' because the transaction already expired`);
                            return;
                        }
                        this.sendAction(action, false, false, txnId);
                    });
                    this._sendQ = [];
                    this.numMoveEventsBuffered = 0;
                    break;
                case "info":
                    Logger_1.logger.log("[info from gs] " + event.info.message);
                    break;
                case "warn":
                    Logger_1.logger.warn("[warn from gs] " + event.warn.message);
                    if (event.warn.message.startsWith(SENDING_LARGE_MESSAGE_WARN)) {
                        this.sizeOfNextLargeMessage = parseInt(event.warn.message.substring(SENDING_LARGE_MESSAGE_WARN.length));
                    }
                    break;
                case "error":
                    Logger_1.logger.error(`[error from gs] ${event.error.code}: ` + event.error.message);
                    break;
                case "transactionStatus": {
                    this.transactionManager.handleTransactionStatusEvent(event.transactionStatus);
                    break;
                }
                case "subscriptionsUpdated":
                    this.connectMetrics.gotSubscriptionsUpdated = Date.now();
                    break;
                case "spaceSetsIdMapping":
                    this.connectMetrics.gotSpaceSetsIdMapping = Date.now();
                    break;
                case "spaceSetsCapacity":
                    this.connectMetrics.gotSpaceSetsCapacity = Date.now();
                    break;
            }
            this.onevent(serverClientEvent);
        }
        catch (e) {
            Logger_1.logger.error(`Failed to process event ${event.$case} with error: ${Logger_1.logger.errString(e)}`);
            this.onmetric("failed-to-process-event", {
                errorMessage: e instanceof Error ? e.message : "Failed to process event",
                eventName: event.$case,
                serverUrl: this.serverURL,
            });
        }
    }
    sendAction(action, bypass = false, createTxnId = false, txnId, txnTimeout) {
        let transaction;
        Logger_1.logger.debug("New action", action.$case);
        if (createTxnId) {
            transaction = this.transactionManager.addTransaction(txnTimeout);
            Logger_1.logger.debug("Creating new transaction", transaction.txnId);
            txnId = transaction.txnId;
        }
        if (!this._connected && !bypass) {
            if ((action.$case === "move" && this.numMoveEventsBuffered >= MAX_BUFFERABLE_MOVE_EVENTS) ||
                action.$case === "activelySpeaking" ||
                action.$case === "interact" ||
                action.$case === "interactWithObject" ||
                action.$case === "triggerItem" ||
                action.$case === "triggerObject") {
                Logger_1.logger.debug(`[Engine] dropping ${action.$case} action because we're not connected`);
                if (txnId !== undefined) {
                    this.transactionManager.rejectTransaction(txnId, "Engine is not connected");
                }
            }
            else {
                this._sendQ.push({ action, txnId });
                if (action.$case === "move") {
                    this.numMoveEventsBuffered++;
                }
            }
            return transaction?.txnPromise;
        }
        try {
            const serializedAction = events_1.ClientServerAction.encode({
                txnId,
                action,
            }).finish();
            this._bufferedAmounts.push(this.ws?.bufferedAmount ?? 0);
            if (!this.ws) {
                Logger_1.logger.error(`WebSocket not initialized during ${action.$case}, this should never happen!`);
            }
            this.ws?.send(serializedAction);
            this._lastActionSentAt = Date.now();
            this._bytesSentSinceConnect += serializedAction.byteLength;
        }
        catch (e) {
            if (txnId) {
                this.transactionManager.rejectTransaction(txnId, e instanceof Error ? e.message : "failed to send action");
            }
            Logger_1.logger.error("websocket send error: " + Logger_1.logger.errString(e));
        }
        return transaction?.txnPromise;
    }
    recordHeartbeatTime(time) {
        if (Math.random() < 0.1) {
            this.onmetric("heartbeat-latency", { value: time, serverUrl: this.serverURL });
        }
        this.latencies.push(time);
    }
    sendBackupHeartbeat() {
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
        if (this._heartbeatInterval)
            return;
        this._heartbeatInterval = setInterval(() => {
            this.checkAndHandleSuspend();
            this.sendBackupHeartbeat();
            if (this.lastSignOfLife < Date.now() - HEARTBEAT_TIMEOUT && this.ws != null) {
                Logger_1.logger.warn(`t: ${Date.now() - this.connectionInitTime} : no heartbeat since ${this.lastSignOfLife}, closing connection`);
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
                    code: responseCodes_1.GameWsCloseCode.CONN_TIMED_OUT,
                    reason: `Game Server timed out for ${this.clientUid}. No heartbeat since ${this.lastSignOfLife}`,
                });
                Logger_1.logger.checkpoint("successfully closed ws connection with TIMEOUT code");
            }
        }, HEARTBEAT_INTERVAL);
    }
    stopHeartbeat() {
        clearInterval(this._heartbeatInterval);
        this._heartbeatInterval = undefined;
    }
    startByteTracker() {
        if (!this._byteTrackerInterval) {
            this._byteTrackerInterval = setInterval(() => {
                if (this._bytesSentSinceConnect === this._lastBytesSent) {
                    Logger_1.logger.warn(`warning: bytes sent hasn't changed in the last 15 seconds, currently ${this._lastBytesSent}`);
                    this.onmetric("no-bytes-sent-recently", { value: 1, serverUrl: this.serverURL });
                }
                if (this._bytesReceivedSinceConnect === this._lastBytesReceived) {
                    Logger_1.logger.warn(`warning: bytes received hasn't changed in the last 15 seconds, currently ${this._lastBytesReceived}`);
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
    startRecordingIntentToConnect() {
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
        this.connectIntentInterval = setInterval(() => this.onmetric("intend-to-be-connected", {
            ...both(),
        }), this.CONNECT_INTENT_POST_INTERVAL);
    }
    stopRecordingIntentToConnect() {
        clearInterval(this.connectIntentInterval);
    }
    trackRefreshFixedConnectionIssue(fixed) {
        if (!this.preRefreshDcData)
            return;
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
        }
        catch {
        }
        this.clearUnloadDcState();
    }
    logDisconnectionStart() {
        if (!this.hasEverFullyConnected || this.disconnectedStartTime) {
            return;
        }
        this.disconnectedStartTime = Date.now();
        this.dcLogTimeout = setTimeout(() => {
            this.dcLogTimeout = undefined;
            this.onmetric(`dc-at-least-${this.LOG_THRESH_MS}-ms`, {
                ...this.getBaseMetricsInfo(),
                timeSinceLastSuspend: Date.now() - this.lastSuspendDate,
                timeSinceLastSignOfLife: Date.now() - this.lastSignOfLife,
                timeSinceLastSuccessfulFetch: Date.now() - this.lastSuccessfulFetch,
                history: Logger_1.logger.exportHistory().slice(-700),
            });
        }, this.LOG_THRESH_MS);
    }
    logInitialSyncComplete(isPartialSubscribe) {
        Logger_1.logger.checkpoint(`t: ${Date.now() - this.connectionInitTime} : successfully${isPartialSubscribe ? " partially" : ""} subscribed and re-synced`);
        if (!this.hasEverFullyConnected && !isPartialSubscribe) {
            this.onmetric("time-to-first-full-sync", {
                ...this.getBaseMetricsInfo(),
                ms: Date.now() - this.startTime,
            });
        }
        if (!isPartialSubscribe) {
            const { gotGameServerUrl, gotWsOpen, gotReady, gotSubscriptionsUpdated, gotSpaceSetsIdMapping, gotSpaceSetsCapacity, } = this.connectMetrics;
            const mapDataEndTime = gotSpaceSetsIdMapping ? gotSpaceSetsIdMapping : gotSpaceSetsCapacity;
            this.onmetric("time-to-sync", {
                ...this.getBaseMetricsInfo(),
                hasEverFullyConnected: this.hasEverFullyConnected,
                timeSinceLastSuspend: Date.now() - this.lastSuspendDate,
                reconnectAttempts: this._reconnectionAttempts,
                timeBeforeConnectionInit: this.connectionInitTime -
                    (this.disconnectedStartTime ? this.disconnectedStartTime : this.startTime),
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
            this._timeSpentDisconnected.push(Date.now() - this.disconnectedStartTime);
        }
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
    queueDebugUpload() {
        if (process.env.ENVIRONMENT === "test")
            return;
        const uploadDebug = async (metricName) => {
            const testId = (0, uuid_1.v4)();
            this.onmetric(metricName, {
                ...this.getBaseMetricsInfo(),
                history: Logger_1.logger.exportHistory().slice(-5000),
                hasEverFullyConnected: this.hasEverFullyConnected,
                openAndGettingData: this.gotFirstMessage,
                testId,
                timeSinceLastSuccessfulFetch: Date.now() - this.lastSuccessfulFetch,
            });
            Logger_1.logger.checkpoint(`starting test: ${testId}`);
            const testResult = await (0, Utils_1.testConnection)(this.serverURL, testId);
            Logger_1.logger.checkpoint(`test ${testId} result just came back: ` +
                Object.entries(testResult).map((l) => l.join(":")));
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
    checkAndHandleSuspend() {
        const timeSinceLastCheck = Date.now() - this.lastSuspendCheck;
        this.lastSuspendCheck = Date.now();
        if (timeSinceLastCheck < CONSIDERED_SUSPEND_DELAY) {
            return;
        }
        Logger_1.logger.warn(`resume from suspend detected, ${timeSinceLastCheck}ms elapsed`);
        this.lastSuspendDate = Date.now();
        this.resetDisconnectionTracking();
    }
    startSuspendCheck() {
        this.lastSuspendCheck = Date.now();
        this.suspendCheckInterval = setInterval(() => this.checkAndHandleSuspend(), SUSPEND_CHECK_DELAY);
    }
    stopSuspendCheck() {
        clearInterval(this.suspendCheckInterval);
    }
    getBaseMetricsInfo() {
        return {
            serverUrl: this.serverURL,
            connectionId: this.connectionId,
        };
    }
    async getGameServerUrl(signal) {
        if (this.debugOverrideServer)
            return this.debugOverrideServer;
        let fetchTooSlowTimeout;
        try {
            const timeoutController = new AbortController();
            fetchTooSlowTimeout = setTimeout(() => timeoutController.abort(new Error(`gs fetch timed out`)), MAX_WAIT_FOR_CONNECTION * 0.66);
            const cancelSignal = (0, Utils_1.anySignal)([signal, timeoutController.signal]);
            return await (0, Utils_1.fetchGameServerAssignment)(cancelSignal, this.spaceId, this.debugOverrideHttpServer);
        }
        catch (e) {
            if (!this.started)
                return null;
            const message = e && typeof e === "object" && "message" in e ? e.message : "";
            let failedStatus;
            if (e instanceof Error_1.ClientError) {
                failedStatus = e.code;
            }
            Logger_1.logger.warn(`failed to fetch gameserver assignment: ${message}`);
            const online = this.isOnline;
            if (!online) {
                Logger_1.logger.checkpoint("User is offline, retrying connection...");
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
        }
        finally {
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
        if (config_1.isBrowser &&
            window.location.hostname === "app.staging.gather.town" &&
            this.serverURL.match(/(engine-.+\.prod\.do\.)/)) {
            this.stop();
            window.location.href = "https://app.gather.town" + window.location.pathname;
        }
    }
}
exports.Engine = Engine;
//# sourceMappingURL=Engine.js.map