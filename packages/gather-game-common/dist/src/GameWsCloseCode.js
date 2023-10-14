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
var GameWsCloseCode_exports = {};
__export(GameWsCloseCode_exports, {
  GameWsCloseCode: () => GameWsCloseCode
});
module.exports = __toCommonJS(GameWsCloseCode_exports);
var GameWsCloseCode = /* @__PURE__ */ ((GameWsCloseCode2) => {
  GameWsCloseCode2[GameWsCloseCode2["NORMAL_CLOSURE"] = 1e3] = "NORMAL_CLOSURE";
  GameWsCloseCode2[GameWsCloseCode2["GOING_AWAY"] = 1001] = "GOING_AWAY";
  GameWsCloseCode2[GameWsCloseCode2["PROTOCOL_ERROR"] = 1002] = "PROTOCOL_ERROR";
  GameWsCloseCode2[GameWsCloseCode2["NO_STATUS_RECEIVED"] = 1005] = "NO_STATUS_RECEIVED";
  GameWsCloseCode2[GameWsCloseCode2["NO_CLOSE_FRAME"] = 1006] = "NO_CLOSE_FRAME";
  GameWsCloseCode2[GameWsCloseCode2["INTERNAL_ERROR"] = 1011] = "INTERNAL_ERROR";
  GameWsCloseCode2[GameWsCloseCode2["CONN_TIMED_OUT"] = 4008] = "CONN_TIMED_OUT";
  GameWsCloseCode2[GameWsCloseCode2["SPACE_REASSIGNED"] = 4009] = "SPACE_REASSIGNED";
  GameWsCloseCode2[GameWsCloseCode2["CLIENT_KICKED"] = 4010] = "CLIENT_KICKED";
  GameWsCloseCode2[GameWsCloseCode2["SPACE_CLOSED"] = 4011] = "SPACE_CLOSED";
  GameWsCloseCode2[GameWsCloseCode2["SPACE_AT_CAPACITY"] = 4012] = "SPACE_AT_CAPACITY";
  GameWsCloseCode2[GameWsCloseCode2["NONFATAL_INTERNAL_ERROR"] = 4013] = "NONFATAL_INTERNAL_ERROR";
  GameWsCloseCode2[GameWsCloseCode2["UNAUTHORIZED"] = 4003] = "UNAUTHORIZED";
  GameWsCloseCode2[GameWsCloseCode2["CHILL_OUT"] = 4420] = "CHILL_OUT";
  GameWsCloseCode2[GameWsCloseCode2["SUS"] = 4666] = "SUS";
  GameWsCloseCode2[GameWsCloseCode2["HIGHLANDER"] = 4667] = "HIGHLANDER";
  return GameWsCloseCode2;
})(GameWsCloseCode || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GameWsCloseCode
});
//# sourceMappingURL=GameWsCloseCode.js.map
