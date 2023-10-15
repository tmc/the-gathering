import { DBOutfit, Inventory, MoveDirectionEnum_ENUM as MoveDirection, SpriteDirectionEnum_ENUM as SpriteDirection, WireObject } from "./generated_DO_NOT_TOUCH/events";
export { SpriteDirection, MoveDirection };
export interface BackedUpDeskObjectDB {
    obj: WireObject | undefined;
    offsetX: number;
    offsetY: number;
}
export interface BackupDeskObjectsDB {
    objects: {
        [key: string]: BackedUpDeskObjectDB;
    };
}
export type AssignedDeskInfoDB = {
    mapId: string;
    deskId: string;
    locked?: boolean;
    description?: string;
    lastDeskObjects?: BackupDeskObjectsDB;
};
export type UnassignedDeskInfoDB = {
    mapId?: "" | undefined;
    deskId?: "" | undefined;
    lastDeskObjects?: BackupDeskObjectsDB;
};
export type DeskInfoDB = AssignedDeskInfoDB | UnassignedDeskInfoDB;
export declare function isAssignedDeskInfo(deskInfo: DeskInfoDB | undefined): deskInfo is AssignedDeskInfoDB;
export type BaseRoomUserDB = {
    allowScreenPointer?: boolean;
    currentlyEquippedWearables?: DBOutfit;
    deskInfo?: DeskInfoDB;
    inventory?: Inventory;
    name?: string;
};
export declare enum PlayerStatusOption {
    Available = "Available",
    Busy = "Busy",
    DoNotDisturb = "DoNotDisturb"
}
export declare enum PlayerStatusEndOption {
    NONE_SELECTED = "NONE_SELECTED",
    THIRTY_MINUTES = "THIRTY_MINUTES",
    ONE_HOUR = "ONE_HOUR",
    TWO_HOURS = "TWO_HOURS",
    TOMORROW = "TOMORROW"
}
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
export type PlayerDBPartial = Partial<PlayerDB>;
export declare class PlayerDBFields implements PlayerDB {
    affiliation: string;
    allowScreenPointer: boolean;
    connected: boolean;
    currentlyEquippedWearables?: DBOutfit;
    description: string;
    deskInfo: DeskInfoDB;
    displayEmail: string;
    emojiStatus: string;
    focusModeEndTime: string;
    inventory: Inventory;
    isNpc: boolean;
    itemString: string;
    map: string;
    name: string;
    personalImageUrl: string;
    phone: string;
    profileImageUrl: string;
    pronouns: string;
    textStatus: string;
    timezone: string;
    title: string;
    city: string;
    country: string;
    status: PlayerStatusOption;
    statusUpdatedAt: string;
    statusEndOption: PlayerStatusEndOption;
    lastRaisedHand: string;
    startDate: string;
    x: number;
    y: number;
    direction: SpriteDirection;
}
export declare class Player extends PlayerDBFields {
    readonly id: string;
    ghost: number;
    spotlighted: number;
    emote: string | undefined;
    away: boolean;
    activelySpeaking: number;
    lastActive: string;
    lastInputId: number;
    whisperId: string;
    isSignedIn: boolean;
    eventStatus: string;
    inConversation: boolean;
    currentArea: string;
    vehicleId: string;
    speedModifier: number;
    isAlone: boolean;
    isMobile: boolean;
    followTarget: string;
    manualVideoSrc: string;
    subtitle: string;
    constructor(id: string);
}
