import { WireObject } from "./public/events";
import { MapObject } from "./public/gameMap";
export declare function parseObjCustomState<T>(obj: MapObject | WireObject): T | null;
export declare const generateNewId: (currId: string, idList: string[]) => string;
export declare const getUnusedObjectKey: (takenKeys: {
    [k: string]: unknown;
}) => string;
