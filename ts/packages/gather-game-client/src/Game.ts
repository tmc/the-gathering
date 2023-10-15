/*

The main interface to the Game Server.
This serves as the mediator between what the browser needs and what the server gives us.

Engine.ts should act as a reliable interface to the game server.
Game.ts shouldn't have to think about connection, reconnection, or authentication logic,
only game logic and processing the events Engine.ts dutifully hands it.

*/

import { v4 as uuid } from "uuid";

import { logger, LogTypes } from "./Logger";
import {
  Announcer,
  ChatMessageUpdated,
  DBOutfit,
  DeskInfoV2,
  HipToBeSquare,
  InventoryItem,
  MapAndDesk,
  NookDiff,
  PlayerInitInfo,
  Portal,
  RespondToAccessRequest_LocationTypeEnum,
  ServerClientEvent,
  SpaceItem,
  SpawnPoint,
  SpeakerUpdatesSession,
  WireArea,
} from "@gathertown/gather-game-common/dist/src/public/events";
import {
  convertMapObjectToWireObject,
  convertTutorialTasksToWireTutorialTasks,
  EnabledChat,
  MapObject,
  MapObjectToAdd,
  TutorialTasks,
} from "@gathertown/gather-game-common/dist/src/public/gameMap";
import {
  GAME_STATE_PLAYER_DISCONNECT_SYMBOL,
  PartialGameState,
} from "@gathertown/gather-game-common/dist/src/public/gameState";
import {
  generateDefaultPlayer,
  MoveDirection,
  Player,
  PlayerStatusEndOption,
  PlayerStatusOption,
  SpriteDirection,
} from "@gathertown/gather-game-common/dist/src/public/player";
import {
  ActionDataByCase,
  ClientServerActionAction,
  ClientServerActionCase,
  ServerClientEventCase,
} from "@gathertown/gather-game-common/dist/src/public/utils";
import { forEachObjIndexed, omit } from "ramda";

import { Engine, EngineAuth } from "./Engine";
import { API_BASE_PATH, isBrowser } from "./config";
import { fillOrCreateContext, GameEventContext } from "./GameEventContexts";
import { MapsAccumulator } from "./MapsAccumulator";
import { defaultSubscriptions } from "./DefaultSubscriptions";
import { GAME_CLIENT_VERSION } from "./version";
import { GameEventByCase, GameEventCase, SyntheticEventEvent } from "./GameEventUtils";
import { generatePlayerChangesMapsEvent } from "./synthetic/events/PlayerChangesMaps";
import { GameWsCloseCode } from "@gathertown/gather-game-common/dist/src/public/responseCodes";
import { GameMap } from "./GameMap";

export * from "@gathertown/gather-game-common/dist/src/public/events";
export * from "@gathertown/gather-game-common/dist/src/public/gameMap";
export * from "@gathertown/gather-game-common/dist/src/public/gameState";
export * from "@gathertown/gather-game-common/dist/src/public/player";
export * from "@gathertown/gather-game-common/dist/src/public/position";
export * from "@gathertown/gather-game-common/dist/src/public/responseCodes";
export * from "@gathertown/gather-game-common/dist/src/public/remoteWork";
export * from "@gathertown/gather-game-common/dist/src/public/utils";

type GameEventSubscriptions<T extends GameEventCase> = {
  [uuid: string]: {
    handler: (data: GameEventByCase<T>, context: GameEventContext) => void;
    filter: ((data: GameEventByCase<T>, context: GameEventContext) => boolean) | undefined;
  };
};

export type GameEventSubscriptionMap = {
  [eventId in GameEventCase]?: GameEventSubscriptions<eventId>;
};

type EventSubscriptions = { [event in ServerClientEventCase]?: boolean };

export type GameOptions = {
  logLevels?: LogTypes;
  overrideServer?: string;
  overrideHttpServer?: string;
  subscribeTo?: EventSubscriptions;
};

const CHECK_PLAYER_EXISTS_DELAY = 5 * 60 * 1000;

export class Game {
  // connection
  spaceId?: string;
  engine?: Engine;
  intendToBeConnected = false;
  getAuth: () => Promise<EngineAuth>;

  private readonly updateSubscriptionsPromise: Promise<void>;
  private subscriptionFinishedCallback = () => logger.log("default finished subscription callback");

  private _initializedAtMs = 0;
  private _connectedAtMs = 0;
  private hasSentMapSinceConnect = false;
  private timeToFirstOnMapsMs = new Map<string, number>();
  private _onMapCounts: { [mapId: string]: number } = {};
  private _connectCalledAt = 0;
  private _timeToConnect = -1;

  debugOverrideServer?: string;

  private subscriptions: GameEventSubscriptionMap = {};
  private disconnectHandlers: { [uuid: string]: (code?: number, reason?: string) => void } = {};

  /**
   * @deprecated
   */
  legacySubscriptionsConnection: {
    [uuid: string]: (connected: boolean) => void;
  } = {};

  private eventSubscriptions: EventSubscriptions = {};
  private encIdMapping: { [encId: number]: string } = {};
  private playerUidsSeenOnConnect: Set<string> = new Set();
  private checkForExitsTimeout: NodeJS.Timeout = setTimeout(() => {}); // default value to avoid having to do null checks
  private lastDeployTime = 0;

  // Player game state
  players: { [uid: string]: Player } = {};

  dispatchGameUpdate?: (delta: PartialGameState<Player>) => void;
  dispatchMapUpdate?: (mapId: string, map: Readonly<GameMap>) => void;

  eventPerfCallbacks: ((eventId: GameEventCase, duration: DOMHighResTimeStamp) => void)[] = [];

  private mapsAccumulator = new MapsAccumulator();

  // Map state. Partials are maps we don't have full data on yet.
  // These fields are both readonly on mapsAccumulator which is why these shortcuts are fine.
  completeMaps: { [id: string]: GameMap } = this.mapsAccumulator.completeMaps;
  partialMaps: { [id: string]: Partial<GameMap> } = this.mapsAccumulator.partialMaps;
  lastMapUpdateIds: { [id: string]: number } = this.mapsAccumulator.lastMapUpdateIds;

  onInput:
    | ((
        dir: MoveDirection,
        stopped: boolean,
        inputId: number,
        txnPromise: Promise<unknown>,
      ) => void)
    | undefined;
  inputId = 1; // server needs this to be uint so its lastInputId inits to 0

  private mapDataChecks = 0;
  private mapDataCheckInterval: NodeJS.Timeout | undefined;

  spaceItems: { [id: string]: SpaceItem } = {};
  putMetric: (metricName: string, metricValue: unknown) => void = (_name, _value) => {
    if (isBrowser) {
      logger.error("tried to put metric but no metric function provided");
    }
  };

  debug(debugState = true) {
    logger.setDebugState(debugState);
  }

  /* SETUP */

  // Params
  // ------
  // getAuth
  //   A function that returns an auth token/key that the game client
  //   should use to authenticate itself with the game server.
  // onInput
  //   Callback to be fired whenever moving in the game. Used for Client
  //   Prediction - see ClientPrediction.ts
  constructor(
    spaceId: string,
    getAuth: () => Promise<EngineAuth>,
    onInput?: (
      dir: MoveDirection,
      stopped: boolean,
      inputId: number,
      txnPromise: Promise<unknown>,
    ) => void,
    dispatchGameUpdate?: (delta: PartialGameState<Player>) => void,
    dispatchMapUpdate?: (mapId: string, map: Readonly<GameMap>) => void,
    options?: GameOptions,
  ) {
    if (options?.logLevels) {
      logger.enabled = Object.assign(logger.enabled, options.logLevels);
    }

    this.getAuth = getAuth;
    this.onInput = onInput;
    this.dispatchGameUpdate = dispatchGameUpdate;
    this.dispatchMapUpdate = dispatchMapUpdate;

    this.eventSubscriptions = options?.subscribeTo ?? defaultSubscriptions;
    this.updateSubscriptionsPromise = new Promise((resolve) => {
      this.subscriptionFinishedCallback = resolve;
    });
    this.updateSubscriptionsPromise.catch(() => {
      // We don't want an unhandled rejection since this expected sometimes.
      // We still want to allow others to listen for an error in case that wan't to understand that it failed.
    });

    if (spaceId) {
      // see comment below
      this.init(spaceId, options?.overrideServer, options?.overrideHttpServer);
    }
  }

