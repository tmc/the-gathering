import { cloneDeep, range } from "lodash";

import { BoundingBox, Point } from "./Position";
import { deserializePoint, getPointFromBoundingBox, serializePoint } from "./positionUtils";
import {
  Announcer,
  AreaPosition,
  Asset,
  DBDesk,
  InteractionEnum_ENUM as Interaction,
  NookDiff,
  Portal,
  Space,
  SpawnPoint,
  TutorialTaskMapArea,
  WireArea,
  WireObject,
  WireTutorialTasks,
} from "./generated_DO_NOT_TOUCH/events";
import { generateNewId } from "./objectUtils";
import { omit } from "ramda";

export { Interaction };
export type CoordsMap<T> = { [y: number]: { [x: number]: T } };

/**
 * GameMap taxonomy:
 *
 * GameMapBaseDoNotUseDirectly -- stuff in common between the types, so we don't re-declare a bunch of stuff
 * GameMapDB -- validated format that is the ONLY format read/written to DB
 * - NOT what is actually in the db; but everything should read the DB via a converter to this type
 * - this is the ideal, fully current map format used by the source of truth
 * - used exclusively server-side where we can enforce atomic updates to it
 * - never EVER expose GameMapDB externally -- should always convert to GameMapHttpPublic first
 * GameMapHttpPublic -- the format exposed via the http API: returned from the getMap endpoint(s) and expected at the setMap endpoint(s)
 * - GameMapHttpPublic is the layer of abstraction between GameMapDB and the 'outside' world,
 *   so we can be deliberate about making externally breaking changes or not.
 * - can't make breaking changes to this without warning! MapMaker and 3rd parties depend on it
 *   so be _very careful_ when doing things with these types, in both read and write directions.
 * - also note: it is correct for the public read and write format to be the same, since a common pattern is to read, modify, write back
 * GameMapMM -- map format used by the mapmaker internally
 * - lives in gather-browser/src/mapmaker/types/GameMapMM.ts
 * GameMap -- the format in gather-game-client
 * - built up from WS API, not related to HTTP
 * - gets the nice name because this is part of the sdk, and is widely used
 * - the two 'external/public' versions are different because they come from different interfaces and are used in different ways.
 *   best example: collisions is a base64 string in GameMapHttpPublic, because you have to download it,
 *   but a boolean[][] in GameMap (game-client), because that's the actually useful format for querying and stuff
 *   (it's sent across the wire as a base64 string as well, but converted for convenience in game-client)
 * - lives in gather-game-client/src/GameMap.ts
 * ClientGameMap -- the format used most places in the browser
 * - heavily based on GameMap, but includes computed fields such as nooksMap
 *
 *
 * additional notes
 * - There is also implicitly the type made up of all the map events sent over the ws connection.
 *   Those are version controlled separately though, and are effectively a conversion between GameMapDB and GameMap.
 * - yes we want to read and write the same format to db -- though on the write side,
 *   there will sometimes have to be additional deletes added in
 * - many conversions will be done both on reads from db and external writes via http;
 *   the conversion functions will likely have shared components but overall be different.
 *   E.g. if a new field is in the db already, it's been migrated, but not necessarily so for external writers
 * - There should be NO CASTS BETWEEN ANY OF THESE TYPES!
 *   The only casting allowed is from db to GameMapDB and _maybe_ external data to GameMapHttpPublic
 *
 */

export interface GameMapBaseDoNotUseDirectly {
  id: string;
  /**
   * Dimensions here are set in _grid_ coordinates.
   * To convert to pixel sizes/world space, multiply these dimensions by `objectSizes`.
   */
  dimensions: [number, number];
  backgroundImagePath: string; // url
  foregroundImagePath?: string;
  sprites?: number[];
  spawn?: Point; // deprecating - NGN-104
  spawns: SpawnPoint[];
  portals: Portal[];
  announcer: Announcer[];
  assets?: Asset[];
  name?: string; //What is the map actually called
  muteOnEntry?: boolean;
  useDrawnBG?: boolean;
  mostRecentUpdateId?: number;
  areas?: Areas;
  miniMapImagePath?: string;
  enabledChats?: EnabledChat[];
  description?: string;
  decoration?: string;
  tutorialTasks?: TutorialTasks;
  updatedAt?: string;
  script?: string;
  nooks?: NookInfo;
}
// see "GameMap taxonomy" above for documentation on these types

