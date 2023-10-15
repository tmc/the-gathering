import { Point, BoundingBox, MapPosition } from "./Position";

export const isPointEqual = (a: Point, b: Point): boolean => a.x === b.x && a.y === b.y;

export function isMapPositionEqual(a: MapPosition, b: MapPosition) {
  return a.x === b.x && a.y === b.y && a.map === b.map;
}

/**
 * Lots of function params require type Point so it doesn't allow type MapPosition because of
 * the `map?: undefined` requirement on `Point`
 * However, MapPosition can be safely used anywhere that requires Point because it contains x, y
 * *** Only use this function on MapPosition types that you are certain which map they're on ***
 */
export function dangerouslyCastToPoint(mapPosition: MapPosition): Point {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return mapPosition as unknown as Point;
}

// TODO: write a simple test for serialize + deserialize
export function serializePoint(p: Point): string {
  return serializePointCoordinates(p.x, p.y);
}

// Use this over serializePoint() to avoid unnecessary obj allocation.
export function serializePointCoordinates(x: number, y: number): string {
  return `${x} ${y}`;
}

// Utility functions for row-major order: maps an X/Y coordinate to a one-dimensional array,
// given a predefined grid width. (If you're trying to reference world positions, you should use
// the map's width.)
export function pointToIndex(pos: Point, width: number): number {
  return coordinatesToIndex(pos.x, pos.y, width);
}
export function coordinatesToIndex(x: number, y: number, width: number): number {
  return y * width + x;
}

// Utility function for row-major order: maps an array index to an XY coordinate, given a predefined
// grid width. (If you're trying to reference world positions, you should use the map's width.)
let _x: number, _y: number;
export function indexToPoint(index: number, width: number): Point {
  _y = (index / width) | 0;
  _x = index - _y * width;
  return { x: _x, y: _y };
}

// This should only be called on strings output from serializePoint()
// may return NaN or throw on bad inputs
export function deserializePoint(s: string): Point {
  const parts = s.split(" ");
  const [first, second] = parts;
  return { x: first ? parseFloat(first) : NaN, y: second ? parseFloat(second) : NaN };
}

export function manhattanDistance(a: Point, b: Point): number {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

export function euclideanDistance(a: Point, b: Point): number {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

export function isPointWithinRectangle(
  position: Point,
  rectBounds: {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
  },
) {
  return (
    position.x >= rectBounds.x &&
    position.y >= rectBounds.y &&
    position.x < rectBounds.x + rectBounds.width &&
    position.y < rectBounds.y + rectBounds.height
  );
}

export function calcCentroid(coords: Point[]): Point {
  let x_mean = 0;
  let y_mean = 0;
  for (const { x, y } of coords) {
    x_mean += x;
    y_mean += y;
  }
  return { x: x_mean / coords.length, y: y_mean / coords.length };
}

export function getBoundingBox(coords: Point[]): {
  x: number;
  y: number;
  width: number;
  height: number;
} {
  const bound = { x1: Infinity, y1: Infinity, x2: 0, y2: 0 };
  for (const { x, y } of coords) {
    if (x < bound.x1) {
      bound.x1 = x;
    }
    if (y < bound.y1) {
      bound.y1 = y;
    }
    if (x > bound.x2) {
      bound.x2 = x;
    }
    if (y > bound.y2) {
      bound.y2 = y;
    }
  }
  return {
    x: bound.x1,
    y: bound.y1,
    width: bound.x2 - bound.x1 + 1,
    height: bound.y2 - bound.y1 + 1,
  };
}

export function getPointFromBoundingBox(
  bbox: BoundingBox,
  width = Infinity,
  height = Infinity,
): Point[] {
  const { x1, y1, x2, y2 } = bbox;
  const minX = Math.max(0, Math.min(x1, x2));
  const maxX = Math.min(width - 1, Math.max(x1, x2));
  const minY = Math.max(0, Math.min(y1, y2));
  const maxY = Math.min(height - 1, Math.max(y1, y2));

  const coords: Point[] = [];
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      coords.push({ x, y });
    }
  }
  return coords;
}

// given two positions, return the diff between position 1 and position 2
export const subtractPoints = (position1: Point, position2: Point): Point => ({
  x: position1.x - position2.x,
  y: position1.y - position2.y,
});
