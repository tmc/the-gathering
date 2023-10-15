import { GameEventByCase, SyntheticEventEvent } from "../../GameEventUtils";
import { Game } from "../../Game";
export interface PlayerChangesMaps {
    encId: number;
    newMapId: string;
    oldMapId: string;
}
export declare function generatePlayerChangesMapsEvent(event: GameEventByCase<"playerMoves">, game: Game, syntheticEvents: SyntheticEventEvent[]): void;