export interface GameMapDB extends Omit<GameMapBaseDoNotUseDirectly, "areas"> {
  typeCheckFakeField?: null; // this field exists so that typescript will yell at us for mixing up GameMapDB vs Http. It's never used and is harmless
  typeCheckFakeField2?: never; // this field exists so that typescript will yell at us for mixing up GameMapDB vs Http. It's never used and is harmless
  objects?: { [key: string]: MapObjectDB };
  walls?: WallFloorDB;
  floors?: WallFloorDB;
  areas?: DBAreas;
  desks?: never;
  collisions: string; // base64 encoded array of dimensions[1] x dimensions[0] bytes
  spaces?: never; // migrated to nooks
}
// see "GameMap taxonomy" above for documentation on these types

// has to live here because it's used in http server and browser
//   (which makes sense, those are the two sides of the http api)
// this is the PUBLIC type sent and received from the api
// if you change this type, ***be careful about breaking changes***
export interface GameMapHttpPublic
  extends Omit<GameMapDB, "typeCheckFakeField" | "typeCheckFakeField2"> {
  typeCheckFakeField?: never; // so TS yells at us for mixing up GameMapDB vs Http (more above)
  typeCheckFakeField2?: null; // so TS yells at us for mixing up GameMapDB vs Http (more above)
  occupiedNookTilesMap?: never; // used in GameMapMM
}
// see "GameMap taxonomy" above for documentation on these types

export type TileEffect = Portal | Space | SpawnPoint | Announcer;

export type WallBlock = {
  x: number;
  y: number;
  wallType: number;
};

export type FloorBlock = {
  x: number;
  y: number;
  floorType: number;
};

export type WallFloorBlock = WallBlock | FloorBlock;

/*
  In code logic, walls and floors are represented as WallBlock or Floorblock
  In Firestore, for the sake of memory, it is represented as a map:
  {
    floorWallType1 (string): bytearray (string),
    floorWallType2 (string): bytearray (string),
    ...
  }
  where the bytearray is 0x01 if a wall/floor exists there, and 0x00 otherwise
  (like collisions)
*/
export class WallFloorDB {
  [type: string]: string;
}

export interface SpawnTile extends Tile {
  spawnId?: string;
}

export interface NookTile extends Tile {
  nookId: string;
}

export interface PortalTile extends Tile {
  targetX?: number;
  targetY?: number;
  targetMap?: string;
  targetUrl?: string;
}

export interface Tile {
  x: number;
  y: number;
  tileType: TileType;
}

/*
 * Usage:
 * if (isTileType(myTile, TileType.Spawn)) {
 *   myTile // strongly typed as SpawnTile
 * }
 * */
export function isTileType<T extends TileType>(
  tile: Tile,
  type: T,
): tile is T extends TileType.Spawn
  ? SpawnTile
  : T extends TileType.Nook
  ? NookTile
  : T extends TileType.Portal
  ? PortalTile
  : never {
  return tile.tileType === type;
}

type MakeFieldsRequired<T, K extends keyof T> = Required<Pick<T, K>> & T;
const MapObjectRequiredFields = ["x", "y", "normal", "type", "width", "height", "zIndex"] as const;
type _WireMapObjectRequiredFieldsT = (typeof MapObjectRequiredFields)[number];
type _WireObjectWithRequireds = MakeFieldsRequired<WireObject, _WireMapObjectRequiredFieldsT>;
// (marked with _ because there are not intended for actual use, it's just intermediate steps for MapObjectDB)

