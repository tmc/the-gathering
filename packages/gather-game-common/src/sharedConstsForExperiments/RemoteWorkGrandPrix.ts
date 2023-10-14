import { DBOutfit, Player } from "..";
import { Portal } from "../public/events";
import { SocialRoom, SocialRoomInfo, TemplatePortal } from "./RemoteWorkRoomOfRequirements";

export enum GrandPrixMaps {
  Original = "rose-raceway",
  Castle = "dark-castle-dragway",
  Seaside = "seaside-speedway",
}

export const GRAND_PRIX_MAPS: string[] = [
  GrandPrixMaps.Original,
  GrandPrixMaps.Castle,
  GrandPrixMaps.Seaside,
];

type GrandPrixMapsInfoType = {
  imageURL: string;
  portal: Omit<Portal, "x" | "y">; // portals from main to ror template
  templatePortals: TemplatePortal[]; // return portals from ror template to main
  sourceSpace: string;
};

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const GRAND_PRIX_PORTAL = SocialRoomInfo[SocialRoom.GoKarts].portal as Omit<
  Portal,
  "x" | "y"
>;
export const GRAND_PRIX_TEMPLATE_PORTALS =
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  SocialRoomInfo[SocialRoom.GoKarts].templatePortals as TemplatePortal[];

export const GrandPrixMapsInfo: { [mapId in GrandPrixMaps]: GrandPrixMapsInfoType } = {
  [GrandPrixMaps.Original]: {
    imageURL:
      "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/iYKZr84o97YLlNsd/CMGcE7i6DidMU95T2MBjuQ",
    portal: GRAND_PRIX_PORTAL,
    templatePortals: GRAND_PRIX_TEMPLATE_PORTALS,
    sourceSpace: "iYKZr84o97YLlNsd\\templateRacetrack",
  },
  [GrandPrixMaps.Castle]: {
    imageURL:
      "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/FJCjTwKxexpwUUJs/PAK5C3CWKyPp1Kd3CpMpIy",
    portal: GRAND_PRIX_PORTAL,
    templatePortals: GRAND_PRIX_TEMPLATE_PORTALS,
    sourceSpace: "FJCjTwKxexpwUUJs\\templateDarkCastle",
  },
  [GrandPrixMaps.Seaside]: {
    imageURL:
      "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/HJWM8Cb2JGtgEmyr/iCTyCnMf7OA8fqHNToo5kx",
    portal: GRAND_PRIX_PORTAL,
    templatePortals: GRAND_PRIX_TEMPLATE_PORTALS,
    sourceSpace: "HJWM8Cb2JGtgEmyr\\templateBeachTrack",
  },
};

export const NUM_LAPS = 3;

export enum GrandPrixGamePhase {
  WAITING_FOR_PLAYERS = "waitingForPlayers",
  PLAYING = "playing",
  DONE = "done",
}

export enum GrandPrixServerEvents {
  FULL_STATE = "fullState",
  UPDATED_GAME_PHASE = "updatedGamePhase",
  FINISHED_LAP = "finishedLap",
  PLAYER_FINISHED_RACE = "playerFinishedRace",
  ALL_PLAYERS_FINISHED = "allPlayersFinished",
  SELECT_TRACK_FINISHED = "selectTrackFinished",
  UPDATE_LEADERBOARD = "updateLeaderboard",
}

