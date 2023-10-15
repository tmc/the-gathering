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
var position_exports = {};
__export(position_exports, {
  calcCentroid: () => import_positionUtils.calcCentroid,
  coordinatesToIndex: () => import_positionUtils.coordinatesToIndex,
  dangerouslyCastToPoint: () => import_positionUtils.dangerouslyCastToPoint,
  deserializePoint: () => import_positionUtils.deserializePoint,
  euclideanDistance: () => import_positionUtils.euclideanDistance,
  getBoundingBox: () => import_positionUtils.getBoundingBox,
  getPointFromBoundingBox: () => import_positionUtils.getPointFromBoundingBox,
  indexToPoint: () => import_positionUtils.indexToPoint,
  isMapPositionEqual: () => import_positionUtils.isMapPositionEqual,
  isPointEqual: () => import_positionUtils.isPointEqual,
  isPointWithinRectangle: () => import_positionUtils.isPointWithinRectangle,
  manhattanDistance: () => import_positionUtils.manhattanDistance,
  pointToIndex: () => import_positionUtils.pointToIndex,
  serializePoint: () => import_positionUtils.serializePoint,
  serializePointCoordinates: () => import_positionUtils.serializePointCoordinates,
  subtractPoints: () => import_positionUtils.subtractPoints
});
module.exports = __toCommonJS(position_exports);
var import_positionUtils = require("../positionUtils");
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
//# sourceMappingURL=position.js.map
