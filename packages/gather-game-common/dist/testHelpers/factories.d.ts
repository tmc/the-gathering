import { Factory } from "fishery";
import { Player } from "../src/Player";
import { WireObject } from "../src/public/events";
import { MapObjectDB, Nook } from "../src";
export declare const getDefaultMockPlayerName: (playerId: string | number) => string;
export declare const factories: {
    player: Factory<Player, {
        id?: string | undefined;
    }, Player>;
    wireObject: Factory<WireObject, {
        interactable?: boolean | undefined;
    }, WireObject>;
    mapObjectDB: Factory<MapObjectDB, any, MapObjectDB>;
    nook: Factory<Nook, any, Nook>;
};