  // the only reason we have this is because the browser wants to create
  // the game once at the beginning and share it globally,
  // even though we may not know the spaceId at that point.
  // Seemed easier at the time to do null checks on spaceId here instead of
  // null checks on the game everywhere else
  init(spaceId: string, _overrideServer?: string, _overrideHttpServer?: string) {
    // protect against weird unexpected re-inits
    if (this.spaceId) {
      if (this.spaceId === spaceId) {
        // don't re-init, this is a redundant call
        logger.warn("duplicate Game init call is being ignored; already initialized");
        return;
      }
      // otherwise throw, if you want a different spaceId, create a new Game object
      throw new Error(
        "game has already been init! initializing again would lead to undefined behavior",
      );
    }
    // people keep tripping over this, so whatever, we can just make sure
    this.spaceId = spaceId.substring(0, 16) + "\\" + spaceId.substring(17);

    let overrideServer: string | undefined;
    let overrideHttpServer: string | undefined;

    // for local/test development, default to same host as http API for ws unless otherwise overridden
    if (process.env.ENVIRONMENT === "local" || process.env.ENVIRONMENT === "test") {
      const url = new URL(API_BASE_PATH);
      overrideServer = `ws://${url.hostname}:${process.env.GAMESERVER_PORT}`;
    }

    if (_overrideServer) {
      overrideServer = _overrideServer;
    }

    if (_overrideHttpServer) {
      overrideHttpServer = _overrideHttpServer;
    }

    this.engine = new Engine(this.spaceId, this.getAuth, overrideServer, overrideHttpServer);
    this._initializedAtMs = Date.now();

    // set up all the callbacks
    this.engine.onmetric = (metricName: string, additionalData: string) => {
      this.putMetric(metricName, additionalData);
    };
    this.engine.subscriptionHook = () => this.sendSubscribe();
    this.engine.onevent = (serverClientEvent: ServerClientEvent) => {
      const { event } = serverClientEvent;
      if (!event) {
        logger.warn("dropping unrecognized serverClientEvent"); // probably a new event type the client doesn't know about, nbd
        return;
      }
      logger.debug(serverClientEvent);
      const syntheticEvents: SyntheticEventEvent[] = [];
      // The context that is specific
      let context: GameEventContext = {
        spaceId: this.spaceId ?? "", // this is just to make ts happy. we wouldn't connect the engine without a known spaceId
      };
      const playerDeltas: PartialGameState<Player> = {};
      // we need to track this because some other code depends on the first delta being emitted actually having the full player data. fml
      switch (event.$case) {
        // These events mutate the player state in a way that does not send a declarative change in state (e.g deleting something).
        // You can *usually* write your code in a way that it does not demand one of these, but if you need it, you can implement it here.
        case "playerJoins": {
          const { encId } = event.playerJoins;
          const uid = this.encIdMapping[encId];
          if (!uid) {
            throw new Error(`Cannot find playerUid corresponding to encId ${encId}`);
          }
          this.playerUidsSeenOnConnect.add(uid);
          // Initialize local state for this player if we never have before.
          if (!this.players[uid]) {
            const player = generateDefaultPlayer(uid);
            this.players[uid] = player;
            playerDeltas[uid] = { ...player }; // defensive copy since we're passing this to clients
          }
          break;
        }
        case "playerExits": {
          const { encId } = event.playerExits;
          const uid = this.encIdMapping[encId];
          if (!uid) {
            throw new Error(`Cannot find playerUid corresponding to encId ${encId}`);
          }
          playerDeltas[uid] = GAME_STATE_PLAYER_DISCONNECT_SYMBOL;
          context.player = this.players[uid];
          context.playerId = uid;
          delete this.players[uid];
          break;
        }
        case "playerLeavesWhisper": {
          const { encId } = event.playerLeavesWhisper;
          const uid = this.encIdMapping[encId];
          if (!uid) {
            throw new Error(`Cannot find playerUid corresponding to encId ${encId}`);
          }
          playerDeltas[uid] = { whisperId: "" };
          const player = this.players[uid];
          if (!player) {
            // This should never happen - playerJoins, which inits this.players[uid], must be the first event about any player.
            logger.error("Dropping a playerLeavesWhisper event received before a playerJoins!");
            break;
          }
          player.whisperId = "";
          break;
        }
        case "spaceSetsIdMapping": {
          const { uid, encId } = event.spaceSetsIdMapping;
          this.encIdMapping[encId] = uid;
          break;
        }
        case "playerChats": {
          const { senderId } = event.playerChats;
          context.player = this.players[senderId];
          break;
        }
        case "playerNotifies": {
          const { encId } = event.playerNotifies;
          const uid = this.encIdMapping[encId];
          if (!uid) {
            throw new Error(`Cannot find playerUid corresponding to encId ${encId}`);
          }
          context.player = this.players[uid];
          break;
        }
        case "playerUpdatesInventory": {
          const { encId, items, order } = event.playerUpdatesInventory;
          const uid = this.getPlayerUidFromEncId(encId);

          if (!uid) {
            logger.error(`missing encId ${encId} for event: ${event.$case}`);
            break;
          }

          const player = this.getPlayer(uid);

          if (!player) {
            // This should never happen - playerJoins, which inits this.players[uid], must be the first event about any player.
            logger.error(`Dropping a ${event.$case} event received before a playerJoins!`);
            break;
          }

          forEachObjIndexed((item: InventoryItem, itemId: string | number) => {
            if (item.count > 0) {
              player.inventory.items = { ...player.inventory.items, [itemId]: item };
            } else {
              player.inventory.items = omit([itemId.toString()], player.inventory.items);
            }
          }, items);
          forEachObjIndexed((itemId: string, coord: string | number) => {
            if (itemId === "") {
              player.inventory.order = omit([coord.toString()], player.inventory.order);
            } else {
              player.inventory.order = { ...player.inventory.order, [coord]: itemId };
            }
          }, order);
          break;
        }
        case "spaceUpdatesItems": {
          const { items } = event.spaceUpdatesItems;
          this.spaceItems = {
            ...this.spaceItems,
            ...items,
          };
          break;
        }
        case "subscriptionsUpdated": {
          const { subscriptions } = event.subscriptionsUpdated;
          const gotSubscriptions = new Set(subscriptions);
          const wantedSubscriptions =
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            (Object.keys(this.eventSubscriptions) as ServerClientEventCase[]).filter(
              (key: ServerClientEventCase) => !!this.eventSubscriptions[key],
            );
          const missingSubscriptions = wantedSubscriptions.filter(
            (sub) => !gotSubscriptions.has(sub),
          );
          if (missingSubscriptions.length > 0) {
            logger.log("no permissions to subscribe to: " + missingSubscriptions.join(", "));
          }
          break;
        }
        // don't want the default to catch these and change player fields
        case "playerSetsImagePointer":
        case "playerInteractsWithObject":
        case "playerTriggersObject":
        case "customEvent":
        case "ready": // (for a summary of the init flow, see the top of gather-game-client/src/Engine.ts)
        case "serverHeartbeat":
        case "info":
        case "warn":
        case "error":
        case "transactionStatus":
        case "playerTriggersInventoryItem":
        case "playerStartsRecording":
          break;
        default: {
          // This processes any event that begins with player, pulls out the encId (and optionally, additionally, encIdTarget if you need to target a second user as well)
          // and applies all remaining fields to the player's state. If your event has special processing that needs to happen elsewhere, you can still put it in
          // the switch statement. Otherwise, it will be handled automatically here.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          // Lint warning auto-ignored when enabling the consistent-type-assertions rule. no-explicit-any is also auto-ignored b/c these 2 rules often apply on the same line.
          // You should almost never be using type assertions! TODO: @ENG-4304 Remove these comments and the type assertion next time this code is edited.
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-explicit-any
          const eventAny = event as any; // temporarily cast so we can get at the event
          const eventVal = eventAny[eventAny.$case];
          const encId = eventVal?.encId;
          if (event.$case.startsWith("map")) {
            const completedMap = this.mapsAccumulator.addChunk(event);
            if (!completedMap) {
              break;
            }

            // We're purposefully not defensive copying this right now - it's left up to clients of GGC to
            // defensive copy if they want or just work with this in mind.
            this.dispatchMapUpdate?.(completedMap.id, completedMap);

            if (!this.hasSentMapSinceConnect) {
              this.hasSentMapSinceConnect = true;
              logger.checkpoint(
                `gt: ${Date.now() - this._connectedAtMs} : doing first onmap since connect`,
              );
            }
            if (!this.timeToFirstOnMapsMs.has(completedMap.id)) {
              this.timeToFirstOnMapsMs.set(completedMap.id, Date.now() - this._connectedAtMs);
              this.putMetric("time-to-first-map-data-ms", {
                mapId: completedMap.id,
                timeToMapDataMs: this.timeToFirstOnMapsMs.get(completedMap.id),
              });
              this.mapDataCheckInterval && clearInterval(this.mapDataCheckInterval);
            }
            if (!this._onMapCounts[completedMap.id]) {
              this._onMapCounts[completedMap.id] = 0;
            }
            this._onMapCounts[completedMap.id] += 1;
          } else if (event.$case.startsWith("player") && encId != null) {
            if (event.$case === "playerMoves") {
              generatePlayerChangesMapsEvent(event, this, syntheticEvents);
            }
            const uids = [];
            const fetchedUid = this.encIdMapping[encId];
            if (fetchedUid != null) {
              uids.push(fetchedUid);
            } else {
              // note: if you change this log, update the dashboard. we track it
              logger.error(`missing encId ${encId} for event: ${eventAny.$case}`);
            }
            if (eventVal?.encIdTarget) {
              const uidTarget = this.encIdMapping[eventVal?.encIdTarget];
              if (uidTarget != null) {
                uids.push(uidTarget);
              } else {
                logger.error(
                  `missing encTargetId: ${eventVal?.encIdTarget} in event: ${eventAny.$case}`,
                );
              }
            }

            for (const entry in eventVal) {
              for (const uid of uids) {
                if (entry === "encId" || entry === "encIdTarget" || eventVal[entry] === undefined) {
                  continue;
                }
                const player = this.players[uid];
                if (!player) {
                  // This should never happen - playerJoins, which inits this.players[uid], must be the first event about any player.
                  logger.error(`Dropping a ${event.$case} event received before a playerJoins!`);
                  continue;
                }
                if (!playerDeltas[uid]) {
                  playerDeltas[uid] = {};
                }
                // We need to weaken the type here to index the Player type with an arbitrary string (that we know should be fine).
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                // Lint warning auto-ignored when enabling the consistent-type-assertions rule. no-explicit-any is also auto-ignored b/c these 2 rules often apply on the same line.
                // You should almost never be using type assertions! TODO: @ENG-4304 Remove these comments and the type assertion next time this code is edited.
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-explicit-any
                const playerRecord = player as Record<string, any>;
                // Same reasoning as above.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                // Lint warning auto-ignored when enabling the consistent-type-assertions rule. no-explicit-any is also auto-ignored b/c these 2 rules often apply on the same line.
                // You should almost never be using type assertions! TODO: @ENG-4304 Remove these comments and the type assertion next time this code is edited.
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-explicit-any
                const playerDeltaRecord = playerDeltas[uid] as Record<string, any>;

                if (entry === "mapId") {
                  // TODO: Player struct has an inconsistency, it expects map to be named mapId
                  // rename Player struct from map to mapId, or rename proto contents from mapId to map
                  playerDeltaRecord["map"] = eventVal[entry];
                  player.map = eventVal[entry];
                } else {
                  playerRecord[entry] = eventVal[entry];
                  playerDeltaRecord[entry] = eventVal[entry];
                }
              }
            }
          }
        }
      }

      // This needs to happen before the subscription forwarding below so we can guarantee that client game states are
      // updated before event handlers run.
      this.dispatchGameUpdate?.(playerDeltas);

      // SUBSCRIPTION FORWARDING
      context = fillOrCreateContext(event, this, context);
      this.publishEvent(event.$case, event, context);
      syntheticEvents.forEach((syntheticEvent) => {
        this.publishEvent(syntheticEvent.$case, syntheticEvent, context);
      });
    };

    this.engine.onconnect = () => {
      this._connectedAtMs = Date.now();
      this._timeToConnect = this._connectedAtMs - this._connectCalledAt;
      this.hasSentMapSinceConnect = false;
      this.mapsAccumulator.startTrackingMissedObjects((mapId, keys) =>
        this.cleanupDeletedObjects(mapId, keys),
      );
      this._startMapDataCheckInterval();
      Object.values(this.legacySubscriptionsConnection).forEach((f) => {
        f(true);
      });
    };
    this.engine.ondisconnect = (code?: number, reason?: string) => {
      this.playerUidsSeenOnConnect.clear();
      clearTimeout(this.checkForExitsTimeout);

      if (code === GameWsCloseCode.GOING_AWAY) {
        this.lastDeployTime = Date.now();
      }

      // call old "connected? yes/no" handlers
      Object.values(this.legacySubscriptionsConnection).forEach((f) => {
        f(false);
      });

      // call new disconnect handlers
      for (const id in this.disconnectHandlers) {
        const handler = this.disconnectHandlers[id];
        handler ? handler(code, reason) : logger.warn(`Undefined handler with id ${id}`);
      }
    };
  }

