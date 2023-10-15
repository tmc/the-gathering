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
var player_exports = {};
__export(player_exports, {
  DEFAULT_NAME: () => import_playerUtils.DEFAULT_NAME,
  MoveDirection: () => import_Player.MoveDirection,
  Player: () => import_Player.Player,
  PlayerDBFields: () => import_Player.PlayerDBFields,
  PlayerStatusEndOption: () => import_Player.PlayerStatusEndOption,
  PlayerStatusOption: () => import_Player.PlayerStatusOption,
  SpriteDirection: () => import_Player.SpriteDirection,
  VehicleAction: () => import_playerUtils.VehicleAction,
  directionToFacePlayer: () => import_playerUtils.directionToFacePlayer,
  generateDefaultPlayer: () => import_playerUtils.generateDefaultPlayer,
  getMoveDirFromSpriteDir: () => import_playerUtils.getMoveDirFromSpriteDir,
  isAssignedDeskInfo: () => import_Player.isAssignedDeskInfo,
  nextSpriteDirection: () => import_playerUtils.nextSpriteDirection,
  oppositeMoveDirection: () => import_playerUtils.oppositeMoveDirection,
  positionAfterMove: () => import_playerUtils.positionAfterMove,
  whisperIdToColor: () => import_playerUtils.whisperIdToColor
});
module.exports = __toCommonJS(player_exports);
var import_Player = require("../Player");
var import_playerUtils = require("../playerUtils");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEFAULT_NAME,
  MoveDirection,
  Player,
  PlayerDBFields,
  PlayerStatusEndOption,
  PlayerStatusOption,
  SpriteDirection,
  VehicleAction,
  directionToFacePlayer,
  generateDefaultPlayer,
  getMoveDirFromSpriteDir,
  isAssignedDeskInfo,
  nextSpriteDirection,
  oppositeMoveDirection,
  positionAfterMove,
  whisperIdToColor
});
//# sourceMappingURL=player.js.map
