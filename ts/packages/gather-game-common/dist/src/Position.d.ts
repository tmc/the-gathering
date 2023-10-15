import { Player } from "./Player";
type BasePoint_DO_NOT_USE_DIRECTLY = {
    readonly x: number;
    readonly y: number;
};
type PlayerMapField = Pick<Player, "map">;
type NeverPlayerMapField = {
    [key in keyof PlayerMapField]+?: never;
};
type ReadonlyPlayerMapField = {
    +readonly [key in keyof PlayerMapField]: PlayerMapField[key];
};
export type Point = BasePoint_DO_NOT_USE_DIRECTLY & NeverPlayerMapField;
export type MapPosition = BasePoint_DO_NOT_USE_DIRECTLY & ReadonlyPlayerMapField;
export type GridPosition = Point;
export type WorldPosition = Point;
export interface BoundingBox {
    readonly x1: number;
    readonly x2: number;
    readonly y1: number;
    readonly y2: number;
}
export {};
