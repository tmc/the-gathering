import {
  CoordsMap,
  GameMapBaseDoNotUseDirectly,
  MapObject,
} from "@gathertown/gather-game-common/dist/src/public/gameMap";

// see "GameMap taxonomy" in gather-game-common/src/GameMap.ts for more on map types
export interface GameMap extends GameMapBaseDoNotUseDirectly {
  collisions: CoordsMap<true>; // collisions[y][x] === true if tile at x,y is impassable
  objects?: { [key: string]: MapObject };
}

export function verifyMapIsComplete(map: Partial<GameMap>): map is GameMap {
  const verifyMapIsCompleteHelper = (map: Partial<GameMap>): GameMap | null => {
    if (
      map.id != null &&
      map.dimensions != null &&
      map.collisions != null &&
      map.backgroundImagePath != null &&
      map.spawns != null &&
      map.portals != null &&
      map.announcer != null
    ) {
      return {
        ...map,
        id: map.id,
        dimensions: map.dimensions,
        collisions: map.collisions,
        backgroundImagePath: map.backgroundImagePath,
        spawns: map.spawns,
        portals: map.portals,
        announcer: map.announcer,
      };
    }
    return null;
  };
  return verifyMapIsCompleteHelper(map) !== null;
}
