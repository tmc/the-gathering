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
var Player_exports = {};
__export(Player_exports, {
  MoveDirection: () => import_events.MoveDirectionEnum_ENUM,
  Player: () => Player,
  PlayerDBFields: () => PlayerDBFields,
  PlayerStatusEndOption: () => PlayerStatusEndOption,
  PlayerStatusOption: () => PlayerStatusOption,
  SpriteDirection: () => import_events.SpriteDirectionEnum_ENUM,
  isAssignedDeskInfo: () => isAssignedDeskInfo
});
module.exports = __toCommonJS(Player_exports);
var import_events = require("./generated_DO_NOT_TOUCH/events");
function isAssignedDeskInfo(deskInfo) {
  return !!(deskInfo == null ? void 0 : deskInfo.mapId) && !!deskInfo.deskId;
}
var PlayerStatusOption = /* @__PURE__ */ ((PlayerStatusOption2) => {
  PlayerStatusOption2["Available"] = "Available";
  PlayerStatusOption2["Busy"] = "Busy";
  PlayerStatusOption2["DoNotDisturb"] = "DoNotDisturb";
  return PlayerStatusOption2;
})(PlayerStatusOption || {});
var PlayerStatusEndOption = /* @__PURE__ */ ((PlayerStatusEndOption2) => {
  PlayerStatusEndOption2["NONE_SELECTED"] = "NONE_SELECTED";
  PlayerStatusEndOption2["THIRTY_MINUTES"] = "THIRTY_MINUTES";
  PlayerStatusEndOption2["ONE_HOUR"] = "ONE_HOUR";
  PlayerStatusEndOption2["TWO_HOURS"] = "TWO_HOURS";
  PlayerStatusEndOption2["TOMORROW"] = "TOMORROW";
  return PlayerStatusEndOption2;
})(PlayerStatusEndOption || {});
class PlayerDBFields {
  constructor() {
    this.affiliation = "";
    this.allowScreenPointer = true;
    this.connected = false;
    this.currentlyEquippedWearables = void 0;
    this.description = "";
    this.deskInfo = {};
    this.displayEmail = "";
    this.emojiStatus = "";
    this.focusModeEndTime = "";
    this.inventory = { items: {}, order: {} };
    this.isNpc = false;
    this.itemString = "";
    this.map = "";
    this.name = "";
    this.personalImageUrl = "";
    this.phone = "";
    this.profileImageUrl = "";
    this.pronouns = "";
    this.textStatus = "";
    this.timezone = "";
    this.title = "";
    this.city = "";
    this.country = "";
    this.status = "Available" /* Available */;
    this.statusUpdatedAt = "";
    this.statusEndOption = "NONE_SELECTED" /* NONE_SELECTED */;
    this.lastRaisedHand = "";
    this.startDate = "";
    this.x = 0;
    this.y = 0;
    this.direction = import_events.SpriteDirectionEnum_ENUM.Down;
  }
}
class Player extends PlayerDBFields {
  constructor(id) {
    super();
    this.id = id;
    this.ghost = 0;
    this.spotlighted = 0;
    this.emote = void 0;
    this.away = false;
    this.activelySpeaking = 0;
    this.lastActive = "";
    this.lastInputId = 0;
    this.whisperId = "";
    this.isSignedIn = false;
    this.eventStatus = "";
    this.inConversation = false;
    this.currentArea = "";
    this.vehicleId = "";
    this.speedModifier = 1;
    this.isAlone = true;
    this.isMobile = false;
    this.followTarget = "";
    this.manualVideoSrc = "";
    this.subtitle = "";
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MoveDirection,
  Player,
  PlayerDBFields,
  PlayerStatusEndOption,
  PlayerStatusOption,
  SpriteDirection,
  isAssignedDeskInfo
});
//# sourceMappingURL=Player.js.map
