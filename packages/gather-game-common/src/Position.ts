import { Player } from "./Player";

// The base type of Point and MapPosition
type BasePoint_DO_NOT_USE_DIRECTLY = {
  readonly x: number;
  readonly y: number;
};

type PlayerMapField = Pick<Player, "map">;

type NeverPlayerMapField = { [key in keyof PlayerMapField]+?: never };

type ReadonlyPlayerMapField = {
  +readonly [key in keyof PlayerMapField]: PlayerMapField[key];
};

// Defines an x, y coordinate, without belonging to a map
export type Point = BasePoint_DO_NOT_USE_DIRECTLY & NeverPlayerMapField;

// Defines an x, y coordinate that belongs to a map
export type MapPosition = BasePoint_DO_NOT_USE_DIRECTLY & ReadonlyPlayerMapField;

/**
 * Positions as stored in the database. Represents the 'cells' of grid maps.
 * To convert to pixel or world position, multiply by `objectSizes`.
 */
export type GridPosition = Point;

/**
 * Positions as used by the renderer. Represents the actual pixel/world positions.
 * To convert to grid position, divide by `objectSizes` and `ceil/floor` as necessary.
 */
export type WorldPosition = Point;

export interface BoundingBox {
  readonly x1: number;
  readonly x2: number;
  readonly y1: number;
  readonly y2: number;
}
