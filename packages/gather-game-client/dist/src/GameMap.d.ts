import { CoordsMap, GameMapBaseDoNotUseDirectly, MapObject } from "@gathertown/gather-game-common/dist/src/public/gameMap";
export interface GameMap extends GameMapBaseDoNotUseDirectly {
    collisions: CoordsMap<true>;
    objects?: {
        [key: string]: MapObject;
    };
}
export declare function verifyMapIsComplete(map: Partial<GameMap>): map is GameMap;