  /**
   * Call this once when connecting to a space.
   */
  connect() {
    if (!this.spaceId || !this.engine) {
      throw new Error("game client has not been initialized");
    }
    if (this.intendToBeConnected) return;

    this.intendToBeConnected = true;
    this._connectCalledAt = Date.now();
    logger.log("connecting to " + this.spaceId);
    this.engine.start();
  }

  /**
   * for a summary of the init flow, see the top of gather-game-client/src/Engine.ts
   *
   * @returns a Promise that resolves when connection, initialization, and full state sync are complete
   */
  async waitForInit() {
    if (!this.updateSubscriptionsPromise) {
      throw new Error("waitForInit was called but no updateSubscriptionsPromise exists.");
    }
    return this.updateSubscriptionsPromise;
  }

  waitForFirstEnter(playerId: string) {
    if (this.players[playerId]) return Promise.resolve();

    return new Promise<void>((resolve) => {
      const unsub = this.subscribeToEvent("playerJoins", (_, context) => {
        if (context.playerId === playerId) {
          unsub();
          resolve();
        }
      });
    });
  }

  disconnect(): Promise<void> {
    if (!this.intendToBeConnected) return Promise.resolve();

    const disconnectPromise = new Promise<void>((res) => {
      const unsub = this.subscribeToDisconnection(() => {
        res();
        unsub();
      });
    });

    if (this.engine) {
      logger.log("Disconnecting");
      logger.checkpoint("stopping engine in Game disconnect");
      this.engine.stop();
      this.intendToBeConnected = false;
    }
    if (this.mapDataCheckInterval) {
      clearInterval(this.mapDataCheckInterval);
    }
    return disconnectPromise;
  }

  getPlayer(uid: string) {
    return this.players[uid];
  }

  getPlayerUidFromEncId(encId: number) {
    return this.encIdMapping[encId];
  }

  // Publishes an event to all subscribers for that event.
  // This is intentionally a _public_ method, because clients may want to fake events (e.g for
  // stuff like NPCs).
  publishEvent<T extends GameEventCase>(
    eventId: T,
    data: GameEventByCase<T>,
    context: GameEventContext,
  ) {
    const startTime = performance.now();

    const subMap = this.subscriptions[eventId];
    if (!subMap) return;

    for (const subscription of Object.values(subMap)) {
      // It would be nice to not need to independently try/catch every one of these, but the reality is that with
      // so many surfaces registering subscriptions here it's far too common to have one subscription error out
      // and prevent all remaining subs from running.
      try {
        // We know this should be correct, but we still need to be careful here without the protection of TS.
        if (subscription.filter && !subscription.filter(data, context)) {
          continue;
        }
        subscription.handler(data, context);
      } catch (e) {
        logger.error(`error occurred in handler for ${eventId}: ${logger.errString(e)}`);
      }
    }

    const elapsedTime = performance.now() - startTime;
    this.eventPerfCallbacks.forEach((callback) => callback(eventId, elapsedTime));
  }

  /* SUBSCRIPTION MANAGEMENT */

