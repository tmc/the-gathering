import { convertCollisionBitsToBytes } from "@gathertown/gather-game-common/dist/src/public/collisionMap";
import {
  convertWireAreasToAreas,
  convertWireObjectToMapObjectPartial,
  convertWireTutorialTasksToTutorialTasks,
  findMissingMapObjectFields,
  isMapObject,
  mergeNooks,
} from "@gathertown/gather-game-common/dist/src/public/gameMap";
import { ServerClientEventEvent, ServerClientEventEventWith } from "./GameEventUtils";
import { Buffer } from "buffer";
import { logger } from "./Logger";
import { GameMap, verifyMapIsComplete } from "./GameMap";

export class MapsAccumulator {
  // contains the set of object keys that the Client hasn't yet heard about from the
  // Server during a full map sync.  Used to track which objects were deleted while
  // we were disconnected from the GS.
  private readonly objectsOnClientServerHasntSent = new Map<GameMap["id"], Set<string>>();
  private cleanupDeletedObjects?: (mapId: string, keys: Set<string>) => void = undefined;

  readonly partialMaps: { [mapId: string]: Partial<GameMap> } = {};

  // [completeMaps] contains references to fully defined maps found in [partialMaps]
  // Note that this means if you edit a map in [partialMaps] in place, that change is also
  // reflected in [completeMaps]
  readonly completeMaps: { [mapId: string]: GameMap } = {};
  readonly lastMapUpdateIds: { [mapId: string]: number } = {};

  // notifies that the Server will send down a full map sync if the map has changed, this starts
  // the deleted while disconnected object tracking.
  startTrackingMissedObjects(cleanupDeletedObjects: (mapId: string, keys: Set<string>) => void) {
    this.objectsOnClientServerHasntSent.clear();
    this.cleanupDeletedObjects = cleanupDeletedObjects;

    for (const [mapId, map] of Object.entries(this.partialMaps)) {
      const currentObjectKeys = Object.keys(map.objects ?? {});
      this.objectsOnClientServerHasntSent.set(mapId, new Set(currentObjectKeys));
    }
  }

