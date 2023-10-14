/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

/** common type for all deprecated message data, so that the $case is decoded but not the data */
export interface Deprecated {
}

export interface SpriteDirectionEnum {
}

export enum SpriteDirectionEnum_ENUM {
  Stand = 0,
  Down = 1,
  DownAlt = 2,
  Up = 3,
  UpAlt = 4,
  Left = 5,
  LeftAlt = 6,
  Right = 7,
  RightAlt = 8,
  Dance1 = 9,
  Dance2 = 10,
  Dance3 = 11,
  Dance4 = 12,
}

export interface MoveDirectionEnum {
}

export enum MoveDirectionEnum_ENUM {
  Left = 0,
  Right = 1,
  Up = 2,
  Down = 3,
  Dance = 4,
}

export interface InteractionEnum {
}

export enum InteractionEnum_ENUM {
  NONE = 0,
  EMBEDDED_WEBSITE = 1,
  POSTER = 2,
  VIDEO = 3,
  EXTERNAL_CALL = 4,
  EXTENSION = 5,
  NOTE = 6,
  MODAL_EXTENSION = 7,
  COMPONENT_MODAL = 8,
  SIDE_PANEL_TRIGGER = 9,
}

export interface PlayerInitInfo {
  name?: string | undefined;
  x?: number | undefined;
  y?: number | undefined;
  map?: string | undefined;
  affiliation?: string | undefined;
  busy?: boolean | undefined;
  textStatus?: string | undefined;
  emojiStatus?: string | undefined;
  currentlyEquippedWearables?: DBOutfit | undefined;
  focusModeEndTime?: string | undefined;
  itemString?: string | undefined;
  isNpc?: boolean | undefined;
}

export interface DBOutfit {
  skin: string;
  hair: string;
  facial_hair: string;
  top: string;
  bottom: string;
  shoes: string;
  hat: string;
  glasses: string;
  other: string;
  costume?: string | undefined;
  mobility?: string | undefined;
  jacket?: string | undefined;
}

/** Defines how to slice an incoming animation spritesheet */
export interface WireObjectSpritesheetFraming {
  frameWidth: number;
  frameHeight: number;
}

/** Defines an Spritesheet referencing frames from the split spritesheet */
export interface WireObjectSpriteAnimConfig {
  /**
   * Defines how to interpret the `sequence `field. If `true`, `sequence` is interpreted as a set of
   * animation key frames which are interpolated between for the animation.
   * For example, `sequence: [0,10], useSequenceAsRange: true` would mean the animation spans frames
   * 0 _through_ 10 (inclusive). Use this when your animation uses sequential frames.
   *
   * Default: `false`
   */
  useSequenceAsRange?:
    | boolean
    | undefined;
  /**
   * Defines which spritesheet frames make up this animation.
   *
   * **By default,** `sequence` should be an array of arbitrary frame numbers defining this animation.
   *   ex: [4,5,4,5,4,6,6,6] animates between frames 4, 5, and 6 - but not necessarily in sequential order.
   *
   * **When `useSequenceAsRange` is `true`,** this should be set to two integers defining the **start** and **end** caps.
   *   ex: [0, 10] means this animation starts on frame 0 and ends on frame 10 (inclusive).
   *       (This is equivalent to setting sequence to `[0, 1, 2, ...]`)
   */
  sequence: number[];
  /** Does this animation repeat or should it stop on the last frame? (Default: false) */
  loop?:
    | boolean
    | undefined;
  /** Frames per second this animation should display. */
  frameRate: number;
}

/**
 * Animated objects need to declare their spritesheet, how to slice it, and the different Spritesheets
 * provided by the given spritesheet.
 */
export interface WireObjectSpritesheet {
  spritesheetUrl: string;
  framing: WireObjectSpritesheetFraming | undefined;
  animations: { [key: string]: WireObjectSpriteAnimConfig };
  currentAnim?: string | undefined;
  pauseAnimationsIfFpsBelowFramerate?: boolean | undefined;
}

export interface WireObjectSpritesheet_AnimationsEntry {
  key: string;
  value: WireObjectSpriteAnimConfig | undefined;
}

export interface WireObject {
  templateId?: string | undefined;
  _name?:
    | string
    | undefined;
  /** repeated is inherently optional */
  _tags: string[];
  x?: number | undefined;
  y?: number | undefined;
  offsetX?: number | undefined;
  offsetY?: number | undefined;
  color?: string | undefined;
  orientation?: number | undefined;
  normal?: string | undefined;
  highlighted?: string | undefined;
  type?:
    | InteractionEnum_ENUM
    | undefined;
  /** deprecating hopefully? */
  width?:
    | number
    | undefined;
  /** deprecating hopefully? */
  height?:
    | number
    | undefined;
  /** useful to tag an object with which extension should pay attention to it */
  extensionClass?:
    | string
    | undefined;
  /** Any custom value of `previewMessage` will be shown as is, not localized */
  previewMessage?: string | undefined;
  distThreshold?: number | undefined;
  propertiesJson?: string | undefined;
  sound?:
    | Sound
    | undefined;
  /** deprecated on the product side */
  objectStartTime?:
    | ObjectTime
    | undefined;
  /** deprecated on the product side */
  objectExpireTime?: ObjectTime | undefined;
  id?: string | undefined;
  customState?: string | undefined;
  objectPlacerId?:
    | string
    | undefined;
  /** experimental - this should have been in customState :/ */
  numGoKarts?: number | undefined;
  spritesheet?: WireObjectSpritesheet | undefined;
  zIndex?: number | undefined;
}

export interface SpaceMemberInfo {
  /** roles should be { [role in CoreRole]: boolean }, but we can't do string enums in protobuf */
  roles: { [key: string]: boolean };
  name?: string | undefined;
  currentlyEquippedWearables?: DBOutfit | undefined;
  allowScreenPointer?:
    | boolean
    | undefined;
  /** role should be CoreRole, but we can't do string enums in protobuf */
  role: string;
}

export interface SpaceMemberInfo_RolesEntry {
  key: string;
  value: boolean;
}

export interface BackedUpDeskObject {
  obj: WireObject | undefined;
  offsetX: number;
  offsetY: number;
}

export interface DeskObjects {
  objects: { [key: string]: BackedUpDeskObject };
}

export interface DeskObjects_ObjectsEntry {
  key: string;
  value: BackedUpDeskObject | undefined;
}

export interface DeskInfoV2 {
  deskId?: string | undefined;
  description?: string | undefined;
  locked?:
    | boolean
    | undefined;
  /** this isn't up to date with what's actually on/around someone's desk, it just exists as a way to back up and restore those objects while they're switching desks */
  lastDeskObjects?: DeskObjects | undefined;
  mapId?: string | undefined;
}

export interface MapAndDesk {
  mapId: string;
  deskId: string;
}

export interface Sound {
  src: string;
  volume: number;
  loop: boolean;
  maxDistance: number;
  isPositional?: boolean | undefined;
  stream?: boolean | undefined;
}

/** Can be deprecated? */
export interface ObjectTime {
  _seconds: number;
  _timezone?: string | undefined;
}

export interface Space {
  spaceId: string;
  x: number;
  y: number;
  colored?: boolean | undefined;
}

export interface NookCoords {
  coords: WirePoint[];
}

export interface AllowedUsers {
  users: string[];
}

export interface RequestUser {
  name?: string | undefined;
}

export interface RequestedUsers {
  /** maps uid to optional player metadata about users who requested to join */
  users: { [key: string]: RequestUser };
}

export interface RequestedUsers_UsersEntry {
  key: string;
  value: RequestUser | undefined;
}

export interface RecordingInfo {
  active: boolean;
  initiatingPlayer?: string | undefined;
  egressId?: string | undefined;
}

export interface NookDiff {
  nookCoords?: NookCoords | undefined;
  colored?: boolean | undefined;
  name?: string | undefined;
  bookable?: boolean | undefined;
  capacity?: number | undefined;
  restricted?: boolean | undefined;
  allowedUsers?: AllowedUsers | undefined;
  requestedUsers?: RequestedUsers | undefined;
  isInMeeting?: boolean | undefined;
  isDesk?: boolean | undefined;
  recordingInfo?: RecordingInfo | undefined;
}

export interface WirePoint {
  x: number;
  y: number;
}

export interface SpawnPoint {
  x: number;
  y: number;
  spawnId?: string | undefined;
}

export interface Portal {
  x: number;
  y: number;
  targetMap?: string | undefined;
  targetUrl?: string | undefined;
  targetX?: number | undefined;
  targetY?: number | undefined;
}

export interface Announcer {
  x: number;
  y: number;
}

/** deprecating (NGN-123) */
export interface Asset {
  x: number;
  y: number;
  src: string;
  width?: number | undefined;
  height?: number | undefined;
  inFront?: boolean | undefined;
}

