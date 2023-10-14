"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyMapIsComplete = void 0;
function verifyMapIsComplete(map) {
    const verifyMapIsCompleteHelper = (map) => {
        if (map.id != null &&
            map.dimensions != null &&
            map.collisions != null &&
            map.backgroundImagePath != null &&
            map.spawns != null &&
            map.portals != null &&
            map.announcer != null) {
            return {
                ...map,
                id: map.id,
                dimensions: map.dimensions,
                collisions: map.collisions,
                backgroundImagePath: map.backgroundImagePath,
                spawns: map.spawns,
                portals: map.portals,
                announcer: map.announcer,
            };
        }
        return null;
    };
    return verifyMapIsCompleteHelper(map) !== null;
}
exports.verifyMapIsComplete = verifyMapIsComplete;
//# sourceMappingURL=GameMap.js.map