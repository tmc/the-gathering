"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var positionUtils_exports = {};
__export(positionUtils_exports, {
  calcCentroid: () => calcCentroid,
  coordinatesToIndex: () => coordinatesToIndex,
  dangerouslyCastToPoint: () => dangerouslyCastToPoint,
  deserializePoint: () => deserializePoint,
  euclideanDistance: () => euclideanDistance,
  getBoundingBox: () => getBoundingBox,
  getPointFromBoundingBox: () => getPointFromBoundingBox,
  indexToPoint: () => indexToPoint,
  isMapPositionEqual: () => isMapPositionEqual,
  isPointEqual: () => isPointEqual,
  isPointWithinRectangle: () => isPointWithinRectangle,
  manhattanDistance: () => manhattanDistance,
  pointToIndex: () => pointToIndex,
  serializePoint: () => serializePoint,
  serializePointCoordinates: () => serializePointCoordinates,
  subtractPoints: () => subtractPoints
});
module.exports = __toCommonJS(positionUtils_exports);
const isPointEqual = (a, b) => a.x === b.x && a.y === b.y;
function isMapPositionEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.map === b.map;
}
function dangerouslyCastToPoint(mapPosition) {
  return mapPosition;
}
function serializePoint(p) {
  return serializePointCoordinates(p.x, p.y);
}
function serializePointCoordinates(x, y) {
  return `${x} ${y}`;
}
function pointToIndex(pos, width) {
  return coordinatesToIndex(pos.x, pos.y, width);
}
function coordinatesToIndex(x, y, width) {
  return y * width + x;
}
let _x, _y;
function indexToPoint(index, width) {
  _y = index / width | 0;
  _x = index - _y * width;
  return { x: _x, y: _y };
}
function deserializePoint(s) {
  const parts = s.split(" ");
  const [first, second] = parts;
  return { x: first ? parseFloat(first) : NaN, y: second ? parseFloat(second) : NaN };
}
function manhattanDistance(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}
function euclideanDistance(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
function isPointWithinRectangle(position, rectBounds) {
  return position.x >= rectBounds.x && position.y >= rectBounds.y && position.x < rectBounds.x + rectBounds.width && position.y < rectBounds.y + rectBounds.height;
}
function calcCentroid(coords) {
  let x_mean = 0;
  let y_mean = 0;
  for (const { x, y } of coords) {
    x_mean += x;
    y_mean += y;
  }
  return { x: x_mean / coords.length, y: y_mean / coords.length };
}
function getBoundingBox(coords) {
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
    height: bound.y2 - bound.y1 + 1
  };
}
function getPointFromBoundingBox(bbox, width = Infinity, height = Infinity) {
  const { x1, y1, x2, y2 } = bbox;
  const minX = Math.max(0, Math.min(x1, x2));
  const maxX = Math.min(width - 1, Math.max(x1, x2));
  const minY = Math.max(0, Math.min(y1, y2));
  const maxY = Math.min(height - 1, Math.max(y1, y2));
  const coords = [];
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      coords.push({ x, y });
    }
  }
  return coords;
}
const subtractPoints = (position1, position2) => ({
  x: position1.x - position2.x,
  y: position1.y - position2.y
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  calcCentroid,
  coordinatesToIndex,
  dangerouslyCastToPoint,
  deserializePoint,
  euclideanDistance,
  getBoundingBox,
  getPointFromBoundingBox,
  indexToPoint,
  isMapPositionEqual,
  isPointEqual,
  isPointWithinRectangle,
  manhattanDistance,
  pointToIndex,
  serializePoint,
  serializePointCoordinates,
  subtractPoints
});
//# sourceMappingURL=positionUtils.js.map
