"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillOrCreateContext = void 0;
function fillOrCreateContext(event, game, context) {
    if (!context) {
        context = { spaceId: game.spaceId ?? "" };
    }
    const eventAny = event[event.$case];
    if (eventAny["encId"]) {
        const { encId } = eventAny;
        const uid = game.getPlayerUidFromEncId(encId);
        context.player = context.player || game.players[uid];
        context.playerId = uid;
    }
    if (eventAny["encIdTarget"]) {
        const { encIdTarget } = eventAny;
        const uidTarget = game.getPlayerUidFromEncId(encIdTarget);
        context.target = game.players[uidTarget];
        context.targetId = uidTarget;
    }
    if (eventAny["mapId"]) {
        const { mapId } = eventAny;
        context.map = game.partialMaps[mapId];
    }
    return context;
}
exports.fillOrCreateContext = fillOrCreateContext;
//# sourceMappingURL=GameEventContexts.js.map