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
var gameMap_exports = {};
__export(gameMap_exports, {
  AreaCategory: () => import_GameMap.AreaCategory,
  EnabledChat: () => import_GameMap.EnabledChat,
  Interaction: () => import_GameMap.Interaction,
  MAP_MAX_DIMENSION: () => import_GameMap.MAP_MAX_DIMENSION,
  Portal: () => import_events.Portal,
  PresetTutorialGroupSetIds: () => import_GameMap.PresetTutorialGroupSetIds,
  Space: () => import_events.Space,
  SpawnPoint: () => import_events.SpawnPoint,
  TileType: () => import_GameMap.TileType,
  WallFloorDB: () => import_GameMap.WallFloorDB,
  convertAreaCoordsToCoordsMap: () => import_GameMap.convertAreaCoordsToCoordsMap,
  convertDesksToDBDesks: () => import_GameMap.convertDesksToDBDesks,
  convertMapObjectToWireObject: () => import_GameMap.convertMapObjectToWireObject,
  convertNookInfoToOccupiedNookTilesMap: () => import_GameMap.convertNookInfoToOccupiedNookTilesMap,
  convertStringToEnabledChat: () => import_GameMap.convertStringToEnabledChat,
  convertStringToPresetTutorialGroupSetId: () => import_GameMap.convertStringToPresetTutorialGroupSetId,
  convertTutorialTasksToWireTutorialTasks: () => import_GameMap.convertTutorialTasksToWireTutorialTasks,
  convertWireAreasToAreas: () => import_GameMap.convertWireAreasToAreas,
  convertWireAreasToDBAreas: () => import_GameMap.convertWireAreasToDBAreas,
  convertWireObjectToMapObjectDBPartial: () => import_GameMap.convertWireObjectToMapObjectDBPartial,
  convertWireObjectToMapObjectPartial: () => import_GameMap.convertWireObjectToMapObjectPartial,
  convertWireTutorialTasksToTutorialTasks: () => import_GameMap.convertWireTutorialTasksToTutorialTasks,
  coordsMapToPositions: () => import_GameMap.coordsMapToPositions,
  deprecatedSpacesToNooks: () => import_GameMap.deprecatedSpacesToNooks,
  desksToNooks: () => import_GameMap.desksToNooks,
  findMissingMapObjectFields: () => import_GameMap.findMissingMapObjectFields,
  getUnusedObjectKey: () => import_objectUtils.getUnusedObjectKey,
  interactionOpensModal: () => import_GameMap.interactionOpensModal,
  isMapObject: () => import_GameMap.isMapObject,
  isMapObjectDB: () => import_GameMap.isMapObjectDB,
  isNook: () => import_GameMap.isNook,
  isTileType: () => import_GameMap.isTileType,
  mergeNooks: () => import_GameMap.mergeNooks,
  nookToDeprecatedSpaces: () => import_GameMap.nookToDeprecatedSpaces,
  objectsArrayToDict: () => import_GameMap.objectsArrayToDict
});
module.exports = __toCommonJS(gameMap_exports);
var import_GameMap = require("../GameMap");
var import_objectUtils = require("../objectUtils");
var import_events = require("../generated_DO_NOT_TOUCH/events");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AreaCategory,
  EnabledChat,
  Interaction,
  MAP_MAX_DIMENSION,
  Portal,
  PresetTutorialGroupSetIds,
  Space,
  SpawnPoint,
  TileType,
  WallFloorDB,
  convertAreaCoordsToCoordsMap,
  convertDesksToDBDesks,
  convertMapObjectToWireObject,
  convertNookInfoToOccupiedNookTilesMap,
  convertStringToEnabledChat,
  convertStringToPresetTutorialGroupSetId,
  convertTutorialTasksToWireTutorialTasks,
  convertWireAreasToAreas,
  convertWireAreasToDBAreas,
  convertWireObjectToMapObjectDBPartial,
  convertWireObjectToMapObjectPartial,
  convertWireTutorialTasksToTutorialTasks,
  coordsMapToPositions,
  deprecatedSpacesToNooks,
  desksToNooks,
  findMissingMapObjectFields,
  getUnusedObjectKey,
  interactionOpensModal,
  isMapObject,
  isMapObjectDB,
  isNook,
  isTileType,
  mergeNooks,
  nookToDeprecatedSpaces,
  objectsArrayToDict
});
//# sourceMappingURL=gameMap.js.map
