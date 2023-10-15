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
var RemoteWorkBoardGames_exports = {};
__export(RemoteWorkBoardGames_exports, {
  BOARD_GAME_MAPS: () => BOARD_GAME_MAPS,
  BoardGame: () => BoardGame,
  BoardGameInfo: () => BoardGameInfo,
  BoardGamesServerEvents: () => BoardGamesServerEvents,
  GENERIC_GAME_BOX_OBJ: () => GENERIC_GAME_BOX_OBJ,
  isBoardGame: () => isBoardGame,
  shownBoardGames: () => shownBoardGames
});
module.exports = __toCommonJS(RemoteWorkBoardGames_exports);
const BOARD_GAME_MAPS = ["game-room-small", "game-room-medium", "game-room-large"];
const GENERIC_GAME_BOX_OBJ = {
  _name: "Game box (generic)",
  _tags: ["games"],
  color: "#cbdbfc",
  height: 1,
  highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2Fxstd4MG91e9axvZV?alt=media&token=12ad8ed2-d4b1-4ce0-9d5f-e8b81afd1a78",
  normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2Fs6v6PjLWnNyQ2sY0?alt=media&token=8698ff2c-b4de-45b7-aca4-e6d4d7f1fa72",
  previewMessage: "Press x to set up game table",
  properties: {
    componentModal: "boardGames",
    url: "",
    deterministicUrlPrefix: ""
  },
  templateId: "Game Box (Generic) - tU4wtuuObn8eyJ4PFyor2",
  type: 8,
  width: 1
};
var BoardGamesServerEvents = /* @__PURE__ */ ((BoardGamesServerEvents2) => {
  BoardGamesServerEvents2["GAME_UPDATED"] = "gameUpdated";
  return BoardGamesServerEvents2;
})(BoardGamesServerEvents || {});
var BoardGame = /* @__PURE__ */ ((BoardGame2) => {
  BoardGame2["DrawBattle"] = "Draw battle";
  BoardGame2["Skribbl"] = "Skribbl.io";
  BoardGame2["GuessMe"] = "GuessMe!";
  BoardGame2["BattleTetris"] = "Battle tetris";
  BoardGame2["Poker"] = "Poker";
  BoardGame2["Codenames"] = "Codenames";
  BoardGame2["OneNightWerewolf"] = "One night werewolf";
  BoardGame2["Colonist"] = "Colonist.io";
  return BoardGame2;
})(BoardGame || {});
const shownBoardGames = [
  "Draw battle" /* DrawBattle */,
  "GuessMe!" /* GuessMe */,
  "Battle tetris" /* BattleTetris */,
  "Poker" /* Poker */,
  "Codenames" /* Codenames */,
  "One night werewolf" /* OneNightWerewolf */
];
function isBoardGame(objectName) {
  return Object.values(BoardGame).some((value) => value === objectName);
}
const BoardGameInfo = {
  ["Draw battle" /* DrawBattle */]: {
    description: "Rounds of team-based battle drawing",
    numPlayers: "4+",
    duration: "10 min",
    requiresInviteCode: false,
    object: {
      _name: "Draw battle" /* DrawBattle */,
      _tags: ["games"],
      height: 1,
      highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FjADBDKFIHF8ldPk9?alt=media&token=b090ad1a-a6fa-480c-937c-f08195956a1d",
      normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FXLXyX3wFgab7Ce8Z?alt=media&token=47cd4e8c-0067-4893-8add-e18504f76a4a",
      previewMessage: "Press x to play Draw Battle",
      properties: {
        deterministicUrlPrefix: "https://drawbattle.io/gather/"
      },
      templateId: "Draw Battle - lsqDHieRYQxn0D6TPHbnM",
      type: 1,
      width: 1
    }
  },
  ["Skribbl.io" /* Skribbl */]: {
    description: "Test out your drawing and guessing skills.",
    numPlayers: "2 - 12",
    duration: "5 min",
    requiresInviteCode: true,
    object: {
      _name: "Skribbl.io" /* Skribbl */,
      _tags: ["games"],
      height: 1,
      highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FhuNHLBjfrjEYmfnG?alt=media&token=c4244743-0ad5-4eb6-994c-f8315c3764a7",
      normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2F4h8VZHuQvRn8pFbF?alt=media&token=cb2a7a0a-31d9-43e4-a948-17949252ea8e",
      previewMessage: "Press x to play Skribbl.io",
      properties: {
        url: "https://app.gather.town/skribbl"
      },
      templateId: "Skribbl.io - okbA8YqhFX960TF3ZF_7x",
      type: 1,
      width: 1
    }
  },
  ["GuessMe!" /* GuessMe */]: {
    description: "How well do you know your friends? Try to guess your friend's answers in GuessMe!",
    numPlayers: "1 - 10",
    duration: "15 min",
    requiresInviteCode: true,
    object: {
      _name: "GuessMe!" /* GuessMe */,
      _tags: ["games"],
      color: "#b46ed5",
      height: 1,
      highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/eUMxEepVuaSYMM4Q8V8EU",
      normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/TJz_8Xmmd7THrcSt-zUAa",
      previewMessage: "Press x to play GuessMe!",
      properties: {
        url: "https://guessme.io/"
      },
      templateId: "GuessMe - l_fZWyhquQ2qtYUqYf1Lp",
      type: 1,
      width: 1
    }
  },
  ["Battle tetris" /* BattleTetris */]: {
    description: "Play Tetris against your friends or play solo.",
    numPlayers: "1 - 7",
    duration: "3 min",
    requiresInviteCode: false,
    object: {
      _name: "Battle tetris" /* BattleTetris */,
      _tags: ["games"],
      height: 1,
      highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2Fk3uu567R2AgbBWKl?alt=media&token=aeee60b2-1108-4d6c-9d05-0307d265dd9a",
      normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FPWbbvsJV0nk5pZB7?alt=media&token=f1a571c8-9231-4458-af77-91f82bf672b5",
      previewMessage: "Press x to play Battle Tetris",
      properties: {
        deterministicUrlPrefix: "https://jstris.jezevec10.com/?join="
      },
      templateId: "Battle Tetris - 4a8wu1xUIOj9P_LSv5aI3",
      type: 1,
      width: 1
    }
  },
  ["Poker" /* Poker */]: {
    description: "Your own private poker game.",
    numPlayers: "2 - 9",
    duration: "30 min",
    requiresInviteCode: false,
    object: {
      _name: "Poker" /* Poker */,
      _tags: ["games"],
      height: 2,
      highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FrOBr4dR1jIsk0psD?alt=media&token=d6aea5ca-a133-491d-a058-376ad9420b9e",
      normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FIDTEJik3AgWGt7xH?alt=media&token=e202476f-5fdc-4a1d-8d7e-a3cc448deab7",
      previewMessage: "Press x to play Poker",
      properties: {
        deterministicUrlPrefix: "https://lipoker.io/gather_town/"
      },
      templateId: "Poker - XtEMq29PsYU5Q5CyqR86o",
      type: 1,
      width: 2
    }
  },
  ["Codenames" /* Codenames */]: {
    description: "Communicate with your team without giving clues to your opponents.",
    numPlayers: "4+",
    duration: "15 min",
    requiresInviteCode: true,
    object: {
      _name: "Codenames" /* Codenames */,
      _tags: ["games"],
      height: 1,
      highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FyK2Wx5J6kAA2lXTI?alt=media&token=8cd81c7c-55df-4203-80cd-c119ca640c14",
      normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FLtAzHBWX6bjstEip?alt=media&token=7f82925f-acf5-4196-8170-5db9e368ae7c",
      previewMessage: "Press x to play Codenames",
      properties: {
        url: "https://netgames.io/games/codewords/"
      },
      templateId: "Codenames - KR6_UkZzgR5nARnVJD7Jt",
      type: 1,
      width: 1
    }
  },
  ["One night werewolf" /* OneNightWerewolf */]: {
    description: "The classic social deduction game with a twist.",
    numPlayers: "3 - 29",
    duration: "10 min",
    requiresInviteCode: true,
    object: {
      _name: "One night werewolf" /* OneNightWerewolf */,
      _tags: ["games"],
      height: 2,
      highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FUIK078PsUjDhakgY?alt=media&token=f74f5264-e40d-4bf8-af1c-17bc3bf19512",
      normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2F2N94xTdmiuk431NC?alt=media&token=44ea2773-9914-4dc3-b181-08aa6b8d8b7f",
      previewMessage: "Press x to play One Night Werewolf",
      properties: {
        url: "https://netgames.io/games/onu-werewolf/"
      },
      templateId: "One Night Werewolf - f-gQI8Tm_9eMvP44aS-AU",
      type: 1,
      width: 2
    }
  },
  ["Colonist.io" /* Colonist */]: {
    description: "Collect resources and build your colony.",
    numPlayers: "1 - 8",
    duration: "30 min",
    requiresInviteCode: true,
    object: {
      _name: "Colonist.io" /* Colonist */,
      _tags: ["games"],
      height: 1,
      highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2F6Qtu3OReSizYGjv0?alt=media&token=448d12c4-3e4d-4022-b31b-1a6b9b685531",
      normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FsnpIJNrvpAzAAnz6?alt=media&token=1857302c-2080-4579-8f1d-aa4ac5dc4b37",
      previewMessage: "Press x to play Colonist.io",
      properties: {
        url: "https://colonist.io/"
      },
      templateId: "Colonist.io - yxnzNXKBm6jko1cZm0gWJ",
      type: 1,
      width: 1
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BOARD_GAME_MAPS,
  BoardGame,
  BoardGameInfo,
  BoardGamesServerEvents,
  GENERIC_GAME_BOX_OBJ,
  isBoardGame,
  shownBoardGames
});
//# sourceMappingURL=RemoteWorkBoardGames.js.map
