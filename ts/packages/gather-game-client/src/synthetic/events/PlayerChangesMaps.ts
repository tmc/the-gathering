import { GameEventByCase, SyntheticEventEvent } from "../../GameEventUtils";
import { Game } from "../../Game";

export interface PlayerChangesMaps {
  encId: number;
  newMapId: string;
  oldMapId: string;
}

/**
 * Generates a PlayerChangesMaps event if the player changes maps.
 * This event is only published if the player respawns from a different
 * map or the player enters a portal to another map.
 * @param event The PlayerMoves event
 * @param game The Game instance that received the PlayerMoves event
 */
export function generatePlayerChangesMapsEvent(
  event: GameEventByCase<"playerMoves">,
  game: Game,
  syntheticEvents: SyntheticEventEvent[],
) {
  const { encId, mapId: newMapId } = event.playerMoves;
  const playerUid = game.getPlayerUidFromEncId(encId) ?? "";
  const oldMapId = game.players[playerUid]?.map;
  if (newMapId && oldMapId && newMapId !== oldMapId) {
    const playerChangesMaps: PlayerChangesMaps = {
      encId,
      newMapId,
      oldMapId,
    };
    const syntheticEvent: SyntheticEventEvent = {
      $case: "playerChangesMaps",
      playerChangesMaps,
    };
    syntheticEvents.push(syntheticEvent);
  }
}
