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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var remoteWork_exports = {};
__export(remoteWork_exports, {
  ActivityTimeFilterOptions: () => import_RemoteWorkRoomOfRequirements.ActivityTimeFilterOptions,
  DEFAULT_QUESTION_VALUE: () => import_RemoteWorkTrivia.DEFAULT_QUESTION_VALUE,
  HIP_TO_BE_SQUARE_MAP: () => import_RemoteWorkRoomOfRequirements.HIP_TO_BE_SQUARE_MAP,
  ParticipantFilterOptions: () => import_RemoteWorkRoomOfRequirements.ParticipantFilterOptions,
  QUESTION_PACKS_INFO: () => import_RemoteWorkTrivia.QUESTION_PACKS_INFO,
  ROOM_CONTROLLER_OBJECT_ID: () => import_RemoteWorkRoomOfRequirements.ROOM_CONTROLLER_OBJECT_ID,
  ROOM_DOOR_OBJECT_ID: () => import_RemoteWorkRoomOfRequirements.ROOM_DOOR_OBJECT_ID,
  ROOM_OF_REQUIREMENTS_EXTENSION: () => import_RemoteWorkRoomOfRequirements.ROOM_OF_REQUIREMENTS_EXTENSION,
  SocialRoom: () => import_RemoteWorkRoomOfRequirements.SocialRoom,
  SocialRoomInfo: () => import_RemoteWorkRoomOfRequirements.SocialRoomInfo,
  SocialRoomSize: () => import_RemoteWorkRoomOfRequirements.SocialRoomSize,
  TRIVIA_COLORS: () => import_RemoteWorkTrivia.TRIVIA_COLORS,
  TRIVIA_MAP_ID: () => import_RemoteWorkTrivia.TRIVIA_MAP_ID,
  TriviaGamePhase: () => import_RemoteWorkTrivia.TriviaGamePhase,
  isRoRActive: () => import_RemoteWorkRoomOfRequirements.isRoRActive,
  isRorObject: () => import_RemoteWorkRoomOfRequirements.isRorObject,
  isRorStandaloneObject: () => import_RemoteWorkRoomOfRequirements.isRorStandaloneObject,
  targetMaps: () => import_RemoteWorkRoomOfRequirements.targetMaps
});
module.exports = __toCommonJS(remoteWork_exports);
var import_RemoteWorkRoomOfRequirements = require("../sharedConstsForExperiments/RemoteWorkRoomOfRequirements");
var import_RemoteWorkTrivia = require("../sharedConstsForExperiments/RemoteWorkTrivia");
__reExport(remoteWork_exports, require("../sharedConstsForExperiments/RemoteWorkGardenTown"), module.exports);
__reExport(remoteWork_exports, require("../sharedConstsForExperiments/RemoteWorkFishing"), module.exports);
__reExport(remoteWork_exports, require("../sharedConstsForExperiments/RemoteWorkBoardGames"), module.exports);
__reExport(remoteWork_exports, require("../sharedConstsForExperiments/RemoteWorkGrandPrix"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ActivityTimeFilterOptions,
  DEFAULT_QUESTION_VALUE,
  HIP_TO_BE_SQUARE_MAP,
  ParticipantFilterOptions,
  QUESTION_PACKS_INFO,
  ROOM_CONTROLLER_OBJECT_ID,
  ROOM_DOOR_OBJECT_ID,
  ROOM_OF_REQUIREMENTS_EXTENSION,
  SocialRoom,
  SocialRoomInfo,
  SocialRoomSize,
  TRIVIA_COLORS,
  TRIVIA_MAP_ID,
  TriviaGamePhase,
  isRoRActive,
  isRorObject,
  isRorStandaloneObject,
  targetMaps
});
//# sourceMappingURL=remoteWork.js.map
