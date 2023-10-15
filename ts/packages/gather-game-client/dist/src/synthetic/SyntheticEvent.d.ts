import { PlayerChangesMaps } from "./events/PlayerChangesMaps";
export interface SyntheticEvent {
    event?: {
        $case: "playerChangesMaps";
        playerChangesMaps: PlayerChangesMaps;
    };
}
