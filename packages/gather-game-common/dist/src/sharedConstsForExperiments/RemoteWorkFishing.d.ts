import { SpaceItem } from "../generated_DO_NOT_TOUCH/events";
import { SeedName } from "./RemoteWorkGardenTown";
export type FishingItem = {
    name: FishName | SeedName | JunkName;
    rarity?: number;
    personality?: string;
    category?: string;
};
export declare enum FishName {
    Salmon = "Salmon",
    Trout = "Trout",
    Bass = "Bass"
}
export declare enum JunkName {
    CyberpunkWaste = "Cyberpunk Waste",
    Anchor = "Anchor",
    Kelp = "Kelp"
}
export declare const getFishingItemNameToImage: (name: string) => string;
export declare const getFishItem: (fishName: FishName) => SpaceItem;
export declare const getAllFishItems: () => {
    [fishName: string]: SpaceItem;
};
export declare const getJunkItem: (junkName: JunkName) => SpaceItem;
export declare const getAllJunkItems: () => {
    [junkName: string]: SpaceItem;
};
