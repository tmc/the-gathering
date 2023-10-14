import { DBOutfit, Player } from "..";
import { Portal } from "../public/events";
import { TemplatePortal } from "./RemoteWorkRoomOfRequirements";
export declare enum GrandPrixMaps {
    Original = "rose-raceway",
    Castle = "dark-castle-dragway",
    Seaside = "seaside-speedway"
}
export declare const GRAND_PRIX_MAPS: string[];
type GrandPrixMapsInfoType = {
    imageURL: string;
    portal: Omit<Portal, "x" | "y">;
    templatePortals: TemplatePortal[];
    sourceSpace: string;
};
export declare const GRAND_PRIX_PORTAL: Omit<Portal, "x" | "y">;
export declare const GRAND_PRIX_TEMPLATE_PORTALS: TemplatePortal[];
export declare const GrandPrixMapsInfo: {
    [mapId in GrandPrixMaps]: GrandPrixMapsInfoType;
};
export declare const NUM_LAPS = 3;
export declare enum GrandPrixGamePhase {
    WAITING_FOR_PLAYERS = "waitingForPlayers",
    PLAYING = "playing",
    DONE = "done"
}
export declare enum GrandPrixServerEvents {
    FULL_STATE = "fullState",
    UPDATED_GAME_PHASE = "updatedGamePhase",
    FINISHED_LAP = "finishedLap",
    PLAYER_FINISHED_RACE = "playerFinishedRace",
    ALL_PLAYERS_FINISHED = "allPlayersFinished",
    SELECT_TRACK_FINISHED = "selectTrackFinished",
    UPDATE_LEADERBOARD = "updateLeaderboard"
}
export declare enum GrandPrixClientEvents {
    JOIN_SPACE = "joinSpace",
    START_PRESSED = "startPressed",
    END_RACE = "endRace",
    RESET_RACE = "resetRace",
    SELECT_TRACK = "selectTrack"
}
export type GrandPrixPlayer = {
    playerId: string;
    isSpectator: boolean;
    startLaneYPos?: number;
    numLaps: number;
    crossedCheckpoint: boolean;
    finishedPlace: number;
    finishedTime: number;
};
export interface GrandPrixFullStateData {
    players: {
        [playerId: string]: GrandPrixPlayer;
    };
    gamePhase: GrandPrixGamePhase;
    numFinished: number;
}
export interface GrandPrixGamePhaseData {
    gamePhase: GrandPrixGamePhase;
}
export interface GrandPrixFinishedLapData {
    numLaps: number;
    isLastToFinish?: boolean;
}
export type GrandPrixPlayerFinishedRaceData = {
    [playerId: string]: GrandPrixPlayer;
};
export type GrandPrixAllPlayersFinishedData = GrandPrixPlayerFinishedRaceData;
export type GrandPrixPlayerReadyData = GrandPrixPlayer;
export type GrandPrixJoinSpaceData = {
    playerId: string;
};
export type GrandPrixEndRaceData = {
    isNextRace: boolean;
};
export type GrandPrixSelectTrackData = {
    selectedTrack: string;
    currentTrack: string;
};
export type GrandPrixLeaveData = GrandPrixPlayer;
export declare const GRAND_PRIX_START_POS: Record<string, [number, number]>;
export declare const GRAND_PRIX_NUM_LANES: Record<string, number>;
export declare const GRAND_PRIX_CHECKPOINT: Record<string, [number, number]>;
export declare const FINISHED_PLACE_COLOR: Record<number, string>;
export declare const PODIUM_COORDS: Record<number, [number, number]>;
export declare function randomIntFromInterval(min: number, max: number): number;
export declare const AUDIENCE_COORDS: {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
};
export declare const DOOR_AREA_COORDS: {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
};
export declare const CROWN_IMG = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Favatar_goldcrown.png?alt=media&token=adf0c54f-b730-451e-a450-71d3ccd5f897";
export declare const SOUND_EFFECT_VOLUME = 0.1;
export declare const BACKGROUND_MUSIC_VOLUME = 0.15;
export declare enum SoundEffect {
    MountVehicle = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FUI_select.wav?alt=media&token=e50967bb-20ef-4dea-b4dd-af087c7ecf84",
    DismountVehicle = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FUI_cancel.mp3?alt=media&token=efdbe39d-ed33-4321-81c2-2cbf34e267b6",
    Ramp = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FObject_jump.wav?alt=media&token=e6df4e96-5f51-4e1c-a2d7-bff06587d9ce",
    SpeedBoost = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FObject_booster.wav?alt=media&token=5ce2a956-575e-47d5-8402-cdd2c9dd2fe6",
    Obstacle = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FObject_obstacle.mp3?alt=media&token=5022a01d-5ed1-4a86-b143-11275f61c7e8",
    FinishRace = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FFinish%20the%20race.mp3?alt=media&token=e184478e-8e16-4aa4-87d8-a46aff76f735",
    Countdown = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FCountdown.wav?alt=media&token=0352b662-7696-4612-a1ce-ebcfb7ee1b07",
    StopOrResetGame = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FStop_Reset_game.mp3?alt=media&token=e61a330f-8bc1-42ce-85d1-9994017a6533",
    RoseRacewayWaiting = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FRose%20Raceway_waiting_new.mp3?alt=media&token=674e620d-f869-4725-9f76-42a5ce81c238",
    RoseRacewayGame = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FRose%20Raceway_game_new.mp3?alt=media&token=7ac231cb-8dd2-46b0-82e0-2d74b5472083",
    BeachWaiting = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FBeach_waiting_new.mp3?alt=media&token=78e16191-b2bf-4017-ac34-758be26390f0",
    BeachGame = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FBeach_game_new.mp3?alt=media&token=7b8bc128-f9cb-4479-a605-a38c59ef0f32",
    CastleWaiting = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FCastle_waiting_new.mp3?alt=media&token=b4531367-64a2-4d59-865b-218a83b6e556",
    CastleGame = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FCastle_game_new.mp3?alt=media&token=994da0b6-8b40-404c-a667-f4618202359f"
}
export declare const GRAND_PRIX_MAP_SFX: Record<string, Record<GrandPrixGamePhase, SoundEffect>>;
export declare const getUpdatedGrandPrixLeaderboardsData: (players: GrandPrixPlayer[], mapId: string, grandPrixLeaderboards?: {
    [grandPrixMap: string]: {
        playerId: string;
        playerName?: string | undefined;
        playerOutfitString?: string | undefined;
        playerWearbles?: DBOutfit | undefined;
        finishedTime: number;
        date: string;
    }[];
} | undefined, additionalPlayerInfo?: {
    [playerId: string]: Partial<Player>;
} | undefined) => {
    [x: string]: {
        playerId: string;
        playerName?: string | undefined;
        playerOutfitString?: string | undefined;
        playerWearbles?: DBOutfit | undefined;
        finishedTime: number;
        date: string;
    }[];
};
export {};