const NookRequiredFields = ["nookCoords", "name"] as const;
export type Nook = MakeFieldsRequired<NookDiff, (typeof NookRequiredFields)[number]>;

export function isNook(nook: Partial<Nook>): nook is Nook {
  return NookRequiredFields.every((field) => nook[field] != null);
}

// WireObject is defined in events.proto, but uses only optional types, a stringified json for
// an object properties, and a default of empty array for tags, so we replace those here
export interface MapObjectDB extends Omit<_WireObjectWithRequireds, "propertiesJson" | "_tags"> {
  _tags?: string[];
  // unfortunately, properties are just not typed right now. TODO NGN-741
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  properties?: Record<string, any>;
  propertiesJson?: never;
}
// MapObject is what's used in game-client and above, MapObjectDB is used server-side
export interface MapObject extends MapObjectDB {
  // !!! if any required fields are added here, audit findMissingMapObjectFields and isMapObject. they assume requireds are the same as MapObjectDB
}
// when you are adding a new MapObject, x,y, etc are required, but the server can give you a default zIndex (on top of everything else)
export type MapObjectToAdd = Omit<MapObject, "zIndex"> & { zIndex?: number };

export function findMissingMapObjectFields(object: { [key: string]: unknown } | WireObject) {
  const missingFields: string[] = [];
  for (const field of MapObjectRequiredFields) {
    if (object[field] === undefined) {
      missingFields.push(field);
    }
  }
  return missingFields;
}

export function isMapObjectDB(obj: Partial<MapObjectDB>): obj is MapObjectDB {
  return MapObjectRequiredFields.every((field) => obj[field] != null);
}
export function isMapObject(obj: Partial<MapObject>): obj is MapObject {
  return MapObjectRequiredFields.every((field) => obj[field] != null);
}

export function convertWireObjectToMapObjectDBPartial(
  wireObject: WireObject,
): Partial<MapObjectDB> {
  return {
    ...cloneDeep(omit(["propertiesJson"], wireObject)),
    ...(wireObject.propertiesJson ? { properties: JSON.parse(wireObject.propertiesJson) } : {}),
  };
}

export function convertWireObjectToMapObjectPartial(wireObject: WireObject): Partial<MapObject> {
  return convertWireObjectToMapObjectDBPartial(wireObject);
}
export function convertMapObjectToWireObject(mapObject: Partial<MapObjectDB>): WireObject {
  return {
    _tags: [],
    ...cloneDeep(omit(["properties"], mapObject)),
    ...(mapObject.properties ? { propertiesJson: JSON.stringify(mapObject.properties) } : {}),
  };
}

export enum AreaCategory {
  RW_OFFICE_LOBBY = "RW_OFFICE_LOBBY",
  RW_OFFICE_MEETING = "RW_OFFICE_MEETING",
  COWORKING = "COWORKING",
}

export interface BaseArea {
  category?: AreaCategory;
}

// see comment above
export interface DBArea extends BaseArea {
  coords: AreaPosition[];
}

export interface DBAreas {
  [name: string]: DBArea;
}

export interface Area extends BaseArea {
  coordsMap: CoordsMap<true>;
}

export interface Areas {
  [name: string]: Area;
}

interface WireAreas {
  [name: string]: WireArea;
}

export interface NookInfo {
  [id: string]: Nook;
}

export interface OccupiedNookTilesMap {
  [x: string]: { [y: string]: string };
}

export interface DBDesks {
  [deskId: string]: DBDesk;
}
export interface Desks {
  // 2D array of space, contains desk ID or empty string if no desk
  coordsMap: string[][];
  // map of deskId to the list of coordinates of the desk
  idsMap: { [deskId: string]: Point[] };
}

