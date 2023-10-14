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
var objectUtils_exports = {};
__export(objectUtils_exports, {
  generateNewId: () => generateNewId,
  getUnusedObjectKey: () => getUnusedObjectKey,
  parseObjCustomState: () => parseObjCustomState
});
module.exports = __toCommonJS(objectUtils_exports);
var import_non_secure = require("nanoid/non-secure");
function parseObjCustomState(obj) {
  const state = obj == null ? void 0 : obj.customState;
  if (state) {
    try {
      return JSON.parse(state);
    } catch (e) {
      console.log("error getting custom state");
    }
  }
  return null;
}
const generateNewId = (currId, idList) => {
  const digitsAtEndMatch = currId.match(/\d+$/);
  let newId;
  if (digitsAtEndMatch && digitsAtEndMatch[0]) {
    const indexOfDigits = currId.indexOf(digitsAtEndMatch[0]);
    newId = currId.substring(0, indexOfDigits) + (parseInt(digitsAtEndMatch[0], 10) + 1);
  } else {
    newId = currId + "-2";
  }
  if (idList.includes(newId)) {
    return generateNewId(newId, idList);
  } else {
    return newId;
  }
};
const getUnusedObjectKey = (takenKeys) => {
  let count = 0;
  let k = "";
  do {
    if (count++ > 1e4) {
      throw new Error("can't find a key after 10k attempts, throwing to avoid an infinite loop");
    }
    k = (0, import_non_secure.nanoid)(4);
  } while (k in takenKeys);
  return k;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateNewId,
  getUnusedObjectKey,
  parseObjCustomState
});
//# sourceMappingURL=objectUtils.js.map
