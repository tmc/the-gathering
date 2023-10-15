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
var GameMap_exports = {};
__export(GameMap_exports, {
  AreaCategory: () => AreaCategory,
  EnabledChat: () => EnabledChat,
  Interaction: () => import_events.InteractionEnum_ENUM,
  MAP_MAX_DIMENSION: () => MAP_MAX_DIMENSION,
  PresetTutorialGroupSetIds: () => PresetTutorialGroupSetIds,
  TileType: () => TileType,
  WallFloorDB: () => WallFloorDB,
  convertAreaCoordsToCoordsMap: () => convertAreaCoordsToCoordsMap,
  convertDesksToDBDesks: () => convertDesksToDBDesks,
  convertMapObjectToWireObject: () => convertMapObjectToWireObject,
  convertNookInfoToOccupiedNookTilesMap: () => convertNookInfoToOccupiedNookTilesMap,
  convertStringToEnabledChat: () => convertStringToEnabledChat,
  convertStringToPresetTutorialGroupSetId: () => convertStringToPresetTutorialGroupSetId,
  convertTutorialTasksToWireTutorialTasks: () => convertTutorialTasksToWireTutorialTasks,
  convertWireAreasToAreas: () => convertWireAreasToAreas,
  convertWireAreasToDBAreas: () => convertWireAreasToDBAreas,
  convertWireObjectToMapObjectDBPartial: () => convertWireObjectToMapObjectDBPartial,
  convertWireObjectToMapObjectPartial: () => convertWireObjectToMapObjectPartial,
  convertWireTutorialTasksToTutorialTasks: () => convertWireTutorialTasksToTutorialTasks,
  coordsMapToPositions: () => coordsMapToPositions,
  deprecatedSpacesToNooks: () => deprecatedSpacesToNooks,
  desksToNooks: () => desksToNooks,
  findMissingMapObjectFields: () => findMissingMapObjectFields,
  interactionOpensModal: () => interactionOpensModal,
  isMapObject: () => isMapObject,
  isMapObjectDB: () => isMapObjectDB,
  isNook: () => isNook,
  isTileType: () => isTileType,
  mergeNooks: () => mergeNooks,
  nookToDeprecatedSpaces: () => nookToDeprecatedSpaces,
  objectsArrayToDict: () => objectsArrayToDict
});
module.exports = __toCommonJS(GameMap_exports);
var import_lodash = require("lodash");
var import_positionUtils = require("./positionUtils");
var import_events = require("./generated_DO_NOT_TOUCH/events");
var import_objectUtils = require("./objectUtils");
var import_ramda = require("ramda");
class WallFloorDB {
}
function isTileType(tile, type) {
  return tile.tileType === type;
}
const MapObjectRequiredFields = ["x", "y", "normal", "type", "width", "height", "zIndex"];
const NookRequiredFields = ["nookCoords", "name"];
function isNook(nook) {
  return NookRequiredFields.every((field) => nook[field] != null);
}
function findMissingMapObjectFields(object) {
  const missingFields = [];
  for (const field of MapObjectRequiredFields) {
    if (object[field] === void 0) {
      missingFields.push(field);
    }
  }
  return missingFields;
}
function isMapObjectDB(obj) {
  return MapObjectRequiredFields.every((field) => obj[field] != null);
}
function isMapObject(obj) {
  return MapObjectRequiredFields.every((field) => obj[field] != null);
}
function convertWireObjectToMapObjectDBPartial(wireObject) {
  return {
    ...(0, import_lodash.cloneDeep)((0, import_ramda.omit)(["propertiesJson"], wireObject)),
    ...wireObject.propertiesJson ? { properties: JSON.parse(wireObject.propertiesJson) } : {}
  };
}
function convertWireObjectToMapObjectPartial(wireObject) {
  return convertWireObjectToMapObjectDBPartial(wireObject);
}
function convertMapObjectToWireObject(mapObject) {
  return {
    _tags: [],
    ...(0, import_lodash.cloneDeep)((0, import_ramda.omit)(["properties"], mapObject)),
    ...mapObject.properties ? { propertiesJson: JSON.stringify(mapObject.properties) } : {}
  };
}
var AreaCategory = /* @__PURE__ */ ((AreaCategory2) => {
  AreaCategory2["RW_OFFICE_LOBBY"] = "RW_OFFICE_LOBBY";
  AreaCategory2["RW_OFFICE_MEETING"] = "RW_OFFICE_MEETING";
  AreaCategory2["COWORKING"] = "COWORKING";
  return AreaCategory2;
})(AreaCategory || {});
function convertWireAreasToDBAreas(wireAreas) {
  const dbAreas = {};
  return Object.entries(wireAreas).reduce((dbAreas2, [areaName, area]) => {
    const { coords, category } = area;
    dbAreas2[areaName] = {
      coords,
      ...category && { category: convertStringToAreaCategory(category) }
    };
    return dbAreas2;
  }, dbAreas);
}
function convertWireAreasToAreas(wireAreas, dimensions) {
  if (dimensions === void 0) {
    throw new Error("Cannot convert wire areas to areas because dimensions are undefined");
  }
  const areas = {};
  return Object.entries(wireAreas).reduce((areas2, [areaName, area]) => {
    const { coords, category } = area;
    const coordsMap = convertAreaCoordsToCoordsMap(coords, dimensions);
    areas2[areaName] = {
      coordsMap,
      ...category && { category: convertStringToAreaCategory(category) }
    };
    return areas2;
  }, areas);
}
function convertAreaCoordsToCoordsMap(coords, [width, height]) {
  const coordsMap = {};
  for (const bbox of coords) {
    const positions = (0, import_positionUtils.getPointFromBoundingBox)(bbox, width, height);
    for (const { x, y } of positions) {
      const temp = coordsMap[y] ?? {};
      temp[x] = true;
      coordsMap[y] = temp;
    }
  }
  return coordsMap;
}
function convertDesksToDBDesks(desks) {
  const { idsMap } = desks;
  const dbDesks = Object.entries(idsMap).reduce((dbDesks2, [deskId, coords]) => {
    const bboxes = convertCoordsToBBoxes(coords);
    return { ...dbDesks2, [deskId]: { coords: bboxes } };
  }, {});
  return dbDesks;
}
function convertCoordsToBBoxes(coords) {
  const coordsSet = new Set(coords.map((coord) => (0, import_positionUtils.serializePoint)(coord)));
  const expandRect = (bbox) => {
    let { x1, x2, y1, y2 } = bbox;
    let expanded = true;
    while (expanded) {
      expanded = false;
      const rightCoords = (0, import_lodash.range)(y1, y2 + 1).map((newY) => ({ x: x2 + 1, y: newY }));
      if (rightCoords.every((coord) => coordsSet.has((0, import_positionUtils.serializePoint)(coord)))) {
        x2 += 1;
        rightCoords.forEach((coord) => {
          coordsSet.delete((0, import_positionUtils.serializePoint)(coord));
        });
        expanded = true;
      }
      const bottomCoords = (0, import_lodash.range)(x1, x2 + 1).map((newX) => ({ x: newX, y: y2 + 1 }));
      if (bottomCoords.every((coord) => coordsSet.has((0, import_positionUtils.serializePoint)(coord)))) {
        y2 += 1;
        bottomCoords.forEach((coord) => {
          coordsSet.delete((0, import_positionUtils.serializePoint)(coord));
        });
        expanded = true;
      }
      const leftCoords = (0, import_lodash.range)(y1, y2 + 1).map((newY) => ({ x: x1 - 1, y: newY }));
      if (leftCoords.every((coord) => coordsSet.has((0, import_positionUtils.serializePoint)(coord)))) {
        x1 -= 1;
        leftCoords.forEach((coord) => {
          coordsSet.delete((0, import_positionUtils.serializePoint)(coord));
        });
        expanded = true;
      }
      const topCoords = (0, import_lodash.range)(x1, x2 + 1).map((newX) => ({ x: newX, y: y1 - 1 }));
      if (topCoords.every((coord) => coordsSet.has((0, import_positionUtils.serializePoint)(coord)))) {
        y1 -= 1;
        topCoords.forEach((coord) => {
          coordsSet.delete((0, import_positionUtils.serializePoint)(coord));
        });
        expanded = true;
      }
    }
    return { x1, x2, y1, y2 };
  };
  const bboxes = [];
  while (coordsSet.size !== 0) {
    const coord = [...Array.from(coordsSet)].pop() || "";
    coordsSet.delete(coord);
    const { x, y } = (0, import_positionUtils.deserializePoint)(coord);
    const bbox = expandRect({ x1: x, x2: x, y1: y, y2: y });
    bboxes.push(bbox);
  }
  return bboxes;
}
const stringToEnum = (str, enumType, enumName) => {
  const value = enumType[str];
  if (typeof value === "undefined") {
    throw new Error(`Invalid value for enum ` + enumName);
  }
  return value;
};
function convertStringToAreaCategory(areaCategory) {
  return stringToEnum(areaCategory, AreaCategory, "AreaCategory");
}
var TileType = /* @__PURE__ */ ((TileType2) => {
  TileType2[TileType2["Impassable"] = 1] = "Impassable";
  TileType2[TileType2["Spawn"] = 2] = "Spawn";
  TileType2[TileType2["Portal"] = 3] = "Portal";
  TileType2[TileType2["Announcer"] = 4] = "Announcer";
  TileType2[TileType2["Nook"] = 5] = "Nook";
  return TileType2;
})(TileType || {});
const MODAL_INTERACTIONS = [
  import_events.InteractionEnum_ENUM.EMBEDDED_WEBSITE,
  import_events.InteractionEnum_ENUM.POSTER,
  import_events.InteractionEnum_ENUM.VIDEO,
  import_events.InteractionEnum_ENUM.EXTERNAL_CALL,
  import_events.InteractionEnum_ENUM.NOTE,
  import_events.InteractionEnum_ENUM.MODAL_EXTENSION,
  import_events.InteractionEnum_ENUM.COMPONENT_MODAL
];
function interactionOpensModal(i) {
  return MODAL_INTERACTIONS.some((j) => j === i);
}
function convertNookInfoToOccupiedNookTilesMap(nooks) {
  const occupiedNookTilesMap = {};
  Object.entries(nooks).forEach(([nookId, nook]) => {
    nook.nookCoords.coords.forEach((coord) => {
      occupiedNookTilesMap[coord.x] = { ...occupiedNookTilesMap[coord.x], [coord.y]: nookId };
    });
  });
  return occupiedNookTilesMap;
}
function coordsMapToPositions(coordsMap) {
  const coords = [];
  Object.entries(coordsMap).forEach(
    ([y, xObj]) => Object.keys(xObj).forEach((x) => coords.push({ x: parseInt(x), y: parseInt(y) }))
  );
  return coords;
}
var EnabledChat = /* @__PURE__ */ ((EnabledChat2) => {
  EnabledChat2["GLOBAL_CHAT"] = "GLOBAL_CHAT";
  EnabledChat2["LOCAL_CHAT"] = "LOCAL_CHAT";
  EnabledChat2["ROOM_CHAT"] = "ROOM_CHAT";
  return EnabledChat2;
})(EnabledChat || {});
function convertStringToEnabledChat(enabledChat) {
  return stringToEnum(enabledChat, EnabledChat, "EnabledChat");
}
var PresetTutorialGroupSetIds = /* @__PURE__ */ ((PresetTutorialGroupSetIds2) => {
  PresetTutorialGroupSetIds2["UNUSED"] = "UNUSED";
  return PresetTutorialGroupSetIds2;
})(PresetTutorialGroupSetIds || {});
function convertWireTutorialTasksToTutorialTasks(wireTutorialTasks) {
  const groupSetId = convertStringToPresetTutorialGroupSetId(wireTutorialTasks.groupSetId);
  return { ...wireTutorialTasks, groupSetId };
}
function convertTutorialTasksToWireTutorialTasks(tutorialTasks) {
  return { ...tutorialTasks, areas: tutorialTasks.areas ?? [] };
}
function convertStringToPresetTutorialGroupSetId(presetTutorialGroupSetId) {
  return stringToEnum(
    presetTutorialGroupSetId,
    PresetTutorialGroupSetIds,
    "PresetTutorialGroupSetIds"
  );
}
const MAP_MAX_DIMENSION = 9999;
const nookToDeprecatedSpaces = (nooks) => {
  const spaces = [];
  if (!nooks)
    return [];
  Object.keys(nooks).forEach((nookId) => {
    const nook = nooks[nookId];
    if (!nook)
      return;
    const coords = nook.nookCoords.coords;
    coords.forEach((c) => {
      spaces.push({
        spaceId: nookId,
        x: c.x,
        y: c.y,
        colored: nook.colored
      });
    });
  });
  return spaces;
};
const replaceInvalidNookIdCharacters = (nookId) => nookId.replace(/\./g, "-");
const deprecatedSpacesToNooks = (spaces) => {
  const nooks = {};
  if (!spaces)
    return {};
  spaces.forEach((space) => {
    const nookId = replaceInvalidNookIdCharacters(space.spaceId);
    const nook = nooks[nookId];
    if (nook) {
      nook.colored = space.colored;
      nook.nookCoords.coords.push({
        x: space.x,
        y: space.y
      });
    } else {
      nooks[nookId] = {
        colored: space.colored,
        name: `${nookId}`,
        nookCoords: {
          coords: [
            {
              x: space.x,
              y: space.y
            }
          ]
        },
        restricted: false,
        allowedUsers: { users: [] }
      };
    }
  });
  return nooks;
};
const mergeNooks = (currentNooks, newNooks, overwrite) => {
  var _a;
  let mergedNooks = currentNooks ?? {};
  if (overwrite) {
    mergedNooks = {};
    Object.entries(newNooks).forEach(([key, value]) => {
      if (value.name && value.nookCoords) {
        mergedNooks[key] = {
          ...value,
          name: value.name,
          nookCoords: value.nookCoords
        };
      } else {
        throw new Error("Invalid nook found when overwriting, failing");
      }
    });
  } else {
    for (const k in newNooks) {
      const defaultNook = {
        nookCoords: {
          coords: []
        },
        name: ((_a = newNooks[k]) == null ? void 0 : _a.name) || k,
        restricted: false,
        allowedUsers: {
          users: []
        }
      };
      mergedNooks[k] = {
        ...defaultNook,
        ...currentNooks[k],
        ...newNooks[k]
      };
    }
  }
  return mergedNooks;
};
const desksToNooks = (desks, nooks) => Object.entries(desks).reduce((prev, [deskId, desk]) => {
  const coords = desk.coords.reduce(
    (prev2, bbox) => [...prev2, ...(0, import_positionUtils.getPointFromBoundingBox)(bbox)],
    []
  );
  const candidateNookId = deskId.replace(/\./g, "-");
  const newNookId = Object.keys(nooks).includes(candidateNookId) ? (0, import_objectUtils.generateNewId)(candidateNookId, Object.keys(nooks)) : candidateNookId;
  return {
    ...prev,
    [newNookId]: { name: deskId, nookCoords: { coords }, isDesk: true }
  };
}, {});
const objectsArrayToDict = (objects) => {
  const objOut = {};
  objects.forEach((obj, ind) => {
    objOut["" + ind] = { ...obj, zIndex: ind };
  });
  return objOut;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AreaCategory,
  EnabledChat,
  Interaction,
  MAP_MAX_DIMENSION,
  PresetTutorialGroupSetIds,
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
  interactionOpensModal,
  isMapObject,
  isMapObjectDB,
  isNook,
  isTileType,
  mergeNooks,
  nookToDeprecatedSpaces,
  objectsArrayToDict
});
//# sourceMappingURL=GameMap.js.map