export function convertWireAreasToDBAreas(wireAreas: WireAreas): DBAreas {
  const dbAreas: DBAreas = {};
  return Object.entries(wireAreas).reduce((dbAreas, [areaName, area]) => {
    const { coords, category } = area;
    dbAreas[areaName] = {
      coords,
      ...(category && { category: convertStringToAreaCategory(category) }),
    };
    return dbAreas;
  }, dbAreas);
}

export function convertWireAreasToAreas(
  wireAreas: WireAreas,
  dimensions: [number, number] | undefined,
): Areas {
  if (dimensions === undefined) {
    throw new Error("Cannot convert wire areas to areas because dimensions are undefined");
  }
  const areas: Areas = {};
  return Object.entries(wireAreas).reduce((areas, [areaName, area]) => {
    const { coords, category } = area;
    const coordsMap = convertAreaCoordsToCoordsMap(coords, dimensions);
    areas[areaName] = {
      coordsMap,
      ...(category && { category: convertStringToAreaCategory(category) }),
    };
    return areas;
  }, areas);
}

export function convertAreaCoordsToCoordsMap(
  coords: AreaPosition[],
  [width, height]: [number, number],
): CoordsMap<true> {
  const coordsMap: CoordsMap<true> = {};
  for (const bbox of coords) {
    const positions = getPointFromBoundingBox(bbox, width, height);
    for (const { x, y } of positions) {
      const temp = coordsMap[y] ?? {};
      temp[x] = true;
      coordsMap[y] = temp;
    }
  }
  return coordsMap;
}

export function convertDesksToDBDesks(desks: Desks): DBDesks {
  const { idsMap } = desks;

  const dbDesks = Object.entries(idsMap).reduce<DBDesks>((dbDesks, [deskId, coords]) => {
    const bboxes = convertCoordsToBBoxes(coords);
    return { ...dbDesks, [deskId]: { coords: bboxes } };
  }, {});

  return dbDesks;
}

function convertCoordsToBBoxes(coords: Point[]) {
  const coordsSet = new Set(coords.map((coord) => serializePoint(coord)));

  const expandRect = (bbox: BoundingBox): BoundingBox => {
    let { x1, x2, y1, y2 } = bbox;
    let expanded = true;
    while (expanded) {
      expanded = false;
      // expand right
      const rightCoords = range(y1, y2 + 1).map((newY) => ({ x: x2 + 1, y: newY }));
      if (rightCoords.every((coord) => coordsSet.has(serializePoint(coord)))) {
        x2 += 1;
        rightCoords.forEach((coord) => {
          coordsSet.delete(serializePoint(coord));
        });
        expanded = true;
      }

      // expand bottom
      const bottomCoords = range(x1, x2 + 1).map((newX) => ({ x: newX, y: y2 + 1 }));
      if (bottomCoords.every((coord) => coordsSet.has(serializePoint(coord)))) {
        y2 += 1;
        bottomCoords.forEach((coord) => {
          coordsSet.delete(serializePoint(coord));
        });
        expanded = true;
      }

      // expand left
      const leftCoords = range(y1, y2 + 1).map((newY) => ({ x: x1 - 1, y: newY }));
      if (leftCoords.every((coord) => coordsSet.has(serializePoint(coord)))) {
        x1 -= 1;
        leftCoords.forEach((coord) => {
          coordsSet.delete(serializePoint(coord));
        });
        expanded = true;
      }

      // expand top
      const topCoords = range(x1, x2 + 1).map((newX) => ({ x: newX, y: y1 - 1 }));
      if (topCoords.every((coord) => coordsSet.has(serializePoint(coord)))) {
        y1 -= 1;
        topCoords.forEach((coord) => {
          coordsSet.delete(serializePoint(coord));
        });
        expanded = true;
      }
    }
    return { x1, x2, y1, y2 };
  };

  const bboxes: BoundingBox[] = [];
  while (coordsSet.size !== 0) {
    const coord = [...Array.from(coordsSet)].pop() || "";
    coordsSet.delete(coord);
    const { x, y } = deserializePoint(coord);
    const bbox = expandRect({ x1: x, x2: x, y1: y, y2: y });
    bboxes.push(bbox);
  }
  return bboxes;
}