  /**
   * Calls a callback whenever the given event type is received.
   * Does not send the subscription request to the server -- you have to declare those up front (see defaultSubscriptions).
   */
  subscribeToEvent<T extends GameEventCase>(
    // `eventId` should ALWAYS be a hardcoded string like "eventName"! See more context below.
    eventId: T,
    handler: (data: GameEventByCase<T>, context: GameEventContext) => void,
    filter?: (data: GameEventByCase<T>, context: GameEventContext) => boolean,
  ) {
    const subscriptionId = uuid();
    const eventSubs: GameEventSubscriptionMap[T] = this.subscriptions[eventId] ?? {};
    eventSubs[subscriptionId] = {
      handler: handler,
      filter: filter,
    };
    this.subscriptions[eventId] = eventSubs;
    return () => {
      const subscriptionsForEvent = this.subscriptions[eventId];
      if (subscriptionsForEvent) {
        delete subscriptionsForEvent[subscriptionId];
      }
    };
  }

  subscribeToConnection(callback: (connected: boolean) => void): () => void {
    const handle = uuid();
    this.legacySubscriptionsConnection[handle] = callback;
    return () => {
      delete this.legacySubscriptionsConnection[handle];
    };
  }

  subscribeToDisconnection(callback: (code?: number, reason?: string) => void): () => void {
    const handle = uuid();
    this.disconnectHandlers[handle] = callback;
    return () => {
      delete this.disconnectHandlers[handle];
    };
  }

  subscribeToEventPerf(callback: (eventId: GameEventCase, duration: DOMHighResTimeStamp) => void) {
    this.eventPerfCallbacks.push(callback);
    return () => {
      this.eventPerfCallbacks = this.eventPerfCallbacks.filter((cb) => cb !== callback);
    };
  }

  /* TAKE ACTIONS */

  /**
   * @returns A promise if useTxn is true, otherwise nothing.
   */
  sendAction(action: ClientServerActionAction, useTxn: true, txnTimeout?: number): Promise<unknown>;
  sendAction(action: ClientServerActionAction, useTxn?: false, txnTimeout?: undefined): void;
  sendAction(
    action: ClientServerActionAction,
    useTxn?: boolean,
    txnTimeout?: number,
  ): Promise<unknown> | void;
  sendAction(
    action: ClientServerActionAction,
    useTxn = false,
    txnTimeout?: number,
  ): Promise<unknown> | void {
    return this.engine?.sendAction(action, false, useTxn, undefined, txnTimeout);
  }

  /**
   * @returns A promise if useTxn is true, otherwise nothing.
   *
   * This function can ONLY BE CALLED WITH AN EXPLICIT actionId !!!  You don't get type safety if it's not! (see below for more)
   */
  sendAction2<TCase extends ClientServerActionCase>(
    actionId: TCase,
    actionData: ActionDataByCase<TCase>,
    useTxn: true,
    txnTimeoutMs?: number,
  ): Promise<unknown>;
  sendAction2<TCase extends ClientServerActionCase>(
    actionId: TCase,
    actionData: ActionDataByCase<TCase>,
    useTxn?: boolean,
    txnTimeoutMs?: number,
  ): Promise<unknown> | void;
  sendAction2<TCase extends ClientServerActionCase>(
    actionId: TCase,
    actionData: ActionDataByCase<TCase>,
    useTxn = false,
    txnTimeoutMs = undefined,
  ) {
    return this.engine?.sendAction(
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      {
        $case: actionId,
        [actionId]: actionData,
        // The function signature enforces that the actionId and data match when the actionId is known,
        // but TS won't let me build the Action here because TCase could be something like ("kick" | "setStatus"), in which case this isn't safe.
        // This is why this function must be called with an explicit actionId.
      } as unknown as ClientServerActionAction,
      false,
      useTxn,
      txnTimeoutMs,
    );
  }

  enter(info: PlayerInitInfo, spawnToken?: string, targetId?: string) {
    this.engine?.queueOrExecuteEnter(info, spawnToken, targetId);
  }

  // enter and exit are special cases of game logic that the Engine has to worry about,
  // since the Engine is supposed to provide the abstraction of a continuous connection,
  // but you need to re-enter each time to connect.
  exit(useTxn = false) {
    return this.engine?.exit(useTxn);
  }

  respawn(useTxn?: boolean) {
    return this.sendAction(
      {
        $case: "respawn",
        respawn: {},
      },
      useTxn,
    );
  }

  spawn(spawnToken: string) {
    this.sendAction({
      $case: "spawn",
      spawn: {
        spawnToken,
      },
    });
  }

  move(dir: MoveDirection, stopped = false, targetId?: string, txnTimeout?: number) {
    const inputId = this.inputId++;
    const action = {
      $case: "move",
      move: {
        dir,
        stopped,
        inputId,
        targetId,
      },
    } as const;

    // Only use txns if `onInput` is actually specified, otherwise promise rejections will be unhandled.
    if (this.onInput) {
      const txnPromise = this.sendAction(action, true, txnTimeout);
      this.onInput(dir, stopped, inputId, txnPromise);
    } else {
      this.sendAction(action);
    }
  }

  /**
   * Utility function for map developers that plays a sound file on the client, once. Use targetId if you are a space owner to play a sound on another client.
   * If no sound is specified, it plays for the entire space. You must be a space owner to play a sound on the whole space.
   * @param src HTMl5 compliant audio resource, e.g a URL to a mp3
   * @param volume scalar volume from 0 to 1.0
   * @param targetId id of another player you want to play the sound on
   */
  playSound(src: string, volume: number, targetId?: string) {
    this.sendAction({
      $case: "playSound",
      playSound: {
        src,
        volume,
        targetId,
      },
    });
  }

  /**
   * Utility function for map developers that stops all sound file matching the src on the client, once. Use targetId if you are a space owner to stop a sound on another client.
   * If no sound is specified, it stops the sounds for the entire space. You must be a space owner to play a sound on the whole space.
   * @param src HTMl5 compliant audio resource, e.g a URL to a mp3
   * @param targetId id of another player you want to play the sound on
   */
  stopSound(src: string, targetId?: string) {
    this.sendAction({
      $case: "stopSound",
      stopSound: {
        src,
        targetId,
      },
    });
  }

  /**
   Puts the currently connected client in ghost mode
   @param space you must be connected already to invoke this function
   @param ghost ghost value, either 1 or 0; whether you are ghosting or not.
   @param targetId id of player whose ghost value you want to set (must be space owner to set)
   */
  ghost(ghost: number, targetId?: string) {
    this.sendAction({
      $case: "ghost",
      ghost: {
        ghost,
        targetId,
      },
    });
  }

  /**
   *
   * @param space string - space - you must be connected already to invoke this function
   * @param recipientId player ID of the other
   * @param dir MoveDirection enum
   */
  enterWhisper(recipientId: string, dir: MoveDirection) {
    this.sendAction({
      $case: "enterWhisper",
      enterWhisper: {
        recipientId,
        dir,
      },
    });
  }

  leaveWhisper() {
    this.sendAction({
      $case: "leaveWhisper",
      leaveWhisper: {},
    });
  }

  /*
  This function generally shouldn't be used -- it's only for overriding someone's position (as a mod/owner)
   */
  teleport(
    mapId: string,
    x: number,
    y: number,
    targetId?: string,
    direction = SpriteDirection.Down,
  ) {
    this.sendAction({
      $case: "teleport",
      teleport: {
        mapId,
        x,
        y,
        direction,
        targetId,
      },
    });
  }

  ring(user: string) {
    this.sendAction({
      $case: "ring",
      ring: {
        user,
      },
    });
  }

  block(blockedUserId: string, blocked: boolean) {
    this.sendAction({
      $case: "block",
      block: {
        blockedUserId,
        blocked,
      },
    });
  }

  pointer(objectId: string, x: number, y: number) {
    this.sendAction({
      $case: "setImagePointer",
      setImagePointer: {
        objectId,
        x,
        y,
      },
    });
  }

  wave(user: string, isReply = false) {
    this.sendAction({
      $case: "wave",
      wave: {
        user,
        isReply,
      },
    });
  }

  screenPointer(screenId: string, x: number, y: number) {
    this.sendAction({
      $case: "setScreenPointer",
      setScreenPointer: {
        screenId,
        x,
        y,
      },
    });
  }

