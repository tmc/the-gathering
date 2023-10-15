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
var EventErrorCodes_exports = {};
__export(EventErrorCodes_exports, {
  EventErrorCodes: () => EventErrorCodes
});
module.exports = __toCommonJS(EventErrorCodes_exports);
var EventErrorCodes = /* @__PURE__ */ ((EventErrorCodes2) => {
  EventErrorCodes2[EventErrorCodes2["INVALID_ACTION_DATA"] = 400] = "INVALID_ACTION_DATA";
  EventErrorCodes2[EventErrorCodes2["FORBIDDEN"] = 403] = "FORBIDDEN";
  EventErrorCodes2[EventErrorCodes2["EVENT_OR_ACTION_NOT_FOUND"] = 404] = "EVENT_OR_ACTION_NOT_FOUND";
  EventErrorCodes2[EventErrorCodes2["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
  EventErrorCodes2[EventErrorCodes2["INTERNAL_ERROR"] = 500] = "INTERNAL_ERROR";
  return EventErrorCodes2;
})(EventErrorCodes || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EventErrorCodes
});
//# sourceMappingURL=EventErrorCodes.js.map
