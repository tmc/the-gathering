"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapsAccumulator = void 0;
const collisionMap_1 = require("@gathertown/gather-game-common/dist/src/public/collisionMap");
const gameMap_1 = require("@gathertown/gather-game-common/dist/src/public/gameMap");
const Logger_1 = require("./Logger");
const GameMap_1 = require("./GameMap");
class MapsAccumulator {
    constructor() {
        this.objectsOnClientServerHasntSent = new Map();
        this.cleanupDeletedObjects = undefined;
        this.partialMaps = {};
        this.completeMaps = {};
        this.lastMapUpdateIds = {};
    }
    startTrackingMissedObjects(cleanupDeletedObjects) {
        this.objectsOnClientServerHasntSent.clear();
        this.cleanupDeletedObjects = cleanupDeletedObjects;
        for (const [mapId, map] of Object.entries(this.partialMaps)) {
            const currentObjectKeys = Object.keys(map.objects ?? {});
            this.objectsOnClientServerHasntSent.set(mapId, new Set(currentObjectKeys));
        }
    }
    addChunk(event) {
        switch (event.$case) {
            case "mapSetBackgroundImagePath":
            case "mapSetForegroundImagePath":
            case "mapSetSpawns":
            case "mapSetPortals":
            case "mapSetAnnouncer":
            case "mapSetAssets":
            case "mapSetSpawn":
            case "mapSetName":
            case "mapSetMuteOnEntry":
            case "mapSetUseDrawnBG":
            case "mapSetMiniMapImagePath":
            case "mapSetEnabledChats":
            case "mapSetDescription":
            case "mapSetDecoration":
            case "mapSetScript": {
                this.simpleCopyFromEventPayloadToMap(event);
                break;
            }
            case "mapSetNooks": {
                const { mapId, nooks, overwrite } = event.mapSetNooks;
                const map = this.getMap(mapId);
                if (!map) {
                    throw new Error(`Map ${mapId} not found`);
                }
                const newNooks = (0, gameMap_1.mergeNooks)(map.nooks || {}, nooks, overwrite);
                map.nooks = newNooks;
                break;
            }
            case "mapSetDimensions": {
                const { mapId, width, height } = event.mapSetDimensions;
                this.getMap(mapId).dimensions = [width, height];
                break;
            }
            case "mapSetCollisionsBits": {
                const { mapId, x: offsetX, y: offsetY, w, h, mask, overwrite } = event.mapSetCollisionsBits;
                const maskBytes = (0, collisionMap_1.convertCollisionBitsToBytes)(w, h, mask);
                this.updateCollisions(mapId, offsetX, offsetY, w, h, maskBytes, overwrite);
                break;
            }
            case "mapSetObjectsV2": {
                const { mapId, objects: wireObjects, updatesAreOverwrites } = event.mapSetObjectsV2;
                const map = this.getMap(mapId);
                if (!map.objects) {
                    map.objects = {};
                }
                for (const [key, object] of Object.entries(wireObjects)) {
                    this.markObjectAsNotDeletedSinceLastFullSync(mapId, key);
                    try {
                        const convertedWireObject = (0, gameMap_1.convertWireObjectToMapObjectPartial)(object);
                        const newObject = updatesAreOverwrites
                            ? convertedWireObject
                            : { ...map.objects[key], ...convertedWireObject };
                        if (!(0, gameMap_1.isMapObject)(newObject)) {
                            throw new Error(`Failed to convert to MapObjectDB because the following required fields were missing: ${(0, gameMap_1.findMissingMapObjectFields)(newObject)}`);
                        }
                        map.objects[key] = newObject;
                    }
                    catch (err) {
                        Logger_1.logger.error(`object ${key} in map ${mapId} is malformed and is being ignored. err: ${Logger_1.logger.errString(err)} data: ${Logger_1.logger.errString(object)}`);
                    }
                }
                break;
            }
            case "mapSetAreas": {
                const { mapId, areas, delete: shouldDelete } = event.mapSetAreas;
                const map = this.getMap(mapId);
                if (shouldDelete) {
                    delete map.areas;
                    break;
                }
                map.areas = (0, gameMap_1.convertWireAreasToAreas)(areas, map.dimensions);
                break;
            }
            case "mapDeleteObjectByKey": {
                const { mapId, key } = event.mapDeleteObjectByKey;
                const map = this.getMap(mapId);
                delete map.objects?.[key];
                break;
            }
            case "mapSetTutorialTasks": {
                const { mapId, tutorialTasks: wireTutorialTasks, delete: shouldDelete, } = event.mapSetTutorialTasks;
                const map = this.getMap(mapId);
                if (shouldDelete) {
                    delete map.tutorialTasks;
                    break;
                }
                if (wireTutorialTasks === undefined) {
                    throw new Error("Cannot set tutorialTasks because it is undefined");
                }
                map.tutorialTasks = (0, gameMap_1.convertWireTutorialTasksToTutorialTasks)(wireTutorialTasks);
                break;
            }
            case "mapCommitsChanges": {
                const { mapId, updateId } = event.mapCommitsChanges;
                const mapChanged = this.lastMapUpdateIds[mapId] !== updateId;
                this.cleanupMissedObjects(mapId, mapChanged);
                this.lastMapUpdateIds[mapId] = updateId;
                break;
            }
            case "mapMoveObject": {
                const { mapId, objectId, targetX, targetY, targetXOffset, targetYOffset } = event.mapMoveObject;
                const map = this.getMap(mapId);
                if (map) {
                    const obj = Object.values(map.objects || []).find((x) => x.id === objectId);
                    if (obj) {
                        obj.x = targetX;
                        obj.offsetX = targetXOffset;
                        obj.y = targetY;
                        obj.offsetY = targetYOffset;
                    }
                }
                break;
            }
            default: {
                throw new Error(`Unexpected map event: ${event.$case}`);
            }
        }
        const mapId = this.getMapIdFromEvent(event);
        if (event.$case !== "mapCommitsChanges") {
            delete this.lastMapUpdateIds[mapId];
        }
        this.updateCompleteMaps(mapId);
        return this.completeMaps[mapId];
    }
    markObjectAsNotDeletedSinceLastFullSync(mapId, objectKey) {
        const objectSet = this.objectsOnClientServerHasntSent.get(mapId);
        if (!objectSet)
            return;
        objectSet.delete(objectKey);
    }
    cleanupMissedObjects(mapId, mapChanged) {
        const deletedObjectsSet = this.objectsOnClientServerHasntSent.get(mapId);
        if (mapChanged && deletedObjectsSet?.size) {
            this.cleanupDeletedObjects?.(mapId, deletedObjectsSet);
        }
        this.objectsOnClientServerHasntSent.delete(mapId);
    }
    updateCollisions(mapId, offsetX, offsetY, w, h, maskBytes, overwrite) {
        const map = this.getMap(mapId);
        if (!map) {
            throw new Error(`Map ${mapId} not found`);
        }
        if (overwrite || !map.collisions) {
            map.collisions = {};
        }
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                const y = i + offsetY;
                const x = j + offsetX;
                if (!maskBytes[i * w + j]) {
                    delete map.collisions[y]?.[x];
                    continue;
                }
                const temp = map.collisions[y] ?? {};
                temp[x] = true;
                map.collisions[y] = temp;
            }
        }
    }
    getMap(mapId) {
        return this.partialMaps[mapId] || (this.partialMaps[mapId] = this.initializeMap(mapId));
    }
    simpleCopyFromEventPayloadToMap(event) {
        const { mapId, delete: shouldDelete, ...rest } = event[event.$case];
        const map = this.getMap(mapId);
        Object.keys(rest).forEach((field) => {
            if (shouldDelete) {
                delete map[field];
            }
            else {
                map[field] = rest[field];
            }
        });
    }
    updateCompleteMaps(mapId) {
        if (this.completeMaps[mapId])
            return;
        const map = this.partialMaps[mapId];
        if (map && (0, GameMap_1.verifyMapIsComplete)(map)) {
            this.completeMaps[mapId] = map;
        }
    }
    initializeMap(mapId) {
        return { id: mapId };
    }
    getMapIdFromEvent(event) {
        const mapId = event[event.$case]?.mapId;
        if (mapId == null) {
            throw new Error(`no mapId on map event ${event.$case}`);
        }
        return mapId;
    }
}
exports.MapsAccumulator = MapsAccumulator;
//# sourceMappingURL=MapsAccumulator.js.map