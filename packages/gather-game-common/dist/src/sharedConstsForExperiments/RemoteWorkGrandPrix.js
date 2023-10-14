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
var RemoteWorkGrandPrix_exports = {};
__export(RemoteWorkGrandPrix_exports, {
  AUDIENCE_COORDS: () => AUDIENCE_COORDS,
  BACKGROUND_MUSIC_VOLUME: () => BACKGROUND_MUSIC_VOLUME,
  CROWN_IMG: () => CROWN_IMG,
  DOOR_AREA_COORDS: () => DOOR_AREA_COORDS,
  FINISHED_PLACE_COLOR: () => FINISHED_PLACE_COLOR,
  GRAND_PRIX_CHECKPOINT: () => GRAND_PRIX_CHECKPOINT,
  GRAND_PRIX_MAPS: () => GRAND_PRIX_MAPS,
  GRAND_PRIX_MAP_SFX: () => GRAND_PRIX_MAP_SFX,
  GRAND_PRIX_NUM_LANES: () => GRAND_PRIX_NUM_LANES,
  GRAND_PRIX_PORTAL: () => GRAND_PRIX_PORTAL,
  GRAND_PRIX_START_POS: () => GRAND_PRIX_START_POS,
  GRAND_PRIX_TEMPLATE_PORTALS: () => GRAND_PRIX_TEMPLATE_PORTALS,
  GrandPrixClientEvents: () => GrandPrixClientEvents,
  GrandPrixGamePhase: () => GrandPrixGamePhase,
  GrandPrixMaps: () => GrandPrixMaps,
  GrandPrixMapsInfo: () => GrandPrixMapsInfo,
  GrandPrixServerEvents: () => GrandPrixServerEvents,
  NUM_LAPS: () => NUM_LAPS,
  PODIUM_COORDS: () => PODIUM_COORDS,
  SOUND_EFFECT_VOLUME: () => SOUND_EFFECT_VOLUME,
  SoundEffect: () => SoundEffect,
  getUpdatedGrandPrixLeaderboardsData: () => getUpdatedGrandPrixLeaderboardsData,
  randomIntFromInterval: () => randomIntFromInterval
});
module.exports = __toCommonJS(RemoteWorkGrandPrix_exports);
var import_RemoteWorkRoomOfRequirements = require("./RemoteWorkRoomOfRequirements");
var GrandPrixMaps = /* @__PURE__ */ ((GrandPrixMaps2) => {
  GrandPrixMaps2["Original"] = "rose-raceway";
  GrandPrixMaps2["Castle"] = "dark-castle-dragway";
  GrandPrixMaps2["Seaside"] = "seaside-speedway";
  return GrandPrixMaps2;
})(GrandPrixMaps || {});
const GRAND_PRIX_MAPS = [
  "rose-raceway" /* Original */,
  "dark-castle-dragway" /* Castle */,
  "seaside-speedway" /* Seaside */
];
const GRAND_PRIX_PORTAL = import_RemoteWorkRoomOfRequirements.SocialRoomInfo[import_RemoteWorkRoomOfRequirements.SocialRoom.GoKarts].portal;
const GRAND_PRIX_TEMPLATE_PORTALS = import_RemoteWorkRoomOfRequirements.SocialRoomInfo[import_RemoteWorkRoomOfRequirements.SocialRoom.GoKarts].templatePortals;
const GrandPrixMapsInfo = {
  ["rose-raceway" /* Original */]: {
    imageURL: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/iYKZr84o97YLlNsd/CMGcE7i6DidMU95T2MBjuQ",
    portal: GRAND_PRIX_PORTAL,
    templatePortals: GRAND_PRIX_TEMPLATE_PORTALS,
    sourceSpace: "iYKZr84o97YLlNsd\\templateRacetrack"
  },
  ["dark-castle-dragway" /* Castle */]: {
    imageURL: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/FJCjTwKxexpwUUJs/PAK5C3CWKyPp1Kd3CpMpIy",
    portal: GRAND_PRIX_PORTAL,
    templatePortals: GRAND_PRIX_TEMPLATE_PORTALS,
    sourceSpace: "FJCjTwKxexpwUUJs\\templateDarkCastle"
  },
  ["seaside-speedway" /* Seaside */]: {
    imageURL: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/HJWM8Cb2JGtgEmyr/iCTyCnMf7OA8fqHNToo5kx",
    portal: GRAND_PRIX_PORTAL,
    templatePortals: GRAND_PRIX_TEMPLATE_PORTALS,
    sourceSpace: "HJWM8Cb2JGtgEmyr\\templateBeachTrack"
  }
};
const NUM_LAPS = 3;
var GrandPrixGamePhase = /* @__PURE__ */ ((GrandPrixGamePhase2) => {
  GrandPrixGamePhase2["WAITING_FOR_PLAYERS"] = "waitingForPlayers";
  GrandPrixGamePhase2["PLAYING"] = "playing";
  GrandPrixGamePhase2["DONE"] = "done";
  return GrandPrixGamePhase2;
})(GrandPrixGamePhase || {});
var GrandPrixServerEvents = /* @__PURE__ */ ((GrandPrixServerEvents2) => {
  GrandPrixServerEvents2["FULL_STATE"] = "fullState";
  GrandPrixServerEvents2["UPDATED_GAME_PHASE"] = "updatedGamePhase";
  GrandPrixServerEvents2["FINISHED_LAP"] = "finishedLap";
  GrandPrixServerEvents2["PLAYER_FINISHED_RACE"] = "playerFinishedRace";
  GrandPrixServerEvents2["ALL_PLAYERS_FINISHED"] = "allPlayersFinished";
  GrandPrixServerEvents2["SELECT_TRACK_FINISHED"] = "selectTrackFinished";
  GrandPrixServerEvents2["UPDATE_LEADERBOARD"] = "updateLeaderboard";
  return GrandPrixServerEvents2;
})(GrandPrixServerEvents || {});
var GrandPrixClientEvents = /* @__PURE__ */ ((GrandPrixClientEvents2) => {
  GrandPrixClientEvents2["JOIN_SPACE"] = "joinSpace";
  GrandPrixClientEvents2["START_PRESSED"] = "startPressed";
  GrandPrixClientEvents2["END_RACE"] = "endRace";
  GrandPrixClientEvents2["RESET_RACE"] = "resetRace";
  GrandPrixClientEvents2["SELECT_TRACK"] = "selectTrack";
  return GrandPrixClientEvents2;
})(GrandPrixClientEvents || {});
const GRAND_PRIX_START_POS = {
  ["rose-raceway" /* Original */]: [39, 73],
  ["seaside-speedway" /* Seaside */]: [39, 71],
  ["dark-castle-dragway" /* Castle */]: [39, 71]
};
const GRAND_PRIX_NUM_LANES = {
  ["rose-raceway" /* Original */]: 10,
  ["seaside-speedway" /* Seaside */]: 12,
  ["dark-castle-dragway" /* Castle */]: 12
};
const GRAND_PRIX_CHECKPOINT = {
  ["rose-raceway" /* Original */]: [46, 7],
  ["seaside-speedway" /* Seaside */]: [37, 7],
  ["dark-castle-dragway" /* Castle */]: [32, 9]
};
const FINISHED_PLACE_COLOR = {
  1: "#569cfb",
  2: "#6ece9a",
  3: "#fdef4a"
};
const PODIUM_COORDS = {
  1: [48, 53],
  2: [47, 53],
  3: [49, 53]
};
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const AUDIENCE_COORDS = {
  xMin: 44,
  xMax: 52,
  yMin: 56,
  yMax: 60
};
const DOOR_AREA_COORDS = {
  xMin: 16,
  xMax: 22,
  yMin: 84,
  yMax: 85
};
const CROWN_IMG = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Favatar_goldcrown.png?alt=media&token=adf0c54f-b730-451e-a450-71d3ccd5f897";
const SOUND_EFFECT_VOLUME = 0.1;
const BACKGROUND_MUSIC_VOLUME = 0.15;
var SoundEffect = /* @__PURE__ */ ((SoundEffect2) => {
  SoundEffect2["MountVehicle"] = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FUI_select.wav?alt=media&token=e50967bb-20ef-4dea-b4dd-af087c7ecf84";
  SoundEffect2["DismountVehicle"] = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FUI_cancel.mp3?alt=media&token=efdbe39d-ed33-4321-81c2-2cbf34e267b6";
  SoundEffect2["Ramp"] = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FObject_jump.wav?alt=media&token=e6df4e96-5f51-4e1c-a2d7-bff06587d9ce";
  SoundEffect2["SpeedBoost"] = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FObject_booster.wav?alt=media&token=5ce2a956-575e-47d5-8402-cdd2c9dd2fe6";
  SoundEffect2["Obstacle"] = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FObject_obstacle.mp3?alt=media&token=5022a01d-5ed1-4a86-b143-11275f61c7e8";
  SoundEffect2["FinishRace"] = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FFinish%20the%20race.mp3?alt=media&token=e184478e-8e16-4aa4-87d8-a46aff76f735";
  SoundEffect2["Countdown"] = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FCountdown.wav?alt=media&token=0352b662-7696-4612-a1ce-ebcfb7ee1b07";
  SoundEffect2["StopOrResetGame"] = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FStop_Reset_game.mp3?alt=media&token=e61a330f-8bc1-42ce-85d1-9994017a6533";
  SoundEffect2["RoseRacewayWaiting"] = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FRose%20Raceway_waiting_new.mp3?alt=media&token=674e620d-f869-4725-9f76-42a5ce81c238";
  SoundEffect2["RoseRacewayGame"] = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FRose%20Raceway_game_new.mp3?alt=media&token=7ac231cb-8dd2-46b0-82e0-2d74b5472083";
  SoundEffect2["BeachWaiting"] = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FBeach_waiting_new.mp3?alt=media&token=78e16191-b2bf-4017-ac34-758be26390f0";
  SoundEffect2["BeachGame"] = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FBeach_game_new.mp3?alt=media&token=7b8bc128-f9cb-4479-a605-a38c59ef0f32";
  SoundEffect2["CastleWaiting"] = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FCastle_waiting_new.mp3?alt=media&token=b4531367-64a2-4d59-865b-218a83b6e556";
  SoundEffect2["CastleGame"] = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FCastle_game_new.mp3?alt=media&token=994da0b6-8b40-404c-a667-f4618202359f";
  return SoundEffect2;
})(SoundEffect || {});
const GRAND_PRIX_MAP_SFX = {
  ["rose-raceway" /* Original */]: {
    ["waitingForPlayers" /* WAITING_FOR_PLAYERS */]: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FRose%20Raceway_waiting_new.mp3?alt=media&token=674e620d-f869-4725-9f76-42a5ce81c238" /* RoseRacewayWaiting */,
    ["playing" /* PLAYING */]: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FRose%20Raceway_game_new.mp3?alt=media&token=7ac231cb-8dd2-46b0-82e0-2d74b5472083" /* RoseRacewayGame */,
    ["done" /* DONE */]: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FRose%20Raceway_game_new.mp3?alt=media&token=7ac231cb-8dd2-46b0-82e0-2d74b5472083" /* RoseRacewayGame */
  },
  ["seaside-speedway" /* Seaside */]: {
    ["waitingForPlayers" /* WAITING_FOR_PLAYERS */]: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FBeach_waiting_new.mp3?alt=media&token=78e16191-b2bf-4017-ac34-758be26390f0" /* BeachWaiting */,
    ["playing" /* PLAYING */]: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FBeach_game_new.mp3?alt=media&token=7b8bc128-f9cb-4479-a605-a38c59ef0f32" /* BeachGame */,
    ["done" /* DONE */]: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FBeach_game_new.mp3?alt=media&token=7b8bc128-f9cb-4479-a605-a38c59ef0f32" /* BeachGame */
  },
  ["dark-castle-dragway" /* Castle */]: {
    ["waitingForPlayers" /* WAITING_FOR_PLAYERS */]: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FCastle_waiting_new.mp3?alt=media&token=b4531367-64a2-4d59-865b-218a83b6e556" /* CastleWaiting */,
    ["playing" /* PLAYING */]: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FCastle_game_new.mp3?alt=media&token=994da0b6-8b40-404c-a667-f4618202359f" /* CastleGame */,
    ["done" /* DONE */]: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FCastle_game_new.mp3?alt=media&token=994da0b6-8b40-404c-a667-f4618202359f" /* CastleGame */
  }
};
const getUpdatedGrandPrixLeaderboardsData = (players, mapId, grandPrixLeaderboards, additionalPlayerInfo) => {
  const leaderboardData = [...(grandPrixLeaderboards == null ? void 0 : grandPrixLeaderboards[mapId]) ?? []];
  const date = new Date().toISOString();
  const playerDataList = players.filter((player) => !player.isSpectator).map(({ playerId, finishedTime }) => {
    var _a, _b;
    return {
      playerId,
      playerName: (_a = additionalPlayerInfo == null ? void 0 : additionalPlayerInfo[playerId]) == null ? void 0 : _a.name,
      playerWearables: (_b = additionalPlayerInfo == null ? void 0 : additionalPlayerInfo[playerId]) == null ? void 0 : _b.currentlyEquippedWearables,
      finishedTime,
      date
    };
  });
  leaderboardData.push(...playerDataList);
  leaderboardData.sort((a, b) => a.finishedTime - b.finishedTime);
  return {
    ...grandPrixLeaderboards,
    [mapId]: leaderboardData.slice(0, 10)
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AUDIENCE_COORDS,
  BACKGROUND_MUSIC_VOLUME,
  CROWN_IMG,
  DOOR_AREA_COORDS,
  FINISHED_PLACE_COLOR,
  GRAND_PRIX_CHECKPOINT,
  GRAND_PRIX_MAPS,
  GRAND_PRIX_MAP_SFX,
  GRAND_PRIX_NUM_LANES,
  GRAND_PRIX_PORTAL,
  GRAND_PRIX_START_POS,
  GRAND_PRIX_TEMPLATE_PORTALS,
  GrandPrixClientEvents,
  GrandPrixGamePhase,
  GrandPrixMaps,
  GrandPrixMapsInfo,
  GrandPrixServerEvents,
  NUM_LAPS,
  PODIUM_COORDS,
  SOUND_EFFECT_VOLUME,
  SoundEffect,
  getUpdatedGrandPrixLeaderboardsData,
  randomIntFromInterval
});
//# sourceMappingURL=RemoteWorkGrandPrix.js.map