  setActivelySpeaking(activelySpeaking: boolean) {
    this.sendAction({
      $case: "activelySpeaking",
      activelySpeaking: {
        activelySpeaking,
      },
    });
  }

  requestMute(target: string, video: boolean) {
    this.sendAction({
      $case: "requestMute",
      requestMute: {
        target,
        video,
      },
    });
  }

  setEmote(emote: string | undefined, targetId?: string, count?: number) {
    this.sendAction({
      $case: "setEmoteV2",
      setEmoteV2: {
        emote,
        count,
        targetId,
      },
    });
  }

  setAway(away: boolean, targetId?: string) {
    this.sendAction({
      $case: "setAway",
      setAway: {
        away,
        targetId,
      },
    });
  }

  setName(name: string, targetId?: string) {
    this.sendAction({
      $case: "setName",
      setName: {
        name,
        targetId,
      },
    });
  }

  setIsMobile(isMobile: boolean) {
    this.sendAction({
      $case: "setIsMobile",
      setIsMobile: {
        isMobile,
      },
    });
  }

  setTextStatus(textStatus: string, targetId?: string) {
    this.sendAction({
      $case: "setTextStatus",
      setTextStatus: {
        textStatus,
        targetId,
      },
    });
  }

  setEmojiStatus(emojiStatus: string, targetId?: string) {
    this.sendAction({
      $case: "setEmojiStatus",
      setEmojiStatus: {
        emojiStatus,
        targetId,
      },
    });
  }

  setPronouns(pronouns: string, targetId?: string) {
    this.sendAction({
      $case: "setPronouns",
      setPronouns: {
        pronouns,
        targetId,
      },
    });
  }

  setTimezone(timezone: string, targetId?: string) {
    this.sendAction({
      $case: "setTimezone",
      setTimezone: {
        timezone,
        targetId,
      },
    });
  }

  setTitle(title: string, targetId?: string) {
    this.sendAction({
      $case: "setTitle",
      setTitle: {
        title,
        targetId,
      },
    });
  }

  setCity(city: string, targetId?: string) {
    this.sendAction({
      $case: "setCity",
      setCity: {
        city,
        targetId,
      },
    });
  }

  setCountry(country: string, targetId?: string) {
    this.sendAction({
      $case: "setCountry",
      setCountry: {
        country,
        targetId,
      },
    });
  }

  setStartDate(startDate: string, targetId?: string) {
    this.sendAction({
      $case: "setStartDate",
      setStartDate: {
        startDate,
        targetId,
      },
    });
  }

  setPhone(phone: string, targetId?: string) {
    this.sendAction({
      $case: "setPhone",
      setPhone: {
        phone,
        targetId,
      },
    });
  }

  setDisplayEmail(displayEmail: string, targetId?: string) {
    this.sendAction({
      $case: "setDisplayEmail",
      setDisplayEmail: {
        displayEmail,
        targetId,
      },
    });
  }

  setDescription(description: string, targetId?: string) {
    this.sendAction({
      $case: "setDescription",
      setDescription: {
        description,
        targetId,
      },
    });
  }

  // personalImageUrl and profileImageUrl
  setProfileImageUrl(profileImageUrl: string, targetId?: string) {
    this.sendAction({
      $case: "setProfileImageUrl",
      setProfileImageUrl: {
        profileImageUrl,
        targetId,
      },
    });
  }

  setPersonalImageUrl(personalImageUrl: string, targetId?: string) {
    this.sendAction({
      $case: "setPersonalImageUrl",
      setPersonalImageUrl: {
        personalImageUrl,
        targetId,
      },
    });
  }

  setAffiliation(affiliation: string, targetId?: string) {
    this.sendAction({
      $case: "setAffiliation",
      setAffiliation: {
        affiliation,
        targetId,
      },
    });
  }

  setAvailability(availability: PlayerStatusOption, endOption?: PlayerStatusEndOption) {
    this.sendAction({
      $case: "setAvailability",
      setAvailability: {
        availability,
        endOption,
      },
    });
  }

  setEventStatus(eventStatus: string, targetId?: string) {
    this.sendAction({
      $case: "setEventStatus",
      setEventStatus: {
        eventStatus,
        targetId,
      },
    });
  }

  setInConversation(inConversation: boolean, targetId?: string) {
    this.sendAction({
      $case: "setInConversation",
      setInConversation: {
        inConversation,
        targetId,
      },
    });
  }

  setCurrentlyEquippedWearables(currentlyEquippedWearables: DBOutfit, targetId?: string) {
    this.engine?.sendAction({
      $case: "setCurrentlyEquippedWearables",
      setCurrentlyEquippedWearables: {
        currentlyEquippedWearables,
        targetId,
      },
    });
  }

  clearItem(targetId?: string) {
    this.engine?.sendAction({
      $case: "setItemString",
      setItemString: {
        itemString: "",
        targetId,
      },
    });
  }

  setItem(itemId: string, itemImage: string, targetId?: string) {
    const itemString = itemId
      ? JSON.stringify({
          id: itemId,
          image: itemImage,
        })
      : "";
    this.engine?.sendAction({
      $case: "setItemString",
      setItemString: {
        itemString,
        targetId,
      },
    });
  }

  triggerObject(mapId?: string, key?: string) {
    this.engine?.sendAction({
      $case: "triggerObject",
      triggerObject: {
        mapId,
        key,
      },
    });
  }

  setSpotlight(user: string, spotlighted: boolean) {
    this.sendAction({
      $case: "spotlight",
      spotlight: {
        spotlightedUser: user,
        isSpotlighted: spotlighted,
      },
    });
  }

  banPlayer(user: string) {
    this.sendAction({
      $case: "ban",
      ban: {
        user,
      },
    });
  }

  kickPlayer(user: string) {
    this.sendAction({
      $case: "kick",
      kick: {
        user,
      },
    });
  }

  // `data` really can be anything. maybe suboptimal :P but it's at least intentional
  interact(mapId: string, key: string, data?: unknown) {
    this.sendAction({
      $case: "interactWithObject",
      interactWithObject: {
        mapId,
        key,
        ...(data ? { dataJson: JSON.stringify(data) } : {}),
      },
    });
  }

  chat(
    chatRecipient: string,
    localPlayers: string[],
    mapId: string,
    data: { id?: string; contents: string; nookId?: string },
  ) {
    this.sendAction({
      $case: "chat",
      chat: {
        chatRecipient,
        localPlayerIds: localPlayers,
        mapId,
        ...data,
      },
    });
  }

  chatMessageUpdated(message: ChatMessageUpdated) {
    this.sendAction({
      $case: "chatMessageUpdated",
      chatMessageUpdated: message,
    });
  }

  registerCommand(command: string) {
    return this.sendAction(
      {
        $case: "registerCommand",
        registerCommand: {
          command,
        },
      },
      true,
    );
  }

  sendCommand(command: string, targetId?: string) {
    this.sendAction({
      $case: "sendCommand",
      sendCommand: {
        command,
        targetId,
      },
    });
  }

  notify(notification: string) {
    this.sendAction({
      $case: "notify",
      notify: {
        notification,
      },
    });
  }

  shootConfetti(targetId?: string) {
    this.engine?.sendAction({
      $case: "shootConfetti",
      shootConfetti: {
        targetId,
      },
    });
  }

  setVehicleId(vehicleId: string, action: string, targetId?: string) {
    this.engine?.sendAction({
      $case: "setVehicleId",
      setVehicleId: {
        vehicleId,
        targetId,
        action,
      },
    });
  }

  setSpeedModifier(speedModifier: number, targetId?: string) {
    this.engine?.sendAction({
      $case: "setSpeedModifier",
      setSpeedModifier: {
        speedModifier,
        targetId,
      },
    });
  }

  setIsAlone(isAlone: boolean, targetId?: string) {
    this.engine?.sendAction({
      $case: "setIsAlone",
      setIsAlone: {
        isAlone,
        targetId,
      },
    });
  }

  setFocusModeEndTime(focusModeEndTime: string, targetId?: string) {
    this.engine?.sendAction({
      $case: "setFocusModeEndTime",
      setFocusModeEndTime: {
        focusModeEndTime,
        targetId,
      },
    });
  }

  setFollowTarget(followTarget: string, targetId?: string) {
    this.engine?.sendAction({
      $case: "setFollowTarget",
      setFollowTarget: {
        followTarget,
        targetId,
      },
    });
  }