export enum GrandPrixClientEvents {
  JOIN_SPACE = "joinSpace",
  START_PRESSED = "startPressed",
  END_RACE = "endRace",
  RESET_RACE = "resetRace",
  SELECT_TRACK = "selectTrack",
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

export const GRAND_PRIX_START_POS: Record<string, [number, number]> = {
  [GrandPrixMaps.Original]: [39, 73],
  [GrandPrixMaps.Seaside]: [39, 71],
  [GrandPrixMaps.Castle]: [39, 71],
};

export const GRAND_PRIX_NUM_LANES: Record<string, number> = {
  [GrandPrixMaps.Original]: 10,
  [GrandPrixMaps.Seaside]: 12,
  [GrandPrixMaps.Castle]: 12,
};

export const GRAND_PRIX_CHECKPOINT: Record<string, [number, number]> = {
  [GrandPrixMaps.Original]: [46, 7],
  [GrandPrixMaps.Seaside]: [37, 7],
  [GrandPrixMaps.Castle]: [32, 9],
};

export const FINISHED_PLACE_COLOR: Record<number, string> = {
  1: "#569cfb",
  2: "#6ece9a",
  3: "#fdef4a",
};

export const PODIUM_COORDS: Record<number, [number, number]> = {
  1: [48, 53],
  2: [47, 53],
  3: [49, 53],
};

// Get random number within interval, inclusive
export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const AUDIENCE_COORDS: { xMin: number; xMax: number; yMin: number; yMax: number } = {
  xMin: 44,
  xMax: 52,
  yMin: 56,
  yMax: 60,
};

export const DOOR_AREA_COORDS: { xMin: number; xMax: number; yMin: number; yMax: number } = {
  xMin: 16,
  xMax: 22,
  yMin: 84,
  yMax: 85,
};

export const CROWN_IMG =
  "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Favatar_goldcrown.png?alt=media&token=adf0c54f-b730-451e-a450-71d3ccd5f897";

export const SOUND_EFFECT_VOLUME = 0.1;

export const BACKGROUND_MUSIC_VOLUME = 0.15;

export enum SoundEffect {
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
  CastleGame = "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fsfx%2FCastle_game_new.mp3?alt=media&token=994da0b6-8b40-404c-a667-f4618202359f",
}

export const GRAND_PRIX_MAP_SFX: Record<string, Record<GrandPrixGamePhase, SoundEffect>> = {
  [GrandPrixMaps.Original]: {
    [GrandPrixGamePhase.WAITING_FOR_PLAYERS]: SoundEffect.RoseRacewayWaiting,
    [GrandPrixGamePhase.PLAYING]: SoundEffect.RoseRacewayGame,
    [GrandPrixGamePhase.DONE]: SoundEffect.RoseRacewayGame,
  },
  [GrandPrixMaps.Seaside]: {
    [GrandPrixGamePhase.WAITING_FOR_PLAYERS]: SoundEffect.BeachWaiting,
    [GrandPrixGamePhase.PLAYING]: SoundEffect.BeachGame,
    [GrandPrixGamePhase.DONE]: SoundEffect.BeachGame,
  },
  [GrandPrixMaps.Castle]: {
    [GrandPrixGamePhase.WAITING_FOR_PLAYERS]: SoundEffect.CastleWaiting,
    [GrandPrixGamePhase.PLAYING]: SoundEffect.CastleGame,
    [GrandPrixGamePhase.DONE]: SoundEffect.CastleGame,
  },
};

export const getUpdatedGrandPrixLeaderboardsData = (
  players: GrandPrixPlayer[],
  mapId: string,
  grandPrixLeaderboards?: {
    // Note: this is just GrandPrixLeaderboard, but duplicated because game-client can't depend on gather-common
    [grandPrixMap: string]: {
      playerId: string;
      playerName?: string;
      /** @deprecated; readonly now */
      playerOutfitString?: string;
      playerWearbles?: DBOutfit;
      finishedTime: number;
      date: string;
    }[];
  },
  additionalPlayerInfo?: { [playerId: string]: Partial<Player> },
) => {
  const leaderboardData = [...(grandPrixLeaderboards?.[mapId] ?? [])];

  // Append this round's times to the list and sort it
  const date = new Date().toISOString();
  const playerDataList = players
    .filter((player) => !player.isSpectator)
    .map(({ playerId, finishedTime }) => ({
      playerId,
      playerName: additionalPlayerInfo?.[playerId]?.name,
      playerWearables: additionalPlayerInfo?.[playerId]?.currentlyEquippedWearables,
      finishedTime,
      date,
    }));
  leaderboardData.push(...playerDataList);
  leaderboardData.sort((a, b) => a.finishedTime - b.finishedTime);

  // Only save the top 10
  return {
    ...grandPrixLeaderboards,
    [mapId]: leaderboardData.slice(0, 10),
  };
};
