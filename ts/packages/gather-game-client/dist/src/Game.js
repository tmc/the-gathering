"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const uuid_1 = require("uuid");
const Logger_1 = require("./Logger");
const gameMap_1 = require("@gathertown/gather-game-common/dist/src/public/gameMap");
const gameState_1 = require("@gathertown/gather-game-common/dist/src/public/gameState");
const player_1 = require("@gathertown/gather-game-common/dist/src/public/player");
const ramda_1 = require("ramda");
const Engine_1 = require("./Engine");
const config_1 = require("./config");
const GameEventContexts_1 = require("./GameEventContexts");
const MapsAccumulator_1 = require("./MapsAccumulator");
const DefaultSubscriptions_1 = require("./DefaultSubscriptions");
const version_1 = require("./version");
const PlayerChangesMaps_1 = require("./synthetic/events/PlayerChangesMaps");
const responseCodes_1 = require("@gathertown/gather-game-common/dist/src/public/responseCodes");
__exportStar(require("@gathertown/gather-game-common/dist/src/public/events"), exports);
__exportStar(require("@gathertown/gather-game-common/dist/src/public/gameMap"), exports);
__exportStar(require("@gathertown/gather-game-common/dist/src/public/gameState"), exports);
__exportStar(require("@gathertown/gather-game-common/dist/src/public/player"), exports);
__exportStar(require("@gathertown/gather-game-common/dist/src/public/position"), exports);
__exportStar(require("@gathertown/gather-game-common/dist/src/public/responseCodes"), exports);
__exportStar(require("@gathertown/gather-game-common/dist/src/public/remoteWork"), exports);
__exportStar(require("@gathertown/gather-game-common/dist/src/public/utils"), exports);
const CHECK_PLAYER_EXISTS_DELAY = 5 * 60 * 1000;
class Game {
    debug(debugState = true) {
        Logger_1.logger.setDebugState(debugState);
    }
    constructor(spaceId, getAuth, onInput, dispatchGameUpdate, dispatchMapUpdate, options) {
        this.intendToBeConnected = false;
        this.subscriptionFinishedCallback = () => Logger_1.logger.log("default finished subscription callback");
        this._initializedAtMs = 0;
        this._connectedAtMs = 0;
        this.hasSentMapSinceConnect = false;
        this.timeToFirstOnMapsMs = new Map();
        this._onMapCounts = {};
        this._connectCalledAt = 0;
        this._timeToConnect = -1;
        this.subscriptions = {};
        this.disconnectHandlers = {};
        this.legacySubscriptionsConnection = {};
        this.eventSubscriptions = {};
        this.encIdMapping = {};
        this.playerUidsSeenOnConnect = new Set();
        this.checkForExitsTimeout = setTimeout(() => { });
        this.lastDeployTime = 0;
        this.players = {};
        this.eventPerfCallbacks = [];
        this.mapsAccumulator = new MapsAccumulator_1.MapsAccumulator();
        this.completeMaps = this.mapsAccumulator.completeMaps;
        this.partialMaps = this.mapsAccumulator.partialMaps;
        this.lastMapUpdateIds = this.mapsAccumulator.lastMapUpdateIds;
        this.inputId = 1;
        this.mapDataChecks = 0;
        this.spaceItems = {};
        this.putMetric = (_name, _value) => {
            if (config_1.isBrowser) {
                Logger_1.logger.error("tried to put metric but no metric function provided");
            }
        };
        if (options?.logLevels) {
            Logger_1.logger.enabled = Object.assign(Logger_1.logger.enabled, options.logLevels);
        }
        this.getAuth = getAuth;
        this.onInput = onInput;
        this.dispatchGameUpdate = dispatchGameUpdate;
        this.dispatchMapUpdate = dispatchMapUpdate;
        this.eventSubscriptions = options?.subscribeTo ?? DefaultSubscriptions_1.defaultSubscriptions;
        this.updateSubscriptionsPromise = new Promise((resolve) => {
            this.subscriptionFinishedCallback = resolve;
        });
        this.updateSubscriptionsPromise.catch(() => {
        });
        if (spaceId) {
            this.init(spaceId, options?.overrideServer, options?.overrideHttpServer);
        }
    }
    init(spaceId, _overrideServer, _overrideHttpServer) {
        if (this.spaceId) {
            if (this.spaceId === spaceId) {
                Logger_1.logger.warn("duplicate Game init call is being ignored; already initialized");
                return;
            }
            throw new Error("game has already been init! initializing again would lead to undefined behavior");
        }
        this.spaceId = spaceId.substring(0, 16) + "\\" + spaceId.substring(17);
        let overrideServer;
        let overrideHttpServer;
        if (process.env.ENVIRONMENT === "local" || process.env.ENVIRONMENT === "test") {
            const url = new URL(config_1.API_BASE_PATH);
            overrideServer = `ws://${url.hostname}:${process.env.GAMESERVER_PORT}`;
        }
        if (_overrideServer) {
            overrideServer = _overrideServer;
        }
        if (_overrideHttpServer) {
            overrideHttpServer = _overrideHttpServer;
        }
        this.engine = new Engine_1.Engine(this.spaceId, this.getAuth, overrideServer, overrideHttpServer);
        this._initializedAtMs = Date.now();
        this.engine.onmetric = (metricName, additionalData) => {
            this.putMetric(metricName, additionalData);
        };
        this.engine.subscriptionHook = () => this.sendSubscribe();
        this.engine.onevent = (serverClientEvent) => {
            const { event } = serverClientEvent;
            if (!event) {
                Logger_1.logger.warn("dropping unrecognized serverClientEvent");
                return;
            }
            Logger_1.logger.debug(serverClientEvent);
            const syntheticEvents = [];
            let context = {
                spaceId: this.spaceId ?? "",
            };
            const playerDeltas = {};
            switch (event.$case) {
                case "playerJoins": {
                    const { encId } = event.playerJoins;
                    const uid = this.encIdMapping[encId];
                    if (!uid) {
                        throw new Error(`Cannot find playerUid corresponding to encId ${encId}`);
                    }
                    this.playerUidsSeenOnConnect.add(uid);
                    if (!this.players[uid]) {
                        const player = (0, player_1.generateDefaultPlayer)(uid);
                        this.players[uid] = player;
                        playerDeltas[uid] = { ...player };
                    }
                    break;
                }
                case "playerExits": {
                    const { encId } = event.playerExits;
                    const uid = this.encIdMapping[encId];
                    if (!uid) {
                        throw new Error(`Cannot find playerUid corresponding to encId ${encId}`);
                    }
                    playerDeltas[uid] = gameState_1.GAME_STATE_PLAYER_DISCONNECT_SYMBOL;
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
                        Logger_1.logger.error("Dropping a playerLeavesWhisper event received before a playerJoins!");
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
                        Logger_1.logger.error(`missing encId ${encId} for event: ${event.$case}`);
                        break;
                    }
                    const player = this.getPlayer(uid);
                    if (!player) {
                        Logger_1.logger.error(`Dropping a ${event.$case} event received before a playerJoins!`);
                        break;
                    }
                    (0, ramda_1.forEachObjIndexed)((item, itemId) => {
                        if (item.count > 0) {
                            player.inventory.items = { ...player.inventory.items, [itemId]: item };
                        }
                        else {
                            player.inventory.items = (0, ramda_1.omit)([itemId.toString()], player.inventory.items);
                        }
                    }, items);
                    (0, ramda_1.forEachObjIndexed)((itemId, coord) => {
                        if (itemId === "") {
                            player.inventory.order = (0, ramda_1.omit)([coord.toString()], player.inventory.order);
                        }
                        else {
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
                    const wantedSubscriptions = Object.keys(this.eventSubscriptions).filter((key) => !!this.eventSubscriptions[key]);
                    const missingSubscriptions = wantedSubscriptions.filter((sub) => !gotSubscriptions.has(sub));
                    if (missingSubscriptions.length > 0) {
                        Logger_1.logger.log("no permissions to subscribe to: " + missingSubscriptions.join(", "));
                    }
                    break;
                }
                case "playerSetsImagePointer":
                case "playerInteractsWithObject":
                case "playerTriggersObject":
                case "customEvent":
                case "ready":
                case "serverHeartbeat":
                case "info":
                case "warn":
                case "error":
                case "transactionStatus":
                case "playerTriggersInventoryItem":
                case "playerStartsRecording":
                    break;
                default: {
                    const eventAny = event;
                    const eventVal = eventAny[eventAny.$case];
                    const encId = eventVal?.encId;
                    if (event.$case.startsWith("map")) {
                        const completedMap = this.mapsAccumulator.addChunk(event);
                        if (!completedMap) {
                            break;
                        }
                        this.dispatchMapUpdate?.(completedMap.id, completedMap);
                        if (!this.hasSentMapSinceConnect) {
                            this.hasSentMapSinceConnect = true;
                            Logger_1.logger.checkpoint(`gt: ${Date.now() - this._connectedAtMs} : doing first onmap since connect`);
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
                    }
                    else if (event.$case.startsWith("player") && encId != null) {
                        if (event.$case === "playerMoves") {
                            (0, PlayerChangesMaps_1.generatePlayerChangesMapsEvent)(event, this, syntheticEvents);
                        }
                        const uids = [];
                        const fetchedUid = this.encIdMapping[encId];
                        if (fetchedUid != null) {
                            uids.push(fetchedUid);
                        }
                        else {
                            Logger_1.logger.error(`missing encId ${encId} for event: ${eventAny.$case}`);
                        }
                        if (eventVal?.encIdTarget) {
                            const uidTarget = this.encIdMapping[eventVal?.encIdTarget];
                            if (uidTarget != null) {
                                uids.push(uidTarget);
                            }
                            else {
                                Logger_1.logger.error(`missing encTargetId: ${eventVal?.encIdTarget} in event: ${eventAny.$case}`);
                            }
                        }
                        for (const entry in eventVal) {
                            for (const uid of uids) {
                                if (entry === "encId" || entry === "encIdTarget" || eventVal[entry] === undefined) {
                                    continue;
                                }
                                const player = this.players[uid];
                                if (!player) {
                                    Logger_1.logger.error(`Dropping a ${event.$case} event received before a playerJoins!`);
                                    continue;
                                }
                                if (!playerDeltas[uid]) {
                                    playerDeltas[uid] = {};
                                }
                                const playerRecord = player;
                                const playerDeltaRecord = playerDeltas[uid];
                                if (entry === "mapId") {
                                    playerDeltaRecord["map"] = eventVal[entry];
                                    player.map = eventVal[entry];
                                }
                                else {
                                    playerRecord[entry] = eventVal[entry];
                                    playerDeltaRecord[entry] = eventVal[entry];
                                }
                            }
                        }
                    }
                }
            }
            this.dispatchGameUpdate?.(playerDeltas);
            context = (0, GameEventContexts_1.fillOrCreateContext)(event, this, context);
            this.publishEvent(event.$case, event, context);
            syntheticEvents.forEach((syntheticEvent) => {
                this.publishEvent(syntheticEvent.$case, syntheticEvent, context);
            });
        };
        this.engine.onconnect = () => {
            this._connectedAtMs = Date.now();
            this._timeToConnect = this._connectedAtMs - this._connectCalledAt;
            this.hasSentMapSinceConnect = false;
            this.mapsAccumulator.startTrackingMissedObjects((mapId, keys) => this.cleanupDeletedObjects(mapId, keys));
            this._startMapDataCheckInterval();
            Object.values(this.legacySubscriptionsConnection).forEach((f) => {
                f(true);
            });
        };
        this.engine.ondisconnect = (code, reason) => {
            this.playerUidsSeenOnConnect.clear();
            clearTimeout(this.checkForExitsTimeout);
            if (code === responseCodes_1.GameWsCloseCode.GOING_AWAY) {
                this.lastDeployTime = Date.now();
            }
            Object.values(this.legacySubscriptionsConnection).forEach((f) => {
                f(false);
            });
            for (const id in this.disconnectHandlers) {
                const handler = this.disconnectHandlers[id];
                handler ? handler(code, reason) : Logger_1.logger.warn(`Undefined handler with id ${id}`);
            }
        };
    }
    connect() {
        if (!this.spaceId || !this.engine) {
            throw new Error("game client has not been initialized");
        }
        if (this.intendToBeConnected)
            return;
        this.intendToBeConnected = true;
        this._connectCalledAt = Date.now();
        Logger_1.logger.log("connecting to " + this.spaceId);
        this.engine.start();
    }
    async waitForInit() {
        if (!this.updateSubscriptionsPromise) {
            throw new Error("waitForInit was called but no updateSubscriptionsPromise exists.");
        }
        return this.updateSubscriptionsPromise;
    }
    waitForFirstEnter(playerId) {
        if (this.players[playerId])
            return Promise.resolve();
        return new Promise((resolve) => {
            const unsub = this.subscribeToEvent("playerJoins", (_, context) => {
                if (context.playerId === playerId) {
                    unsub();
                    resolve();
                }
            });
        });
    }
    disconnect() {
        if (!this.intendToBeConnected)
            return Promise.resolve();
        const disconnectPromise = new Promise((res) => {
            const unsub = this.subscribeToDisconnection(() => {
                res();
                unsub();
            });
        });
        if (this.engine) {
            Logger_1.logger.log("Disconnecting");
            Logger_1.logger.checkpoint("stopping engine in Game disconnect");
            this.engine.stop();
            this.intendToBeConnected = false;
        }
        if (this.mapDataCheckInterval) {
            clearInterval(this.mapDataCheckInterval);
        }
        return disconnectPromise;
    }
    getPlayer(uid) {
        return this.players[uid];
    }
    getPlayerUidFromEncId(encId) {
        return this.encIdMapping[encId];
    }
    publishEvent(eventId, data, context) {
        const startTime = performance.now();
        const subMap = this.subscriptions[eventId];
        if (!subMap)
            return;
        for (const subscription of Object.values(subMap)) {
            try {
                if (subscription.filter && !subscription.filter(data, context)) {
                    continue;
                }
                subscription.handler(data, context);
            }
            catch (e) {
                Logger_1.logger.error(`error occurred in handler for ${eventId}: ${Logger_1.logger.errString(e)}`);
            }
        }
        const elapsedTime = performance.now() - startTime;
        this.eventPerfCallbacks.forEach((callback) => callback(eventId, elapsedTime));
    }
    subscribeToEvent(eventId, handler, filter) {
        const subscriptionId = (0, uuid_1.v4)();
        const eventSubs = this.subscriptions[eventId] ?? {};
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
    subscribeToConnection(callback) {
        const handle = (0, uuid_1.v4)();
        this.legacySubscriptionsConnection[handle] = callback;
        return () => {
            delete this.legacySubscriptionsConnection[handle];
        };
    }
    subscribeToDisconnection(callback) {
        const handle = (0, uuid_1.v4)();
        this.disconnectHandlers[handle] = callback;
        return () => {
            delete this.disconnectHandlers[handle];
        };
    }
    subscribeToEventPerf(callback) {
        this.eventPerfCallbacks.push(callback);
        return () => {
            this.eventPerfCallbacks = this.eventPerfCallbacks.filter((cb) => cb !== callback);
        };
    }
    sendAction(action, useTxn = false, txnTimeout) {
        return this.engine?.sendAction(action, false, useTxn, undefined, txnTimeout);
    }
    sendAction2(actionId, actionData, useTxn = false, txnTimeoutMs = undefined) {
        return this.engine?.sendAction({
            $case: actionId,
            [actionId]: actionData,
        }, false, useTxn, txnTimeoutMs);
    }
    enter(info, spawnToken, targetId) {
        this.engine?.queueOrExecuteEnter(info, spawnToken, targetId);
    }
    exit(useTxn = false) {
        return this.engine?.exit(useTxn);
    }
    respawn(useTxn) {
        return this.sendAction({
            $case: "respawn",
            respawn: {},
        }, useTxn);
    }
    spawn(spawnToken) {
        this.sendAction({
            $case: "spawn",
            spawn: {
                spawnToken,
            },
        });
    }
    move(dir, stopped = false, targetId, txnTimeout) {
        const inputId = this.inputId++;
        const action = {
            $case: "move",
            move: {
                dir,
                stopped,
                inputId,
                targetId,
            },
        };
        if (this.onInput) {
            const txnPromise = this.sendAction(action, true, txnTimeout);
            this.onInput(dir, stopped, inputId, txnPromise);
        }
        else {
            this.sendAction(action);
        }
    }
    playSound(src, volume, targetId) {
        this.sendAction({
            $case: "playSound",
            playSound: {
                src,
                volume,
                targetId,
            },
        });
    }
    stopSound(src, targetId) {
        this.sendAction({
            $case: "stopSound",
            stopSound: {
                src,
                targetId,
            },
        });
    }
    ghost(ghost, targetId) {
        this.sendAction({
            $case: "ghost",
            ghost: {
                ghost,
                targetId,
            },
        });
    }
    enterWhisper(recipientId, dir) {
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
    teleport(mapId, x, y, targetId, direction = player_1.SpriteDirection.Down) {
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
    ring(user) {
        this.sendAction({
            $case: "ring",
            ring: {
                user,
            },
        });
    }
    block(blockedUserId, blocked) {
        this.sendAction({
            $case: "block",
            block: {
                blockedUserId,
                blocked,
            },
        });
    }
    pointer(objectId, x, y) {
        this.sendAction({
            $case: "setImagePointer",
            setImagePointer: {
                objectId,
                x,
                y,
            },
        });
    }
    wave(user, isReply = false) {
        this.sendAction({
            $case: "wave",
            wave: {
                user,
                isReply,
            },
        });
    }
    screenPointer(screenId, x, y) {
        this.sendAction({
            $case: "setScreenPointer",
            setScreenPointer: {
                screenId,
                x,
                y,
            },
        });
    }
    setActivelySpeaking(activelySpeaking) {
        this.sendAction({
            $case: "activelySpeaking",
            activelySpeaking: {
                activelySpeaking,
            },
        });
    }
    requestMute(target, video) {
        this.sendAction({
            $case: "requestMute",
            requestMute: {
                target,
                video,
            },
        });
    }
    setEmote(emote, targetId, count) {
        this.sendAction({
            $case: "setEmoteV2",
            setEmoteV2: {
                emote,
                count,
                targetId,
            },
        });
    }
    setAway(away, targetId) {
        this.sendAction({
            $case: "setAway",
            setAway: {
                away,
                targetId,
            },
        });
    }
    setName(name, targetId) {
        this.sendAction({
            $case: "setName",
            setName: {
                name,
                targetId,
            },
        });
    }
    setIsMobile(isMobile) {
        this.sendAction({
            $case: "setIsMobile",
            setIsMobile: {
                isMobile,
            },
        });
    }
    setTextStatus(textStatus, targetId) {
        this.sendAction({
            $case: "setTextStatus",
            setTextStatus: {
                textStatus,
                targetId,
            },
        });
    }
    setEmojiStatus(emojiStatus, targetId) {
        this.sendAction({
            $case: "setEmojiStatus",
            setEmojiStatus: {
                emojiStatus,
                targetId,
            },
        });
    }
    setPronouns(pronouns, targetId) {
        this.sendAction({
            $case: "setPronouns",
            setPronouns: {
                pronouns,
                targetId,
            },
        });
    }
    setTimezone(timezone, targetId) {
        this.sendAction({
            $case: "setTimezone",
            setTimezone: {
                timezone,
                targetId,
            },
        });
    }
    setTitle(title, targetId) {
        this.sendAction({
            $case: "setTitle",
            setTitle: {
                title,
                targetId,
            },
        });
    }
    setCity(city, targetId) {
        this.sendAction({
            $case: "setCity",
            setCity: {
                city,
                targetId,
            },
        });
    }
    setCountry(country, targetId) {
        this.sendAction({
            $case: "setCountry",
            setCountry: {
                country,
                targetId,
            },
        });
    }
    setStartDate(startDate, targetId) {
        this.sendAction({
            $case: "setStartDate",
            setStartDate: {
                startDate,
                targetId,
            },
        });
    }
    setPhone(phone, targetId) {
        this.sendAction({
            $case: "setPhone",
            setPhone: {
                phone,
                targetId,
            },
        });
    }
    setDisplayEmail(displayEmail, targetId) {
        this.sendAction({
            $case: "setDisplayEmail",
            setDisplayEmail: {
                displayEmail,
                targetId,
            },
        });
    }
    setDescription(description, targetId) {
        this.sendAction({
            $case: "setDescription",
            setDescription: {
                description,
                targetId,
            },
        });
    }
    setProfileImageUrl(profileImageUrl, targetId) {
        this.sendAction({
            $case: "setProfileImageUrl",
            setProfileImageUrl: {
                profileImageUrl,
                targetId,
            },
        });
    }
    setPersonalImageUrl(personalImageUrl, targetId) {
        this.sendAction({
            $case: "setPersonalImageUrl",
            setPersonalImageUrl: {
                personalImageUrl,
                targetId,
            },
        });
    }
    setAffiliation(affiliation, targetId) {
        this.sendAction({
            $case: "setAffiliation",
            setAffiliation: {
                affiliation,
                targetId,
            },
        });
    }
    setAvailability(availability, endOption) {
        this.sendAction({
            $case: "setAvailability",
            setAvailability: {
                availability,
                endOption,
            },
        });
    }
    setEventStatus(eventStatus, targetId) {
        this.sendAction({
            $case: "setEventStatus",
            setEventStatus: {
                eventStatus,
                targetId,
            },
        });
    }
    setInConversation(inConversation, targetId) {
        this.sendAction({
            $case: "setInConversation",
            setInConversation: {
                inConversation,
                targetId,
            },
        });
    }
    setCurrentlyEquippedWearables(currentlyEquippedWearables, targetId) {
        this.engine?.sendAction({
            $case: "setCurrentlyEquippedWearables",
            setCurrentlyEquippedWearables: {
                currentlyEquippedWearables,
                targetId,
            },
        });
    }
    clearItem(targetId) {
        this.engine?.sendAction({
            $case: "setItemString",
            setItemString: {
                itemString: "",
                targetId,
            },
        });
    }
    setItem(itemId, itemImage, targetId) {
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
    triggerObject(mapId, key) {
        this.engine?.sendAction({
            $case: "triggerObject",
            triggerObject: {
                mapId,
                key,
            },
        });
    }
    setSpotlight(user, spotlighted) {
        this.sendAction({
            $case: "spotlight",
            spotlight: {
                spotlightedUser: user,
                isSpotlighted: spotlighted,
            },
        });
    }
    banPlayer(user) {
        this.sendAction({
            $case: "ban",
            ban: {
                user,
            },
        });
    }
    kickPlayer(user) {
        this.sendAction({
            $case: "kick",
            kick: {
                user,
            },
        });
    }
    interact(mapId, key, data) {
        this.sendAction({
            $case: "interactWithObject",
            interactWithObject: {
                mapId,
                key,
                ...(data ? { dataJson: JSON.stringify(data) } : {}),
            },
        });
    }
    chat(chatRecipient, localPlayers, mapId, data) {
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
    chatMessageUpdated(message) {
        this.sendAction({
            $case: "chatMessageUpdated",
            chatMessageUpdated: message,
        });
    }
    registerCommand(command) {
        return this.sendAction({
            $case: "registerCommand",
            registerCommand: {
                command,
            },
        }, true);
    }
    sendCommand(command, targetId) {
        this.sendAction({
            $case: "sendCommand",
            sendCommand: {
                command,
                targetId,
            },
        });
    }
    notify(notification) {
        this.sendAction({
            $case: "notify",
            notify: {
                notification,
            },
        });
    }
    shootConfetti(targetId) {
        this.engine?.sendAction({
            $case: "shootConfetti",
            shootConfetti: {
                targetId,
            },
        });
    }
    setVehicleId(vehicleId, action, targetId) {
        this.engine?.sendAction({
            $case: "setVehicleId",
            setVehicleId: {
                vehicleId,
                targetId,
                action,
            },
        });
    }
    setSpeedModifier(speedModifier, targetId) {
        this.engine?.sendAction({
            $case: "setSpeedModifier",
            setSpeedModifier: {
                speedModifier,
                targetId,
            },
        });
    }
    setIsAlone(isAlone, targetId) {
        this.engine?.sendAction({
            $case: "setIsAlone",
            setIsAlone: {
                isAlone,
                targetId,
            },
        });
    }
    setFocusModeEndTime(focusModeEndTime, targetId) {
        this.engine?.sendAction({
            $case: "setFocusModeEndTime",
            setFocusModeEndTime: {
                focusModeEndTime,
                targetId,
            },
        });
    }
    setFollowTarget(followTarget, targetId) {
        this.engine?.sendAction({
            $case: "setFollowTarget",
            setFollowTarget: {
                followTarget,
                targetId,
            },
        });
    }
    enterPortal(targetUrl, targetId, bypassPrompt) {
        this.engine?.sendAction({
            $case: "enterPortal",
            enterPortal: {
                targetUrl,
                targetId,
                bypassPrompt,
            },
        });
    }
    setMapDimensions(mapId, width, height) {
        this.engine?.sendAction({
            $case: "mapSetDimensions",
            mapSetDimensions: {
                mapId,
                width,
                height,
            },
        });
    }
    setMapCollisions(mapId, x, y, w, h, mask) {
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
    setMapBackgroundImagePath(mapId, backgroundImagePath) {
        this.engine?.sendAction({
            $case: "mapSetBackgroundImagePath",
            mapSetBackgroundImagePath: {
                mapId,
                backgroundImagePath,
            },
        });
    }
    setMapForegroundImagePath(mapId, foregroundImagePath) {
        this.engine?.sendAction({
            $case: "mapSetForegroundImagePath",
            mapSetForegroundImagePath: {
                mapId,
                foregroundImagePath,
            },
        });
    }
    setMapSpawns(mapId, spawns) {
        this.engine?.sendAction({
            $case: "mapSetSpawns",
            mapSetSpawns: {
                mapId,
                spawns,
            },
        });
    }
    setMapNooks(mapId, nooks, overwrite = false, useTxn = false) {
        return this.sendAction({
            $case: "mapSetNooks",
            mapSetNooks: {
                mapId,
                nooks,
                overwrite,
            },
        }, useTxn);
    }
    setMapPortals(mapId, portals) {
        this.engine?.sendAction({
            $case: "mapSetPortals",
            mapSetPortals: {
                mapId,
                portals,
            },
        });
    }
    requestToJoinNook(nookId, mapId, name) {
        this.engine?.sendAction({
            $case: "requestToJoinNook",
            requestToJoinNook: {
                nookId,
                mapId,
                name,
            },
        });
    }
    updateNookPermission(playerId, nookId, granted) {
        this.engine?.sendAction({
            $case: "updateNookPermission",
            updateNookPermission: {
                playerId,
                nookId,
                granted,
            },
        });
    }
    setMapAnnouncer(mapId, announcer) {
        this.engine?.sendAction({
            $case: "mapSetAnnouncer",
            mapSetAnnouncer: {
                mapId,
                announcer,
            },
        });
    }
    setMapObjects(mapId, objects, updatesAreOverwrites) {
        const wireObjects = Object.fromEntries(Object.entries(objects).map(([k, obj]) => [k, (0, gameMap_1.convertMapObjectToWireObject)(obj)]));
        this.engine?.sendAction({
            $case: "mapUpdateObjects",
            mapUpdateObjects: {
                mapId,
                objects: wireObjects,
                updatesAreOverwrites,
            },
        });
    }
    moveMapObject(mapId, objectId, targetWorldPos, durationMs, easing = "Linear") {
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
    fxShakeObject(mapId, targetObjId, intensity = 0.1, durationMs = 1000, mode) {
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
    fxShakeCamera(mapId, playerId, intensity = 0.1, durationMs = 1000) {
        this.engine?.sendAction({
            $case: "fxShakeCamera",
            fxShakeCamera: {
                intensity,
                durationMs,
                mapId,
                targetUserId: playerId,
            },
        });
    }
    setMapName(mapId, name) {
        this.engine?.sendAction({
            $case: "mapSetName",
            mapSetName: {
                mapId,
                name,
            },
        });
    }
    setMapMuteOnEntry(mapId, muteOnEntry) {
        this.engine?.sendAction({
            $case: "mapSetMuteOnEntry",
            mapSetMuteOnEntry: {
                mapId,
                muteOnEntry,
            },
        });
    }
    setMapUseDrawnBG(mapId, useDrawnBG) {
        this.engine?.sendAction({
            $case: "mapSetUseDrawnBG",
            mapSetUseDrawnBG: {
                mapId,
                useDrawnBG,
            },
        });
    }
    setMapAreas(mapId, areas) {
        this.engine?.sendAction({
            $case: "mapSetAreas",
            mapSetAreas: {
                mapId,
                areas,
            },
        });
    }
    setMapMiniMapImagePath(mapId, miniMapImagePath) {
        this.engine?.sendAction({
            $case: "mapSetMiniMapImagePath",
            mapSetMiniMapImagePath: {
                mapId,
                miniMapImagePath,
            },
        });
    }
    setMapEnabledChats(mapId, enabledChats) {
        this.engine?.sendAction({
            $case: "mapSetEnabledChats",
            mapSetEnabledChats: {
                mapId,
                enabledChats,
            },
        });
    }
    setMapDescription(mapId, description) {
        this.engine?.sendAction({
            $case: "mapSetDescription",
            mapSetDescription: {
                mapId,
                description,
            },
        });
    }
    setMapDecoration(mapId, decoration) {
        this.engine?.sendAction({
            $case: "mapSetDecoration",
            mapSetDecoration: {
                mapId,
                decoration,
            },
        });
    }
    setMapTutorialTasks(mapId, tutorialTasks) {
        const wireTutorialTasks = (0, gameMap_1.convertTutorialTasksToWireTutorialTasks)(tutorialTasks);
        this.engine?.sendAction({
            $case: "mapSetTutorialTasks",
            mapSetTutorialTasks: {
                mapId,
                tutorialTasks: wireTutorialTasks,
            },
        });
    }
    setImpassable(mapId, x, y, impassable = true) {
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
    getImpassable(mapId, x, y) {
        const currMap = this.completeMaps?.[mapId];
        if (!currMap) {
            throw new Error("mapId not found: " + mapId);
        }
        const currentImpassable = currMap.collisions;
        if (!currentImpassable[y]?.[x])
            return false;
        return true;
    }
    getObject(objId, mapId) {
        const mapIds = mapId ? [mapId] : Object.keys(this.partialMaps);
        for (const mapId of mapIds) {
            const objects = this.partialMaps?.[mapId]?.objects;
            if (!objects) {
                continue;
            }
            const [key, obj] = Object.entries(objects).find(([_k, o]) => o.id === objId) ?? [];
            if (key != null && obj)
                return { mapId, obj, key };
        }
        return null;
    }
    getObjectByKey(mapId, key) {
        return this.partialMaps[mapId]?.objects?.[key];
    }
    updateObject(mapId, key, obj, useTxn = false) {
        return this.sendAction({
            $case: "mapUpdateObjects",
            mapUpdateObjects: {
                mapId,
                objects: {
                    [key]: (0, gameMap_1.convertMapObjectToWireObject)(obj),
                },
            },
        }, useTxn);
    }
    setObject(mapId, objId, _obj, useTxnId = false) {
        const obj = { ..._obj };
        const currMap = this.partialMaps?.[mapId];
        if (!currMap) {
            throw new Error("mapId not found: " + mapId);
        }
        if (obj.id && obj.id !== objId) {
            obj.id = objId;
        }
        const key = Object.entries(currMap.objects ?? {}).find(([_, o]) => o.id === objId)?.[0];
        if (key) {
            return this.updateObject(mapId, key, obj, useTxnId);
        }
        else {
            obj.id = objId;
            delete obj.zIndex;
            return this.sendAction({
                $case: "mapAddObject",
                mapAddObject: {
                    mapId,
                    object: (0, gameMap_1.convertMapObjectToWireObject)(obj),
                },
            }, useTxnId);
        }
    }
    addObject(mapId, obj, useTxn = false) {
        return this.sendAction({
            $case: "mapAddObject",
            mapAddObject: {
                mapId,
                object: (0, gameMap_1.convertMapObjectToWireObject)(obj),
            },
        }, useTxn);
    }
    async deleteObjectByKey(mapId, key, createTxnId = false) {
        return this.sendAction({
            $case: "mapDeleteObjectByKey",
            mapDeleteObjectByKey: {
                mapId,
                key,
            },
        }, createTxnId);
    }
    async deleteObject(mapId, objId, createTxnId = false) {
        return this.sendAction({
            $case: "mapDeleteObjectById",
            mapDeleteObjectById: {
                mapId,
                id: objId,
            },
        }, createTxnId);
    }
    async requestToLead(target, snapshot = "") {
        return this.sendAction({
            $case: "requestToLead",
            requestToLead: {
                target,
                snapshot,
            },
        });
    }
    setManualVideoSrc(manualVideoSrc, targetId) {
        return this.sendAction({
            $case: "setManualVideoSrc",
            setManualVideoSrc: {
                manualVideoSrc,
                targetId,
            },
        });
    }
    async setSubtitle(subtitle, targetId) {
        return this.sendAction({
            $case: "setSubtitle",
            setSubtitle: {
                subtitle,
                targetId,
            },
        });
    }
    async highFive(targetId, emote) {
        return this.sendAction({
            $case: "highFive",
            highFive: {
                targetId,
                emote,
            },
        });
    }
    updateSpaceItems(items) {
        this.engine?.sendAction({
            $case: "updateSpaceItems",
            updateSpaceItems: {
                items,
            },
        });
    }
    addInventoryItem(itemId, delta, targetId) {
        this.engine?.sendAction({
            $case: "addInventoryItem",
            addInventoryItem: {
                itemId,
                delta,
                targetId,
            },
        });
    }
    removeInventoryItem(itemId, delta, targetId) {
        this.engine?.sendAction({
            $case: "removeInventoryItem",
            removeInventoryItem: {
                itemId,
                delta,
                targetId,
            },
        });
    }
    craft(inputs) {
        this.engine?.sendAction({
            $case: "craft",
            craft: {
                inputs,
            },
        });
    }
    triggerInventoryItem(itemId, abilityId) {
        this.engine?.sendAction({
            $case: "triggerInventoryItem",
            triggerInventoryItem: {
                itemId,
                abilityId,
            },
        });
    }
    setAllowScreenPointer(allowScreenPointer) {
        this.engine?.sendAction({
            $case: "setAllowScreenPointer",
            setAllowScreenPointer: {
                allowScreenPointer,
            },
        });
    }
    setDeskInfo(deskInfo, targetId) {
        this.engine?.sendAction({
            $case: "setDeskInfo",
            setDeskInfo: {
                deskInfo,
                targetId,
            },
        });
    }
    startRecording(nookId, initializing) {
        this.engine?.sendAction({
            $case: "startRecording",
            startRecording: {
                nookId,
                initializing,
            },
        });
    }
    requestAccessViaCheckIn(userId, canceled, name, currentlyEquippedWearables) {
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
    respondToAccessRequest(userId, accepted, locationType) {
        this.engine?.sendAction({
            $case: "respondToAccessRequest",
            respondToAccessRequest: {
                userId,
                accepted,
                locationType,
            },
        });
    }
    setDeskFromNextAvailableDesk(params) {
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
    setSpaceRolePermissionOverride(role, permission, enabled) {
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
        if (!this.engine)
            return {};
        if (this.engine.clientUid === undefined) {
            Logger_1.logger.error("Client uid is undefined in getStats");
        }
        else if (this.players[this.engine.clientUid] === undefined) {
            Logger_1.logger.error("Current player is undefined in getStats");
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
            gameClientVersion: version_1.GAME_CLIENT_VERSION,
        };
        this.putMetric("get-stats", metrics);
        return metrics;
    }
    checkForExits() {
        Object.keys(this.players)
            .filter((uid) => !this.playerUidsSeenOnConnect.has(uid))
            .forEach((uid, index, array) => {
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
    sendSubscribe() {
        const onSuccess = () => {
            if (Date.now() - this.lastDeployTime < CHECK_PLAYER_EXISTS_DELAY) {
                this.checkForExitsTimeout = setTimeout(() => this.checkForExits(), CHECK_PLAYER_EXISTS_DELAY);
            }
            else {
                this.checkForExits();
            }
            const isPartialSubscribe = Object.keys(this.partialMaps).length === 0;
            this.subscriptionFinishedCallback();
            this.engine?.logInitialSyncComplete(isPartialSubscribe);
        };
        this.sendAction({
            $case: "updateSubscriptions",
            updateSubscriptions: {
                subscriptions: this.eventSubscriptions,
                mapUpdateIds: this.lastMapUpdateIds,
            },
        }, true)
            .then(() => {
            onSuccess();
        })
            .catch(() => {
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
        return Logger_1.logger.exportHistory();
    }
    getPlayersInMap(mapId) {
        if (!this.completeMaps[mapId]) {
            throw new Error("Can't get players in map: no map for " + mapId);
        }
        const sameMapPlayers = Object.values(this.players).filter((player) => player.map === mapId);
        return sameMapPlayers;
    }
    getKnownPartialMaps() {
        return Object.keys(this.partialMaps);
    }
    getKnownCompletedMaps() {
        return Object.keys(this.completeMaps);
    }
    filterObjectsInSpace(filter) {
        const foundObjects = [];
        this.getKnownCompletedMaps().forEach((mapId) => {
            foundObjects.push(...this.filterObjectsInMap(mapId, filter));
        });
        return foundObjects;
    }
    filterObjectsInMap(mapId, filter) {
        const map = this.partialMaps[mapId];
        if (!map) {
            throw new Error("Can't filter objects in map: no map for " + mapId);
        }
        if (!map.objects)
            return [];
        return Object.values(map.objects).filter(filter);
    }
    filterUidsInSpace(filter) {
        return Object.keys(this.players).filter((key) => {
            const player = this.players[key];
            if (player)
                return filter(player);
            return false;
        });
    }
    filterPlayersInSpace(filter) {
        return Object.values(this.players).filter(filter);
    }
    hipToBeSquare(hipToBeSquare) {
        this.sendAction({
            $case: "hipToBeSquare",
            hipToBeSquare,
        });
    }
    patchGatherEventsSpaceSession(speakerUpdatesSession) {
        this.sendAction({
            $case: "speakerUpdatesSession",
            speakerUpdatesSession,
        });
    }
    isPlayerInPrivateSpace(player, mapId, privateSpaceId) {
        if (!this.completeMaps[mapId]) {
            throw new Error("mapId invalid or not yet fully defined. Have you waited for init yet?");
        }
        const nook = this.completeMaps[mapId]?.nooks?.[privateSpaceId];
        if (!nook)
            return false;
        return !!nook.nookCoords.coords.some((c) => c.x === player.x && c.y === player.y);
    }
    getMyPlayer() {
        if (!this.engine?.clientUid) {
            throw new Error("Client has not received ready event from server and is still connecting");
        }
        const currentPlayer = this.players[this.engine.clientUid];
        if (!currentPlayer) {
            throw new Error("Current player not found. Did you call game.enter?");
        }
        return currentPlayer;
    }
    cleanupDeletedObjects(mapId, deletedObjectKeys) {
        Logger_1.logger.log(`cleaning up ${deletedObjectKeys.size} objects deleted while we were away`);
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
exports.Game = Game;
//# sourceMappingURL=Game.js.map