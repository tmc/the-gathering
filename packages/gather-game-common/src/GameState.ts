// The top level game state API used throughout client code (except networking internals).
export type GameState<T> = { [id: string]: T };

// A subset of the complete game state used throughout client code to represent a game state change.
// A null value represents that player being removed. ALL changed fields should be included here,
// but there also may be fields that did not change (we should fix).
export type PartialGameState<T> = {
  [id: string]: Partial<T> | typeof GAME_STATE_PLAYER_DISCONNECT_SYMBOL;
};

export const GAME_STATE_PLAYER_DISCONNECT_SYMBOL = null;