// these type shenanigans are to make sure you can only pass in an enum where the values match the key names
const stringToEnum = <T, K>(str: string, enumType: { [K in keyof T]: K }, enumName: string): K => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const value = (enumType as unknown as { [k: string]: K })[str];
  if (typeof value === "undefined") {
    throw new Error(`Invalid value for enum ` + enumName);
  }
  return value;
};

function convertStringToAreaCategory(areaCategory: string): AreaCategory {
  return stringToEnum(areaCategory, AreaCategory, "AreaCategory");
}

export enum TileType {
  Impassable = 1,
  Spawn,
  Portal,
  Announcer,
  Nook,
}

const MODAL_INTERACTIONS = [
  Interaction.EMBEDDED_WEBSITE,
  Interaction.POSTER,
  Interaction.VIDEO,
  Interaction.EXTERNAL_CALL,
  Interaction.NOTE,
  Interaction.MODAL_EXTENSION,
  Interaction.COMPONENT_MODAL,
] as const;
export type ModalInteraction = (typeof MODAL_INTERACTIONS)[number];

export function interactionOpensModal(i: Interaction) {
  return MODAL_INTERACTIONS.some((j) => j === i);
}

export function convertNookInfoToOccupiedNookTilesMap(nooks: NookInfo): OccupiedNookTilesMap {
  const occupiedNookTilesMap: OccupiedNookTilesMap = {};

  Object.entries(nooks).forEach(([nookId, nook]) => {
    nook.nookCoords.coords.forEach((coord) => {
      occupiedNookTilesMap[coord.x] = { ...occupiedNookTilesMap[coord.x], [coord.y]: nookId };
    });
  });

  return occupiedNookTilesMap;
}

export function coordsMapToPositions(coordsMap: CoordsMap<true>) {
  const coords: Point[] = [];
  Object.entries(coordsMap).forEach(([y, xObj]) =>
    Object.keys(xObj).forEach((x) => coords.push({ x: parseInt(x), y: parseInt(y) })),
  );
  return coords;
}

export enum EnabledChat {
  GLOBAL_CHAT = "GLOBAL_CHAT",
  LOCAL_CHAT = "LOCAL_CHAT",
  ROOM_CHAT = "ROOM_CHAT",
}

export function convertStringToEnabledChat(enabledChat: string): EnabledChat {
  return stringToEnum(enabledChat, EnabledChat, "EnabledChat");
}

export enum PresetTutorialGroupSetIds {
  // Placeholder for future usage of this feature, now unused
  UNUSED = "UNUSED",
}

// WireTutorialTasks is defined in events.proto but groupSetId is loosely typed as a string
// and areas is not optional due to limitations in protocol buffers, so we replace those here
export interface TutorialTasks extends Omit<WireTutorialTasks, "groupSetId" | "areas"> {
  groupSetId: PresetTutorialGroupSetIds;
  areas?: TutorialTaskMapArea[];
}

export function convertWireTutorialTasksToTutorialTasks(wireTutorialTasks: WireTutorialTasks) {
  const groupSetId = convertStringToPresetTutorialGroupSetId(wireTutorialTasks.groupSetId);
  return { ...wireTutorialTasks, groupSetId };
}

export function convertTutorialTasksToWireTutorialTasks(
  tutorialTasks: TutorialTasks,
): WireTutorialTasks {
  return { ...tutorialTasks, areas: tutorialTasks.areas ?? [] };
}

export function convertStringToPresetTutorialGroupSetId(
  presetTutorialGroupSetId: string,
): PresetTutorialGroupSetIds {
  return stringToEnum(
    presetTutorialGroupSetId,
    PresetTutorialGroupSetIds,
    "PresetTutorialGroupSetIds",
  );
}

export const MAP_MAX_DIMENSION = 9999;

