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
var emoteUtils_exports = {};
__export(emoteUtils_exports, {
  CONSTANT_PERMANENT_EMOTES: () => CONSTANT_PERMANENT_EMOTES,
  DEFAULT_TEMP_EMOTES: () => DEFAULT_TEMP_EMOTES,
  EMOTE_EMOJIS: () => EMOTE_EMOJIS,
  EMOTE_RESET_SHORTCUT: () => EMOTE_RESET_SHORTCUT,
  EMOTE_SHORTCUTS: () => EMOTE_SHORTCUTS,
  Emote: () => Emote,
  WaveEmotes: () => WaveEmotes,
  getAllEmotes: () => getAllEmotes
});
module.exports = __toCommonJS(emoteUtils_exports);
var Emote = /* @__PURE__ */ ((Emote2) => {
  Emote2["Wave"] = "Wave";
  Emote2["Heart"] = "Heart";
  Emote2["PartyPopper"] = "PartyPopper";
  Emote2["RaisedHand"] = "RaisedHand";
  return Emote2;
})(Emote || {});
const EMOTE_EMOJIS = {
  ["Wave" /* Wave */]: "\u{1F44B}",
  ["Heart" /* Heart */]: "\u2764\uFE0F",
  ["PartyPopper" /* PartyPopper */]: "\u{1F389}",
  ["RaisedHand" /* RaisedHand */]: "\u{1F91A}"
};
const WaveEmotes = ["\u{1F44B}", "\u{1F44B}\u{1F3FB}", "\u{1F44B}\u{1F3FC}", "\u{1F44B}\u{1F3FD}", "\u{1F44B}\u{1F3FE}", "\u{1F44B}\u{1F3FF}"];
const CONSTANT_PERMANENT_EMOTES = [EMOTE_EMOJIS["RaisedHand" /* RaisedHand */]];
const getAllEmotes = (tempEmotes) => [...tempEmotes, ...CONSTANT_PERMANENT_EMOTES];
const EMOTE_RESET_SHORTCUT = "0";
const EMOTE_SHORTCUTS = [
  EMOTE_RESET_SHORTCUT,
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "h"
];
const DEFAULT_TEMP_EMOTES = ["\u{1F44B}", "\u2764\uFE0F", "\u{1F389}", "\u{1F44D}", "\u{1F923}", "\u{1F44F}", "\u{1F4AF}"];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CONSTANT_PERMANENT_EMOTES,
  DEFAULT_TEMP_EMOTES,
  EMOTE_EMOJIS,
  EMOTE_RESET_SHORTCUT,
  EMOTE_SHORTCUTS,
  Emote,
  WaveEmotes,
  getAllEmotes
});
//# sourceMappingURL=emoteUtils.js.map
