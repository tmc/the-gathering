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
var RemoteWorkTrivia_exports = {};
__export(RemoteWorkTrivia_exports, {
  DEFAULT_QUESTION_VALUE: () => DEFAULT_QUESTION_VALUE,
  QUESTION_PACKS: () => QUESTION_PACKS,
  QUESTION_PACKS_INFO: () => QUESTION_PACKS_INFO,
  TRIVIA_COLORS: () => TRIVIA_COLORS,
  TRIVIA_MAP_ID: () => TRIVIA_MAP_ID,
  TriviaGamePhase: () => TriviaGamePhase
});
module.exports = __toCommonJS(RemoteWorkTrivia_exports);
const TRIVIA_MAP_ID = "rw-trivia";
var TriviaGamePhase = /* @__PURE__ */ ((TriviaGamePhase2) => {
  TriviaGamePhase2["UNINITIALIZED"] = "UNINITIALIZED";
  TriviaGamePhase2["JOIN"] = "JOIN";
  TriviaGamePhase2["SHOW_QUESTION"] = "SHOW_QUESTION";
  TriviaGamePhase2["SHOW_ANSWER"] = "SHOW_ANSWER";
  TriviaGamePhase2["ENDED"] = "ENDED";
  return TriviaGamePhase2;
})(TriviaGamePhase || {});
const TRIVIA_COLORS = /* @__PURE__ */ new Set([
  "#FF9DDE",
  "#FBD54E",
  "#64E9D1",
  "#AEE964",
  "#A966FF",
  "#FC7079",
  "#FF9960",
  "#EA36AC",
  "#B67800",
  "#2D62EC",
  "#37C214",
  "#7230FF",
  "#D42E2E",
  "#E85110"
]);
var QUESTION_PACKS = /* @__PURE__ */ ((QUESTION_PACKS2) => {
  QUESTION_PACKS2["GENERAL_174"] = "general_174";
  QUESTION_PACKS2["KOREAN_52"] = "korean_52";
  QUESTION_PACKS2["MEDIA_74"] = "media_74";
  QUESTION_PACKS2["SPORTS_50"] = "sports_50";
  QUESTION_PACKS2["TECH_63"] = "tech_63";
  return QUESTION_PACKS2;
})(QUESTION_PACKS || {});
const QUESTION_PACKS_INFO = {
  ["general_174" /* GENERAL_174 */]: {
    id: "general_174",
    fileName: "General_174.csv",
    numQuestions: 170,
    categories: [
      "Movies",
      "Music",
      "News Events",
      "Pop Culture",
      "Sports",
      "TV",
      "Video Games",
      "Business",
      "Computers & Technology",
      "Literature"
    ],
    maxDifficulty: 3,
    displayName: "General Trivia"
  },
  ["korean_52" /* KOREAN_52 */]: {
    id: "korean_52",
    fileName: "Korean_52.csv",
    numQuestions: 50,
    categories: ["Korean Trivia"],
    maxDifficulty: 3,
    displayName: "Korean Trivia"
  },
  ["media_74" /* MEDIA_74 */]: {
    id: "media_74",
    fileName: "Media_74.csv",
    numQuestions: 70,
    categories: ["Media Trivia"],
    maxDifficulty: 3,
    displayName: "Media Trivia"
  },
  ["sports_50" /* SPORTS_50 */]: {
    id: "sports_50",
    fileName: "Sports_50.csv",
    numQuestions: 50,
    categories: ["Sports Trivia"],
    maxDifficulty: 3,
    displayName: "Sports Trivia"
  },
  ["tech_63" /* TECH_63 */]: {
    id: "tech_63",
    fileName: "Tech_63.csv",
    numQuestions: 60,
    categories: ["Tech Trivia"],
    maxDifficulty: 3,
    displayName: "Tech Trivia"
  }
};
const DEFAULT_QUESTION_VALUE = 100;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEFAULT_QUESTION_VALUE,
  QUESTION_PACKS,
  QUESTION_PACKS_INFO,
  TRIVIA_COLORS,
  TRIVIA_MAP_ID,
  TriviaGamePhase
});
//# sourceMappingURL=RemoteWorkTrivia.js.map
