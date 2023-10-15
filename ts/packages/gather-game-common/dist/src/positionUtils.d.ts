import { Point, BoundingBox, MapPosition } from "./Position";
export declare const isPointEqual: (a: Point, b: Point) => boolean;
export declare function isMapPositionEqual(a: MapPosition, b: MapPosition): boolean;
export declare function dangerouslyCastToPoint(mapPosition: MapPosition): Point;
export declare function serializePoint(p: Point): string;
export declare function serializePointCoordinates(x: number, y: number): string;
export declare function pointToIndex(pos: Point, width: number): number;
export declare function coordinatesToIndex(x: number, y: number, width: number): number;
export declare function indexToPoint(index: number, width: number): Point;
export declare function deserializePoint(s: string): Point;
export declare function manhattanDistance(a: Point, b: Point): number;
export declare function euclideanDistance(a: Point, b: Point): number;
export declare function isPointWithinRectangle(position: Point, rectBounds: {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
}): boolean;
export declare function calcCentroid(coords: Point[]): Point;
export declare function getBoundingBox(coords: Point[]): {
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare function getPointFromBoundingBox(bbox: BoundingBox, width?: number, height?: number): Point[];
export declare const subtractPoints: (position1: Point, position2: Point) => Point;