export const nookToDeprecatedSpaces = (nooks?: NookInfo): Space[] => {
  const spaces: Space[] = [];
  if (!nooks) return [];
  Object.keys(nooks).forEach((nookId) => {
    const nook = nooks[nookId];
    if (!nook) return;
    const coords = nook.nookCoords.coords;
    coords.forEach((c) => {
      spaces.push({
        spaceId: nookId,
        x: c.x,
        y: c.y,
        colored: nook.colored,
      });
    });
  });
  return spaces;
};

// When we save to Firebase, periods are interpreted as an accessor to an object key.
// This breaks the format of the nook on save. We can replace the periods with dashes
// since we don't surface IDs to the end user anymore.
const replaceInvalidNookIdCharacters = (nookId: string) => nookId.replace(/\./g, "-");

export const deprecatedSpacesToNooks = (spaces?: Space[]): NookInfo => {
  const nooks: NookInfo = {};
  if (!spaces) return {};
  spaces.forEach((space) => {
    const nookId = replaceInvalidNookIdCharacters(space.spaceId);
    const nook = nooks[nookId];
    if (nook) {
      nook.colored = space.colored;
      nook.nookCoords.coords.push({
        x: space.x,
        y: space.y,
      });
    } else {
      nooks[nookId] = {
        colored: space.colored,
        name: `${nookId}`,
        nookCoords: {
          coords: [
            {
              x: space.x,
              y: space.y,
            },
          ],
        },
        restricted: false,
        allowedUsers: { users: [] },
      };
    }
  });
  return nooks;
};

export const mergeNooks = (
  currentNooks: NookInfo,
  newNooks: { [key: string]: NookDiff },
  overwrite?: boolean,
): NookInfo => {
  let mergedNooks: NookInfo = currentNooks ?? {};
  if (overwrite) {
    // clear the current nooks
    mergedNooks = {};
    Object.entries(newNooks).forEach(([key, value]) => {
      if (value.name && value.nookCoords) {
        mergedNooks[key] = {
          ...value,
          name: value.name,
          nookCoords: value.nookCoords,
        };
      } else {
        throw new Error("Invalid nook found when overwriting, failing");
      }
    });
  } else {
    for (const k in newNooks) {
      const defaultNook = {
        nookCoords: {
          coords: [],
        },
        name: newNooks[k]?.name || k,
        restricted: false,
        allowedUsers: {
          users: [],
        },
      };
      mergedNooks[k] = {
        ...defaultNook,
        ...currentNooks[k],
        ...newNooks[k],
      };
    }
  }

  return mergedNooks;
};

export const desksToNooks = (desks: DBDesks, nooks: NookInfo): NookInfo =>
  Object.entries(desks).reduce<{ [key: string]: Nook }>((prev, [deskId, desk]) => {
    const coords = desk.coords.reduce<Point[]>(
      (prev, bbox) => [...prev, ...getPointFromBoundingBox(bbox)],
      [],
    );
    const candidateNookId = deskId.replace(/\./g, "-");
    const newNookId = Object.keys(nooks).includes(candidateNookId)
      ? generateNewId(candidateNookId, Object.keys(nooks))
      : candidateNookId;
    return {
      ...prev,
      [newNookId]: { name: deskId, nookCoords: { coords }, isDesk: true },
    };
  }, {});

export interface MapNameAndId {
  name?: string;
  id: string;
}

// Legacy function for converting old objects array to the current format.
// Be VERY CAREFUL changing this function, because TS will not help us here (it's operating on data with unknown/any type).
export const objectsArrayToDict = (
  objects: Omit<MapObjectDB, "zIndex">[],
): NonNullable<GameMapDB["objects"]> => {
  const objOut: GameMapDB["objects"] = {};
  objects.forEach((obj, ind) => {
    // arrays longer than 9999 wouldn't fit in firestore anyways, so we don't have to worry about this going past the 4-char limit
    objOut["" + ind] = { ...obj, zIndex: ind };
  });
  return objOut;
};
