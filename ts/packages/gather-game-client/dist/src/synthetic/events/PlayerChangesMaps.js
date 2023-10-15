"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePlayerChangesMapsEvent = void 0;
function generatePlayerChangesMapsEvent(event, game, syntheticEvents) {
    const { encId, mapId: newMapId } = event.playerMoves;
    const playerUid = game.getPlayerUidFromEncId(encId) ?? "";
    const oldMapId = game.players[playerUid]?.map;
    if (newMapId && oldMapId && newMapId !== oldMapId) {
        const playerChangesMaps = {
            encId,
            newMapId,
            oldMapId,
        };
        const syntheticEvent = {
            $case: "playerChangesMaps",
            playerChangesMaps,
        };
        syntheticEvents.push(syntheticEvent);
    }
}
exports.generatePlayerChangesMapsEvent = generatePlayerChangesMapsEvent;
//# sourceMappingURL=PlayerChangesMaps.js.map