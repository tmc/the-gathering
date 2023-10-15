"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var events_exports = {};
__export(events_exports, {
  AccessRequest: () => AccessRequest,
  AccessRequestRespondedTo: () => AccessRequestRespondedTo,
  AccessRequestsUpdated: () => AccessRequestsUpdated,
  ActivelySpeaking: () => ActivelySpeaking,
  AddInventoryItem: () => AddInventoryItem,
  AllowedUsers: () => AllowedUsers,
  Announcer: () => Announcer,
  AreaPosition: () => AreaPosition,
  Asset: () => Asset,
  BackedUpDeskObject: () => BackedUpDeskObject,
  Ban: () => Ban,
  Block: () => Block,
  Chat: () => Chat,
  ChatMessageUpdated: () => ChatMessageUpdated,
  ChatReply: () => ChatReply,
  ChimeSetsUserInfo: () => ChimeSetsUserInfo,
  ClientBackupHeartbeat: () => ClientBackupHeartbeat,
  ClientHeartbeat: () => ClientHeartbeat,
  ClientServerAction: () => ClientServerAction,
  ClientServerBatch: () => ClientServerBatch,
  CookieFound: () => CookieFound,
  Craft: () => Craft,
  Craft_InputsEntry: () => Craft_InputsEntry,
  CustomAction: () => CustomAction,
  CustomEvent: () => CustomEvent,
  DBDesk: () => DBDesk,
  DBOutfit: () => DBOutfit,
  Deprecated: () => Deprecated,
  DeskInfoV2: () => DeskInfoV2,
  DeskObjects: () => DeskObjects,
  DeskObjects_ObjectsEntry: () => DeskObjects_ObjectsEntry,
  DynamicGate: () => DynamicGate,
  DynamicGates: () => DynamicGates,
  Enter: () => Enter,
  EnterPortal: () => EnterPortal,
  EnterWhisper: () => EnterWhisper,
  ErrorEvent: () => ErrorEvent,
  Exit: () => Exit,
  FXShakeCamera: () => FXShakeCamera,
  FXShakeObject: () => FXShakeObject,
  Ghost: () => Ghost,
  GotRequestMute: () => GotRequestMute,
  HighFive: () => HighFive,
  HipToBeSquare: () => HipToBeSquare,
  Info: () => Info,
  Init: () => Init,
  InteractWithObject: () => InteractWithObject,
  InteractionEnum: () => InteractionEnum,
  InteractionEnum_ENUM: () => InteractionEnum_ENUM,
  Inventory: () => Inventory,
  InventoryItem: () => InventoryItem,
  Inventory_ItemsEntry: () => Inventory_ItemsEntry,
  Inventory_OrderEntry: () => Inventory_OrderEntry,
  ItemAbility: () => ItemAbility,
  JoinChimeMeeting: () => JoinChimeMeeting,
  Kick: () => Kick,
  LeaveWhisper: () => LeaveWhisper,
  MapAddObject: () => MapAddObject,
  MapAndDesk: () => MapAndDesk,
  MapCommitsChanges: () => MapCommitsChanges,
  MapDeleteObjectById: () => MapDeleteObjectById,
  MapDeleteObjectByKey: () => MapDeleteObjectByKey,
  MapLocation: () => MapLocation,
  MapMoveObject: () => MapMoveObject,
  MapSetAnnouncer: () => MapSetAnnouncer,
  MapSetAreas: () => MapSetAreas,
  MapSetAreas_AreasEntry: () => MapSetAreas_AreasEntry,
  MapSetAssets: () => MapSetAssets,
  MapSetBackgroundImagePath: () => MapSetBackgroundImagePath,
  MapSetCollisions: () => MapSetCollisions,
  MapSetCollisionsBits: () => MapSetCollisionsBits,
  MapSetDecoration: () => MapSetDecoration,
  MapSetDescription: () => MapSetDescription,
  MapSetDimensions: () => MapSetDimensions,
  MapSetEnabledChats: () => MapSetEnabledChats,
  MapSetFloors: () => MapSetFloors,
  MapSetFloors_FloorsEntry: () => MapSetFloors_FloorsEntry,
  MapSetForegroundImagePath: () => MapSetForegroundImagePath,
  MapSetMiniMapImagePath: () => MapSetMiniMapImagePath,
  MapSetMuteOnEntry: () => MapSetMuteOnEntry,
  MapSetName: () => MapSetName,
  MapSetNooks: () => MapSetNooks,
  MapSetNooks_NooksEntry: () => MapSetNooks_NooksEntry,
  MapSetObjectsV2: () => MapSetObjectsV2,
  MapSetObjectsV2_ObjectsEntry: () => MapSetObjectsV2_ObjectsEntry,
  MapSetPortals: () => MapSetPortals,
  MapSetScript: () => MapSetScript,
  MapSetSpawn: () => MapSetSpawn,
  MapSetSpawns: () => MapSetSpawns,
  MapSetTutorialTasks: () => MapSetTutorialTasks,
  MapSetUseDrawnBG: () => MapSetUseDrawnBG,
  MapSetWalls: () => MapSetWalls,
  MapSetWalls_WallsEntry: () => MapSetWalls_WallsEntry,
  MapUpdateObjects: () => MapUpdateObjects,
  MapUpdateObjects_ObjectsEntry: () => MapUpdateObjects_ObjectsEntry,
  Move: () => Move,
  MoveDirectionEnum: () => MoveDirectionEnum,
  MoveDirectionEnum_ENUM: () => MoveDirectionEnum_ENUM,
  NookCoords: () => NookCoords,
  NookDiff: () => NookDiff,
  Notify: () => Notify,
  ObjectTime: () => ObjectTime,
  PlaySound: () => PlaySound,
  PlayerActivelySpeaks: () => PlayerActivelySpeaks,
  PlayerBlocks: () => PlayerBlocks,
  PlayerChats: () => PlayerChats,
  PlayerCrafts: () => PlayerCrafts,
  PlayerCrafts_InputsEntry: () => PlayerCrafts_InputsEntry,
  PlayerEditsChatMessage: () => PlayerEditsChatMessage,
  PlayerEntersPortal: () => PlayerEntersPortal,
  PlayerEntersWhisper: () => PlayerEntersWhisper,
  PlayerEntersWhisperV2: () => PlayerEntersWhisperV2,
  PlayerExits: () => PlayerExits,
  PlayerGhosts: () => PlayerGhosts,
  PlayerGuestPassStatus: () => PlayerGuestPassStatus,
  PlayerHighFives: () => PlayerHighFives,
  PlayerInitInfo: () => PlayerInitInfo,
  PlayerInteractsWithObject: () => PlayerInteractsWithObject,
  PlayerJoins: () => PlayerJoins,
  PlayerLeavesWhisper: () => PlayerLeavesWhisper,
  PlayerMoves: () => PlayerMoves,
  PlayerNotifies: () => PlayerNotifies,
  PlayerRequestsToLead: () => PlayerRequestsToLead,
  PlayerRings: () => PlayerRings,
  PlayerSendsCommand: () => PlayerSendsCommand,
  PlayerSetsAffiliation: () => PlayerSetsAffiliation,
  PlayerSetsAllowScreenPointer: () => PlayerSetsAllowScreenPointer,
  PlayerSetsAvailability: () => PlayerSetsAvailability,
  PlayerSetsAway: () => PlayerSetsAway,
  PlayerSetsCity: () => PlayerSetsCity,
  PlayerSetsCountry: () => PlayerSetsCountry,
  PlayerSetsCurrentArea: () => PlayerSetsCurrentArea,
  PlayerSetsCurrentlyEquippedWearables: () => PlayerSetsCurrentlyEquippedWearables,
  PlayerSetsDescription: () => PlayerSetsDescription,
  PlayerSetsDeskInfo: () => PlayerSetsDeskInfo,
  PlayerSetsDisplayEmail: () => PlayerSetsDisplayEmail,
  PlayerSetsEmojiStatus: () => PlayerSetsEmojiStatus,
  PlayerSetsEmoteV2: () => PlayerSetsEmoteV2,
  PlayerSetsEventStatus: () => PlayerSetsEventStatus,
  PlayerSetsFocusModeEndTime: () => PlayerSetsFocusModeEndTime,
  PlayerSetsFollowTarget: () => PlayerSetsFollowTarget,
  PlayerSetsGoKartId: () => PlayerSetsGoKartId,
  PlayerSetsImagePointer: () => PlayerSetsImagePointer,
  PlayerSetsInConversation: () => PlayerSetsInConversation,
  PlayerSetsIsAlone: () => PlayerSetsIsAlone,
  PlayerSetsIsMobile: () => PlayerSetsIsMobile,
  PlayerSetsIsNpc: () => PlayerSetsIsNpc,
  PlayerSetsIsSignedIn: () => PlayerSetsIsSignedIn,
  PlayerSetsItemString: () => PlayerSetsItemString,
  PlayerSetsLastActive: () => PlayerSetsLastActive,
  PlayerSetsLastRaisedHand: () => PlayerSetsLastRaisedHand,
  PlayerSetsManualVideoSrc: () => PlayerSetsManualVideoSrc,
  PlayerSetsName: () => PlayerSetsName,
  PlayerSetsPersonalImageUrl: () => PlayerSetsPersonalImageUrl,
  PlayerSetsPhone: () => PlayerSetsPhone,
  PlayerSetsProfileImageUrl: () => PlayerSetsProfileImageUrl,
  PlayerSetsPronouns: () => PlayerSetsPronouns,
  PlayerSetsSpeedModifier: () => PlayerSetsSpeedModifier,
  PlayerSetsStartDate: () => PlayerSetsStartDate,
  PlayerSetsStatus: () => PlayerSetsStatus,
  PlayerSetsSubtitle: () => PlayerSetsSubtitle,
  PlayerSetsTextStatus: () => PlayerSetsTextStatus,
  PlayerSetsTimezone: () => PlayerSetsTimezone,
  PlayerSetsTitle: () => PlayerSetsTitle,
  PlayerSetsVehicleId: () => PlayerSetsVehicleId,
  PlayerShootsConfetti: () => PlayerShootsConfetti,
  PlayerSpotlights: () => PlayerSpotlights,
  PlayerStartsRecording: () => PlayerStartsRecording,
  PlayerTriggersInventoryItem: () => PlayerTriggersInventoryItem,
  PlayerTriggersObject: () => PlayerTriggersObject,
  PlayerUpdatesFocusModeStatus: () => PlayerUpdatesFocusModeStatus,
  PlayerUpdatesInventory: () => PlayerUpdatesInventory,
  PlayerUpdatesInventory_ItemsEntry: () => PlayerUpdatesInventory_ItemsEntry,
  PlayerUpdatesInventory_OrderEntry: () => PlayerUpdatesInventory_OrderEntry,
  PlayerWaves: () => PlayerWaves,
  Portal: () => Portal,
  PrecomputeEnter: () => PrecomputeEnter,
  PrecomputedEnterLocation: () => PrecomputedEnterLocation,
  Ready: () => Ready,
  RecordingInfo: () => RecordingInfo,
  RegisterCommand: () => RegisterCommand,
  RemoveInventoryItem: () => RemoveInventoryItem,
  RequestAccessViaCheckIn: () => RequestAccessViaCheckIn,
  RequestMute: () => RequestMute,
  RequestToJoinNook: () => RequestToJoinNook,
  RequestToLead: () => RequestToLead,
  RequestUser: () => RequestUser,
  RequestedUsers: () => RequestedUsers,
  RequestedUsers_UsersEntry: () => RequestedUsers_UsersEntry,
  Respawn: () => Respawn,
  RespawnAtDesk: () => RespawnAtDesk,
  RespondToAccessRequest: () => RespondToAccessRequest,
  RespondToAccessRequest_LocationTypeEnum: () => RespondToAccessRequest_LocationTypeEnum,
  Ring: () => Ring,
  SendCommand: () => SendCommand,
  ServerClientBatch: () => ServerClientBatch,
  ServerClientEvent: () => ServerClientEvent,
  ServerHeartbeat: () => ServerHeartbeat,
  SetAffiliation: () => SetAffiliation,
  SetAllowScreenPointer: () => SetAllowScreenPointer,
  SetAvailability: () => SetAvailability,
  SetAway: () => SetAway,
  SetCity: () => SetCity,
  SetCountry: () => SetCountry,
  SetCurrentArea: () => SetCurrentArea,
  SetCurrentlyEquippedWearables: () => SetCurrentlyEquippedWearables,
  SetDescription: () => SetDescription,
  SetDeskFromNextAvailableDesk: () => SetDeskFromNextAvailableDesk,
  SetDeskInfo: () => SetDeskInfo,
  SetDisplayEmail: () => SetDisplayEmail,
  SetEmojiStatus: () => SetEmojiStatus,
  SetEmoteV2: () => SetEmoteV2,
  SetEventStatus: () => SetEventStatus,
  SetFocusModeEndTime: () => SetFocusModeEndTime,
  SetFollowTarget: () => SetFollowTarget,
  SetImagePointer: () => SetImagePointer,
  SetImpassable: () => SetImpassable,
  SetInConversation: () => SetInConversation,
  SetIsAlone: () => SetIsAlone,
  SetIsMobile: () => SetIsMobile,
  SetItemString: () => SetItemString,
  SetManualVideoSrc: () => SetManualVideoSrc,
  SetName: () => SetName,
  SetPersonalImageUrl: () => SetPersonalImageUrl,
  SetPhone: () => SetPhone,
  SetProfileImageUrl: () => SetProfileImageUrl,
  SetPronouns: () => SetPronouns,
  SetScreenPointer: () => SetScreenPointer,
  SetScreenPointerServer: () => SetScreenPointerServer,
  SetSpaceRolePermissionOverride: () => SetSpaceRolePermissionOverride,
  SetSpeedModifier: () => SetSpeedModifier,
  SetStartDate: () => SetStartDate,
  SetStatus: () => SetStatus,
  SetSubtitle: () => SetSubtitle,
  SetTextStatus: () => SetTextStatus,
  SetTimezone: () => SetTimezone,
  SetTitle: () => SetTitle,
  SetVehicleId: () => SetVehicleId,
  ShootConfetti: () => ShootConfetti,
  Sound: () => Sound,
  Space: () => Space,
  SpaceIsClosed: () => SpaceIsClosed,
  SpaceItem: () => SpaceItem,
  SpaceItem_AbilitiesEntry: () => SpaceItem_AbilitiesEntry,
  SpaceItem_MetaEntry: () => SpaceItem_MetaEntry,
  SpaceMemberInfo: () => SpaceMemberInfo,
  SpaceMemberInfo_RolesEntry: () => SpaceMemberInfo_RolesEntry,
  SpaceOverCapacityDeniesUser: () => SpaceOverCapacityDeniesUser,
  SpaceOverwrites: () => SpaceOverwrites,
  SpacePlaysSound: () => SpacePlaysSound,
  SpaceRegistersCommand: () => SpaceRegistersCommand,
  SpaceRolePermissionOverrideUpdated: () => SpaceRolePermissionOverrideUpdated,
  SpaceSetsCapacity: () => SpaceSetsCapacity,
  SpaceSetsGuestPassStatuses: () => SpaceSetsGuestPassStatuses,
  SpaceSetsIdMapping: () => SpaceSetsIdMapping,
  SpaceSetsSpaceMembers: () => SpaceSetsSpaceMembers,
  SpaceSetsSpaceMembers_MembersEntry: () => SpaceSetsSpaceMembers_MembersEntry,
  SpaceSetsSpaceUsers: () => SpaceSetsSpaceUsers,
  SpaceSetsSpaceUsers_SpaceUsersEntry: () => SpaceSetsSpaceUsers_SpaceUsersEntry,
  SpaceStopsSound: () => SpaceStopsSound,
  SpaceUpdatesItems: () => SpaceUpdatesItems,
  SpaceUpdatesItems_ItemsEntry: () => SpaceUpdatesItems_ItemsEntry,
  Spawn: () => Spawn,
  SpawnPoint: () => SpawnPoint,
  SpeakerUpdatesSession: () => SpeakerUpdatesSession,
  Spotlight: () => Spotlight,
  SpriteDirectionEnum: () => SpriteDirectionEnum,
  SpriteDirectionEnum_ENUM: () => SpriteDirectionEnum_ENUM,
  StartRecording: () => StartRecording,
  StopSound: () => StopSound,
  SubscriptionsUpdated: () => SubscriptionsUpdated,
  Teleport: () => Teleport,
  Timestamp: () => Timestamp,
  TransactionStatus: () => TransactionStatus,
  TriggerInventoryItem: () => TriggerInventoryItem,
  TriggerObject: () => TriggerObject,
  TutorialTaskMapArea: () => TutorialTaskMapArea,
  UpdateNookPermission: () => UpdateNookPermission,
  UpdateSubscriptions: () => UpdateSubscriptions,
  UpdateSubscriptions_MapUpdateIdsEntry: () => UpdateSubscriptions_MapUpdateIdsEntry,
  UpdateSubscriptions_SubscriptionsEntry: () => UpdateSubscriptions_SubscriptionsEntry,
  Warn: () => Warn,
  Wave: () => Wave,
  WireArea: () => WireArea,
  WireObject: () => WireObject,
  WireObjectSpriteAnimConfig: () => WireObjectSpriteAnimConfig,
  WireObjectSpritesheet: () => WireObjectSpritesheet,
  WireObjectSpritesheetFraming: () => WireObjectSpritesheetFraming,
  WireObjectSpritesheet_AnimationsEntry: () => WireObjectSpritesheet_AnimationsEntry,
  WirePoint: () => WirePoint,
  WireSpaceUser: () => WireSpaceUser,
  WireTutorialTasks: () => WireTutorialTasks,
  protobufPackage: () => protobufPackage,
  protobufWriterLibrary: () => protobufWriterLibrary
});
module.exports = __toCommonJS(events_exports);
var import_long = __toESM(require("long"));
var import_minimal = __toESM(require("protobufjs/minimal"));
const protobufPackage = "";
var SpriteDirectionEnum_ENUM = /* @__PURE__ */ ((SpriteDirectionEnum_ENUM2) => {
  SpriteDirectionEnum_ENUM2[SpriteDirectionEnum_ENUM2["Stand"] = 0] = "Stand";
  SpriteDirectionEnum_ENUM2[SpriteDirectionEnum_ENUM2["Down"] = 1] = "Down";
  SpriteDirectionEnum_ENUM2[SpriteDirectionEnum_ENUM2["DownAlt"] = 2] = "DownAlt";
  SpriteDirectionEnum_ENUM2[SpriteDirectionEnum_ENUM2["Up"] = 3] = "Up";
  SpriteDirectionEnum_ENUM2[SpriteDirectionEnum_ENUM2["UpAlt"] = 4] = "UpAlt";
  SpriteDirectionEnum_ENUM2[SpriteDirectionEnum_ENUM2["Left"] = 5] = "Left";
  SpriteDirectionEnum_ENUM2[SpriteDirectionEnum_ENUM2["LeftAlt"] = 6] = "LeftAlt";
  SpriteDirectionEnum_ENUM2[SpriteDirectionEnum_ENUM2["Right"] = 7] = "Right";
  SpriteDirectionEnum_ENUM2[SpriteDirectionEnum_ENUM2["RightAlt"] = 8] = "RightAlt";
  SpriteDirectionEnum_ENUM2[SpriteDirectionEnum_ENUM2["Dance1"] = 9] = "Dance1";
  SpriteDirectionEnum_ENUM2[SpriteDirectionEnum_ENUM2["Dance2"] = 10] = "Dance2";
  SpriteDirectionEnum_ENUM2[SpriteDirectionEnum_ENUM2["Dance3"] = 11] = "Dance3";
  SpriteDirectionEnum_ENUM2[SpriteDirectionEnum_ENUM2["Dance4"] = 12] = "Dance4";
  return SpriteDirectionEnum_ENUM2;
})(SpriteDirectionEnum_ENUM || {});
var MoveDirectionEnum_ENUM = /* @__PURE__ */ ((MoveDirectionEnum_ENUM2) => {
  MoveDirectionEnum_ENUM2[MoveDirectionEnum_ENUM2["Left"] = 0] = "Left";
  MoveDirectionEnum_ENUM2[MoveDirectionEnum_ENUM2["Right"] = 1] = "Right";
  MoveDirectionEnum_ENUM2[MoveDirectionEnum_ENUM2["Up"] = 2] = "Up";
  MoveDirectionEnum_ENUM2[MoveDirectionEnum_ENUM2["Down"] = 3] = "Down";
  MoveDirectionEnum_ENUM2[MoveDirectionEnum_ENUM2["Dance"] = 4] = "Dance";
  return MoveDirectionEnum_ENUM2;
})(MoveDirectionEnum_ENUM || {});
var InteractionEnum_ENUM = /* @__PURE__ */ ((InteractionEnum_ENUM2) => {
  InteractionEnum_ENUM2[InteractionEnum_ENUM2["NONE"] = 0] = "NONE";
  InteractionEnum_ENUM2[InteractionEnum_ENUM2["EMBEDDED_WEBSITE"] = 1] = "EMBEDDED_WEBSITE";
  InteractionEnum_ENUM2[InteractionEnum_ENUM2["POSTER"] = 2] = "POSTER";
  InteractionEnum_ENUM2[InteractionEnum_ENUM2["VIDEO"] = 3] = "VIDEO";
  InteractionEnum_ENUM2[InteractionEnum_ENUM2["EXTERNAL_CALL"] = 4] = "EXTERNAL_CALL";
  InteractionEnum_ENUM2[InteractionEnum_ENUM2["EXTENSION"] = 5] = "EXTENSION";
  InteractionEnum_ENUM2[InteractionEnum_ENUM2["NOTE"] = 6] = "NOTE";
  InteractionEnum_ENUM2[InteractionEnum_ENUM2["MODAL_EXTENSION"] = 7] = "MODAL_EXTENSION";
  InteractionEnum_ENUM2[InteractionEnum_ENUM2["COMPONENT_MODAL"] = 8] = "COMPONENT_MODAL";
  InteractionEnum_ENUM2[InteractionEnum_ENUM2["SIDE_PANEL_TRIGGER"] = 9] = "SIDE_PANEL_TRIGGER";
  return InteractionEnum_ENUM2;
})(InteractionEnum_ENUM || {});
var RespondToAccessRequest_LocationTypeEnum = /* @__PURE__ */ ((RespondToAccessRequest_LocationTypeEnum2) => {
  RespondToAccessRequest_LocationTypeEnum2[RespondToAccessRequest_LocationTypeEnum2["MyLocation"] = 0] = "MyLocation";
  RespondToAccessRequest_LocationTypeEnum2[RespondToAccessRequest_LocationTypeEnum2["DefaultSpawn"] = 1] = "DefaultSpawn";
  return RespondToAccessRequest_LocationTypeEnum2;
})(RespondToAccessRequest_LocationTypeEnum || {});
function createBaseDeprecated() {
  return {};
}
const Deprecated = {
  encode(_, writer = import_minimal.default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeprecated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpriteDirectionEnum() {
  return {};
}
const SpriteDirectionEnum = {
  encode(_, writer = import_minimal.default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpriteDirectionEnum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMoveDirectionEnum() {
  return {};
}
const MoveDirectionEnum = {
  encode(_, writer = import_minimal.default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMoveDirectionEnum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseInteractionEnum() {
  return {};
}
const InteractionEnum = {
  encode(_, writer = import_minimal.default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInteractionEnum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerInitInfo() {
  return {};
}
const PlayerInitInfo = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.name !== void 0) {
      writer.uint32(10).string(message.name);
    }
    if (message.x !== void 0) {
      writer.uint32(24).uint32(message.x);
    }
    if (message.y !== void 0) {
      writer.uint32(32).uint32(message.y);
    }
    if (message.map !== void 0) {
      writer.uint32(42).string(message.map);
    }
    if (message.affiliation !== void 0) {
      writer.uint32(50).string(message.affiliation);
    }
    if (message.busy !== void 0) {
      writer.uint32(56).bool(message.busy);
    }
    if (message.textStatus !== void 0) {
      writer.uint32(66).string(message.textStatus);
    }
    if (message.emojiStatus !== void 0) {
      writer.uint32(74).string(message.emojiStatus);
    }
    if (message.currentlyEquippedWearables !== void 0) {
      DBOutfit.encode(message.currentlyEquippedWearables, writer.uint32(82).fork()).ldelim();
    }
    if (message.focusModeEndTime !== void 0) {
      writer.uint32(90).string(message.focusModeEndTime);
    }
    if (message.itemString !== void 0) {
      writer.uint32(114).string(message.itemString);
    }
    if (message.isNpc !== void 0) {
      writer.uint32(120).bool(message.isNpc);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerInitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.x = reader.uint32();
          break;
        case 4:
          message.y = reader.uint32();
          break;
        case 5:
          message.map = reader.string();
          break;
        case 6:
          message.affiliation = reader.string();
          break;
        case 7:
          message.busy = reader.bool();
          break;
        case 8:
          message.textStatus = reader.string();
          break;
        case 9:
          message.emojiStatus = reader.string();
          break;
        case 10:
          message.currentlyEquippedWearables = DBOutfit.decode(reader, reader.uint32());
          break;
        case 11:
          message.focusModeEndTime = reader.string();
          break;
        case 14:
          message.itemString = reader.string();
          break;
        case 15:
          message.isNpc = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseDBOutfit() {
  return { skin: "", hair: "", facial_hair: "", top: "", bottom: "", shoes: "", hat: "", glasses: "", other: "" };
}
const DBOutfit = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.skin !== "") {
      writer.uint32(10).string(message.skin);
    }
    if (message.hair !== "") {
      writer.uint32(18).string(message.hair);
    }
    if (message.facial_hair !== "") {
      writer.uint32(26).string(message.facial_hair);
    }
    if (message.top !== "") {
      writer.uint32(34).string(message.top);
    }
    if (message.bottom !== "") {
      writer.uint32(42).string(message.bottom);
    }
    if (message.shoes !== "") {
      writer.uint32(50).string(message.shoes);
    }
    if (message.hat !== "") {
      writer.uint32(58).string(message.hat);
    }
    if (message.glasses !== "") {
      writer.uint32(66).string(message.glasses);
    }
    if (message.other !== "") {
      writer.uint32(74).string(message.other);
    }
    if (message.costume !== void 0) {
      writer.uint32(82).string(message.costume);
    }
    if (message.mobility !== void 0) {
      writer.uint32(90).string(message.mobility);
    }
    if (message.jacket !== void 0) {
      writer.uint32(98).string(message.jacket);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDBOutfit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skin = reader.string();
          break;
        case 2:
          message.hair = reader.string();
          break;
        case 3:
          message.facial_hair = reader.string();
          break;
        case 4:
          message.top = reader.string();
          break;
        case 5:
          message.bottom = reader.string();
          break;
        case 6:
          message.shoes = reader.string();
          break;
        case 7:
          message.hat = reader.string();
          break;
        case 8:
          message.glasses = reader.string();
          break;
        case 9:
          message.other = reader.string();
          break;
        case 10:
          message.costume = reader.string();
          break;
        case 11:
          message.mobility = reader.string();
          break;
        case 12:
          message.jacket = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseWireObjectSpritesheetFraming() {
  return { frameWidth: 0, frameHeight: 0 };
}
const WireObjectSpritesheetFraming = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.frameWidth !== 0) {
      writer.uint32(8).int32(message.frameWidth);
    }
    if (message.frameHeight !== 0) {
      writer.uint32(16).int32(message.frameHeight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseWireObjectSpritesheetFraming();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.frameWidth = reader.int32();
          break;
        case 2:
          message.frameHeight = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseWireObjectSpriteAnimConfig() {
  return { sequence: [], frameRate: 0 };
}
const WireObjectSpriteAnimConfig = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.useSequenceAsRange !== void 0) {
      writer.uint32(8).bool(message.useSequenceAsRange);
    }
    writer.uint32(18).fork();
    for (const v of message.sequence) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.loop !== void 0) {
      writer.uint32(24).bool(message.loop);
    }
    if (message.frameRate !== 0) {
      writer.uint32(32).uint32(message.frameRate);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseWireObjectSpriteAnimConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.useSequenceAsRange = reader.bool();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequence.push(reader.uint32());
            }
          } else {
            message.sequence.push(reader.uint32());
          }
          break;
        case 3:
          message.loop = reader.bool();
          break;
        case 4:
          message.frameRate = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseWireObjectSpritesheet() {
  return { spritesheetUrl: "", framing: void 0, animations: {} };
}
const WireObjectSpritesheet = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.spritesheetUrl !== "") {
      writer.uint32(10).string(message.spritesheetUrl);
    }
    if (message.framing !== void 0) {
      WireObjectSpritesheetFraming.encode(message.framing, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.animations).forEach(([key, value]) => {
      WireObjectSpritesheet_AnimationsEntry.encode({ key, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.currentAnim !== void 0) {
      writer.uint32(34).string(message.currentAnim);
    }
    if (message.pauseAnimationsIfFpsBelowFramerate !== void 0) {
      writer.uint32(40).bool(message.pauseAnimationsIfFpsBelowFramerate);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseWireObjectSpritesheet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spritesheetUrl = reader.string();
          break;
        case 2:
          message.framing = WireObjectSpritesheetFraming.decode(reader, reader.uint32());
          break;
        case 3:
          const entry3 = WireObjectSpritesheet_AnimationsEntry.decode(reader, reader.uint32());
          if (entry3.value !== void 0) {
            message.animations[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.currentAnim = reader.string();
          break;
        case 5:
          message.pauseAnimationsIfFpsBelowFramerate = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseWireObjectSpritesheet_AnimationsEntry() {
  return { key: "", value: void 0 };
}
const WireObjectSpritesheet_AnimationsEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      WireObjectSpriteAnimConfig.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseWireObjectSpritesheet_AnimationsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = WireObjectSpriteAnimConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseWireObject() {
  return { _tags: [] };
}
const WireObject = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.templateId !== void 0) {
      writer.uint32(10).string(message.templateId);
    }
    if (message._name !== void 0) {
      writer.uint32(18).string(message._name);
    }
    for (const v of message._tags) {
      writer.uint32(26).string(v);
    }
    if (message.x !== void 0) {
      writer.uint32(32).uint32(message.x);
    }
    if (message.y !== void 0) {
      writer.uint32(40).uint32(message.y);
    }
    if (message.offsetX !== void 0) {
      writer.uint32(53).float(message.offsetX);
    }
    if (message.offsetY !== void 0) {
      writer.uint32(61).float(message.offsetY);
    }
    if (message.color !== void 0) {
      writer.uint32(66).string(message.color);
    }
    if (message.orientation !== void 0) {
      writer.uint32(72).uint32(message.orientation);
    }
    if (message.normal !== void 0) {
      writer.uint32(82).string(message.normal);
    }
    if (message.highlighted !== void 0) {
      writer.uint32(90).string(message.highlighted);
    }
    if (message.type !== void 0) {
      writer.uint32(96).int32(message.type);
    }
    if (message.width !== void 0) {
      writer.uint32(104).uint32(message.width);
    }
    if (message.height !== void 0) {
      writer.uint32(112).uint32(message.height);
    }
    if (message.extensionClass !== void 0) {
      writer.uint32(122).string(message.extensionClass);
    }
    if (message.previewMessage !== void 0) {
      writer.uint32(130).string(message.previewMessage);
    }
    if (message.distThreshold !== void 0) {
      writer.uint32(136).uint32(message.distThreshold);
    }
    if (message.propertiesJson !== void 0) {
      writer.uint32(146).string(message.propertiesJson);
    }
    if (message.sound !== void 0) {
      Sound.encode(message.sound, writer.uint32(154).fork()).ldelim();
    }
    if (message.objectStartTime !== void 0) {
      ObjectTime.encode(message.objectStartTime, writer.uint32(162).fork()).ldelim();
    }
    if (message.objectExpireTime !== void 0) {
      ObjectTime.encode(message.objectExpireTime, writer.uint32(170).fork()).ldelim();
    }
    if (message.id !== void 0) {
      writer.uint32(178).string(message.id);
    }
    if (message.customState !== void 0) {
      writer.uint32(186).string(message.customState);
    }
    if (message.objectPlacerId !== void 0) {
      writer.uint32(194).string(message.objectPlacerId);
    }
    if (message.numGoKarts !== void 0) {
      writer.uint32(200).uint32(message.numGoKarts);
    }
    if (message.spritesheet !== void 0) {
      WireObjectSpritesheet.encode(message.spritesheet, writer.uint32(210).fork()).ldelim();
    }
    if (message.zIndex !== void 0) {
      writer.uint32(221).float(message.zIndex);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseWireObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.templateId = reader.string();
          break;
        case 2:
          message._name = reader.string();
          break;
        case 3:
          message._tags.push(reader.string());
          break;
        case 4:
          message.x = reader.uint32();
          break;
        case 5:
          message.y = reader.uint32();
          break;
        case 6:
          message.offsetX = reader.float();
          break;
        case 7:
          message.offsetY = reader.float();
          break;
        case 8:
          message.color = reader.string();
          break;
        case 9:
          message.orientation = reader.uint32();
          break;
        case 10:
          message.normal = reader.string();
          break;
        case 11:
          message.highlighted = reader.string();
          break;
        case 12:
          message.type = reader.int32();
          break;
        case 13:
          message.width = reader.uint32();
          break;
        case 14:
          message.height = reader.uint32();
          break;
        case 15:
          message.extensionClass = reader.string();
          break;
        case 16:
          message.previewMessage = reader.string();
          break;
        case 17:
          message.distThreshold = reader.uint32();
          break;
        case 18:
          message.propertiesJson = reader.string();
          break;
        case 19:
          message.sound = Sound.decode(reader, reader.uint32());
          break;
        case 20:
          message.objectStartTime = ObjectTime.decode(reader, reader.uint32());
          break;
        case 21:
          message.objectExpireTime = ObjectTime.decode(reader, reader.uint32());
          break;
        case 22:
          message.id = reader.string();
          break;
        case 23:
          message.customState = reader.string();
          break;
        case 24:
          message.objectPlacerId = reader.string();
          break;
        case 25:
          message.numGoKarts = reader.uint32();
          break;
        case 26:
          message.spritesheet = WireObjectSpritesheet.decode(reader, reader.uint32());
          break;
        case 27:
          message.zIndex = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceMemberInfo() {
  return { roles: {}, role: "" };
}
const SpaceMemberInfo = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    Object.entries(message.roles).forEach(([key, value]) => {
      SpaceMemberInfo_RolesEntry.encode({ key, value }, writer.uint32(10).fork()).ldelim();
    });
    if (message.name !== void 0) {
      writer.uint32(18).string(message.name);
    }
    if (message.currentlyEquippedWearables !== void 0) {
      DBOutfit.encode(message.currentlyEquippedWearables, writer.uint32(34).fork()).ldelim();
    }
    if (message.allowScreenPointer !== void 0) {
      writer.uint32(48).bool(message.allowScreenPointer);
    }
    if (message.role !== "") {
      writer.uint32(58).string(message.role);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceMemberInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SpaceMemberInfo_RolesEntry.decode(reader, reader.uint32());
          if (entry1.value !== void 0) {
            message.roles[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.name = reader.string();
          break;
        case 4:
          message.currentlyEquippedWearables = DBOutfit.decode(reader, reader.uint32());
          break;
        case 6:
          message.allowScreenPointer = reader.bool();
          break;
        case 7:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceMemberInfo_RolesEntry() {
  return { key: "", value: false };
}
const SpaceMemberInfo_RolesEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceMemberInfo_RolesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseBackedUpDeskObject() {
  return { obj: void 0, offsetX: 0, offsetY: 0 };
}
const BackedUpDeskObject = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.obj !== void 0) {
      WireObject.encode(message.obj, writer.uint32(10).fork()).ldelim();
    }
    if (message.offsetX !== 0) {
      writer.uint32(16).uint32(message.offsetX);
    }
    if (message.offsetY !== 0) {
      writer.uint32(24).uint32(message.offsetY);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBackedUpDeskObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.obj = WireObject.decode(reader, reader.uint32());
          break;
        case 2:
          message.offsetX = reader.uint32();
          break;
        case 3:
          message.offsetY = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseDeskObjects() {
  return { objects: {} };
}
const DeskObjects = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    Object.entries(message.objects).forEach(([key, value]) => {
      DeskObjects_ObjectsEntry.encode({ key, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeskObjects();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = DeskObjects_ObjectsEntry.decode(reader, reader.uint32());
          if (entry1.value !== void 0) {
            message.objects[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseDeskObjects_ObjectsEntry() {
  return { key: "", value: void 0 };
}
const DeskObjects_ObjectsEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      BackedUpDeskObject.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeskObjects_ObjectsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = BackedUpDeskObject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseDeskInfoV2() {
  return {};
}
const DeskInfoV2 = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.deskId !== void 0) {
      writer.uint32(10).string(message.deskId);
    }
    if (message.description !== void 0) {
      writer.uint32(18).string(message.description);
    }
    if (message.locked !== void 0) {
      writer.uint32(24).bool(message.locked);
    }
    if (message.lastDeskObjects !== void 0) {
      DeskObjects.encode(message.lastDeskObjects, writer.uint32(34).fork()).ldelim();
    }
    if (message.mapId !== void 0) {
      writer.uint32(42).string(message.mapId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeskInfoV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deskId = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.locked = reader.bool();
          break;
        case 4:
          message.lastDeskObjects = DeskObjects.decode(reader, reader.uint32());
          break;
        case 5:
          message.mapId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapAndDesk() {
  return { mapId: "", deskId: "" };
}
const MapAndDesk = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.deskId !== "") {
      writer.uint32(18).string(message.deskId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapAndDesk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.deskId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSound() {
  return { src: "", volume: 0, loop: false, maxDistance: 0 };
}
const Sound = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.src !== "") {
      writer.uint32(10).string(message.src);
    }
    if (message.volume !== 0) {
      writer.uint32(21).float(message.volume);
    }
    if (message.loop === true) {
      writer.uint32(24).bool(message.loop);
    }
    if (message.maxDistance !== 0) {
      writer.uint32(32).uint32(message.maxDistance);
    }
    if (message.isPositional !== void 0) {
      writer.uint32(40).bool(message.isPositional);
    }
    if (message.stream !== void 0) {
      writer.uint32(48).bool(message.stream);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.src = reader.string();
          break;
        case 2:
          message.volume = reader.float();
          break;
        case 3:
          message.loop = reader.bool();
          break;
        case 4:
          message.maxDistance = reader.uint32();
          break;
        case 5:
          message.isPositional = reader.bool();
          break;
        case 6:
          message.stream = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseObjectTime() {
  return { _seconds: 0 };
}
const ObjectTime = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message._seconds !== 0) {
      writer.uint32(8).uint32(message._seconds);
    }
    if (message._timezone !== void 0) {
      writer.uint32(18).string(message._timezone);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseObjectTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message._seconds = reader.uint32();
          break;
        case 2:
          message._timezone = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpace() {
  return { spaceId: "", x: 0, y: 0 };
}
const Space = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.spaceId !== "") {
      writer.uint32(10).string(message.spaceId);
    }
    if (message.x !== 0) {
      writer.uint32(16).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).uint32(message.y);
    }
    if (message.colored !== void 0) {
      writer.uint32(32).bool(message.colored);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spaceId = reader.string();
          break;
        case 2:
          message.x = reader.uint32();
          break;
        case 3:
          message.y = reader.uint32();
          break;
        case 4:
          message.colored = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseNookCoords() {
  return { coords: [] };
}
const NookCoords = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    for (const v of message.coords) {
      WirePoint.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNookCoords();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coords.push(WirePoint.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseAllowedUsers() {
  return { users: [] };
}
const AllowedUsers = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    for (const v of message.users) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAllowedUsers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseRequestUser() {
  return {};
}
const RequestUser = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.name !== void 0) {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseRequestedUsers() {
  return { users: {} };
}
const RequestedUsers = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    Object.entries(message.users).forEach(([key, value]) => {
      RequestedUsers_UsersEntry.encode({ key, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestedUsers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = RequestedUsers_UsersEntry.decode(reader, reader.uint32());
          if (entry1.value !== void 0) {
            message.users[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseRequestedUsers_UsersEntry() {
  return { key: "", value: void 0 };
}
const RequestedUsers_UsersEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      RequestUser.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestedUsers_UsersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = RequestUser.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseRecordingInfo() {
  return { active: false };
}
const RecordingInfo = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    if (message.initiatingPlayer !== void 0) {
      writer.uint32(10).string(message.initiatingPlayer);
    }
    if (message.egressId !== void 0) {
      writer.uint32(34).string(message.egressId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRecordingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.active = reader.bool();
          break;
        case 1:
          message.initiatingPlayer = reader.string();
          break;
        case 4:
          message.egressId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseNookDiff() {
  return {};
}
const NookDiff = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.nookCoords !== void 0) {
      NookCoords.encode(message.nookCoords, writer.uint32(10).fork()).ldelim();
    }
    if (message.colored !== void 0) {
      writer.uint32(16).bool(message.colored);
    }
    if (message.name !== void 0) {
      writer.uint32(26).string(message.name);
    }
    if (message.bookable !== void 0) {
      writer.uint32(32).bool(message.bookable);
    }
    if (message.capacity !== void 0) {
      writer.uint32(40).uint32(message.capacity);
    }
    if (message.restricted !== void 0) {
      writer.uint32(48).bool(message.restricted);
    }
    if (message.allowedUsers !== void 0) {
      AllowedUsers.encode(message.allowedUsers, writer.uint32(58).fork()).ldelim();
    }
    if (message.requestedUsers !== void 0) {
      RequestedUsers.encode(message.requestedUsers, writer.uint32(66).fork()).ldelim();
    }
    if (message.isInMeeting !== void 0) {
      writer.uint32(72).bool(message.isInMeeting);
    }
    if (message.isDesk !== void 0) {
      writer.uint32(80).bool(message.isDesk);
    }
    if (message.recordingInfo !== void 0) {
      RecordingInfo.encode(message.recordingInfo, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNookDiff();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nookCoords = NookCoords.decode(reader, reader.uint32());
          break;
        case 2:
          message.colored = reader.bool();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.bookable = reader.bool();
          break;
        case 5:
          message.capacity = reader.uint32();
          break;
        case 6:
          message.restricted = reader.bool();
          break;
        case 7:
          message.allowedUsers = AllowedUsers.decode(reader, reader.uint32());
          break;
        case 8:
          message.requestedUsers = RequestedUsers.decode(reader, reader.uint32());
          break;
        case 9:
          message.isInMeeting = reader.bool();
          break;
        case 10:
          message.isDesk = reader.bool();
          break;
        case 11:
          message.recordingInfo = RecordingInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseWirePoint() {
  return { x: 0, y: 0 };
}
const WirePoint = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.x !== 0) {
      writer.uint32(8).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).uint32(message.y);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseWirePoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.uint32();
          break;
        case 2:
          message.y = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpawnPoint() {
  return { x: 0, y: 0 };
}
const SpawnPoint = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.x !== 0) {
      writer.uint32(8).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).uint32(message.y);
    }
    if (message.spawnId !== void 0) {
      writer.uint32(26).string(message.spawnId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpawnPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.uint32();
          break;
        case 2:
          message.y = reader.uint32();
          break;
        case 3:
          message.spawnId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePortal() {
  return { x: 0, y: 0 };
}
const Portal = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.x !== 0) {
      writer.uint32(8).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).uint32(message.y);
    }
    if (message.targetMap !== void 0) {
      writer.uint32(26).string(message.targetMap);
    }
    if (message.targetUrl !== void 0) {
      writer.uint32(34).string(message.targetUrl);
    }
    if (message.targetX !== void 0) {
      writer.uint32(40).uint32(message.targetX);
    }
    if (message.targetY !== void 0) {
      writer.uint32(48).uint32(message.targetY);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePortal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.uint32();
          break;
        case 2:
          message.y = reader.uint32();
          break;
        case 3:
          message.targetMap = reader.string();
          break;
        case 4:
          message.targetUrl = reader.string();
          break;
        case 5:
          message.targetX = reader.uint32();
          break;
        case 6:
          message.targetY = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseAnnouncer() {
  return { x: 0, y: 0 };
}
const Announcer = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.x !== 0) {
      writer.uint32(8).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).uint32(message.y);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAnnouncer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.uint32();
          break;
        case 2:
          message.y = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseAsset() {
  return { x: 0, y: 0, src: "" };
}
const Asset = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.src !== "") {
      writer.uint32(26).string(message.src);
    }
    if (message.width !== void 0) {
      writer.uint32(32).uint32(message.width);
    }
    if (message.height !== void 0) {
      writer.uint32(40).uint32(message.height);
    }
    if (message.inFront !== void 0) {
      writer.uint32(48).bool(message.inFront);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        case 3:
          message.src = reader.string();
          break;
        case 4:
          message.width = reader.uint32();
          break;
        case 5:
          message.height = reader.uint32();
          break;
        case 6:
          message.inFront = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseAreaPosition() {
  return { x1: 0, y1: 0, x2: 0, y2: 0 };
}
const AreaPosition = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.x1 !== 0) {
      writer.uint32(8).uint32(message.x1);
    }
    if (message.y1 !== 0) {
      writer.uint32(16).uint32(message.y1);
    }
    if (message.x2 !== 0) {
      writer.uint32(24).uint32(message.x2);
    }
    if (message.y2 !== 0) {
      writer.uint32(32).uint32(message.y2);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAreaPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x1 = reader.uint32();
          break;
        case 2:
          message.y1 = reader.uint32();
          break;
        case 3:
          message.x2 = reader.uint32();
          break;
        case 4:
          message.y2 = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseWireArea() {
  return { coords: [] };
}
const WireArea = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.category !== void 0) {
      writer.uint32(10).string(message.category);
    }
    for (const v of message.coords) {
      AreaPosition.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseWireArea();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category = reader.string();
          break;
        case 2:
          message.coords.push(AreaPosition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseDBDesk() {
  return { coords: [] };
}
const DBDesk = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    for (const v of message.coords) {
      AreaPosition.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDBDesk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coords.push(AreaPosition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetDimensions() {
  return { mapId: "", width: 0, height: 0 };
}
const MapSetDimensions = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.width !== 0) {
      writer.uint32(16).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(24).uint32(message.height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetDimensions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.width = reader.uint32();
          break;
        case 3:
          message.height = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetCollisions() {
  return { mapId: "", x: 0, y: 0, w: 0, h: 0, mask: "" };
}
const MapSetCollisions = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.x !== 0) {
      writer.uint32(16).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).uint32(message.y);
    }
    if (message.w !== 0) {
      writer.uint32(32).uint32(message.w);
    }
    if (message.h !== 0) {
      writer.uint32(40).uint32(message.h);
    }
    if (message.mask !== "") {
      writer.uint32(50).string(message.mask);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetCollisions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.x = reader.uint32();
          break;
        case 3:
          message.y = reader.uint32();
          break;
        case 4:
          message.w = reader.uint32();
          break;
        case 5:
          message.h = reader.uint32();
          break;
        case 6:
          message.mask = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetCollisionsBits() {
  return { mapId: "", overwrite: false, x: 0, y: 0, w: 0, h: 0, mask: new Uint8Array() };
}
const MapSetCollisionsBits = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.overwrite === true) {
      writer.uint32(16).bool(message.overwrite);
    }
    if (message.x !== 0) {
      writer.uint32(24).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(32).uint32(message.y);
    }
    if (message.w !== 0) {
      writer.uint32(40).uint32(message.w);
    }
    if (message.h !== 0) {
      writer.uint32(48).uint32(message.h);
    }
    if (message.mask.length !== 0) {
      writer.uint32(58).bytes(message.mask);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetCollisionsBits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.overwrite = reader.bool();
          break;
        case 3:
          message.x = reader.uint32();
          break;
        case 4:
          message.y = reader.uint32();
          break;
        case 5:
          message.w = reader.uint32();
          break;
        case 6:
          message.h = reader.uint32();
          break;
        case 7:
          message.mask = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetBackgroundImagePath() {
  return { mapId: "", backgroundImagePath: "" };
}
const MapSetBackgroundImagePath = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.backgroundImagePath !== "") {
      writer.uint32(18).string(message.backgroundImagePath);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetBackgroundImagePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.backgroundImagePath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetForegroundImagePath() {
  return { mapId: "", foregroundImagePath: "" };
}
const MapSetForegroundImagePath = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.foregroundImagePath !== "") {
      writer.uint32(18).string(message.foregroundImagePath);
    }
    if (message.delete !== void 0) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetForegroundImagePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.foregroundImagePath = reader.string();
          break;
        case 3:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetNooks() {
  return { mapId: "", nooks: {} };
}
const MapSetNooks = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    Object.entries(message.nooks).forEach(([key, value]) => {
      MapSetNooks_NooksEntry.encode({ key, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.overwrite !== void 0) {
      writer.uint32(24).bool(message.overwrite);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetNooks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          const entry2 = MapSetNooks_NooksEntry.decode(reader, reader.uint32());
          if (entry2.value !== void 0) {
            message.nooks[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.overwrite = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetNooks_NooksEntry() {
  return { key: "", value: void 0 };
}
const MapSetNooks_NooksEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      NookDiff.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetNooks_NooksEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = NookDiff.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetSpawn() {
  return { mapId: "", spawn: void 0 };
}
const MapSetSpawn = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.spawn !== void 0) {
      WirePoint.encode(message.spawn, writer.uint32(18).fork()).ldelim();
    }
    if (message.delete !== void 0) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetSpawn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.spawn = WirePoint.decode(reader, reader.uint32());
          break;
        case 3:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetSpawns() {
  return { mapId: "", spawns: [] };
}
const MapSetSpawns = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    for (const v of message.spawns) {
      SpawnPoint.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetSpawns();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.spawns.push(SpawnPoint.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetPortals() {
  return { mapId: "", portals: [] };
}
const MapSetPortals = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    for (const v of message.portals) {
      Portal.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetPortals();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.portals.push(Portal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetAnnouncer() {
  return { mapId: "", announcer: [] };
}
const MapSetAnnouncer = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    for (const v of message.announcer) {
      Announcer.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetAnnouncer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.announcer.push(Announcer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetAssets() {
  return { mapId: "", assets: [] };
}
const MapSetAssets = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    for (const v of message.assets) {
      Asset.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.delete !== void 0) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetAssets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;
        case 3:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetObjectsV2() {
  return { mapId: "", objects: {} };
}
const MapSetObjectsV2 = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    Object.entries(message.objects).forEach(([key, value]) => {
      MapSetObjectsV2_ObjectsEntry.encode({ key, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.updatesAreOverwrites !== void 0) {
      writer.uint32(24).bool(message.updatesAreOverwrites);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetObjectsV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          const entry2 = MapSetObjectsV2_ObjectsEntry.decode(reader, reader.uint32());
          if (entry2.value !== void 0) {
            message.objects[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.updatesAreOverwrites = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetObjectsV2_ObjectsEntry() {
  return { key: "", value: void 0 };
}
const MapSetObjectsV2_ObjectsEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      WireObject.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetObjectsV2_ObjectsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = WireObject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetName() {
  return { mapId: "", name: "" };
}
const MapSetName = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.delete !== void 0) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetMuteOnEntry() {
  return { mapId: "", muteOnEntry: false };
}
const MapSetMuteOnEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.muteOnEntry === true) {
      writer.uint32(16).bool(message.muteOnEntry);
    }
    if (message.delete !== void 0) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetMuteOnEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.muteOnEntry = reader.bool();
          break;
        case 3:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetUseDrawnBG() {
  return { mapId: "", useDrawnBG: false };
}
const MapSetUseDrawnBG = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.useDrawnBG === true) {
      writer.uint32(16).bool(message.useDrawnBG);
    }
    if (message.delete !== void 0) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetUseDrawnBG();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.useDrawnBG = reader.bool();
          break;
        case 3:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetWalls() {
  return { mapId: "", walls: {} };
}
const MapSetWalls = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    Object.entries(message.walls).forEach(([key, value]) => {
      MapSetWalls_WallsEntry.encode({ key, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.delete !== void 0) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetWalls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          const entry2 = MapSetWalls_WallsEntry.decode(reader, reader.uint32());
          if (entry2.value !== void 0) {
            message.walls[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetWalls_WallsEntry() {
  return { key: "", value: "" };
}
const MapSetWalls_WallsEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetWalls_WallsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetFloors() {
  return { mapId: "", floors: {} };
}
const MapSetFloors = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    Object.entries(message.floors).forEach(([key, value]) => {
      MapSetFloors_FloorsEntry.encode({ key, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.delete !== void 0) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetFloors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          const entry2 = MapSetFloors_FloorsEntry.decode(reader, reader.uint32());
          if (entry2.value !== void 0) {
            message.floors[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetFloors_FloorsEntry() {
  return { key: "", value: "" };
}
const MapSetFloors_FloorsEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetFloors_FloorsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetAreas() {
  return { mapId: "", areas: {} };
}
const MapSetAreas = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    Object.entries(message.areas).forEach(([key, value]) => {
      MapSetAreas_AreasEntry.encode({ key, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.delete !== void 0) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetAreas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          const entry2 = MapSetAreas_AreasEntry.decode(reader, reader.uint32());
          if (entry2.value !== void 0) {
            message.areas[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetAreas_AreasEntry() {
  return { key: "", value: void 0 };
}
const MapSetAreas_AreasEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      WireArea.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetAreas_AreasEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = WireArea.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapDeleteObjectByKey() {
  return { mapId: "", key: "" };
}
const MapDeleteObjectByKey = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapDeleteObjectByKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapDeleteObjectById() {
  return { mapId: "", id: "" };
}
const MapDeleteObjectById = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapDeleteObjectById();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetMiniMapImagePath() {
  return { mapId: "", miniMapImagePath: "" };
}
const MapSetMiniMapImagePath = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.miniMapImagePath !== "") {
      writer.uint32(18).string(message.miniMapImagePath);
    }
    if (message.delete !== void 0) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetMiniMapImagePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.miniMapImagePath = reader.string();
          break;
        case 3:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetEnabledChats() {
  return { mapId: "", enabledChats: [] };
}
const MapSetEnabledChats = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    for (const v of message.enabledChats) {
      writer.uint32(18).string(v);
    }
    if (message.delete !== void 0) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetEnabledChats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.enabledChats.push(reader.string());
          break;
        case 3:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetDescription() {
  return { mapId: "", description: "" };
}
const MapSetDescription = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.delete !== void 0) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetDecoration() {
  return { mapId: "", decoration: "" };
}
const MapSetDecoration = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.decoration !== "") {
      writer.uint32(18).string(message.decoration);
    }
    if (message.delete !== void 0) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetDecoration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.decoration = reader.string();
          break;
        case 3:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetTutorialTasks() {
  return { mapId: "", tutorialTasks: void 0 };
}
const MapSetTutorialTasks = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.tutorialTasks !== void 0) {
      WireTutorialTasks.encode(message.tutorialTasks, writer.uint32(18).fork()).ldelim();
    }
    if (message.delete !== void 0) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetTutorialTasks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.tutorialTasks = WireTutorialTasks.decode(reader, reader.uint32());
          break;
        case 3:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseWireTutorialTasks() {
  return { groupSetId: "", areas: [] };
}
const WireTutorialTasks = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.groupSetId !== "") {
      writer.uint32(10).string(message.groupSetId);
    }
    for (const v of message.areas) {
      TutorialTaskMapArea.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.autoStart !== void 0) {
      writer.uint32(24).bool(message.autoStart);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseWireTutorialTasks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupSetId = reader.string();
          break;
        case 2:
          message.areas.push(TutorialTaskMapArea.decode(reader, reader.uint32()));
          break;
        case 3:
          message.autoStart = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseTutorialTaskMapArea() {
  return { areaId: "", x: 0, y: 0, height: 0, width: 0 };
}
const TutorialTaskMapArea = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.areaId !== "") {
      writer.uint32(10).string(message.areaId);
    }
    if (message.x !== 0) {
      writer.uint32(16).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).uint32(message.y);
    }
    if (message.height !== 0) {
      writer.uint32(32).uint32(message.height);
    }
    if (message.width !== 0) {
      writer.uint32(40).uint32(message.width);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTutorialTaskMapArea();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.areaId = reader.string();
          break;
        case 2:
          message.x = reader.uint32();
          break;
        case 3:
          message.y = reader.uint32();
          break;
        case 4:
          message.height = reader.uint32();
          break;
        case 5:
          message.width = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapSetScript() {
  return { mapId: "", script: "" };
}
const MapSetScript = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.script !== "") {
      writer.uint32(18).string(message.script);
    }
    if (message.delete !== void 0) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapSetScript();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.script = reader.string();
          break;
        case 3:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseInventory() {
  return { items: {}, order: {} };
}
const Inventory = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    Object.entries(message.items).forEach(([key, value]) => {
      Inventory_ItemsEntry.encode({ key, value }, writer.uint32(10).fork()).ldelim();
    });
    Object.entries(message.order).forEach(([key, value]) => {
      Inventory_OrderEntry.encode({ key, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInventory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Inventory_ItemsEntry.decode(reader, reader.uint32());
          if (entry1.value !== void 0) {
            message.items[entry1.key] = entry1.value;
          }
          break;
        case 2:
          const entry2 = Inventory_OrderEntry.decode(reader, reader.uint32());
          if (entry2.value !== void 0) {
            message.order[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseInventory_ItemsEntry() {
  return { key: "", value: void 0 };
}
const Inventory_ItemsEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      InventoryItem.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInventory_ItemsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = InventoryItem.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseInventory_OrderEntry() {
  return { key: "", value: "" };
}
const Inventory_OrderEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInventory_OrderEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseInventoryItem() {
  return { count: 0 };
}
const InventoryItem = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.count !== 0) {
      writer.uint32(8).uint32(message.count);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInventoryItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceItem() {
  return { name: "", previewUrl: "", meta: {}, abilities: {} };
}
const SpaceItem = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.category !== void 0) {
      writer.uint32(18).string(message.category);
    }
    if (message.description !== void 0) {
      writer.uint32(26).string(message.description);
    }
    if (message.previewUrl !== "") {
      writer.uint32(34).string(message.previewUrl);
    }
    Object.entries(message.meta).forEach(([key, value]) => {
      SpaceItem_MetaEntry.encode({ key, value }, writer.uint32(42).fork()).ldelim();
    });
    Object.entries(message.abilities).forEach(([key, value]) => {
      SpaceItem_AbilitiesEntry.encode({ key, value }, writer.uint32(50).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.category = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.previewUrl = reader.string();
          break;
        case 5:
          const entry5 = SpaceItem_MetaEntry.decode(reader, reader.uint32());
          if (entry5.value !== void 0) {
            message.meta[entry5.key] = entry5.value;
          }
          break;
        case 6:
          const entry6 = SpaceItem_AbilitiesEntry.decode(reader, reader.uint32());
          if (entry6.value !== void 0) {
            message.abilities[entry6.key] = entry6.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceItem_MetaEntry() {
  return { key: "", value: "" };
}
const SpaceItem_MetaEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceItem_MetaEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceItem_AbilitiesEntry() {
  return { key: "", value: void 0 };
}
const SpaceItem_AbilitiesEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      ItemAbility.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceItem_AbilitiesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ItemAbility.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseItemAbility() {
  return { name: "" };
}
const ItemAbility = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseItemAbility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapLocation() {
  return { map: "", x: 0, y: 0 };
}
const MapLocation = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.map !== "") {
      writer.uint32(10).string(message.map);
    }
    if (message.x !== 0) {
      writer.uint32(16).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).uint32(message.y);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.map = reader.string();
          break;
        case 2:
          message.x = reader.uint32();
          break;
        case 3:
          message.y = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseServerClientBatch() {
  return { events: [] };
}
const ServerClientBatch = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    for (const v of message.events) {
      ServerClientEvent.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerClientBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(ServerClientEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseServerClientEvent() {
  return { event: void 0 };
}
const ServerClientEvent = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    var _a;
    switch ((_a = message.event) == null ? void 0 : _a.$case) {
      case "info":
        Info.encode(message.event.info, writer.uint32(802).fork()).ldelim();
        break;
      case "warn":
        Warn.encode(message.event.warn, writer.uint32(810).fork()).ldelim();
        break;
      case "error":
        ErrorEvent.encode(message.event.error, writer.uint32(818).fork()).ldelim();
        break;
      case "ready":
        Ready.encode(message.event.ready, writer.uint32(826).fork()).ldelim();
        break;
      case "serverHeartbeat":
        ServerHeartbeat.encode(message.event.serverHeartbeat, writer.uint32(842).fork()).ldelim();
        break;
      case "transactionStatus":
        TransactionStatus.encode(message.event.transactionStatus, writer.uint32(858).fork()).ldelim();
        break;
      case "playerMoves":
        PlayerMoves.encode(message.event.playerMoves, writer.uint32(10).fork()).ldelim();
        break;
      case "playerSetsStatus":
        PlayerSetsStatus.encode(message.event.playerSetsStatus, writer.uint32(42).fork()).ldelim();
        break;
      case "playerSpotlights":
        PlayerSpotlights.encode(message.event.playerSpotlights, writer.uint32(50).fork()).ldelim();
        break;
      case "playerRings":
        PlayerRings.encode(message.event.playerRings, writer.uint32(58).fork()).ldelim();
        break;
      case "playerChats":
        PlayerChats.encode(message.event.playerChats, writer.uint32(74).fork()).ldelim();
        break;
      case "playerGhosts":
        PlayerGhosts.encode(message.event.playerGhosts, writer.uint32(90).fork()).ldelim();
        break;
      case "playerEntersWhisper":
        PlayerEntersWhisper.encode(message.event.playerEntersWhisper, writer.uint32(98).fork()).ldelim();
        break;
      case "playerLeavesWhisper":
        PlayerLeavesWhisper.encode(message.event.playerLeavesWhisper, writer.uint32(106).fork()).ldelim();
        break;
      case "playerActivelySpeaks":
        PlayerActivelySpeaks.encode(message.event.playerActivelySpeaks, writer.uint32(114).fork()).ldelim();
        break;
      case "playerSetsName":
        PlayerSetsName.encode(message.event.playerSetsName, writer.uint32(138).fork()).ldelim();
        break;
      case "playerSetsTextStatus":
        PlayerSetsTextStatus.encode(message.event.playerSetsTextStatus, writer.uint32(146).fork()).ldelim();
        break;
      case "playerSetsEmojiStatus":
        PlayerSetsEmojiStatus.encode(message.event.playerSetsEmojiStatus, writer.uint32(154).fork()).ldelim();
        break;
      case "playerSetsAffiliation":
        PlayerSetsAffiliation.encode(message.event.playerSetsAffiliation, writer.uint32(162).fork()).ldelim();
        break;
      case "playerExits":
        PlayerExits.encode(message.event.playerExits, writer.uint32(170).fork()).ldelim();
        break;
      case "playerSetsIsSignedIn":
        PlayerSetsIsSignedIn.encode(message.event.playerSetsIsSignedIn, writer.uint32(330).fork()).ldelim();
        break;
      case "spaceOverwrites":
        SpaceOverwrites.encode(message.event.spaceOverwrites, writer.uint32(354).fork()).ldelim();
        break;
      case "spaceIsClosed":
        SpaceIsClosed.encode(message.event.spaceIsClosed, writer.uint32(362).fork()).ldelim();
        break;
      case "playerEntersPortal":
        PlayerEntersPortal.encode(message.event.playerEntersPortal, writer.uint32(370).fork()).ldelim();
        break;
      case "spaceSetsIdMapping":
        SpaceSetsIdMapping.encode(message.event.spaceSetsIdMapping, writer.uint32(378).fork()).ldelim();
        break;
      case "playerSetsLastActive":
        PlayerSetsLastActive.encode(message.event.playerSetsLastActive, writer.uint32(386).fork()).ldelim();
        break;
      case "playerShootsConfetti":
        PlayerShootsConfetti.encode(message.event.playerShootsConfetti, writer.uint32(394).fork()).ldelim();
        break;
      case "playerSetsEventStatus":
        PlayerSetsEventStatus.encode(message.event.playerSetsEventStatus, writer.uint32(402).fork()).ldelim();
        break;
      case "playerSetsInConversation":
        PlayerSetsInConversation.encode(message.event.playerSetsInConversation, writer.uint32(410).fork()).ldelim();
        break;
      case "playerSetsCurrentArea":
        PlayerSetsCurrentArea.encode(message.event.playerSetsCurrentArea, writer.uint32(426).fork()).ldelim();
        break;
      case "playerSetsImagePointer":
        PlayerSetsImagePointer.encode(message.event.playerSetsImagePointer, writer.uint32(434).fork()).ldelim();
        break;
      case "cookieFound":
        CookieFound.encode(message.event.cookieFound, writer.uint32(442).fork()).ldelim();
        break;
      case "playerEntersWhisperV2":
        PlayerEntersWhisperV2.encode(message.event.playerEntersWhisperV2, writer.uint32(450).fork()).ldelim();
        break;
      case "playerSetsGoKartId":
        PlayerSetsGoKartId.encode(message.event.playerSetsGoKartId, writer.uint32(458).fork()).ldelim();
        break;
      case "mapSetDimensions":
        MapSetDimensions.encode(message.event.mapSetDimensions, writer.uint32(466).fork()).ldelim();
        break;
      case "mapSetBackgroundImagePath":
        MapSetBackgroundImagePath.encode(message.event.mapSetBackgroundImagePath, writer.uint32(482).fork()).ldelim();
        break;
      case "mapSetForegroundImagePath":
        MapSetForegroundImagePath.encode(message.event.mapSetForegroundImagePath, writer.uint32(490).fork()).ldelim();
        break;
      case "mapSetSpawns":
        MapSetSpawns.encode(message.event.mapSetSpawns, writer.uint32(514).fork()).ldelim();
        break;
      case "mapSetPortals":
        MapSetPortals.encode(message.event.mapSetPortals, writer.uint32(522).fork()).ldelim();
        break;
      case "mapSetAnnouncer":
        MapSetAnnouncer.encode(message.event.mapSetAnnouncer, writer.uint32(530).fork()).ldelim();
        break;
      case "mapSetAssets":
        MapSetAssets.encode(message.event.mapSetAssets, writer.uint32(554).fork()).ldelim();
        break;
      case "mapSetName":
        MapSetName.encode(message.event.mapSetName, writer.uint32(570).fork()).ldelim();
        break;
      case "mapSetMuteOnEntry":
        MapSetMuteOnEntry.encode(message.event.mapSetMuteOnEntry, writer.uint32(586).fork()).ldelim();
        break;
      case "mapSetUseDrawnBG":
        MapSetUseDrawnBG.encode(message.event.mapSetUseDrawnBG, writer.uint32(594).fork()).ldelim();
        break;
      case "mapSetWalls":
        MapSetWalls.encode(message.event.mapSetWalls, writer.uint32(602).fork()).ldelim();
        break;
      case "mapSetFloors":
        MapSetFloors.encode(message.event.mapSetFloors, writer.uint32(610).fork()).ldelim();
        break;
      case "mapSetAreas":
        MapSetAreas.encode(message.event.mapSetAreas, writer.uint32(618).fork()).ldelim();
        break;
      case "mapSetSpawn":
        MapSetSpawn.encode(message.event.mapSetSpawn, writer.uint32(634).fork()).ldelim();
        break;
      case "playerSetsIsAlone":
        PlayerSetsIsAlone.encode(message.event.playerSetsIsAlone, writer.uint32(642).fork()).ldelim();
        break;
      case "playerJoins":
        PlayerJoins.encode(message.event.playerJoins, writer.uint32(650).fork()).ldelim();
        break;
      case "mapSetEnabledChats":
        MapSetEnabledChats.encode(message.event.mapSetEnabledChats, writer.uint32(658).fork()).ldelim();
        break;
      case "mapSetDescription":
        MapSetDescription.encode(message.event.mapSetDescription, writer.uint32(666).fork()).ldelim();
        break;
      case "mapSetDecoration":
        MapSetDecoration.encode(message.event.mapSetDecoration, writer.uint32(674).fork()).ldelim();
        break;
      case "mapSetTutorialTasks":
        MapSetTutorialTasks.encode(message.event.mapSetTutorialTasks, writer.uint32(682).fork()).ldelim();
        break;
      case "mapSetMiniMapImagePath":
        MapSetMiniMapImagePath.encode(message.event.mapSetMiniMapImagePath, writer.uint32(690).fork()).ldelim();
        break;
      case "spacePlaysSound":
        SpacePlaysSound.encode(message.event.spacePlaysSound, writer.uint32(698).fork()).ldelim();
        break;
      case "mapSetScript":
        MapSetScript.encode(message.event.mapSetScript, writer.uint32(706).fork()).ldelim();
        break;
      case "playerSetsIsMobile":
        PlayerSetsIsMobile.encode(message.event.playerSetsIsMobile, writer.uint32(722).fork()).ldelim();
        break;
      case "setScreenPointerServer":
        SetScreenPointerServer.encode(message.event.setScreenPointerServer, writer.uint32(730).fork()).ldelim();
        break;
      case "playerSetsEmoteV2":
        PlayerSetsEmoteV2.encode(message.event.playerSetsEmoteV2, writer.uint32(738).fork()).ldelim();
        break;
      case "playerSetsFocusModeEndTime":
        PlayerSetsFocusModeEndTime.encode(message.event.playerSetsFocusModeEndTime, writer.uint32(746).fork()).ldelim();
        break;
      case "spaceSetsSpaceMembers":
        SpaceSetsSpaceMembers.encode(message.event.spaceSetsSpaceMembers, writer.uint32(754).fork()).ldelim();
        break;
      case "spaceSetsSpaceUsers":
        SpaceSetsSpaceUsers.encode(message.event.spaceSetsSpaceUsers, writer.uint32(1338).fork()).ldelim();
        break;
      case "customEvent":
        CustomEvent.encode(message.event.customEvent, writer.uint32(762).fork()).ldelim();
        break;
      case "playerBlocks":
        PlayerBlocks.encode(message.event.playerBlocks, writer.uint32(778).fork()).ldelim();
        break;
      case "playerUpdatesFocusModeStatus":
        PlayerUpdatesFocusModeStatus.encode(message.event.playerUpdatesFocusModeStatus, writer.uint32(786).fork()).ldelim();
        break;
      case "playerNotifies":
        PlayerNotifies.encode(message.event.playerNotifies, writer.uint32(794).fork()).ldelim();
        break;
      case "playerSetsItemString":
        PlayerSetsItemString.encode(message.event.playerSetsItemString, writer.uint32(866).fork()).ldelim();
        break;
      case "playerSetsFollowTarget":
        PlayerSetsFollowTarget.encode(message.event.playerSetsFollowTarget, writer.uint32(882).fork()).ldelim();
        break;
      case "playerRequestsToLead":
        PlayerRequestsToLead.encode(message.event.playerRequestsToLead, writer.uint32(890).fork()).ldelim();
        break;
      case "playerSetsManualVideoSrc":
        PlayerSetsManualVideoSrc.encode(message.event.playerSetsManualVideoSrc, writer.uint32(898).fork()).ldelim();
        break;
      case "playerSetsIsNpc":
        PlayerSetsIsNpc.encode(message.event.playerSetsIsNpc, writer.uint32(906).fork()).ldelim();
        break;
      case "playerSetsSubtitle":
        PlayerSetsSubtitle.encode(message.event.playerSetsSubtitle, writer.uint32(914).fork()).ldelim();
        break;
      case "mapCommitsChanges":
        MapCommitsChanges.encode(message.event.mapCommitsChanges, writer.uint32(922).fork()).ldelim();
        break;
      case "mapMoveObject":
        MapMoveObject.encode(message.event.mapMoveObject, writer.uint32(938).fork()).ldelim();
        break;
      case "playerEditsChatMessage":
        PlayerEditsChatMessage.encode(message.event.playerEditsChatMessage, writer.uint32(946).fork()).ldelim();
        break;
      case "fxShakeObject":
        FXShakeObject.encode(message.event.fxShakeObject, writer.uint32(954).fork()).ldelim();
        break;
      case "fxShakeCamera":
        FXShakeCamera.encode(message.event.fxShakeCamera, writer.uint32(962).fork()).ldelim();
        break;
      case "playerSendsCommand":
        PlayerSendsCommand.encode(message.event.playerSendsCommand, writer.uint32(970).fork()).ldelim();
        break;
      case "spaceRegistersCommand":
        SpaceRegistersCommand.encode(message.event.spaceRegistersCommand, writer.uint32(978).fork()).ldelim();
        break;
      case "speakerUpdatesSession":
        SpeakerUpdatesSession.encode(message.event.speakerUpdatesSession, writer.uint32(986).fork()).ldelim();
        break;
      case "playerUpdatesInventory":
        PlayerUpdatesInventory.encode(message.event.playerUpdatesInventory, writer.uint32(994).fork()).ldelim();
        break;
      case "spaceUpdatesItems":
        SpaceUpdatesItems.encode(message.event.spaceUpdatesItems, writer.uint32(1002).fork()).ldelim();
        break;
      case "playerSetsVehicleId":
        PlayerSetsVehicleId.encode(message.event.playerSetsVehicleId, writer.uint32(1010).fork()).ldelim();
        break;
      case "playerSetsSpeedModifier":
        PlayerSetsSpeedModifier.encode(message.event.playerSetsSpeedModifier, writer.uint32(1018).fork()).ldelim();
        break;
      case "playerHighFives":
        PlayerHighFives.encode(message.event.playerHighFives, writer.uint32(1026).fork()).ldelim();
        break;
      case "spaceStopsSound":
        SpaceStopsSound.encode(message.event.spaceStopsSound, writer.uint32(1042).fork()).ldelim();
        break;
      case "hipToBeSquare":
        HipToBeSquare.encode(message.event.hipToBeSquare, writer.uint32(1050).fork()).ldelim();
        break;
      case "playerCrafts":
        PlayerCrafts.encode(message.event.playerCrafts, writer.uint32(1058).fork()).ldelim();
        break;
      case "playerTriggersInventoryItem":
        PlayerTriggersInventoryItem.encode(message.event.playerTriggersInventoryItem, writer.uint32(1066).fork()).ldelim();
        break;
      case "playerSetsAllowScreenPointer":
        PlayerSetsAllowScreenPointer.encode(message.event.playerSetsAllowScreenPointer, writer.uint32(1074).fork()).ldelim();
        break;
      case "precomputedEnterLocation":
        PrecomputedEnterLocation.encode(message.event.precomputedEnterLocation, writer.uint32(1082).fork()).ldelim();
        break;
      case "gotRequestMute":
        GotRequestMute.encode(message.event.gotRequestMute, writer.uint32(1090).fork()).ldelim();
        break;
      case "playerSetsDeskInfo":
        PlayerSetsDeskInfo.encode(message.event.playerSetsDeskInfo, writer.uint32(1098).fork()).ldelim();
        break;
      case "mapSetNooks":
        MapSetNooks.encode(message.event.mapSetNooks, writer.uint32(1106).fork()).ldelim();
        break;
      case "dynamicGates":
        DynamicGates.encode(message.event.dynamicGates, writer.uint32(1114).fork()).ldelim();
        break;
      case "playerWaves":
        PlayerWaves.encode(message.event.playerWaves, writer.uint32(1122).fork()).ldelim();
        break;
      case "playerSetsPronouns":
        PlayerSetsPronouns.encode(message.event.playerSetsPronouns, writer.uint32(1130).fork()).ldelim();
        break;
      case "playerSetsTitle":
        PlayerSetsTitle.encode(message.event.playerSetsTitle, writer.uint32(1138).fork()).ldelim();
        break;
      case "playerSetsTimezone":
        PlayerSetsTimezone.encode(message.event.playerSetsTimezone, writer.uint32(1146).fork()).ldelim();
        break;
      case "playerSetsDescription":
        PlayerSetsDescription.encode(message.event.playerSetsDescription, writer.uint32(1154).fork()).ldelim();
        break;
      case "playerSetsPhone":
        PlayerSetsPhone.encode(message.event.playerSetsPhone, writer.uint32(1162).fork()).ldelim();
        break;
      case "playerSetsPersonalImageUrl":
        PlayerSetsPersonalImageUrl.encode(message.event.playerSetsPersonalImageUrl, writer.uint32(1170).fork()).ldelim();
        break;
      case "playerSetsProfileImageUrl":
        PlayerSetsProfileImageUrl.encode(message.event.playerSetsProfileImageUrl, writer.uint32(1178).fork()).ldelim();
        break;
      case "spaceSetsCapacity":
        SpaceSetsCapacity.encode(message.event.spaceSetsCapacity, writer.uint32(1186).fork()).ldelim();
        break;
      case "spaceOverCapacityDeniesUser":
        SpaceOverCapacityDeniesUser.encode(message.event.spaceOverCapacityDeniesUser, writer.uint32(1194).fork()).ldelim();
        break;
      case "playerSetsAway":
        PlayerSetsAway.encode(message.event.playerSetsAway, writer.uint32(1202).fork()).ldelim();
        break;
      case "mapSetCollisionsBits":
        MapSetCollisionsBits.encode(message.event.mapSetCollisionsBits, writer.uint32(1210).fork()).ldelim();
        break;
      case "playerSetsCity":
        PlayerSetsCity.encode(message.event.playerSetsCity, writer.uint32(1218).fork()).ldelim();
        break;
      case "playerSetsCountry":
        PlayerSetsCountry.encode(message.event.playerSetsCountry, writer.uint32(1226).fork()).ldelim();
        break;
      case "playerSetsStartDate":
        PlayerSetsStartDate.encode(message.event.playerSetsStartDate, writer.uint32(1234).fork()).ldelim();
        break;
      case "playerStartsRecording":
        PlayerStartsRecording.encode(message.event.playerStartsRecording, writer.uint32(1250).fork()).ldelim();
        break;
      case "accessRequestsUpdated":
        AccessRequestsUpdated.encode(message.event.accessRequestsUpdated, writer.uint32(1258).fork()).ldelim();
        break;
      case "accessRequestRespondedTo":
        AccessRequestRespondedTo.encode(message.event.accessRequestRespondedTo, writer.uint32(1266).fork()).ldelim();
        break;
      case "spaceSetsGuestPassStatuses":
        SpaceSetsGuestPassStatuses.encode(message.event.spaceSetsGuestPassStatuses, writer.uint32(1274).fork()).ldelim();
        break;
      case "playerSetsAvailability":
        PlayerSetsAvailability.encode(message.event.playerSetsAvailability, writer.uint32(1282).fork()).ldelim();
        break;
      case "subscriptionsUpdated":
        SubscriptionsUpdated.encode(message.event.subscriptionsUpdated, writer.uint32(1290).fork()).ldelim();
        break;
      case "spaceRolePermissionOverrideUpdated":
        SpaceRolePermissionOverrideUpdated.encode(
          message.event.spaceRolePermissionOverrideUpdated,
          writer.uint32(1314).fork()
        ).ldelim();
        break;
      case "playerSetsLastRaisedHand":
        PlayerSetsLastRaisedHand.encode(message.event.playerSetsLastRaisedHand, writer.uint32(1322).fork()).ldelim();
        break;
      case "playerSetsCurrentlyEquippedWearables":
        PlayerSetsCurrentlyEquippedWearables.encode(
          message.event.playerSetsCurrentlyEquippedWearables,
          writer.uint32(1330).fork()
        ).ldelim();
        break;
      case "playerSetsDisplayEmail":
        PlayerSetsDisplayEmail.encode(message.event.playerSetsDisplayEmail, writer.uint32(1346).fork()).ldelim();
        break;
      case "mapDeleteObjectByKey":
        MapDeleteObjectByKey.encode(message.event.mapDeleteObjectByKey, writer.uint32(1354).fork()).ldelim();
        break;
      case "mapSetObjectsV2":
        MapSetObjectsV2.encode(message.event.mapSetObjectsV2, writer.uint32(1362).fork()).ldelim();
        break;
      case "playerInteractsWithObject":
        PlayerInteractsWithObject.encode(message.event.playerInteractsWithObject, writer.uint32(1370).fork()).ldelim();
        break;
      case "playerTriggersObject":
        PlayerTriggersObject.encode(message.event.playerTriggersObject, writer.uint32(1378).fork()).ldelim();
        break;
      case "chimeSetsUserInfo":
        ChimeSetsUserInfo.encode(message.event.chimeSetsUserInfo, writer.uint32(1386).fork()).ldelim();
        break;
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerClientEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 100:
          message.event = { $case: "info", info: Info.decode(reader, reader.uint32()) };
          break;
        case 101:
          message.event = { $case: "warn", warn: Warn.decode(reader, reader.uint32()) };
          break;
        case 102:
          message.event = { $case: "error", error: ErrorEvent.decode(reader, reader.uint32()) };
          break;
        case 103:
          message.event = { $case: "ready", ready: Ready.decode(reader, reader.uint32()) };
          break;
        case 105:
          message.event = {
            $case: "serverHeartbeat",
            serverHeartbeat: ServerHeartbeat.decode(reader, reader.uint32())
          };
          break;
        case 107:
          message.event = {
            $case: "transactionStatus",
            transactionStatus: TransactionStatus.decode(reader, reader.uint32())
          };
          break;
        case 1:
          message.event = { $case: "playerMoves", playerMoves: PlayerMoves.decode(reader, reader.uint32()) };
          break;
        case 5:
          message.event = {
            $case: "playerSetsStatus",
            playerSetsStatus: PlayerSetsStatus.decode(reader, reader.uint32())
          };
          break;
        case 6:
          message.event = {
            $case: "playerSpotlights",
            playerSpotlights: PlayerSpotlights.decode(reader, reader.uint32())
          };
          break;
        case 7:
          message.event = { $case: "playerRings", playerRings: PlayerRings.decode(reader, reader.uint32()) };
          break;
        case 9:
          message.event = { $case: "playerChats", playerChats: PlayerChats.decode(reader, reader.uint32()) };
          break;
        case 11:
          message.event = { $case: "playerGhosts", playerGhosts: PlayerGhosts.decode(reader, reader.uint32()) };
          break;
        case 12:
          message.event = {
            $case: "playerEntersWhisper",
            playerEntersWhisper: PlayerEntersWhisper.decode(reader, reader.uint32())
          };
          break;
        case 13:
          message.event = {
            $case: "playerLeavesWhisper",
            playerLeavesWhisper: PlayerLeavesWhisper.decode(reader, reader.uint32())
          };
          break;
        case 14:
          message.event = {
            $case: "playerActivelySpeaks",
            playerActivelySpeaks: PlayerActivelySpeaks.decode(reader, reader.uint32())
          };
          break;
        case 17:
          message.event = { $case: "playerSetsName", playerSetsName: PlayerSetsName.decode(reader, reader.uint32()) };
          break;
        case 18:
          message.event = {
            $case: "playerSetsTextStatus",
            playerSetsTextStatus: PlayerSetsTextStatus.decode(reader, reader.uint32())
          };
          break;
        case 19:
          message.event = {
            $case: "playerSetsEmojiStatus",
            playerSetsEmojiStatus: PlayerSetsEmojiStatus.decode(reader, reader.uint32())
          };
          break;
        case 20:
          message.event = {
            $case: "playerSetsAffiliation",
            playerSetsAffiliation: PlayerSetsAffiliation.decode(reader, reader.uint32())
          };
          break;
        case 21:
          message.event = { $case: "playerExits", playerExits: PlayerExits.decode(reader, reader.uint32()) };
          break;
        case 41:
          message.event = {
            $case: "playerSetsIsSignedIn",
            playerSetsIsSignedIn: PlayerSetsIsSignedIn.decode(reader, reader.uint32())
          };
          break;
        case 44:
          message.event = {
            $case: "spaceOverwrites",
            spaceOverwrites: SpaceOverwrites.decode(reader, reader.uint32())
          };
          break;
        case 45:
          message.event = { $case: "spaceIsClosed", spaceIsClosed: SpaceIsClosed.decode(reader, reader.uint32()) };
          break;
        case 46:
          message.event = {
            $case: "playerEntersPortal",
            playerEntersPortal: PlayerEntersPortal.decode(reader, reader.uint32())
          };
          break;
        case 47:
          message.event = {
            $case: "spaceSetsIdMapping",
            spaceSetsIdMapping: SpaceSetsIdMapping.decode(reader, reader.uint32())
          };
          break;
        case 48:
          message.event = {
            $case: "playerSetsLastActive",
            playerSetsLastActive: PlayerSetsLastActive.decode(reader, reader.uint32())
          };
          break;
        case 49:
          message.event = {
            $case: "playerShootsConfetti",
            playerShootsConfetti: PlayerShootsConfetti.decode(reader, reader.uint32())
          };
          break;
        case 50:
          message.event = {
            $case: "playerSetsEventStatus",
            playerSetsEventStatus: PlayerSetsEventStatus.decode(reader, reader.uint32())
          };
          break;
        case 51:
          message.event = {
            $case: "playerSetsInConversation",
            playerSetsInConversation: PlayerSetsInConversation.decode(reader, reader.uint32())
          };
          break;
        case 53:
          message.event = {
            $case: "playerSetsCurrentArea",
            playerSetsCurrentArea: PlayerSetsCurrentArea.decode(reader, reader.uint32())
          };
          break;
        case 54:
          message.event = {
            $case: "playerSetsImagePointer",
            playerSetsImagePointer: PlayerSetsImagePointer.decode(reader, reader.uint32())
          };
          break;
        case 55:
          message.event = { $case: "cookieFound", cookieFound: CookieFound.decode(reader, reader.uint32()) };
          break;
        case 56:
          message.event = {
            $case: "playerEntersWhisperV2",
            playerEntersWhisperV2: PlayerEntersWhisperV2.decode(reader, reader.uint32())
          };
          break;
        case 57:
          message.event = {
            $case: "playerSetsGoKartId",
            playerSetsGoKartId: PlayerSetsGoKartId.decode(reader, reader.uint32())
          };
          break;
        case 58:
          message.event = {
            $case: "mapSetDimensions",
            mapSetDimensions: MapSetDimensions.decode(reader, reader.uint32())
          };
          break;
        case 60:
          message.event = {
            $case: "mapSetBackgroundImagePath",
            mapSetBackgroundImagePath: MapSetBackgroundImagePath.decode(reader, reader.uint32())
          };
          break;
        case 61:
          message.event = {
            $case: "mapSetForegroundImagePath",
            mapSetForegroundImagePath: MapSetForegroundImagePath.decode(reader, reader.uint32())
          };
          break;
        case 64:
          message.event = { $case: "mapSetSpawns", mapSetSpawns: MapSetSpawns.decode(reader, reader.uint32()) };
          break;
        case 65:
          message.event = { $case: "mapSetPortals", mapSetPortals: MapSetPortals.decode(reader, reader.uint32()) };
          break;
        case 66:
          message.event = {
            $case: "mapSetAnnouncer",
            mapSetAnnouncer: MapSetAnnouncer.decode(reader, reader.uint32())
          };
          break;
        case 69:
          message.event = { $case: "mapSetAssets", mapSetAssets: MapSetAssets.decode(reader, reader.uint32()) };
          break;
        case 71:
          message.event = { $case: "mapSetName", mapSetName: MapSetName.decode(reader, reader.uint32()) };
          break;
        case 73:
          message.event = {
            $case: "mapSetMuteOnEntry",
            mapSetMuteOnEntry: MapSetMuteOnEntry.decode(reader, reader.uint32())
          };
          break;
        case 74:
          message.event = {
            $case: "mapSetUseDrawnBG",
            mapSetUseDrawnBG: MapSetUseDrawnBG.decode(reader, reader.uint32())
          };
          break;
        case 75:
          message.event = { $case: "mapSetWalls", mapSetWalls: MapSetWalls.decode(reader, reader.uint32()) };
          break;
        case 76:
          message.event = { $case: "mapSetFloors", mapSetFloors: MapSetFloors.decode(reader, reader.uint32()) };
          break;
        case 77:
          message.event = { $case: "mapSetAreas", mapSetAreas: MapSetAreas.decode(reader, reader.uint32()) };
          break;
        case 79:
          message.event = { $case: "mapSetSpawn", mapSetSpawn: MapSetSpawn.decode(reader, reader.uint32()) };
          break;
        case 80:
          message.event = {
            $case: "playerSetsIsAlone",
            playerSetsIsAlone: PlayerSetsIsAlone.decode(reader, reader.uint32())
          };
          break;
        case 81:
          message.event = { $case: "playerJoins", playerJoins: PlayerJoins.decode(reader, reader.uint32()) };
          break;
        case 82:
          message.event = {
            $case: "mapSetEnabledChats",
            mapSetEnabledChats: MapSetEnabledChats.decode(reader, reader.uint32())
          };
          break;
        case 83:
          message.event = {
            $case: "mapSetDescription",
            mapSetDescription: MapSetDescription.decode(reader, reader.uint32())
          };
          break;
        case 84:
          message.event = {
            $case: "mapSetDecoration",
            mapSetDecoration: MapSetDecoration.decode(reader, reader.uint32())
          };
          break;
        case 85:
          message.event = {
            $case: "mapSetTutorialTasks",
            mapSetTutorialTasks: MapSetTutorialTasks.decode(reader, reader.uint32())
          };
          break;
        case 86:
          message.event = {
            $case: "mapSetMiniMapImagePath",
            mapSetMiniMapImagePath: MapSetMiniMapImagePath.decode(reader, reader.uint32())
          };
          break;
        case 87:
          message.event = {
            $case: "spacePlaysSound",
            spacePlaysSound: SpacePlaysSound.decode(reader, reader.uint32())
          };
          break;
        case 88:
          message.event = { $case: "mapSetScript", mapSetScript: MapSetScript.decode(reader, reader.uint32()) };
          break;
        case 90:
          message.event = {
            $case: "playerSetsIsMobile",
            playerSetsIsMobile: PlayerSetsIsMobile.decode(reader, reader.uint32())
          };
          break;
        case 91:
          message.event = {
            $case: "setScreenPointerServer",
            setScreenPointerServer: SetScreenPointerServer.decode(reader, reader.uint32())
          };
          break;
        case 92:
          message.event = {
            $case: "playerSetsEmoteV2",
            playerSetsEmoteV2: PlayerSetsEmoteV2.decode(reader, reader.uint32())
          };
          break;
        case 93:
          message.event = {
            $case: "playerSetsFocusModeEndTime",
            playerSetsFocusModeEndTime: PlayerSetsFocusModeEndTime.decode(reader, reader.uint32())
          };
          break;
        case 94:
          message.event = {
            $case: "spaceSetsSpaceMembers",
            spaceSetsSpaceMembers: SpaceSetsSpaceMembers.decode(reader, reader.uint32())
          };
          break;
        case 167:
          message.event = {
            $case: "spaceSetsSpaceUsers",
            spaceSetsSpaceUsers: SpaceSetsSpaceUsers.decode(reader, reader.uint32())
          };
          break;
        case 95:
          message.event = { $case: "customEvent", customEvent: CustomEvent.decode(reader, reader.uint32()) };
          break;
        case 97:
          message.event = { $case: "playerBlocks", playerBlocks: PlayerBlocks.decode(reader, reader.uint32()) };
          break;
        case 98:
          message.event = {
            $case: "playerUpdatesFocusModeStatus",
            playerUpdatesFocusModeStatus: PlayerUpdatesFocusModeStatus.decode(reader, reader.uint32())
          };
          break;
        case 99:
          message.event = { $case: "playerNotifies", playerNotifies: PlayerNotifies.decode(reader, reader.uint32()) };
          break;
        case 108:
          message.event = {
            $case: "playerSetsItemString",
            playerSetsItemString: PlayerSetsItemString.decode(reader, reader.uint32())
          };
          break;
        case 110:
          message.event = {
            $case: "playerSetsFollowTarget",
            playerSetsFollowTarget: PlayerSetsFollowTarget.decode(reader, reader.uint32())
          };
          break;
        case 111:
          message.event = {
            $case: "playerRequestsToLead",
            playerRequestsToLead: PlayerRequestsToLead.decode(reader, reader.uint32())
          };
          break;
        case 112:
          message.event = {
            $case: "playerSetsManualVideoSrc",
            playerSetsManualVideoSrc: PlayerSetsManualVideoSrc.decode(reader, reader.uint32())
          };
          break;
        case 113:
          message.event = {
            $case: "playerSetsIsNpc",
            playerSetsIsNpc: PlayerSetsIsNpc.decode(reader, reader.uint32())
          };
          break;
        case 114:
          message.event = {
            $case: "playerSetsSubtitle",
            playerSetsSubtitle: PlayerSetsSubtitle.decode(reader, reader.uint32())
          };
          break;
        case 115:
          message.event = {
            $case: "mapCommitsChanges",
            mapCommitsChanges: MapCommitsChanges.decode(reader, reader.uint32())
          };
          break;
        case 117:
          message.event = { $case: "mapMoveObject", mapMoveObject: MapMoveObject.decode(reader, reader.uint32()) };
          break;
        case 118:
          message.event = {
            $case: "playerEditsChatMessage",
            playerEditsChatMessage: PlayerEditsChatMessage.decode(reader, reader.uint32())
          };
          break;
        case 119:
          message.event = { $case: "fxShakeObject", fxShakeObject: FXShakeObject.decode(reader, reader.uint32()) };
          break;
        case 120:
          message.event = { $case: "fxShakeCamera", fxShakeCamera: FXShakeCamera.decode(reader, reader.uint32()) };
          break;
        case 121:
          message.event = {
            $case: "playerSendsCommand",
            playerSendsCommand: PlayerSendsCommand.decode(reader, reader.uint32())
          };
          break;
        case 122:
          message.event = {
            $case: "spaceRegistersCommand",
            spaceRegistersCommand: SpaceRegistersCommand.decode(reader, reader.uint32())
          };
          break;
        case 123:
          message.event = {
            $case: "speakerUpdatesSession",
            speakerUpdatesSession: SpeakerUpdatesSession.decode(reader, reader.uint32())
          };
          break;
        case 124:
          message.event = {
            $case: "playerUpdatesInventory",
            playerUpdatesInventory: PlayerUpdatesInventory.decode(reader, reader.uint32())
          };
          break;
        case 125:
          message.event = {
            $case: "spaceUpdatesItems",
            spaceUpdatesItems: SpaceUpdatesItems.decode(reader, reader.uint32())
          };
          break;
        case 126:
          message.event = {
            $case: "playerSetsVehicleId",
            playerSetsVehicleId: PlayerSetsVehicleId.decode(reader, reader.uint32())
          };
          break;
        case 127:
          message.event = {
            $case: "playerSetsSpeedModifier",
            playerSetsSpeedModifier: PlayerSetsSpeedModifier.decode(reader, reader.uint32())
          };
          break;
        case 128:
          message.event = {
            $case: "playerHighFives",
            playerHighFives: PlayerHighFives.decode(reader, reader.uint32())
          };
          break;
        case 130:
          message.event = {
            $case: "spaceStopsSound",
            spaceStopsSound: SpaceStopsSound.decode(reader, reader.uint32())
          };
          break;
        case 131:
          message.event = { $case: "hipToBeSquare", hipToBeSquare: HipToBeSquare.decode(reader, reader.uint32()) };
          break;
        case 132:
          message.event = { $case: "playerCrafts", playerCrafts: PlayerCrafts.decode(reader, reader.uint32()) };
          break;
        case 133:
          message.event = {
            $case: "playerTriggersInventoryItem",
            playerTriggersInventoryItem: PlayerTriggersInventoryItem.decode(reader, reader.uint32())
          };
          break;
        case 134:
          message.event = {
            $case: "playerSetsAllowScreenPointer",
            playerSetsAllowScreenPointer: PlayerSetsAllowScreenPointer.decode(reader, reader.uint32())
          };
          break;
        case 135:
          message.event = {
            $case: "precomputedEnterLocation",
            precomputedEnterLocation: PrecomputedEnterLocation.decode(reader, reader.uint32())
          };
          break;
        case 136:
          message.event = { $case: "gotRequestMute", gotRequestMute: GotRequestMute.decode(reader, reader.uint32()) };
          break;
        case 137:
          message.event = {
            $case: "playerSetsDeskInfo",
            playerSetsDeskInfo: PlayerSetsDeskInfo.decode(reader, reader.uint32())
          };
          break;
        case 138:
          message.event = { $case: "mapSetNooks", mapSetNooks: MapSetNooks.decode(reader, reader.uint32()) };
          break;
        case 139:
          message.event = { $case: "dynamicGates", dynamicGates: DynamicGates.decode(reader, reader.uint32()) };
          break;
        case 140:
          message.event = { $case: "playerWaves", playerWaves: PlayerWaves.decode(reader, reader.uint32()) };
          break;
        case 141:
          message.event = {
            $case: "playerSetsPronouns",
            playerSetsPronouns: PlayerSetsPronouns.decode(reader, reader.uint32())
          };
          break;
        case 142:
          message.event = {
            $case: "playerSetsTitle",
            playerSetsTitle: PlayerSetsTitle.decode(reader, reader.uint32())
          };
          break;
        case 143:
          message.event = {
            $case: "playerSetsTimezone",
            playerSetsTimezone: PlayerSetsTimezone.decode(reader, reader.uint32())
          };
          break;
        case 144:
          message.event = {
            $case: "playerSetsDescription",
            playerSetsDescription: PlayerSetsDescription.decode(reader, reader.uint32())
          };
          break;
        case 145:
          message.event = {
            $case: "playerSetsPhone",
            playerSetsPhone: PlayerSetsPhone.decode(reader, reader.uint32())
          };
          break;
        case 146:
          message.event = {
            $case: "playerSetsPersonalImageUrl",
            playerSetsPersonalImageUrl: PlayerSetsPersonalImageUrl.decode(reader, reader.uint32())
          };
          break;
        case 147:
          message.event = {
            $case: "playerSetsProfileImageUrl",
            playerSetsProfileImageUrl: PlayerSetsProfileImageUrl.decode(reader, reader.uint32())
          };
          break;
        case 148:
          message.event = {
            $case: "spaceSetsCapacity",
            spaceSetsCapacity: SpaceSetsCapacity.decode(reader, reader.uint32())
          };
          break;
        case 149:
          message.event = {
            $case: "spaceOverCapacityDeniesUser",
            spaceOverCapacityDeniesUser: SpaceOverCapacityDeniesUser.decode(reader, reader.uint32())
          };
          break;
        case 150:
          message.event = { $case: "playerSetsAway", playerSetsAway: PlayerSetsAway.decode(reader, reader.uint32()) };
          break;
        case 151:
          message.event = {
            $case: "mapSetCollisionsBits",
            mapSetCollisionsBits: MapSetCollisionsBits.decode(reader, reader.uint32())
          };
          break;
        case 152:
          message.event = { $case: "playerSetsCity", playerSetsCity: PlayerSetsCity.decode(reader, reader.uint32()) };
          break;
        case 153:
          message.event = {
            $case: "playerSetsCountry",
            playerSetsCountry: PlayerSetsCountry.decode(reader, reader.uint32())
          };
          break;
        case 154:
          message.event = {
            $case: "playerSetsStartDate",
            playerSetsStartDate: PlayerSetsStartDate.decode(reader, reader.uint32())
          };
          break;
        case 156:
          message.event = {
            $case: "playerStartsRecording",
            playerStartsRecording: PlayerStartsRecording.decode(reader, reader.uint32())
          };
          break;
        case 157:
          message.event = {
            $case: "accessRequestsUpdated",
            accessRequestsUpdated: AccessRequestsUpdated.decode(reader, reader.uint32())
          };
          break;
        case 158:
          message.event = {
            $case: "accessRequestRespondedTo",
            accessRequestRespondedTo: AccessRequestRespondedTo.decode(reader, reader.uint32())
          };
          break;
        case 159:
          message.event = {
            $case: "spaceSetsGuestPassStatuses",
            spaceSetsGuestPassStatuses: SpaceSetsGuestPassStatuses.decode(reader, reader.uint32())
          };
          break;
        case 160:
          message.event = {
            $case: "playerSetsAvailability",
            playerSetsAvailability: PlayerSetsAvailability.decode(reader, reader.uint32())
          };
          break;
        case 161:
          message.event = {
            $case: "subscriptionsUpdated",
            subscriptionsUpdated: SubscriptionsUpdated.decode(reader, reader.uint32())
          };
          break;
        case 164:
          message.event = {
            $case: "spaceRolePermissionOverrideUpdated",
            spaceRolePermissionOverrideUpdated: SpaceRolePermissionOverrideUpdated.decode(reader, reader.uint32())
          };
          break;
        case 165:
          message.event = {
            $case: "playerSetsLastRaisedHand",
            playerSetsLastRaisedHand: PlayerSetsLastRaisedHand.decode(reader, reader.uint32())
          };
          break;
        case 166:
          message.event = {
            $case: "playerSetsCurrentlyEquippedWearables",
            playerSetsCurrentlyEquippedWearables: PlayerSetsCurrentlyEquippedWearables.decode(reader, reader.uint32())
          };
          break;
        case 168:
          message.event = {
            $case: "playerSetsDisplayEmail",
            playerSetsDisplayEmail: PlayerSetsDisplayEmail.decode(reader, reader.uint32())
          };
          break;
        case 169:
          message.event = {
            $case: "mapDeleteObjectByKey",
            mapDeleteObjectByKey: MapDeleteObjectByKey.decode(reader, reader.uint32())
          };
          break;
        case 170:
          message.event = {
            $case: "mapSetObjectsV2",
            mapSetObjectsV2: MapSetObjectsV2.decode(reader, reader.uint32())
          };
          break;
        case 171:
          message.event = {
            $case: "playerInteractsWithObject",
            playerInteractsWithObject: PlayerInteractsWithObject.decode(reader, reader.uint32())
          };
          break;
        case 172:
          message.event = {
            $case: "playerTriggersObject",
            playerTriggersObject: PlayerTriggersObject.decode(reader, reader.uint32())
          };
          break;
        case 173:
          message.event = {
            $case: "chimeSetsUserInfo",
            chimeSetsUserInfo: ChimeSetsUserInfo.decode(reader, reader.uint32())
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSubscriptionsUpdated() {
  return { subscriptions: [] };
}
const SubscriptionsUpdated = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    for (const v of message.subscriptions) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSubscriptionsUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseServerHeartbeat() {
  return { lastRTT: 0 };
}
const ServerHeartbeat = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.lastRTT !== 0) {
      writer.uint32(8).uint32(message.lastRTT);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerHeartbeat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastRTT = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseInfo() {
  return { message: "" };
}
const Info = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseWarn() {
  return { message: "" };
}
const Warn = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseWarn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseErrorEvent() {
  return { message: "", code: 0 };
}
const ErrorEvent = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.code !== 0) {
      writer.uint32(16).uint32(message.code);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseErrorEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.code = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseReady() {
  return { id: "" };
}
const Ready = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseReady();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseTransactionStatus() {
  return { txnId: 0, succeeded: false };
}
const TransactionStatus = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.txnId !== 0) {
      writer.uint32(8).uint32(message.txnId);
    }
    if (message.succeeded === true) {
      writer.uint32(16).bool(message.succeeded);
    }
    if (message.reason !== void 0) {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTransactionStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txnId = reader.uint32();
          break;
        case 2:
          message.succeeded = reader.bool();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerJoins() {
  return { encId: 0 };
}
const PlayerJoins = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerJoins();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseGotRequestMute() {
  return { muterId: "", video: false };
}
const GotRequestMute = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.muterId !== "") {
      writer.uint32(10).string(message.muterId);
    }
    if (message.video === true) {
      writer.uint32(16).bool(message.video);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGotRequestMute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.muterId = reader.string();
          break;
        case 2:
          message.video = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerMoves() {
  return { encId: 0, lastInputId: 0 };
}
const PlayerMoves = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.x !== void 0) {
      writer.uint32(16).uint32(message.x);
    }
    if (message.y !== void 0) {
      writer.uint32(24).uint32(message.y);
    }
    if (message.direction !== void 0) {
      writer.uint32(32).int32(message.direction);
    }
    if (message.mapId !== void 0) {
      writer.uint32(42).string(message.mapId);
    }
    if (message.lastInputId !== 0) {
      writer.uint32(48).uint32(message.lastInputId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerMoves();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.x = reader.uint32();
          break;
        case 3:
          message.y = reader.uint32();
          break;
        case 4:
          message.direction = reader.int32();
          break;
        case 5:
          message.mapId = reader.string();
          break;
        case 6:
          message.lastInputId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsStatus() {
  return { encId: 0, busy: false };
}
const PlayerSetsStatus = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.busy === true) {
      writer.uint32(16).bool(message.busy);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.busy = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsAvailability() {
  return { encId: 0, status: "" };
}
const PlayerSetsAvailability = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.statusUpdatedAt !== void 0) {
      writer.uint32(26).string(message.statusUpdatedAt);
    }
    if (message.statusEndOption !== void 0) {
      writer.uint32(34).string(message.statusEndOption);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsAvailability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.statusUpdatedAt = reader.string();
          break;
        case 4:
          message.statusEndOption = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSpotlights() {
  return { encId: 0, spotlightedBy: 0, spotlighted: 0 };
}
const PlayerSpotlights = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(16).uint32(message.encId);
    }
    if (message.spotlightedBy !== 0) {
      writer.uint32(8).uint32(message.spotlightedBy);
    }
    if (message.spotlighted !== 0) {
      writer.uint32(24).uint32(message.spotlighted);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSpotlights();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.encId = reader.uint32();
          break;
        case 1:
          message.spotlightedBy = reader.uint32();
          break;
        case 3:
          message.spotlighted = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerRings() {
  return { encId: 0 };
}
const PlayerRings = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerRings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsImagePointer() {
  return { encId: 0, objectId: "", x: 0, y: 0 };
}
const PlayerSetsImagePointer = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.objectId !== "") {
      writer.uint32(18).string(message.objectId);
    }
    if (message.x !== 0) {
      writer.uint32(25).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(33).double(message.y);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsImagePointer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.objectId = reader.string();
          break;
        case 3:
          message.x = reader.double();
          break;
        case 4:
          message.y = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetScreenPointerServer() {
  return { encId: 0, screenId: "", x: 0, y: 0, color: "" };
}
const SetScreenPointerServer = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.screenId !== "") {
      writer.uint32(18).string(message.screenId);
    }
    if (message.x !== 0) {
      writer.uint32(25).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(33).double(message.y);
    }
    if (message.color !== "") {
      writer.uint32(42).string(message.color);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetScreenPointerServer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.screenId = reader.string();
          break;
        case 3:
          message.x = reader.double();
          break;
        case 4:
          message.y = reader.double();
          break;
        case 5:
          message.color = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerChats() {
  return { senderId: "", recipient: "", contents: "", senderName: "", messageType: "", unixTime: 0 };
}
const PlayerChats = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.senderId !== "") {
      writer.uint32(10).string(message.senderId);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.contents !== "") {
      writer.uint32(26).string(message.contents);
    }
    if (message.senderName !== "") {
      writer.uint32(34).string(message.senderName);
    }
    if (message.timestamp !== void 0) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    if (message.messageType !== "") {
      writer.uint32(50).string(message.messageType);
    }
    if (message.unixTime !== 0) {
      writer.uint32(57).double(message.unixTime);
    }
    if (message.id !== void 0) {
      writer.uint32(66).string(message.id);
    }
    if (message.roomId !== void 0) {
      writer.uint32(74).string(message.roomId);
    }
    if (message.approved !== void 0) {
      writer.uint32(80).bool(message.approved);
    }
    if (message.nookId !== void 0) {
      writer.uint32(90).string(message.nookId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerChats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderId = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.contents = reader.string();
          break;
        case 4:
          message.senderName = reader.string();
          break;
        case 5:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.messageType = reader.string();
          break;
        case 7:
          message.unixTime = reader.double();
          break;
        case 8:
          message.id = reader.string();
          break;
        case 9:
          message.roomId = reader.string();
          break;
        case 10:
          message.approved = reader.bool();
          break;
        case 11:
          message.nookId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerWaves() {
  return { encId: 0, targetId: "", isReply: false };
}
const PlayerWaves = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.targetId !== "") {
      writer.uint32(18).string(message.targetId);
    }
    if (message.isReply === true) {
      writer.uint32(24).bool(message.isReply);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerWaves();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        case 3:
          message.isReply = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseTimestamp() {
  return { seconds: 0, nanoseconds: 0 };
}
const Timestamp = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.seconds !== 0) {
      writer.uint32(13).float(message.seconds);
    }
    if (message.nanoseconds !== 0) {
      writer.uint32(21).float(message.nanoseconds);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seconds = reader.float();
          break;
        case 2:
          message.nanoseconds = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerInteractsWithObject() {
  return { encId: 0, mapId: "", key: "" };
}
const PlayerInteractsWithObject = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.mapId !== "") {
      writer.uint32(18).string(message.mapId);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.dataJson !== void 0) {
      writer.uint32(34).string(message.dataJson);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerInteractsWithObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.mapId = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        case 4:
          message.dataJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerGhosts() {
  return { encId: 0, ghost: 0 };
}
const PlayerGhosts = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.ghost !== 0) {
      writer.uint32(16).uint32(message.ghost);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerGhosts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.ghost = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerEntersWhisper() {
  return { encId: 0, whisperRecipient: "", whisperId: "" };
}
const PlayerEntersWhisper = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.whisperRecipient !== "") {
      writer.uint32(18).string(message.whisperRecipient);
    }
    if (message.whisperId !== "") {
      writer.uint32(26).string(message.whisperId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerEntersWhisper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.whisperRecipient = reader.string();
          break;
        case 3:
          message.whisperId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerEntersWhisperV2() {
  return { encId: 0, encIdTarget: 0, whisperId: "" };
}
const PlayerEntersWhisperV2 = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.encIdTarget !== 0) {
      writer.uint32(16).uint32(message.encIdTarget);
    }
    if (message.whisperId !== "") {
      writer.uint32(26).string(message.whisperId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerEntersWhisperV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.encIdTarget = reader.uint32();
          break;
        case 3:
          message.whisperId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerLeavesWhisper() {
  return { encId: 0 };
}
const PlayerLeavesWhisper = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerLeavesWhisper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerActivelySpeaks() {
  return { encId: 0, activelySpeaking: 0 };
}
const PlayerActivelySpeaks = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.activelySpeaking !== 0) {
      writer.uint32(16).uint32(message.activelySpeaking);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerActivelySpeaks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.activelySpeaking = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsEmoteV2() {
  return { encId: 0 };
}
const PlayerSetsEmoteV2 = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.emote !== void 0) {
      writer.uint32(18).string(message.emote);
    }
    if (message.count !== void 0) {
      writer.uint32(24).uint32(message.count);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsEmoteV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.emote = reader.string();
          break;
        case 3:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsLastRaisedHand() {
  return { encId: 0, lastRaisedHand: "" };
}
const PlayerSetsLastRaisedHand = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.lastRaisedHand !== "") {
      writer.uint32(18).string(message.lastRaisedHand);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsLastRaisedHand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.lastRaisedHand = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsLastActive() {
  return { encId: 0, lastActive: "" };
}
const PlayerSetsLastActive = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.lastActive !== "") {
      writer.uint32(18).string(message.lastActive);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsLastActive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.lastActive = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsName() {
  return { encId: 0, name: "" };
}
const PlayerSetsName = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsTextStatus() {
  return { encId: 0, textStatus: "" };
}
const PlayerSetsTextStatus = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.textStatus !== "") {
      writer.uint32(18).string(message.textStatus);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsTextStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.textStatus = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsPronouns() {
  return { encId: 0, pronouns: "" };
}
const PlayerSetsPronouns = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.pronouns !== "") {
      writer.uint32(18).string(message.pronouns);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsPronouns();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.pronouns = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsTitle() {
  return { encId: 0, title: "" };
}
const PlayerSetsTitle = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsTitle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.title = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsCity() {
  return { encId: 0, city: "" };
}
const PlayerSetsCity = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.city !== "") {
      writer.uint32(18).string(message.city);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsCity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.city = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsCountry() {
  return { encId: 0, country: "" };
}
const PlayerSetsCountry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.country !== "") {
      writer.uint32(18).string(message.country);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsCountry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.country = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsStartDate() {
  return { encId: 0, startDate: "" };
}
const PlayerSetsStartDate = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.startDate !== "") {
      writer.uint32(18).string(message.startDate);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsStartDate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.startDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsTimezone() {
  return { encId: 0, timezone: "" };
}
const PlayerSetsTimezone = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.timezone !== "") {
      writer.uint32(18).string(message.timezone);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsTimezone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.timezone = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsPhone() {
  return { encId: 0, phone: "" };
}
const PlayerSetsPhone = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.phone !== "") {
      writer.uint32(18).string(message.phone);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsPhone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.phone = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsDisplayEmail() {
  return { encId: 0, displayEmail: "" };
}
const PlayerSetsDisplayEmail = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.displayEmail !== "") {
      writer.uint32(18).string(message.displayEmail);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsDisplayEmail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.displayEmail = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsDescription() {
  return { encId: 0, description: "" };
}
const PlayerSetsDescription = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsProfileImageUrl() {
  return { encId: 0, profileImageUrl: "" };
}
const PlayerSetsProfileImageUrl = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.profileImageUrl !== "") {
      writer.uint32(18).string(message.profileImageUrl);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsProfileImageUrl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.profileImageUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsPersonalImageUrl() {
  return { encId: 0, personalImageUrl: "" };
}
const PlayerSetsPersonalImageUrl = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.personalImageUrl !== "") {
      writer.uint32(18).string(message.personalImageUrl);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsPersonalImageUrl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.personalImageUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsIsMobile() {
  return { encId: 0, isMobile: false };
}
const PlayerSetsIsMobile = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.isMobile === true) {
      writer.uint32(16).bool(message.isMobile);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsIsMobile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.isMobile = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsEmojiStatus() {
  return { encId: 0, emojiStatus: "" };
}
const PlayerSetsEmojiStatus = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.emojiStatus !== "") {
      writer.uint32(18).string(message.emojiStatus);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsEmojiStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.emojiStatus = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsAffiliation() {
  return { encId: 0, affiliation: "" };
}
const PlayerSetsAffiliation = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.affiliation !== "") {
      writer.uint32(18).string(message.affiliation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsAffiliation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.affiliation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerExits() {
  return { encId: 0 };
}
const PlayerExits = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerExits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsCurrentlyEquippedWearables() {
  return { encId: 0, currentlyEquippedWearables: void 0 };
}
const PlayerSetsCurrentlyEquippedWearables = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.currentlyEquippedWearables !== void 0) {
      DBOutfit.encode(message.currentlyEquippedWearables, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsCurrentlyEquippedWearables();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.currentlyEquippedWearables = DBOutfit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsIsSignedIn() {
  return { encId: 0, isSignedIn: false };
}
const PlayerSetsIsSignedIn = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.isSignedIn === true) {
      writer.uint32(16).bool(message.isSignedIn);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsIsSignedIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.isSignedIn = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceOverwrites() {
  return { spaceData: "" };
}
const SpaceOverwrites = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.spaceData !== "") {
      writer.uint32(10).string(message.spaceData);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceOverwrites();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spaceData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseDynamicGate() {
  return { exposure: 0, spaces: [] };
}
const DynamicGate = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.exposure !== 0) {
      writer.uint32(13).float(message.exposure);
    }
    for (const v of message.spaces) {
      writer.uint32(18).string(v);
    }
    if (message.refreshOnChange !== void 0) {
      writer.uint32(24).bool(message.refreshOnChange);
    }
    if (message.minimumBuildTimestamp !== void 0) {
      writer.uint32(32).uint64(message.minimumBuildTimestamp);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDynamicGate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exposure = reader.float();
          break;
        case 2:
          message.spaces.push(reader.string());
          break;
        case 3:
          message.refreshOnChange = reader.bool();
          break;
        case 4:
          message.minimumBuildTimestamp = longToNumber(reader.uint64());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseDynamicGates() {
  return { livekitEnabled: void 0 };
}
const DynamicGates = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.livekitEnabled !== void 0) {
      DynamicGate.encode(message.livekitEnabled, writer.uint32(10).fork()).ldelim();
    }
    if (message.livekitSelfhostEnabled !== void 0) {
      DynamicGate.encode(message.livekitSelfhostEnabled, writer.uint32(18).fork()).ldelim();
    }
    if (message.agoraEnabled !== void 0) {
      DynamicGate.encode(message.agoraEnabled, writer.uint32(26).fork()).ldelim();
    }
    if (message.chimeEnabled !== void 0) {
      DynamicGate.encode(message.chimeEnabled, writer.uint32(34).fork()).ldelim();
    }
    if (message.gatherEnabled !== void 0) {
      DynamicGate.encode(message.gatherEnabled, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDynamicGates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.livekitEnabled = DynamicGate.decode(reader, reader.uint32());
          break;
        case 2:
          message.livekitSelfhostEnabled = DynamicGate.decode(reader, reader.uint32());
          break;
        case 3:
          message.agoraEnabled = DynamicGate.decode(reader, reader.uint32());
          break;
        case 4:
          message.chimeEnabled = DynamicGate.decode(reader, reader.uint32());
          break;
        case 5:
          message.gatherEnabled = DynamicGate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceSetsSpaceMembers() {
  return { members: {} };
}
const SpaceSetsSpaceMembers = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    Object.entries(message.members).forEach(([key, value]) => {
      SpaceSetsSpaceMembers_MembersEntry.encode({ key, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceSetsSpaceMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SpaceSetsSpaceMembers_MembersEntry.decode(reader, reader.uint32());
          if (entry1.value !== void 0) {
            message.members[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceSetsSpaceMembers_MembersEntry() {
  return { key: "", value: void 0 };
}
const SpaceSetsSpaceMembers_MembersEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      SpaceMemberInfo.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceSetsSpaceMembers_MembersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = SpaceMemberInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseWireSpaceUser() {
  return { role: "" };
}
const WireSpaceUser = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseWireSpaceUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceSetsSpaceUsers() {
  return { spaceUsers: {} };
}
const SpaceSetsSpaceUsers = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    Object.entries(message.spaceUsers).forEach(([key, value]) => {
      SpaceSetsSpaceUsers_SpaceUsersEntry.encode({ key, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceSetsSpaceUsers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SpaceSetsSpaceUsers_SpaceUsersEntry.decode(reader, reader.uint32());
          if (entry1.value !== void 0) {
            message.spaceUsers[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceSetsSpaceUsers_SpaceUsersEntry() {
  return { key: "", value: void 0 };
}
const SpaceSetsSpaceUsers_SpaceUsersEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      WireSpaceUser.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceSetsSpaceUsers_SpaceUsersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = WireSpaceUser.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceIsClosed() {
  return {};
}
const SpaceIsClosed = {
  encode(_, writer = import_minimal.default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceIsClosed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerEntersPortal() {
  return { targetUrl: "" };
}
const PlayerEntersPortal = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.targetUrl !== "") {
      writer.uint32(10).string(message.targetUrl);
    }
    if (message.bypassPrompt !== void 0) {
      writer.uint32(16).bool(message.bypassPrompt);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerEntersPortal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetUrl = reader.string();
          break;
        case 2:
          message.bypassPrompt = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseCookieFound() {
  return { encId: 0 };
}
const CookieFound = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCookieFound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceSetsIdMapping() {
  return { uid: "", encId: 0 };
}
const SpaceSetsIdMapping = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.encId !== 0) {
      writer.uint32(16).uint32(message.encId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceSetsIdMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = reader.string();
          break;
        case 2:
          message.encId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerShootsConfetti() {
  return { encId: 0 };
}
const PlayerShootsConfetti = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerShootsConfetti();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsEventStatus() {
  return { encId: 0, eventStatus: "" };
}
const PlayerSetsEventStatus = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.eventStatus !== "") {
      writer.uint32(18).string(message.eventStatus);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsEventStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.eventStatus = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsInConversation() {
  return { encId: 0, inConversation: false };
}
const PlayerSetsInConversation = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.inConversation === true) {
      writer.uint32(16).bool(message.inConversation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsInConversation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.inConversation = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsCurrentArea() {
  return { encId: 0, currentArea: "" };
}
const PlayerSetsCurrentArea = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.currentArea !== "") {
      writer.uint32(18).string(message.currentArea);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsCurrentArea();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.currentArea = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsGoKartId() {
  return { encId: 0, goKartId: "" };
}
const PlayerSetsGoKartId = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.goKartId !== "") {
      writer.uint32(18).string(message.goKartId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsGoKartId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.goKartId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsVehicleId() {
  return { encId: 0, vehicleId: "", action: "", previousVehicleId: "" };
}
const PlayerSetsVehicleId = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.vehicleId !== "") {
      writer.uint32(18).string(message.vehicleId);
    }
    if (message.action !== "") {
      writer.uint32(26).string(message.action);
    }
    if (message.previousVehicleId !== "") {
      writer.uint32(34).string(message.previousVehicleId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsVehicleId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.vehicleId = reader.string();
          break;
        case 3:
          message.action = reader.string();
          break;
        case 4:
          message.previousVehicleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsSpeedModifier() {
  return { encId: 0, speedModifier: 0 };
}
const PlayerSetsSpeedModifier = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.speedModifier !== 0) {
      writer.uint32(21).float(message.speedModifier);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsSpeedModifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.speedModifier = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsIsAlone() {
  return { encId: 0, isAlone: false };
}
const PlayerSetsIsAlone = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.isAlone === true) {
      writer.uint32(16).bool(message.isAlone);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsIsAlone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.isAlone = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpacePlaysSound() {
  return { src: "", volume: 0 };
}
const SpacePlaysSound = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.src !== "") {
      writer.uint32(18).string(message.src);
    }
    if (message.volume !== 0) {
      writer.uint32(29).float(message.volume);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpacePlaysSound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.src = reader.string();
          break;
        case 3:
          message.volume = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceStopsSound() {
  return { src: "" };
}
const SpaceStopsSound = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.src !== "") {
      writer.uint32(18).string(message.src);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceStopsSound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.src = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsFocusModeEndTime() {
  return { encId: 0, focusModeEndTime: "" };
}
const PlayerSetsFocusModeEndTime = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.focusModeEndTime !== "") {
      writer.uint32(18).string(message.focusModeEndTime);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsFocusModeEndTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.focusModeEndTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerBlocks() {
  return { blockedBy: "", blocked: false };
}
const PlayerBlocks = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.blockedBy !== "") {
      writer.uint32(10).string(message.blockedBy);
    }
    if (message.blocked === true) {
      writer.uint32(16).bool(message.blocked);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerBlocks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockedBy = reader.string();
          break;
        case 2:
          message.blocked = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseCustomEvent() {
  return { name: "", payload: "" };
}
const CustomEvent = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCustomEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerUpdatesFocusModeStatus() {
  return { encId: 0, isInFocusMode: false };
}
const PlayerUpdatesFocusModeStatus = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.isInFocusMode === true) {
      writer.uint32(16).bool(message.isInFocusMode);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerUpdatesFocusModeStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.isInFocusMode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsItemString() {
  return { encId: 0, itemString: "" };
}
const PlayerSetsItemString = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.itemString !== "") {
      writer.uint32(18).string(message.itemString);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsItemString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.itemString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerTriggersObject() {
  return { encId: 0 };
}
const PlayerTriggersObject = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.mapId !== void 0) {
      writer.uint32(18).string(message.mapId);
    }
    if (message.key !== void 0) {
      writer.uint32(26).string(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerTriggersObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.mapId = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerNotifies() {
  return { encId: 0, notification: "" };
}
const PlayerNotifies = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.notification !== "") {
      writer.uint32(18).string(message.notification);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerNotifies();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.notification = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsFollowTarget() {
  return { encId: 0, followTarget: "" };
}
const PlayerSetsFollowTarget = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.followTarget !== "") {
      writer.uint32(18).string(message.followTarget);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsFollowTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.followTarget = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerRequestsToLead() {
  return { encId: 0, snapshot: "" };
}
const PlayerRequestsToLead = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.snapshot !== "") {
      writer.uint32(18).string(message.snapshot);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerRequestsToLead();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.snapshot = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsManualVideoSrc() {
  return { encId: 0, manualVideoSrc: "" };
}
const PlayerSetsManualVideoSrc = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.manualVideoSrc !== "") {
      writer.uint32(18).string(message.manualVideoSrc);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsManualVideoSrc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.manualVideoSrc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsIsNpc() {
  return { encId: 0, isNpc: false };
}
const PlayerSetsIsNpc = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.isNpc === true) {
      writer.uint32(16).bool(message.isNpc);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsIsNpc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.isNpc = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsSubtitle() {
  return { encId: 0, subtitle: "" };
}
const PlayerSetsSubtitle = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.subtitle !== "") {
      writer.uint32(18).string(message.subtitle);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsSubtitle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.subtitle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerCrafts() {
  return { encId: 0, inputs: {} };
}
const PlayerCrafts = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    Object.entries(message.inputs).forEach(([key, value]) => {
      PlayerCrafts_InputsEntry.encode({ key, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerCrafts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          const entry2 = PlayerCrafts_InputsEntry.decode(reader, reader.uint32());
          if (entry2.value !== void 0) {
            message.inputs[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerCrafts_InputsEntry() {
  return { key: "", value: 0 };
}
const PlayerCrafts_InputsEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerCrafts_InputsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapMoveObject() {
  return { mapId: "", objectId: "", targetX: 0, targetY: 0, duration: 0 };
}
const MapMoveObject = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.objectId !== "") {
      writer.uint32(18).string(message.objectId);
    }
    if (message.targetX !== 0) {
      writer.uint32(29).float(message.targetX);
    }
    if (message.targetY !== 0) {
      writer.uint32(37).float(message.targetY);
    }
    if (message.targetXOffset !== void 0) {
      writer.uint32(45).float(message.targetXOffset);
    }
    if (message.targetYOffset !== void 0) {
      writer.uint32(53).float(message.targetYOffset);
    }
    if (message.duration !== 0) {
      writer.uint32(61).float(message.duration);
    }
    if (message.easing !== void 0) {
      writer.uint32(66).string(message.easing);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapMoveObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.objectId = reader.string();
          break;
        case 3:
          message.targetX = reader.float();
          break;
        case 4:
          message.targetY = reader.float();
          break;
        case 5:
          message.targetXOffset = reader.float();
          break;
        case 6:
          message.targetYOffset = reader.float();
          break;
        case 7:
          message.duration = reader.float();
          break;
        case 8:
          message.easing = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerEditsChatMessage() {
  return { id: "" };
}
const PlayerEditsChatMessage = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.likes !== void 0) {
      writer.uint32(16).uint32(message.likes);
    }
    if (message.replied !== void 0) {
      writer.uint32(24).bool(message.replied);
    }
    if (message.reply !== void 0) {
      ChatReply.encode(message.reply, writer.uint32(34).fork()).ldelim();
    }
    if (message.approved !== void 0) {
      writer.uint32(40).bool(message.approved);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerEditsChatMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.likes = reader.uint32();
          break;
        case 3:
          message.replied = reader.bool();
          break;
        case 4:
          message.reply = ChatReply.decode(reader, reader.uint32());
          break;
        case 5:
          message.approved = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseFXShakeObject() {
  return { mapId: "", targetId: "" };
}
const FXShakeObject = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.targetId !== "") {
      writer.uint32(18).string(message.targetId);
    }
    if (message.intensity !== void 0) {
      writer.uint32(29).float(message.intensity);
    }
    if (message.durationMs !== void 0) {
      writer.uint32(37).float(message.durationMs);
    }
    if (message.mode !== void 0) {
      writer.uint32(40).uint32(message.mode);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFXShakeObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        case 3:
          message.intensity = reader.float();
          break;
        case 4:
          message.durationMs = reader.float();
          break;
        case 5:
          message.mode = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseFXShakeCamera() {
  return {};
}
const FXShakeCamera = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.intensity !== void 0) {
      writer.uint32(13).float(message.intensity);
    }
    if (message.durationMs !== void 0) {
      writer.uint32(21).float(message.durationMs);
    }
    if (message.mapId !== void 0) {
      writer.uint32(26).string(message.mapId);
    }
    if (message.targetUserId !== void 0) {
      writer.uint32(34).string(message.targetUserId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFXShakeCamera();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.intensity = reader.float();
          break;
        case 2:
          message.durationMs = reader.float();
          break;
        case 3:
          message.mapId = reader.string();
          break;
        case 4:
          message.targetUserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerHighFives() {
  return { encId: 0, encIdTarget: 0 };
}
const PlayerHighFives = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.encIdTarget !== 0) {
      writer.uint32(16).uint32(message.encIdTarget);
    }
    if (message.emote !== void 0) {
      writer.uint32(26).string(message.emote);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerHighFives();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.encIdTarget = reader.uint32();
          break;
        case 3:
          message.emote = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSendsCommand() {
  return { encId: 0, command: "" };
}
const PlayerSendsCommand = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.command !== "") {
      writer.uint32(18).string(message.command);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSendsCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.command = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceRegistersCommand() {
  return { command: "" };
}
const SpaceRegistersCommand = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.command !== "") {
      writer.uint32(18).string(message.command);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceRegistersCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.command = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerUpdatesInventory() {
  return { encId: 0, items: {}, order: {} };
}
const PlayerUpdatesInventory = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    Object.entries(message.items).forEach(([key, value]) => {
      PlayerUpdatesInventory_ItemsEntry.encode({ key, value }, writer.uint32(18).fork()).ldelim();
    });
    Object.entries(message.order).forEach(([key, value]) => {
      PlayerUpdatesInventory_OrderEntry.encode({ key, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerUpdatesInventory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          const entry2 = PlayerUpdatesInventory_ItemsEntry.decode(reader, reader.uint32());
          if (entry2.value !== void 0) {
            message.items[entry2.key] = entry2.value;
          }
          break;
        case 3:
          const entry3 = PlayerUpdatesInventory_OrderEntry.decode(reader, reader.uint32());
          if (entry3.value !== void 0) {
            message.order[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerUpdatesInventory_ItemsEntry() {
  return { key: "", value: void 0 };
}
const PlayerUpdatesInventory_ItemsEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      InventoryItem.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerUpdatesInventory_ItemsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = InventoryItem.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerUpdatesInventory_OrderEntry() {
  return { key: "", value: "" };
}
const PlayerUpdatesInventory_OrderEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerUpdatesInventory_OrderEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceUpdatesItems() {
  return { items: {} };
}
const SpaceUpdatesItems = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    Object.entries(message.items).forEach(([key, value]) => {
      SpaceUpdatesItems_ItemsEntry.encode({ key, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceUpdatesItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SpaceUpdatesItems_ItemsEntry.decode(reader, reader.uint32());
          if (entry1.value !== void 0) {
            message.items[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceUpdatesItems_ItemsEntry() {
  return { key: "", value: void 0 };
}
const SpaceUpdatesItems_ItemsEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      SpaceItem.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceUpdatesItems_ItemsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = SpaceItem.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerTriggersInventoryItem() {
  return { encId: 0, itemId: "", abilityId: "" };
}
const PlayerTriggersInventoryItem = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.itemId !== "") {
      writer.uint32(18).string(message.itemId);
    }
    if (message.abilityId !== "") {
      writer.uint32(26).string(message.abilityId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerTriggersInventoryItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.itemId = reader.string();
          break;
        case 3:
          message.abilityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsAllowScreenPointer() {
  return { encId: 0, allowScreenPointer: false };
}
const PlayerSetsAllowScreenPointer = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.allowScreenPointer === true) {
      writer.uint32(16).bool(message.allowScreenPointer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsAllowScreenPointer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.allowScreenPointer = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePrecomputedEnterLocation() {
  return { enterLocation: void 0 };
}
const PrecomputedEnterLocation = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.enterLocation !== void 0) {
      MapLocation.encode(message.enterLocation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePrecomputedEnterLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enterLocation = MapLocation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsDeskInfo() {
  return { encId: 0, deskInfo: void 0 };
}
const PlayerSetsDeskInfo = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.deskInfo !== void 0) {
      DeskInfoV2.encode(message.deskInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsDeskInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.deskInfo = DeskInfoV2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceSetsCapacity() {
  return { capacity: 0 };
}
const SpaceSetsCapacity = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.capacity !== 0) {
      writer.uint32(8).uint32(message.capacity);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceSetsCapacity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.capacity = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceOverCapacityDeniesUser() {
  return { userId: "" };
}
const SpaceOverCapacityDeniesUser = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceOverCapacityDeniesUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerSetsAway() {
  return { encId: 0, away: false };
}
const PlayerSetsAway = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.away === true) {
      writer.uint32(16).bool(message.away);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerSetsAway();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.away = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerStartsRecording() {
  return { encId: 0, nookId: "" };
}
const PlayerStartsRecording = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.nookId !== "") {
      writer.uint32(18).string(message.nookId);
    }
    if (message.initializing !== void 0) {
      writer.uint32(24).bool(message.initializing);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerStartsRecording();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          message.nookId = reader.string();
          break;
        case 3:
          message.initializing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseAccessRequest() {
  return { guestId: "", memberId: "", requestedAtUnixTime: 0, guestName: "" };
}
const AccessRequest = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.guestId !== "") {
      writer.uint32(10).string(message.guestId);
    }
    if (message.memberId !== "") {
      writer.uint32(18).string(message.memberId);
    }
    if (message.requestedAtUnixTime !== 0) {
      writer.uint32(24).uint64(message.requestedAtUnixTime);
    }
    if (message.guestName !== "") {
      writer.uint32(34).string(message.guestName);
    }
    if (message.guestCurrentlyEquippedWearables !== void 0) {
      DBOutfit.encode(message.guestCurrentlyEquippedWearables, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAccessRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guestId = reader.string();
          break;
        case 2:
          message.memberId = reader.string();
          break;
        case 3:
          message.requestedAtUnixTime = longToNumber(reader.uint64());
          break;
        case 4:
          message.guestName = reader.string();
          break;
        case 6:
          message.guestCurrentlyEquippedWearables = DBOutfit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseAccessRequestsUpdated() {
  return { requests: [] };
}
const AccessRequestsUpdated = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    for (const v of message.requests) {
      AccessRequest.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAccessRequestsUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requests.push(AccessRequest.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseAccessRequestRespondedTo() {
  return { targetId: "", accepted: false, location: void 0 };
}
const AccessRequestRespondedTo = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.targetId !== "") {
      writer.uint32(10).string(message.targetId);
    }
    if (message.accepted === true) {
      writer.uint32(16).bool(message.accepted);
    }
    if (message.location !== void 0) {
      MapLocation.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAccessRequestRespondedTo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetId = reader.string();
          break;
        case 2:
          message.accepted = reader.bool();
          break;
        case 3:
          message.location = MapLocation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlayerGuestPassStatus() {
  return { userId: "", guestPassStatus: "" };
}
const PlayerGuestPassStatus = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.guestPassStatus !== "") {
      writer.uint32(18).string(message.guestPassStatus);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlayerGuestPassStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.guestPassStatus = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceSetsGuestPassStatuses() {
  return { playerGuestPassStatuses: [] };
}
const SpaceSetsGuestPassStatuses = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    for (const v of message.playerGuestPassStatuses) {
      PlayerGuestPassStatus.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceSetsGuestPassStatuses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerGuestPassStatuses.push(PlayerGuestPassStatus.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetDeskFromNextAvailableDesk() {
  return { desksToIgnore: [] };
}
const SetDeskFromNextAvailableDesk = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.targetId !== void 0) {
      writer.uint32(10).string(message.targetId);
    }
    if (message.preferredDesk !== void 0) {
      MapAndDesk.encode(message.preferredDesk, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.desksToIgnore) {
      MapAndDesk.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetDeskFromNextAvailableDesk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetId = reader.string();
          break;
        case 2:
          message.preferredDesk = MapAndDesk.decode(reader, reader.uint32());
          break;
        case 3:
          message.desksToIgnore.push(MapAndDesk.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpaceRolePermissionOverrideUpdated() {
  return { role: "", permission: "", enabled: false };
}
const SpaceRolePermissionOverrideUpdated = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    if (message.permission !== "") {
      writer.uint32(18).string(message.permission);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpaceRolePermissionOverrideUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;
        case 2:
          message.permission = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseChimeSetsUserInfo() {
  return { resource: "" };
}
const ChimeSetsUserInfo = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.resource !== "") {
      writer.uint32(10).string(message.resource);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseChimeSetsUserInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseClientServerBatch() {
  return { actions: [] };
}
const ClientServerBatch = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    for (const v of message.actions) {
      ClientServerAction.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientServerBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actions.push(ClientServerAction.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseClientServerAction() {
  return { action: void 0 };
}
const ClientServerAction = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    var _a;
    if (message.txnId !== void 0) {
      writer.uint32(800).uint32(message.txnId);
    }
    switch ((_a = message.action) == null ? void 0 : _a.$case) {
      case "clientHeartbeat":
        ClientHeartbeat.encode(message.action.clientHeartbeat, writer.uint32(10).fork()).ldelim();
        break;
      case "clientBackupHeartbeat":
        ClientBackupHeartbeat.encode(message.action.clientBackupHeartbeat, writer.uint32(18).fork()).ldelim();
        break;
      case "updateSubscriptions":
        UpdateSubscriptions.encode(message.action.updateSubscriptions, writer.uint32(26).fork()).ldelim();
        break;
      case "move":
        Move.encode(message.action.move, writer.uint32(42).fork()).ldelim();
        break;
      case "setAffiliation":
        SetAffiliation.encode(message.action.setAffiliation, writer.uint32(58).fork()).ldelim();
        break;
      case "setStatus":
        SetStatus.encode(message.action.setStatus, writer.uint32(66).fork()).ldelim();
        break;
      case "spotlight":
        Spotlight.encode(message.action.spotlight, writer.uint32(74).fork()).ldelim();
        break;
      case "ring":
        Ring.encode(message.action.ring, writer.uint32(82).fork()).ldelim();
        break;
      case "ban":
        Ban.encode(message.action.ban, writer.uint32(98).fork()).ldelim();
        break;
      case "kick":
        Kick.encode(message.action.kick, writer.uint32(106).fork()).ldelim();
        break;
      case "setImpassable":
        SetImpassable.encode(message.action.setImpassable, writer.uint32(114).fork()).ldelim();
        break;
      case "chat":
        Chat.encode(message.action.chat, writer.uint32(122).fork()).ldelim();
        break;
      case "interact":
        Deprecated.encode(message.action.interact, writer.uint32(146).fork()).ldelim();
        break;
      case "enterWhisper":
        EnterWhisper.encode(message.action.enterWhisper, writer.uint32(154).fork()).ldelim();
        break;
      case "leaveWhisper":
        LeaveWhisper.encode(message.action.leaveWhisper, writer.uint32(162).fork()).ldelim();
        break;
      case "setEmojiStatus":
        SetEmojiStatus.encode(message.action.setEmojiStatus, writer.uint32(170).fork()).ldelim();
        break;
      case "activelySpeaking":
        ActivelySpeaking.encode(message.action.activelySpeaking, writer.uint32(178).fork()).ldelim();
        break;
      case "setName":
        SetName.encode(message.action.setName, writer.uint32(194).fork()).ldelim();
        break;
      case "setTextStatus":
        SetTextStatus.encode(message.action.setTextStatus, writer.uint32(202).fork()).ldelim();
        break;
      case "teleport":
        Teleport.encode(message.action.teleport, writer.uint32(210).fork()).ldelim();
        break;
      case "exit":
        Exit.encode(message.action.exit, writer.uint32(218).fork()).ldelim();
        break;
      case "enter":
        Enter.encode(message.action.enter, writer.uint32(226).fork()).ldelim();
        break;
      case "setWorkCondition":
        Deprecated.encode(message.action.setWorkCondition, writer.uint32(234).fork()).ldelim();
        break;
      case "respawn":
        Respawn.encode(message.action.respawn, writer.uint32(242).fork()).ldelim();
        break;
      case "spawn":
        Spawn.encode(message.action.spawn, writer.uint32(250).fork()).ldelim();
        break;
      case "ghost":
        Ghost.encode(message.action.ghost, writer.uint32(258).fork()).ldelim();
        break;
      case "init":
        Init.encode(message.action.init, writer.uint32(266).fork()).ldelim();
        break;
      case "setOutfitString":
        Deprecated.encode(message.action.setOutfitString, writer.uint32(274).fork()).ldelim();
        break;
      case "shootConfetti":
        ShootConfetti.encode(message.action.shootConfetti, writer.uint32(290).fork()).ldelim();
        break;
      case "setEventStatus":
        SetEventStatus.encode(message.action.setEventStatus, writer.uint32(298).fork()).ldelim();
        break;
      case "setInConversation":
        SetInConversation.encode(message.action.setInConversation, writer.uint32(306).fork()).ldelim();
        break;
      case "setCurrentDesk":
        Deprecated.encode(message.action.setCurrentDesk, writer.uint32(314).fork()).ldelim();
        break;
      case "setCurrentArea":
        SetCurrentArea.encode(message.action.setCurrentArea, writer.uint32(322).fork()).ldelim();
        break;
      case "setImagePointer":
        SetImagePointer.encode(message.action.setImagePointer, writer.uint32(330).fork()).ldelim();
        break;
      case "setGoKartId":
        Deprecated.encode(message.action.setGoKartId, writer.uint32(338).fork()).ldelim();
        break;
      case "mapSetDimensions":
        MapSetDimensions.encode(message.action.mapSetDimensions, writer.uint32(346).fork()).ldelim();
        break;
      case "mapSetCollisions":
        MapSetCollisions.encode(message.action.mapSetCollisions, writer.uint32(354).fork()).ldelim();
        break;
      case "mapSetBackgroundImagePath":
        MapSetBackgroundImagePath.encode(message.action.mapSetBackgroundImagePath, writer.uint32(362).fork()).ldelim();
        break;
      case "mapSetForegroundImagePath":
        MapSetForegroundImagePath.encode(message.action.mapSetForegroundImagePath, writer.uint32(370).fork()).ldelim();
        break;
      case "mapSetSprites":
        Deprecated.encode(message.action.mapSetSprites, writer.uint32(378).fork()).ldelim();
        break;
      case "mapSetSpawns":
        MapSetSpawns.encode(message.action.mapSetSpawns, writer.uint32(386).fork()).ldelim();
        break;
      case "mapSetSpaces":
        Deprecated.encode(message.action.mapSetSpaces, writer.uint32(394).fork()).ldelim();
        break;
      case "mapSetPortals":
        MapSetPortals.encode(message.action.mapSetPortals, writer.uint32(402).fork()).ldelim();
        break;
      case "mapSetAnnouncer":
        MapSetAnnouncer.encode(message.action.mapSetAnnouncer, writer.uint32(410).fork()).ldelim();
        break;
      case "mapSetAssets":
        MapSetAssets.encode(message.action.mapSetAssets, writer.uint32(434).fork()).ldelim();
        break;
      case "mapSetObjects":
        Deprecated.encode(message.action.mapSetObjects, writer.uint32(442).fork()).ldelim();
        break;
      case "mapSetName":
        MapSetName.encode(message.action.mapSetName, writer.uint32(450).fork()).ldelim();
        break;
      case "mapSetMuteOnEntry":
        MapSetMuteOnEntry.encode(message.action.mapSetMuteOnEntry, writer.uint32(466).fork()).ldelim();
        break;
      case "mapSetUseDrawnBG":
        MapSetUseDrawnBG.encode(message.action.mapSetUseDrawnBG, writer.uint32(474).fork()).ldelim();
        break;
      case "mapSetWalls":
        MapSetWalls.encode(message.action.mapSetWalls, writer.uint32(482).fork()).ldelim();
        break;
      case "mapSetFloors":
        MapSetFloors.encode(message.action.mapSetFloors, writer.uint32(490).fork()).ldelim();
        break;
      case "mapSetAreas":
        MapSetAreas.encode(message.action.mapSetAreas, writer.uint32(498).fork()).ldelim();
        break;
      case "mapAddObject":
        MapAddObject.encode(message.action.mapAddObject, writer.uint32(506).fork()).ldelim();
        break;
      case "mapDeleteObject":
        Deprecated.encode(message.action.mapDeleteObject, writer.uint32(514).fork()).ldelim();
        break;
      case "mapSetSpawn":
        MapSetSpawn.encode(message.action.mapSetSpawn, writer.uint32(522).fork()).ldelim();
        break;
      case "setIsAlone":
        SetIsAlone.encode(message.action.setIsAlone, writer.uint32(530).fork()).ldelim();
        break;
      case "mapSetMiniMapImagePath":
        MapSetMiniMapImagePath.encode(message.action.mapSetMiniMapImagePath, writer.uint32(538).fork()).ldelim();
        break;
      case "mapSetEnabledChats":
        MapSetEnabledChats.encode(message.action.mapSetEnabledChats, writer.uint32(546).fork()).ldelim();
        break;
      case "mapSetDescription":
        MapSetDescription.encode(message.action.mapSetDescription, writer.uint32(554).fork()).ldelim();
        break;
      case "mapSetDecoration":
        MapSetDecoration.encode(message.action.mapSetDecoration, writer.uint32(562).fork()).ldelim();
        break;
      case "mapSetTutorialTasks":
        MapSetTutorialTasks.encode(message.action.mapSetTutorialTasks, writer.uint32(570).fork()).ldelim();
        break;
      case "playSound":
        PlaySound.encode(message.action.playSound, writer.uint32(578).fork()).ldelim();
        break;
      case "mapSetScript":
        MapSetScript.encode(message.action.mapSetScript, writer.uint32(586).fork()).ldelim();
        break;
      case "setIsMobile":
        SetIsMobile.encode(message.action.setIsMobile, writer.uint32(602).fork()).ldelim();
        break;
      case "setScreenPointer":
        SetScreenPointer.encode(message.action.setScreenPointer, writer.uint32(610).fork()).ldelim();
        break;
      case "setEmoteV2":
        SetEmoteV2.encode(message.action.setEmoteV2, writer.uint32(618).fork()).ldelim();
        break;
      case "setFocusModeEndTime":
        SetFocusModeEndTime.encode(message.action.setFocusModeEndTime, writer.uint32(626).fork()).ldelim();
        break;
      case "mapDeleteObjectById":
        MapDeleteObjectById.encode(message.action.mapDeleteObjectById, writer.uint32(634).fork()).ldelim();
        break;
      case "customAction":
        CustomAction.encode(message.action.customAction, writer.uint32(642).fork()).ldelim();
        break;
      case "block":
        Block.encode(message.action.block, writer.uint32(658).fork()).ldelim();
        break;
      case "setItemString":
        SetItemString.encode(message.action.setItemString, writer.uint32(666).fork()).ldelim();
        break;
      case "triggerItem":
        Deprecated.encode(message.action.triggerItem, writer.uint32(674).fork()).ldelim();
        break;
      case "notify":
        Notify.encode(message.action.notify, writer.uint32(682).fork()).ldelim();
        break;
      case "setFollowTarget":
        SetFollowTarget.encode(message.action.setFollowTarget, writer.uint32(690).fork()).ldelim();
        break;
      case "requestToLead":
        RequestToLead.encode(message.action.requestToLead, writer.uint32(698).fork()).ldelim();
        break;
      case "enterPortal":
        EnterPortal.encode(message.action.enterPortal, writer.uint32(706).fork()).ldelim();
        break;
      case "setManualVideoSrc":
        SetManualVideoSrc.encode(message.action.setManualVideoSrc, writer.uint32(714).fork()).ldelim();
        break;
      case "setSubtitle":
        SetSubtitle.encode(message.action.setSubtitle, writer.uint32(722).fork()).ldelim();
        break;
      case "playerUpdatesSession":
        Deprecated.encode(message.action.playerUpdatesSession, writer.uint32(730).fork()).ldelim();
        break;
      case "mapMoveObject":
        MapMoveObject.encode(message.action.mapMoveObject, writer.uint32(738).fork()).ldelim();
        break;
      case "chatMessageUpdated":
        ChatMessageUpdated.encode(message.action.chatMessageUpdated, writer.uint32(746).fork()).ldelim();
        break;
      case "fxShakeObject":
        FXShakeObject.encode(message.action.fxShakeObject, writer.uint32(754).fork()).ldelim();
        break;
      case "fxShakeCamera":
        FXShakeCamera.encode(message.action.fxShakeCamera, writer.uint32(762).fork()).ldelim();
        break;
      case "registerCommand":
        RegisterCommand.encode(message.action.registerCommand, writer.uint32(770).fork()).ldelim();
        break;
      case "sendCommand":
        SendCommand.encode(message.action.sendCommand, writer.uint32(778).fork()).ldelim();
        break;
      case "speakerUpdatesSession":
        SpeakerUpdatesSession.encode(message.action.speakerUpdatesSession, writer.uint32(786).fork()).ldelim();
        break;
      case "addInventoryItem":
        AddInventoryItem.encode(message.action.addInventoryItem, writer.uint32(810).fork()).ldelim();
        break;
      case "removeInventoryItem":
        RemoveInventoryItem.encode(message.action.removeInventoryItem, writer.uint32(818).fork()).ldelim();
        break;
      case "setVehicleId":
        SetVehicleId.encode(message.action.setVehicleId, writer.uint32(826).fork()).ldelim();
        break;
      case "setSpeedModifier":
        SetSpeedModifier.encode(message.action.setSpeedModifier, writer.uint32(834).fork()).ldelim();
        break;
      case "highFive":
        HighFive.encode(message.action.highFive, writer.uint32(842).fork()).ldelim();
        break;
      case "updateSpaceItems":
        SpaceUpdatesItems.encode(message.action.updateSpaceItems, writer.uint32(858).fork()).ldelim();
        break;
      case "stopSound":
        StopSound.encode(message.action.stopSound, writer.uint32(866).fork()).ldelim();
        break;
      case "hipToBeSquare":
        HipToBeSquare.encode(message.action.hipToBeSquare, writer.uint32(874).fork()).ldelim();
        break;
      case "craft":
        Craft.encode(message.action.craft, writer.uint32(882).fork()).ldelim();
        break;
      case "triggerInventoryItem":
        TriggerInventoryItem.encode(message.action.triggerInventoryItem, writer.uint32(890).fork()).ldelim();
        break;
      case "setAllowScreenPointer":
        SetAllowScreenPointer.encode(message.action.setAllowScreenPointer, writer.uint32(898).fork()).ldelim();
        break;
      case "precomputeEnter":
        PrecomputeEnter.encode(message.action.precomputeEnter, writer.uint32(906).fork()).ldelim();
        break;
      case "requestMute":
        RequestMute.encode(message.action.requestMute, writer.uint32(914).fork()).ldelim();
        break;
      case "setDeskInfo":
        SetDeskInfo.encode(message.action.setDeskInfo, writer.uint32(922).fork()).ldelim();
        break;
      case "mapSetNooks":
        MapSetNooks.encode(message.action.mapSetNooks, writer.uint32(930).fork()).ldelim();
        break;
      case "requestToJoinNook":
        RequestToJoinNook.encode(message.action.requestToJoinNook, writer.uint32(938).fork()).ldelim();
        break;
      case "updateNookPermission":
        UpdateNookPermission.encode(message.action.updateNookPermission, writer.uint32(946).fork()).ldelim();
        break;
      case "wave":
        Wave.encode(message.action.wave, writer.uint32(954).fork()).ldelim();
        break;
      case "setPronouns":
        SetPronouns.encode(message.action.setPronouns, writer.uint32(962).fork()).ldelim();
        break;
      case "setTitle":
        SetTitle.encode(message.action.setTitle, writer.uint32(970).fork()).ldelim();
        break;
      case "setTimezone":
        SetTimezone.encode(message.action.setTimezone, writer.uint32(978).fork()).ldelim();
        break;
      case "setPhone":
        SetPhone.encode(message.action.setPhone, writer.uint32(986).fork()).ldelim();
        break;
      case "setDescription":
        SetDescription.encode(message.action.setDescription, writer.uint32(994).fork()).ldelim();
        break;
      case "setProfileImageUrl":
        SetProfileImageUrl.encode(message.action.setProfileImageUrl, writer.uint32(1002).fork()).ldelim();
        break;
      case "setPersonalImageUrl":
        SetPersonalImageUrl.encode(message.action.setPersonalImageUrl, writer.uint32(1010).fork()).ldelim();
        break;
      case "setAway":
        SetAway.encode(message.action.setAway, writer.uint32(1018).fork()).ldelim();
        break;
      case "setCity":
        SetCity.encode(message.action.setCity, writer.uint32(1026).fork()).ldelim();
        break;
      case "setCountry":
        SetCountry.encode(message.action.setCountry, writer.uint32(1034).fork()).ldelim();
        break;
      case "setStartDate":
        SetStartDate.encode(message.action.setStartDate, writer.uint32(1042).fork()).ldelim();
        break;
      case "startRecording":
        StartRecording.encode(message.action.startRecording, writer.uint32(1050).fork()).ldelim();
        break;
      case "requestAccessViaCheckIn":
        RequestAccessViaCheckIn.encode(message.action.requestAccessViaCheckIn, writer.uint32(1058).fork()).ldelim();
        break;
      case "respondToAccessRequest":
        RespondToAccessRequest.encode(message.action.respondToAccessRequest, writer.uint32(1066).fork()).ldelim();
        break;
      case "setAvailability":
        SetAvailability.encode(message.action.setAvailability, writer.uint32(1074).fork()).ldelim();
        break;
      case "respawnAtDesk":
        RespawnAtDesk.encode(message.action.respawnAtDesk, writer.uint32(1098).fork()).ldelim();
        break;
      case "setDeskFromNextAvailableDesk":
        SetDeskFromNextAvailableDesk.encode(message.action.setDeskFromNextAvailableDesk, writer.uint32(1106).fork()).ldelim();
        break;
      case "setSpaceRolePermissionOverride":
        SetSpaceRolePermissionOverride.encode(message.action.setSpaceRolePermissionOverride, writer.uint32(1114).fork()).ldelim();
        break;
      case "setCurrentlyEquippedWearables":
        SetCurrentlyEquippedWearables.encode(message.action.setCurrentlyEquippedWearables, writer.uint32(1122).fork()).ldelim();
        break;
      case "setDisplayEmail":
        SetDisplayEmail.encode(message.action.setDisplayEmail, writer.uint32(1130).fork()).ldelim();
        break;
      case "mapDeleteObjectByKey":
        MapDeleteObjectByKey.encode(message.action.mapDeleteObjectByKey, writer.uint32(1138).fork()).ldelim();
        break;
      case "mapUpdateObjects":
        MapUpdateObjects.encode(message.action.mapUpdateObjects, writer.uint32(1146).fork()).ldelim();
        break;
      case "interactWithObject":
        InteractWithObject.encode(message.action.interactWithObject, writer.uint32(1154).fork()).ldelim();
        break;
      case "triggerObject":
        TriggerObject.encode(message.action.triggerObject, writer.uint32(1162).fork()).ldelim();
        break;
      case "joinChimeMeeting":
        JoinChimeMeeting.encode(message.action.joinChimeMeeting, writer.uint32(1170).fork()).ldelim();
        break;
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientServerAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 100:
          message.txnId = reader.uint32();
          break;
        case 1:
          message.action = {
            $case: "clientHeartbeat",
            clientHeartbeat: ClientHeartbeat.decode(reader, reader.uint32())
          };
          break;
        case 2:
          message.action = {
            $case: "clientBackupHeartbeat",
            clientBackupHeartbeat: ClientBackupHeartbeat.decode(reader, reader.uint32())
          };
          break;
        case 3:
          message.action = {
            $case: "updateSubscriptions",
            updateSubscriptions: UpdateSubscriptions.decode(reader, reader.uint32())
          };
          break;
        case 5:
          message.action = { $case: "move", move: Move.decode(reader, reader.uint32()) };
          break;
        case 7:
          message.action = { $case: "setAffiliation", setAffiliation: SetAffiliation.decode(reader, reader.uint32()) };
          break;
        case 8:
          message.action = { $case: "setStatus", setStatus: SetStatus.decode(reader, reader.uint32()) };
          break;
        case 9:
          message.action = { $case: "spotlight", spotlight: Spotlight.decode(reader, reader.uint32()) };
          break;
        case 10:
          message.action = { $case: "ring", ring: Ring.decode(reader, reader.uint32()) };
          break;
        case 12:
          message.action = { $case: "ban", ban: Ban.decode(reader, reader.uint32()) };
          break;
        case 13:
          message.action = { $case: "kick", kick: Kick.decode(reader, reader.uint32()) };
          break;
        case 14:
          message.action = { $case: "setImpassable", setImpassable: SetImpassable.decode(reader, reader.uint32()) };
          break;
        case 15:
          message.action = { $case: "chat", chat: Chat.decode(reader, reader.uint32()) };
          break;
        case 18:
          message.action = { $case: "interact", interact: Deprecated.decode(reader, reader.uint32()) };
          break;
        case 19:
          message.action = { $case: "enterWhisper", enterWhisper: EnterWhisper.decode(reader, reader.uint32()) };
          break;
        case 20:
          message.action = { $case: "leaveWhisper", leaveWhisper: LeaveWhisper.decode(reader, reader.uint32()) };
          break;
        case 21:
          message.action = { $case: "setEmojiStatus", setEmojiStatus: SetEmojiStatus.decode(reader, reader.uint32()) };
          break;
        case 22:
          message.action = {
            $case: "activelySpeaking",
            activelySpeaking: ActivelySpeaking.decode(reader, reader.uint32())
          };
          break;
        case 24:
          message.action = { $case: "setName", setName: SetName.decode(reader, reader.uint32()) };
          break;
        case 25:
          message.action = { $case: "setTextStatus", setTextStatus: SetTextStatus.decode(reader, reader.uint32()) };
          break;
        case 26:
          message.action = { $case: "teleport", teleport: Teleport.decode(reader, reader.uint32()) };
          break;
        case 27:
          message.action = { $case: "exit", exit: Exit.decode(reader, reader.uint32()) };
          break;
        case 28:
          message.action = { $case: "enter", enter: Enter.decode(reader, reader.uint32()) };
          break;
        case 29:
          message.action = { $case: "setWorkCondition", setWorkCondition: Deprecated.decode(reader, reader.uint32()) };
          break;
        case 30:
          message.action = { $case: "respawn", respawn: Respawn.decode(reader, reader.uint32()) };
          break;
        case 31:
          message.action = { $case: "spawn", spawn: Spawn.decode(reader, reader.uint32()) };
          break;
        case 32:
          message.action = { $case: "ghost", ghost: Ghost.decode(reader, reader.uint32()) };
          break;
        case 33:
          message.action = { $case: "init", init: Init.decode(reader, reader.uint32()) };
          break;
        case 34:
          message.action = { $case: "setOutfitString", setOutfitString: Deprecated.decode(reader, reader.uint32()) };
          break;
        case 36:
          message.action = { $case: "shootConfetti", shootConfetti: ShootConfetti.decode(reader, reader.uint32()) };
          break;
        case 37:
          message.action = { $case: "setEventStatus", setEventStatus: SetEventStatus.decode(reader, reader.uint32()) };
          break;
        case 38:
          message.action = {
            $case: "setInConversation",
            setInConversation: SetInConversation.decode(reader, reader.uint32())
          };
          break;
        case 39:
          message.action = { $case: "setCurrentDesk", setCurrentDesk: Deprecated.decode(reader, reader.uint32()) };
          break;
        case 40:
          message.action = { $case: "setCurrentArea", setCurrentArea: SetCurrentArea.decode(reader, reader.uint32()) };
          break;
        case 41:
          message.action = {
            $case: "setImagePointer",
            setImagePointer: SetImagePointer.decode(reader, reader.uint32())
          };
          break;
        case 42:
          message.action = { $case: "setGoKartId", setGoKartId: Deprecated.decode(reader, reader.uint32()) };
          break;
        case 43:
          message.action = {
            $case: "mapSetDimensions",
            mapSetDimensions: MapSetDimensions.decode(reader, reader.uint32())
          };
          break;
        case 44:
          message.action = {
            $case: "mapSetCollisions",
            mapSetCollisions: MapSetCollisions.decode(reader, reader.uint32())
          };
          break;
        case 45:
          message.action = {
            $case: "mapSetBackgroundImagePath",
            mapSetBackgroundImagePath: MapSetBackgroundImagePath.decode(reader, reader.uint32())
          };
          break;
        case 46:
          message.action = {
            $case: "mapSetForegroundImagePath",
            mapSetForegroundImagePath: MapSetForegroundImagePath.decode(reader, reader.uint32())
          };
          break;
        case 47:
          message.action = { $case: "mapSetSprites", mapSetSprites: Deprecated.decode(reader, reader.uint32()) };
          break;
        case 48:
          message.action = { $case: "mapSetSpawns", mapSetSpawns: MapSetSpawns.decode(reader, reader.uint32()) };
          break;
        case 49:
          message.action = { $case: "mapSetSpaces", mapSetSpaces: Deprecated.decode(reader, reader.uint32()) };
          break;
        case 50:
          message.action = { $case: "mapSetPortals", mapSetPortals: MapSetPortals.decode(reader, reader.uint32()) };
          break;
        case 51:
          message.action = {
            $case: "mapSetAnnouncer",
            mapSetAnnouncer: MapSetAnnouncer.decode(reader, reader.uint32())
          };
          break;
        case 54:
          message.action = { $case: "mapSetAssets", mapSetAssets: MapSetAssets.decode(reader, reader.uint32()) };
          break;
        case 55:
          message.action = { $case: "mapSetObjects", mapSetObjects: Deprecated.decode(reader, reader.uint32()) };
          break;
        case 56:
          message.action = { $case: "mapSetName", mapSetName: MapSetName.decode(reader, reader.uint32()) };
          break;
        case 58:
          message.action = {
            $case: "mapSetMuteOnEntry",
            mapSetMuteOnEntry: MapSetMuteOnEntry.decode(reader, reader.uint32())
          };
          break;
        case 59:
          message.action = {
            $case: "mapSetUseDrawnBG",
            mapSetUseDrawnBG: MapSetUseDrawnBG.decode(reader, reader.uint32())
          };
          break;
        case 60:
          message.action = { $case: "mapSetWalls", mapSetWalls: MapSetWalls.decode(reader, reader.uint32()) };
          break;
        case 61:
          message.action = { $case: "mapSetFloors", mapSetFloors: MapSetFloors.decode(reader, reader.uint32()) };
          break;
        case 62:
          message.action = { $case: "mapSetAreas", mapSetAreas: MapSetAreas.decode(reader, reader.uint32()) };
          break;
        case 63:
          message.action = { $case: "mapAddObject", mapAddObject: MapAddObject.decode(reader, reader.uint32()) };
          break;
        case 64:
          message.action = { $case: "mapDeleteObject", mapDeleteObject: Deprecated.decode(reader, reader.uint32()) };
          break;
        case 65:
          message.action = { $case: "mapSetSpawn", mapSetSpawn: MapSetSpawn.decode(reader, reader.uint32()) };
          break;
        case 66:
          message.action = { $case: "setIsAlone", setIsAlone: SetIsAlone.decode(reader, reader.uint32()) };
          break;
        case 67:
          message.action = {
            $case: "mapSetMiniMapImagePath",
            mapSetMiniMapImagePath: MapSetMiniMapImagePath.decode(reader, reader.uint32())
          };
          break;
        case 68:
          message.action = {
            $case: "mapSetEnabledChats",
            mapSetEnabledChats: MapSetEnabledChats.decode(reader, reader.uint32())
          };
          break;
        case 69:
          message.action = {
            $case: "mapSetDescription",
            mapSetDescription: MapSetDescription.decode(reader, reader.uint32())
          };
          break;
        case 70:
          message.action = {
            $case: "mapSetDecoration",
            mapSetDecoration: MapSetDecoration.decode(reader, reader.uint32())
          };
          break;
        case 71:
          message.action = {
            $case: "mapSetTutorialTasks",
            mapSetTutorialTasks: MapSetTutorialTasks.decode(reader, reader.uint32())
          };
          break;
        case 72:
          message.action = { $case: "playSound", playSound: PlaySound.decode(reader, reader.uint32()) };
          break;
        case 73:
          message.action = { $case: "mapSetScript", mapSetScript: MapSetScript.decode(reader, reader.uint32()) };
          break;
        case 75:
          message.action = { $case: "setIsMobile", setIsMobile: SetIsMobile.decode(reader, reader.uint32()) };
          break;
        case 76:
          message.action = {
            $case: "setScreenPointer",
            setScreenPointer: SetScreenPointer.decode(reader, reader.uint32())
          };
          break;
        case 77:
          message.action = { $case: "setEmoteV2", setEmoteV2: SetEmoteV2.decode(reader, reader.uint32()) };
          break;
        case 78:
          message.action = {
            $case: "setFocusModeEndTime",
            setFocusModeEndTime: SetFocusModeEndTime.decode(reader, reader.uint32())
          };
          break;
        case 79:
          message.action = {
            $case: "mapDeleteObjectById",
            mapDeleteObjectById: MapDeleteObjectById.decode(reader, reader.uint32())
          };
          break;
        case 80:
          message.action = { $case: "customAction", customAction: CustomAction.decode(reader, reader.uint32()) };
          break;
        case 82:
          message.action = { $case: "block", block: Block.decode(reader, reader.uint32()) };
          break;
        case 83:
          message.action = { $case: "setItemString", setItemString: SetItemString.decode(reader, reader.uint32()) };
          break;
        case 84:
          message.action = { $case: "triggerItem", triggerItem: Deprecated.decode(reader, reader.uint32()) };
          break;
        case 85:
          message.action = { $case: "notify", notify: Notify.decode(reader, reader.uint32()) };
          break;
        case 86:
          message.action = {
            $case: "setFollowTarget",
            setFollowTarget: SetFollowTarget.decode(reader, reader.uint32())
          };
          break;
        case 87:
          message.action = { $case: "requestToLead", requestToLead: RequestToLead.decode(reader, reader.uint32()) };
          break;
        case 88:
          message.action = { $case: "enterPortal", enterPortal: EnterPortal.decode(reader, reader.uint32()) };
          break;
        case 89:
          message.action = {
            $case: "setManualVideoSrc",
            setManualVideoSrc: SetManualVideoSrc.decode(reader, reader.uint32())
          };
          break;
        case 90:
          message.action = { $case: "setSubtitle", setSubtitle: SetSubtitle.decode(reader, reader.uint32()) };
          break;
        case 91:
          message.action = {
            $case: "playerUpdatesSession",
            playerUpdatesSession: Deprecated.decode(reader, reader.uint32())
          };
          break;
        case 92:
          message.action = { $case: "mapMoveObject", mapMoveObject: MapMoveObject.decode(reader, reader.uint32()) };
          break;
        case 93:
          message.action = {
            $case: "chatMessageUpdated",
            chatMessageUpdated: ChatMessageUpdated.decode(reader, reader.uint32())
          };
          break;
        case 94:
          message.action = { $case: "fxShakeObject", fxShakeObject: FXShakeObject.decode(reader, reader.uint32()) };
          break;
        case 95:
          message.action = { $case: "fxShakeCamera", fxShakeCamera: FXShakeCamera.decode(reader, reader.uint32()) };
          break;
        case 96:
          message.action = {
            $case: "registerCommand",
            registerCommand: RegisterCommand.decode(reader, reader.uint32())
          };
          break;
        case 97:
          message.action = { $case: "sendCommand", sendCommand: SendCommand.decode(reader, reader.uint32()) };
          break;
        case 98:
          message.action = {
            $case: "speakerUpdatesSession",
            speakerUpdatesSession: SpeakerUpdatesSession.decode(reader, reader.uint32())
          };
          break;
        case 101:
          message.action = {
            $case: "addInventoryItem",
            addInventoryItem: AddInventoryItem.decode(reader, reader.uint32())
          };
          break;
        case 102:
          message.action = {
            $case: "removeInventoryItem",
            removeInventoryItem: RemoveInventoryItem.decode(reader, reader.uint32())
          };
          break;
        case 103:
          message.action = { $case: "setVehicleId", setVehicleId: SetVehicleId.decode(reader, reader.uint32()) };
          break;
        case 104:
          message.action = {
            $case: "setSpeedModifier",
            setSpeedModifier: SetSpeedModifier.decode(reader, reader.uint32())
          };
          break;
        case 105:
          message.action = { $case: "highFive", highFive: HighFive.decode(reader, reader.uint32()) };
          break;
        case 107:
          message.action = {
            $case: "updateSpaceItems",
            updateSpaceItems: SpaceUpdatesItems.decode(reader, reader.uint32())
          };
          break;
        case 108:
          message.action = { $case: "stopSound", stopSound: StopSound.decode(reader, reader.uint32()) };
          break;
        case 109:
          message.action = { $case: "hipToBeSquare", hipToBeSquare: HipToBeSquare.decode(reader, reader.uint32()) };
          break;
        case 110:
          message.action = { $case: "craft", craft: Craft.decode(reader, reader.uint32()) };
          break;
        case 111:
          message.action = {
            $case: "triggerInventoryItem",
            triggerInventoryItem: TriggerInventoryItem.decode(reader, reader.uint32())
          };
          break;
        case 112:
          message.action = {
            $case: "setAllowScreenPointer",
            setAllowScreenPointer: SetAllowScreenPointer.decode(reader, reader.uint32())
          };
          break;
        case 113:
          message.action = {
            $case: "precomputeEnter",
            precomputeEnter: PrecomputeEnter.decode(reader, reader.uint32())
          };
          break;
        case 114:
          message.action = { $case: "requestMute", requestMute: RequestMute.decode(reader, reader.uint32()) };
          break;
        case 115:
          message.action = { $case: "setDeskInfo", setDeskInfo: SetDeskInfo.decode(reader, reader.uint32()) };
          break;
        case 116:
          message.action = { $case: "mapSetNooks", mapSetNooks: MapSetNooks.decode(reader, reader.uint32()) };
          break;
        case 117:
          message.action = {
            $case: "requestToJoinNook",
            requestToJoinNook: RequestToJoinNook.decode(reader, reader.uint32())
          };
          break;
        case 118:
          message.action = {
            $case: "updateNookPermission",
            updateNookPermission: UpdateNookPermission.decode(reader, reader.uint32())
          };
          break;
        case 119:
          message.action = { $case: "wave", wave: Wave.decode(reader, reader.uint32()) };
          break;
        case 120:
          message.action = { $case: "setPronouns", setPronouns: SetPronouns.decode(reader, reader.uint32()) };
          break;
        case 121:
          message.action = { $case: "setTitle", setTitle: SetTitle.decode(reader, reader.uint32()) };
          break;
        case 122:
          message.action = { $case: "setTimezone", setTimezone: SetTimezone.decode(reader, reader.uint32()) };
          break;
        case 123:
          message.action = { $case: "setPhone", setPhone: SetPhone.decode(reader, reader.uint32()) };
          break;
        case 124:
          message.action = { $case: "setDescription", setDescription: SetDescription.decode(reader, reader.uint32()) };
          break;
        case 125:
          message.action = {
            $case: "setProfileImageUrl",
            setProfileImageUrl: SetProfileImageUrl.decode(reader, reader.uint32())
          };
          break;
        case 126:
          message.action = {
            $case: "setPersonalImageUrl",
            setPersonalImageUrl: SetPersonalImageUrl.decode(reader, reader.uint32())
          };
          break;
        case 127:
          message.action = { $case: "setAway", setAway: SetAway.decode(reader, reader.uint32()) };
          break;
        case 128:
          message.action = { $case: "setCity", setCity: SetCity.decode(reader, reader.uint32()) };
          break;
        case 129:
          message.action = { $case: "setCountry", setCountry: SetCountry.decode(reader, reader.uint32()) };
          break;
        case 130:
          message.action = { $case: "setStartDate", setStartDate: SetStartDate.decode(reader, reader.uint32()) };
          break;
        case 131:
          message.action = { $case: "startRecording", startRecording: StartRecording.decode(reader, reader.uint32()) };
          break;
        case 132:
          message.action = {
            $case: "requestAccessViaCheckIn",
            requestAccessViaCheckIn: RequestAccessViaCheckIn.decode(reader, reader.uint32())
          };
          break;
        case 133:
          message.action = {
            $case: "respondToAccessRequest",
            respondToAccessRequest: RespondToAccessRequest.decode(reader, reader.uint32())
          };
          break;
        case 134:
          message.action = {
            $case: "setAvailability",
            setAvailability: SetAvailability.decode(reader, reader.uint32())
          };
          break;
        case 137:
          message.action = { $case: "respawnAtDesk", respawnAtDesk: RespawnAtDesk.decode(reader, reader.uint32()) };
          break;
        case 138:
          message.action = {
            $case: "setDeskFromNextAvailableDesk",
            setDeskFromNextAvailableDesk: SetDeskFromNextAvailableDesk.decode(reader, reader.uint32())
          };
          break;
        case 139:
          message.action = {
            $case: "setSpaceRolePermissionOverride",
            setSpaceRolePermissionOverride: SetSpaceRolePermissionOverride.decode(reader, reader.uint32())
          };
          break;
        case 140:
          message.action = {
            $case: "setCurrentlyEquippedWearables",
            setCurrentlyEquippedWearables: SetCurrentlyEquippedWearables.decode(reader, reader.uint32())
          };
          break;
        case 141:
          message.action = {
            $case: "setDisplayEmail",
            setDisplayEmail: SetDisplayEmail.decode(reader, reader.uint32())
          };
          break;
        case 142:
          message.action = {
            $case: "mapDeleteObjectByKey",
            mapDeleteObjectByKey: MapDeleteObjectByKey.decode(reader, reader.uint32())
          };
          break;
        case 143:
          message.action = {
            $case: "mapUpdateObjects",
            mapUpdateObjects: MapUpdateObjects.decode(reader, reader.uint32())
          };
          break;
        case 144:
          message.action = {
            $case: "interactWithObject",
            interactWithObject: InteractWithObject.decode(reader, reader.uint32())
          };
          break;
        case 145:
          message.action = { $case: "triggerObject", triggerObject: TriggerObject.decode(reader, reader.uint32()) };
          break;
        case 146:
          message.action = {
            $case: "joinChimeMeeting",
            joinChimeMeeting: JoinChimeMeeting.decode(reader, reader.uint32())
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseClientHeartbeat() {
  return {};
}
const ClientHeartbeat = {
  encode(_, writer = import_minimal.default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientHeartbeat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseClientBackupHeartbeat() {
  return {};
}
const ClientBackupHeartbeat = {
  encode(_, writer = import_minimal.default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientBackupHeartbeat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseUpdateSubscriptions() {
  return { subscriptions: {}, mapUpdateIds: {} };
}
const UpdateSubscriptions = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    Object.entries(message.subscriptions).forEach(([key, value]) => {
      UpdateSubscriptions_SubscriptionsEntry.encode({ key, value }, writer.uint32(10).fork()).ldelim();
    });
    Object.entries(message.mapUpdateIds).forEach(([key, value]) => {
      UpdateSubscriptions_MapUpdateIdsEntry.encode({ key, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUpdateSubscriptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = UpdateSubscriptions_SubscriptionsEntry.decode(reader, reader.uint32());
          if (entry1.value !== void 0) {
            message.subscriptions[entry1.key] = entry1.value;
          }
          break;
        case 2:
          const entry2 = UpdateSubscriptions_MapUpdateIdsEntry.decode(reader, reader.uint32());
          if (entry2.value !== void 0) {
            message.mapUpdateIds[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseUpdateSubscriptions_SubscriptionsEntry() {
  return { key: "", value: false };
}
const UpdateSubscriptions_SubscriptionsEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUpdateSubscriptions_SubscriptionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseUpdateSubscriptions_MapUpdateIdsEntry() {
  return { key: "", value: 0 };
}
const UpdateSubscriptions_MapUpdateIdsEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUpdateSubscriptions_MapUpdateIdsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = longToNumber(reader.uint64());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMove() {
  return { dir: 0, stopped: false, inputId: 0 };
}
const Move = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.dir !== 0) {
      writer.uint32(8).int32(message.dir);
    }
    if (message.stopped === true) {
      writer.uint32(16).bool(message.stopped);
    }
    if (message.inputId !== 0) {
      writer.uint32(24).uint32(message.inputId);
    }
    if (message.targetId !== void 0) {
      writer.uint32(34).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dir = reader.int32();
          break;
        case 2:
          message.stopped = reader.bool();
          break;
        case 3:
          message.inputId = reader.uint32();
          break;
        case 4:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseRequestMute() {
  return { target: "", video: false };
}
const RequestMute = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.target !== "") {
      writer.uint32(10).string(message.target);
    }
    if (message.video === true) {
      writer.uint32(16).bool(message.video);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestMute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target = reader.string();
          break;
        case 2:
          message.video = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetAffiliation() {
  return { affiliation: "" };
}
const SetAffiliation = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.affiliation !== "") {
      writer.uint32(10).string(message.affiliation);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetAffiliation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.affiliation = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetStatus() {
  return { status: false };
}
const SetStatus = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.status === true) {
      writer.uint32(8).bool(message.status);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.bool();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetAvailability() {
  return { availability: "" };
}
const SetAvailability = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.availability !== "") {
      writer.uint32(10).string(message.availability);
    }
    if (message.endOption !== void 0) {
      writer.uint32(18).string(message.endOption);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetAvailability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.availability = reader.string();
          break;
        case 2:
          message.endOption = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetCurrentlyEquippedWearables() {
  return { currentlyEquippedWearables: void 0 };
}
const SetCurrentlyEquippedWearables = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.currentlyEquippedWearables !== void 0) {
      DBOutfit.encode(message.currentlyEquippedWearables, writer.uint32(10).fork()).ldelim();
    }
    if (message.targetId !== void 0) {
      writer.uint32(26).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetCurrentlyEquippedWearables();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentlyEquippedWearables = DBOutfit.decode(reader, reader.uint32());
          break;
        case 3:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpotlight() {
  return { spotlightedUser: "", isSpotlighted: false };
}
const Spotlight = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.spotlightedUser !== "") {
      writer.uint32(10).string(message.spotlightedUser);
    }
    if (message.isSpotlighted === true) {
      writer.uint32(16).bool(message.isSpotlighted);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpotlight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotlightedUser = reader.string();
          break;
        case 2:
          message.isSpotlighted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseRing() {
  return { user: "" };
}
const Ring = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetImagePointer() {
  return { objectId: "", x: 0, y: 0 };
}
const SetImagePointer = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.objectId !== "") {
      writer.uint32(10).string(message.objectId);
    }
    if (message.x !== 0) {
      writer.uint32(17).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(25).double(message.y);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetImagePointer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.objectId = reader.string();
          break;
        case 2:
          message.x = reader.double();
          break;
        case 3:
          message.y = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetScreenPointer() {
  return { screenId: "", x: 0, y: 0 };
}
const SetScreenPointer = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.screenId !== "") {
      writer.uint32(10).string(message.screenId);
    }
    if (message.x !== 0) {
      writer.uint32(17).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(25).double(message.y);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetScreenPointer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.screenId = reader.string();
          break;
        case 2:
          message.x = reader.double();
          break;
        case 3:
          message.y = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseBan() {
  return { user: "" };
}
const Ban = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseKick() {
  return { user: "" };
}
const Kick = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseKick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseBlock() {
  return { blockedUserId: "", blocked: false };
}
const Block = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.blockedUserId !== "") {
      writer.uint32(10).string(message.blockedUserId);
    }
    if (message.blocked === true) {
      writer.uint32(16).bool(message.blocked);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockedUserId = reader.string();
          break;
        case 2:
          message.blocked = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetImpassable() {
  return { mapId: "", x: 0, y: 0, impassable: false };
}
const SetImpassable = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.x !== 0) {
      writer.uint32(16).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).uint32(message.y);
    }
    if (message.impassable === true) {
      writer.uint32(32).bool(message.impassable);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetImpassable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.x = reader.uint32();
          break;
        case 3:
          message.y = reader.uint32();
          break;
        case 4:
          message.impassable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseChat() {
  return { chatRecipient: "", contents: "", localPlayerIds: [], mapId: "" };
}
const Chat = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.chatRecipient !== "") {
      writer.uint32(10).string(message.chatRecipient);
    }
    if (message.contents !== "") {
      writer.uint32(18).string(message.contents);
    }
    for (const v of message.localPlayerIds) {
      writer.uint32(26).string(v);
    }
    if (message.mapId !== "") {
      writer.uint32(34).string(message.mapId);
    }
    if (message.id !== void 0) {
      writer.uint32(42).string(message.id);
    }
    if (message.nookId !== void 0) {
      writer.uint32(50).string(message.nookId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatRecipient = reader.string();
          break;
        case 2:
          message.contents = reader.string();
          break;
        case 3:
          message.localPlayerIds.push(reader.string());
          break;
        case 4:
          message.mapId = reader.string();
          break;
        case 5:
          message.id = reader.string();
          break;
        case 6:
          message.nookId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseNotify() {
  return { notification: "" };
}
const Notify = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.notification !== "") {
      writer.uint32(10).string(message.notification);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNotify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notification = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseInteractWithObject() {
  return { mapId: "", key: "" };
}
const InteractWithObject = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.dataJson !== void 0) {
      writer.uint32(26).string(message.dataJson);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInteractWithObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.dataJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseActivelySpeaking() {
  return { activelySpeaking: false };
}
const ActivelySpeaking = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.activelySpeaking === true) {
      writer.uint32(8).bool(message.activelySpeaking);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseActivelySpeaking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activelySpeaking = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseEnterWhisper() {
  return { recipientId: "", dir: 0 };
}
const EnterWhisper = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.recipientId !== "") {
      writer.uint32(10).string(message.recipientId);
    }
    if (message.dir !== 0) {
      writer.uint32(16).int32(message.dir);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEnterWhisper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipientId = reader.string();
          break;
        case 2:
          message.dir = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseLeaveWhisper() {
  return {};
}
const LeaveWhisper = {
  encode(_, writer = import_minimal.default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLeaveWhisper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseGhost() {
  return { ghost: 0 };
}
const Ghost = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.ghost !== 0) {
      writer.uint32(8).uint32(message.ghost);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGhost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ghost = reader.uint32();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetEmoteV2() {
  return {};
}
const SetEmoteV2 = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.emote !== void 0) {
      writer.uint32(10).string(message.emote);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    if (message.count !== void 0) {
      writer.uint32(24).uint32(message.count);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetEmoteV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.emote = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        case 3:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetName() {
  return { name: "" };
}
const SetName = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetTextStatus() {
  return { textStatus: "" };
}
const SetTextStatus = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.textStatus !== "") {
      writer.uint32(10).string(message.textStatus);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetTextStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.textStatus = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetPronouns() {
  return { pronouns: "" };
}
const SetPronouns = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.pronouns !== "") {
      writer.uint32(10).string(message.pronouns);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetPronouns();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pronouns = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetTitle() {
  return { title: "" };
}
const SetTitle = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetTitle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetCity() {
  return { city: "" };
}
const SetCity = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.city !== "") {
      writer.uint32(10).string(message.city);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetCity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.city = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetCountry() {
  return { country: "" };
}
const SetCountry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.country !== "") {
      writer.uint32(10).string(message.country);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetCountry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.country = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetStartDate() {
  return { startDate: "" };
}
const SetStartDate = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.startDate !== "") {
      writer.uint32(10).string(message.startDate);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetStartDate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startDate = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetTimezone() {
  return { timezone: "" };
}
const SetTimezone = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.timezone !== "") {
      writer.uint32(10).string(message.timezone);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetTimezone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timezone = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetPhone() {
  return { phone: "" };
}
const SetPhone = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.phone !== "") {
      writer.uint32(10).string(message.phone);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetPhone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.phone = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetDisplayEmail() {
  return { displayEmail: "" };
}
const SetDisplayEmail = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.displayEmail !== "") {
      writer.uint32(10).string(message.displayEmail);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetDisplayEmail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displayEmail = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetDescription() {
  return { description: "" };
}
const SetDescription = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetProfileImageUrl() {
  return { profileImageUrl: "" };
}
const SetProfileImageUrl = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.profileImageUrl !== "") {
      writer.uint32(10).string(message.profileImageUrl);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetProfileImageUrl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profileImageUrl = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetPersonalImageUrl() {
  return { personalImageUrl: "" };
}
const SetPersonalImageUrl = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.personalImageUrl !== "") {
      writer.uint32(10).string(message.personalImageUrl);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetPersonalImageUrl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.personalImageUrl = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseExit() {
  return {};
}
const Exit = {
  encode(_, writer = import_minimal.default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseEnter() {
  return {};
}
const Enter = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.info !== void 0) {
      PlayerInitInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    if (message.spawnToken !== void 0) {
      writer.uint32(18).string(message.spawnToken);
    }
    if (message.targetId !== void 0) {
      writer.uint32(26).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEnter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = PlayerInitInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.spawnToken = reader.string();
          break;
        case 3:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePrecomputeEnter() {
  return {};
}
const PrecomputeEnter = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.enterLocation !== void 0) {
      MapLocation.encode(message.enterLocation, writer.uint32(10).fork()).ldelim();
    }
    if (message.spawnToken !== void 0) {
      writer.uint32(18).string(message.spawnToken);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePrecomputeEnter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enterLocation = MapLocation.decode(reader, reader.uint32());
          break;
        case 2:
          message.spawnToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetEmojiStatus() {
  return { emojiStatus: "" };
}
const SetEmojiStatus = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.emojiStatus !== "") {
      writer.uint32(10).string(message.emojiStatus);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetEmojiStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.emojiStatus = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseTeleport() {
  return { mapId: "", x: 0, y: 0 };
}
const Teleport = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.x !== 0) {
      writer.uint32(16).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).uint32(message.y);
    }
    if (message.targetId !== void 0) {
      writer.uint32(34).string(message.targetId);
    }
    if (message.direction !== void 0) {
      writer.uint32(40).int32(message.direction);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTeleport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.x = reader.uint32();
          break;
        case 3:
          message.y = reader.uint32();
          break;
        case 4:
          message.targetId = reader.string();
          break;
        case 5:
          message.direction = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpawn() {
  return { spawnToken: "" };
}
const Spawn = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.spawnToken !== "") {
      writer.uint32(10).string(message.spawnToken);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpawn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spawnToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseRespawn() {
  return {};
}
const Respawn = {
  encode(_, writer = import_minimal.default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRespawn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseRespawnAtDesk() {
  return {};
}
const RespawnAtDesk = {
  encode(_, writer = import_minimal.default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRespawnAtDesk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseRequestToJoinNook() {
  return { nookId: "", mapId: "" };
}
const RequestToJoinNook = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.nookId !== "") {
      writer.uint32(10).string(message.nookId);
    }
    if (message.mapId !== "") {
      writer.uint32(18).string(message.mapId);
    }
    if (message.name !== void 0) {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestToJoinNook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nookId = reader.string();
          break;
        case 2:
          message.mapId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseUpdateNookPermission() {
  return { playerId: "", nookId: "", granted: false };
}
const UpdateNookPermission = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.playerId !== "") {
      writer.uint32(10).string(message.playerId);
    }
    if (message.nookId !== "") {
      writer.uint32(18).string(message.nookId);
    }
    if (message.granted === true) {
      writer.uint32(24).bool(message.granted);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUpdateNookPermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerId = reader.string();
          break;
        case 2:
          message.nookId = reader.string();
          break;
        case 3:
          message.granted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseInit() {
  return { spaceId: "", auth: void 0 };
}
const Init = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    var _a;
    if (message.spaceId !== "") {
      writer.uint32(10).string(message.spaceId);
    }
    switch ((_a = message.auth) == null ? void 0 : _a.$case) {
      case "token":
        writer.uint32(18).string(message.auth.token);
        break;
      case "apiKey":
        writer.uint32(26).string(message.auth.apiKey);
        break;
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spaceId = reader.string();
          break;
        case 2:
          message.auth = { $case: "token", token: reader.string() };
          break;
        case 3:
          message.auth = { $case: "apiKey", apiKey: reader.string() };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapAddObject() {
  return { mapId: "", object: void 0 };
}
const MapAddObject = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.object !== void 0) {
      WireObject.encode(message.object, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapAddObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.object = WireObject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapUpdateObjects() {
  return { mapId: "", objects: {} };
}
const MapUpdateObjects = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    Object.entries(message.objects).forEach(([key, value]) => {
      MapUpdateObjects_ObjectsEntry.encode({ key, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.updatesAreOverwrites !== void 0) {
      writer.uint32(24).bool(message.updatesAreOverwrites);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapUpdateObjects();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          const entry2 = MapUpdateObjects_ObjectsEntry.decode(reader, reader.uint32());
          if (entry2.value !== void 0) {
            message.objects[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.updatesAreOverwrites = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapUpdateObjects_ObjectsEntry() {
  return { key: "", value: void 0 };
}
const MapUpdateObjects_ObjectsEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      WireObject.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapUpdateObjects_ObjectsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = WireObject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseShootConfetti() {
  return {};
}
const ShootConfetti = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.targetId !== void 0) {
      writer.uint32(10).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseShootConfetti();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetEventStatus() {
  return { eventStatus: "" };
}
const SetEventStatus = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.eventStatus !== "") {
      writer.uint32(10).string(message.eventStatus);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetEventStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventStatus = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetInConversation() {
  return { inConversation: false };
}
const SetInConversation = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.inConversation === true) {
      writer.uint32(8).bool(message.inConversation);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetInConversation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inConversation = reader.bool();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetCurrentArea() {
  return { currentArea: "" };
}
const SetCurrentArea = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.currentArea !== "") {
      writer.uint32(10).string(message.currentArea);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetCurrentArea();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentArea = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetVehicleId() {
  return { vehicleId: "" };
}
const SetVehicleId = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.vehicleId !== "") {
      writer.uint32(10).string(message.vehicleId);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    if (message.action !== void 0) {
      writer.uint32(26).string(message.action);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetVehicleId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vehicleId = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        case 3:
          message.action = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetSpeedModifier() {
  return { speedModifier: 0 };
}
const SetSpeedModifier = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.speedModifier !== 0) {
      writer.uint32(13).float(message.speedModifier);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetSpeedModifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.speedModifier = reader.float();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetIsAlone() {
  return { isAlone: false };
}
const SetIsAlone = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.isAlone === true) {
      writer.uint32(8).bool(message.isAlone);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetIsAlone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isAlone = reader.bool();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetIsMobile() {
  return { isMobile: false };
}
const SetIsMobile = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.isMobile === true) {
      writer.uint32(8).bool(message.isMobile);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetIsMobile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isMobile = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBasePlaySound() {
  return { src: "", volume: 0 };
}
const PlaySound = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.src !== "") {
      writer.uint32(10).string(message.src);
    }
    if (message.volume !== 0) {
      writer.uint32(21).float(message.volume);
    }
    if (message.targetId !== void 0) {
      writer.uint32(26).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlaySound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.src = reader.string();
          break;
        case 2:
          message.volume = reader.float();
          break;
        case 3:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseStopSound() {
  return { src: "" };
}
const StopSound = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.src !== "") {
      writer.uint32(10).string(message.src);
    }
    if (message.targetId !== void 0) {
      writer.uint32(26).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStopSound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.src = reader.string();
          break;
        case 3:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetFocusModeEndTime() {
  return { focusModeEndTime: "" };
}
const SetFocusModeEndTime = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.focusModeEndTime !== "") {
      writer.uint32(10).string(message.focusModeEndTime);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetFocusModeEndTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.focusModeEndTime = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetItemString() {
  return { itemString: "" };
}
const SetItemString = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.itemString !== "") {
      writer.uint32(10).string(message.itemString);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetItemString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemString = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseTriggerObject() {
  return {};
}
const TriggerObject = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== void 0) {
      writer.uint32(10).string(message.mapId);
    }
    if (message.key !== void 0) {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTriggerObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseCustomAction() {
  return { name: "", payload: "", recipients: [] };
}
const CustomAction = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    for (const v of message.recipients) {
      writer.uint32(26).string(v);
    }
    if (message.sendToAll !== void 0) {
      writer.uint32(32).bool(message.sendToAll);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCustomAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.payload = reader.string();
          break;
        case 3:
          message.recipients.push(reader.string());
          break;
        case 4:
          message.sendToAll = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetFollowTarget() {
  return { followTarget: "" };
}
const SetFollowTarget = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.followTarget !== "") {
      writer.uint32(10).string(message.followTarget);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetFollowTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.followTarget = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseRequestToLead() {
  return { target: "", snapshot: "" };
}
const RequestToLead = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.target !== "") {
      writer.uint32(10).string(message.target);
    }
    if (message.snapshot !== "") {
      writer.uint32(18).string(message.snapshot);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestToLead();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target = reader.string();
          break;
        case 2:
          message.snapshot = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseEnterPortal() {
  return { targetUrl: "" };
}
const EnterPortal = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.targetUrl !== "") {
      writer.uint32(10).string(message.targetUrl);
    }
    if (message.bypassPrompt !== void 0) {
      writer.uint32(16).bool(message.bypassPrompt);
    }
    if (message.targetId !== void 0) {
      writer.uint32(26).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEnterPortal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetUrl = reader.string();
          break;
        case 2:
          message.bypassPrompt = reader.bool();
          break;
        case 3:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetManualVideoSrc() {
  return { manualVideoSrc: "" };
}
const SetManualVideoSrc = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.manualVideoSrc !== "") {
      writer.uint32(10).string(message.manualVideoSrc);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetManualVideoSrc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.manualVideoSrc = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetSubtitle() {
  return { subtitle: "" };
}
const SetSubtitle = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.subtitle !== "") {
      writer.uint32(10).string(message.subtitle);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetSubtitle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subtitle = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseMapCommitsChanges() {
  return { mapId: "", updateId: 0 };
}
const MapCommitsChanges = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.updateId !== 0) {
      writer.uint32(16).uint64(message.updateId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMapCommitsChanges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.updateId = longToNumber(reader.uint64());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSpeakerUpdatesSession() {
  return { sessionId: "" };
}
const SpeakerUpdatesSession = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.customizeRoomEnabled !== void 0) {
      writer.uint32(16).bool(message.customizeRoomEnabled);
    }
    if (message.chatEnabled !== void 0) {
      writer.uint32(24).bool(message.chatEnabled);
    }
    if (message.qaEnabled !== void 0) {
      writer.uint32(32).bool(message.qaEnabled);
    }
    if (message.approveQuestionsEnabled !== void 0) {
      writer.uint32(40).bool(message.approveQuestionsEnabled);
    }
    if (message.massMuteEnabled !== void 0) {
      writer.uint32(48).bool(message.massMuteEnabled);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSpeakerUpdatesSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = reader.string();
          break;
        case 2:
          message.customizeRoomEnabled = reader.bool();
          break;
        case 3:
          message.chatEnabled = reader.bool();
          break;
        case 4:
          message.qaEnabled = reader.bool();
          break;
        case 5:
          message.approveQuestionsEnabled = reader.bool();
          break;
        case 6:
          message.massMuteEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseChatReply() {
  return { senderId: "", senderName: "", contents: "" };
}
const ChatReply = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.senderId !== "") {
      writer.uint32(10).string(message.senderId);
    }
    if (message.senderName !== "") {
      writer.uint32(18).string(message.senderName);
    }
    if (message.contents !== "") {
      writer.uint32(26).string(message.contents);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseChatReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderId = reader.string();
          break;
        case 2:
          message.senderName = reader.string();
          break;
        case 3:
          message.contents = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseChatMessageUpdated() {
  return { id: "" };
}
const ChatMessageUpdated = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseChatMessageUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSendCommand() {
  return { command: "" };
}
const SendCommand = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.command !== "") {
      writer.uint32(10).string(message.command);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSendCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.command = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseRegisterCommand() {
  return { command: "" };
}
const RegisterCommand = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.command !== "") {
      writer.uint32(10).string(message.command);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRegisterCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.command = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseCraft() {
  return { inputs: {} };
}
const Craft = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    Object.entries(message.inputs).forEach(([key, value]) => {
      Craft_InputsEntry.encode({ key, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCraft();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Craft_InputsEntry.decode(reader, reader.uint32());
          if (entry1.value !== void 0) {
            message.inputs[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseCraft_InputsEntry() {
  return { key: "", value: 0 };
}
const Craft_InputsEntry = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCraft_InputsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseHighFive() {
  return { targetId: "" };
}
const HighFive = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.targetId !== "") {
      writer.uint32(10).string(message.targetId);
    }
    if (message.emote !== void 0) {
      writer.uint32(18).string(message.emote);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHighFive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetId = reader.string();
          break;
        case 2:
          message.emote = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseAddInventoryItem() {
  return { itemId: "", delta: 0, targetId: "" };
}
const AddInventoryItem = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.itemId !== "") {
      writer.uint32(10).string(message.itemId);
    }
    if (message.delta !== 0) {
      writer.uint32(16).uint64(message.delta);
    }
    if (message.targetId !== "") {
      writer.uint32(26).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAddInventoryItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemId = reader.string();
          break;
        case 2:
          message.delta = longToNumber(reader.uint64());
          break;
        case 3:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseRemoveInventoryItem() {
  return { itemId: "", delta: 0 };
}
const RemoveInventoryItem = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.itemId !== "") {
      writer.uint32(10).string(message.itemId);
    }
    if (message.delta !== 0) {
      writer.uint32(16).uint64(message.delta);
    }
    if (message.targetId !== void 0) {
      writer.uint32(26).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRemoveInventoryItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemId = reader.string();
          break;
        case 2:
          message.delta = longToNumber(reader.uint64());
          break;
        case 3:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseHipToBeSquare() {
  return { data: "" };
}
const HipToBeSquare = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHipToBeSquare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseTriggerInventoryItem() {
  return { itemId: "", abilityId: "" };
}
const TriggerInventoryItem = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.itemId !== "") {
      writer.uint32(10).string(message.itemId);
    }
    if (message.abilityId !== "") {
      writer.uint32(18).string(message.abilityId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTriggerInventoryItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemId = reader.string();
          break;
        case 2:
          message.abilityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetAllowScreenPointer() {
  return { allowScreenPointer: false };
}
const SetAllowScreenPointer = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.allowScreenPointer === true) {
      writer.uint32(8).bool(message.allowScreenPointer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetAllowScreenPointer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowScreenPointer = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetDeskInfo() {
  return { deskInfo: void 0 };
}
const SetDeskInfo = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.deskInfo !== void 0) {
      DeskInfoV2.encode(message.deskInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetDeskInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deskInfo = DeskInfoV2.decode(reader, reader.uint32());
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseWave() {
  return { user: "", isReply: false };
}
const Wave = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.isReply === true) {
      writer.uint32(16).bool(message.isReply);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseWave();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.isReply = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetAway() {
  return { away: false };
}
const SetAway = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.away === true) {
      writer.uint32(8).bool(message.away);
    }
    if (message.targetId !== void 0) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetAway();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.away = reader.bool();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseStartRecording() {
  return { nookId: "" };
}
const StartRecording = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.nookId !== "") {
      writer.uint32(10).string(message.nookId);
    }
    if (message.initializing !== void 0) {
      writer.uint32(16).bool(message.initializing);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStartRecording();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nookId = reader.string();
          break;
        case 2:
          message.initializing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseRequestAccessViaCheckIn() {
  return { userId: "", canceled: false };
}
const RequestAccessViaCheckIn = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.canceled === true) {
      writer.uint32(16).bool(message.canceled);
    }
    if (message.name !== void 0) {
      writer.uint32(26).string(message.name);
    }
    if (message.currentlyEquippedWearables !== void 0) {
      DBOutfit.encode(message.currentlyEquippedWearables, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestAccessViaCheckIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.canceled = reader.bool();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 5:
          message.currentlyEquippedWearables = DBOutfit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseRespondToAccessRequest() {
  return { userId: "", accepted: false };
}
const RespondToAccessRequest = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.accepted === true) {
      writer.uint32(16).bool(message.accepted);
    }
    if (message.locationType !== void 0) {
      writer.uint32(24).int32(message.locationType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRespondToAccessRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.accepted = reader.bool();
          break;
        case 3:
          message.locationType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseSetSpaceRolePermissionOverride() {
  return { role: "", permission: "", enabled: false };
}
const SetSpaceRolePermissionOverride = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    if (message.permission !== "") {
      writer.uint32(18).string(message.permission);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetSpaceRolePermissionOverride();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;
        case 2:
          message.permission = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
function createBaseJoinChimeMeeting() {
  return {};
}
const JoinChimeMeeting = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.mediaRegion !== void 0) {
      writer.uint32(10).string(message.mediaRegion);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : new import_minimal.default.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseJoinChimeMeeting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mediaRegion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};
var tsProtoGlobalThis = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();
function longToNumber(long) {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}
if (import_minimal.default.util.Long !== import_long.default) {
  import_minimal.default.util.Long = import_long.default;
  import_minimal.default.configure();
}
const protobufWriterLibrary = import_minimal.default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AccessRequest,
  AccessRequestRespondedTo,
  AccessRequestsUpdated,
  ActivelySpeaking,
  AddInventoryItem,
  AllowedUsers,
  Announcer,
  AreaPosition,
  Asset,
  BackedUpDeskObject,
  Ban,
  Block,
  Chat,
  ChatMessageUpdated,
  ChatReply,
  ChimeSetsUserInfo,
  ClientBackupHeartbeat,
  ClientHeartbeat,
  ClientServerAction,
  ClientServerBatch,
  CookieFound,
  Craft,
  Craft_InputsEntry,
  CustomAction,
  CustomEvent,
  DBDesk,
  DBOutfit,
  Deprecated,
  DeskInfoV2,
  DeskObjects,
  DeskObjects_ObjectsEntry,
  DynamicGate,
  DynamicGates,
  Enter,
  EnterPortal,
  EnterWhisper,
  ErrorEvent,
  Exit,
  FXShakeCamera,
  FXShakeObject,
  Ghost,
  GotRequestMute,
  HighFive,
  HipToBeSquare,
  Info,
  Init,
  InteractWithObject,
  InteractionEnum,
  InteractionEnum_ENUM,
  Inventory,
  InventoryItem,
  Inventory_ItemsEntry,
  Inventory_OrderEntry,
  ItemAbility,
  JoinChimeMeeting,
  Kick,
  LeaveWhisper,
  MapAddObject,
  MapAndDesk,
  MapCommitsChanges,
  MapDeleteObjectById,
  MapDeleteObjectByKey,
  MapLocation,
  MapMoveObject,
  MapSetAnnouncer,
  MapSetAreas,
  MapSetAreas_AreasEntry,
  MapSetAssets,
  MapSetBackgroundImagePath,
  MapSetCollisions,
  MapSetCollisionsBits,
  MapSetDecoration,
  MapSetDescription,
  MapSetDimensions,
  MapSetEnabledChats,
  MapSetFloors,
  MapSetFloors_FloorsEntry,
  MapSetForegroundImagePath,
  MapSetMiniMapImagePath,
  MapSetMuteOnEntry,
  MapSetName,
  MapSetNooks,
  MapSetNooks_NooksEntry,
  MapSetObjectsV2,
  MapSetObjectsV2_ObjectsEntry,
  MapSetPortals,
  MapSetScript,
  MapSetSpawn,
  MapSetSpawns,
  MapSetTutorialTasks,
  MapSetUseDrawnBG,
  MapSetWalls,
  MapSetWalls_WallsEntry,
  MapUpdateObjects,
  MapUpdateObjects_ObjectsEntry,
  Move,
  MoveDirectionEnum,
  MoveDirectionEnum_ENUM,
  NookCoords,
  NookDiff,
  Notify,
  ObjectTime,
  PlaySound,
  PlayerActivelySpeaks,
  PlayerBlocks,
  PlayerChats,
  PlayerCrafts,
  PlayerCrafts_InputsEntry,
  PlayerEditsChatMessage,
  PlayerEntersPortal,
  PlayerEntersWhisper,
  PlayerEntersWhisperV2,
  PlayerExits,
  PlayerGhosts,
  PlayerGuestPassStatus,
  PlayerHighFives,
  PlayerInitInfo,
  PlayerInteractsWithObject,
  PlayerJoins,
  PlayerLeavesWhisper,
  PlayerMoves,
  PlayerNotifies,
  PlayerRequestsToLead,
  PlayerRings,
  PlayerSendsCommand,
  PlayerSetsAffiliation,
  PlayerSetsAllowScreenPointer,
  PlayerSetsAvailability,
  PlayerSetsAway,
  PlayerSetsCity,
  PlayerSetsCountry,
  PlayerSetsCurrentArea,
  PlayerSetsCurrentlyEquippedWearables,
  PlayerSetsDescription,
  PlayerSetsDeskInfo,
  PlayerSetsDisplayEmail,
  PlayerSetsEmojiStatus,
  PlayerSetsEmoteV2,
  PlayerSetsEventStatus,
  PlayerSetsFocusModeEndTime,
  PlayerSetsFollowTarget,
  PlayerSetsGoKartId,
  PlayerSetsImagePointer,
  PlayerSetsInConversation,
  PlayerSetsIsAlone,
  PlayerSetsIsMobile,
  PlayerSetsIsNpc,
  PlayerSetsIsSignedIn,
  PlayerSetsItemString,
  PlayerSetsLastActive,
  PlayerSetsLastRaisedHand,
  PlayerSetsManualVideoSrc,
  PlayerSetsName,
  PlayerSetsPersonalImageUrl,
  PlayerSetsPhone,
  PlayerSetsProfileImageUrl,
  PlayerSetsPronouns,
  PlayerSetsSpeedModifier,
  PlayerSetsStartDate,
  PlayerSetsStatus,
  PlayerSetsSubtitle,
  PlayerSetsTextStatus,
  PlayerSetsTimezone,
  PlayerSetsTitle,
  PlayerSetsVehicleId,
  PlayerShootsConfetti,
  PlayerSpotlights,
  PlayerStartsRecording,
  PlayerTriggersInventoryItem,
  PlayerTriggersObject,
  PlayerUpdatesFocusModeStatus,
  PlayerUpdatesInventory,
  PlayerUpdatesInventory_ItemsEntry,
  PlayerUpdatesInventory_OrderEntry,
  PlayerWaves,
  Portal,
  PrecomputeEnter,
  PrecomputedEnterLocation,
  Ready,
  RecordingInfo,
  RegisterCommand,
  RemoveInventoryItem,
  RequestAccessViaCheckIn,
  RequestMute,
  RequestToJoinNook,
  RequestToLead,
  RequestUser,
  RequestedUsers,
  RequestedUsers_UsersEntry,
  Respawn,
  RespawnAtDesk,
  RespondToAccessRequest,
  RespondToAccessRequest_LocationTypeEnum,
  Ring,
  SendCommand,
  ServerClientBatch,
  ServerClientEvent,
  ServerHeartbeat,
  SetAffiliation,
  SetAllowScreenPointer,
  SetAvailability,
  SetAway,
  SetCity,
  SetCountry,
  SetCurrentArea,
  SetCurrentlyEquippedWearables,
  SetDescription,
  SetDeskFromNextAvailableDesk,
  SetDeskInfo,
  SetDisplayEmail,
  SetEmojiStatus,
  SetEmoteV2,
  SetEventStatus,
  SetFocusModeEndTime,
  SetFollowTarget,
  SetImagePointer,
  SetImpassable,
  SetInConversation,
  SetIsAlone,
  SetIsMobile,
  SetItemString,
  SetManualVideoSrc,
  SetName,
  SetPersonalImageUrl,
  SetPhone,
  SetProfileImageUrl,
  SetPronouns,
  SetScreenPointer,
  SetScreenPointerServer,
  SetSpaceRolePermissionOverride,
  SetSpeedModifier,
  SetStartDate,
  SetStatus,
  SetSubtitle,
  SetTextStatus,
  SetTimezone,
  SetTitle,
  SetVehicleId,
  ShootConfetti,
  Sound,
  Space,
  SpaceIsClosed,
  SpaceItem,
  SpaceItem_AbilitiesEntry,
  SpaceItem_MetaEntry,
  SpaceMemberInfo,
  SpaceMemberInfo_RolesEntry,
  SpaceOverCapacityDeniesUser,
  SpaceOverwrites,
  SpacePlaysSound,
  SpaceRegistersCommand,
  SpaceRolePermissionOverrideUpdated,
  SpaceSetsCapacity,
  SpaceSetsGuestPassStatuses,
  SpaceSetsIdMapping,
  SpaceSetsSpaceMembers,
  SpaceSetsSpaceMembers_MembersEntry,
  SpaceSetsSpaceUsers,
  SpaceSetsSpaceUsers_SpaceUsersEntry,
  SpaceStopsSound,
  SpaceUpdatesItems,
  SpaceUpdatesItems_ItemsEntry,
  Spawn,
  SpawnPoint,
  SpeakerUpdatesSession,
  Spotlight,
  SpriteDirectionEnum,
  SpriteDirectionEnum_ENUM,
  StartRecording,
  StopSound,
  SubscriptionsUpdated,
  Teleport,
  Timestamp,
  TransactionStatus,
  TriggerInventoryItem,
  TriggerObject,
  TutorialTaskMapArea,
  UpdateNookPermission,
  UpdateSubscriptions,
  UpdateSubscriptions_MapUpdateIdsEntry,
  UpdateSubscriptions_SubscriptionsEntry,
  Warn,
  Wave,
  WireArea,
  WireObject,
  WireObjectSpriteAnimConfig,
  WireObjectSpritesheet,
  WireObjectSpritesheetFraming,
  WireObjectSpritesheet_AnimationsEntry,
  WirePoint,
  WireSpaceUser,
  WireTutorialTasks,
  protobufPackage,
  protobufWriterLibrary
});
//# sourceMappingURL=events.js.map