  enterPortal(targetUrl: string, targetId?: string, bypassPrompt?: boolean) {
    this.engine?.sendAction({
      $case: "enterPortal",
      enterPortal: {
        targetUrl,
        targetId,
        bypassPrompt,
      },
    });
  }

  /* EDITOR ONLY ACTIONS */
  setMapDimensions(mapId: string, width: number, height: number) {
    this.engine?.sendAction({
      $case: "mapSetDimensions",
      mapSetDimensions: {
        mapId,
        width,
        height,
      },
    });
  }

  setMapCollisions(mapId: string, x: number, y: number, w: number, h: number, mask: string) {
    this.engine?.sendAction({
      $case: "mapSetCollisions",
      mapSetCollisions: {
        mapId,
        x,
        y,
        w,
        h,
        mask,
      },
    });
  }

  setMapBackgroundImagePath(mapId: string, backgroundImagePath: string) {
    this.engine?.sendAction({
      $case: "mapSetBackgroundImagePath",
      mapSetBackgroundImagePath: {
        mapId,
        backgroundImagePath,
      },
    });
  }

  setMapForegroundImagePath(mapId: string, foregroundImagePath: string) {
    this.engine?.sendAction({
      $case: "mapSetForegroundImagePath",
      mapSetForegroundImagePath: {
        mapId,
        foregroundImagePath,
      },
    });
  }

  setMapSpawns(mapId: string, spawns: SpawnPoint[]) {
    this.engine?.sendAction({
      $case: "mapSetSpawns",
      mapSetSpawns: {
        mapId,
        spawns,
      },
    });
  }

  setMapNooks(
    mapId: string,
    nooks: { [key: string]: NookDiff },
    overwrite = false,
    useTxn = false,
  ) {
    return this.sendAction(
      {
        $case: "mapSetNooks",
        mapSetNooks: {
          mapId,
          nooks,
          overwrite,
        },
      },
      useTxn,
    );
  }

  setMapPortals(mapId: string, portals: Portal[]) {
    this.engine?.sendAction({
      $case: "mapSetPortals",
      mapSetPortals: {
        mapId,
        portals,
      },
    });
  }

  requestToJoinNook(nookId: string, mapId: string, name?: string) {
    this.engine?.sendAction({
      $case: "requestToJoinNook",
      requestToJoinNook: {
        nookId,
        mapId,
        name,
      },
    });
  }

  updateNookPermission(playerId: string, nookId: string, granted: boolean) {
    this.engine?.sendAction({
      $case: "updateNookPermission",
      updateNookPermission: {
        playerId,
        nookId,
        granted,
      },
    });
  }

  setMapAnnouncer(mapId: string, announcer: Announcer[]) {
    this.engine?.sendAction({
      $case: "mapSetAnnouncer",
      mapSetAnnouncer: {
        mapId,
        announcer,
      },
    });
  }

  setMapObjects(
    mapId: string,
    objects: { [key: string]: Partial<MapObject> },
    updatesAreOverwrites?: boolean,
  ) {
    const wireObjects = Object.fromEntries(
      Object.entries(objects).map(([k, obj]) => [k, convertMapObjectToWireObject(obj)]),
    );
    this.engine?.sendAction({
      $case: "mapUpdateObjects",
      mapUpdateObjects: {
        mapId,
        objects: wireObjects,
        updatesAreOverwrites,
      },
    });
  }

  /**
   * Animates an object moving from its current position to `targetWorldPos`.
   * Also handles setting the object's new position in the map itself.
   */
  moveMapObject(
    mapId: string,
    objectId: string,
    targetWorldPos: { x: number; y: number; xOffset?: number; yOffset?: number },
    durationMs: number,
    easing: "Linear" | "Cubic" | "Elastic" | "Bounce" | "Back" = "Linear",
  ) {
    this.engine?.sendAction({
      $case: "mapMoveObject",
      mapMoveObject: {
        mapId,
        objectId,
        targetX: targetWorldPos.x,
        targetY: targetWorldPos.y,
        targetXOffset: targetWorldPos.xOffset || 0,
        targetYOffset: targetWorldPos.yOffset || 0,
        duration: durationMs,
        easing,
      },
    });
  }

  /**
   * Adds a "Quake" effect to the given target. This shakes it around a little bit before settling
   * back into position.
   */
  fxShakeObject(
    mapId: string,
    targetObjId: string,
    intensity = 0.1,
    durationMs = 1000,
    mode?: number,
  ) {
    this.engine?.sendAction({
      $case: "fxShakeObject",
      fxShakeObject: {
        mapId: mapId,
        targetId: targetObjId,
        intensity,
        durationMs,
        mode,
      },
    });
  }

  fxShakeCamera(mapId?: string, playerId?: string, intensity = 0.1, durationMs = 1000) {
    this.engine?.sendAction({
      $case: "fxShakeCamera",
      fxShakeCamera: {
        intensity,
        durationMs,
        // map id, if given, will shake all users on the given map
        mapId,
        // target user, if provided, overrides the above map ID and will only have one player shake
        targetUserId: playerId,
      },
    });
  }

  setMapName(mapId: string, name: string) {
    this.engine?.sendAction({
      $case: "mapSetName",
      mapSetName: {
        mapId,
        name,
      },
    });
  }

  setMapMuteOnEntry(mapId: string, muteOnEntry: boolean) {
    this.engine?.sendAction({
      $case: "mapSetMuteOnEntry",
      mapSetMuteOnEntry: {
        mapId,
        muteOnEntry,
      },
    });
  }

  setMapUseDrawnBG(mapId: string, useDrawnBG: boolean) {
    this.engine?.sendAction({
      $case: "mapSetUseDrawnBG",
      mapSetUseDrawnBG: {
        mapId,
        useDrawnBG,
      },
    });
  }

  // Note: This uses the wire type for the area
  setMapAreas(mapId: string, areas: { [areaName: string]: WireArea }) {
    this.engine?.sendAction({
      $case: "mapSetAreas",
      mapSetAreas: {
        mapId,
        areas,
      },
    });
  }

  setMapMiniMapImagePath(mapId: string, miniMapImagePath: string) {
    this.engine?.sendAction({
      $case: "mapSetMiniMapImagePath",
      mapSetMiniMapImagePath: {
        mapId,
        miniMapImagePath,
      },
    });
  }

  setMapEnabledChats(mapId: string, enabledChats: EnabledChat[]) {
    this.engine?.sendAction({
      $case: "mapSetEnabledChats",
      mapSetEnabledChats: {
        mapId,
        enabledChats,
      },
    });
  }

  setMapDescription(mapId: string, description: string) {
    this.engine?.sendAction({
      $case: "mapSetDescription",
      mapSetDescription: {
        mapId,
        description,
      },
    });
  }

  setMapDecoration(mapId: string, decoration: string) {
    this.engine?.sendAction({
      $case: "mapSetDecoration",
      mapSetDecoration: {
        mapId,
        decoration,
      },
    });
  }

  setMapTutorialTasks(mapId: string, tutorialTasks: TutorialTasks) {
    const wireTutorialTasks = convertTutorialTasksToWireTutorialTasks(tutorialTasks);
    this.engine?.sendAction({
      $case: "mapSetTutorialTasks",
      mapSetTutorialTasks: {
        mapId,
        tutorialTasks: wireTutorialTasks,
      },
    });
  }

  setImpassable(mapId: string, x: number, y: number, impassable = true) {
    this.sendAction({
      $case: "setImpassable",
      setImpassable: {
        mapId,
        x,
        y,
        impassable,
      },
    });
  }

  /**
   * Returns whether or not the given coordinate on the map is impassable or not
   * @param mapId the map to find the impassable in
   * @param x x coordinate of the impassable to consider
   * @param y y coordinate of the impassable to consider
   *
   */
  getImpassable(mapId: string, x: number, y: number) {
    const currMap = this.completeMaps?.[mapId];
    if (!currMap) {
      throw new Error("mapId not found: " + mapId);
    }

    const currentImpassable = currMap.collisions;
    if (!currentImpassable[y]?.[x]) return false;

    return true;
  }

