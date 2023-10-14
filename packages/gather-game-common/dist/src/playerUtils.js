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
var playerUtils_exports = {};
__export(playerUtils_exports, {
  DEFAULT_NAME: () => DEFAULT_NAME,
  VehicleAction: () => VehicleAction,
  directionToFacePlayer: () => directionToFacePlayer,
  generateDefaultPlayer: () => generateDefaultPlayer,
  getMoveDirFromSpriteDir: () => getMoveDirFromSpriteDir,
  nextSpriteDirection: () => nextSpriteDirection,
  oppositeMoveDirection: () => oppositeMoveDirection,
  positionAfterMove: () => positionAfterMove,
  whisperIdToColor: () => whisperIdToColor
});
module.exports = __toCommonJS(playerUtils_exports);
var import_positionUtils = require("./positionUtils");
var import_Player = require("./Player");
const generateDefaultPlayer = (playerId) => {
  const player = new import_Player.Player(playerId);
  player.x = -99999;
  player.y = -99999;
  player.emote = "";
  player.away = true;
  player.lastActive = new Date().toISOString();
  player.connected = true;
  return player;
};
const DEFAULT_NAME = "Anonymous";
function getMoveDirFromSpriteDir(direction) {
  switch (direction) {
    case import_Player.SpriteDirection.Dance1:
    case import_Player.SpriteDirection.Dance2:
    case import_Player.SpriteDirection.Dance3:
    case import_Player.SpriteDirection.Dance4:
      return import_Player.MoveDirection.Dance;
    case import_Player.SpriteDirection.Down:
    case import_Player.SpriteDirection.DownAlt:
      return import_Player.MoveDirection.Down;
    case import_Player.SpriteDirection.Up:
    case import_Player.SpriteDirection.UpAlt:
      return import_Player.MoveDirection.Up;
    case import_Player.SpriteDirection.Left:
    case import_Player.SpriteDirection.LeftAlt:
      return import_Player.MoveDirection.Left;
    case import_Player.SpriteDirection.Right:
    case import_Player.SpriteDirection.RightAlt:
      return import_Player.MoveDirection.Right;
    default:
      return null;
  }
}
function oppositeMoveDirection(direction) {
  switch (direction) {
    case import_Player.MoveDirection.Left:
      return import_Player.MoveDirection.Right;
    case import_Player.MoveDirection.Right:
      return import_Player.MoveDirection.Left;
    case import_Player.MoveDirection.Up:
      return import_Player.MoveDirection.Down;
    case import_Player.MoveDirection.Down:
      return import_Player.MoveDirection.Up;
    default:
      return null;
  }
}
function positionAfterMove(start, dir, dist = 1) {
  const { x, y, map } = start;
  switch (dir) {
    case import_Player.MoveDirection.Left:
      return { x: x - dist, y, map };
    case import_Player.MoveDirection.Right:
      return { x: x + dist, y, map };
    case import_Player.MoveDirection.Up:
      return { x, y: y - dist, map };
    case import_Player.MoveDirection.Down:
      return { x, y: y + dist, map };
    default:
      return start;
  }
}
function nextSpriteDirection(current, direction) {
  if (direction === import_Player.MoveDirection.Left && current === import_Player.SpriteDirection.Left) {
    return import_Player.SpriteDirection.LeftAlt;
  } else if (direction === import_Player.MoveDirection.Right && current === import_Player.SpriteDirection.Right) {
    return import_Player.SpriteDirection.RightAlt;
  } else if (direction === import_Player.MoveDirection.Up && current === import_Player.SpriteDirection.Up) {
    return import_Player.SpriteDirection.UpAlt;
  } else if (direction === import_Player.MoveDirection.Down && current === import_Player.SpriteDirection.Down) {
    return import_Player.SpriteDirection.DownAlt;
  } else if (direction === import_Player.MoveDirection.Dance && current === import_Player.SpriteDirection.Dance1) {
    return import_Player.SpriteDirection.Dance2;
  } else if (direction === import_Player.MoveDirection.Dance && current === import_Player.SpriteDirection.Dance2) {
    return import_Player.SpriteDirection.Dance3;
  } else if (direction === import_Player.MoveDirection.Dance && current === import_Player.SpriteDirection.Dance3) {
    return import_Player.SpriteDirection.Dance4;
  } else if (direction === import_Player.MoveDirection.Left) {
    return import_Player.SpriteDirection.Left;
  } else if (direction === import_Player.MoveDirection.Right) {
    return import_Player.SpriteDirection.Right;
  } else if (direction === import_Player.MoveDirection.Up) {
    return import_Player.SpriteDirection.Up;
  } else if (direction === import_Player.MoveDirection.Down) {
    return import_Player.SpriteDirection.Down;
  } else if (direction === import_Player.MoveDirection.Dance) {
    return import_Player.SpriteDirection.Dance1;
  }
  return current;
}
function directionToFacePlayer(player, target) {
  if (player.map !== target.map)
    return null;
  if ((0, import_positionUtils.manhattanDistance)((0, import_positionUtils.dangerouslyCastToPoint)(player), (0, import_positionUtils.dangerouslyCastToPoint)(target)) !== 1)
    return null;
  if (player.x - target.x === 1) {
    return import_Player.MoveDirection.Left;
  } else if (player.x - target.x === -1) {
    return import_Player.MoveDirection.Right;
  } else if (player.y - target.y === 1) {
    return import_Player.MoveDirection.Up;
  } else if (player.y - target.y === -1) {
    return import_Player.MoveDirection.Down;
  }
  return null;
}
function whisperIdToColor(id) {
  if (id.length === 7)
    return id;
  return "#" + id.slice(0, 6);
}
var VehicleAction = /* @__PURE__ */ ((VehicleAction2) => {
  VehicleAction2["Mount"] = "mount";
  VehicleAction2["Dismount"] = "dismount";
  return VehicleAction2;
})(VehicleAction || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEFAULT_NAME,
  VehicleAction,
  directionToFacePlayer,
  generateDefaultPlayer,
  getMoveDirFromSpriteDir,
  nextSpriteDirection,
  oppositeMoveDirection,
  positionAfterMove,
  whisperIdToColor
});
//# sourceMappingURL=playerUtils.js.map
