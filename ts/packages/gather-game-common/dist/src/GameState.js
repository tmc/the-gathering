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
var GameState_exports = {};
__export(GameState_exports, {
  GAME_STATE_PLAYER_DISCONNECT_SYMBOL: () => GAME_STATE_PLAYER_DISCONNECT_SYMBOL
});
module.exports = __toCommonJS(GameState_exports);
const GAME_STATE_PLAYER_DISCONNECT_SYMBOL = null;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GAME_STATE_PLAYER_DISCONNECT_SYMBOL
});
//# sourceMappingURL=GameState.js.map