export interface AreaPosition {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface WireArea {
  category?: string | undefined;
  coords: AreaPosition[];
}

export interface DBDesk {
  coords: AreaPosition[];
}

export interface MapSetDimensions {
  mapId: string;
  width: number;
  height: number;
}

/** this is the new version of impassable. maybe we should rename it? */
export interface MapSetCollisions {
  mapId: string;
  /** this is the x,y,w,h of the rectangle being updated by this mask */
  x: number;
  y: number;
  w: number;
  h: number;
  /** base64 encoded string of bytes, 0x00 is walkable 0x01 is impassable */
  mask: string;
}

export interface MapSetCollisionsBits {
  mapId: string;
  /** indicates whether to overwrite previous collision data (i.e. this represents the entire map) or merge */
  overwrite: boolean;
  /** this is the x,y,w,h of the rectangle being updated by this mask */
  x: number;
  y: number;
  w: number;
  h: number;
  /**
   * the mask stored as bits where 0 is walkable and 1 is impassable
   * to read a single bit:
   *  byteIndex = ((y * w + x) / 8) | 0
   *  bitIndex  = 1 << ((y * w + x) % 8)
   *  impassable = (mask[byteIndex] & (1 << bitIndex)) !== 0
   */
  mask: Uint8Array;
}

export interface MapSetBackgroundImagePath {
  mapId: string;
  /** url */
  backgroundImagePath: string;
}

export interface MapSetForegroundImagePath {
  mapId: string;
  foregroundImagePath: string;
  delete?: boolean | undefined;
}

export interface MapSetNooks {
  mapId: string;
  nooks: { [key: string]: NookDiff };
  overwrite?: boolean | undefined;
}

export interface MapSetNooks_NooksEntry {
  key: string;
  value: NookDiff | undefined;
}

export interface MapSetSpawn {
  mapId: string;
  spawn: WirePoint | undefined;
  delete?: boolean | undefined;
}

export interface MapSetSpawns {
  mapId: string;
  spawns: SpawnPoint[];
}

export interface MapSetPortals {
  mapId: string;
  portals: Portal[];
}

export interface MapSetAnnouncer {
  mapId: string;
  announcer: Announcer[];
}

/** deprecating (NGN-123) */
export interface MapSetAssets {
  mapId: string;
  assets: Asset[];
  delete?: boolean | undefined;
}

export interface MapSetObjectsV2 {
  mapId: string;
  objects: { [key: string]: WireObject };
  updatesAreOverwrites?: boolean | undefined;
}

export interface MapSetObjectsV2_ObjectsEntry {
  key: string;
  value: WireObject | undefined;
}

export interface MapSetName {
  mapId: string;
  name: string;
  delete?: boolean | undefined;
}

export interface MapSetMuteOnEntry {
  mapId: string;
  muteOnEntry: boolean;
  delete?: boolean | undefined;
}

export interface MapSetUseDrawnBG {
  mapId: string;
  useDrawnBG: boolean;
  delete?: boolean | undefined;
}

export interface MapSetWalls {
  mapId: string;
  walls: { [key: string]: string };
  delete?: boolean | undefined;
}

export interface MapSetWalls_WallsEntry {
  key: string;
  value: string;
}

export interface MapSetFloors {
  mapId: string;
  floors: { [key: string]: string };
  delete?: boolean | undefined;
}

export interface MapSetFloors_FloorsEntry {
  key: string;
  value: string;
}

export interface MapSetAreas {
  mapId: string;
  areas: { [key: string]: WireArea };
  delete?: boolean | undefined;
}

export interface MapSetAreas_AreasEntry {
  key: string;
  value: WireArea | undefined;
}

export interface MapDeleteObjectByKey {
  mapId: string;
  key: string;
}

export interface MapDeleteObjectById {
  mapId: string;
  id: string;
}

export interface MapSetMiniMapImagePath {
  mapId: string;
  miniMapImagePath: string;
  delete?: boolean | undefined;
}

export interface MapSetEnabledChats {
  mapId: string;
  enabledChats: string[];
  delete?: boolean | undefined;
}

export interface MapSetDescription {
  mapId: string;
  description: string;
  delete?: boolean | undefined;
}

export interface MapSetDecoration {
  mapId: string;
  decoration: string;
  delete?: boolean | undefined;
}

export interface MapSetTutorialTasks {
  mapId: string;
  tutorialTasks: WireTutorialTasks | undefined;
  delete?: boolean | undefined;
}

export interface WireTutorialTasks {
  groupSetId: string;
  areas: TutorialTaskMapArea[];
  autoStart?: boolean | undefined;
}

export interface TutorialTaskMapArea {
  areaId: string;
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface MapSetScript {
  mapId: string;
  script: string;
  delete?: boolean | undefined;
}

export interface Inventory {
  items: { [key: string]: InventoryItem };
  order: { [key: string]: string };
}

export interface Inventory_ItemsEntry {
  key: string;
  value: InventoryItem | undefined;
}

export interface Inventory_OrderEntry {
  key: string;
  value: string;
}

export interface InventoryItem {
  count: number;
}

export interface SpaceItem {
  name: string;
  category?: string | undefined;
  description?: string | undefined;
  previewUrl: string;
  meta: { [key: string]: string };
  abilities: { [key: string]: ItemAbility };
}

export interface SpaceItem_MetaEntry {
  key: string;
  value: string;
}

export interface SpaceItem_AbilitiesEntry {
  key: string;
  value: ItemAbility | undefined;
}

export interface ItemAbility {
  name: string;
}

export interface MapLocation {
  map: string;
  x: number;
  y: number;
}

export interface ServerClientBatch {
  /** don't add more stuff here */
  events: ServerClientEvent[];
}

export interface ServerClientEvent {
  event?:
    | { $case: "info"; info: Info }
    | { $case: "warn"; warn: Warn }
    | { $case: "error"; error: ErrorEvent }
    | { $case: "ready"; ready: Ready }
    | { $case: "serverHeartbeat"; serverHeartbeat: ServerHeartbeat }
    | { $case: "transactionStatus"; transactionStatus: TransactionStatus }
    | { $case: "playerMoves"; playerMoves: PlayerMoves }
    | { $case: "playerSetsStatus"; playerSetsStatus: PlayerSetsStatus }
    | { $case: "playerSpotlights"; playerSpotlights: PlayerSpotlights }
    | { $case: "playerRings"; playerRings: PlayerRings }
    | { $case: "playerChats"; playerChats: PlayerChats }
    | { $case: "playerGhosts"; playerGhosts: PlayerGhosts }
    | { $case: "playerEntersWhisper"; playerEntersWhisper: PlayerEntersWhisper }
    | { $case: "playerLeavesWhisper"; playerLeavesWhisper: PlayerLeavesWhisper }
    | { $case: "playerActivelySpeaks"; playerActivelySpeaks: PlayerActivelySpeaks }
    | { $case: "playerSetsName"; playerSetsName: PlayerSetsName }
    | { $case: "playerSetsTextStatus"; playerSetsTextStatus: PlayerSetsTextStatus }
    | { $case: "playerSetsEmojiStatus"; playerSetsEmojiStatus: PlayerSetsEmojiStatus }
    | { $case: "playerSetsAffiliation"; playerSetsAffiliation: PlayerSetsAffiliation }
    | { $case: "playerExits"; playerExits: PlayerExits }
    | { $case: "playerSetsIsSignedIn"; playerSetsIsSignedIn: PlayerSetsIsSignedIn }
    | { $case: "spaceOverwrites"; spaceOverwrites: SpaceOverwrites }
    | { $case: "spaceIsClosed"; spaceIsClosed: SpaceIsClosed }
    | { $case: "playerEntersPortal"; playerEntersPortal: PlayerEntersPortal }
    | { $case: "spaceSetsIdMapping"; spaceSetsIdMapping: SpaceSetsIdMapping }
    | { $case: "playerSetsLastActive"; playerSetsLastActive: PlayerSetsLastActive }
    | { $case: "playerShootsConfetti"; playerShootsConfetti: PlayerShootsConfetti }
    | { $case: "playerSetsEventStatus"; playerSetsEventStatus: PlayerSetsEventStatus }
    | { $case: "playerSetsInConversation"; playerSetsInConversation: PlayerSetsInConversation }
    | { $case: "playerSetsCurrentArea"; playerSetsCurrentArea: PlayerSetsCurrentArea }
    | { $case: "playerSetsImagePointer"; playerSetsImagePointer: PlayerSetsImagePointer }
    | { $case: "cookieFound"; cookieFound: CookieFound }
    | { $case: "playerEntersWhisperV2"; playerEntersWhisperV2: PlayerEntersWhisperV2 }
    | { $case: "playerSetsGoKartId"; playerSetsGoKartId: PlayerSetsGoKartId }
    | { $case: "mapSetDimensions"; mapSetDimensions: MapSetDimensions }
    | { $case: "mapSetBackgroundImagePath"; mapSetBackgroundImagePath: MapSetBackgroundImagePath }
    | { $case: "mapSetForegroundImagePath"; mapSetForegroundImagePath: MapSetForegroundImagePath }
    | { $case: "mapSetSpawns"; mapSetSpawns: MapSetSpawns }
    | { $case: "mapSetPortals"; mapSetPortals: MapSetPortals }
    | { $case: "mapSetAnnouncer"; mapSetAnnouncer: MapSetAnnouncer }
    | { $case: "mapSetAssets"; mapSetAssets: MapSetAssets }
    | { $case: "mapSetName"; mapSetName: MapSetName }
    | { $case: "mapSetMuteOnEntry"; mapSetMuteOnEntry: MapSetMuteOnEntry }
    | { $case: "mapSetUseDrawnBG"; mapSetUseDrawnBG: MapSetUseDrawnBG }
    | { $case: "mapSetWalls"; mapSetWalls: MapSetWalls }
    | { $case: "mapSetFloors"; mapSetFloors: MapSetFloors }
    | { $case: "mapSetAreas"; mapSetAreas: MapSetAreas }
    | { $case: "mapSetSpawn"; mapSetSpawn: MapSetSpawn }
    | { $case: "playerSetsIsAlone"; playerSetsIsAlone: PlayerSetsIsAlone }
    | { $case: "playerJoins"; playerJoins: PlayerJoins }
    | { $case: "mapSetEnabledChats"; mapSetEnabledChats: MapSetEnabledChats }
    | { $case: "mapSetDescription"; mapSetDescription: MapSetDescription }
    | { $case: "mapSetDecoration"; mapSetDecoration: MapSetDecoration }
    | { $case: "mapSetTutorialTasks"; mapSetTutorialTasks: MapSetTutorialTasks }
    | { $case: "mapSetMiniMapImagePath"; mapSetMiniMapImagePath: MapSetMiniMapImagePath }
    | { $case: "spacePlaysSound"; spacePlaysSound: SpacePlaysSound }
    | { $case: "mapSetScript"; mapSetScript: MapSetScript }
    | { $case: "playerSetsIsMobile"; playerSetsIsMobile: PlayerSetsIsMobile }
    | { $case: "setScreenPointerServer"; setScreenPointerServer: SetScreenPointerServer }
    | { $case: "playerSetsEmoteV2"; playerSetsEmoteV2: PlayerSetsEmoteV2 }
    | { $case: "playerSetsFocusModeEndTime"; playerSetsFocusModeEndTime: PlayerSetsFocusModeEndTime }
    | { $case: "spaceSetsSpaceMembers"; spaceSetsSpaceMembers: SpaceSetsSpaceMembers }
    | { $case: "spaceSetsSpaceUsers"; spaceSetsSpaceUsers: SpaceSetsSpaceUsers }
    | { $case: "customEvent"; customEvent: CustomEvent }
    | { $case: "playerBlocks"; playerBlocks: PlayerBlocks }
    | { $case: "playerUpdatesFocusModeStatus"; playerUpdatesFocusModeStatus: PlayerUpdatesFocusModeStatus }
    | { $case: "playerNotifies"; playerNotifies: PlayerNotifies }
    | { $case: "playerSetsItemString"; playerSetsItemString: PlayerSetsItemString }
    | { $case: "playerSetsFollowTarget"; playerSetsFollowTarget: PlayerSetsFollowTarget }
    | { $case: "playerRequestsToLead"; playerRequestsToLead: PlayerRequestsToLead }
    | { $case: "playerSetsManualVideoSrc"; playerSetsManualVideoSrc: PlayerSetsManualVideoSrc }
    | { $case: "playerSetsIsNpc"; playerSetsIsNpc: PlayerSetsIsNpc }
    | { $case: "playerSetsSubtitle"; playerSetsSubtitle: PlayerSetsSubtitle }
    | { $case: "mapCommitsChanges"; mapCommitsChanges: MapCommitsChanges }
    | { $case: "mapMoveObject"; mapMoveObject: MapMoveObject }
    | { $case: "playerEditsChatMessage"; playerEditsChatMessage: PlayerEditsChatMessage }
    | { $case: "fxShakeObject"; fxShakeObject: FXShakeObject }
    | { $case: "fxShakeCamera"; fxShakeCamera: FXShakeCamera }
    | { $case: "playerSendsCommand"; playerSendsCommand: PlayerSendsCommand }
    | { $case: "spaceRegistersCommand"; spaceRegistersCommand: SpaceRegistersCommand }
    | { $case: "speakerUpdatesSession"; speakerUpdatesSession: SpeakerUpdatesSession }
    | { $case: "playerUpdatesInventory"; playerUpdatesInventory: PlayerUpdatesInventory }
    | { $case: "spaceUpdatesItems"; spaceUpdatesItems: SpaceUpdatesItems }
    | { $case: "playerSetsVehicleId"; playerSetsVehicleId: PlayerSetsVehicleId }
    | { $case: "playerSetsSpeedModifier"; playerSetsSpeedModifier: PlayerSetsSpeedModifier }
    | { $case: "playerHighFives"; playerHighFives: PlayerHighFives }
    | { $case: "spaceStopsSound"; spaceStopsSound: SpaceStopsSound }
    | { $case: "hipToBeSquare"; hipToBeSquare: HipToBeSquare }
    | { $case: "playerCrafts"; playerCrafts: PlayerCrafts }
    | { $case: "playerTriggersInventoryItem"; playerTriggersInventoryItem: PlayerTriggersInventoryItem }
    | { $case: "playerSetsAllowScreenPointer"; playerSetsAllowScreenPointer: PlayerSetsAllowScreenPointer }
    | { $case: "precomputedEnterLocation"; precomputedEnterLocation: PrecomputedEnterLocation }
    | { $case: "gotRequestMute"; gotRequestMute: GotRequestMute }
    | { $case: "playerSetsDeskInfo"; playerSetsDeskInfo: PlayerSetsDeskInfo }
    | { $case: "mapSetNooks"; mapSetNooks: MapSetNooks }
    | { $case: "dynamicGates"; dynamicGates: DynamicGates }
    | { $case: "playerWaves"; playerWaves: PlayerWaves }
    | { $case: "playerSetsPronouns"; playerSetsPronouns: PlayerSetsPronouns }
    | { $case: "playerSetsTitle"; playerSetsTitle: PlayerSetsTitle }
    | { $case: "playerSetsTimezone"; playerSetsTimezone: PlayerSetsTimezone }
    | { $case: "playerSetsDescription"; playerSetsDescription: PlayerSetsDescription }
    | { $case: "playerSetsPhone"; playerSetsPhone: PlayerSetsPhone }
    | { $case: "playerSetsPersonalImageUrl"; playerSetsPersonalImageUrl: PlayerSetsPersonalImageUrl }
    | { $case: "playerSetsProfileImageUrl"; playerSetsProfileImageUrl: PlayerSetsProfileImageUrl }
    | { $case: "spaceSetsCapacity"; spaceSetsCapacity: SpaceSetsCapacity }
    | { $case: "spaceOverCapacityDeniesUser"; spaceOverCapacityDeniesUser: SpaceOverCapacityDeniesUser }
    | { $case: "playerSetsAway"; playerSetsAway: PlayerSetsAway }
    | { $case: "mapSetCollisionsBits"; mapSetCollisionsBits: MapSetCollisionsBits }
    | { $case: "playerSetsCity"; playerSetsCity: PlayerSetsCity }
    | { $case: "playerSetsCountry"; playerSetsCountry: PlayerSetsCountry }
    | { $case: "playerSetsStartDate"; playerSetsStartDate: PlayerSetsStartDate }
    | { $case: "playerStartsRecording"; playerStartsRecording: PlayerStartsRecording }
    | { $case: "accessRequestsUpdated"; accessRequestsUpdated: AccessRequestsUpdated }
    | { $case: "accessRequestRespondedTo"; accessRequestRespondedTo: AccessRequestRespondedTo }
    | { $case: "spaceSetsGuestPassStatuses"; spaceSetsGuestPassStatuses: SpaceSetsGuestPassStatuses }
    | { $case: "playerSetsAvailability"; playerSetsAvailability: PlayerSetsAvailability }
    | { $case: "subscriptionsUpdated"; subscriptionsUpdated: SubscriptionsUpdated }
    | {
      $case: "spaceRolePermissionOverrideUpdated";
      spaceRolePermissionOverrideUpdated: SpaceRolePermissionOverrideUpdated;
    }
    | { $case: "playerSetsLastRaisedHand"; playerSetsLastRaisedHand: PlayerSetsLastRaisedHand }
    | {
      $case: "playerSetsCurrentlyEquippedWearables";
      playerSetsCurrentlyEquippedWearables: PlayerSetsCurrentlyEquippedWearables;
    }
    | { $case: "playerSetsDisplayEmail"; playerSetsDisplayEmail: PlayerSetsDisplayEmail }
    | { $case: "mapDeleteObjectByKey"; mapDeleteObjectByKey: MapDeleteObjectByKey }
    | { $case: "mapSetObjectsV2"; mapSetObjectsV2: MapSetObjectsV2 }
    | { $case: "playerInteractsWithObject"; playerInteractsWithObject: PlayerInteractsWithObject }
    | { $case: "playerTriggersObject"; playerTriggersObject: PlayerTriggersObject }
    | { $case: "chimeSetsUserInfo"; chimeSetsUserInfo: ChimeSetsUserInfo };
}

/** the events the client is subscribed to has been changed on the server */
export interface SubscriptionsUpdated {
  /** array of event names the client will be notified about */
  subscriptions: string[];
}

export interface ServerHeartbeat {
  /** no longer used */
  lastRTT: number;
}

export interface Info {
  message: string;
}

export interface Warn {
  message: string;
}

export interface ErrorEvent {
  message: string;
  code: number;
}

export interface Ready {
  id: string;
}

export interface TransactionStatus {
  txnId: number;
  succeeded: boolean;
  reason?: string | undefined;
}

/**
 * Always sent as the first message about any given player. If there are fields that must be initialized on clients
 * immediately, they should be included in this message.
 */
export interface PlayerJoins {
  encId: number;
}

export interface GotRequestMute {
  muterId: string;
  video: boolean;
}

export interface PlayerMoves {
  encId: number;
  /** all optional, only send what's changed */
  x?: number | undefined;
  y?: number | undefined;
  direction?: SpriteDirectionEnum_ENUM | undefined;
  mapId?: string | undefined;
  lastInputId: number;
}

export interface PlayerSetsStatus {
  encId: number;
  busy: boolean;
}

export interface PlayerSetsAvailability {
  encId: number;
  status: string;
  statusUpdatedAt?: string | undefined;
  statusEndOption?: string | undefined;
}

export interface PlayerSpotlights {
  /** the person who is being spotlit */
  encId: number;
  /** the person who is doing the spotlighting; legacy \holdover */
  spotlightedBy: number;
  spotlighted: number;
}

export interface PlayerRings {
  /** the ringer */
  encId: number;
}

export interface PlayerSetsImagePointer {
  encId: number;
  objectId: string;
  x: number;
  y: number;
}

export interface SetScreenPointerServer {
  encId: number;
  screenId: string;
  x: number;
  y: number;
  color: string;
}

export interface PlayerChats {
  senderId: string;
  recipient: string;
  contents: string;
  senderName: string;
  /** deprecating (NGN-710) */
  timestamp?: Timestamp | undefined;
  messageType: string;
  unixTime: number;
  id?: string | undefined;
  roomId?: string | undefined;
  approved?: boolean | undefined;
  nookId?: string | undefined;
}

export interface PlayerWaves {
  encId: number;
  targetId: string;
  isReply: boolean;
}

/** deprecating this (NGN-710) */
export interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

export interface PlayerInteractsWithObject {
  encId: number;
  mapId: string;
  key: string;
  /** JSON string */
  dataJson?: string | undefined;
}

export interface PlayerGhosts {
  encId: number;
  ghost: number;
}

export interface PlayerEntersWhisper {
  encId: number;
  whisperRecipient: string;
  whisperId: string;
}

export interface PlayerEntersWhisperV2 {
  encId: number;
  /** the person you intend to be whispering; will apply whisperId property to them as well */
  encIdTarget: number;
  whisperId: string;
}

export interface PlayerLeavesWhisper {
  encId: number;
}

export interface PlayerActivelySpeaks {
  encId: number;
  activelySpeaking: number;
}

export interface PlayerSetsEmoteV2 {
  encId: number;
  emote?: string | undefined;
  count?: number | undefined;
}

export interface PlayerSetsLastRaisedHand {
  encId: number;
  lastRaisedHand: string;
}

export interface PlayerSetsLastActive {
  encId: number;
  lastActive: string;
}

export interface PlayerSetsName {
  encId: number;
  name: string;
}

export interface PlayerSetsTextStatus {
  encId: number;
  textStatus: string;
}

export interface PlayerSetsPronouns {
  encId: number;
  pronouns: string;
}

export interface PlayerSetsTitle {
  encId: number;
  title: string;
}

export interface PlayerSetsCity {
  encId: number;
  city: string;
}

export interface PlayerSetsCountry {
  encId: number;
  country: string;
}

export interface PlayerSetsStartDate {
  encId: number;
  startDate: string;
}

export interface PlayerSetsTimezone {
  encId: number;
  timezone: string;
}

export interface PlayerSetsPhone {
  encId: number;
  phone: string;
}

export interface PlayerSetsDisplayEmail {
  encId: number;
  displayEmail: string;
}

export interface PlayerSetsDescription {
  encId: number;
  description: string;
}

export interface PlayerSetsProfileImageUrl {
  encId: number;
  profileImageUrl: string;
}

export interface PlayerSetsPersonalImageUrl {
  encId: number;
  personalImageUrl: string;
}

export interface PlayerSetsIsMobile {
  encId: number;
  isMobile: boolean;
}

export interface PlayerSetsEmojiStatus {
  encId: number;
  emojiStatus: string;
}

export interface PlayerSetsAffiliation {
  encId: number;
  affiliation: string;
}

export interface PlayerExits {
  encId: number;
}

export interface PlayerSetsCurrentlyEquippedWearables {
  encId: number;
  currentlyEquippedWearables: DBOutfit | undefined;
}

export interface PlayerSetsIsSignedIn {
  encId: number;
  isSignedIn: boolean;
}

/**
 * It's pretty wack that we're using JSON to serialize / deserialize space data here.
 * TODO: improve this by splitting this up into several events or using a better message interface
 * for this or something that doesn't require the client to JSON.parse().
 */
export interface SpaceOverwrites {
  spaceData: string;
}

export interface DynamicGate {
  exposure: number;
  /** to hardcode a list of spaces that should have it on */
  spaces: string[];
  refreshOnChange?: boolean | undefined;
  minimumBuildTimestamp?: number | undefined;
}

export interface DynamicGates {
  livekitEnabled: DynamicGate | undefined;
  livekitSelfhostEnabled?: DynamicGate | undefined;
  agoraEnabled?: DynamicGate | undefined;
  chimeEnabled?:
    | DynamicGate
    | undefined;
  /** BEFORE ADDING MORE OF THESE, DO A PROPER DESIGN AND RFC PLEASE! */
  gatherEnabled?: DynamicGate | undefined;
}

export interface SpaceSetsSpaceMembers {
  members: { [key: string]: SpaceMemberInfo };
}

export interface SpaceSetsSpaceMembers_MembersEntry {
  key: string;
  value: SpaceMemberInfo | undefined;
}

export interface WireSpaceUser {
  /** role should be CoreRole, but we can't do string enums in protobuf */
  role: string;
}

export interface SpaceSetsSpaceUsers {
  spaceUsers: { [key: string]: WireSpaceUser };
}

export interface SpaceSetsSpaceUsers_SpaceUsersEntry {
  key: string;
  value: WireSpaceUser | undefined;
}

export interface SpaceIsClosed {
}

export interface PlayerEntersPortal {
  targetUrl: string;
  bypassPrompt?: boolean | undefined;
}

export interface CookieFound {
  encId: number;
}

/**
 * Each client has a unique string id, but this is costly to send over the wire
 * so an integer value is used in its place and then converted back to the
 * corresponding string id on the client and server.
 * This event provides the mapping between a player's string id [uid]
 * and their corresponding integer id [encId].
 * (see "Player..." events above for use of encId)
 */
export interface SpaceSetsIdMapping {
  uid: string;
  encId: number;
}

export interface PlayerShootsConfetti {
  /** the confetti shooter */
  encId: number;
}

export interface PlayerSetsEventStatus {
  encId: number;
  eventStatus: string;
}

export interface PlayerSetsInConversation {
  encId: number;
  inConversation: boolean;
}

export interface PlayerSetsCurrentArea {
  encId: number;
  currentArea: string;
}

export interface PlayerSetsGoKartId {
  encId: number;
  goKartId: string;
}

export interface PlayerSetsVehicleId {
  encId: number;
  vehicleId: string;
  action: string;
  previousVehicleId: string;
}

export interface PlayerSetsSpeedModifier {
  encId: number;
  speedModifier: number;
}

export interface PlayerSetsIsAlone {
  encId: number;
  isAlone: boolean;
}

export interface SpacePlaysSound {
  src: string;
  volume: number;
}

export interface SpaceStopsSound {
  src: string;
}

export interface PlayerSetsFocusModeEndTime {
  encId: number;
  focusModeEndTime: string;
}

export interface PlayerBlocks {
  blockedBy: string;
  blocked: boolean;
}

export interface CustomEvent {
  name: string;
  payload: string;
}

export interface PlayerUpdatesFocusModeStatus {
  encId: number;
  isInFocusMode: boolean;
}

export interface PlayerSetsItemString {
  encId: number;
  itemString: string;
}

export interface PlayerTriggersObject {
  encId: number;
  /** mapId and key are optional because the same action is used (with empty data) to drop the thing you're carrying */
  mapId?: string | undefined;
  key?: string | undefined;
}

export interface PlayerNotifies {
  encId: number;
  notification: string;
}

export interface PlayerSetsFollowTarget {
  encId: number;
  followTarget: string;
}

export interface PlayerRequestsToLead {
  encId: number;
  snapshot: string;
}

export interface PlayerSetsManualVideoSrc {
  encId: number;
  manualVideoSrc: string;
}

export interface PlayerSetsIsNpc {
  encId: number;
  isNpc: boolean;
}

export interface PlayerSetsSubtitle {
  encId: number;
  subtitle: string;
}

export interface PlayerCrafts {
  encId: number;
  inputs: { [key: string]: number };
}

export interface PlayerCrafts_InputsEntry {
  key: string;
  value: number;
}

export interface MapMoveObject {
  mapId: string;
  objectId: string;
  targetX: number;
  targetY: number;
  targetXOffset?: number | undefined;
  targetYOffset?:
    | number
    | undefined;
  /** Time it takes to move object (in milliseconds) */
  duration: number;
  /**
   * "Linear" (default) | "Cubic" | "Elastic" | "Bounce" | "Back"
   * ---
   * Linear = constant speed.
   * Cubic = slight easing.
   * Elastic = spring-like motion; object overshoots point and ping-pongs until settling on the target.
   * Bounce = similar to a bouncing object coming to rest
   * Back = object slightly overshoots point and quickly settles back onto target.
   */
  easing?: string | undefined;
}

export interface PlayerEditsChatMessage {
  id: string;
  likes?: number | undefined;
  replied?: boolean | undefined;
  reply?: ChatReply | undefined;
  approved?: boolean | undefined;
}

export interface FXShakeObject {
  mapId: string;
  targetId: string;
  intensity?: number | undefined;
  durationMs?: number | undefined;
  mode?: number | undefined;
}

export interface FXShakeCamera {
  intensity?: number | undefined;
  durationMs?:
    | number
    | undefined;
  /** Map on which this should be applied (empty = entire space shakes) */
  mapId?:
    | string
    | undefined;
  /**
   * User ID this shake should apply to (empty = everyone in the given map or space will shake)
   * If mapID _and_ a target is provided, the map ID is disregarded and only the target user will shake.
   */
  targetUserId?: string | undefined;
}

export interface PlayerHighFives {
  encId: number;
  encIdTarget: number;
  emote?: string | undefined;
}

export interface PlayerSendsCommand {
  encId: number;
  command: string;
}

export interface SpaceRegistersCommand {
  command: string;
}

export interface PlayerUpdatesInventory {
  encId: number;
  /** maps item ids to item data */
  items: { [key: string]: InventoryItem };
  /** maps item ids to order string (e.g. "1,2" or "left-hand") */
  order: { [key: string]: string };
}

export interface PlayerUpdatesInventory_ItemsEntry {
  key: string;
  value: InventoryItem | undefined;
}

export interface PlayerUpdatesInventory_OrderEntry {
  key: string;
  value: string;
}

export interface SpaceUpdatesItems {
  /** maps item id to the full info about that Item */
  items: { [key: string]: SpaceItem };
}

export interface SpaceUpdatesItems_ItemsEntry {
  key: string;
  value: SpaceItem | undefined;
}

export interface PlayerTriggersInventoryItem {
  encId: number;
  itemId: string;
  abilityId: string;
}

export interface PlayerSetsAllowScreenPointer {
  encId: number;
  allowScreenPointer: boolean;
}

export interface PrecomputedEnterLocation {
  enterLocation: MapLocation | undefined;
}

export interface PlayerSetsDeskInfo {
  encId: number;
  deskInfo: DeskInfoV2 | undefined;
}

export interface SpaceSetsCapacity {
  capacity: number;
}

export interface SpaceOverCapacityDeniesUser {
  userId: string;
}

export interface PlayerSetsAway {
  encId: number;
  away: boolean;
}

export interface PlayerStartsRecording {
  encId: number;
  nookId: string;
  initializing?: boolean | undefined;
}

export interface AccessRequest {
  guestId: string;
  memberId: string;
  requestedAtUnixTime: number;
  guestName: string;
  guestCurrentlyEquippedWearables?: DBOutfit | undefined;
}

export interface AccessRequestsUpdated {
  requests: AccessRequest[];
}

export interface AccessRequestRespondedTo {
  targetId: string;
  accepted: boolean;
  location: MapLocation | undefined;
}

export interface PlayerGuestPassStatus {
  userId: string;
  guestPassStatus: string;
}

export interface SpaceSetsGuestPassStatuses {
  playerGuestPassStatuses: PlayerGuestPassStatus[];
}

export interface SetDeskFromNextAvailableDesk {
  targetId?: string | undefined;
  preferredDesk?: MapAndDesk | undefined;
  desksToIgnore: MapAndDesk[];
}

export interface SpaceRolePermissionOverrideUpdated {
  role: string;
  permission: string;
  enabled: boolean;
}

export interface ChimeSetsUserInfo {
  resource: string;
}

export interface ClientServerBatch {
  /** don't add more stuff here */
  actions: ClientServerAction[];
}

export interface ClientServerAction {
  /** future: optional txnID field */
  txnId?: number | undefined;
  action?:
    | { $case: "clientHeartbeat"; clientHeartbeat: ClientHeartbeat }
    | { $case: "clientBackupHeartbeat"; clientBackupHeartbeat: ClientBackupHeartbeat }
    | { $case: "updateSubscriptions"; updateSubscriptions: UpdateSubscriptions }
    | { $case: "move"; move: Move }
    | { $case: "setAffiliation"; setAffiliation: SetAffiliation }
    | { $case: "setStatus"; setStatus: SetStatus }
    | { $case: "spotlight"; spotlight: Spotlight }
    | { $case: "ring"; ring: Ring }
    | { $case: "ban"; ban: Ban }
    | { $case: "kick"; kick: Kick }
    | { $case: "setImpassable"; setImpassable: SetImpassable }
    | { $case: "chat"; chat: Chat }
    | { $case: "interact"; interact: Deprecated }
    | { $case: "enterWhisper"; enterWhisper: EnterWhisper }
    | { $case: "leaveWhisper"; leaveWhisper: LeaveWhisper }
    | { $case: "setEmojiStatus"; setEmojiStatus: SetEmojiStatus }
    | { $case: "activelySpeaking"; activelySpeaking: ActivelySpeaking }
    | { $case: "setName"; setName: SetName }
    | { $case: "setTextStatus"; setTextStatus: SetTextStatus }
    | { $case: "teleport"; teleport: Teleport }
    | { $case: "exit"; exit: Exit }
    | { $case: "enter"; enter: Enter }
    | { $case: "setWorkCondition"; setWorkCondition: Deprecated }
    | { $case: "respawn"; respawn: Respawn }
    | { $case: "spawn"; spawn: Spawn }
    | { $case: "ghost"; ghost: Ghost }
    | { $case: "init"; init: Init }
    | { $case: "setOutfitString"; setOutfitString: Deprecated }
    | { $case: "shootConfetti"; shootConfetti: ShootConfetti }
    | { $case: "setEventStatus"; setEventStatus: SetEventStatus }
    | { $case: "setInConversation"; setInConversation: SetInConversation }
    | { $case: "setCurrentDesk"; setCurrentDesk: Deprecated }
    | { $case: "setCurrentArea"; setCurrentArea: SetCurrentArea }
    | { $case: "setImagePointer"; setImagePointer: SetImagePointer }
    | { $case: "setGoKartId"; setGoKartId: Deprecated }
    | { $case: "mapSetDimensions"; mapSetDimensions: MapSetDimensions }
    | { $case: "mapSetCollisions"; mapSetCollisions: MapSetCollisions }
    | { $case: "mapSetBackgroundImagePath"; mapSetBackgroundImagePath: MapSetBackgroundImagePath }
    | { $case: "mapSetForegroundImagePath"; mapSetForegroundImagePath: MapSetForegroundImagePath }
    | { $case: "mapSetSprites"; mapSetSprites: Deprecated }
    | { $case: "mapSetSpawns"; mapSetSpawns: MapSetSpawns }
    | { $case: "mapSetSpaces"; mapSetSpaces: Deprecated }
    | { $case: "mapSetPortals"; mapSetPortals: MapSetPortals }
    | { $case: "mapSetAnnouncer"; mapSetAnnouncer: MapSetAnnouncer }
    | { $case: "mapSetAssets"; mapSetAssets: MapSetAssets }
    | { $case: "mapSetObjects"; mapSetObjects: Deprecated }
    | { $case: "mapSetName"; mapSetName: MapSetName }
    | { $case: "mapSetMuteOnEntry"; mapSetMuteOnEntry: MapSetMuteOnEntry }
    | { $case: "mapSetUseDrawnBG"; mapSetUseDrawnBG: MapSetUseDrawnBG }
    | { $case: "mapSetWalls"; mapSetWalls: MapSetWalls }
    | { $case: "mapSetFloors"; mapSetFloors: MapSetFloors }
    | { $case: "mapSetAreas"; mapSetAreas: MapSetAreas }
    | { $case: "mapAddObject"; mapAddObject: MapAddObject }
    | { $case: "mapDeleteObject"; mapDeleteObject: Deprecated }
    | { $case: "mapSetSpawn"; mapSetSpawn: MapSetSpawn }
    | { $case: "setIsAlone"; setIsAlone: SetIsAlone }
    | { $case: "mapSetMiniMapImagePath"; mapSetMiniMapImagePath: MapSetMiniMapImagePath }
    | { $case: "mapSetEnabledChats"; mapSetEnabledChats: MapSetEnabledChats }
    | { $case: "mapSetDescription"; mapSetDescription: MapSetDescription }
    | { $case: "mapSetDecoration"; mapSetDecoration: MapSetDecoration }
    | { $case: "mapSetTutorialTasks"; mapSetTutorialTasks: MapSetTutorialTasks }
    | { $case: "playSound"; playSound: PlaySound }
    | { $case: "mapSetScript"; mapSetScript: MapSetScript }
    | { $case: "setIsMobile"; setIsMobile: SetIsMobile }
    | { $case: "setScreenPointer"; setScreenPointer: SetScreenPointer }
    | { $case: "setEmoteV2"; setEmoteV2: SetEmoteV2 }
    | { $case: "setFocusModeEndTime"; setFocusModeEndTime: SetFocusModeEndTime }
    | { $case: "mapDeleteObjectById"; mapDeleteObjectById: MapDeleteObjectById }
    | { $case: "customAction"; customAction: CustomAction }
    | { $case: "block"; block: Block }
    | { $case: "setItemString"; setItemString: SetItemString }
    | { $case: "triggerItem"; triggerItem: Deprecated }
    | { $case: "notify"; notify: Notify }
    | { $case: "setFollowTarget"; setFollowTarget: SetFollowTarget }
    | { $case: "requestToLead"; requestToLead: RequestToLead }
    | { $case: "enterPortal"; enterPortal: EnterPortal }
    | { $case: "setManualVideoSrc"; setManualVideoSrc: SetManualVideoSrc }
    | { $case: "setSubtitle"; setSubtitle: SetSubtitle }
    | { $case: "playerUpdatesSession"; playerUpdatesSession: Deprecated }
    | { $case: "mapMoveObject"; mapMoveObject: MapMoveObject }
    | { $case: "chatMessageUpdated"; chatMessageUpdated: ChatMessageUpdated }
    | { $case: "fxShakeObject"; fxShakeObject: FXShakeObject }
    | { $case: "fxShakeCamera"; fxShakeCamera: FXShakeCamera }
    | { $case: "registerCommand"; registerCommand: RegisterCommand }
    | { $case: "sendCommand"; sendCommand: SendCommand }
    | { $case: "speakerUpdatesSession"; speakerUpdatesSession: SpeakerUpdatesSession }
    | { $case: "addInventoryItem"; addInventoryItem: AddInventoryItem }
    | { $case: "removeInventoryItem"; removeInventoryItem: RemoveInventoryItem }
    | { $case: "setVehicleId"; setVehicleId: SetVehicleId }
    | { $case: "setSpeedModifier"; setSpeedModifier: SetSpeedModifier }
    | { $case: "highFive"; highFive: HighFive }
    | { $case: "updateSpaceItems"; updateSpaceItems: SpaceUpdatesItems }
    | { $case: "stopSound"; stopSound: StopSound }
    | { $case: "hipToBeSquare"; hipToBeSquare: HipToBeSquare }
    | { $case: "craft"; craft: Craft }
    | { $case: "triggerInventoryItem"; triggerInventoryItem: TriggerInventoryItem }
    | { $case: "setAllowScreenPointer"; setAllowScreenPointer: SetAllowScreenPointer }
    | { $case: "precomputeEnter"; precomputeEnter: PrecomputeEnter }
    | { $case: "requestMute"; requestMute: RequestMute }
    | { $case: "setDeskInfo"; setDeskInfo: SetDeskInfo }
    | { $case: "mapSetNooks"; mapSetNooks: MapSetNooks }
    | { $case: "requestToJoinNook"; requestToJoinNook: RequestToJoinNook }
    | { $case: "updateNookPermission"; updateNookPermission: UpdateNookPermission }
    | { $case: "wave"; wave: Wave }
    | { $case: "setPronouns"; setPronouns: SetPronouns }
    | { $case: "setTitle"; setTitle: SetTitle }
    | { $case: "setTimezone"; setTimezone: SetTimezone }
    | { $case: "setPhone"; setPhone: SetPhone }
    | { $case: "setDescription"; setDescription: SetDescription }
    | { $case: "setProfileImageUrl"; setProfileImageUrl: SetProfileImageUrl }
    | { $case: "setPersonalImageUrl"; setPersonalImageUrl: SetPersonalImageUrl }
    | { $case: "setAway"; setAway: SetAway }
    | { $case: "setCity"; setCity: SetCity }
    | { $case: "setCountry"; setCountry: SetCountry }
    | { $case: "setStartDate"; setStartDate: SetStartDate }
    | { $case: "startRecording"; startRecording: StartRecording }
    | { $case: "requestAccessViaCheckIn"; requestAccessViaCheckIn: RequestAccessViaCheckIn }
    | { $case: "respondToAccessRequest"; respondToAccessRequest: RespondToAccessRequest }
    | { $case: "setAvailability"; setAvailability: SetAvailability }
    | { $case: "respawnAtDesk"; respawnAtDesk: RespawnAtDesk }
    | { $case: "setDeskFromNextAvailableDesk"; setDeskFromNextAvailableDesk: SetDeskFromNextAvailableDesk }
    | { $case: "setSpaceRolePermissionOverride"; setSpaceRolePermissionOverride: SetSpaceRolePermissionOverride }
    | { $case: "setCurrentlyEquippedWearables"; setCurrentlyEquippedWearables: SetCurrentlyEquippedWearables }
    | { $case: "setDisplayEmail"; setDisplayEmail: SetDisplayEmail }
    | { $case: "mapDeleteObjectByKey"; mapDeleteObjectByKey: MapDeleteObjectByKey }
    | { $case: "mapUpdateObjects"; mapUpdateObjects: MapUpdateObjects }
    | { $case: "interactWithObject"; interactWithObject: InteractWithObject }
    | { $case: "triggerObject"; triggerObject: TriggerObject }
    | { $case: "joinChimeMeeting"; joinChimeMeeting: JoinChimeMeeting };
}

/** tbh this is half heartbeat half for measuring ping */
export interface ClientHeartbeat {
}

/** this is because we've attached timings and stuff to the former one, don't want to interfere */
export interface ClientBackupHeartbeat {
}

export interface UpdateSubscriptions {
  subscriptions: { [key: string]: boolean };
  mapUpdateIds: { [key: string]: number };
}

export interface UpdateSubscriptions_SubscriptionsEntry {
  key: string;
  value: boolean;
}

export interface UpdateSubscriptions_MapUpdateIdsEntry {
  key: string;
  value: number;
}

export interface Move {
  dir: MoveDirectionEnum_ENUM;
  stopped: boolean;
  inputId: number;
  targetId?: string | undefined;
}

export interface RequestMute {
  target: string;
  video: boolean;
}

export interface SetAffiliation {
  affiliation: string;
  targetId?: string | undefined;
}

export interface SetStatus {
  status: boolean;
  targetId?: string | undefined;
}

export interface SetAvailability {
  availability: string;
  endOption?: string | undefined;
}

export interface SetCurrentlyEquippedWearables {
  currentlyEquippedWearables: DBOutfit | undefined;
  targetId?: string | undefined;
}

export interface Spotlight {
  spotlightedUser: string;
  isSpotlighted: boolean;
}

export interface Ring {
  user: string;
}

export interface SetImagePointer {
  objectId: string;
  x: number;
  y: number;
}

export interface SetScreenPointer {
  screenId: string;
  x: number;
  y: number;
}

export interface Ban {
  user: string;
}

export interface Kick {
  user: string;
}

export interface Block {
  blockedUserId: string;
  blocked: boolean;
}

export interface SetImpassable {
  mapId: string;
  x: number;
  y: number;
  impassable: boolean;
}

export interface Chat {
  chatRecipient: string;
  contents: string;
  localPlayerIds: string[];
  mapId: string;
  id?: string | undefined;
  nookId?: string | undefined;
}

export interface Notify {
  notification: string;
}

export interface InteractWithObject {
  mapId: string;
  key: string;
  /** JSON string. Really this should be a separate "submit" action */
  dataJson?: string | undefined;
}

export interface ActivelySpeaking {
  activelySpeaking: boolean;
}

export interface EnterWhisper {
  recipientId: string;
  dir: MoveDirectionEnum_ENUM;
}

export interface LeaveWhisper {
}

export interface Ghost {
  ghost: number;
  /** why is this a uint32? it is in the original impl so.. it stays */
  targetId?: string | undefined;
}

export interface SetEmoteV2 {
  emote?: string | undefined;
  targetId?: string | undefined;
  count?: number | undefined;
}

export interface SetName {
  name: string;
  targetId?: string | undefined;
}

export interface SetTextStatus {
  textStatus: string;
  targetId?: string | undefined;
}

export interface SetPronouns {
  pronouns: string;
  targetId?: string | undefined;
}

export interface SetTitle {
  title: string;
  targetId?: string | undefined;
}

export interface SetCity {
  city: string;
  targetId?: string | undefined;
}

export interface SetCountry {
  country: string;
  targetId?: string | undefined;
}

export interface SetStartDate {
  startDate: string;
  targetId?: string | undefined;
}

export interface SetTimezone {
  timezone: string;
  targetId?: string | undefined;
}

export interface SetPhone {
  phone: string;
  targetId?: string | undefined;
}

export interface SetDisplayEmail {
  displayEmail: string;
  targetId?: string | undefined;
}

export interface SetDescription {
  description: string;
  targetId?: string | undefined;
}

export interface SetProfileImageUrl {
  profileImageUrl: string;
  targetId?: string | undefined;
}

export interface SetPersonalImageUrl {
  personalImageUrl: string;
  targetId?: string | undefined;
}

export interface Exit {
}

export interface Enter {
  info?: PlayerInitInfo | undefined;
  spawnToken?: string | undefined;
  targetId?: string | undefined;
}

export interface PrecomputeEnter {
  enterLocation?: MapLocation | undefined;
  spawnToken?: string | undefined;
}

export interface SetEmojiStatus {
  emojiStatus: string;
  targetId?: string | undefined;
}

export interface Teleport {
  mapId: string;
  x: number;
  y: number;
  targetId?: string | undefined;
  direction?: SpriteDirectionEnum_ENUM | undefined;
}

export interface Spawn {
  spawnToken: string;
}

export interface Respawn {
}

export interface RespawnAtDesk {
}

export interface RequestToJoinNook {
  nookId: string;
  mapId: string;
  name?: string | undefined;
}

export interface UpdateNookPermission {
  playerId: string;
  nookId: string;
  granted: boolean;
}

export interface Init {
  spaceId: string;
  auth?: { $case: "token"; token: string } | { $case: "apiKey"; apiKey: string };
}

export interface MapAddObject {
  mapId: string;
  object: WireObject | undefined;
}

export interface MapUpdateObjects {
  mapId: string;
  objects: { [key: string]: WireObject };
  updatesAreOverwrites?: boolean | undefined;
}

export interface MapUpdateObjects_ObjectsEntry {
  key: string;
  value: WireObject | undefined;
}

export interface ShootConfetti {
  targetId?: string | undefined;
}

export interface SetEventStatus {
  eventStatus: string;
  targetId?: string | undefined;
}

export interface SetInConversation {
  inConversation: boolean;
  targetId?: string | undefined;
}

export interface SetCurrentArea {
  currentArea: string;
  targetId?: string | undefined;
}

export interface SetVehicleId {
  vehicleId: string;
  targetId?: string | undefined;
  action?: string | undefined;
}

export interface SetSpeedModifier {
  speedModifier: number;
  targetId?: string | undefined;
}

export interface SetIsAlone {
  isAlone: boolean;
  targetId?: string | undefined;
}

export interface SetIsMobile {
  isMobile: boolean;
}

export interface PlaySound {
  src: string;
  volume: number;
  targetId?: string | undefined;
}

export interface StopSound {
  src: string;
  targetId?: string | undefined;
}

export interface SetFocusModeEndTime {
  focusModeEndTime: string;
  targetId?: string | undefined;
}

export interface SetItemString {
  itemString: string;
  targetId?: string | undefined;
}

export interface TriggerObject {
  mapId?: string | undefined;
  key?: string | undefined;
}

export interface CustomAction {
  name: string;
  payload: string;
  recipients: string[];
  sendToAll?: boolean | undefined;
}

export interface SetFollowTarget {
  followTarget: string;
  targetId?: string | undefined;
}

export interface RequestToLead {
  target: string;
  snapshot: string;
}

export interface EnterPortal {
  targetUrl: string;
  bypassPrompt?: boolean | undefined;
  targetId?: string | undefined;
}

export interface SetManualVideoSrc {
  manualVideoSrc: string;
  targetId?: string | undefined;
}

export interface SetSubtitle {
  subtitle: string;
  targetId?: string | undefined;
}

export interface MapCommitsChanges {
  mapId: string;
  updateId: number;
}

export interface SpeakerUpdatesSession {
  sessionId: string;
  customizeRoomEnabled?: boolean | undefined;
  chatEnabled?: boolean | undefined;
  qaEnabled?: boolean | undefined;
  approveQuestionsEnabled?: boolean | undefined;
  massMuteEnabled?: boolean | undefined;
}

export interface ChatReply {
  senderId: string;
  senderName: string;
  contents: string;
}

export interface ChatMessageUpdated {
  id: string;
}

export interface SendCommand {
  command: string;
  targetId?: string | undefined;
}

export interface RegisterCommand {
  command: string;
}

export interface Craft {
  inputs: { [key: string]: number };
}

export interface Craft_InputsEntry {
  key: string;
  value: number;
}

export interface HighFive {
  targetId: string;
  emote?: string | undefined;
}

export interface AddInventoryItem {
  itemId: string;
  delta: number;
  targetId: string;
}

export interface RemoveInventoryItem {
  itemId: string;
  delta: number;
  targetId?: string | undefined;
}

export interface HipToBeSquare {
  data: string;
}

export interface TriggerInventoryItem {
  itemId: string;
  abilityId: string;
}

export interface SetAllowScreenPointer {
  allowScreenPointer: boolean;
}

export interface SetDeskInfo {
  deskInfo: DeskInfoV2 | undefined;
  targetId?: string | undefined;
}

export interface Wave {
  user: string;
  isReply: boolean;
}

export interface SetAway {
  away: boolean;
  targetId?: string | undefined;
}

export interface StartRecording {
  nookId: string;
  initializing?: boolean | undefined;
}

export interface RequestAccessViaCheckIn {
  userId: string;
  canceled: boolean;
  name?: string | undefined;
  currentlyEquippedWearables?: DBOutfit | undefined;
}

export interface RespondToAccessRequest {
  userId: string;
  accepted: boolean;
  locationType?: RespondToAccessRequest_LocationTypeEnum | undefined;
}

export enum RespondToAccessRequest_LocationTypeEnum {
  MyLocation = 0,
  DefaultSpawn = 1,
}

export interface SetSpaceRolePermissionOverride {
  role: string;
  permission: string;
  enabled: boolean;
}

export interface JoinChimeMeeting {
  mediaRegion?: string | undefined;
}

function createBaseDeprecated(): Deprecated {
  return {};
}

export const Deprecated = {
  encode(_: Deprecated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deprecated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpriteDirectionEnum(): SpriteDirectionEnum {
  return {};
}

export const SpriteDirectionEnum = {
  encode(_: SpriteDirectionEnum, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpriteDirectionEnum {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMoveDirectionEnum(): MoveDirectionEnum {
  return {};
}

export const MoveDirectionEnum = {
  encode(_: MoveDirectionEnum, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveDirectionEnum {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseInteractionEnum(): InteractionEnum {
  return {};
}

export const InteractionEnum = {
  encode(_: InteractionEnum, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InteractionEnum {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerInitInfo(): PlayerInitInfo {
  return {};
}

export const PlayerInitInfo = {
  encode(message: PlayerInitInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.x !== undefined) {
      writer.uint32(24).uint32(message.x);
    }
    if (message.y !== undefined) {
      writer.uint32(32).uint32(message.y);
    }
    if (message.map !== undefined) {
      writer.uint32(42).string(message.map);
    }
    if (message.affiliation !== undefined) {
      writer.uint32(50).string(message.affiliation);
    }
    if (message.busy !== undefined) {
      writer.uint32(56).bool(message.busy);
    }
    if (message.textStatus !== undefined) {
      writer.uint32(66).string(message.textStatus);
    }
    if (message.emojiStatus !== undefined) {
      writer.uint32(74).string(message.emojiStatus);
    }
    if (message.currentlyEquippedWearables !== undefined) {
      DBOutfit.encode(message.currentlyEquippedWearables, writer.uint32(82).fork()).ldelim();
    }
    if (message.focusModeEndTime !== undefined) {
      writer.uint32(90).string(message.focusModeEndTime);
    }
    if (message.itemString !== undefined) {
      writer.uint32(114).string(message.itemString);
    }
    if (message.isNpc !== undefined) {
      writer.uint32(120).bool(message.isNpc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerInitInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseDBOutfit(): DBOutfit {
  return { skin: "", hair: "", facial_hair: "", top: "", bottom: "", shoes: "", hat: "", glasses: "", other: "" };
}

export const DBOutfit = {
  encode(message: DBOutfit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.costume !== undefined) {
      writer.uint32(82).string(message.costume);
    }
    if (message.mobility !== undefined) {
      writer.uint32(90).string(message.mobility);
    }
    if (message.jacket !== undefined) {
      writer.uint32(98).string(message.jacket);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DBOutfit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseWireObjectSpritesheetFraming(): WireObjectSpritesheetFraming {
  return { frameWidth: 0, frameHeight: 0 };
}

export const WireObjectSpritesheetFraming = {
  encode(message: WireObjectSpritesheetFraming, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.frameWidth !== 0) {
      writer.uint32(8).int32(message.frameWidth);
    }
    if (message.frameHeight !== 0) {
      writer.uint32(16).int32(message.frameHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WireObjectSpritesheetFraming {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseWireObjectSpriteAnimConfig(): WireObjectSpriteAnimConfig {
  return { sequence: [], frameRate: 0 };
}

export const WireObjectSpriteAnimConfig = {
  encode(message: WireObjectSpriteAnimConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.useSequenceAsRange !== undefined) {
      writer.uint32(8).bool(message.useSequenceAsRange);
    }
    writer.uint32(18).fork();
    for (const v of message.sequence) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.loop !== undefined) {
      writer.uint32(24).bool(message.loop);
    }
    if (message.frameRate !== 0) {
      writer.uint32(32).uint32(message.frameRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WireObjectSpriteAnimConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseWireObjectSpritesheet(): WireObjectSpritesheet {
  return { spritesheetUrl: "", framing: undefined, animations: {} };
}

export const WireObjectSpritesheet = {
  encode(message: WireObjectSpritesheet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spritesheetUrl !== "") {
      writer.uint32(10).string(message.spritesheetUrl);
    }
    if (message.framing !== undefined) {
      WireObjectSpritesheetFraming.encode(message.framing, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.animations).forEach(([key, value]) => {
      WireObjectSpritesheet_AnimationsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.currentAnim !== undefined) {
      writer.uint32(34).string(message.currentAnim);
    }
    if (message.pauseAnimationsIfFpsBelowFramerate !== undefined) {
      writer.uint32(40).bool(message.pauseAnimationsIfFpsBelowFramerate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WireObjectSpritesheet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          if (entry3.value !== undefined) {
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
  },
};

function createBaseWireObjectSpritesheet_AnimationsEntry(): WireObjectSpritesheet_AnimationsEntry {
  return { key: "", value: undefined };
}

export const WireObjectSpritesheet_AnimationsEntry = {
  encode(message: WireObjectSpritesheet_AnimationsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      WireObjectSpriteAnimConfig.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WireObjectSpritesheet_AnimationsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseWireObject(): WireObject {
  return { _tags: [] };
}

export const WireObject = {
  encode(message: WireObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.templateId !== undefined) {
      writer.uint32(10).string(message.templateId);
    }
    if (message._name !== undefined) {
      writer.uint32(18).string(message._name);
    }
    for (const v of message._tags) {
      writer.uint32(26).string(v!);
    }
    if (message.x !== undefined) {
      writer.uint32(32).uint32(message.x);
    }
    if (message.y !== undefined) {
      writer.uint32(40).uint32(message.y);
    }
    if (message.offsetX !== undefined) {
      writer.uint32(53).float(message.offsetX);
    }
    if (message.offsetY !== undefined) {
      writer.uint32(61).float(message.offsetY);
    }
    if (message.color !== undefined) {
      writer.uint32(66).string(message.color);
    }
    if (message.orientation !== undefined) {
      writer.uint32(72).uint32(message.orientation);
    }
    if (message.normal !== undefined) {
      writer.uint32(82).string(message.normal);
    }
    if (message.highlighted !== undefined) {
      writer.uint32(90).string(message.highlighted);
    }
    if (message.type !== undefined) {
      writer.uint32(96).int32(message.type);
    }
    if (message.width !== undefined) {
      writer.uint32(104).uint32(message.width);
    }
    if (message.height !== undefined) {
      writer.uint32(112).uint32(message.height);
    }
    if (message.extensionClass !== undefined) {
      writer.uint32(122).string(message.extensionClass);
    }
    if (message.previewMessage !== undefined) {
      writer.uint32(130).string(message.previewMessage);
    }
    if (message.distThreshold !== undefined) {
      writer.uint32(136).uint32(message.distThreshold);
    }
    if (message.propertiesJson !== undefined) {
      writer.uint32(146).string(message.propertiesJson);
    }
    if (message.sound !== undefined) {
      Sound.encode(message.sound, writer.uint32(154).fork()).ldelim();
    }
    if (message.objectStartTime !== undefined) {
      ObjectTime.encode(message.objectStartTime, writer.uint32(162).fork()).ldelim();
    }
    if (message.objectExpireTime !== undefined) {
      ObjectTime.encode(message.objectExpireTime, writer.uint32(170).fork()).ldelim();
    }
    if (message.id !== undefined) {
      writer.uint32(178).string(message.id);
    }
    if (message.customState !== undefined) {
      writer.uint32(186).string(message.customState);
    }
    if (message.objectPlacerId !== undefined) {
      writer.uint32(194).string(message.objectPlacerId);
    }
    if (message.numGoKarts !== undefined) {
      writer.uint32(200).uint32(message.numGoKarts);
    }
    if (message.spritesheet !== undefined) {
      WireObjectSpritesheet.encode(message.spritesheet, writer.uint32(210).fork()).ldelim();
    }
    if (message.zIndex !== undefined) {
      writer.uint32(221).float(message.zIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WireObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          message.type = reader.int32() as any;
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
  },
};

function createBaseSpaceMemberInfo(): SpaceMemberInfo {
  return { roles: {}, role: "" };
}

export const SpaceMemberInfo = {
  encode(message: SpaceMemberInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.roles).forEach(([key, value]) => {
      SpaceMemberInfo_RolesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.currentlyEquippedWearables !== undefined) {
      DBOutfit.encode(message.currentlyEquippedWearables, writer.uint32(34).fork()).ldelim();
    }
    if (message.allowScreenPointer !== undefined) {
      writer.uint32(48).bool(message.allowScreenPointer);
    }
    if (message.role !== "") {
      writer.uint32(58).string(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceMemberInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpaceMemberInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SpaceMemberInfo_RolesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
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
  },
};

function createBaseSpaceMemberInfo_RolesEntry(): SpaceMemberInfo_RolesEntry {
  return { key: "", value: false };
}

export const SpaceMemberInfo_RolesEntry = {
  encode(message: SpaceMemberInfo_RolesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceMemberInfo_RolesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseBackedUpDeskObject(): BackedUpDeskObject {
  return { obj: undefined, offsetX: 0, offsetY: 0 };
}

export const BackedUpDeskObject = {
  encode(message: BackedUpDeskObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.obj !== undefined) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): BackedUpDeskObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseDeskObjects(): DeskObjects {
  return { objects: {} };
}

export const DeskObjects = {
  encode(message: DeskObjects, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.objects).forEach(([key, value]) => {
      DeskObjects_ObjectsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeskObjects {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeskObjects();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = DeskObjects_ObjectsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.objects[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseDeskObjects_ObjectsEntry(): DeskObjects_ObjectsEntry {
  return { key: "", value: undefined };
}

export const DeskObjects_ObjectsEntry = {
  encode(message: DeskObjects_ObjectsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      BackedUpDeskObject.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeskObjects_ObjectsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseDeskInfoV2(): DeskInfoV2 {
  return {};
}

export const DeskInfoV2 = {
  encode(message: DeskInfoV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deskId !== undefined) {
      writer.uint32(10).string(message.deskId);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.locked !== undefined) {
      writer.uint32(24).bool(message.locked);
    }
    if (message.lastDeskObjects !== undefined) {
      DeskObjects.encode(message.lastDeskObjects, writer.uint32(34).fork()).ldelim();
    }
    if (message.mapId !== undefined) {
      writer.uint32(42).string(message.mapId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeskInfoV2 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapAndDesk(): MapAndDesk {
  return { mapId: "", deskId: "" };
}

export const MapAndDesk = {
  encode(message: MapAndDesk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.deskId !== "") {
      writer.uint32(18).string(message.deskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapAndDesk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSound(): Sound {
  return { src: "", volume: 0, loop: false, maxDistance: 0 };
}

export const Sound = {
  encode(message: Sound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.isPositional !== undefined) {
      writer.uint32(40).bool(message.isPositional);
    }
    if (message.stream !== undefined) {
      writer.uint32(48).bool(message.stream);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sound {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseObjectTime(): ObjectTime {
  return { _seconds: 0 };
}

export const ObjectTime = {
  encode(message: ObjectTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message._seconds !== 0) {
      writer.uint32(8).uint32(message._seconds);
    }
    if (message._timezone !== undefined) {
      writer.uint32(18).string(message._timezone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectTime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpace(): Space {
  return { spaceId: "", x: 0, y: 0 };
}

export const Space = {
  encode(message: Space, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spaceId !== "") {
      writer.uint32(10).string(message.spaceId);
    }
    if (message.x !== 0) {
      writer.uint32(16).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).uint32(message.y);
    }
    if (message.colored !== undefined) {
      writer.uint32(32).bool(message.colored);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Space {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseNookCoords(): NookCoords {
  return { coords: [] };
}

export const NookCoords = {
  encode(message: NookCoords, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coords) {
      WirePoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NookCoords {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseAllowedUsers(): AllowedUsers {
  return { users: [] };
}

export const AllowedUsers = {
  encode(message: AllowedUsers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedUsers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseRequestUser(): RequestUser {
  return {};
}

export const RequestUser = {
  encode(message: RequestUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseRequestedUsers(): RequestedUsers {
  return { users: {} };
}

export const RequestedUsers = {
  encode(message: RequestedUsers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.users).forEach(([key, value]) => {
      RequestedUsers_UsersEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestedUsers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestedUsers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = RequestedUsers_UsersEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.users[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseRequestedUsers_UsersEntry(): RequestedUsers_UsersEntry {
  return { key: "", value: undefined };
}

export const RequestedUsers_UsersEntry = {
  encode(message: RequestedUsers_UsersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      RequestUser.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestedUsers_UsersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseRecordingInfo(): RecordingInfo {
  return { active: false };
}

export const RecordingInfo = {
  encode(message: RecordingInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    if (message.initiatingPlayer !== undefined) {
      writer.uint32(10).string(message.initiatingPlayer);
    }
    if (message.egressId !== undefined) {
      writer.uint32(34).string(message.egressId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseNookDiff(): NookDiff {
  return {};
}

export const NookDiff = {
  encode(message: NookDiff, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nookCoords !== undefined) {
      NookCoords.encode(message.nookCoords, writer.uint32(10).fork()).ldelim();
    }
    if (message.colored !== undefined) {
      writer.uint32(16).bool(message.colored);
    }
    if (message.name !== undefined) {
      writer.uint32(26).string(message.name);
    }
    if (message.bookable !== undefined) {
      writer.uint32(32).bool(message.bookable);
    }
    if (message.capacity !== undefined) {
      writer.uint32(40).uint32(message.capacity);
    }
    if (message.restricted !== undefined) {
      writer.uint32(48).bool(message.restricted);
    }
    if (message.allowedUsers !== undefined) {
      AllowedUsers.encode(message.allowedUsers, writer.uint32(58).fork()).ldelim();
    }
    if (message.requestedUsers !== undefined) {
      RequestedUsers.encode(message.requestedUsers, writer.uint32(66).fork()).ldelim();
    }
    if (message.isInMeeting !== undefined) {
      writer.uint32(72).bool(message.isInMeeting);
    }
    if (message.isDesk !== undefined) {
      writer.uint32(80).bool(message.isDesk);
    }
    if (message.recordingInfo !== undefined) {
      RecordingInfo.encode(message.recordingInfo, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NookDiff {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseWirePoint(): WirePoint {
  return { x: 0, y: 0 };
}

export const WirePoint = {
  encode(message: WirePoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).uint32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WirePoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpawnPoint(): SpawnPoint {
  return { x: 0, y: 0 };
}

export const SpawnPoint = {
  encode(message: SpawnPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).uint32(message.y);
    }
    if (message.spawnId !== undefined) {
      writer.uint32(26).string(message.spawnId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpawnPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePortal(): Portal {
  return { x: 0, y: 0 };
}

export const Portal = {
  encode(message: Portal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).uint32(message.y);
    }
    if (message.targetMap !== undefined) {
      writer.uint32(26).string(message.targetMap);
    }
    if (message.targetUrl !== undefined) {
      writer.uint32(34).string(message.targetUrl);
    }
    if (message.targetX !== undefined) {
      writer.uint32(40).uint32(message.targetX);
    }
    if (message.targetY !== undefined) {
      writer.uint32(48).uint32(message.targetY);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Portal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseAnnouncer(): Announcer {
  return { x: 0, y: 0 };
}

export const Announcer = {
  encode(message: Announcer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).uint32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Announcer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseAsset(): Asset {
  return { x: 0, y: 0, src: "" };
}

export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.src !== "") {
      writer.uint32(26).string(message.src);
    }
    if (message.width !== undefined) {
      writer.uint32(32).uint32(message.width);
    }
    if (message.height !== undefined) {
      writer.uint32(40).uint32(message.height);
    }
    if (message.inFront !== undefined) {
      writer.uint32(48).bool(message.inFront);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseAreaPosition(): AreaPosition {
  return { x1: 0, y1: 0, x2: 0, y2: 0 };
}

export const AreaPosition = {
  encode(message: AreaPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AreaPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseWireArea(): WireArea {
  return { coords: [] };
}

export const WireArea = {
  encode(message: WireArea, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.category !== undefined) {
      writer.uint32(10).string(message.category);
    }
    for (const v of message.coords) {
      AreaPosition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WireArea {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseDBDesk(): DBDesk {
  return { coords: [] };
}

export const DBDesk = {
  encode(message: DBDesk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coords) {
      AreaPosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DBDesk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetDimensions(): MapSetDimensions {
  return { mapId: "", width: 0, height: 0 };
}

export const MapSetDimensions = {
  encode(message: MapSetDimensions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetDimensions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetCollisions(): MapSetCollisions {
  return { mapId: "", x: 0, y: 0, w: 0, h: 0, mask: "" };
}

export const MapSetCollisions = {
  encode(message: MapSetCollisions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetCollisions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetCollisionsBits(): MapSetCollisionsBits {
  return { mapId: "", overwrite: false, x: 0, y: 0, w: 0, h: 0, mask: new Uint8Array() };
}

export const MapSetCollisionsBits = {
  encode(message: MapSetCollisionsBits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetCollisionsBits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetBackgroundImagePath(): MapSetBackgroundImagePath {
  return { mapId: "", backgroundImagePath: "" };
}

export const MapSetBackgroundImagePath = {
  encode(message: MapSetBackgroundImagePath, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.backgroundImagePath !== "") {
      writer.uint32(18).string(message.backgroundImagePath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetBackgroundImagePath {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetForegroundImagePath(): MapSetForegroundImagePath {
  return { mapId: "", foregroundImagePath: "" };
}

export const MapSetForegroundImagePath = {
  encode(message: MapSetForegroundImagePath, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.foregroundImagePath !== "") {
      writer.uint32(18).string(message.foregroundImagePath);
    }
    if (message.delete !== undefined) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetForegroundImagePath {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetNooks(): MapSetNooks {
  return { mapId: "", nooks: {} };
}

export const MapSetNooks = {
  encode(message: MapSetNooks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    Object.entries(message.nooks).forEach(([key, value]) => {
      MapSetNooks_NooksEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.overwrite !== undefined) {
      writer.uint32(24).bool(message.overwrite);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetNooks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapSetNooks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          const entry2 = MapSetNooks_NooksEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
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
  },
};

function createBaseMapSetNooks_NooksEntry(): MapSetNooks_NooksEntry {
  return { key: "", value: undefined };
}

export const MapSetNooks_NooksEntry = {
  encode(message: MapSetNooks_NooksEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      NookDiff.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetNooks_NooksEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetSpawn(): MapSetSpawn {
  return { mapId: "", spawn: undefined };
}

export const MapSetSpawn = {
  encode(message: MapSetSpawn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.spawn !== undefined) {
      WirePoint.encode(message.spawn, writer.uint32(18).fork()).ldelim();
    }
    if (message.delete !== undefined) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetSpawn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetSpawns(): MapSetSpawns {
  return { mapId: "", spawns: [] };
}

export const MapSetSpawns = {
  encode(message: MapSetSpawns, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    for (const v of message.spawns) {
      SpawnPoint.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetSpawns {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetPortals(): MapSetPortals {
  return { mapId: "", portals: [] };
}

export const MapSetPortals = {
  encode(message: MapSetPortals, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    for (const v of message.portals) {
      Portal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetPortals {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetAnnouncer(): MapSetAnnouncer {
  return { mapId: "", announcer: [] };
}

export const MapSetAnnouncer = {
  encode(message: MapSetAnnouncer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    for (const v of message.announcer) {
      Announcer.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetAnnouncer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetAssets(): MapSetAssets {
  return { mapId: "", assets: [] };
}

export const MapSetAssets = {
  encode(message: MapSetAssets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.delete !== undefined) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetAssets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetObjectsV2(): MapSetObjectsV2 {
  return { mapId: "", objects: {} };
}

export const MapSetObjectsV2 = {
  encode(message: MapSetObjectsV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    Object.entries(message.objects).forEach(([key, value]) => {
      MapSetObjectsV2_ObjectsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.updatesAreOverwrites !== undefined) {
      writer.uint32(24).bool(message.updatesAreOverwrites);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetObjectsV2 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapSetObjectsV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          const entry2 = MapSetObjectsV2_ObjectsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
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
  },
};

function createBaseMapSetObjectsV2_ObjectsEntry(): MapSetObjectsV2_ObjectsEntry {
  return { key: "", value: undefined };
}

export const MapSetObjectsV2_ObjectsEntry = {
  encode(message: MapSetObjectsV2_ObjectsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      WireObject.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetObjectsV2_ObjectsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetName(): MapSetName {
  return { mapId: "", name: "" };
}

export const MapSetName = {
  encode(message: MapSetName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.delete !== undefined) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetMuteOnEntry(): MapSetMuteOnEntry {
  return { mapId: "", muteOnEntry: false };
}

export const MapSetMuteOnEntry = {
  encode(message: MapSetMuteOnEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.muteOnEntry === true) {
      writer.uint32(16).bool(message.muteOnEntry);
    }
    if (message.delete !== undefined) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetMuteOnEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetUseDrawnBG(): MapSetUseDrawnBG {
  return { mapId: "", useDrawnBG: false };
}

export const MapSetUseDrawnBG = {
  encode(message: MapSetUseDrawnBG, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.useDrawnBG === true) {
      writer.uint32(16).bool(message.useDrawnBG);
    }
    if (message.delete !== undefined) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetUseDrawnBG {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetWalls(): MapSetWalls {
  return { mapId: "", walls: {} };
}

export const MapSetWalls = {
  encode(message: MapSetWalls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    Object.entries(message.walls).forEach(([key, value]) => {
      MapSetWalls_WallsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.delete !== undefined) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetWalls {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapSetWalls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          const entry2 = MapSetWalls_WallsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
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
  },
};

function createBaseMapSetWalls_WallsEntry(): MapSetWalls_WallsEntry {
  return { key: "", value: "" };
}

export const MapSetWalls_WallsEntry = {
  encode(message: MapSetWalls_WallsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetWalls_WallsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetFloors(): MapSetFloors {
  return { mapId: "", floors: {} };
}

export const MapSetFloors = {
  encode(message: MapSetFloors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    Object.entries(message.floors).forEach(([key, value]) => {
      MapSetFloors_FloorsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.delete !== undefined) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetFloors {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapSetFloors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          const entry2 = MapSetFloors_FloorsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
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
  },
};

function createBaseMapSetFloors_FloorsEntry(): MapSetFloors_FloorsEntry {
  return { key: "", value: "" };
}

export const MapSetFloors_FloorsEntry = {
  encode(message: MapSetFloors_FloorsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetFloors_FloorsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetAreas(): MapSetAreas {
  return { mapId: "", areas: {} };
}

export const MapSetAreas = {
  encode(message: MapSetAreas, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    Object.entries(message.areas).forEach(([key, value]) => {
      MapSetAreas_AreasEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.delete !== undefined) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetAreas {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapSetAreas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          const entry2 = MapSetAreas_AreasEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
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
  },
};

function createBaseMapSetAreas_AreasEntry(): MapSetAreas_AreasEntry {
  return { key: "", value: undefined };
}

export const MapSetAreas_AreasEntry = {
  encode(message: MapSetAreas_AreasEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      WireArea.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetAreas_AreasEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapDeleteObjectByKey(): MapDeleteObjectByKey {
  return { mapId: "", key: "" };
}

export const MapDeleteObjectByKey = {
  encode(message: MapDeleteObjectByKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapDeleteObjectByKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapDeleteObjectById(): MapDeleteObjectById {
  return { mapId: "", id: "" };
}

export const MapDeleteObjectById = {
  encode(message: MapDeleteObjectById, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapDeleteObjectById {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetMiniMapImagePath(): MapSetMiniMapImagePath {
  return { mapId: "", miniMapImagePath: "" };
}

export const MapSetMiniMapImagePath = {
  encode(message: MapSetMiniMapImagePath, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.miniMapImagePath !== "") {
      writer.uint32(18).string(message.miniMapImagePath);
    }
    if (message.delete !== undefined) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetMiniMapImagePath {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetEnabledChats(): MapSetEnabledChats {
  return { mapId: "", enabledChats: [] };
}

export const MapSetEnabledChats = {
  encode(message: MapSetEnabledChats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    for (const v of message.enabledChats) {
      writer.uint32(18).string(v!);
    }
    if (message.delete !== undefined) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetEnabledChats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetDescription(): MapSetDescription {
  return { mapId: "", description: "" };
}

export const MapSetDescription = {
  encode(message: MapSetDescription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.delete !== undefined) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetDescription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetDecoration(): MapSetDecoration {
  return { mapId: "", decoration: "" };
}

export const MapSetDecoration = {
  encode(message: MapSetDecoration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.decoration !== "") {
      writer.uint32(18).string(message.decoration);
    }
    if (message.delete !== undefined) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetDecoration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetTutorialTasks(): MapSetTutorialTasks {
  return { mapId: "", tutorialTasks: undefined };
}

export const MapSetTutorialTasks = {
  encode(message: MapSetTutorialTasks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.tutorialTasks !== undefined) {
      WireTutorialTasks.encode(message.tutorialTasks, writer.uint32(18).fork()).ldelim();
    }
    if (message.delete !== undefined) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetTutorialTasks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseWireTutorialTasks(): WireTutorialTasks {
  return { groupSetId: "", areas: [] };
}

export const WireTutorialTasks = {
  encode(message: WireTutorialTasks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupSetId !== "") {
      writer.uint32(10).string(message.groupSetId);
    }
    for (const v of message.areas) {
      TutorialTaskMapArea.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.autoStart !== undefined) {
      writer.uint32(24).bool(message.autoStart);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WireTutorialTasks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseTutorialTaskMapArea(): TutorialTaskMapArea {
  return { areaId: "", x: 0, y: 0, height: 0, width: 0 };
}

export const TutorialTaskMapArea = {
  encode(message: TutorialTaskMapArea, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): TutorialTaskMapArea {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapSetScript(): MapSetScript {
  return { mapId: "", script: "" };
}

export const MapSetScript = {
  encode(message: MapSetScript, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.script !== "") {
      writer.uint32(18).string(message.script);
    }
    if (message.delete !== undefined) {
      writer.uint32(24).bool(message.delete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapSetScript {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseInventory(): Inventory {
  return { items: {}, order: {} };
}

export const Inventory = {
  encode(message: Inventory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.items).forEach(([key, value]) => {
      Inventory_ItemsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    Object.entries(message.order).forEach(([key, value]) => {
      Inventory_OrderEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Inventory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInventory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Inventory_ItemsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.items[entry1.key] = entry1.value;
          }
          break;
        case 2:
          const entry2 = Inventory_OrderEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.order[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseInventory_ItemsEntry(): Inventory_ItemsEntry {
  return { key: "", value: undefined };
}

export const Inventory_ItemsEntry = {
  encode(message: Inventory_ItemsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      InventoryItem.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Inventory_ItemsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseInventory_OrderEntry(): Inventory_OrderEntry {
  return { key: "", value: "" };
}

export const Inventory_OrderEntry = {
  encode(message: Inventory_OrderEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Inventory_OrderEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseInventoryItem(): InventoryItem {
  return { count: 0 };
}

export const InventoryItem = {
  encode(message: InventoryItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InventoryItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpaceItem(): SpaceItem {
  return { name: "", previewUrl: "", meta: {}, abilities: {} };
}

export const SpaceItem = {
  encode(message: SpaceItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.category !== undefined) {
      writer.uint32(18).string(message.category);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.previewUrl !== "") {
      writer.uint32(34).string(message.previewUrl);
    }
    Object.entries(message.meta).forEach(([key, value]) => {
      SpaceItem_MetaEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    Object.entries(message.abilities).forEach(([key, value]) => {
      SpaceItem_AbilitiesEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          if (entry5.value !== undefined) {
            message.meta[entry5.key] = entry5.value;
          }
          break;
        case 6:
          const entry6 = SpaceItem_AbilitiesEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.abilities[entry6.key] = entry6.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseSpaceItem_MetaEntry(): SpaceItem_MetaEntry {
  return { key: "", value: "" };
}

export const SpaceItem_MetaEntry = {
  encode(message: SpaceItem_MetaEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceItem_MetaEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpaceItem_AbilitiesEntry(): SpaceItem_AbilitiesEntry {
  return { key: "", value: undefined };
}

export const SpaceItem_AbilitiesEntry = {
  encode(message: SpaceItem_AbilitiesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ItemAbility.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceItem_AbilitiesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseItemAbility(): ItemAbility {
  return { name: "" };
}

export const ItemAbility = {
  encode(message: ItemAbility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ItemAbility {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapLocation(): MapLocation {
  return { map: "", x: 0, y: 0 };
}

export const MapLocation = {
  encode(message: MapLocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MapLocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseServerClientBatch(): ServerClientBatch {
  return { events: [] };
}

export const ServerClientBatch = {
  encode(message: ServerClientBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      ServerClientEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerClientBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseServerClientEvent(): ServerClientEvent {
  return { event: undefined };
}

export const ServerClientEvent = {
  encode(message: ServerClientEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.event?.$case) {
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
        PlayerUpdatesFocusModeStatus.encode(message.event.playerUpdatesFocusModeStatus, writer.uint32(786).fork())
          .ldelim();
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
        PlayerTriggersInventoryItem.encode(message.event.playerTriggersInventoryItem, writer.uint32(1066).fork())
          .ldelim();
        break;
      case "playerSetsAllowScreenPointer":
        PlayerSetsAllowScreenPointer.encode(message.event.playerSetsAllowScreenPointer, writer.uint32(1074).fork())
          .ldelim();
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
        PlayerSetsPersonalImageUrl.encode(message.event.playerSetsPersonalImageUrl, writer.uint32(1170).fork())
          .ldelim();
        break;
      case "playerSetsProfileImageUrl":
        PlayerSetsProfileImageUrl.encode(message.event.playerSetsProfileImageUrl, writer.uint32(1178).fork()).ldelim();
        break;
      case "spaceSetsCapacity":
        SpaceSetsCapacity.encode(message.event.spaceSetsCapacity, writer.uint32(1186).fork()).ldelim();
        break;
      case "spaceOverCapacityDeniesUser":
        SpaceOverCapacityDeniesUser.encode(message.event.spaceOverCapacityDeniesUser, writer.uint32(1194).fork())
          .ldelim();
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
        SpaceSetsGuestPassStatuses.encode(message.event.spaceSetsGuestPassStatuses, writer.uint32(1274).fork())
          .ldelim();
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
          writer.uint32(1314).fork(),
        ).ldelim();
        break;
      case "playerSetsLastRaisedHand":
        PlayerSetsLastRaisedHand.encode(message.event.playerSetsLastRaisedHand, writer.uint32(1322).fork()).ldelim();
        break;
      case "playerSetsCurrentlyEquippedWearables":
        PlayerSetsCurrentlyEquippedWearables.encode(
          message.event.playerSetsCurrentlyEquippedWearables,
          writer.uint32(1330).fork(),
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerClientEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
            serverHeartbeat: ServerHeartbeat.decode(reader, reader.uint32()),
          };
          break;
        case 107:
          message.event = {
            $case: "transactionStatus",
            transactionStatus: TransactionStatus.decode(reader, reader.uint32()),
          };
          break;
        case 1:
          message.event = { $case: "playerMoves", playerMoves: PlayerMoves.decode(reader, reader.uint32()) };
          break;
        case 5:
          message.event = {
            $case: "playerSetsStatus",
            playerSetsStatus: PlayerSetsStatus.decode(reader, reader.uint32()),
          };
          break;
        case 6:
          message.event = {
            $case: "playerSpotlights",
            playerSpotlights: PlayerSpotlights.decode(reader, reader.uint32()),
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
            playerEntersWhisper: PlayerEntersWhisper.decode(reader, reader.uint32()),
          };
          break;
        case 13:
          message.event = {
            $case: "playerLeavesWhisper",
            playerLeavesWhisper: PlayerLeavesWhisper.decode(reader, reader.uint32()),
          };
          break;
        case 14:
          message.event = {
            $case: "playerActivelySpeaks",
            playerActivelySpeaks: PlayerActivelySpeaks.decode(reader, reader.uint32()),
          };
          break;
        case 17:
          message.event = { $case: "playerSetsName", playerSetsName: PlayerSetsName.decode(reader, reader.uint32()) };
          break;
        case 18:
          message.event = {
            $case: "playerSetsTextStatus",
            playerSetsTextStatus: PlayerSetsTextStatus.decode(reader, reader.uint32()),
          };
          break;
        case 19:
          message.event = {
            $case: "playerSetsEmojiStatus",
            playerSetsEmojiStatus: PlayerSetsEmojiStatus.decode(reader, reader.uint32()),
          };
          break;
        case 20:
          message.event = {
            $case: "playerSetsAffiliation",
            playerSetsAffiliation: PlayerSetsAffiliation.decode(reader, reader.uint32()),
          };
          break;
        case 21:
          message.event = { $case: "playerExits", playerExits: PlayerExits.decode(reader, reader.uint32()) };
          break;
        case 41:
          message.event = {
            $case: "playerSetsIsSignedIn",
            playerSetsIsSignedIn: PlayerSetsIsSignedIn.decode(reader, reader.uint32()),
          };
          break;
        case 44:
          message.event = {
            $case: "spaceOverwrites",
            spaceOverwrites: SpaceOverwrites.decode(reader, reader.uint32()),
          };
          break;
        case 45:
          message.event = { $case: "spaceIsClosed", spaceIsClosed: SpaceIsClosed.decode(reader, reader.uint32()) };
          break;
        case 46:
          message.event = {
            $case: "playerEntersPortal",
            playerEntersPortal: PlayerEntersPortal.decode(reader, reader.uint32()),
          };
          break;
        case 47:
          message.event = {
            $case: "spaceSetsIdMapping",
            spaceSetsIdMapping: SpaceSetsIdMapping.decode(reader, reader.uint32()),
          };
          break;
        case 48:
          message.event = {
            $case: "playerSetsLastActive",
            playerSetsLastActive: PlayerSetsLastActive.decode(reader, reader.uint32()),
          };
          break;
        case 49:
          message.event = {
            $case: "playerShootsConfetti",
            playerShootsConfetti: PlayerShootsConfetti.decode(reader, reader.uint32()),
          };
          break;
        case 50:
          message.event = {
            $case: "playerSetsEventStatus",
            playerSetsEventStatus: PlayerSetsEventStatus.decode(reader, reader.uint32()),
          };
          break;
        case 51:
          message.event = {
            $case: "playerSetsInConversation",
            playerSetsInConversation: PlayerSetsInConversation.decode(reader, reader.uint32()),
          };
          break;
        case 53:
          message.event = {
            $case: "playerSetsCurrentArea",
            playerSetsCurrentArea: PlayerSetsCurrentArea.decode(reader, reader.uint32()),
          };
          break;
        case 54:
          message.event = {
            $case: "playerSetsImagePointer",
            playerSetsImagePointer: PlayerSetsImagePointer.decode(reader, reader.uint32()),
          };
          break;
        case 55:
          message.event = { $case: "cookieFound", cookieFound: CookieFound.decode(reader, reader.uint32()) };
          break;
        case 56:
          message.event = {
            $case: "playerEntersWhisperV2",
            playerEntersWhisperV2: PlayerEntersWhisperV2.decode(reader, reader.uint32()),
          };
          break;
        case 57:
          message.event = {
            $case: "playerSetsGoKartId",
            playerSetsGoKartId: PlayerSetsGoKartId.decode(reader, reader.uint32()),
          };
          break;
        case 58:
          message.event = {
            $case: "mapSetDimensions",
            mapSetDimensions: MapSetDimensions.decode(reader, reader.uint32()),
          };
          break;
        case 60:
          message.event = {
            $case: "mapSetBackgroundImagePath",
            mapSetBackgroundImagePath: MapSetBackgroundImagePath.decode(reader, reader.uint32()),
          };
          break;
        case 61:
          message.event = {
            $case: "mapSetForegroundImagePath",
            mapSetForegroundImagePath: MapSetForegroundImagePath.decode(reader, reader.uint32()),
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
            mapSetAnnouncer: MapSetAnnouncer.decode(reader, reader.uint32()),
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
            mapSetMuteOnEntry: MapSetMuteOnEntry.decode(reader, reader.uint32()),
          };
          break;
        case 74:
          message.event = {
            $case: "mapSetUseDrawnBG",
            mapSetUseDrawnBG: MapSetUseDrawnBG.decode(reader, reader.uint32()),
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
            playerSetsIsAlone: PlayerSetsIsAlone.decode(reader, reader.uint32()),
          };
          break;
        case 81:
          message.event = { $case: "playerJoins", playerJoins: PlayerJoins.decode(reader, reader.uint32()) };
          break;
        case 82:
          message.event = {
            $case: "mapSetEnabledChats",
            mapSetEnabledChats: MapSetEnabledChats.decode(reader, reader.uint32()),
          };
          break;
        case 83:
          message.event = {
            $case: "mapSetDescription",
            mapSetDescription: MapSetDescription.decode(reader, reader.uint32()),
          };
          break;
        case 84:
          message.event = {
            $case: "mapSetDecoration",
            mapSetDecoration: MapSetDecoration.decode(reader, reader.uint32()),
          };
          break;
        case 85:
          message.event = {
            $case: "mapSetTutorialTasks",
            mapSetTutorialTasks: MapSetTutorialTasks.decode(reader, reader.uint32()),
          };
          break;
        case 86:
          message.event = {
            $case: "mapSetMiniMapImagePath",
            mapSetMiniMapImagePath: MapSetMiniMapImagePath.decode(reader, reader.uint32()),
          };
          break;
        case 87:
          message.event = {
            $case: "spacePlaysSound",
            spacePlaysSound: SpacePlaysSound.decode(reader, reader.uint32()),
          };
          break;
        case 88:
          message.event = { $case: "mapSetScript", mapSetScript: MapSetScript.decode(reader, reader.uint32()) };
          break;
        case 90:
          message.event = {
            $case: "playerSetsIsMobile",
            playerSetsIsMobile: PlayerSetsIsMobile.decode(reader, reader.uint32()),
          };
          break;
        case 91:
          message.event = {
            $case: "setScreenPointerServer",
            setScreenPointerServer: SetScreenPointerServer.decode(reader, reader.uint32()),
          };
          break;
        case 92:
          message.event = {
            $case: "playerSetsEmoteV2",
            playerSetsEmoteV2: PlayerSetsEmoteV2.decode(reader, reader.uint32()),
          };
          break;
        case 93:
          message.event = {
            $case: "playerSetsFocusModeEndTime",
            playerSetsFocusModeEndTime: PlayerSetsFocusModeEndTime.decode(reader, reader.uint32()),
          };
          break;
        case 94:
          message.event = {
            $case: "spaceSetsSpaceMembers",
            spaceSetsSpaceMembers: SpaceSetsSpaceMembers.decode(reader, reader.uint32()),
          };
          break;
        case 167:
          message.event = {
            $case: "spaceSetsSpaceUsers",
            spaceSetsSpaceUsers: SpaceSetsSpaceUsers.decode(reader, reader.uint32()),
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
            playerUpdatesFocusModeStatus: PlayerUpdatesFocusModeStatus.decode(reader, reader.uint32()),
          };
          break;
        case 99:
          message.event = { $case: "playerNotifies", playerNotifies: PlayerNotifies.decode(reader, reader.uint32()) };
          break;
        case 108:
          message.event = {
            $case: "playerSetsItemString",
            playerSetsItemString: PlayerSetsItemString.decode(reader, reader.uint32()),
          };
          break;
        case 110:
          message.event = {
            $case: "playerSetsFollowTarget",
            playerSetsFollowTarget: PlayerSetsFollowTarget.decode(reader, reader.uint32()),
          };
          break;
        case 111:
          message.event = {
            $case: "playerRequestsToLead",
            playerRequestsToLead: PlayerRequestsToLead.decode(reader, reader.uint32()),
          };
          break;
        case 112:
          message.event = {
            $case: "playerSetsManualVideoSrc",
            playerSetsManualVideoSrc: PlayerSetsManualVideoSrc.decode(reader, reader.uint32()),
          };
          break;
        case 113:
          message.event = {
            $case: "playerSetsIsNpc",
            playerSetsIsNpc: PlayerSetsIsNpc.decode(reader, reader.uint32()),
          };
          break;
        case 114:
          message.event = {
            $case: "playerSetsSubtitle",
            playerSetsSubtitle: PlayerSetsSubtitle.decode(reader, reader.uint32()),
          };
          break;
        case 115:
          message.event = {
            $case: "mapCommitsChanges",
            mapCommitsChanges: MapCommitsChanges.decode(reader, reader.uint32()),
          };
          break;
        case 117:
          message.event = { $case: "mapMoveObject", mapMoveObject: MapMoveObject.decode(reader, reader.uint32()) };
          break;
        case 118:
          message.event = {
            $case: "playerEditsChatMessage",
            playerEditsChatMessage: PlayerEditsChatMessage.decode(reader, reader.uint32()),
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
            playerSendsCommand: PlayerSendsCommand.decode(reader, reader.uint32()),
          };
          break;
        case 122:
          message.event = {
            $case: "spaceRegistersCommand",
            spaceRegistersCommand: SpaceRegistersCommand.decode(reader, reader.uint32()),
          };
          break;
        case 123:
          message.event = {
            $case: "speakerUpdatesSession",
            speakerUpdatesSession: SpeakerUpdatesSession.decode(reader, reader.uint32()),
          };
          break;
        case 124:
          message.event = {
            $case: "playerUpdatesInventory",
            playerUpdatesInventory: PlayerUpdatesInventory.decode(reader, reader.uint32()),
          };
          break;
        case 125:
          message.event = {
            $case: "spaceUpdatesItems",
            spaceUpdatesItems: SpaceUpdatesItems.decode(reader, reader.uint32()),
          };
          break;
        case 126:
          message.event = {
            $case: "playerSetsVehicleId",
            playerSetsVehicleId: PlayerSetsVehicleId.decode(reader, reader.uint32()),
          };
          break;
        case 127:
          message.event = {
            $case: "playerSetsSpeedModifier",
            playerSetsSpeedModifier: PlayerSetsSpeedModifier.decode(reader, reader.uint32()),
          };
          break;
        case 128:
          message.event = {
            $case: "playerHighFives",
            playerHighFives: PlayerHighFives.decode(reader, reader.uint32()),
          };
          break;
        case 130:
          message.event = {
            $case: "spaceStopsSound",
            spaceStopsSound: SpaceStopsSound.decode(reader, reader.uint32()),
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
            playerTriggersInventoryItem: PlayerTriggersInventoryItem.decode(reader, reader.uint32()),
          };
          break;
        case 134:
          message.event = {
            $case: "playerSetsAllowScreenPointer",
            playerSetsAllowScreenPointer: PlayerSetsAllowScreenPointer.decode(reader, reader.uint32()),
          };
          break;
        case 135:
          message.event = {
            $case: "precomputedEnterLocation",
            precomputedEnterLocation: PrecomputedEnterLocation.decode(reader, reader.uint32()),
          };
          break;
        case 136:
          message.event = { $case: "gotRequestMute", gotRequestMute: GotRequestMute.decode(reader, reader.uint32()) };
          break;
        case 137:
          message.event = {
            $case: "playerSetsDeskInfo",
            playerSetsDeskInfo: PlayerSetsDeskInfo.decode(reader, reader.uint32()),
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
            playerSetsPronouns: PlayerSetsPronouns.decode(reader, reader.uint32()),
          };
          break;
        case 142:
          message.event = {
            $case: "playerSetsTitle",
            playerSetsTitle: PlayerSetsTitle.decode(reader, reader.uint32()),
          };
          break;
        case 143:
          message.event = {
            $case: "playerSetsTimezone",
            playerSetsTimezone: PlayerSetsTimezone.decode(reader, reader.uint32()),
          };
          break;
        case 144:
          message.event = {
            $case: "playerSetsDescription",
            playerSetsDescription: PlayerSetsDescription.decode(reader, reader.uint32()),
          };
          break;
        case 145:
          message.event = {
            $case: "playerSetsPhone",
            playerSetsPhone: PlayerSetsPhone.decode(reader, reader.uint32()),
          };
          break;
        case 146:
          message.event = {
            $case: "playerSetsPersonalImageUrl",
            playerSetsPersonalImageUrl: PlayerSetsPersonalImageUrl.decode(reader, reader.uint32()),
          };
          break;
        case 147:
          message.event = {
            $case: "playerSetsProfileImageUrl",
            playerSetsProfileImageUrl: PlayerSetsProfileImageUrl.decode(reader, reader.uint32()),
          };
          break;
        case 148:
          message.event = {
            $case: "spaceSetsCapacity",
            spaceSetsCapacity: SpaceSetsCapacity.decode(reader, reader.uint32()),
          };
          break;
        case 149:
          message.event = {
            $case: "spaceOverCapacityDeniesUser",
            spaceOverCapacityDeniesUser: SpaceOverCapacityDeniesUser.decode(reader, reader.uint32()),
          };
          break;
        case 150:
          message.event = { $case: "playerSetsAway", playerSetsAway: PlayerSetsAway.decode(reader, reader.uint32()) };
          break;
        case 151:
          message.event = {
            $case: "mapSetCollisionsBits",
            mapSetCollisionsBits: MapSetCollisionsBits.decode(reader, reader.uint32()),
          };
          break;
        case 152:
          message.event = { $case: "playerSetsCity", playerSetsCity: PlayerSetsCity.decode(reader, reader.uint32()) };
          break;
        case 153:
          message.event = {
            $case: "playerSetsCountry",
            playerSetsCountry: PlayerSetsCountry.decode(reader, reader.uint32()),
          };
          break;
        case 154:
          message.event = {
            $case: "playerSetsStartDate",
            playerSetsStartDate: PlayerSetsStartDate.decode(reader, reader.uint32()),
          };
          break;
        case 156:
          message.event = {
            $case: "playerStartsRecording",
            playerStartsRecording: PlayerStartsRecording.decode(reader, reader.uint32()),
          };
          break;
        case 157:
          message.event = {
            $case: "accessRequestsUpdated",
            accessRequestsUpdated: AccessRequestsUpdated.decode(reader, reader.uint32()),
          };
          break;
        case 158:
          message.event = {
            $case: "accessRequestRespondedTo",
            accessRequestRespondedTo: AccessRequestRespondedTo.decode(reader, reader.uint32()),
          };
          break;
        case 159:
          message.event = {
            $case: "spaceSetsGuestPassStatuses",
            spaceSetsGuestPassStatuses: SpaceSetsGuestPassStatuses.decode(reader, reader.uint32()),
          };
          break;
        case 160:
          message.event = {
            $case: "playerSetsAvailability",
            playerSetsAvailability: PlayerSetsAvailability.decode(reader, reader.uint32()),
          };
          break;
        case 161:
          message.event = {
            $case: "subscriptionsUpdated",
            subscriptionsUpdated: SubscriptionsUpdated.decode(reader, reader.uint32()),
          };
          break;
        case 164:
          message.event = {
            $case: "spaceRolePermissionOverrideUpdated",
            spaceRolePermissionOverrideUpdated: SpaceRolePermissionOverrideUpdated.decode(reader, reader.uint32()),
          };
          break;
        case 165:
          message.event = {
            $case: "playerSetsLastRaisedHand",
            playerSetsLastRaisedHand: PlayerSetsLastRaisedHand.decode(reader, reader.uint32()),
          };
          break;
        case 166:
          message.event = {
            $case: "playerSetsCurrentlyEquippedWearables",
            playerSetsCurrentlyEquippedWearables: PlayerSetsCurrentlyEquippedWearables.decode(reader, reader.uint32()),
          };
          break;
        case 168:
          message.event = {
            $case: "playerSetsDisplayEmail",
            playerSetsDisplayEmail: PlayerSetsDisplayEmail.decode(reader, reader.uint32()),
          };
          break;
        case 169:
          message.event = {
            $case: "mapDeleteObjectByKey",
            mapDeleteObjectByKey: MapDeleteObjectByKey.decode(reader, reader.uint32()),
          };
          break;
        case 170:
          message.event = {
            $case: "mapSetObjectsV2",
            mapSetObjectsV2: MapSetObjectsV2.decode(reader, reader.uint32()),
          };
          break;
        case 171:
          message.event = {
            $case: "playerInteractsWithObject",
            playerInteractsWithObject: PlayerInteractsWithObject.decode(reader, reader.uint32()),
          };
          break;
        case 172:
          message.event = {
            $case: "playerTriggersObject",
            playerTriggersObject: PlayerTriggersObject.decode(reader, reader.uint32()),
          };
          break;
        case 173:
          message.event = {
            $case: "chimeSetsUserInfo",
            chimeSetsUserInfo: ChimeSetsUserInfo.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseSubscriptionsUpdated(): SubscriptionsUpdated {
  return { subscriptions: [] };
}

export const SubscriptionsUpdated = {
  encode(message: SubscriptionsUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subscriptions) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscriptionsUpdated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseServerHeartbeat(): ServerHeartbeat {
  return { lastRTT: 0 };
}

export const ServerHeartbeat = {
  encode(message: ServerHeartbeat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastRTT !== 0) {
      writer.uint32(8).uint32(message.lastRTT);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerHeartbeat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseInfo(): Info {
  return { message: "" };
}

export const Info = {
  encode(message: Info, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Info {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseWarn(): Warn {
  return { message: "" };
}

export const Warn = {
  encode(message: Warn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Warn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseErrorEvent(): ErrorEvent {
  return { message: "", code: 0 };
}

export const ErrorEvent = {
  encode(message: ErrorEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.code !== 0) {
      writer.uint32(16).uint32(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseReady(): Ready {
  return { id: "" };
}

export const Ready = {
  encode(message: Ready, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ready {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseTransactionStatus(): TransactionStatus {
  return { txnId: 0, succeeded: false };
}

export const TransactionStatus = {
  encode(message: TransactionStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txnId !== 0) {
      writer.uint32(8).uint32(message.txnId);
    }
    if (message.succeeded === true) {
      writer.uint32(16).bool(message.succeeded);
    }
    if (message.reason !== undefined) {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerJoins(): PlayerJoins {
  return { encId: 0 };
}

export const PlayerJoins = {
  encode(message: PlayerJoins, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerJoins {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseGotRequestMute(): GotRequestMute {
  return { muterId: "", video: false };
}

export const GotRequestMute = {
  encode(message: GotRequestMute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.muterId !== "") {
      writer.uint32(10).string(message.muterId);
    }
    if (message.video === true) {
      writer.uint32(16).bool(message.video);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GotRequestMute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerMoves(): PlayerMoves {
  return { encId: 0, lastInputId: 0 };
}

export const PlayerMoves = {
  encode(message: PlayerMoves, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.x !== undefined) {
      writer.uint32(16).uint32(message.x);
    }
    if (message.y !== undefined) {
      writer.uint32(24).uint32(message.y);
    }
    if (message.direction !== undefined) {
      writer.uint32(32).int32(message.direction);
    }
    if (message.mapId !== undefined) {
      writer.uint32(42).string(message.mapId);
    }
    if (message.lastInputId !== 0) {
      writer.uint32(48).uint32(message.lastInputId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerMoves {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          message.direction = reader.int32() as any;
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
  },
};

function createBasePlayerSetsStatus(): PlayerSetsStatus {
  return { encId: 0, busy: false };
}

export const PlayerSetsStatus = {
  encode(message: PlayerSetsStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.busy === true) {
      writer.uint32(16).bool(message.busy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsAvailability(): PlayerSetsAvailability {
  return { encId: 0, status: "" };
}

export const PlayerSetsAvailability = {
  encode(message: PlayerSetsAvailability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.statusUpdatedAt !== undefined) {
      writer.uint32(26).string(message.statusUpdatedAt);
    }
    if (message.statusEndOption !== undefined) {
      writer.uint32(34).string(message.statusEndOption);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsAvailability {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSpotlights(): PlayerSpotlights {
  return { encId: 0, spotlightedBy: 0, spotlighted: 0 };
}

export const PlayerSpotlights = {
  encode(message: PlayerSpotlights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSpotlights {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerRings(): PlayerRings {
  return { encId: 0 };
}

export const PlayerRings = {
  encode(message: PlayerRings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerRings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsImagePointer(): PlayerSetsImagePointer {
  return { encId: 0, objectId: "", x: 0, y: 0 };
}

export const PlayerSetsImagePointer = {
  encode(message: PlayerSetsImagePointer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsImagePointer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetScreenPointerServer(): SetScreenPointerServer {
  return { encId: 0, screenId: "", x: 0, y: 0, color: "" };
}

export const SetScreenPointerServer = {
  encode(message: SetScreenPointerServer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SetScreenPointerServer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerChats(): PlayerChats {
  return { senderId: "", recipient: "", contents: "", senderName: "", messageType: "", unixTime: 0 };
}

export const PlayerChats = {
  encode(message: PlayerChats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    if (message.messageType !== "") {
      writer.uint32(50).string(message.messageType);
    }
    if (message.unixTime !== 0) {
      writer.uint32(57).double(message.unixTime);
    }
    if (message.id !== undefined) {
      writer.uint32(66).string(message.id);
    }
    if (message.roomId !== undefined) {
      writer.uint32(74).string(message.roomId);
    }
    if (message.approved !== undefined) {
      writer.uint32(80).bool(message.approved);
    }
    if (message.nookId !== undefined) {
      writer.uint32(90).string(message.nookId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerChats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerWaves(): PlayerWaves {
  return { encId: 0, targetId: "", isReply: false };
}

export const PlayerWaves = {
  encode(message: PlayerWaves, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerWaves {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseTimestamp(): Timestamp {
  return { seconds: 0, nanoseconds: 0 };
}

export const Timestamp = {
  encode(message: Timestamp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seconds !== 0) {
      writer.uint32(13).float(message.seconds);
    }
    if (message.nanoseconds !== 0) {
      writer.uint32(21).float(message.nanoseconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timestamp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerInteractsWithObject(): PlayerInteractsWithObject {
  return { encId: 0, mapId: "", key: "" };
}

export const PlayerInteractsWithObject = {
  encode(message: PlayerInteractsWithObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.mapId !== "") {
      writer.uint32(18).string(message.mapId);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.dataJson !== undefined) {
      writer.uint32(34).string(message.dataJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerInteractsWithObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerGhosts(): PlayerGhosts {
  return { encId: 0, ghost: 0 };
}

export const PlayerGhosts = {
  encode(message: PlayerGhosts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.ghost !== 0) {
      writer.uint32(16).uint32(message.ghost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerGhosts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerEntersWhisper(): PlayerEntersWhisper {
  return { encId: 0, whisperRecipient: "", whisperId: "" };
}

export const PlayerEntersWhisper = {
  encode(message: PlayerEntersWhisper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerEntersWhisper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerEntersWhisperV2(): PlayerEntersWhisperV2 {
  return { encId: 0, encIdTarget: 0, whisperId: "" };
}

export const PlayerEntersWhisperV2 = {
  encode(message: PlayerEntersWhisperV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerEntersWhisperV2 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerLeavesWhisper(): PlayerLeavesWhisper {
  return { encId: 0 };
}

export const PlayerLeavesWhisper = {
  encode(message: PlayerLeavesWhisper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerLeavesWhisper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerActivelySpeaks(): PlayerActivelySpeaks {
  return { encId: 0, activelySpeaking: 0 };
}

export const PlayerActivelySpeaks = {
  encode(message: PlayerActivelySpeaks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.activelySpeaking !== 0) {
      writer.uint32(16).uint32(message.activelySpeaking);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerActivelySpeaks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsEmoteV2(): PlayerSetsEmoteV2 {
  return { encId: 0 };
}

export const PlayerSetsEmoteV2 = {
  encode(message: PlayerSetsEmoteV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.emote !== undefined) {
      writer.uint32(18).string(message.emote);
    }
    if (message.count !== undefined) {
      writer.uint32(24).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsEmoteV2 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsLastRaisedHand(): PlayerSetsLastRaisedHand {
  return { encId: 0, lastRaisedHand: "" };
}

export const PlayerSetsLastRaisedHand = {
  encode(message: PlayerSetsLastRaisedHand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.lastRaisedHand !== "") {
      writer.uint32(18).string(message.lastRaisedHand);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsLastRaisedHand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsLastActive(): PlayerSetsLastActive {
  return { encId: 0, lastActive: "" };
}

export const PlayerSetsLastActive = {
  encode(message: PlayerSetsLastActive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.lastActive !== "") {
      writer.uint32(18).string(message.lastActive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsLastActive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsName(): PlayerSetsName {
  return { encId: 0, name: "" };
}

export const PlayerSetsName = {
  encode(message: PlayerSetsName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsTextStatus(): PlayerSetsTextStatus {
  return { encId: 0, textStatus: "" };
}

export const PlayerSetsTextStatus = {
  encode(message: PlayerSetsTextStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.textStatus !== "") {
      writer.uint32(18).string(message.textStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsTextStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsPronouns(): PlayerSetsPronouns {
  return { encId: 0, pronouns: "" };
}

export const PlayerSetsPronouns = {
  encode(message: PlayerSetsPronouns, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.pronouns !== "") {
      writer.uint32(18).string(message.pronouns);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsPronouns {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsTitle(): PlayerSetsTitle {
  return { encId: 0, title: "" };
}

export const PlayerSetsTitle = {
  encode(message: PlayerSetsTitle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsTitle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsCity(): PlayerSetsCity {
  return { encId: 0, city: "" };
}

export const PlayerSetsCity = {
  encode(message: PlayerSetsCity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.city !== "") {
      writer.uint32(18).string(message.city);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsCity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsCountry(): PlayerSetsCountry {
  return { encId: 0, country: "" };
}

export const PlayerSetsCountry = {
  encode(message: PlayerSetsCountry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.country !== "") {
      writer.uint32(18).string(message.country);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsCountry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsStartDate(): PlayerSetsStartDate {
  return { encId: 0, startDate: "" };
}

export const PlayerSetsStartDate = {
  encode(message: PlayerSetsStartDate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.startDate !== "") {
      writer.uint32(18).string(message.startDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsStartDate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsTimezone(): PlayerSetsTimezone {
  return { encId: 0, timezone: "" };
}

export const PlayerSetsTimezone = {
  encode(message: PlayerSetsTimezone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.timezone !== "") {
      writer.uint32(18).string(message.timezone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsTimezone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsPhone(): PlayerSetsPhone {
  return { encId: 0, phone: "" };
}

export const PlayerSetsPhone = {
  encode(message: PlayerSetsPhone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.phone !== "") {
      writer.uint32(18).string(message.phone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsPhone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsDisplayEmail(): PlayerSetsDisplayEmail {
  return { encId: 0, displayEmail: "" };
}

export const PlayerSetsDisplayEmail = {
  encode(message: PlayerSetsDisplayEmail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.displayEmail !== "") {
      writer.uint32(18).string(message.displayEmail);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsDisplayEmail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsDescription(): PlayerSetsDescription {
  return { encId: 0, description: "" };
}

export const PlayerSetsDescription = {
  encode(message: PlayerSetsDescription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsDescription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsProfileImageUrl(): PlayerSetsProfileImageUrl {
  return { encId: 0, profileImageUrl: "" };
}

export const PlayerSetsProfileImageUrl = {
  encode(message: PlayerSetsProfileImageUrl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.profileImageUrl !== "") {
      writer.uint32(18).string(message.profileImageUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsProfileImageUrl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsPersonalImageUrl(): PlayerSetsPersonalImageUrl {
  return { encId: 0, personalImageUrl: "" };
}

export const PlayerSetsPersonalImageUrl = {
  encode(message: PlayerSetsPersonalImageUrl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.personalImageUrl !== "") {
      writer.uint32(18).string(message.personalImageUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsPersonalImageUrl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsIsMobile(): PlayerSetsIsMobile {
  return { encId: 0, isMobile: false };
}

export const PlayerSetsIsMobile = {
  encode(message: PlayerSetsIsMobile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.isMobile === true) {
      writer.uint32(16).bool(message.isMobile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsIsMobile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsEmojiStatus(): PlayerSetsEmojiStatus {
  return { encId: 0, emojiStatus: "" };
}

export const PlayerSetsEmojiStatus = {
  encode(message: PlayerSetsEmojiStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.emojiStatus !== "") {
      writer.uint32(18).string(message.emojiStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsEmojiStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsAffiliation(): PlayerSetsAffiliation {
  return { encId: 0, affiliation: "" };
}

export const PlayerSetsAffiliation = {
  encode(message: PlayerSetsAffiliation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.affiliation !== "") {
      writer.uint32(18).string(message.affiliation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsAffiliation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerExits(): PlayerExits {
  return { encId: 0 };
}

export const PlayerExits = {
  encode(message: PlayerExits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerExits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsCurrentlyEquippedWearables(): PlayerSetsCurrentlyEquippedWearables {
  return { encId: 0, currentlyEquippedWearables: undefined };
}

export const PlayerSetsCurrentlyEquippedWearables = {
  encode(message: PlayerSetsCurrentlyEquippedWearables, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.currentlyEquippedWearables !== undefined) {
      DBOutfit.encode(message.currentlyEquippedWearables, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsCurrentlyEquippedWearables {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsIsSignedIn(): PlayerSetsIsSignedIn {
  return { encId: 0, isSignedIn: false };
}

export const PlayerSetsIsSignedIn = {
  encode(message: PlayerSetsIsSignedIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.isSignedIn === true) {
      writer.uint32(16).bool(message.isSignedIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsIsSignedIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpaceOverwrites(): SpaceOverwrites {
  return { spaceData: "" };
}

export const SpaceOverwrites = {
  encode(message: SpaceOverwrites, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spaceData !== "") {
      writer.uint32(10).string(message.spaceData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceOverwrites {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseDynamicGate(): DynamicGate {
  return { exposure: 0, spaces: [] };
}

export const DynamicGate = {
  encode(message: DynamicGate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exposure !== 0) {
      writer.uint32(13).float(message.exposure);
    }
    for (const v of message.spaces) {
      writer.uint32(18).string(v!);
    }
    if (message.refreshOnChange !== undefined) {
      writer.uint32(24).bool(message.refreshOnChange);
    }
    if (message.minimumBuildTimestamp !== undefined) {
      writer.uint32(32).uint64(message.minimumBuildTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DynamicGate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          message.minimumBuildTimestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseDynamicGates(): DynamicGates {
  return { livekitEnabled: undefined };
}

export const DynamicGates = {
  encode(message: DynamicGates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.livekitEnabled !== undefined) {
      DynamicGate.encode(message.livekitEnabled, writer.uint32(10).fork()).ldelim();
    }
    if (message.livekitSelfhostEnabled !== undefined) {
      DynamicGate.encode(message.livekitSelfhostEnabled, writer.uint32(18).fork()).ldelim();
    }
    if (message.agoraEnabled !== undefined) {
      DynamicGate.encode(message.agoraEnabled, writer.uint32(26).fork()).ldelim();
    }
    if (message.chimeEnabled !== undefined) {
      DynamicGate.encode(message.chimeEnabled, writer.uint32(34).fork()).ldelim();
    }
    if (message.gatherEnabled !== undefined) {
      DynamicGate.encode(message.gatherEnabled, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DynamicGates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpaceSetsSpaceMembers(): SpaceSetsSpaceMembers {
  return { members: {} };
}

export const SpaceSetsSpaceMembers = {
  encode(message: SpaceSetsSpaceMembers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.members).forEach(([key, value]) => {
      SpaceSetsSpaceMembers_MembersEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceSetsSpaceMembers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpaceSetsSpaceMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SpaceSetsSpaceMembers_MembersEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.members[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseSpaceSetsSpaceMembers_MembersEntry(): SpaceSetsSpaceMembers_MembersEntry {
  return { key: "", value: undefined };
}

export const SpaceSetsSpaceMembers_MembersEntry = {
  encode(message: SpaceSetsSpaceMembers_MembersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      SpaceMemberInfo.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceSetsSpaceMembers_MembersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseWireSpaceUser(): WireSpaceUser {
  return { role: "" };
}

export const WireSpaceUser = {
  encode(message: WireSpaceUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WireSpaceUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpaceSetsSpaceUsers(): SpaceSetsSpaceUsers {
  return { spaceUsers: {} };
}

export const SpaceSetsSpaceUsers = {
  encode(message: SpaceSetsSpaceUsers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.spaceUsers).forEach(([key, value]) => {
      SpaceSetsSpaceUsers_SpaceUsersEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceSetsSpaceUsers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpaceSetsSpaceUsers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SpaceSetsSpaceUsers_SpaceUsersEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.spaceUsers[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseSpaceSetsSpaceUsers_SpaceUsersEntry(): SpaceSetsSpaceUsers_SpaceUsersEntry {
  return { key: "", value: undefined };
}

export const SpaceSetsSpaceUsers_SpaceUsersEntry = {
  encode(message: SpaceSetsSpaceUsers_SpaceUsersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      WireSpaceUser.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceSetsSpaceUsers_SpaceUsersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpaceIsClosed(): SpaceIsClosed {
  return {};
}

export const SpaceIsClosed = {
  encode(_: SpaceIsClosed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceIsClosed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerEntersPortal(): PlayerEntersPortal {
  return { targetUrl: "" };
}

export const PlayerEntersPortal = {
  encode(message: PlayerEntersPortal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetUrl !== "") {
      writer.uint32(10).string(message.targetUrl);
    }
    if (message.bypassPrompt !== undefined) {
      writer.uint32(16).bool(message.bypassPrompt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerEntersPortal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseCookieFound(): CookieFound {
  return { encId: 0 };
}

export const CookieFound = {
  encode(message: CookieFound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CookieFound {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpaceSetsIdMapping(): SpaceSetsIdMapping {
  return { uid: "", encId: 0 };
}

export const SpaceSetsIdMapping = {
  encode(message: SpaceSetsIdMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.encId !== 0) {
      writer.uint32(16).uint32(message.encId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceSetsIdMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerShootsConfetti(): PlayerShootsConfetti {
  return { encId: 0 };
}

export const PlayerShootsConfetti = {
  encode(message: PlayerShootsConfetti, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerShootsConfetti {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsEventStatus(): PlayerSetsEventStatus {
  return { encId: 0, eventStatus: "" };
}

export const PlayerSetsEventStatus = {
  encode(message: PlayerSetsEventStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.eventStatus !== "") {
      writer.uint32(18).string(message.eventStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsEventStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsInConversation(): PlayerSetsInConversation {
  return { encId: 0, inConversation: false };
}

export const PlayerSetsInConversation = {
  encode(message: PlayerSetsInConversation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.inConversation === true) {
      writer.uint32(16).bool(message.inConversation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsInConversation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsCurrentArea(): PlayerSetsCurrentArea {
  return { encId: 0, currentArea: "" };
}

export const PlayerSetsCurrentArea = {
  encode(message: PlayerSetsCurrentArea, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.currentArea !== "") {
      writer.uint32(18).string(message.currentArea);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsCurrentArea {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsGoKartId(): PlayerSetsGoKartId {
  return { encId: 0, goKartId: "" };
}

export const PlayerSetsGoKartId = {
  encode(message: PlayerSetsGoKartId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.goKartId !== "") {
      writer.uint32(18).string(message.goKartId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsGoKartId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsVehicleId(): PlayerSetsVehicleId {
  return { encId: 0, vehicleId: "", action: "", previousVehicleId: "" };
}

export const PlayerSetsVehicleId = {
  encode(message: PlayerSetsVehicleId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsVehicleId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsSpeedModifier(): PlayerSetsSpeedModifier {
  return { encId: 0, speedModifier: 0 };
}

export const PlayerSetsSpeedModifier = {
  encode(message: PlayerSetsSpeedModifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.speedModifier !== 0) {
      writer.uint32(21).float(message.speedModifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsSpeedModifier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsIsAlone(): PlayerSetsIsAlone {
  return { encId: 0, isAlone: false };
}

export const PlayerSetsIsAlone = {
  encode(message: PlayerSetsIsAlone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.isAlone === true) {
      writer.uint32(16).bool(message.isAlone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsIsAlone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpacePlaysSound(): SpacePlaysSound {
  return { src: "", volume: 0 };
}

export const SpacePlaysSound = {
  encode(message: SpacePlaysSound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.src !== "") {
      writer.uint32(18).string(message.src);
    }
    if (message.volume !== 0) {
      writer.uint32(29).float(message.volume);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpacePlaysSound {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpaceStopsSound(): SpaceStopsSound {
  return { src: "" };
}

export const SpaceStopsSound = {
  encode(message: SpaceStopsSound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.src !== "") {
      writer.uint32(18).string(message.src);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceStopsSound {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsFocusModeEndTime(): PlayerSetsFocusModeEndTime {
  return { encId: 0, focusModeEndTime: "" };
}

export const PlayerSetsFocusModeEndTime = {
  encode(message: PlayerSetsFocusModeEndTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.focusModeEndTime !== "") {
      writer.uint32(18).string(message.focusModeEndTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsFocusModeEndTime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerBlocks(): PlayerBlocks {
  return { blockedBy: "", blocked: false };
}

export const PlayerBlocks = {
  encode(message: PlayerBlocks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockedBy !== "") {
      writer.uint32(10).string(message.blockedBy);
    }
    if (message.blocked === true) {
      writer.uint32(16).bool(message.blocked);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerBlocks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseCustomEvent(): CustomEvent {
  return { name: "", payload: "" };
}

export const CustomEvent = {
  encode(message: CustomEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerUpdatesFocusModeStatus(): PlayerUpdatesFocusModeStatus {
  return { encId: 0, isInFocusMode: false };
}

export const PlayerUpdatesFocusModeStatus = {
  encode(message: PlayerUpdatesFocusModeStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.isInFocusMode === true) {
      writer.uint32(16).bool(message.isInFocusMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerUpdatesFocusModeStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsItemString(): PlayerSetsItemString {
  return { encId: 0, itemString: "" };
}

export const PlayerSetsItemString = {
  encode(message: PlayerSetsItemString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.itemString !== "") {
      writer.uint32(18).string(message.itemString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsItemString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerTriggersObject(): PlayerTriggersObject {
  return { encId: 0 };
}

export const PlayerTriggersObject = {
  encode(message: PlayerTriggersObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.mapId !== undefined) {
      writer.uint32(18).string(message.mapId);
    }
    if (message.key !== undefined) {
      writer.uint32(26).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerTriggersObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerNotifies(): PlayerNotifies {
  return { encId: 0, notification: "" };
}

export const PlayerNotifies = {
  encode(message: PlayerNotifies, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.notification !== "") {
      writer.uint32(18).string(message.notification);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerNotifies {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsFollowTarget(): PlayerSetsFollowTarget {
  return { encId: 0, followTarget: "" };
}

export const PlayerSetsFollowTarget = {
  encode(message: PlayerSetsFollowTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.followTarget !== "") {
      writer.uint32(18).string(message.followTarget);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsFollowTarget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerRequestsToLead(): PlayerRequestsToLead {
  return { encId: 0, snapshot: "" };
}

export const PlayerRequestsToLead = {
  encode(message: PlayerRequestsToLead, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.snapshot !== "") {
      writer.uint32(18).string(message.snapshot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerRequestsToLead {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsManualVideoSrc(): PlayerSetsManualVideoSrc {
  return { encId: 0, manualVideoSrc: "" };
}

export const PlayerSetsManualVideoSrc = {
  encode(message: PlayerSetsManualVideoSrc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.manualVideoSrc !== "") {
      writer.uint32(18).string(message.manualVideoSrc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsManualVideoSrc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsIsNpc(): PlayerSetsIsNpc {
  return { encId: 0, isNpc: false };
}

export const PlayerSetsIsNpc = {
  encode(message: PlayerSetsIsNpc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.isNpc === true) {
      writer.uint32(16).bool(message.isNpc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsIsNpc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsSubtitle(): PlayerSetsSubtitle {
  return { encId: 0, subtitle: "" };
}

export const PlayerSetsSubtitle = {
  encode(message: PlayerSetsSubtitle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.subtitle !== "") {
      writer.uint32(18).string(message.subtitle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsSubtitle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerCrafts(): PlayerCrafts {
  return { encId: 0, inputs: {} };
}

export const PlayerCrafts = {
  encode(message: PlayerCrafts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    Object.entries(message.inputs).forEach(([key, value]) => {
      PlayerCrafts_InputsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerCrafts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerCrafts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          const entry2 = PlayerCrafts_InputsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.inputs[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlayerCrafts_InputsEntry(): PlayerCrafts_InputsEntry {
  return { key: "", value: 0 };
}

export const PlayerCrafts_InputsEntry = {
  encode(message: PlayerCrafts_InputsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerCrafts_InputsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapMoveObject(): MapMoveObject {
  return { mapId: "", objectId: "", targetX: 0, targetY: 0, duration: 0 };
}

export const MapMoveObject = {
  encode(message: MapMoveObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.targetXOffset !== undefined) {
      writer.uint32(45).float(message.targetXOffset);
    }
    if (message.targetYOffset !== undefined) {
      writer.uint32(53).float(message.targetYOffset);
    }
    if (message.duration !== 0) {
      writer.uint32(61).float(message.duration);
    }
    if (message.easing !== undefined) {
      writer.uint32(66).string(message.easing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapMoveObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerEditsChatMessage(): PlayerEditsChatMessage {
  return { id: "" };
}

export const PlayerEditsChatMessage = {
  encode(message: PlayerEditsChatMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.likes !== undefined) {
      writer.uint32(16).uint32(message.likes);
    }
    if (message.replied !== undefined) {
      writer.uint32(24).bool(message.replied);
    }
    if (message.reply !== undefined) {
      ChatReply.encode(message.reply, writer.uint32(34).fork()).ldelim();
    }
    if (message.approved !== undefined) {
      writer.uint32(40).bool(message.approved);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerEditsChatMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseFXShakeObject(): FXShakeObject {
  return { mapId: "", targetId: "" };
}

export const FXShakeObject = {
  encode(message: FXShakeObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.targetId !== "") {
      writer.uint32(18).string(message.targetId);
    }
    if (message.intensity !== undefined) {
      writer.uint32(29).float(message.intensity);
    }
    if (message.durationMs !== undefined) {
      writer.uint32(37).float(message.durationMs);
    }
    if (message.mode !== undefined) {
      writer.uint32(40).uint32(message.mode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FXShakeObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseFXShakeCamera(): FXShakeCamera {
  return {};
}

export const FXShakeCamera = {
  encode(message: FXShakeCamera, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.intensity !== undefined) {
      writer.uint32(13).float(message.intensity);
    }
    if (message.durationMs !== undefined) {
      writer.uint32(21).float(message.durationMs);
    }
    if (message.mapId !== undefined) {
      writer.uint32(26).string(message.mapId);
    }
    if (message.targetUserId !== undefined) {
      writer.uint32(34).string(message.targetUserId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FXShakeCamera {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerHighFives(): PlayerHighFives {
  return { encId: 0, encIdTarget: 0 };
}

export const PlayerHighFives = {
  encode(message: PlayerHighFives, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.encIdTarget !== 0) {
      writer.uint32(16).uint32(message.encIdTarget);
    }
    if (message.emote !== undefined) {
      writer.uint32(26).string(message.emote);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerHighFives {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSendsCommand(): PlayerSendsCommand {
  return { encId: 0, command: "" };
}

export const PlayerSendsCommand = {
  encode(message: PlayerSendsCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.command !== "") {
      writer.uint32(18).string(message.command);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSendsCommand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpaceRegistersCommand(): SpaceRegistersCommand {
  return { command: "" };
}

export const SpaceRegistersCommand = {
  encode(message: SpaceRegistersCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.command !== "") {
      writer.uint32(18).string(message.command);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceRegistersCommand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerUpdatesInventory(): PlayerUpdatesInventory {
  return { encId: 0, items: {}, order: {} };
}

export const PlayerUpdatesInventory = {
  encode(message: PlayerUpdatesInventory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    Object.entries(message.items).forEach(([key, value]) => {
      PlayerUpdatesInventory_ItemsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    Object.entries(message.order).forEach(([key, value]) => {
      PlayerUpdatesInventory_OrderEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerUpdatesInventory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerUpdatesInventory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encId = reader.uint32();
          break;
        case 2:
          const entry2 = PlayerUpdatesInventory_ItemsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.items[entry2.key] = entry2.value;
          }
          break;
        case 3:
          const entry3 = PlayerUpdatesInventory_OrderEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.order[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlayerUpdatesInventory_ItemsEntry(): PlayerUpdatesInventory_ItemsEntry {
  return { key: "", value: undefined };
}

export const PlayerUpdatesInventory_ItemsEntry = {
  encode(message: PlayerUpdatesInventory_ItemsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      InventoryItem.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerUpdatesInventory_ItemsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerUpdatesInventory_OrderEntry(): PlayerUpdatesInventory_OrderEntry {
  return { key: "", value: "" };
}

export const PlayerUpdatesInventory_OrderEntry = {
  encode(message: PlayerUpdatesInventory_OrderEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerUpdatesInventory_OrderEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpaceUpdatesItems(): SpaceUpdatesItems {
  return { items: {} };
}

export const SpaceUpdatesItems = {
  encode(message: SpaceUpdatesItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.items).forEach(([key, value]) => {
      SpaceUpdatesItems_ItemsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceUpdatesItems {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpaceUpdatesItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SpaceUpdatesItems_ItemsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.items[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseSpaceUpdatesItems_ItemsEntry(): SpaceUpdatesItems_ItemsEntry {
  return { key: "", value: undefined };
}

export const SpaceUpdatesItems_ItemsEntry = {
  encode(message: SpaceUpdatesItems_ItemsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      SpaceItem.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceUpdatesItems_ItemsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerTriggersInventoryItem(): PlayerTriggersInventoryItem {
  return { encId: 0, itemId: "", abilityId: "" };
}

export const PlayerTriggersInventoryItem = {
  encode(message: PlayerTriggersInventoryItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerTriggersInventoryItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsAllowScreenPointer(): PlayerSetsAllowScreenPointer {
  return { encId: 0, allowScreenPointer: false };
}

export const PlayerSetsAllowScreenPointer = {
  encode(message: PlayerSetsAllowScreenPointer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.allowScreenPointer === true) {
      writer.uint32(16).bool(message.allowScreenPointer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsAllowScreenPointer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePrecomputedEnterLocation(): PrecomputedEnterLocation {
  return { enterLocation: undefined };
}

export const PrecomputedEnterLocation = {
  encode(message: PrecomputedEnterLocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enterLocation !== undefined) {
      MapLocation.encode(message.enterLocation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrecomputedEnterLocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsDeskInfo(): PlayerSetsDeskInfo {
  return { encId: 0, deskInfo: undefined };
}

export const PlayerSetsDeskInfo = {
  encode(message: PlayerSetsDeskInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.deskInfo !== undefined) {
      DeskInfoV2.encode(message.deskInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsDeskInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpaceSetsCapacity(): SpaceSetsCapacity {
  return { capacity: 0 };
}

export const SpaceSetsCapacity = {
  encode(message: SpaceSetsCapacity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.capacity !== 0) {
      writer.uint32(8).uint32(message.capacity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceSetsCapacity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpaceOverCapacityDeniesUser(): SpaceOverCapacityDeniesUser {
  return { userId: "" };
}

export const SpaceOverCapacityDeniesUser = {
  encode(message: SpaceOverCapacityDeniesUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceOverCapacityDeniesUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerSetsAway(): PlayerSetsAway {
  return { encId: 0, away: false };
}

export const PlayerSetsAway = {
  encode(message: PlayerSetsAway, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.away === true) {
      writer.uint32(16).bool(message.away);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsAway {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerStartsRecording(): PlayerStartsRecording {
  return { encId: 0, nookId: "" };
}

export const PlayerStartsRecording = {
  encode(message: PlayerStartsRecording, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encId !== 0) {
      writer.uint32(8).uint32(message.encId);
    }
    if (message.nookId !== "") {
      writer.uint32(18).string(message.nookId);
    }
    if (message.initializing !== undefined) {
      writer.uint32(24).bool(message.initializing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerStartsRecording {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseAccessRequest(): AccessRequest {
  return { guestId: "", memberId: "", requestedAtUnixTime: 0, guestName: "" };
}

export const AccessRequest = {
  encode(message: AccessRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.guestCurrentlyEquippedWearables !== undefined) {
      DBOutfit.encode(message.guestCurrentlyEquippedWearables, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          message.requestedAtUnixTime = longToNumber(reader.uint64() as Long);
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
  },
};

function createBaseAccessRequestsUpdated(): AccessRequestsUpdated {
  return { requests: [] };
}

export const AccessRequestsUpdated = {
  encode(message: AccessRequestsUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requests) {
      AccessRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessRequestsUpdated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseAccessRequestRespondedTo(): AccessRequestRespondedTo {
  return { targetId: "", accepted: false, location: undefined };
}

export const AccessRequestRespondedTo = {
  encode(message: AccessRequestRespondedTo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetId !== "") {
      writer.uint32(10).string(message.targetId);
    }
    if (message.accepted === true) {
      writer.uint32(16).bool(message.accepted);
    }
    if (message.location !== undefined) {
      MapLocation.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessRequestRespondedTo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlayerGuestPassStatus(): PlayerGuestPassStatus {
  return { userId: "", guestPassStatus: "" };
}

export const PlayerGuestPassStatus = {
  encode(message: PlayerGuestPassStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.guestPassStatus !== "") {
      writer.uint32(18).string(message.guestPassStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerGuestPassStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpaceSetsGuestPassStatuses(): SpaceSetsGuestPassStatuses {
  return { playerGuestPassStatuses: [] };
}

export const SpaceSetsGuestPassStatuses = {
  encode(message: SpaceSetsGuestPassStatuses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.playerGuestPassStatuses) {
      PlayerGuestPassStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceSetsGuestPassStatuses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetDeskFromNextAvailableDesk(): SetDeskFromNextAvailableDesk {
  return { desksToIgnore: [] };
}

export const SetDeskFromNextAvailableDesk = {
  encode(message: SetDeskFromNextAvailableDesk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetId !== undefined) {
      writer.uint32(10).string(message.targetId);
    }
    if (message.preferredDesk !== undefined) {
      MapAndDesk.encode(message.preferredDesk, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.desksToIgnore) {
      MapAndDesk.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetDeskFromNextAvailableDesk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpaceRolePermissionOverrideUpdated(): SpaceRolePermissionOverrideUpdated {
  return { role: "", permission: "", enabled: false };
}

export const SpaceRolePermissionOverrideUpdated = {
  encode(message: SpaceRolePermissionOverrideUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SpaceRolePermissionOverrideUpdated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseChimeSetsUserInfo(): ChimeSetsUserInfo {
  return { resource: "" };
}

export const ChimeSetsUserInfo = {
  encode(message: ChimeSetsUserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== "") {
      writer.uint32(10).string(message.resource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChimeSetsUserInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseClientServerBatch(): ClientServerBatch {
  return { actions: [] };
}

export const ClientServerBatch = {
  encode(message: ClientServerBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actions) {
      ClientServerAction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientServerBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseClientServerAction(): ClientServerAction {
  return { action: undefined };
}

export const ClientServerAction = {
  encode(message: ClientServerAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txnId !== undefined) {
      writer.uint32(800).uint32(message.txnId);
    }
    switch (message.action?.$case) {
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
        SetDeskFromNextAvailableDesk.encode(message.action.setDeskFromNextAvailableDesk, writer.uint32(1106).fork())
          .ldelim();
        break;
      case "setSpaceRolePermissionOverride":
        SetSpaceRolePermissionOverride.encode(message.action.setSpaceRolePermissionOverride, writer.uint32(1114).fork())
          .ldelim();
        break;
      case "setCurrentlyEquippedWearables":
        SetCurrentlyEquippedWearables.encode(message.action.setCurrentlyEquippedWearables, writer.uint32(1122).fork())
          .ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientServerAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
            clientHeartbeat: ClientHeartbeat.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.action = {
            $case: "clientBackupHeartbeat",
            clientBackupHeartbeat: ClientBackupHeartbeat.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.action = {
            $case: "updateSubscriptions",
            updateSubscriptions: UpdateSubscriptions.decode(reader, reader.uint32()),
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
            activelySpeaking: ActivelySpeaking.decode(reader, reader.uint32()),
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
            setInConversation: SetInConversation.decode(reader, reader.uint32()),
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
            setImagePointer: SetImagePointer.decode(reader, reader.uint32()),
          };
          break;
        case 42:
          message.action = { $case: "setGoKartId", setGoKartId: Deprecated.decode(reader, reader.uint32()) };
          break;
        case 43:
          message.action = {
            $case: "mapSetDimensions",
            mapSetDimensions: MapSetDimensions.decode(reader, reader.uint32()),
          };
          break;
        case 44:
          message.action = {
            $case: "mapSetCollisions",
            mapSetCollisions: MapSetCollisions.decode(reader, reader.uint32()),
          };
          break;
        case 45:
          message.action = {
            $case: "mapSetBackgroundImagePath",
            mapSetBackgroundImagePath: MapSetBackgroundImagePath.decode(reader, reader.uint32()),
          };
          break;
        case 46:
          message.action = {
            $case: "mapSetForegroundImagePath",
            mapSetForegroundImagePath: MapSetForegroundImagePath.decode(reader, reader.uint32()),
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
            mapSetAnnouncer: MapSetAnnouncer.decode(reader, reader.uint32()),
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
            mapSetMuteOnEntry: MapSetMuteOnEntry.decode(reader, reader.uint32()),
          };
          break;
        case 59:
          message.action = {
            $case: "mapSetUseDrawnBG",
            mapSetUseDrawnBG: MapSetUseDrawnBG.decode(reader, reader.uint32()),
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
            mapSetMiniMapImagePath: MapSetMiniMapImagePath.decode(reader, reader.uint32()),
          };
          break;
        case 68:
          message.action = {
            $case: "mapSetEnabledChats",
            mapSetEnabledChats: MapSetEnabledChats.decode(reader, reader.uint32()),
          };
          break;
        case 69:
          message.action = {
            $case: "mapSetDescription",
            mapSetDescription: MapSetDescription.decode(reader, reader.uint32()),
          };
          break;
        case 70:
          message.action = {
            $case: "mapSetDecoration",
            mapSetDecoration: MapSetDecoration.decode(reader, reader.uint32()),
          };
          break;
        case 71:
          message.action = {
            $case: "mapSetTutorialTasks",
            mapSetTutorialTasks: MapSetTutorialTasks.decode(reader, reader.uint32()),
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
            setScreenPointer: SetScreenPointer.decode(reader, reader.uint32()),
          };
          break;
        case 77:
          message.action = { $case: "setEmoteV2", setEmoteV2: SetEmoteV2.decode(reader, reader.uint32()) };
          break;
        case 78:
          message.action = {
            $case: "setFocusModeEndTime",
            setFocusModeEndTime: SetFocusModeEndTime.decode(reader, reader.uint32()),
          };
          break;
        case 79:
          message.action = {
            $case: "mapDeleteObjectById",
            mapDeleteObjectById: MapDeleteObjectById.decode(reader, reader.uint32()),
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
            setFollowTarget: SetFollowTarget.decode(reader, reader.uint32()),
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
            setManualVideoSrc: SetManualVideoSrc.decode(reader, reader.uint32()),
          };
          break;
        case 90:
          message.action = { $case: "setSubtitle", setSubtitle: SetSubtitle.decode(reader, reader.uint32()) };
          break;
        case 91:
          message.action = {
            $case: "playerUpdatesSession",
            playerUpdatesSession: Deprecated.decode(reader, reader.uint32()),
          };
          break;
        case 92:
          message.action = { $case: "mapMoveObject", mapMoveObject: MapMoveObject.decode(reader, reader.uint32()) };
          break;
        case 93:
          message.action = {
            $case: "chatMessageUpdated",
            chatMessageUpdated: ChatMessageUpdated.decode(reader, reader.uint32()),
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
            registerCommand: RegisterCommand.decode(reader, reader.uint32()),
          };
          break;
        case 97:
          message.action = { $case: "sendCommand", sendCommand: SendCommand.decode(reader, reader.uint32()) };
          break;
        case 98:
          message.action = {
            $case: "speakerUpdatesSession",
            speakerUpdatesSession: SpeakerUpdatesSession.decode(reader, reader.uint32()),
          };
          break;
        case 101:
          message.action = {
            $case: "addInventoryItem",
            addInventoryItem: AddInventoryItem.decode(reader, reader.uint32()),
          };
          break;
        case 102:
          message.action = {
            $case: "removeInventoryItem",
            removeInventoryItem: RemoveInventoryItem.decode(reader, reader.uint32()),
          };
          break;
        case 103:
          message.action = { $case: "setVehicleId", setVehicleId: SetVehicleId.decode(reader, reader.uint32()) };
          break;
        case 104:
          message.action = {
            $case: "setSpeedModifier",
            setSpeedModifier: SetSpeedModifier.decode(reader, reader.uint32()),
          };
          break;
        case 105:
          message.action = { $case: "highFive", highFive: HighFive.decode(reader, reader.uint32()) };
          break;
        case 107:
          message.action = {
            $case: "updateSpaceItems",
            updateSpaceItems: SpaceUpdatesItems.decode(reader, reader.uint32()),
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
            triggerInventoryItem: TriggerInventoryItem.decode(reader, reader.uint32()),
          };
          break;
        case 112:
          message.action = {
            $case: "setAllowScreenPointer",
            setAllowScreenPointer: SetAllowScreenPointer.decode(reader, reader.uint32()),
          };
          break;
        case 113:
          message.action = {
            $case: "precomputeEnter",
            precomputeEnter: PrecomputeEnter.decode(reader, reader.uint32()),
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
            requestToJoinNook: RequestToJoinNook.decode(reader, reader.uint32()),
          };
          break;
        case 118:
          message.action = {
            $case: "updateNookPermission",
            updateNookPermission: UpdateNookPermission.decode(reader, reader.uint32()),
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
            setProfileImageUrl: SetProfileImageUrl.decode(reader, reader.uint32()),
          };
          break;
        case 126:
          message.action = {
            $case: "setPersonalImageUrl",
            setPersonalImageUrl: SetPersonalImageUrl.decode(reader, reader.uint32()),
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
            requestAccessViaCheckIn: RequestAccessViaCheckIn.decode(reader, reader.uint32()),
          };
          break;
        case 133:
          message.action = {
            $case: "respondToAccessRequest",
            respondToAccessRequest: RespondToAccessRequest.decode(reader, reader.uint32()),
          };
          break;
        case 134:
          message.action = {
            $case: "setAvailability",
            setAvailability: SetAvailability.decode(reader, reader.uint32()),
          };
          break;
        case 137:
          message.action = { $case: "respawnAtDesk", respawnAtDesk: RespawnAtDesk.decode(reader, reader.uint32()) };
          break;
        case 138:
          message.action = {
            $case: "setDeskFromNextAvailableDesk",
            setDeskFromNextAvailableDesk: SetDeskFromNextAvailableDesk.decode(reader, reader.uint32()),
          };
          break;
        case 139:
          message.action = {
            $case: "setSpaceRolePermissionOverride",
            setSpaceRolePermissionOverride: SetSpaceRolePermissionOverride.decode(reader, reader.uint32()),
          };
          break;
        case 140:
          message.action = {
            $case: "setCurrentlyEquippedWearables",
            setCurrentlyEquippedWearables: SetCurrentlyEquippedWearables.decode(reader, reader.uint32()),
          };
          break;
        case 141:
          message.action = {
            $case: "setDisplayEmail",
            setDisplayEmail: SetDisplayEmail.decode(reader, reader.uint32()),
          };
          break;
        case 142:
          message.action = {
            $case: "mapDeleteObjectByKey",
            mapDeleteObjectByKey: MapDeleteObjectByKey.decode(reader, reader.uint32()),
          };
          break;
        case 143:
          message.action = {
            $case: "mapUpdateObjects",
            mapUpdateObjects: MapUpdateObjects.decode(reader, reader.uint32()),
          };
          break;
        case 144:
          message.action = {
            $case: "interactWithObject",
            interactWithObject: InteractWithObject.decode(reader, reader.uint32()),
          };
          break;
        case 145:
          message.action = { $case: "triggerObject", triggerObject: TriggerObject.decode(reader, reader.uint32()) };
          break;
        case 146:
          message.action = {
            $case: "joinChimeMeeting",
            joinChimeMeeting: JoinChimeMeeting.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseClientHeartbeat(): ClientHeartbeat {
  return {};
}

export const ClientHeartbeat = {
  encode(_: ClientHeartbeat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientHeartbeat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseClientBackupHeartbeat(): ClientBackupHeartbeat {
  return {};
}

export const ClientBackupHeartbeat = {
  encode(_: ClientBackupHeartbeat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientBackupHeartbeat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseUpdateSubscriptions(): UpdateSubscriptions {
  return { subscriptions: {}, mapUpdateIds: {} };
}

export const UpdateSubscriptions = {
  encode(message: UpdateSubscriptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.subscriptions).forEach(([key, value]) => {
      UpdateSubscriptions_SubscriptionsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    Object.entries(message.mapUpdateIds).forEach(([key, value]) => {
      UpdateSubscriptions_MapUpdateIdsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSubscriptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSubscriptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = UpdateSubscriptions_SubscriptionsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.subscriptions[entry1.key] = entry1.value;
          }
          break;
        case 2:
          const entry2 = UpdateSubscriptions_MapUpdateIdsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.mapUpdateIds[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseUpdateSubscriptions_SubscriptionsEntry(): UpdateSubscriptions_SubscriptionsEntry {
  return { key: "", value: false };
}

export const UpdateSubscriptions_SubscriptionsEntry = {
  encode(message: UpdateSubscriptions_SubscriptionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSubscriptions_SubscriptionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseUpdateSubscriptions_MapUpdateIdsEntry(): UpdateSubscriptions_MapUpdateIdsEntry {
  return { key: "", value: 0 };
}

export const UpdateSubscriptions_MapUpdateIdsEntry = {
  encode(message: UpdateSubscriptions_MapUpdateIdsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSubscriptions_MapUpdateIdsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSubscriptions_MapUpdateIdsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseMove(): Move {
  return { dir: 0, stopped: false, inputId: 0 };
}

export const Move = {
  encode(message: Move, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dir !== 0) {
      writer.uint32(8).int32(message.dir);
    }
    if (message.stopped === true) {
      writer.uint32(16).bool(message.stopped);
    }
    if (message.inputId !== 0) {
      writer.uint32(24).uint32(message.inputId);
    }
    if (message.targetId !== undefined) {
      writer.uint32(34).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Move {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dir = reader.int32() as any;
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
  },
};

function createBaseRequestMute(): RequestMute {
  return { target: "", video: false };
}

export const RequestMute = {
  encode(message: RequestMute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.target !== "") {
      writer.uint32(10).string(message.target);
    }
    if (message.video === true) {
      writer.uint32(16).bool(message.video);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestMute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetAffiliation(): SetAffiliation {
  return { affiliation: "" };
}

export const SetAffiliation = {
  encode(message: SetAffiliation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.affiliation !== "") {
      writer.uint32(10).string(message.affiliation);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetAffiliation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetStatus(): SetStatus {
  return { status: false };
}

export const SetStatus = {
  encode(message: SetStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status === true) {
      writer.uint32(8).bool(message.status);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetAvailability(): SetAvailability {
  return { availability: "" };
}

export const SetAvailability = {
  encode(message: SetAvailability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.availability !== "") {
      writer.uint32(10).string(message.availability);
    }
    if (message.endOption !== undefined) {
      writer.uint32(18).string(message.endOption);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetAvailability {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetCurrentlyEquippedWearables(): SetCurrentlyEquippedWearables {
  return { currentlyEquippedWearables: undefined };
}

export const SetCurrentlyEquippedWearables = {
  encode(message: SetCurrentlyEquippedWearables, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentlyEquippedWearables !== undefined) {
      DBOutfit.encode(message.currentlyEquippedWearables, writer.uint32(10).fork()).ldelim();
    }
    if (message.targetId !== undefined) {
      writer.uint32(26).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCurrentlyEquippedWearables {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSpotlight(): Spotlight {
  return { spotlightedUser: "", isSpotlighted: false };
}

export const Spotlight = {
  encode(message: Spotlight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spotlightedUser !== "") {
      writer.uint32(10).string(message.spotlightedUser);
    }
    if (message.isSpotlighted === true) {
      writer.uint32(16).bool(message.isSpotlighted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Spotlight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseRing(): Ring {
  return { user: "" };
}

export const Ring = {
  encode(message: Ring, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ring {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetImagePointer(): SetImagePointer {
  return { objectId: "", x: 0, y: 0 };
}

export const SetImagePointer = {
  encode(message: SetImagePointer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SetImagePointer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetScreenPointer(): SetScreenPointer {
  return { screenId: "", x: 0, y: 0 };
}

export const SetScreenPointer = {
  encode(message: SetScreenPointer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SetScreenPointer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseBan(): Ban {
  return { user: "" };
}

export const Ban = {
  encode(message: Ban, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ban {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseKick(): Kick {
  return { user: "" };
}

export const Kick = {
  encode(message: Kick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Kick {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseBlock(): Block {
  return { blockedUserId: "", blocked: false };
}

export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockedUserId !== "") {
      writer.uint32(10).string(message.blockedUserId);
    }
    if (message.blocked === true) {
      writer.uint32(16).bool(message.blocked);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetImpassable(): SetImpassable {
  return { mapId: "", x: 0, y: 0, impassable: false };
}

export const SetImpassable = {
  encode(message: SetImpassable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SetImpassable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseChat(): Chat {
  return { chatRecipient: "", contents: "", localPlayerIds: [], mapId: "" };
}

export const Chat = {
  encode(message: Chat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatRecipient !== "") {
      writer.uint32(10).string(message.chatRecipient);
    }
    if (message.contents !== "") {
      writer.uint32(18).string(message.contents);
    }
    for (const v of message.localPlayerIds) {
      writer.uint32(26).string(v!);
    }
    if (message.mapId !== "") {
      writer.uint32(34).string(message.mapId);
    }
    if (message.id !== undefined) {
      writer.uint32(42).string(message.id);
    }
    if (message.nookId !== undefined) {
      writer.uint32(50).string(message.nookId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Chat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseNotify(): Notify {
  return { notification: "" };
}

export const Notify = {
  encode(message: Notify, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notification !== "") {
      writer.uint32(10).string(message.notification);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Notify {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseInteractWithObject(): InteractWithObject {
  return { mapId: "", key: "" };
}

export const InteractWithObject = {
  encode(message: InteractWithObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.dataJson !== undefined) {
      writer.uint32(26).string(message.dataJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InteractWithObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseActivelySpeaking(): ActivelySpeaking {
  return { activelySpeaking: false };
}

export const ActivelySpeaking = {
  encode(message: ActivelySpeaking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activelySpeaking === true) {
      writer.uint32(8).bool(message.activelySpeaking);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivelySpeaking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseEnterWhisper(): EnterWhisper {
  return { recipientId: "", dir: 0 };
}

export const EnterWhisper = {
  encode(message: EnterWhisper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipientId !== "") {
      writer.uint32(10).string(message.recipientId);
    }
    if (message.dir !== 0) {
      writer.uint32(16).int32(message.dir);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnterWhisper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnterWhisper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipientId = reader.string();
          break;
        case 2:
          message.dir = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseLeaveWhisper(): LeaveWhisper {
  return {};
}

export const LeaveWhisper = {
  encode(_: LeaveWhisper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeaveWhisper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseGhost(): Ghost {
  return { ghost: 0 };
}

export const Ghost = {
  encode(message: Ghost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ghost !== 0) {
      writer.uint32(8).uint32(message.ghost);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ghost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetEmoteV2(): SetEmoteV2 {
  return {};
}

export const SetEmoteV2 = {
  encode(message: SetEmoteV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.emote !== undefined) {
      writer.uint32(10).string(message.emote);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    if (message.count !== undefined) {
      writer.uint32(24).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetEmoteV2 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetName(): SetName {
  return { name: "" };
}

export const SetName = {
  encode(message: SetName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetTextStatus(): SetTextStatus {
  return { textStatus: "" };
}

export const SetTextStatus = {
  encode(message: SetTextStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.textStatus !== "") {
      writer.uint32(10).string(message.textStatus);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetTextStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetPronouns(): SetPronouns {
  return { pronouns: "" };
}

export const SetPronouns = {
  encode(message: SetPronouns, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pronouns !== "") {
      writer.uint32(10).string(message.pronouns);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPronouns {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetTitle(): SetTitle {
  return { title: "" };
}

export const SetTitle = {
  encode(message: SetTitle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetTitle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetCity(): SetCity {
  return { city: "" };
}

export const SetCity = {
  encode(message: SetCity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.city !== "") {
      writer.uint32(10).string(message.city);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetCountry(): SetCountry {
  return { country: "" };
}

export const SetCountry = {
  encode(message: SetCountry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.country !== "") {
      writer.uint32(10).string(message.country);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCountry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetStartDate(): SetStartDate {
  return { startDate: "" };
}

export const SetStartDate = {
  encode(message: SetStartDate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startDate !== "") {
      writer.uint32(10).string(message.startDate);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetStartDate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetTimezone(): SetTimezone {
  return { timezone: "" };
}

export const SetTimezone = {
  encode(message: SetTimezone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timezone !== "") {
      writer.uint32(10).string(message.timezone);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetTimezone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetPhone(): SetPhone {
  return { phone: "" };
}

export const SetPhone = {
  encode(message: SetPhone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phone !== "") {
      writer.uint32(10).string(message.phone);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPhone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetDisplayEmail(): SetDisplayEmail {
  return { displayEmail: "" };
}

export const SetDisplayEmail = {
  encode(message: SetDisplayEmail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.displayEmail !== "") {
      writer.uint32(10).string(message.displayEmail);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetDisplayEmail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetDescription(): SetDescription {
  return { description: "" };
}

export const SetDescription = {
  encode(message: SetDescription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetDescription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetProfileImageUrl(): SetProfileImageUrl {
  return { profileImageUrl: "" };
}

export const SetProfileImageUrl = {
  encode(message: SetProfileImageUrl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profileImageUrl !== "") {
      writer.uint32(10).string(message.profileImageUrl);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetProfileImageUrl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetPersonalImageUrl(): SetPersonalImageUrl {
  return { personalImageUrl: "" };
}

export const SetPersonalImageUrl = {
  encode(message: SetPersonalImageUrl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.personalImageUrl !== "") {
      writer.uint32(10).string(message.personalImageUrl);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPersonalImageUrl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseExit(): Exit {
  return {};
}

export const Exit = {
  encode(_: Exit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Exit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseEnter(): Enter {
  return {};
}

export const Enter = {
  encode(message: Enter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      PlayerInitInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    if (message.spawnToken !== undefined) {
      writer.uint32(18).string(message.spawnToken);
    }
    if (message.targetId !== undefined) {
      writer.uint32(26).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Enter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePrecomputeEnter(): PrecomputeEnter {
  return {};
}

export const PrecomputeEnter = {
  encode(message: PrecomputeEnter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enterLocation !== undefined) {
      MapLocation.encode(message.enterLocation, writer.uint32(10).fork()).ldelim();
    }
    if (message.spawnToken !== undefined) {
      writer.uint32(18).string(message.spawnToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrecomputeEnter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetEmojiStatus(): SetEmojiStatus {
  return { emojiStatus: "" };
}

export const SetEmojiStatus = {
  encode(message: SetEmojiStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.emojiStatus !== "") {
      writer.uint32(10).string(message.emojiStatus);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetEmojiStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseTeleport(): Teleport {
  return { mapId: "", x: 0, y: 0 };
}

export const Teleport = {
  encode(message: Teleport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.x !== 0) {
      writer.uint32(16).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).uint32(message.y);
    }
    if (message.targetId !== undefined) {
      writer.uint32(34).string(message.targetId);
    }
    if (message.direction !== undefined) {
      writer.uint32(40).int32(message.direction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Teleport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          message.direction = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseSpawn(): Spawn {
  return { spawnToken: "" };
}

export const Spawn = {
  encode(message: Spawn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spawnToken !== "") {
      writer.uint32(10).string(message.spawnToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Spawn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseRespawn(): Respawn {
  return {};
}

export const Respawn = {
  encode(_: Respawn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Respawn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseRespawnAtDesk(): RespawnAtDesk {
  return {};
}

export const RespawnAtDesk = {
  encode(_: RespawnAtDesk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RespawnAtDesk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseRequestToJoinNook(): RequestToJoinNook {
  return { nookId: "", mapId: "" };
}

export const RequestToJoinNook = {
  encode(message: RequestToJoinNook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nookId !== "") {
      writer.uint32(10).string(message.nookId);
    }
    if (message.mapId !== "") {
      writer.uint32(18).string(message.mapId);
    }
    if (message.name !== undefined) {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestToJoinNook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseUpdateNookPermission(): UpdateNookPermission {
  return { playerId: "", nookId: "", granted: false };
}

export const UpdateNookPermission = {
  encode(message: UpdateNookPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNookPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseInit(): Init {
  return { spaceId: "", auth: undefined };
}

export const Init = {
  encode(message: Init, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spaceId !== "") {
      writer.uint32(10).string(message.spaceId);
    }
    switch (message.auth?.$case) {
      case "token":
        writer.uint32(18).string(message.auth.token);
        break;
      case "apiKey":
        writer.uint32(26).string(message.auth.apiKey);
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Init {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapAddObject(): MapAddObject {
  return { mapId: "", object: undefined };
}

export const MapAddObject = {
  encode(message: MapAddObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.object !== undefined) {
      WireObject.encode(message.object, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapAddObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapUpdateObjects(): MapUpdateObjects {
  return { mapId: "", objects: {} };
}

export const MapUpdateObjects = {
  encode(message: MapUpdateObjects, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    Object.entries(message.objects).forEach(([key, value]) => {
      MapUpdateObjects_ObjectsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.updatesAreOverwrites !== undefined) {
      writer.uint32(24).bool(message.updatesAreOverwrites);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapUpdateObjects {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapUpdateObjects();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          const entry2 = MapUpdateObjects_ObjectsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
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
  },
};

function createBaseMapUpdateObjects_ObjectsEntry(): MapUpdateObjects_ObjectsEntry {
  return { key: "", value: undefined };
}

export const MapUpdateObjects_ObjectsEntry = {
  encode(message: MapUpdateObjects_ObjectsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      WireObject.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapUpdateObjects_ObjectsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseShootConfetti(): ShootConfetti {
  return {};
}

export const ShootConfetti = {
  encode(message: ShootConfetti, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetId !== undefined) {
      writer.uint32(10).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShootConfetti {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetEventStatus(): SetEventStatus {
  return { eventStatus: "" };
}

export const SetEventStatus = {
  encode(message: SetEventStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventStatus !== "") {
      writer.uint32(10).string(message.eventStatus);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetEventStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetInConversation(): SetInConversation {
  return { inConversation: false };
}

export const SetInConversation = {
  encode(message: SetInConversation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inConversation === true) {
      writer.uint32(8).bool(message.inConversation);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetInConversation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetCurrentArea(): SetCurrentArea {
  return { currentArea: "" };
}

export const SetCurrentArea = {
  encode(message: SetCurrentArea, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentArea !== "") {
      writer.uint32(10).string(message.currentArea);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCurrentArea {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetVehicleId(): SetVehicleId {
  return { vehicleId: "" };
}

export const SetVehicleId = {
  encode(message: SetVehicleId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vehicleId !== "") {
      writer.uint32(10).string(message.vehicleId);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    if (message.action !== undefined) {
      writer.uint32(26).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetVehicleId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetSpeedModifier(): SetSpeedModifier {
  return { speedModifier: 0 };
}

export const SetSpeedModifier = {
  encode(message: SetSpeedModifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.speedModifier !== 0) {
      writer.uint32(13).float(message.speedModifier);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetSpeedModifier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetIsAlone(): SetIsAlone {
  return { isAlone: false };
}

export const SetIsAlone = {
  encode(message: SetIsAlone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isAlone === true) {
      writer.uint32(8).bool(message.isAlone);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetIsAlone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetIsMobile(): SetIsMobile {
  return { isMobile: false };
}

export const SetIsMobile = {
  encode(message: SetIsMobile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isMobile === true) {
      writer.uint32(8).bool(message.isMobile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetIsMobile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBasePlaySound(): PlaySound {
  return { src: "", volume: 0 };
}

export const PlaySound = {
  encode(message: PlaySound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.src !== "") {
      writer.uint32(10).string(message.src);
    }
    if (message.volume !== 0) {
      writer.uint32(21).float(message.volume);
    }
    if (message.targetId !== undefined) {
      writer.uint32(26).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlaySound {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseStopSound(): StopSound {
  return { src: "" };
}

export const StopSound = {
  encode(message: StopSound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.src !== "") {
      writer.uint32(10).string(message.src);
    }
    if (message.targetId !== undefined) {
      writer.uint32(26).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopSound {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetFocusModeEndTime(): SetFocusModeEndTime {
  return { focusModeEndTime: "" };
}

export const SetFocusModeEndTime = {
  encode(message: SetFocusModeEndTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.focusModeEndTime !== "") {
      writer.uint32(10).string(message.focusModeEndTime);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetFocusModeEndTime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetItemString(): SetItemString {
  return { itemString: "" };
}

export const SetItemString = {
  encode(message: SetItemString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemString !== "") {
      writer.uint32(10).string(message.itemString);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetItemString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseTriggerObject(): TriggerObject {
  return {};
}

export const TriggerObject = {
  encode(message: TriggerObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== undefined) {
      writer.uint32(10).string(message.mapId);
    }
    if (message.key !== undefined) {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseCustomAction(): CustomAction {
  return { name: "", payload: "", recipients: [] };
}

export const CustomAction = {
  encode(message: CustomAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    for (const v of message.recipients) {
      writer.uint32(26).string(v!);
    }
    if (message.sendToAll !== undefined) {
      writer.uint32(32).bool(message.sendToAll);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetFollowTarget(): SetFollowTarget {
  return { followTarget: "" };
}

export const SetFollowTarget = {
  encode(message: SetFollowTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.followTarget !== "") {
      writer.uint32(10).string(message.followTarget);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetFollowTarget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseRequestToLead(): RequestToLead {
  return { target: "", snapshot: "" };
}

export const RequestToLead = {
  encode(message: RequestToLead, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.target !== "") {
      writer.uint32(10).string(message.target);
    }
    if (message.snapshot !== "") {
      writer.uint32(18).string(message.snapshot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestToLead {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseEnterPortal(): EnterPortal {
  return { targetUrl: "" };
}

export const EnterPortal = {
  encode(message: EnterPortal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetUrl !== "") {
      writer.uint32(10).string(message.targetUrl);
    }
    if (message.bypassPrompt !== undefined) {
      writer.uint32(16).bool(message.bypassPrompt);
    }
    if (message.targetId !== undefined) {
      writer.uint32(26).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnterPortal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetManualVideoSrc(): SetManualVideoSrc {
  return { manualVideoSrc: "" };
}

export const SetManualVideoSrc = {
  encode(message: SetManualVideoSrc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.manualVideoSrc !== "") {
      writer.uint32(10).string(message.manualVideoSrc);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetManualVideoSrc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetSubtitle(): SetSubtitle {
  return { subtitle: "" };
}

export const SetSubtitle = {
  encode(message: SetSubtitle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subtitle !== "") {
      writer.uint32(10).string(message.subtitle);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetSubtitle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseMapCommitsChanges(): MapCommitsChanges {
  return { mapId: "", updateId: 0 };
}

export const MapCommitsChanges = {
  encode(message: MapCommitsChanges, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapId !== "") {
      writer.uint32(10).string(message.mapId);
    }
    if (message.updateId !== 0) {
      writer.uint32(16).uint64(message.updateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapCommitsChanges {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapCommitsChanges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapId = reader.string();
          break;
        case 2:
          message.updateId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseSpeakerUpdatesSession(): SpeakerUpdatesSession {
  return { sessionId: "" };
}

export const SpeakerUpdatesSession = {
  encode(message: SpeakerUpdatesSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.customizeRoomEnabled !== undefined) {
      writer.uint32(16).bool(message.customizeRoomEnabled);
    }
    if (message.chatEnabled !== undefined) {
      writer.uint32(24).bool(message.chatEnabled);
    }
    if (message.qaEnabled !== undefined) {
      writer.uint32(32).bool(message.qaEnabled);
    }
    if (message.approveQuestionsEnabled !== undefined) {
      writer.uint32(40).bool(message.approveQuestionsEnabled);
    }
    if (message.massMuteEnabled !== undefined) {
      writer.uint32(48).bool(message.massMuteEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpeakerUpdatesSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseChatReply(): ChatReply {
  return { senderId: "", senderName: "", contents: "" };
}

export const ChatReply = {
  encode(message: ChatReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ChatReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseChatMessageUpdated(): ChatMessageUpdated {
  return { id: "" };
}

export const ChatMessageUpdated = {
  encode(message: ChatMessageUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChatMessageUpdated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSendCommand(): SendCommand {
  return { command: "" };
}

export const SendCommand = {
  encode(message: SendCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.command !== "") {
      writer.uint32(10).string(message.command);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendCommand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseRegisterCommand(): RegisterCommand {
  return { command: "" };
}

export const RegisterCommand = {
  encode(message: RegisterCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.command !== "") {
      writer.uint32(10).string(message.command);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterCommand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseCraft(): Craft {
  return { inputs: {} };
}

export const Craft = {
  encode(message: Craft, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.inputs).forEach(([key, value]) => {
      Craft_InputsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Craft {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCraft();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Craft_InputsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.inputs[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseCraft_InputsEntry(): Craft_InputsEntry {
  return { key: "", value: 0 };
}

export const Craft_InputsEntry = {
  encode(message: Craft_InputsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Craft_InputsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseHighFive(): HighFive {
  return { targetId: "" };
}

export const HighFive = {
  encode(message: HighFive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetId !== "") {
      writer.uint32(10).string(message.targetId);
    }
    if (message.emote !== undefined) {
      writer.uint32(18).string(message.emote);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HighFive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseAddInventoryItem(): AddInventoryItem {
  return { itemId: "", delta: 0, targetId: "" };
}

export const AddInventoryItem = {
  encode(message: AddInventoryItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AddInventoryItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddInventoryItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemId = reader.string();
          break;
        case 2:
          message.delta = longToNumber(reader.uint64() as Long);
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
  },
};

function createBaseRemoveInventoryItem(): RemoveInventoryItem {
  return { itemId: "", delta: 0 };
}

export const RemoveInventoryItem = {
  encode(message: RemoveInventoryItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "") {
      writer.uint32(10).string(message.itemId);
    }
    if (message.delta !== 0) {
      writer.uint32(16).uint64(message.delta);
    }
    if (message.targetId !== undefined) {
      writer.uint32(26).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveInventoryItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveInventoryItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemId = reader.string();
          break;
        case 2:
          message.delta = longToNumber(reader.uint64() as Long);
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
  },
};

function createBaseHipToBeSquare(): HipToBeSquare {
  return { data: "" };
}

export const HipToBeSquare = {
  encode(message: HipToBeSquare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HipToBeSquare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseTriggerInventoryItem(): TriggerInventoryItem {
  return { itemId: "", abilityId: "" };
}

export const TriggerInventoryItem = {
  encode(message: TriggerInventoryItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "") {
      writer.uint32(10).string(message.itemId);
    }
    if (message.abilityId !== "") {
      writer.uint32(18).string(message.abilityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerInventoryItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetAllowScreenPointer(): SetAllowScreenPointer {
  return { allowScreenPointer: false };
}

export const SetAllowScreenPointer = {
  encode(message: SetAllowScreenPointer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allowScreenPointer === true) {
      writer.uint32(8).bool(message.allowScreenPointer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetAllowScreenPointer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetDeskInfo(): SetDeskInfo {
  return { deskInfo: undefined };
}

export const SetDeskInfo = {
  encode(message: SetDeskInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deskInfo !== undefined) {
      DeskInfoV2.encode(message.deskInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetDeskInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseWave(): Wave {
  return { user: "", isReply: false };
}

export const Wave = {
  encode(message: Wave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.isReply === true) {
      writer.uint32(16).bool(message.isReply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Wave {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseSetAway(): SetAway {
  return { away: false };
}

export const SetAway = {
  encode(message: SetAway, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.away === true) {
      writer.uint32(8).bool(message.away);
    }
    if (message.targetId !== undefined) {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetAway {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseStartRecording(): StartRecording {
  return { nookId: "" };
}

export const StartRecording = {
  encode(message: StartRecording, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nookId !== "") {
      writer.uint32(10).string(message.nookId);
    }
    if (message.initializing !== undefined) {
      writer.uint32(16).bool(message.initializing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartRecording {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseRequestAccessViaCheckIn(): RequestAccessViaCheckIn {
  return { userId: "", canceled: false };
}

export const RequestAccessViaCheckIn = {
  encode(message: RequestAccessViaCheckIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.canceled === true) {
      writer.uint32(16).bool(message.canceled);
    }
    if (message.name !== undefined) {
      writer.uint32(26).string(message.name);
    }
    if (message.currentlyEquippedWearables !== undefined) {
      DBOutfit.encode(message.currentlyEquippedWearables, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestAccessViaCheckIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseRespondToAccessRequest(): RespondToAccessRequest {
  return { userId: "", accepted: false };
}

export const RespondToAccessRequest = {
  encode(message: RespondToAccessRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.accepted === true) {
      writer.uint32(16).bool(message.accepted);
    }
    if (message.locationType !== undefined) {
      writer.uint32(24).int32(message.locationType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RespondToAccessRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          message.locationType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseSetSpaceRolePermissionOverride(): SetSpaceRolePermissionOverride {
  return { role: "", permission: "", enabled: false };
}

export const SetSpaceRolePermissionOverride = {
  encode(message: SetSpaceRolePermissionOverride, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SetSpaceRolePermissionOverride {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

function createBaseJoinChimeMeeting(): JoinChimeMeeting {
  return {};
}

export const JoinChimeMeeting = {
  encode(message: JoinChimeMeeting, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mediaRegion !== undefined) {
      writer.uint32(10).string(message.mediaRegion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JoinChimeMeeting {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
export const protobufWriterLibrary = _m0
