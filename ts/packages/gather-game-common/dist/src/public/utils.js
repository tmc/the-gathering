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
var utils_exports = {};
__export(utils_exports, {
  CONSTANT_PERMANENT_EMOTES: () => import_emoteUtils.CONSTANT_PERMANENT_EMOTES,
  DEFAULT_TEMP_EMOTES: () => import_emoteUtils.DEFAULT_TEMP_EMOTES,
  EMOTE_EMOJIS: () => import_emoteUtils.EMOTE_EMOJIS,
  EMOTE_RESET_SHORTCUT: () => import_emoteUtils.EMOTE_RESET_SHORTCUT,
  EMOTE_SHORTCUTS: () => import_emoteUtils.EMOTE_SHORTCUTS,
  Emote: () => import_emoteUtils.Emote,
  WaveEmotes: () => import_emoteUtils.WaveEmotes,
  generateNewId: () => import_objectUtils.generateNewId,
  getAllEmotes: () => import_emoteUtils.getAllEmotes,
  parseObjCustomState: () => import_objectUtils.parseObjCustomState
});
module.exports = __toCommonJS(utils_exports);
var import_objectUtils = require("../objectUtils");
var import_emoteUtils = require("../emoteUtils");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CONSTANT_PERMANENT_EMOTES,
  DEFAULT_TEMP_EMOTES,
  EMOTE_EMOJIS,
  EMOTE_RESET_SHORTCUT,
  EMOTE_SHORTCUTS,
  Emote,
  WaveEmotes,
  generateNewId,
  getAllEmotes,
  parseObjCustomState
});
//# sourceMappingURL=utils.js.map
