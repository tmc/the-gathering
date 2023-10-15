import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "";
export interface Deprecated {
}
export interface SpriteDirectionEnum {
}
export declare enum SpriteDirectionEnum_ENUM {
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
    Dance4 = 12
}
export interface MoveDirectionEnum {
}
export declare enum MoveDirectionEnum_ENUM {
    Left = 0,
    Right = 1,
    Up = 2,
    Down = 3,
    Dance = 4
}
export interface InteractionEnum {
}
export declare enum InteractionEnum_ENUM {
    NONE = 0,
    EMBEDDED_WEBSITE = 1,
    POSTER = 2,
    VIDEO = 3,
    EXTERNAL_CALL = 4,
    EXTENSION = 5,
    NOTE = 6,
    MODAL_EXTENSION = 7,
    COMPONENT_MODAL = 8,
    SIDE_PANEL_TRIGGER = 9
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
export interface WireObjectSpritesheetFraming {
    frameWidth: number;
    frameHeight: number;
}
export interface WireObjectSpriteAnimConfig {
    useSequenceAsRange?: boolean | undefined;
    sequence: number[];
    loop?: boolean | undefined;
    frameRate: number;
}
export interface WireObjectSpritesheet {
    spritesheetUrl: string;
    framing: WireObjectSpritesheetFraming | undefined;
    animations: {
        [key: string]: WireObjectSpriteAnimConfig;
    };
    currentAnim?: string | undefined;
    pauseAnimationsIfFpsBelowFramerate?: boolean | undefined;
}
export interface WireObjectSpritesheet_AnimationsEntry {
    key: string;
    value: WireObjectSpriteAnimConfig | undefined;
}
export interface WireObject {
    templateId?: string | undefined;
    _name?: string | undefined;
    _tags: string[];
    x?: number | undefined;
    y?: number | undefined;
    offsetX?: number | undefined;
    offsetY?: number | undefined;
    color?: string | undefined;
    orientation?: number | undefined;
    normal?: string | undefined;
    highlighted?: string | undefined;
    type?: InteractionEnum_ENUM | undefined;
    width?: number | undefined;
    height?: number | undefined;
    extensionClass?: string | undefined;
    previewMessage?: string | undefined;
    distThreshold?: number | undefined;
    propertiesJson?: string | undefined;
    sound?: Sound | undefined;
    objectStartTime?: ObjectTime | undefined;
    objectExpireTime?: ObjectTime | undefined;
    id?: string | undefined;
    customState?: string | undefined;
    objectPlacerId?: string | undefined;
    numGoKarts?: number | undefined;
    spritesheet?: WireObjectSpritesheet | undefined;
    zIndex?: number | undefined;
}
export interface SpaceMemberInfo {
    roles: {
        [key: string]: boolean;
    };
    name?: string | undefined;
    currentlyEquippedWearables?: DBOutfit | undefined;
    allowScreenPointer?: boolean | undefined;
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
    objects: {
        [key: string]: BackedUpDeskObject;
    };
}
export interface DeskObjects_ObjectsEntry {
    key: string;
    value: BackedUpDeskObject | undefined;
}
export interface DeskInfoV2 {
    deskId?: string | undefined;
    description?: string | undefined;
    locked?: boolean | undefined;
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
    users: {
        [key: string]: RequestUser;
    };
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
export interface MapSetCollisions {
    mapId: string;
    x: number;
    y: number;
    w: number;
    h: number;
    mask: string;
}
export interface MapSetCollisionsBits {
    mapId: string;
    overwrite: boolean;
    x: number;
    y: number;
    w: number;
    h: number;
    mask: Uint8Array;
}
export interface MapSetBackgroundImagePath {
    mapId: string;
    backgroundImagePath: string;
}
export interface MapSetForegroundImagePath {
    mapId: string;
    foregroundImagePath: string;
    delete?: boolean | undefined;
}
export interface MapSetNooks {
    mapId: string;
    nooks: {
        [key: string]: NookDiff;
    };
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
export interface MapSetAssets {
    mapId: string;
    assets: Asset[];
    delete?: boolean | undefined;
}
export interface MapSetObjectsV2 {
    mapId: string;
    objects: {
        [key: string]: WireObject;
    };
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
    walls: {
        [key: string]: string;
    };
    delete?: boolean | undefined;
}
export interface MapSetWalls_WallsEntry {
    key: string;
    value: string;
}
export interface MapSetFloors {
    mapId: string;
    floors: {
        [key: string]: string;
    };
    delete?: boolean | undefined;
}
export interface MapSetFloors_FloorsEntry {
    key: string;
    value: string;
}
export interface MapSetAreas {
    mapId: string;
    areas: {
        [key: string]: WireArea;
    };
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
    items: {
        [key: string]: InventoryItem;
    };
    order: {
        [key: string]: string;
    };
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
    meta: {
        [key: string]: string;
    };
    abilities: {
        [key: string]: ItemAbility;
    };
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
    events: ServerClientEvent[];
}
export interface ServerClientEvent {
    event?: {
        $case: "info";
        info: Info;
    } | {
        $case: "warn";
        warn: Warn;
    } | {
        $case: "error";
        error: ErrorEvent;
    } | {
        $case: "ready";
        ready: Ready;
    } | {
        $case: "serverHeartbeat";
        serverHeartbeat: ServerHeartbeat;
    } | {
        $case: "transactionStatus";
        transactionStatus: TransactionStatus;
    } | {
        $case: "playerMoves";
        playerMoves: PlayerMoves;
    } | {
        $case: "playerSetsStatus";
        playerSetsStatus: PlayerSetsStatus;
    } | {
        $case: "playerSpotlights";
        playerSpotlights: PlayerSpotlights;
    } | {
        $case: "playerRings";
        playerRings: PlayerRings;
    } | {
        $case: "playerChats";
        playerChats: PlayerChats;
    } | {
        $case: "playerGhosts";
        playerGhosts: PlayerGhosts;
    } | {
        $case: "playerEntersWhisper";
        playerEntersWhisper: PlayerEntersWhisper;
    } | {
        $case: "playerLeavesWhisper";
        playerLeavesWhisper: PlayerLeavesWhisper;
    } | {
        $case: "playerActivelySpeaks";
        playerActivelySpeaks: PlayerActivelySpeaks;
    } | {
        $case: "playerSetsName";
        playerSetsName: PlayerSetsName;
    } | {
        $case: "playerSetsTextStatus";
        playerSetsTextStatus: PlayerSetsTextStatus;
    } | {
        $case: "playerSetsEmojiStatus";
        playerSetsEmojiStatus: PlayerSetsEmojiStatus;
    } | {
        $case: "playerSetsAffiliation";
        playerSetsAffiliation: PlayerSetsAffiliation;
    } | {
        $case: "playerExits";
        playerExits: PlayerExits;
    } | {
        $case: "playerSetsIsSignedIn";
        playerSetsIsSignedIn: PlayerSetsIsSignedIn;
    } | {
        $case: "spaceOverwrites";
        spaceOverwrites: SpaceOverwrites;
    } | {
        $case: "spaceIsClosed";
        spaceIsClosed: SpaceIsClosed;
    } | {
        $case: "playerEntersPortal";
        playerEntersPortal: PlayerEntersPortal;
    } | {
        $case: "spaceSetsIdMapping";
        spaceSetsIdMapping: SpaceSetsIdMapping;
    } | {
        $case: "playerSetsLastActive";
        playerSetsLastActive: PlayerSetsLastActive;
    } | {
        $case: "playerShootsConfetti";
        playerShootsConfetti: PlayerShootsConfetti;
    } | {
        $case: "playerSetsEventStatus";
        playerSetsEventStatus: PlayerSetsEventStatus;
    } | {
        $case: "playerSetsInConversation";
        playerSetsInConversation: PlayerSetsInConversation;
    } | {
        $case: "playerSetsCurrentArea";
        playerSetsCurrentArea: PlayerSetsCurrentArea;
    } | {
        $case: "playerSetsImagePointer";
        playerSetsImagePointer: PlayerSetsImagePointer;
    } | {
        $case: "cookieFound";
        cookieFound: CookieFound;
    } | {
        $case: "playerEntersWhisperV2";
        playerEntersWhisperV2: PlayerEntersWhisperV2;
    } | {
        $case: "playerSetsGoKartId";
        playerSetsGoKartId: PlayerSetsGoKartId;
    } | {
        $case: "mapSetDimensions";
        mapSetDimensions: MapSetDimensions;
    } | {
        $case: "mapSetBackgroundImagePath";
        mapSetBackgroundImagePath: MapSetBackgroundImagePath;
    } | {
        $case: "mapSetForegroundImagePath";
        mapSetForegroundImagePath: MapSetForegroundImagePath;
    } | {
        $case: "mapSetSpawns";
        mapSetSpawns: MapSetSpawns;
    } | {
        $case: "mapSetPortals";
        mapSetPortals: MapSetPortals;
    } | {
        $case: "mapSetAnnouncer";
        mapSetAnnouncer: MapSetAnnouncer;
    } | {
        $case: "mapSetAssets";
        mapSetAssets: MapSetAssets;
    } | {
        $case: "mapSetName";
        mapSetName: MapSetName;
    } | {
        $case: "mapSetMuteOnEntry";
        mapSetMuteOnEntry: MapSetMuteOnEntry;
    } | {
        $case: "mapSetUseDrawnBG";
        mapSetUseDrawnBG: MapSetUseDrawnBG;
    } | {
        $case: "mapSetWalls";
        mapSetWalls: MapSetWalls;
    } | {
        $case: "mapSetFloors";
        mapSetFloors: MapSetFloors;
    } | {
        $case: "mapSetAreas";
        mapSetAreas: MapSetAreas;
    } | {
        $case: "mapSetSpawn";
        mapSetSpawn: MapSetSpawn;
    } | {
        $case: "playerSetsIsAlone";
        playerSetsIsAlone: PlayerSetsIsAlone;
    } | {
        $case: "playerJoins";
        playerJoins: PlayerJoins;
    } | {
        $case: "mapSetEnabledChats";
        mapSetEnabledChats: MapSetEnabledChats;
    } | {
        $case: "mapSetDescription";
        mapSetDescription: MapSetDescription;
    } | {
        $case: "mapSetDecoration";
        mapSetDecoration: MapSetDecoration;
    } | {
        $case: "mapSetTutorialTasks";
        mapSetTutorialTasks: MapSetTutorialTasks;
    } | {
        $case: "mapSetMiniMapImagePath";
        mapSetMiniMapImagePath: MapSetMiniMapImagePath;
    } | {
        $case: "spacePlaysSound";
        spacePlaysSound: SpacePlaysSound;
    } | {
        $case: "mapSetScript";
        mapSetScript: MapSetScript;
    } | {
        $case: "playerSetsIsMobile";
        playerSetsIsMobile: PlayerSetsIsMobile;
    } | {
        $case: "setScreenPointerServer";
        setScreenPointerServer: SetScreenPointerServer;
    } | {
        $case: "playerSetsEmoteV2";
        playerSetsEmoteV2: PlayerSetsEmoteV2;
    } | {
        $case: "playerSetsFocusModeEndTime";
        playerSetsFocusModeEndTime: PlayerSetsFocusModeEndTime;
    } | {
        $case: "spaceSetsSpaceMembers";
        spaceSetsSpaceMembers: SpaceSetsSpaceMembers;
    } | {
        $case: "spaceSetsSpaceUsers";
        spaceSetsSpaceUsers: SpaceSetsSpaceUsers;
    } | {
        $case: "customEvent";
        customEvent: CustomEvent;
    } | {
        $case: "playerBlocks";
        playerBlocks: PlayerBlocks;
    } | {
        $case: "playerUpdatesFocusModeStatus";
        playerUpdatesFocusModeStatus: PlayerUpdatesFocusModeStatus;
    } | {
        $case: "playerNotifies";
        playerNotifies: PlayerNotifies;
    } | {
        $case: "playerSetsItemString";
        playerSetsItemString: PlayerSetsItemString;
    } | {
        $case: "playerSetsFollowTarget";
        playerSetsFollowTarget: PlayerSetsFollowTarget;
    } | {
        $case: "playerRequestsToLead";
        playerRequestsToLead: PlayerRequestsToLead;
    } | {
        $case: "playerSetsManualVideoSrc";
        playerSetsManualVideoSrc: PlayerSetsManualVideoSrc;
    } | {
        $case: "playerSetsIsNpc";
        playerSetsIsNpc: PlayerSetsIsNpc;
    } | {
        $case: "playerSetsSubtitle";
        playerSetsSubtitle: PlayerSetsSubtitle;
    } | {
        $case: "mapCommitsChanges";
        mapCommitsChanges: MapCommitsChanges;
    } | {
        $case: "mapMoveObject";
        mapMoveObject: MapMoveObject;
    } | {
        $case: "playerEditsChatMessage";
        playerEditsChatMessage: PlayerEditsChatMessage;
    } | {
        $case: "fxShakeObject";
        fxShakeObject: FXShakeObject;
    } | {
        $case: "fxShakeCamera";
        fxShakeCamera: FXShakeCamera;
    } | {
        $case: "playerSendsCommand";
        playerSendsCommand: PlayerSendsCommand;
    } | {
        $case: "spaceRegistersCommand";
        spaceRegistersCommand: SpaceRegistersCommand;
    } | {
        $case: "speakerUpdatesSession";
        speakerUpdatesSession: SpeakerUpdatesSession;
    } | {
        $case: "playerUpdatesInventory";
        playerUpdatesInventory: PlayerUpdatesInventory;
    } | {
        $case: "spaceUpdatesItems";
        spaceUpdatesItems: SpaceUpdatesItems;
    } | {
        $case: "playerSetsVehicleId";
        playerSetsVehicleId: PlayerSetsVehicleId;
    } | {
        $case: "playerSetsSpeedModifier";
        playerSetsSpeedModifier: PlayerSetsSpeedModifier;
    } | {
        $case: "playerHighFives";
        playerHighFives: PlayerHighFives;
    } | {
        $case: "spaceStopsSound";
        spaceStopsSound: SpaceStopsSound;
    } | {
        $case: "hipToBeSquare";
        hipToBeSquare: HipToBeSquare;
    } | {
        $case: "playerCrafts";
        playerCrafts: PlayerCrafts;
    } | {
        $case: "playerTriggersInventoryItem";
        playerTriggersInventoryItem: PlayerTriggersInventoryItem;
    } | {
        $case: "playerSetsAllowScreenPointer";
        playerSetsAllowScreenPointer: PlayerSetsAllowScreenPointer;
    } | {
        $case: "precomputedEnterLocation";
        precomputedEnterLocation: PrecomputedEnterLocation;
    } | {
        $case: "gotRequestMute";
        gotRequestMute: GotRequestMute;
    } | {
        $case: "playerSetsDeskInfo";
        playerSetsDeskInfo: PlayerSetsDeskInfo;
    } | {
        $case: "mapSetNooks";
        mapSetNooks: MapSetNooks;
    } | {
        $case: "dynamicGates";
        dynamicGates: DynamicGates;
    } | {
        $case: "playerWaves";
        playerWaves: PlayerWaves;
    } | {
        $case: "playerSetsPronouns";
        playerSetsPronouns: PlayerSetsPronouns;
    } | {
        $case: "playerSetsTitle";
        playerSetsTitle: PlayerSetsTitle;
    } | {
        $case: "playerSetsTimezone";
        playerSetsTimezone: PlayerSetsTimezone;
    } | {
        $case: "playerSetsDescription";
        playerSetsDescription: PlayerSetsDescription;
    } | {
        $case: "playerSetsPhone";
        playerSetsPhone: PlayerSetsPhone;
    } | {
        $case: "playerSetsPersonalImageUrl";
        playerSetsPersonalImageUrl: PlayerSetsPersonalImageUrl;
    } | {
        $case: "playerSetsProfileImageUrl";
        playerSetsProfileImageUrl: PlayerSetsProfileImageUrl;
    } | {
        $case: "spaceSetsCapacity";
        spaceSetsCapacity: SpaceSetsCapacity;
    } | {
        $case: "spaceOverCapacityDeniesUser";
        spaceOverCapacityDeniesUser: SpaceOverCapacityDeniesUser;
    } | {
        $case: "playerSetsAway";
        playerSetsAway: PlayerSetsAway;
    } | {
        $case: "mapSetCollisionsBits";
        mapSetCollisionsBits: MapSetCollisionsBits;
    } | {
        $case: "playerSetsCity";
        playerSetsCity: PlayerSetsCity;
    } | {
        $case: "playerSetsCountry";
        playerSetsCountry: PlayerSetsCountry;
    } | {
        $case: "playerSetsStartDate";
        playerSetsStartDate: PlayerSetsStartDate;
    } | {
        $case: "playerStartsRecording";
        playerStartsRecording: PlayerStartsRecording;
    } | {
        $case: "accessRequestsUpdated";
        accessRequestsUpdated: AccessRequestsUpdated;
    } | {
        $case: "accessRequestRespondedTo";
        accessRequestRespondedTo: AccessRequestRespondedTo;
    } | {
        $case: "spaceSetsGuestPassStatuses";
        spaceSetsGuestPassStatuses: SpaceSetsGuestPassStatuses;
    } | {
        $case: "playerSetsAvailability";
        playerSetsAvailability: PlayerSetsAvailability;
    } | {
        $case: "subscriptionsUpdated";
        subscriptionsUpdated: SubscriptionsUpdated;
    } | {
        $case: "spaceRolePermissionOverrideUpdated";
        spaceRolePermissionOverrideUpdated: SpaceRolePermissionOverrideUpdated;
    } | {
        $case: "playerSetsLastRaisedHand";
        playerSetsLastRaisedHand: PlayerSetsLastRaisedHand;
    } | {
        $case: "playerSetsCurrentlyEquippedWearables";
        playerSetsCurrentlyEquippedWearables: PlayerSetsCurrentlyEquippedWearables;
    } | {
        $case: "playerSetsDisplayEmail";
        playerSetsDisplayEmail: PlayerSetsDisplayEmail;
    } | {
        $case: "mapDeleteObjectByKey";
        mapDeleteObjectByKey: MapDeleteObjectByKey;
    } | {
        $case: "mapSetObjectsV2";
        mapSetObjectsV2: MapSetObjectsV2;
    } | {
        $case: "playerInteractsWithObject";
        playerInteractsWithObject: PlayerInteractsWithObject;
    } | {
        $case: "playerTriggersObject";
        playerTriggersObject: PlayerTriggersObject;
    } | {
        $case: "chimeSetsUserInfo";
        chimeSetsUserInfo: ChimeSetsUserInfo;
    };
}
export interface SubscriptionsUpdated {
    subscriptions: string[];
}
export interface ServerHeartbeat {
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
export interface PlayerJoins {
    encId: number;
}
export interface GotRequestMute {
    muterId: string;
    video: boolean;
}
export interface PlayerMoves {
    encId: number;
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
    encId: number;
    spotlightedBy: number;
    spotlighted: number;
}
export interface PlayerRings {
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
export interface Timestamp {
    seconds: number;
    nanoseconds: number;
}
export interface PlayerInteractsWithObject {
    encId: number;
    mapId: string;
    key: string;
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
export interface SpaceOverwrites {
    spaceData: string;
}
export interface DynamicGate {
    exposure: number;
    spaces: string[];
    refreshOnChange?: boolean | undefined;
    minimumBuildTimestamp?: number | undefined;
}
export interface DynamicGates {
    livekitEnabled: DynamicGate | undefined;
    livekitSelfhostEnabled?: DynamicGate | undefined;
    agoraEnabled?: DynamicGate | undefined;
    chimeEnabled?: DynamicGate | undefined;
    gatherEnabled?: DynamicGate | undefined;
}
export interface SpaceSetsSpaceMembers {
    members: {
        [key: string]: SpaceMemberInfo;
    };
}
export interface SpaceSetsSpaceMembers_MembersEntry {
    key: string;
    value: SpaceMemberInfo | undefined;
}
export interface WireSpaceUser {
    role: string;
}
export interface SpaceSetsSpaceUsers {
    spaceUsers: {
        [key: string]: WireSpaceUser;
    };
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
export interface SpaceSetsIdMapping {
    uid: string;
    encId: number;
}
export interface PlayerShootsConfetti {
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
    inputs: {
        [key: string]: number;
    };
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
    targetYOffset?: number | undefined;
    duration: number;
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
    durationMs?: number | undefined;
    mapId?: string | undefined;
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
    items: {
        [key: string]: InventoryItem;
    };
    order: {
        [key: string]: string;
    };
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
    items: {
        [key: string]: SpaceItem;
    };
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
    actions: ClientServerAction[];
}
export interface ClientServerAction {
    txnId?: number | undefined;
    action?: {
        $case: "clientHeartbeat";
        clientHeartbeat: ClientHeartbeat;
    } | {
        $case: "clientBackupHeartbeat";
        clientBackupHeartbeat: ClientBackupHeartbeat;
    } | {
        $case: "updateSubscriptions";
        updateSubscriptions: UpdateSubscriptions;
    } | {
        $case: "move";
        move: Move;
    } | {
        $case: "setAffiliation";
        setAffiliation: SetAffiliation;
    } | {
        $case: "setStatus";
        setStatus: SetStatus;
    } | {
        $case: "spotlight";
        spotlight: Spotlight;
    } | {
        $case: "ring";
        ring: Ring;
    } | {
        $case: "ban";
        ban: Ban;
    } | {
        $case: "kick";
        kick: Kick;
    } | {
        $case: "setImpassable";
        setImpassable: SetImpassable;
    } | {
        $case: "chat";
        chat: Chat;
    } | {
        $case: "interact";
        interact: Deprecated;
    } | {
        $case: "enterWhisper";
        enterWhisper: EnterWhisper;
    } | {
        $case: "leaveWhisper";
        leaveWhisper: LeaveWhisper;
    } | {
        $case: "setEmojiStatus";
        setEmojiStatus: SetEmojiStatus;
    } | {
        $case: "activelySpeaking";
        activelySpeaking: ActivelySpeaking;
    } | {
        $case: "setName";
        setName: SetName;
    } | {
        $case: "setTextStatus";
        setTextStatus: SetTextStatus;
    } | {
        $case: "teleport";
        teleport: Teleport;
    } | {
        $case: "exit";
        exit: Exit;
    } | {
        $case: "enter";
        enter: Enter;
    } | {
        $case: "setWorkCondition";
        setWorkCondition: Deprecated;
    } | {
        $case: "respawn";
        respawn: Respawn;
    } | {
        $case: "spawn";
        spawn: Spawn;
    } | {
        $case: "ghost";
        ghost: Ghost;
    } | {
        $case: "init";
        init: Init;
    } | {
        $case: "setOutfitString";
        setOutfitString: Deprecated;
    } | {
        $case: "shootConfetti";
        shootConfetti: ShootConfetti;
    } | {
        $case: "setEventStatus";
        setEventStatus: SetEventStatus;
    } | {
        $case: "setInConversation";
        setInConversation: SetInConversation;
    } | {
        $case: "setCurrentDesk";
        setCurrentDesk: Deprecated;
    } | {
        $case: "setCurrentArea";
        setCurrentArea: SetCurrentArea;
    } | {
        $case: "setImagePointer";
        setImagePointer: SetImagePointer;
    } | {
        $case: "setGoKartId";
        setGoKartId: Deprecated;
    } | {
        $case: "mapSetDimensions";
        mapSetDimensions: MapSetDimensions;
    } | {
        $case: "mapSetCollisions";
        mapSetCollisions: MapSetCollisions;
    } | {
        $case: "mapSetBackgroundImagePath";
        mapSetBackgroundImagePath: MapSetBackgroundImagePath;
    } | {
        $case: "mapSetForegroundImagePath";
        mapSetForegroundImagePath: MapSetForegroundImagePath;
    } | {
        $case: "mapSetSprites";
        mapSetSprites: Deprecated;
    } | {
        $case: "mapSetSpawns";
        mapSetSpawns: MapSetSpawns;
    } | {
        $case: "mapSetSpaces";
        mapSetSpaces: Deprecated;
    } | {
        $case: "mapSetPortals";
        mapSetPortals: MapSetPortals;
    } | {
        $case: "mapSetAnnouncer";
        mapSetAnnouncer: MapSetAnnouncer;
    } | {
        $case: "mapSetAssets";
        mapSetAssets: MapSetAssets;
    } | {
        $case: "mapSetObjects";
        mapSetObjects: Deprecated;
    } | {
        $case: "mapSetName";
        mapSetName: MapSetName;
    } | {
        $case: "mapSetMuteOnEntry";
        mapSetMuteOnEntry: MapSetMuteOnEntry;
    } | {
        $case: "mapSetUseDrawnBG";
        mapSetUseDrawnBG: MapSetUseDrawnBG;
    } | {
        $case: "mapSetWalls";
        mapSetWalls: MapSetWalls;
    } | {
        $case: "mapSetFloors";
        mapSetFloors: MapSetFloors;
    } | {
        $case: "mapSetAreas";
        mapSetAreas: MapSetAreas;
    } | {
        $case: "mapAddObject";
        mapAddObject: MapAddObject;
    } | {
        $case: "mapDeleteObject";
        mapDeleteObject: Deprecated;
    } | {
        $case: "mapSetSpawn";
        mapSetSpawn: MapSetSpawn;
    } | {
        $case: "setIsAlone";
        setIsAlone: SetIsAlone;
    } | {
        $case: "mapSetMiniMapImagePath";
        mapSetMiniMapImagePath: MapSetMiniMapImagePath;
    } | {
        $case: "mapSetEnabledChats";
        mapSetEnabledChats: MapSetEnabledChats;
    } | {
        $case: "mapSetDescription";
        mapSetDescription: MapSetDescription;
    } | {
        $case: "mapSetDecoration";
        mapSetDecoration: MapSetDecoration;
    } | {
        $case: "mapSetTutorialTasks";
        mapSetTutorialTasks: MapSetTutorialTasks;
    } | {
        $case: "playSound";
        playSound: PlaySound;
    } | {
        $case: "mapSetScript";
        mapSetScript: MapSetScript;
    } | {
        $case: "setIsMobile";
        setIsMobile: SetIsMobile;
    } | {
        $case: "setScreenPointer";
        setScreenPointer: SetScreenPointer;
    } | {
        $case: "setEmoteV2";
        setEmoteV2: SetEmoteV2;
    } | {
        $case: "setFocusModeEndTime";
        setFocusModeEndTime: SetFocusModeEndTime;
    } | {
        $case: "mapDeleteObjectById";
        mapDeleteObjectById: MapDeleteObjectById;
    } | {
        $case: "customAction";
        customAction: CustomAction;
    } | {
        $case: "block";
        block: Block;
    } | {
        $case: "setItemString";
        setItemString: SetItemString;
    } | {
        $case: "triggerItem";
        triggerItem: Deprecated;
    } | {
        $case: "notify";
        notify: Notify;
    } | {
        $case: "setFollowTarget";
        setFollowTarget: SetFollowTarget;
    } | {
        $case: "requestToLead";
        requestToLead: RequestToLead;
    } | {
        $case: "enterPortal";
        enterPortal: EnterPortal;
    } | {
        $case: "setManualVideoSrc";
        setManualVideoSrc: SetManualVideoSrc;
    } | {
        $case: "setSubtitle";
        setSubtitle: SetSubtitle;
    } | {
        $case: "playerUpdatesSession";
        playerUpdatesSession: Deprecated;
    } | {
        $case: "mapMoveObject";
        mapMoveObject: MapMoveObject;
    } | {
        $case: "chatMessageUpdated";
        chatMessageUpdated: ChatMessageUpdated;
    } | {
        $case: "fxShakeObject";
        fxShakeObject: FXShakeObject;
    } | {
        $case: "fxShakeCamera";
        fxShakeCamera: FXShakeCamera;
    } | {
        $case: "registerCommand";
        registerCommand: RegisterCommand;
    } | {
        $case: "sendCommand";
        sendCommand: SendCommand;
    } | {
        $case: "speakerUpdatesSession";
        speakerUpdatesSession: SpeakerUpdatesSession;
    } | {
        $case: "addInventoryItem";
        addInventoryItem: AddInventoryItem;
    } | {
        $case: "removeInventoryItem";
        removeInventoryItem: RemoveInventoryItem;
    } | {
        $case: "setVehicleId";
        setVehicleId: SetVehicleId;
    } | {
        $case: "setSpeedModifier";
        setSpeedModifier: SetSpeedModifier;
    } | {
        $case: "highFive";
        highFive: HighFive;
    } | {
        $case: "updateSpaceItems";
        updateSpaceItems: SpaceUpdatesItems;
    } | {
        $case: "stopSound";
        stopSound: StopSound;
    } | {
        $case: "hipToBeSquare";
        hipToBeSquare: HipToBeSquare;
    } | {
        $case: "craft";
        craft: Craft;
    } | {
        $case: "triggerInventoryItem";
        triggerInventoryItem: TriggerInventoryItem;
    } | {
        $case: "setAllowScreenPointer";
        setAllowScreenPointer: SetAllowScreenPointer;
    } | {
        $case: "precomputeEnter";
        precomputeEnter: PrecomputeEnter;
    } | {
        $case: "requestMute";
        requestMute: RequestMute;
    } | {
        $case: "setDeskInfo";
        setDeskInfo: SetDeskInfo;
    } | {
        $case: "mapSetNooks";
        mapSetNooks: MapSetNooks;
    } | {
        $case: "requestToJoinNook";
        requestToJoinNook: RequestToJoinNook;
    } | {
        $case: "updateNookPermission";
        updateNookPermission: UpdateNookPermission;
    } | {
        $case: "wave";
        wave: Wave;
    } | {
        $case: "setPronouns";
        setPronouns: SetPronouns;
    } | {
        $case: "setTitle";
        setTitle: SetTitle;
    } | {
        $case: "setTimezone";
        setTimezone: SetTimezone;
    } | {
        $case: "setPhone";
        setPhone: SetPhone;
    } | {
        $case: "setDescription";
        setDescription: SetDescription;
    } | {
        $case: "setProfileImageUrl";
        setProfileImageUrl: SetProfileImageUrl;
    } | {
        $case: "setPersonalImageUrl";
        setPersonalImageUrl: SetPersonalImageUrl;
    } | {
        $case: "setAway";
        setAway: SetAway;
    } | {
        $case: "setCity";
        setCity: SetCity;
    } | {
        $case: "setCountry";
        setCountry: SetCountry;
    } | {
        $case: "setStartDate";
        setStartDate: SetStartDate;
    } | {
        $case: "startRecording";
        startRecording: StartRecording;
    } | {
        $case: "requestAccessViaCheckIn";
        requestAccessViaCheckIn: RequestAccessViaCheckIn;
    } | {
        $case: "respondToAccessRequest";
        respondToAccessRequest: RespondToAccessRequest;
    } | {
        $case: "setAvailability";
        setAvailability: SetAvailability;
    } | {
        $case: "respawnAtDesk";
        respawnAtDesk: RespawnAtDesk;
    } | {
        $case: "setDeskFromNextAvailableDesk";
        setDeskFromNextAvailableDesk: SetDeskFromNextAvailableDesk;
    } | {
        $case: "setSpaceRolePermissionOverride";
        setSpaceRolePermissionOverride: SetSpaceRolePermissionOverride;
    } | {
        $case: "setCurrentlyEquippedWearables";
        setCurrentlyEquippedWearables: SetCurrentlyEquippedWearables;
    } | {
        $case: "setDisplayEmail";
        setDisplayEmail: SetDisplayEmail;
    } | {
        $case: "mapDeleteObjectByKey";
        mapDeleteObjectByKey: MapDeleteObjectByKey;
    } | {
        $case: "mapUpdateObjects";
        mapUpdateObjects: MapUpdateObjects;
    } | {
        $case: "interactWithObject";
        interactWithObject: InteractWithObject;
    } | {
        $case: "triggerObject";
        triggerObject: TriggerObject;
    } | {
        $case: "joinChimeMeeting";
        joinChimeMeeting: JoinChimeMeeting;
    };
}
export interface ClientHeartbeat {
}
export interface ClientBackupHeartbeat {
}
export interface UpdateSubscriptions {
    subscriptions: {
        [key: string]: boolean;
    };
    mapUpdateIds: {
        [key: string]: number;
    };
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
    auth?: {
        $case: "token";
        token: string;
    } | {
        $case: "apiKey";
        apiKey: string;
    };
}
export interface MapAddObject {
    mapId: string;
    object: WireObject | undefined;
}
export interface MapUpdateObjects {
    mapId: string;
    objects: {
        [key: string]: WireObject;
    };
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
    inputs: {
        [key: string]: number;
    };
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
export declare enum RespondToAccessRequest_LocationTypeEnum {
    MyLocation = 0,
    DefaultSpawn = 1
}
export interface SetSpaceRolePermissionOverride {
    role: string;
    permission: string;
    enabled: boolean;
}
export interface JoinChimeMeeting {
    mediaRegion?: string | undefined;
}
export declare const Deprecated: {
    encode(_: Deprecated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Deprecated;
};
export declare const SpriteDirectionEnum: {
    encode(_: SpriteDirectionEnum, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpriteDirectionEnum;
};
export declare const MoveDirectionEnum: {
    encode(_: MoveDirectionEnum, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MoveDirectionEnum;
};
export declare const InteractionEnum: {
    encode(_: InteractionEnum, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InteractionEnum;
};
export declare const PlayerInitInfo: {
    encode(message: PlayerInitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerInitInfo;
};
export declare const DBOutfit: {
    encode(message: DBOutfit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DBOutfit;
};
export declare const WireObjectSpritesheetFraming: {
    encode(message: WireObjectSpritesheetFraming, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WireObjectSpritesheetFraming;
};
export declare const WireObjectSpriteAnimConfig: {
    encode(message: WireObjectSpriteAnimConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WireObjectSpriteAnimConfig;
};
export declare const WireObjectSpritesheet: {
    encode(message: WireObjectSpritesheet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WireObjectSpritesheet;
};
export declare const WireObjectSpritesheet_AnimationsEntry: {
    encode(message: WireObjectSpritesheet_AnimationsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WireObjectSpritesheet_AnimationsEntry;
};
export declare const WireObject: {
    encode(message: WireObject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WireObject;
};
export declare const SpaceMemberInfo: {
    encode(message: SpaceMemberInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceMemberInfo;
};
export declare const SpaceMemberInfo_RolesEntry: {
    encode(message: SpaceMemberInfo_RolesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceMemberInfo_RolesEntry;
};
export declare const BackedUpDeskObject: {
    encode(message: BackedUpDeskObject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BackedUpDeskObject;
};
export declare const DeskObjects: {
    encode(message: DeskObjects, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeskObjects;
};
export declare const DeskObjects_ObjectsEntry: {
    encode(message: DeskObjects_ObjectsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeskObjects_ObjectsEntry;
};
export declare const DeskInfoV2: {
    encode(message: DeskInfoV2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeskInfoV2;
};
export declare const MapAndDesk: {
    encode(message: MapAndDesk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapAndDesk;
};
export declare const Sound: {
    encode(message: Sound, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Sound;
};
export declare const ObjectTime: {
    encode(message: ObjectTime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ObjectTime;
};
export declare const Space: {
    encode(message: Space, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Space;
};
export declare const NookCoords: {
    encode(message: NookCoords, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NookCoords;
};
export declare const AllowedUsers: {
    encode(message: AllowedUsers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedUsers;
};
export declare const RequestUser: {
    encode(message: RequestUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestUser;
};
export declare const RequestedUsers: {
    encode(message: RequestedUsers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestedUsers;
};
export declare const RequestedUsers_UsersEntry: {
    encode(message: RequestedUsers_UsersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestedUsers_UsersEntry;
};
export declare const RecordingInfo: {
    encode(message: RecordingInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecordingInfo;
};
export declare const NookDiff: {
    encode(message: NookDiff, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NookDiff;
};
export declare const WirePoint: {
    encode(message: WirePoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WirePoint;
};
export declare const SpawnPoint: {
    encode(message: SpawnPoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpawnPoint;
};
export declare const Portal: {
    encode(message: Portal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Portal;
};
export declare const Announcer: {
    encode(message: Announcer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Announcer;
};
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Asset;
};
export declare const AreaPosition: {
    encode(message: AreaPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AreaPosition;
};
export declare const WireArea: {
    encode(message: WireArea, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WireArea;
};
export declare const DBDesk: {
    encode(message: DBDesk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DBDesk;
};
export declare const MapSetDimensions: {
    encode(message: MapSetDimensions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetDimensions;
};
export declare const MapSetCollisions: {
    encode(message: MapSetCollisions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetCollisions;
};
export declare const MapSetCollisionsBits: {
    encode(message: MapSetCollisionsBits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetCollisionsBits;
};
export declare const MapSetBackgroundImagePath: {
    encode(message: MapSetBackgroundImagePath, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetBackgroundImagePath;
};
export declare const MapSetForegroundImagePath: {
    encode(message: MapSetForegroundImagePath, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetForegroundImagePath;
};
export declare const MapSetNooks: {
    encode(message: MapSetNooks, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetNooks;
};
export declare const MapSetNooks_NooksEntry: {
    encode(message: MapSetNooks_NooksEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetNooks_NooksEntry;
};
export declare const MapSetSpawn: {
    encode(message: MapSetSpawn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetSpawn;
};
export declare const MapSetSpawns: {
    encode(message: MapSetSpawns, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetSpawns;
};
export declare const MapSetPortals: {
    encode(message: MapSetPortals, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetPortals;
};
export declare const MapSetAnnouncer: {
    encode(message: MapSetAnnouncer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetAnnouncer;
};
export declare const MapSetAssets: {
    encode(message: MapSetAssets, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetAssets;
};
export declare const MapSetObjectsV2: {
    encode(message: MapSetObjectsV2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetObjectsV2;
};
export declare const MapSetObjectsV2_ObjectsEntry: {
    encode(message: MapSetObjectsV2_ObjectsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetObjectsV2_ObjectsEntry;
};
export declare const MapSetName: {
    encode(message: MapSetName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetName;
};
export declare const MapSetMuteOnEntry: {
    encode(message: MapSetMuteOnEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetMuteOnEntry;
};
export declare const MapSetUseDrawnBG: {
    encode(message: MapSetUseDrawnBG, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetUseDrawnBG;
};
export declare const MapSetWalls: {
    encode(message: MapSetWalls, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetWalls;
};
export declare const MapSetWalls_WallsEntry: {
    encode(message: MapSetWalls_WallsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetWalls_WallsEntry;
};
export declare const MapSetFloors: {
    encode(message: MapSetFloors, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetFloors;
};
export declare const MapSetFloors_FloorsEntry: {
    encode(message: MapSetFloors_FloorsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetFloors_FloorsEntry;
};
export declare const MapSetAreas: {
    encode(message: MapSetAreas, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetAreas;
};
export declare const MapSetAreas_AreasEntry: {
    encode(message: MapSetAreas_AreasEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetAreas_AreasEntry;
};
export declare const MapDeleteObjectByKey: {
    encode(message: MapDeleteObjectByKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapDeleteObjectByKey;
};
export declare const MapDeleteObjectById: {
    encode(message: MapDeleteObjectById, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapDeleteObjectById;
};
export declare const MapSetMiniMapImagePath: {
    encode(message: MapSetMiniMapImagePath, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetMiniMapImagePath;
};
export declare const MapSetEnabledChats: {
    encode(message: MapSetEnabledChats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetEnabledChats;
};
export declare const MapSetDescription: {
    encode(message: MapSetDescription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetDescription;
};
export declare const MapSetDecoration: {
    encode(message: MapSetDecoration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetDecoration;
};
export declare const MapSetTutorialTasks: {
    encode(message: MapSetTutorialTasks, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetTutorialTasks;
};
export declare const WireTutorialTasks: {
    encode(message: WireTutorialTasks, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WireTutorialTasks;
};
export declare const TutorialTaskMapArea: {
    encode(message: TutorialTaskMapArea, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TutorialTaskMapArea;
};
export declare const MapSetScript: {
    encode(message: MapSetScript, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapSetScript;
};
export declare const Inventory: {
    encode(message: Inventory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Inventory;
};
export declare const Inventory_ItemsEntry: {
    encode(message: Inventory_ItemsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Inventory_ItemsEntry;
};
export declare const Inventory_OrderEntry: {
    encode(message: Inventory_OrderEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Inventory_OrderEntry;
};
export declare const InventoryItem: {
    encode(message: InventoryItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InventoryItem;
};
export declare const SpaceItem: {
    encode(message: SpaceItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceItem;
};
export declare const SpaceItem_MetaEntry: {
    encode(message: SpaceItem_MetaEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceItem_MetaEntry;
};
export declare const SpaceItem_AbilitiesEntry: {
    encode(message: SpaceItem_AbilitiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceItem_AbilitiesEntry;
};
export declare const ItemAbility: {
    encode(message: ItemAbility, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ItemAbility;
};
export declare const MapLocation: {
    encode(message: MapLocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapLocation;
};
export declare const ServerClientBatch: {
    encode(message: ServerClientBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServerClientBatch;
};
export declare const ServerClientEvent: {
    encode(message: ServerClientEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServerClientEvent;
};
export declare const SubscriptionsUpdated: {
    encode(message: SubscriptionsUpdated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscriptionsUpdated;
};
export declare const ServerHeartbeat: {
    encode(message: ServerHeartbeat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServerHeartbeat;
};
export declare const Info: {
    encode(message: Info, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Info;
};
export declare const Warn: {
    encode(message: Warn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Warn;
};
export declare const ErrorEvent: {
    encode(message: ErrorEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ErrorEvent;
};
export declare const Ready: {
    encode(message: Ready, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Ready;
};
export declare const TransactionStatus: {
    encode(message: TransactionStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionStatus;
};
export declare const PlayerJoins: {
    encode(message: PlayerJoins, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerJoins;
};
export declare const GotRequestMute: {
    encode(message: GotRequestMute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GotRequestMute;
};
export declare const PlayerMoves: {
    encode(message: PlayerMoves, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerMoves;
};
export declare const PlayerSetsStatus: {
    encode(message: PlayerSetsStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsStatus;
};
export declare const PlayerSetsAvailability: {
    encode(message: PlayerSetsAvailability, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsAvailability;
};
export declare const PlayerSpotlights: {
    encode(message: PlayerSpotlights, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSpotlights;
};
export declare const PlayerRings: {
    encode(message: PlayerRings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerRings;
};
export declare const PlayerSetsImagePointer: {
    encode(message: PlayerSetsImagePointer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsImagePointer;
};
export declare const SetScreenPointerServer: {
    encode(message: SetScreenPointerServer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetScreenPointerServer;
};
export declare const PlayerChats: {
    encode(message: PlayerChats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerChats;
};
export declare const PlayerWaves: {
    encode(message: PlayerWaves, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerWaves;
};
export declare const Timestamp: {
    encode(message: Timestamp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Timestamp;
};
export declare const PlayerInteractsWithObject: {
    encode(message: PlayerInteractsWithObject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerInteractsWithObject;
};
export declare const PlayerGhosts: {
    encode(message: PlayerGhosts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerGhosts;
};
export declare const PlayerEntersWhisper: {
    encode(message: PlayerEntersWhisper, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerEntersWhisper;
};
export declare const PlayerEntersWhisperV2: {
    encode(message: PlayerEntersWhisperV2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerEntersWhisperV2;
};
export declare const PlayerLeavesWhisper: {
    encode(message: PlayerLeavesWhisper, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerLeavesWhisper;
};
export declare const PlayerActivelySpeaks: {
    encode(message: PlayerActivelySpeaks, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerActivelySpeaks;
};
export declare const PlayerSetsEmoteV2: {
    encode(message: PlayerSetsEmoteV2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsEmoteV2;
};
export declare const PlayerSetsLastRaisedHand: {
    encode(message: PlayerSetsLastRaisedHand, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsLastRaisedHand;
};
export declare const PlayerSetsLastActive: {
    encode(message: PlayerSetsLastActive, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsLastActive;
};
export declare const PlayerSetsName: {
    encode(message: PlayerSetsName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsName;
};
export declare const PlayerSetsTextStatus: {
    encode(message: PlayerSetsTextStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsTextStatus;
};
export declare const PlayerSetsPronouns: {
    encode(message: PlayerSetsPronouns, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsPronouns;
};
export declare const PlayerSetsTitle: {
    encode(message: PlayerSetsTitle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsTitle;
};
export declare const PlayerSetsCity: {
    encode(message: PlayerSetsCity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsCity;
};
export declare const PlayerSetsCountry: {
    encode(message: PlayerSetsCountry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsCountry;
};
export declare const PlayerSetsStartDate: {
    encode(message: PlayerSetsStartDate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsStartDate;
};
export declare const PlayerSetsTimezone: {
    encode(message: PlayerSetsTimezone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsTimezone;
};
export declare const PlayerSetsPhone: {
    encode(message: PlayerSetsPhone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsPhone;
};
export declare const PlayerSetsDisplayEmail: {
    encode(message: PlayerSetsDisplayEmail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsDisplayEmail;
};
export declare const PlayerSetsDescription: {
    encode(message: PlayerSetsDescription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsDescription;
};
export declare const PlayerSetsProfileImageUrl: {
    encode(message: PlayerSetsProfileImageUrl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsProfileImageUrl;
};
export declare const PlayerSetsPersonalImageUrl: {
    encode(message: PlayerSetsPersonalImageUrl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsPersonalImageUrl;
};
export declare const PlayerSetsIsMobile: {
    encode(message: PlayerSetsIsMobile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsIsMobile;
};
export declare const PlayerSetsEmojiStatus: {
    encode(message: PlayerSetsEmojiStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsEmojiStatus;
};
export declare const PlayerSetsAffiliation: {
    encode(message: PlayerSetsAffiliation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsAffiliation;
};
export declare const PlayerExits: {
    encode(message: PlayerExits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerExits;
};
export declare const PlayerSetsCurrentlyEquippedWearables: {
    encode(message: PlayerSetsCurrentlyEquippedWearables, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsCurrentlyEquippedWearables;
};
export declare const PlayerSetsIsSignedIn: {
    encode(message: PlayerSetsIsSignedIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsIsSignedIn;
};
export declare const SpaceOverwrites: {
    encode(message: SpaceOverwrites, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceOverwrites;
};
export declare const DynamicGate: {
    encode(message: DynamicGate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DynamicGate;
};
export declare const DynamicGates: {
    encode(message: DynamicGates, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DynamicGates;
};
export declare const SpaceSetsSpaceMembers: {
    encode(message: SpaceSetsSpaceMembers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceSetsSpaceMembers;
};
export declare const SpaceSetsSpaceMembers_MembersEntry: {
    encode(message: SpaceSetsSpaceMembers_MembersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceSetsSpaceMembers_MembersEntry;
};
export declare const WireSpaceUser: {
    encode(message: WireSpaceUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WireSpaceUser;
};
export declare const SpaceSetsSpaceUsers: {
    encode(message: SpaceSetsSpaceUsers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceSetsSpaceUsers;
};
export declare const SpaceSetsSpaceUsers_SpaceUsersEntry: {
    encode(message: SpaceSetsSpaceUsers_SpaceUsersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceSetsSpaceUsers_SpaceUsersEntry;
};
export declare const SpaceIsClosed: {
    encode(_: SpaceIsClosed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceIsClosed;
};
export declare const PlayerEntersPortal: {
    encode(message: PlayerEntersPortal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerEntersPortal;
};
export declare const CookieFound: {
    encode(message: CookieFound, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CookieFound;
};
export declare const SpaceSetsIdMapping: {
    encode(message: SpaceSetsIdMapping, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceSetsIdMapping;
};
export declare const PlayerShootsConfetti: {
    encode(message: PlayerShootsConfetti, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerShootsConfetti;
};
export declare const PlayerSetsEventStatus: {
    encode(message: PlayerSetsEventStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsEventStatus;
};
export declare const PlayerSetsInConversation: {
    encode(message: PlayerSetsInConversation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsInConversation;
};
export declare const PlayerSetsCurrentArea: {
    encode(message: PlayerSetsCurrentArea, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsCurrentArea;
};
export declare const PlayerSetsGoKartId: {
    encode(message: PlayerSetsGoKartId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsGoKartId;
};
export declare const PlayerSetsVehicleId: {
    encode(message: PlayerSetsVehicleId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsVehicleId;
};
export declare const PlayerSetsSpeedModifier: {
    encode(message: PlayerSetsSpeedModifier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsSpeedModifier;
};
export declare const PlayerSetsIsAlone: {
    encode(message: PlayerSetsIsAlone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsIsAlone;
};
export declare const SpacePlaysSound: {
    encode(message: SpacePlaysSound, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpacePlaysSound;
};
export declare const SpaceStopsSound: {
    encode(message: SpaceStopsSound, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceStopsSound;
};
export declare const PlayerSetsFocusModeEndTime: {
    encode(message: PlayerSetsFocusModeEndTime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsFocusModeEndTime;
};
export declare const PlayerBlocks: {
    encode(message: PlayerBlocks, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerBlocks;
};
export declare const CustomEvent: {
    encode(message: CustomEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CustomEvent;
};
export declare const PlayerUpdatesFocusModeStatus: {
    encode(message: PlayerUpdatesFocusModeStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerUpdatesFocusModeStatus;
};
export declare const PlayerSetsItemString: {
    encode(message: PlayerSetsItemString, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsItemString;
};
export declare const PlayerTriggersObject: {
    encode(message: PlayerTriggersObject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerTriggersObject;
};
export declare const PlayerNotifies: {
    encode(message: PlayerNotifies, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerNotifies;
};
export declare const PlayerSetsFollowTarget: {
    encode(message: PlayerSetsFollowTarget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsFollowTarget;
};
export declare const PlayerRequestsToLead: {
    encode(message: PlayerRequestsToLead, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerRequestsToLead;
};
export declare const PlayerSetsManualVideoSrc: {
    encode(message: PlayerSetsManualVideoSrc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsManualVideoSrc;
};
export declare const PlayerSetsIsNpc: {
    encode(message: PlayerSetsIsNpc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsIsNpc;
};
export declare const PlayerSetsSubtitle: {
    encode(message: PlayerSetsSubtitle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsSubtitle;
};
export declare const PlayerCrafts: {
    encode(message: PlayerCrafts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerCrafts;
};
export declare const PlayerCrafts_InputsEntry: {
    encode(message: PlayerCrafts_InputsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerCrafts_InputsEntry;
};
export declare const MapMoveObject: {
    encode(message: MapMoveObject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapMoveObject;
};
export declare const PlayerEditsChatMessage: {
    encode(message: PlayerEditsChatMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerEditsChatMessage;
};
export declare const FXShakeObject: {
    encode(message: FXShakeObject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FXShakeObject;
};
export declare const FXShakeCamera: {
    encode(message: FXShakeCamera, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FXShakeCamera;
};
export declare const PlayerHighFives: {
    encode(message: PlayerHighFives, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerHighFives;
};
export declare const PlayerSendsCommand: {
    encode(message: PlayerSendsCommand, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSendsCommand;
};
export declare const SpaceRegistersCommand: {
    encode(message: SpaceRegistersCommand, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceRegistersCommand;
};
export declare const PlayerUpdatesInventory: {
    encode(message: PlayerUpdatesInventory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerUpdatesInventory;
};
export declare const PlayerUpdatesInventory_ItemsEntry: {
    encode(message: PlayerUpdatesInventory_ItemsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerUpdatesInventory_ItemsEntry;
};
export declare const PlayerUpdatesInventory_OrderEntry: {
    encode(message: PlayerUpdatesInventory_OrderEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerUpdatesInventory_OrderEntry;
};
export declare const SpaceUpdatesItems: {
    encode(message: SpaceUpdatesItems, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceUpdatesItems;
};
export declare const SpaceUpdatesItems_ItemsEntry: {
    encode(message: SpaceUpdatesItems_ItemsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceUpdatesItems_ItemsEntry;
};
export declare const PlayerTriggersInventoryItem: {
    encode(message: PlayerTriggersInventoryItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerTriggersInventoryItem;
};
export declare const PlayerSetsAllowScreenPointer: {
    encode(message: PlayerSetsAllowScreenPointer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsAllowScreenPointer;
};
export declare const PrecomputedEnterLocation: {
    encode(message: PrecomputedEnterLocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrecomputedEnterLocation;
};
export declare const PlayerSetsDeskInfo: {
    encode(message: PlayerSetsDeskInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsDeskInfo;
};
export declare const SpaceSetsCapacity: {
    encode(message: SpaceSetsCapacity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceSetsCapacity;
};
export declare const SpaceOverCapacityDeniesUser: {
    encode(message: SpaceOverCapacityDeniesUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceOverCapacityDeniesUser;
};
export declare const PlayerSetsAway: {
    encode(message: PlayerSetsAway, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetsAway;
};
export declare const PlayerStartsRecording: {
    encode(message: PlayerStartsRecording, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerStartsRecording;
};
export declare const AccessRequest: {
    encode(message: AccessRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessRequest;
};
export declare const AccessRequestsUpdated: {
    encode(message: AccessRequestsUpdated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessRequestsUpdated;
};
export declare const AccessRequestRespondedTo: {
    encode(message: AccessRequestRespondedTo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessRequestRespondedTo;
};
export declare const PlayerGuestPassStatus: {
    encode(message: PlayerGuestPassStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayerGuestPassStatus;
};
export declare const SpaceSetsGuestPassStatuses: {
    encode(message: SpaceSetsGuestPassStatuses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceSetsGuestPassStatuses;
};
export declare const SetDeskFromNextAvailableDesk: {
    encode(message: SetDeskFromNextAvailableDesk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDeskFromNextAvailableDesk;
};
export declare const SpaceRolePermissionOverrideUpdated: {
    encode(message: SpaceRolePermissionOverrideUpdated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpaceRolePermissionOverrideUpdated;
};
export declare const ChimeSetsUserInfo: {
    encode(message: ChimeSetsUserInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChimeSetsUserInfo;
};
export declare const ClientServerBatch: {
    encode(message: ClientServerBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientServerBatch;
};
export declare const ClientServerAction: {
    encode(message: ClientServerAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientServerAction;
};
export declare const ClientHeartbeat: {
    encode(_: ClientHeartbeat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientHeartbeat;
};
export declare const ClientBackupHeartbeat: {
    encode(_: ClientBackupHeartbeat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientBackupHeartbeat;
};
export declare const UpdateSubscriptions: {
    encode(message: UpdateSubscriptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSubscriptions;
};
export declare const UpdateSubscriptions_SubscriptionsEntry: {
    encode(message: UpdateSubscriptions_SubscriptionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSubscriptions_SubscriptionsEntry;
};
export declare const UpdateSubscriptions_MapUpdateIdsEntry: {
    encode(message: UpdateSubscriptions_MapUpdateIdsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSubscriptions_MapUpdateIdsEntry;
};
export declare const Move: {
    encode(message: Move, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Move;
};
export declare const RequestMute: {
    encode(message: RequestMute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestMute;
};
export declare const SetAffiliation: {
    encode(message: SetAffiliation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetAffiliation;
};
export declare const SetStatus: {
    encode(message: SetStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetStatus;
};
export declare const SetAvailability: {
    encode(message: SetAvailability, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetAvailability;
};
export declare const SetCurrentlyEquippedWearables: {
    encode(message: SetCurrentlyEquippedWearables, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCurrentlyEquippedWearables;
};
export declare const Spotlight: {
    encode(message: Spotlight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Spotlight;
};
export declare const Ring: {
    encode(message: Ring, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Ring;
};
export declare const SetImagePointer: {
    encode(message: SetImagePointer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetImagePointer;
};
export declare const SetScreenPointer: {
    encode(message: SetScreenPointer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetScreenPointer;
};
export declare const Ban: {
    encode(message: Ban, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Ban;
};
export declare const Kick: {
    encode(message: Kick, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Kick;
};
export declare const Block: {
    encode(message: Block, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Block;
};
export declare const SetImpassable: {
    encode(message: SetImpassable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetImpassable;
};
export declare const Chat: {
    encode(message: Chat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Chat;
};
export declare const Notify: {
    encode(message: Notify, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Notify;
};
export declare const InteractWithObject: {
    encode(message: InteractWithObject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InteractWithObject;
};
export declare const ActivelySpeaking: {
    encode(message: ActivelySpeaking, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivelySpeaking;
};
export declare const EnterWhisper: {
    encode(message: EnterWhisper, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnterWhisper;
};
export declare const LeaveWhisper: {
    encode(_: LeaveWhisper, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LeaveWhisper;
};
export declare const Ghost: {
    encode(message: Ghost, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Ghost;
};
export declare const SetEmoteV2: {
    encode(message: SetEmoteV2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetEmoteV2;
};
export declare const SetName: {
    encode(message: SetName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetName;
};
export declare const SetTextStatus: {
    encode(message: SetTextStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetTextStatus;
};
export declare const SetPronouns: {
    encode(message: SetPronouns, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPronouns;
};
export declare const SetTitle: {
    encode(message: SetTitle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetTitle;
};
export declare const SetCity: {
    encode(message: SetCity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCity;
};
export declare const SetCountry: {
    encode(message: SetCountry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCountry;
};
export declare const SetStartDate: {
    encode(message: SetStartDate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetStartDate;
};
export declare const SetTimezone: {
    encode(message: SetTimezone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetTimezone;
};
export declare const SetPhone: {
    encode(message: SetPhone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPhone;
};
export declare const SetDisplayEmail: {
    encode(message: SetDisplayEmail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDisplayEmail;
};
export declare const SetDescription: {
    encode(message: SetDescription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDescription;
};
export declare const SetProfileImageUrl: {
    encode(message: SetProfileImageUrl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetProfileImageUrl;
};
export declare const SetPersonalImageUrl: {
    encode(message: SetPersonalImageUrl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPersonalImageUrl;
};
export declare const Exit: {
    encode(_: Exit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Exit;
};
export declare const Enter: {
    encode(message: Enter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Enter;
};
export declare const PrecomputeEnter: {
    encode(message: PrecomputeEnter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrecomputeEnter;
};
export declare const SetEmojiStatus: {
    encode(message: SetEmojiStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetEmojiStatus;
};
export declare const Teleport: {
    encode(message: Teleport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Teleport;
};
export declare const Spawn: {
    encode(message: Spawn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Spawn;
};
export declare const Respawn: {
    encode(_: Respawn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Respawn;
};
export declare const RespawnAtDesk: {
    encode(_: RespawnAtDesk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RespawnAtDesk;
};
export declare const RequestToJoinNook: {
    encode(message: RequestToJoinNook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestToJoinNook;
};
export declare const UpdateNookPermission: {
    encode(message: UpdateNookPermission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNookPermission;
};
export declare const Init: {
    encode(message: Init, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Init;
};
export declare const MapAddObject: {
    encode(message: MapAddObject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapAddObject;
};
export declare const MapUpdateObjects: {
    encode(message: MapUpdateObjects, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapUpdateObjects;
};
export declare const MapUpdateObjects_ObjectsEntry: {
    encode(message: MapUpdateObjects_ObjectsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapUpdateObjects_ObjectsEntry;
};
export declare const ShootConfetti: {
    encode(message: ShootConfetti, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ShootConfetti;
};
export declare const SetEventStatus: {
    encode(message: SetEventStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetEventStatus;
};
export declare const SetInConversation: {
    encode(message: SetInConversation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetInConversation;
};
export declare const SetCurrentArea: {
    encode(message: SetCurrentArea, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCurrentArea;
};
export declare const SetVehicleId: {
    encode(message: SetVehicleId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetVehicleId;
};
export declare const SetSpeedModifier: {
    encode(message: SetSpeedModifier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetSpeedModifier;
};
export declare const SetIsAlone: {
    encode(message: SetIsAlone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetIsAlone;
};
export declare const SetIsMobile: {
    encode(message: SetIsMobile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetIsMobile;
};
export declare const PlaySound: {
    encode(message: PlaySound, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlaySound;
};
export declare const StopSound: {
    encode(message: StopSound, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StopSound;
};
export declare const SetFocusModeEndTime: {
    encode(message: SetFocusModeEndTime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetFocusModeEndTime;
};
export declare const SetItemString: {
    encode(message: SetItemString, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetItemString;
};
export declare const TriggerObject: {
    encode(message: TriggerObject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TriggerObject;
};
export declare const CustomAction: {
    encode(message: CustomAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CustomAction;
};
export declare const SetFollowTarget: {
    encode(message: SetFollowTarget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetFollowTarget;
};
export declare const RequestToLead: {
    encode(message: RequestToLead, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestToLead;
};
export declare const EnterPortal: {
    encode(message: EnterPortal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnterPortal;
};
export declare const SetManualVideoSrc: {
    encode(message: SetManualVideoSrc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetManualVideoSrc;
};
export declare const SetSubtitle: {
    encode(message: SetSubtitle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetSubtitle;
};
export declare const MapCommitsChanges: {
    encode(message: MapCommitsChanges, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapCommitsChanges;
};
export declare const SpeakerUpdatesSession: {
    encode(message: SpeakerUpdatesSession, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpeakerUpdatesSession;
};
export declare const ChatReply: {
    encode(message: ChatReply, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChatReply;
};
export declare const ChatMessageUpdated: {
    encode(message: ChatMessageUpdated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChatMessageUpdated;
};
export declare const SendCommand: {
    encode(message: SendCommand, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendCommand;
};
export declare const RegisterCommand: {
    encode(message: RegisterCommand, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterCommand;
};
export declare const Craft: {
    encode(message: Craft, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Craft;
};
export declare const Craft_InputsEntry: {
    encode(message: Craft_InputsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Craft_InputsEntry;
};
export declare const HighFive: {
    encode(message: HighFive, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HighFive;
};
export declare const AddInventoryItem: {
    encode(message: AddInventoryItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddInventoryItem;
};
export declare const RemoveInventoryItem: {
    encode(message: RemoveInventoryItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveInventoryItem;
};
export declare const HipToBeSquare: {
    encode(message: HipToBeSquare, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HipToBeSquare;
};
export declare const TriggerInventoryItem: {
    encode(message: TriggerInventoryItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TriggerInventoryItem;
};
export declare const SetAllowScreenPointer: {
    encode(message: SetAllowScreenPointer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetAllowScreenPointer;
};
export declare const SetDeskInfo: {
    encode(message: SetDeskInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDeskInfo;
};
export declare const Wave: {
    encode(message: Wave, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Wave;
};
export declare const SetAway: {
    encode(message: SetAway, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetAway;
};
export declare const StartRecording: {
    encode(message: StartRecording, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartRecording;
};
export declare const RequestAccessViaCheckIn: {
    encode(message: RequestAccessViaCheckIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestAccessViaCheckIn;
};
export declare const RespondToAccessRequest: {
    encode(message: RespondToAccessRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RespondToAccessRequest;
};
export declare const SetSpaceRolePermissionOverride: {
    encode(message: SetSpaceRolePermissionOverride, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetSpaceRolePermissionOverride;
};
export declare const JoinChimeMeeting: {
    encode(message: JoinChimeMeeting, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): JoinChimeMeeting;
};
export declare const protobufWriterLibrary: typeof _m0;
