import { ServerClientEventEvent } from "./GameEventUtils";
import { GameMap } from "./GameMap";
export declare class MapsAccumulator {
    private readonly objectsOnClientServerHasntSent;
    private cleanupDeletedObjects?;
    readonly partialMaps: {
        [mapId: string]: Partial<GameMap>;
    };
    readonly completeMaps: {
        [mapId: string]: GameMap;
    };
    readonly lastMapUpdateIds: {
        [mapId: string]: number;
    };
    startTrackingMissedObjects(cleanupDeletedObjects: (mapId: string, keys: Set<string>) => void): void;
    addChunk(event: ServerClientEventEvent): GameMap | undefined;
    private markObjectAsNotDeletedSinceLastFullSync;
    private cleanupMissedObjects;
    private updateCollisions;
    private getMap;
    private simpleCopyFromEventPayloadToMap;
    private updateCompleteMaps;
    private initializeMap;
    private getMapIdFromEvent;
}
