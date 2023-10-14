import { Point } from "./Position";
import { Announcer, AreaPosition, Asset, DBDesk, InteractionEnum_ENUM as Interaction, NookDiff, Portal, Space, SpawnPoint, TutorialTaskMapArea, WireArea, WireObject, WireTutorialTasks } from "./generated_DO_NOT_TOUCH/events";
export { Interaction };
export type CoordsMap<T> = {
    [y: number]: {
        [x: number]: T;
    };
};
export interface GameMapBaseDoNotUseDirectly {
    id: string;
    dimensions: [number, number];
    backgroundImagePath: string;
    foregroundImagePath?: string;
    sprites?: number[];
    spawn?: Point;
    spawns: SpawnPoint[];
    portals: Portal[];
    announcer: Announcer[];
    assets?: Asset[];
    name?: string;
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
export interface GameMapDB extends Omit<GameMapBaseDoNotUseDirectly, "areas"> {
    typeCheckFakeField?: null;
    typeCheckFakeField2?: never;
    objects?: {
        [key: string]: MapObjectDB;
    };
    walls?: WallFloorDB;
    floors?: WallFloorDB;
    areas?: DBAreas;
    desks?: never;
    collisions: string;
    spaces?: never;
}
export interface GameMapHttpPublic extends Omit<GameMapDB, "typeCheckFakeField" | "typeCheckFakeField2"> {
    typeCheckFakeField?: never;
    typeCheckFakeField2?: null;
    occupiedNookTilesMap?: never;
}
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
export declare class WallFloorDB {
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
export declare function isTileType<T extends TileType>(tile: Tile, type: T): tile is T extends TileType.Spawn ? SpawnTile : T extends TileType.Nook ? NookTile : T extends TileType.Portal ? PortalTile : never;
type MakeFieldsRequired<T, K extends keyof T> = Required<Pick<T, K>> & T;
declare const MapObjectRequiredFields: readonly ["x", "y", "normal", "type", "width", "height", "zIndex"];
type _WireMapObjectRequiredFieldsT = (typeof MapObjectRequiredFields)[number];
type _WireObjectWithRequireds = MakeFieldsRequired<WireObject, _WireMapObjectRequiredFieldsT>;
declare const NookRequiredFields: readonly ["nookCoords", "name"];
export type Nook = MakeFieldsRequired<NookDiff, (typeof NookRequiredFields)[number]>;
export declare function isNook(nook: Partial<Nook>): nook is Nook;
export interface MapObjectDB extends Omit<_WireObjectWithRequireds, "propertiesJson" | "_tags"> {
    _tags?: string[];
    properties?: Record<string, any>;
    propertiesJson?: never;
}
export interface MapObject extends MapObjectDB {
}
export type MapObjectToAdd = Omit<MapObject, "zIndex"> & {
    zIndex?: number;
};
export declare function findMissingMapObjectFields(object: {
    [key: string]: unknown;
} | WireObject): string[];
export declare function isMapObjectDB(obj: Partial<MapObjectDB>): obj is MapObjectDB;
export declare function isMapObject(obj: Partial<MapObject>): obj is MapObject;
export declare function convertWireObjectToMapObjectDBPartial(wireObject: WireObject): Partial<MapObjectDB>;
export declare function convertWireObjectToMapObjectPartial(wireObject: WireObject): Partial<MapObject>;
export declare function convertMapObjectToWireObject(mapObject: Partial<MapObjectDB>): WireObject;
export declare enum AreaCategory {
    RW_OFFICE_LOBBY = "RW_OFFICE_LOBBY",
    RW_OFFICE_MEETING = "RW_OFFICE_MEETING",
    COWORKING = "COWORKING"
}
export interface BaseArea {
    category?: AreaCategory;
}
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
    [x: string]: {
        [y: string]: string;
    };
}
export interface DBDesks {
    [deskId: string]: DBDesk;
}
export interface Desks {
    coordsMap: string[][];
    idsMap: {
        [deskId: string]: Point[];
    };
}
export declare function convertWireAreasToDBAreas(wireAreas: WireAreas): DBAreas;
export declare function convertWireAreasToAreas(wireAreas: WireAreas, dimensions: [number, number] | undefined): Areas;
export declare function convertAreaCoordsToCoordsMap(coords: AreaPosition[], [width, height]: [number, number]): CoordsMap<true>;
export declare function convertDesksToDBDesks(desks: Desks): DBDesks;
export declare enum TileType {
    Impassable = 1,
    Spawn = 2,
    Portal = 3,
    Announcer = 4,
    Nook = 5
}
declare const MODAL_INTERACTIONS: readonly [Interaction.EMBEDDED_WEBSITE, Interaction.POSTER, Interaction.VIDEO, Interaction.EXTERNAL_CALL, Interaction.NOTE, Interaction.MODAL_EXTENSION, Interaction.COMPONENT_MODAL];
export type ModalInteraction = (typeof MODAL_INTERACTIONS)[number];
export declare function interactionOpensModal(i: Interaction): boolean;
export declare function convertNookInfoToOccupiedNookTilesMap(nooks: NookInfo): OccupiedNookTilesMap;
export declare function coordsMapToPositions(coordsMap: CoordsMap<true>): Point[];
export declare enum EnabledChat {
    GLOBAL_CHAT = "GLOBAL_CHAT",
    LOCAL_CHAT = "LOCAL_CHAT",
    ROOM_CHAT = "ROOM_CHAT"
}
export declare function convertStringToEnabledChat(enabledChat: string): EnabledChat;
export declare enum PresetTutorialGroupSetIds {
    UNUSED = "UNUSED"
}
export interface TutorialTasks extends Omit<WireTutorialTasks, "groupSetId" | "areas"> {
    groupSetId: PresetTutorialGroupSetIds;
    areas?: TutorialTaskMapArea[];
}
export declare function convertWireTutorialTasksToTutorialTasks(wireTutorialTasks: WireTutorialTasks): {
    groupSetId: PresetTutorialGroupSetIds;
    areas: TutorialTaskMapArea[];
    autoStart?: boolean | undefined;
};
export declare function convertTutorialTasksToWireTutorialTasks(tutorialTasks: TutorialTasks): WireTutorialTasks;
export declare function convertStringToPresetTutorialGroupSetId(presetTutorialGroupSetId: string): PresetTutorialGroupSetIds;
export declare const MAP_MAX_DIMENSION = 9999;
export declare const nookToDeprecatedSpaces: (nooks?: NookInfo) => Space[];
export declare const deprecatedSpacesToNooks: (spaces?: Space[]) => NookInfo;
export declare const mergeNooks: (currentNooks: NookInfo, newNooks: {
    [key: string]: NookDiff;
}, overwrite?: boolean) => NookInfo;
export declare const desksToNooks: (desks: DBDesks, nooks: NookInfo) => NookInfo;
export interface MapNameAndId {
    name?: string;
    id: string;
}
export declare const objectsArrayToDict: (objects: Omit<MapObjectDB, "zIndex">[]) => NonNullable<GameMapDB["objects"]>;
