export type GameState<T> = {
    [id: string]: T;
};
export type PartialGameState<T> = {
    [id: string]: Partial<T> | typeof GAME_STATE_PLAYER_DISCONNECT_SYMBOL;
};
export declare const GAME_STATE_PLAYER_DISCONNECT_SYMBOL: null;
