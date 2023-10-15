import {
  DBOutfit,
  Inventory,
  MoveDirectionEnum_ENUM as MoveDirection,
  SpriteDirectionEnum_ENUM as SpriteDirection,
  WireObject,
} from "./generated_DO_NOT_TOUCH/events";

export { SpriteDirection, MoveDirection };

// saved customization when a desk was unclaimed
export interface BackedUpDeskObjectDB {
  obj: WireObject | undefined;
  offsetX: number;
  offsetY: number;
}

// when desks are unclaimed we save the customizations so that they can be reapplied to newly claimed desks
export interface BackupDeskObjectsDB {
  objects: { [key: string]: BackedUpDeskObjectDB };
}

// an assigned desk must have a `mapId` and `deskId`
export type AssignedDeskInfoDB = {
  mapId: string;
  deskId: string;
  locked?: boolean;
  description?: string;
  lastDeskObjects?: BackupDeskObjectsDB;
};

// an unassigned desk must have both `mapId` and `deskId` unset
export type UnassignedDeskInfoDB = {
  mapId?: "" | undefined;
  deskId?: "" | undefined;
  lastDeskObjects?: BackupDeskObjectsDB;
};

export type DeskInfoDB = AssignedDeskInfoDB | UnassignedDeskInfoDB;

export function isAssignedDeskInfo(
  deskInfo: DeskInfoDB | undefined,
): deskInfo is AssignedDeskInfoDB {
  return !!deskInfo?.mapId && !!deskInfo.deskId;
}

// types shared between MemberInfo and Player -- ideally there are none :P (NGN-109)
// Note: as we separate them, make the removed fields `never` where they shouldn't be, so TS helps catch bugs
export type BaseRoomUserDB = {
  allowScreenPointer?: boolean;
  currentlyEquippedWearables?: DBOutfit;
  deskInfo?: DeskInfoDB;
  inventory?: Inventory;
  name?: string;
};

export enum PlayerStatusOption {
  Available = "Available",
  Busy = "Busy",
  DoNotDisturb = "DoNotDisturb",
}

export enum PlayerStatusEndOption {
  NONE_SELECTED = "NONE_SELECTED",
  THIRTY_MINUTES = "THIRTY_MINUTES",
  ONE_HOUR = "ONE_HOUR",
  TWO_HOURS = "TWO_HOURS",
  TOMORROW = "TOMORROW",
}

// This is the schema for player info persisted to the db. These fields are stored in the
// `rooms/users` collection, and should be set through actions sent to the game server:
// `gameSpace.setPlayerRoomInfo`.
// Right now everything is optional, because we don't have any real guarantees the data in the
// DB is actually not null.
// If you add something here, it will be persisted to the DB. Also make sure add it to the
// `PlayerDBFields` class below.
// (This will eventually be generated from Prisma.)
export interface PlayerDB extends BaseRoomUserDB {
  affiliation?: string;
  allowScreenPointer?: boolean;
  connected?: boolean;
  description?: string;
  displayEmail?: string;
  emojiStatus?: string;
  focusModeEndTime?: string;
  inventory?: Inventory;
  isNpc?: boolean;
  itemString?: string;
  map?: string;
  name?: string;
  personalImageUrl?: string;
  phone?: string;
  profileImageUrl?: string;
  pronouns?: string;
  textStatus?: string;
  timezone?: string;
  title?: string;
  city?: string;
  country?: string;
  status?: PlayerStatusOption;
  statusEndOption?: PlayerStatusEndOption;
  statusUpdatedAt?: string;
  startDate?: string;
  x?: number;
  y?: number;
  direction?: SpriteDirection;
}

// This is currently redundant to PlayerDB, but there will come a time when not all fields on
// PlayerDB are optional, and then the partial type will become more significant.
export type PlayerDBPartial = Partial<PlayerDB>;

// This class is used for runtime checking of the fields on a data blob passed to the game-server.
// It needs to be a class that implements the type, so we can instantiate a dummy object and then
// do runtime checks about the fields on the incoming payload, e.g. iterating across the keys
// of the dummy object fields and validating things about the payload.
// It also serves as the base class to `Player` which is used to create a default Player object.
// These are fields that are part of the schema, so default values here will be the default
// values persisted to the DB.
export class PlayerDBFields implements PlayerDB {
  affiliation = "";
  allowScreenPointer = true;
  connected = false;
  // have to set this as undefined so the field exists on an instance of PlayerDBFields
  currentlyEquippedWearables?: DBOutfit = undefined;
  description = "";
  deskInfo: DeskInfoDB = {};
  displayEmail = "";
  emojiStatus = "";
  focusModeEndTime = "";
  inventory: Inventory = { items: {}, order: {} };
  isNpc = false;
  itemString = "";
  map = "";
  name = "";
  personalImageUrl = "";
  phone = "";
  profileImageUrl = "";
  pronouns = "";
  textStatus = "";
  timezone = "";
  title = "";
  city = "";
  country = "";
  status = PlayerStatusOption.Available;
  statusUpdatedAt = "";
  statusEndOption = PlayerStatusEndOption.NONE_SELECTED;
  lastRaisedHand = "";
  startDate = "";
  x = 0;
  y = 0;
  direction: SpriteDirection = SpriteDirection.Down;
}

// Player is what the server and client use in-memory, not necessarily what is stored in the DB.
// Look to the PlayerDB to get the DB schema.
export class Player extends PlayerDBFields {
  ghost = 0;
  spotlighted = 0;
  emote: string | undefined = undefined;
  away = false;
  activelySpeaking = 0;
  lastActive = "";
  lastInputId = 0;
  whisperId = "";
  isSignedIn = false;
  eventStatus = "";
  inConversation = false;
  currentArea = "";
  vehicleId = "";
  speedModifier = 1;
  isAlone = true;
  isMobile = false;
  followTarget = "";
  manualVideoSrc = "";
  subtitle = "";

  constructor(public readonly id: string) {
    super();
  }
}
