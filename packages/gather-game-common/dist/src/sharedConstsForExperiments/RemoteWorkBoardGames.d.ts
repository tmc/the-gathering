import { MapObject } from "..";
export declare const BOARD_GAME_MAPS: string[];
export declare const GENERIC_GAME_BOX_OBJ: {
    _name: string;
    _tags: string[];
    color: string;
    height: number;
    highlighted: string;
    normal: string;
    previewMessage: string;
    properties: {
        componentModal: string;
        url: string;
        deterministicUrlPrefix: string;
    };
    templateId: string;
    type: number;
    width: number;
};
export declare enum BoardGamesServerEvents {
    GAME_UPDATED = "gameUpdated"
}
export interface BoardGamesGameUpdatedData {
    boardGameUrl: string;
}
export declare enum BoardGame {
    DrawBattle = "Draw battle",
    Skribbl = "Skribbl.io",
    GuessMe = "GuessMe!",
    BattleTetris = "Battle tetris",
    Poker = "Poker",
    Codenames = "Codenames",
    OneNightWerewolf = "One night werewolf",
    Colonist = "Colonist.io"
}
export declare const shownBoardGames: BoardGame[];
export declare function isBoardGame(objectName: string): objectName is BoardGame;
export type BoardGameInfoData = {
    description: string;
    numPlayers: string;
    duration: string;
    requiresInviteCode: boolean;
    object: Partial<MapObject>;
};
export declare const BoardGameInfo: Record<BoardGame, BoardGameInfoData>;
