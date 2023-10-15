import { SpaceItem, WireObject } from "../generated_DO_NOT_TOUCH/events";
import { MapObject } from "../public/gameMap";
export declare const GARDENTOWN_PLANTER_PREFIX = "GardenTownRaisedBed_";
export declare enum PlantDifficulty {
    EASY = "Easy",
    MEDIUM = "Medium",
    HARD = "Hard",
    VERY_HARD = "Very Hard"
}
export declare enum PlantStage {
    DIRT = "DIRT",
    SEEDLING = "SEEDLING",
    SPROUT = "SPROUT",
    BUDDING = "BUDDING",
    FLOWERING = "FLOWERING",
    HARVESTABLE = "HARVESTABLE"
}
export declare const DEFAULT_PLANT_STAGES: PlantStage[];
export declare enum PlantHealth {
    HEALTHY = "HEALTHY",
    WILTING = "WILTING",
    DEAD = "DEAD"
}
export interface PlantInfo {
    displayName: string;
    difficulty: PlantDifficulty;
    growTime: number;
    numDailyWaters: number;
    reward?: PlantRewardName;
    stages?: PlantStage[];
}
export declare enum SeedName {
    GRASS_SEED = "Grass Seed",
    ROSE_SEED = "Rose Seed",
    MUM_SEED = "Mum Seed",
    POPPY_SEED = "Poppy Seed",
    ORCHID_SEED = "Orchid Seed",
    RASPBERRY_SEED = "Raspberry Seed",
    BROCCOLI_SEED = "Broccoli Seed",
    POTATO_SEED = "Potato Seed",
    SWEETPOTATO_SEED = "Sweet Potato Seed",
    PINEAPPLE_SEED = "Pineapple Seed",
    TULIP_SEED = "Tulip Seed",
    WATERMELON_SEED = "Watermelon Seed"
}
export declare enum PlantRewardName {
    GRASS_HARVEST = "Grass",
    ROSE_HARVEST = "Rose",
    MUM_HARVEST = "Mum",
    POPPY_HARVEST = "Poppy",
    ORCHID_HARVEST = "Orchid",
    RASPBERRY_HARVEST = "Raspberry",
    BROCCOLI_HARVEST = "Broccoli",
    POTATO_HARVEST = "Potato",
    SWEETPOTATO_HARVEST = "Sweet Potato",
    PINEAPPLE_HARVEST = "Pineapple",
    TULIP_HARVEST = "Tulip",
    WATERMELON_HARVEST = "Watermelon"
}
export declare enum CraftingRewardObjectName {
    GRASS_PATCH = "Grass Patch",
    BROCCOLI_BENCH = "Broccoli Bench",
    PINEAPPLE_HEAD_SCARECROW = "Pineapple Head Scarecrow",
    DANCING_FLOWER_POT = "Dancing Flower Pot"
}
export declare enum CraftingAbilityRewardName {
    FROG_GUN = "Frog Gun",
    DANCE_BOMB = "Dance Bomb",
    SPEED_POTION = "Speed Potion"
}
export declare const CraftingRewardName: {
    FROG_GUN: CraftingAbilityRewardName.FROG_GUN;
    DANCE_BOMB: CraftingAbilityRewardName.DANCE_BOMB;
    SPEED_POTION: CraftingAbilityRewardName.SPEED_POTION;
    GRASS_PATCH: CraftingRewardObjectName.GRASS_PATCH;
    BROCCOLI_BENCH: CraftingRewardObjectName.BROCCOLI_BENCH;
    PINEAPPLE_HEAD_SCARECROW: CraftingRewardObjectName.PINEAPPLE_HEAD_SCARECROW;
    DANCING_FLOWER_POT: CraftingRewardObjectName.DANCING_FLOWER_POT;
};
export declare const RewardName: {
    FROG_GUN: CraftingAbilityRewardName.FROG_GUN;
    DANCE_BOMB: CraftingAbilityRewardName.DANCE_BOMB;
    SPEED_POTION: CraftingAbilityRewardName.SPEED_POTION;
    GRASS_PATCH: CraftingRewardObjectName.GRASS_PATCH;
    BROCCOLI_BENCH: CraftingRewardObjectName.BROCCOLI_BENCH;
    PINEAPPLE_HEAD_SCARECROW: CraftingRewardObjectName.PINEAPPLE_HEAD_SCARECROW;
    DANCING_FLOWER_POT: CraftingRewardObjectName.DANCING_FLOWER_POT;
    GRASS_HARVEST: PlantRewardName.GRASS_HARVEST;
    ROSE_HARVEST: PlantRewardName.ROSE_HARVEST;
    MUM_HARVEST: PlantRewardName.MUM_HARVEST;
    POPPY_HARVEST: PlantRewardName.POPPY_HARVEST;
    ORCHID_HARVEST: PlantRewardName.ORCHID_HARVEST;
    RASPBERRY_HARVEST: PlantRewardName.RASPBERRY_HARVEST;
    BROCCOLI_HARVEST: PlantRewardName.BROCCOLI_HARVEST;
    POTATO_HARVEST: PlantRewardName.POTATO_HARVEST;
    SWEETPOTATO_HARVEST: PlantRewardName.SWEETPOTATO_HARVEST;
    PINEAPPLE_HARVEST: PlantRewardName.PINEAPPLE_HARVEST;
    TULIP_HARVEST: PlantRewardName.TULIP_HARVEST;
    WATERMELON_HARVEST: PlantRewardName.WATERMELON_HARVEST;
};
export interface Plant {
    name: PlantName;
    originallyPlantedBy: string;
    stage: PlantStage;
    health: PlantHealth;
    wateredBy: {
        [userId: string]: {
            count: number;
            lastWatered: number;
            harvested: boolean;
        };
    };
    lastFullyWatered: number;
    growScore: number;
}
export declare enum PlantName {
    GRASS = "GRASS",
    ROSE = "ROSE",
    MUM = "MUM",
    POPPY = "POPPY",
    ORCHID = "ORCHID",
    RASPBERRY = "RASPBERRY",
    POTATO = "POTATO",
    BROCCOLI = "BROCCOLI",
    SWEETPOTATO = "SWEETPOTATO",
    PINEAPPLE = "PINEAPPLE",
    TULIP = "TULIP",
    WATERMELON = "WATERMELON"
}
export declare const GARDENTOWN_SEED_TO_PLANT: Record<SeedName, PlantName>;
export declare const GARDENTOWN_REWARD_TO_PLANT: Record<PlantRewardName, PlantName>;
export declare const PLANT_INFO_MAP: Record<PlantName, PlantInfo>;
export declare const getPlantImage: (plant: Plant) => string;
export declare const getSeedImage: (seedName: SeedName) => string;
export declare const getHarvestImage: (rewardName: PlantRewardName) => string;
export declare const getCraftedRewardImage: (rewardName: CraftingAbilityRewardName | CraftingRewardObjectName) => string;
export declare const isGardenTownPlant: (templateId: string) => boolean;
export declare const isGardenTownPlanter: (templateId: string) => boolean;
export declare const getPlantNameFromTemplateId: (templateId: string) => PlantName | null;
export declare const getSeedItem: (seedName: SeedName) => SpaceItem;
export declare const getAllSeedItems: () => {
    [seedName: string]: SpaceItem;
};
export declare const getPlantRewardItem: (rewardName: PlantRewardName) => SpaceItem;
export declare const getAllPlantRewardItems: () => {
    [rewardName: string]: SpaceItem;
};
export declare const getCraftingRewardItem: (rewardName: CraftingAbilityRewardName | CraftingRewardObjectName) => SpaceItem;
export declare const getAllCraftingRewardItems: () => {};
type UnplacedObject = Omit<MapObject, "x" | "y" | "offsetX" | "offsetY" | "zIndex">;
export declare const getSeedUnplacedObj: (seedName: SeedName) => UnplacedObject;
export type GardenTownPlantSeed = {
    playerId: string;
    seedName: SeedName;
    mapId: string;
    x: number;
    y: number;
};
export declare const MIN_NUM_PLAYERS_HARVEST = 3;
export declare const getPlayersAllowedHarvest: (plant: Plant) => string[];
export declare const happenedToday: (epochTime: number) => boolean;
export declare const getPlantData: (plantObj: MapObject | WireObject) => Plant | null;
export declare const getIsGardeningTime: () => boolean;
export declare const getNextGardeningTime: () => {
    timeDiffMS: number;
    endTimeDiffMS: number;
    nextGardenTime: Date;
    nextGardenEndTime: Date;
};
export {};
