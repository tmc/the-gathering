import { Player } from "@gathertown/gather-game-common/dist/src/public/player";
import { GameEventEvent } from "./GameEventUtils";
import { Game } from "./Game";
import { GameMap } from "./GameMap";
export interface ServerClientEventContext {
    spaceId: string;
    player?: Partial<Player>;
    target?: Partial<Player>;
    playerId?: string;
    targetId?: string;
    map?: Partial<GameMap>;
}
export type SyntheticEventContext = ServerClientEventContext;
export type GameEventContext = ServerClientEventContext | SyntheticEventContext;
export declare function fillOrCreateContext(event: GameEventEvent, game: Game, context?: GameEventContext): ServerClientEventContext;
