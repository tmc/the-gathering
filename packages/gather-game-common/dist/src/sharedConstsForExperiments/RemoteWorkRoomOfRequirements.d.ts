import { MapObject } from "../GameMap";
import { Portal } from "../generated_DO_NOT_TOUCH/events";
export declare const ROOM_OF_REQUIREMENTS_EXTENSION = "RemoteWorkRoomOfRequirements";
export declare const ROOM_CONTROLLER_OBJECT_ID = "CyberpunkKioskWall - ja17fdCaXI-xbC9Imc0Rm_754e70d9-0b7b-4fc2-bebe-e2c1207c95d2";
export declare const ROOM_DOOR_OBJECT_ID = "gBm9cPiE9ORWWatgyeC9_dedd43b1-6d34-4511-a92e-c5e019b8617a";
export declare const isRorObject: (id: string) => boolean;
export declare const isRorStandaloneObject: (id: string) => boolean;
export declare const isRoRActive: (room: SocialRoomType) => boolean;
export declare const targetMaps: (room: SocialRoomType) => (string | undefined)[];
export declare enum SocialRoom {
    HipToBeSquare = "Hip to be Square",
    GoKarts = "Grand Prix",
    SpeedGathering = "Speed Gathering",
    TetrisTournament = "Tetris Tourney",
    Trivia = "Trivia",
    Poker = "Poker Night",
    TalentShow = "Talent Show",
    OldPoker = "Poker",
    OldGoKarts = "Go Karts",
    BoardGames = "Board Game Night"
}
export declare enum SocialRoomSize {
    Small = "Small (1 - 25 people)",
    Medium = "Medium (25 - 50 people)",
    Large = "Large (50 - 100 people)"
}
export type RoomOfRequirementsSetRoom = {
    rorObj: {
        id: string;
        x: number;
        y: number;
    };
    currentRoom?: SocialRoom;
    selectedRoom: SocialRoom;
    myPlayerMap: string;
    myPlayerId?: string;
    roomSize?: SocialRoomSize;
};
export interface TemplatePortal {
    x: number;
    y: number;
    targetOffsetX?: number;
    targetOffsetY?: number;
}
export declare const ParticipantFilterOptions: readonly ["2-10", "10-25", "25+"];
export declare const ActivityTimeFilterOptions: readonly ["under 30 mins", "30-60 mins", "60+ mins"];
export declare const HIP_TO_BE_SQUARE_MAP = "hip-to-be-square";
type SocialRoomType = {
    imageURL: string;
    guideURL?: string;
    targetMapName: string;
    portal: Omit<Portal, "x" | "y"> | Record<SocialRoomSize, Omit<Portal, "x" | "y">>;
    templatePortals: TemplatePortal[] | Record<SocialRoomSize, TemplatePortal[]>;
    roomDisplayObject: {
        wall?: Partial<MapObject>;
        standalone: Partial<MapObject>;
    };
    participants: string;
    participantTags: (typeof ParticipantFilterOptions)[number][];
    durationTags: (typeof ActivityTimeFilterOptions)[number][];
    sourceSpace: string | Record<SocialRoomSize, string>;
    portalToTemplate?: {
        portalToTemplate: {
            x: number;
            y: number;
        };
        returnPortal: {
            x: number;
            y: number;
        };
    };
    active: boolean;
    infoModalNextImageURL?: string;
    rorActive: boolean;
};
export declare const SocialRoomInfo: {
    [roomKey in SocialRoom]: SocialRoomType;
};
export {};
