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
var RemoteWorkFishing_exports = {};
__export(RemoteWorkFishing_exports, {
  FishName: () => FishName,
  JunkName: () => JunkName,
  getAllFishItems: () => getAllFishItems,
  getAllJunkItems: () => getAllJunkItems,
  getFishItem: () => getFishItem,
  getFishingItemNameToImage: () => getFishingItemNameToImage,
  getJunkItem: () => getJunkItem
});
module.exports = __toCommonJS(RemoteWorkFishing_exports);
var FishName = /* @__PURE__ */ ((FishName2) => {
  FishName2["Salmon"] = "Salmon";
  FishName2["Trout"] = "Trout";
  FishName2["Bass"] = "Bass";
  return FishName2;
})(FishName || {});
var JunkName = /* @__PURE__ */ ((JunkName2) => {
  JunkName2["CyberpunkWaste"] = "Cyberpunk Waste";
  JunkName2["Anchor"] = "Anchor";
  JunkName2["Kelp"] = "Kelp";
  return JunkName2;
})(JunkName || {});
const getFishingItemNameToImage = (name) => `https://cdn.gather.town/v0/b/gather-town.appspot.com/o/manually-uploaded%2Ffishing%2F${name.toUpperCase().split(" ").join("_")}.png?alt=media`;
const getFishItem = (fishName) => {
  const previewUrl = getFishingItemNameToImage(fishName);
  const item = {
    name: fishName,
    category: "Fishing",
    previewUrl,
    meta: {},
    abilities: {}
  };
  return item;
};
const getAllFishItems = () => Object.values(FishName).reduce(
  (prev, fishName) => ({ ...prev, [fishName]: getFishItem(fishName) }),
  {}
);
const getJunkItem = (junkName) => {
  const previewUrl = getFishingItemNameToImage(junkName);
  const item = {
    name: junkName,
    category: "Fishing Junk",
    previewUrl,
    meta: {},
    abilities: {}
  };
  return item;
};
const getAllJunkItems = () => Object.values(JunkName).reduce(
  (prev, junkName) => ({ ...prev, [junkName]: getJunkItem(junkName) }),
  {}
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FishName,
  JunkName,
  getAllFishItems,
  getAllJunkItems,
  getFishItem,
  getFishingItemNameToImage,
  getJunkItem
});
//# sourceMappingURL=RemoteWorkFishing.js.map
