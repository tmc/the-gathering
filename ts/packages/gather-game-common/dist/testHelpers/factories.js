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
var factories_exports = {};
__export(factories_exports, {
  factories: () => factories,
  getDefaultMockPlayerName: () => getDefaultMockPlayerName
});
module.exports = __toCommonJS(factories_exports);
var import_fishery = require("fishery");
var import_playerUtils = require("../src/playerUtils");
var import_events = require("../src/public/events");
const getDefaultMockPlayerName = (playerId) => `player ${playerId}`;
const mockPlayer = import_fishery.Factory.define(({ sequence, transientParams }) => {
  const playerId = transientParams.id || sequence;
  return {
    ...(0, import_playerUtils.generateDefaultPlayer)(playerId.toString()),
    name: getDefaultMockPlayerName(playerId),
    x: 1,
    y: 1
  };
});
const baseObjectData = {
  width: 10,
  height: 10,
  normal: "testObject.png",
  x: 0,
  y: 0,
  offsetX: 0,
  offsetY: 0,
  _tags: [],
  type: import_events.InteractionEnum_ENUM.NONE
};
const mockWireObject = import_fishery.Factory.define(
  ({ params, transientParams: { interactable = true }, sequence }) => ({
    ...baseObjectData,
    id: params.id ?? `wire-object-${sequence.toString()}`,
    type: interactable ? import_events.InteractionEnum_ENUM.EMBEDDED_WEBSITE : import_events.InteractionEnum_ENUM.NONE,
    propertiesJson: "{}",
    zIndex: sequence
  })
);
const mockMapObjectDB = import_fishery.Factory.define(({ params, sequence }) => ({
  ...baseObjectData,
  id: params.id ?? `map-object-${sequence.toString()}`,
  properties: {},
  zIndex: sequence
}));
const mockNook = import_fishery.Factory.define(({ sequence, params, transientParams }) => {
  const id = sequence.toString();
  return {
    name: `Nook ${id}`,
    nookCoords: {
      coords: transientParams.coords
    },
    isDesk: params.isDesk ?? false
  };
});
const factories = {
  player: mockPlayer,
  wireObject: mockWireObject,
  mapObjectDB: mockMapObjectDB,
  nook: mockNook
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  factories,
  getDefaultMockPlayerName
});
//# sourceMappingURL=factories.js.map