  getObject(objId: string, mapId?: string) {
    const mapIds = mapId ? [mapId] : Object.keys(this.partialMaps);
    for (const mapId of mapIds) {
      const objects = this.partialMaps?.[mapId]?.objects;
      if (!objects) {
        continue;
      }
      const [key, obj] = Object.entries(objects).find(([_k, o]) => o.id === objId) ?? [];
      if (key != null && obj) return { mapId, obj, key };
    }
    return null;
  }

  getObjectByKey(mapId: string, key: string) {
    return this.partialMaps[mapId]?.objects?.[key];
  }

  updateObject(mapId: string, key: string, obj: Partial<MapObject>, useTxn = false) {
    return this.sendAction(
      {
        $case: "mapUpdateObjects",
        mapUpdateObjects: {
          mapId,
          objects: {
            [key]: convertMapObjectToWireObject(obj),
          },
        },
      },
      useTxn,
    );
  }

  setObject(mapId: string, objId: string, _obj: Partial<MapObject>, useTxnId = false) {
    const obj = { ..._obj }; // we do some operations on the first-level fields, don't want to accidentally modify the object passed in
    const currMap = this.partialMaps?.[mapId];
    if (!currMap) {
      throw new Error("mapId not found: " + mapId);
    }
    if (obj.id && obj.id !== objId) {
      obj.id = objId; // forcing objId to match specified objId to prevent strange behavior
      // otherwise don't set it, just a waste of bandwidth
    }
    const key = Object.entries(currMap.objects ?? {}).find(([_, o]) => o.id === objId)?.[0];
    if (key) {
      return this.updateObject(mapId, key, obj, useTxnId);
    } else {
      obj.id = objId; // new objects should always have an id
      delete obj.zIndex; // the server currently overrides it. Maintain that behavior client-side so we can loosen it server-side
      return this.sendAction(
        {
          $case: "mapAddObject",
          mapAddObject: {
            mapId,
            object: convertMapObjectToWireObject(obj),
          },
        },
        useTxnId,
      );
    }
  }

  addObject(mapId: string, obj: MapObjectToAdd, useTxn = false) {
    return this.sendAction(
      {
        $case: "mapAddObject",
        mapAddObject: {
          mapId,
          object: convertMapObjectToWireObject(obj),
        },
      },
      useTxn,
    );
  }

  async deleteObjectByKey(mapId: string, key: string, createTxnId = false) {
    return this.sendAction(
      {
        $case: "mapDeleteObjectByKey",
        mapDeleteObjectByKey: {
          mapId,
          key,
        },
      },
      createTxnId,
    );
  }

  async deleteObject(mapId: string, objId: string, createTxnId = false) {
    return this.sendAction(
      {
        $case: "mapDeleteObjectById",
        mapDeleteObjectById: {
          mapId,
          id: objId,
        },
      },
      createTxnId,
    );
  }

  async requestToLead(target: string, snapshot = "") {
    return this.sendAction({
      $case: "requestToLead",
      requestToLead: {
        target,
        snapshot,
      },
    });
  }

  setManualVideoSrc(manualVideoSrc: string, targetId?: string) {
    return this.sendAction({
      $case: "setManualVideoSrc",
      setManualVideoSrc: {
        manualVideoSrc,
        targetId,
      },
    });
  }

  async setSubtitle(subtitle: string, targetId?: string) {
    return this.sendAction({
      $case: "setSubtitle",
      setSubtitle: {
        subtitle,
        targetId,
      },
    });
  }

  async highFive(targetId: string, emote: string) {
    return this.sendAction({
      $case: "highFive",
      highFive: {
        targetId,
        emote,
      },
    });
  }

  updateSpaceItems(items: { [id: string]: SpaceItem }) {
    this.engine?.sendAction({
      $case: "updateSpaceItems",
      updateSpaceItems: {
        items,
      },
    });
  }

  addInventoryItem(itemId: string, delta: number, targetId: string) {
    this.engine?.sendAction({
      $case: "addInventoryItem",
      addInventoryItem: {
        itemId,
        delta,
        targetId,
      },
    });
  }

  removeInventoryItem(itemId: string, delta: number, targetId?: string) {
    this.engine?.sendAction({
      $case: "removeInventoryItem",
      removeInventoryItem: {
        itemId,
        delta,
        targetId,
      },
    });
  }

  craft(inputs: { [id: string]: number }) {
    this.engine?.sendAction({
      $case: "craft",
      craft: {
        inputs,
      },
    });
  }

  triggerInventoryItem(itemId: string, abilityId: string) {
    this.engine?.sendAction({
      $case: "triggerInventoryItem",
      triggerInventoryItem: {
        itemId,
        abilityId,
      },
    });
  }

  setAllowScreenPointer(allowScreenPointer: boolean) {
    this.engine?.sendAction({
      $case: "setAllowScreenPointer",
      setAllowScreenPointer: {
        allowScreenPointer,
      },
    });
  }

  setDeskInfo(deskInfo: DeskInfoV2, targetId?: string) {
    this.engine?.sendAction({
      $case: "setDeskInfo",
      setDeskInfo: {
        deskInfo,
        targetId,
      },
    });
  }

  startRecording(nookId: string, initializing: boolean) {
    this.engine?.sendAction({
      $case: "startRecording",
      startRecording: {
        nookId,
        initializing,
      },
    });
  }

  requestAccessViaCheckIn(
    userId: string,
    canceled: boolean,
    name?: string,
    currentlyEquippedWearables?: DBOutfit,
  ) {
    this.engine?.sendAction({
      $case: "requestAccessViaCheckIn",
      requestAccessViaCheckIn: {
        userId,
        canceled,
        name,
        currentlyEquippedWearables,
      },
    });
  }

  respondToAccessRequest(
    userId: string,
    accepted: boolean,
    locationType?: RespondToAccessRequest_LocationTypeEnum,
  ) {
    this.engine?.sendAction({
      $case: "respondToAccessRequest",
      respondToAccessRequest: {
        userId,
        accepted,
        locationType,
      },
    });
  }

  setDeskFromNextAvailableDesk(params?: {
    targetId?: string;
    preferredDesk?: MapAndDesk;
    desksToIgnore?: MapAndDesk[];
  }) {
    const { targetId, preferredDesk, desksToIgnore = [] } = params || {};

    this.engine?.sendAction({
      $case: "setDeskFromNextAvailableDesk",
      setDeskFromNextAvailableDesk: {
        targetId,
        preferredDesk,
        desksToIgnore,
      },
    });
  }

  setSpaceRolePermissionOverride(role: string, permission: string, enabled: boolean) {
    this.engine?.sendAction({
      $case: "setSpaceRolePermissionOverride",
      setSpaceRolePermissionOverride: {
        role,
        permission,
        enabled,
      },
    });
  }

  getStats() {
    if (!this.engine) return {};

    if (this.engine.clientUid === undefined) {
      logger.error("Client uid is undefined in getStats");
    } else if (this.players[this.engine.clientUid] === undefined) {
      logger.error("Current player is undefined in getStats");
    }
    const metrics = {
      serverURL: this.engine.serverURL,
      engine: this.engine.getMetrics(),
      wsReadyState: this.engine.ws?.readyState,
      timeToConnect: this._timeToConnect,
      timeToFirstOnMapMs: Object.fromEntries(this.timeToFirstOnMapsMs),
      onMapCountsAllTime: this._onMapCounts,
      gameClientAgeMs: Date.now() - this._initializedAtMs,
      numPlayers: Object.keys(this.players).length,
      currentPosition: {
        map: this.players[this.engine.clientUid ?? ""]?.map,
        x: this.players[this.engine.clientUid ?? ""]?.x,
        y: this.players[this.engine.clientUid ?? ""]?.y,
      },
      gameClientVersion: GAME_CLIENT_VERSION,
    };
    this.putMetric("get-stats", metrics);
    return metrics;
  }

  checkForExits() {
    // If we haven't seen the player during the initialization but they are in our list of players, they probably
    // exited while this client was disconnected. Send a playerExits event to our client for each of these players
    Object.keys(this.players)
      .filter((uid) => !this.playerUidsSeenOnConnect.has(uid))
      .forEach((uid, index, array) => {
        // Creating encIds in the negative range, so they don't conflict with real encIds
        const encId = index - array.length;
        this.encIdMapping[encId] = uid;
        this.engine?.onevent({
          event: {
            $case: "playerExits",
            playerExits: {
              encId: encId,
            },
          },
        });
      });
  }

