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
var testIds_exports = {};
__export(testIds_exports, {
  ANOTHER_TEST_PLAYER_ID: () => ANOTHER_TEST_PLAYER_ID,
  MY_TEST_PLAYER_ID: () => MY_TEST_PLAYER_ID,
  OTHER_TEST_MAP_ID: () => OTHER_TEST_MAP_ID,
  RECORDING_BOT_ID: () => RECORDING_BOT_ID,
  TEST_MAP_ID: () => TEST_MAP_ID,
  TEST_NOOK_ID: () => TEST_NOOK_ID,
  TEST_RECORDING_ID: () => TEST_RECORDING_ID,
  TEST_SPACE_ID: () => TEST_SPACE_ID,
  YET_ANOTHER_TEST_MAP_ID: () => YET_ANOTHER_TEST_MAP_ID,
  YET_ANOTHER_TEST_PLAYER_ID: () => YET_ANOTHER_TEST_PLAYER_ID
});
module.exports = __toCommonJS(testIds_exports);
const MY_TEST_PLAYER_ID = "myTestPlayerId";
const ANOTHER_TEST_PLAYER_ID = "anotherTestPlayer";
const YET_ANOTHER_TEST_PLAYER_ID = "yetAnotherTestPlayer";
const RECORDING_BOT_ID = "recordingBot";
const TEST_SPACE_ID = "myTestSpace";
const TEST_MAP_ID = "myTestMap";
const OTHER_TEST_MAP_ID = "myOtherTestMap";
const YET_ANOTHER_TEST_MAP_ID = "yetAnotherTestMap";
const TEST_NOOK_ID = "testNook";
const TEST_RECORDING_ID = "testEgressId";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ANOTHER_TEST_PLAYER_ID,
  MY_TEST_PLAYER_ID,
  OTHER_TEST_MAP_ID,
  RECORDING_BOT_ID,
  TEST_MAP_ID,
  TEST_NOOK_ID,
  TEST_RECORDING_ID,
  TEST_SPACE_ID,
  YET_ANOTHER_TEST_MAP_ID,
  YET_ANOTHER_TEST_PLAYER_ID
});
//# sourceMappingURL=testIds.js.map