  // addChunk will return a map only if it is completely defined, otherwise it will return undefined
  addChunk(event: ServerClientEventEvent): GameMap | undefined {
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

        const newNooks = mergeNooks(map.nooks || {}, nooks, overwrite);
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
        const maskBytes = convertCollisionBitsToBytes(w, h, mask);
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
            const convertedWireObject = convertWireObjectToMapObjectPartial(object);
            const newObject = updatesAreOverwrites
              ? convertedWireObject
              : { ...map.objects[key], ...convertedWireObject };
            if (!isMapObject(newObject)) {
              throw new Error(
                `Failed to convert to MapObjectDB because the following required fields were missing: ${findMissingMapObjectFields(
                  newObject,
                )}`,
              );
            }
            map.objects[key] = newObject;
          } catch (err) {
            // note: can't just log this above and ignore because there may be other errors, like the JSON parse in the wire object conversion
            logger.error(
              `object ${key} in map ${mapId} is malformed and is being ignored. err: ${logger.errString(
                err,
              )} data: ${logger.errString(object)}`,
            );
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
        map.areas = convertWireAreasToAreas(areas, map.dimensions);
        break;
      }
      case "mapDeleteObjectByKey": {
        const { mapId, key } = event.mapDeleteObjectByKey;
        const map = this.getMap(mapId);
        delete map.objects?.[key];
        break;
      }
      case "mapSetTutorialTasks": {
        const {
          mapId,
          tutorialTasks: wireTutorialTasks,
          delete: shouldDelete,
        } = event.mapSetTutorialTasks;
        const map = this.getMap(mapId);
        if (shouldDelete) {
          delete map.tutorialTasks;
          break;
        }
        if (wireTutorialTasks === undefined) {
          throw new Error("Cannot set tutorialTasks because it is undefined");
        }
        map.tutorialTasks = convertWireTutorialTasksToTutorialTasks(wireTutorialTasks);
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
        const { mapId, objectId, targetX, targetY, targetXOffset, targetYOffset } =
          event.mapMoveObject;
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
      //Client now has a new map state, so we are deleting its lastMapUpdateIds entry
      //while waiting for new updateId. This way we avoid mismatches in case the
      //space is destroyed before the map is persisted.
      delete this.lastMapUpdateIds[mapId];
    }
    this.updateCompleteMaps(mapId);
    return this.completeMaps[mapId];
  }

  private markObjectAsNotDeletedSinceLastFullSync(mapId: GameMap["id"], objectKey: string) {
    const objectSet = this.objectsOnClientServerHasntSent.get(mapId);
    if (!objectSet) return;
    objectSet.delete(objectKey);
  }

  private cleanupMissedObjects(mapId: GameMap["id"], mapChanged: boolean) {
    const deletedObjectsSet = this.objectsOnClientServerHasntSent.get(mapId);
    if (mapChanged && deletedObjectsSet?.size) {
      this.cleanupDeletedObjects?.(mapId, deletedObjectsSet);
    }
    this.objectsOnClientServerHasntSent.delete(mapId);
  }

  private updateCollisions(
    mapId: string,
    offsetX: number,
    offsetY: number,
    w: number,
    h: number,
    maskBytes: Readonly<Buffer | Uint8Array>,
    overwrite: boolean,
  ) {
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

        // if masks removes a collision, delete the entry from the map
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

  private getMap(mapId: string): Partial<GameMap> {
    return this.partialMaps[mapId] || (this.partialMaps[mapId] = this.initializeMap(mapId));
  }

  // Note that this function has the folllowing precondition:
  // [event] may only contain mapId, delete, and map fields defined on the GameMap type
  private simpleCopyFromEventPayloadToMap(event: ServerClientEventEvent) {
    // event always has its case defined like this, TS is just limited
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // Lint warning auto-ignored when enabling the consistent-type-assertions rule. no-explicit-any is also auto-ignored b/c these 2 rules often apply on the same line.
    // You should almost never be using type assertions! TODO: @ENG-4304 Remove these comments and the type assertion next time this code is edited.
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-explicit-any
    const { mapId, delete: shouldDelete, ...rest } = (event as any)[event.$case];
    const map = this.getMap(mapId);
    Object.keys(rest).forEach((field) => {
      if (shouldDelete) {
        // I guess really we should check that field is one of the possible fields etc, but there's no harm if it isn't
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // Lint warning auto-ignored when enabling the consistent-type-assertions rule. no-explicit-any is also auto-ignored b/c these 2 rules often apply on the same line.
        // You should almost never be using type assertions! TODO: @ENG-4304 Remove these comments and the type assertion next time this code is edited.
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-explicit-any
        delete (map as any)[field];
      } else {
        // this time it'd be better to check, but since we control what map events end up here we can make sure it's the case that this is chill
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // Lint warning auto-ignored when enabling the consistent-type-assertions rule. no-explicit-any is also auto-ignored b/c these 2 rules often apply on the same line.
        // You should almost never be using type assertions! TODO: @ENG-4304 Remove these comments and the type assertion next time this code is edited.
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-explicit-any
        (map as any)[field] = rest[field];
      }
    });
  }

  private updateCompleteMaps(mapId: string) {
    if (this.completeMaps[mapId]) return;

    const map = this.partialMaps[mapId];
    if (map && verifyMapIsComplete(map)) {
      this.completeMaps[mapId] = map;
    }
  }

  private initializeMap(mapId: string) {
    return { id: mapId };
  }

  private getMapIdFromEvent(event: ServerClientEventEventWith<{ mapId: string }>): string {
    const mapId = event[event.$case]?.mapId;
    if (mapId == null) {
      throw new Error(`no mapId on map event ${event.$case}`);
    }
    return mapId;
  }
}