  // mostly just handled for you internally, but occasionally needed for updating subscriptions
  public sendSubscribe() {
    const onSuccess = () => {
      // if it's been <5 mins since the last deploy, give it a while for everyone to reconnect, then check for exits.
      // otherwise, check immediately so you don't see people who left while you were suspended
      if (Date.now() - this.lastDeployTime < CHECK_PLAYER_EXISTS_DELAY) {
        this.checkForExitsTimeout = setTimeout(
          () => this.checkForExits(),
          CHECK_PLAYER_EXISTS_DELAY,
        );
      } else {
        this.checkForExits();
      }

      // partial if no map data has been sent
      const isPartialSubscribe = Object.keys(this.partialMaps).length === 0;

      this.subscriptionFinishedCallback();
      this.engine?.logInitialSyncComplete(isPartialSubscribe);
    };
    this.sendAction(
      {
        $case: "updateSubscriptions",
        updateSubscriptions: {
          subscriptions: this.eventSubscriptions,
          mapUpdateIds: this.lastMapUpdateIds,
        },
      },
      true,
    )
      .then(() => {
        onSuccess();
      })
      .catch(() => {
        // this could be because we got disconnected, in which case we'll rety,
        // or it took more than 10 mins, in which case... things are real bad anyways,
        // and there are bigger issues than not correctly resolving the promise at that point
      });
  }

  _startMapDataCheckInterval() {
    this.timeToFirstOnMapsMs = new Map();
    this.mapDataChecks = 0;
    this.mapDataCheckInterval && clearInterval(this.mapDataCheckInterval);
    this.mapDataCheckInterval = setInterval(() => {
      this.mapDataChecks += 1;
      this.putMetric(`still-no-map-data-ms`, {
        gameClientAgeMs: Date.now() - this._initializedAtMs,
        mapDataChecksCount: this.mapDataChecks,
        timeToFirstMapDataMs: Object.fromEntries(this.timeToFirstOnMapsMs),
      });
    }, 2500);
  }

  getDebugHistory() {
    return logger.exportHistory();
  }

  // Util functions

  /**
   * Returns all players that are in the same map as you.
   * @requires the map and players to be defined first - use game.waitForInit() to be sure it has been defined.
   * @param mapId The string mapId you want to filter on
   * @example game.getPlayersInMap("new office")
   */
  getPlayersInMap(mapId: string) {
    if (!this.completeMaps[mapId]) {
      throw new Error("Can't get players in map: no map for " + mapId);
    }
    const sameMapPlayers = Object.values(this.players).filter((player) => player.map === mapId);
    return sameMapPlayers;
  }

  /**
   * Returns all known maps- i.e the keys of game.partialMaps
   * We add this abstraction for convience and clarity, and because game.partialMaps could be renamed.
   * You should prefer to use this function.
   */
  getKnownPartialMaps() {
    return Object.keys(this.partialMaps);
  }

  /**
   * Returns the keys for all completed maps. See docstring for getKnownPartialMaps().
   */
  getKnownCompletedMaps() {
    return Object.keys(this.completeMaps);
  }

  /**
   * Returns a list of all objects in the entire space matching a condition. See filterObjectsInMap for an example
   * @requires map data that is being searched to be defined first - use game.waitForInit() to get all known map data
   * @param filter A predicate that returns a truthy value if you want the object to be returned.
   *
   */
  filterObjectsInSpace(filter: (obj: Partial<MapObject>) => boolean | undefined) {
    const foundObjects: MapObject[] = [];
    this.getKnownCompletedMaps().forEach((mapId) => {
      foundObjects.push(...this.filterObjectsInMap(mapId, filter));
    });
    return foundObjects;
  }

  /**
   * Returns a list of all objects in the map matching a condition.
   * @requires the map to be defined first - use game.waitForInit() to be sure it has been defined.
   * @param mapId The map you want to filter objects on. If there are no objects in the map, an empty array is returned.
   * @param filter A predicate that returns a truthy value if you want the object to be returned.
   * @example game.filterObjectsInMap("park-legacy", (obj) => obj.id.startsWith("password-door")); // finds all password doors in a map
   */
  filterObjectsInMap(mapId: string, filter: (obj: Partial<MapObject>) => boolean | undefined) {
    const map = this.partialMaps[mapId];
    // splitting this up for more descriptive error handling and also to make TS happy
    if (!map) {
      throw new Error("Can't filter objects in map: no map for " + mapId);
    }
    if (!map.objects) return [];

    return Object.values(map.objects).filter(filter);
  }

  /**
   * Returns a list of all uids in the space for players matching a condition.
   * @param filter A predicate that returns a truthy value if you want the uid to be returned
   * @requires the players to be defined first - use game.waitForInit() to be sure it has been defined.
   * @example filterUidsInSpace((player) => player.name === "Evelyn"); // returns the uid for all players named Evelyn
   */
  filterUidsInSpace(filter: (player: Partial<Player>) => boolean | undefined) {
    return Object.keys(this.players).filter((key) => {
      // extra verbosity result of nouncheckedindexaccess
      const player = this.players[key];
      if (player) return filter(player);

      return false;
    });
  }

  /**
   * Returns a list of all players in the space based on player critera.
   * @param filter A predicate that returns a truthy value if you want the player to be returned
   * @requires the players to be defined first - use game.waitForInit() to be sure it has been defined.
   * @example filterPlayersInSpace((player) => player.name === "Evelyn"); // returns the Player object for all players named Evelyn
   */
  filterPlayersInSpace(filter: (player: Partial<Player>) => boolean | undefined) {
    return Object.values(this.players).filter(filter);
  }

  hipToBeSquare(hipToBeSquare: HipToBeSquare) {
    this.sendAction({
      $case: "hipToBeSquare",
      hipToBeSquare,
    });
  }

  patchGatherEventsSpaceSession(speakerUpdatesSession: SpeakerUpdatesSession) {
    this.sendAction({
      $case: "speakerUpdatesSession",
      speakerUpdatesSession,
    });
  }

  /**
   * Utility function that returns true if a player is standing inside a given private space.
   * Requires the map to be defined first - use game.waitForInit() to be sure it has been defined.
   * You can pass this directly into filterPlayersInSpace using a thunk.
   * @requires the map to be defined first - use game.waitForInit() to be sure it has been defined.
   * @param player A Partial referencing the player
   * @param mapId the map the private tile is in
   * @param privateSpaceId the name of the private space you put in the mapmaker
   * @example isPlayerInPrivateSpace(player, "new office", "library") // returns if a given player is in the library
   * @example filterPlayersInSpace((player) => isPlayerInPrivateSpace(player, "new office", "library")); // finds everyone on that tile
   */
  isPlayerInPrivateSpace(player: Partial<Player>, mapId: string, privateSpaceId: string) {
    if (!this.completeMaps[mapId]) {
      throw new Error("mapId invalid or not yet fully defined. Have you waited for init yet?");
    }
    // this extra verbosity is because of the additional typescript rules we've added
    // c'est la vie
    const nook = this.completeMaps[mapId]?.nooks?.[privateSpaceId];
    if (!nook) return false;

    return !!nook.nookCoords.coords.some((c) => c.x === player.x && c.y === player.y);
  }

  /**
   * Returns this game instance's player if they are defined, throwing an error
   * if the client is not connected or the client's player has not be initialized
   * @requires the game engine to be connected and initialized with the server
   * @requires the game client to have entered
   */
  getMyPlayer(): Player {
    if (!this.engine?.clientUid) {
      throw new Error("Client has not received ready event from server and is still connecting");
    }
    const currentPlayer = this.players[this.engine.clientUid];
    if (!currentPlayer) {
      throw new Error("Current player not found. Did you call game.enter?");
    }
    return currentPlayer;
  }

  /**
   * Fires the `mapDeleteObjectByKey` event for any objects that were deleted while we were
   * disconnected from the GS.
   */
  private cleanupDeletedObjects(mapId: string, deletedObjectKeys: Set<string>) {
    logger.log(`cleaning up ${deletedObjectKeys.size} objects deleted while we were away`);
    deletedObjectKeys.forEach((key) => {
      this.engine?.onevent({
        event: {
          $case: "mapDeleteObjectByKey",
          mapDeleteObjectByKey: { mapId, key },
        },
      });
    });
  }
}
