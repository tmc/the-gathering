import { SpaceItem, WireObject } from "../generated_DO_NOT_TOUCH/events";
import { Interaction, MapObject } from "../public/gameMap";
import { parseObjCustomState } from "../public/utils";

const GARDENTOWN_OBJ_TEMPLATE_PREFIX = "GARDENTOWN_";
export const GARDENTOWN_PLANTER_PREFIX = "GardenTownRaisedBed_";

export enum PlantDifficulty {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard",
  VERY_HARD = "Very Hard",
}

export enum PlantStage {
  DIRT = "DIRT",
  SEEDLING = "SEEDLING",
  SPROUT = "SPROUT",
  BUDDING = "BUDDING",
  FLOWERING = "FLOWERING",
  HARVESTABLE = "HARVESTABLE",
}

export const DEFAULT_PLANT_STAGES = [
  PlantStage.DIRT,
  PlantStage.SEEDLING,
  PlantStage.SPROUT,
  PlantStage.BUDDING,
  PlantStage.FLOWERING,
  PlantStage.HARVESTABLE,
];

export enum PlantHealth {
  HEALTHY = "HEALTHY",
  WILTING = "WILTING",
  DEAD = "DEAD",
}

export interface PlantInfo {
  displayName: string;
  difficulty: PlantDifficulty;
  growTime: number;
  numDailyWaters: number;
  reward?: PlantRewardName;
  stages?: PlantStage[];
}

export enum SeedName {
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
  WATERMELON_SEED = "Watermelon Seed",
}

export enum PlantRewardName {
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
  WATERMELON_HARVEST = "Watermelon",
}

export enum CraftingRewardObjectName {
  GRASS_PATCH = "Grass Patch",
  BROCCOLI_BENCH = "Broccoli Bench",
  PINEAPPLE_HEAD_SCARECROW = "Pineapple Head Scarecrow",
  DANCING_FLOWER_POT = "Dancing Flower Pot",
}

export enum CraftingAbilityRewardName {
  FROG_GUN = "Frog Gun",
  DANCE_BOMB = "Dance Bomb",
  SPEED_POTION = "Speed Potion",
}

export const CraftingRewardName = { ...CraftingRewardObjectName, ...CraftingAbilityRewardName };

export const RewardName = {
  ...PlantRewardName,
  ...CraftingRewardName,
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

export enum PlantName {
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
  WATERMELON = "WATERMELON",
}

export const GARDENTOWN_SEED_TO_PLANT: Record<SeedName, PlantName> = {
  [SeedName.GRASS_SEED]: PlantName.GRASS,
  [SeedName.ROSE_SEED]: PlantName.ROSE,
  [SeedName.MUM_SEED]: PlantName.MUM,
  [SeedName.POPPY_SEED]: PlantName.POPPY,
  [SeedName.ORCHID_SEED]: PlantName.ORCHID,
  [SeedName.RASPBERRY_SEED]: PlantName.RASPBERRY,
  [SeedName.BROCCOLI_SEED]: PlantName.BROCCOLI,
  [SeedName.POTATO_SEED]: PlantName.POTATO,
  [SeedName.SWEETPOTATO_SEED]: PlantName.SWEETPOTATO,
  [SeedName.PINEAPPLE_SEED]: PlantName.PINEAPPLE,
  [SeedName.TULIP_SEED]: PlantName.TULIP,
  [SeedName.WATERMELON_SEED]: PlantName.WATERMELON,
};

export const GARDENTOWN_REWARD_TO_PLANT: Record<PlantRewardName, PlantName> = {
  [RewardName.GRASS_HARVEST]: PlantName.GRASS,
  [RewardName.ROSE_HARVEST]: PlantName.ROSE,
  [RewardName.MUM_HARVEST]: PlantName.MUM,
  [RewardName.POPPY_HARVEST]: PlantName.POPPY,
  [RewardName.ORCHID_HARVEST]: PlantName.ORCHID,
  [RewardName.RASPBERRY_HARVEST]: PlantName.RASPBERRY,
  [RewardName.BROCCOLI_HARVEST]: PlantName.BROCCOLI,
  [RewardName.POTATO_HARVEST]: PlantName.POTATO,
  [RewardName.SWEETPOTATO_HARVEST]: PlantName.SWEETPOTATO,
  [RewardName.PINEAPPLE_HARVEST]: PlantName.PINEAPPLE,
  [RewardName.TULIP_HARVEST]: PlantName.TULIP,
  [RewardName.WATERMELON_HARVEST]: PlantName.WATERMELON,
};

export const PLANT_INFO_MAP: Record<PlantName, PlantInfo> = {
  [PlantName.GRASS]: {
    displayName: "Grass",
    difficulty: PlantDifficulty.EASY,
    growTime: 1,
    numDailyWaters: 2,
    reward: RewardName.GRASS_HARVEST,
  },
  [PlantName.ROSE]: {
    displayName: "Rose",
    difficulty: PlantDifficulty.EASY,
    growTime: 1,
    numDailyWaters: 2,
    reward: RewardName.ROSE_HARVEST,
  },
  [PlantName.MUM]: {
    displayName: "Mum",
    difficulty: PlantDifficulty.EASY,
    growTime: 1,
    numDailyWaters: 2,
    reward: RewardName.MUM_HARVEST,
  },
  [PlantName.POPPY]: {
    displayName: "Poppy",
    difficulty: PlantDifficulty.EASY,
    growTime: 1,
    numDailyWaters: 2,
    reward: RewardName.POPPY_HARVEST,
  },
  [PlantName.ORCHID]: {
    displayName: "Orchid",
    difficulty: PlantDifficulty.EASY,
    growTime: 1,
    numDailyWaters: 2,
    reward: RewardName.ORCHID_HARVEST,
  },
  [PlantName.RASPBERRY]: {
    displayName: "Raspberry",
    difficulty: PlantDifficulty.EASY,
    growTime: 2,
    numDailyWaters: 2,
    reward: RewardName.RASPBERRY_HARVEST,
  },
  [PlantName.POTATO]: {
    displayName: "Potato",
    difficulty: PlantDifficulty.EASY,
    growTime: 2,
    numDailyWaters: 2,
    reward: RewardName.POTATO_HARVEST,
  },
  [PlantName.BROCCOLI]: {
    displayName: "Broccoli",
    difficulty: PlantDifficulty.MEDIUM,
    growTime: 7,
    numDailyWaters: 4,
    reward: RewardName.BROCCOLI_HARVEST,
  },
  [PlantName.TULIP]: {
    displayName: "Tulip",
    difficulty: PlantDifficulty.MEDIUM,
    growTime: 7,
    numDailyWaters: 4,
    reward: RewardName.TULIP_HARVEST,
  },
  [PlantName.SWEETPOTATO]: {
    displayName: "Sweet Potato",
    difficulty: PlantDifficulty.MEDIUM,
    growTime: 7,
    numDailyWaters: 4,
    reward: RewardName.SWEETPOTATO_HARVEST,
  },
  [PlantName.PINEAPPLE]: {
    displayName: "Pineapple",
    difficulty: PlantDifficulty.VERY_HARD,
    growTime: 21,
    numDailyWaters: 10,
    reward: RewardName.PINEAPPLE_HARVEST,
  },
  [PlantName.WATERMELON]: {
    displayName: "Watermelon",
    difficulty: PlantDifficulty.VERY_HARD,
    growTime: 21,
    numDailyWaters: 10,
    reward: RewardName.WATERMELON_HARVEST,
  },
};

export const getPlantImage = (plant: Plant) => {
  if (plant.stage === PlantStage.DIRT)
    return `https://cdn.gather.town/v0/b/gather-town.appspot.com/o/manually-uploaded%2Fgardentown_new%2FDIRT_MOUND.png?alt=media`;

  if (plant.health === PlantHealth.DEAD)
    return "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/manually-uploaded%2Fgardentown_new%2FBROCCOLI_BUDDING_DEAD.png?alt=media&token=b3d75aa9-318c-4f4c-939f-3f692acda074";

  return `https://cdn.gather.town/v0/b/gather-town.appspot.com/o/manually-uploaded%2Fgardentown_new%2F${plant.name}_${plant.stage}_${plant.health}.png?alt=media`;
};

export const getSeedImage = (seedName: SeedName) => {
  const plantName = GARDENTOWN_SEED_TO_PLANT[seedName];
  return `https://cdn.gather.town/v0/b/gather-town.appspot.com/o/manually-uploaded%2Fgardentown_new%2F${plantName}_SEED.png?alt=media`;
};

export const getHarvestImage = (rewardName: PlantRewardName) => {
  const plantName = GARDENTOWN_REWARD_TO_PLANT[rewardName];
  return `https://cdn.gather.town/v0/b/gather-town.appspot.com/o/manually-uploaded%2Fgardentown_new%2F${plantName}_HARVEST.png?alt=media`;
};

// TODO Broken URLs
export const getCraftedRewardImage = (
  rewardName: CraftingAbilityRewardName | CraftingRewardObjectName,
) =>
  `https://cdn.gather.town/v0/b/gather-town.appspot.com/o/manually-uploaded%2Fgardentown_new%2F${rewardName}_CRAFTED.png?alt=media`;

export const isGardenTownPlant = (templateId: string) =>
  templateId.startsWith(GARDENTOWN_OBJ_TEMPLATE_PREFIX);

export const isGardenTownPlanter = (templateId: string) =>
  templateId.startsWith(GARDENTOWN_PLANTER_PREFIX);

export const getPlantNameFromTemplateId = (templateId: string): PlantName | null => {
  if (isGardenTownPlant(templateId)) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const suffix = templateId.slice(11) as PlantName;
    if (Object.values(PlantName).includes(suffix)) return suffix;
  }
  return null;
};

export const getSeedItem = (seedName: SeedName): SpaceItem => {
  const plant = GARDENTOWN_SEED_TO_PLANT[seedName];
  const previewUrl = getSeedImage(seedName);

  const item: SpaceItem = {
    name: seedName,
    category: "Gardentown Seeds",
    previewUrl,
    meta: { plant },
    abilities: {},
  };
  return item;
};

export const getAllSeedItems = (): { [seedName: string]: SpaceItem } =>
  Object.values(SeedName).reduce(
    (prev, seedName) => ({ ...prev, [seedName]: getSeedItem(seedName) }),
    {},
  );

export const getPlantRewardItem = (rewardName: PlantRewardName): SpaceItem => {
  const plant = GARDENTOWN_REWARD_TO_PLANT[rewardName];
  const previewUrl = getHarvestImage(rewardName);

  const item: SpaceItem = {
    name: rewardName,
    category: "Gardentown Rewards",
    previewUrl,
    meta: { plant },
    abilities: {},
  };
  return item;
};

export const getAllPlantRewardItems = (): { [rewardName: string]: SpaceItem } =>
  Object.values(PlantRewardName).reduce(
    (prev, rewardName) => ({ ...prev, [rewardName]: getPlantRewardItem(rewardName) }),
    {},
  );

export const getCraftingRewardItem = (
  rewardName: CraftingAbilityRewardName | CraftingRewardObjectName,
): SpaceItem => {
  const previewUrl = getCraftedRewardImage(rewardName);

  const item: SpaceItem = {
    name: rewardName,
    category: "Gardentown Rewards",
    previewUrl,
    meta: {},
    abilities: {},
  };
  return item;
};

export const getAllCraftingRewardItems = () =>
  Object.values(CraftingRewardName).reduce(
    (prev, rewardName) => ({ ...prev, [rewardName]: getCraftingRewardItem(rewardName) }),
    {},
  );

type UnplacedObject = Omit<MapObject, "x" | "y" | "offsetX" | "offsetY" | "zIndex">;

export const getSeedUnplacedObj = (seedName: SeedName): UnplacedObject => {
  const plantName = GARDENTOWN_SEED_TO_PLANT[seedName];
  const seedImg = getSeedImage(seedName);
  const unplacedObj: UnplacedObject = {
    _name: `Gardentown ${plantName}`,
    templateId: `${GARDENTOWN_OBJ_TEMPLATE_PREFIX}${plantName}`,
    type: Interaction.COMPONENT_MODAL,
    distThreshold: 1,
    highlighted: seedImg,
    normal: seedImg,
    orientation: 0,
    width: 1,
    height: 1,
    properties: {
      componentModal: "plantInfo",
    },
  };
  return unplacedObj;
};

// ====== CUSTOM EVENTS ======
export type GardenTownPlantSeed = {
  playerId: string;
  seedName: SeedName;
  mapId: string;
  x: number;
  y: number;
};

export const MIN_NUM_PLAYERS_HARVEST = 3;

export const getPlayersAllowedHarvest = (plant: Plant) => {
  const players = Object.entries(plant.wateredBy).sort((a, b) => b[1].count - a[1].count);
  let topPlayers = players.slice(0, MIN_NUM_PLAYERS_HARVEST);
  if (topPlayers.length === MIN_NUM_PLAYERS_HARVEST) {
    const lastPlace = topPlayers[MIN_NUM_PLAYERS_HARVEST - 1]?.[1].count;
    const tiedForLast = players
      .slice(MIN_NUM_PLAYERS_HARVEST)
      .filter((player) => player[1].count === lastPlace);
    topPlayers = [...topPlayers, ...tiedForLast];
  }
  return topPlayers.map((p) => p[0]);
};

const TIMEZONE = "America/Los_Angeles";
export const happenedToday = (epochTime: number): boolean => {
  const convertedTime = convertToTZ(new Date(epochTime));
  const today = convertToTZ(new Date(Date.now()));

  return (
    convertedTime.getFullYear() === today.getFullYear() &&
    convertedTime.getMonth() === today.getMonth() &&
    convertedTime.getDate() === today.getDate()
  );
};

export const getPlantData = (plantObj: MapObject | WireObject): Plant | null =>
  parseObjCustomState<Plant>(plantObj);

const convertToTZ = (date: Date) => new Date(date.toLocaleString("en-US", { timeZone: TIMEZONE }));

// EDT    || UTC
// 12:55  || 16:55 to 17:05
// 15:55  || 19:55 to 20:05
// 0:55am || 4:55 to 5:05
const GARDENING_TIMES = [
  // { from: { hour: 5, minute: 48 }, to: { hour: 5, minute: 51 } },
  { from: { hour: 16, minute: 55 }, to: { hour: 17, minute: 5 } },
  { from: { hour: 19, minute: 55 }, to: { hour: 20, minute: 5 } },
  { from: { hour: 4, minute: 55 }, to: { hour: 5, minute: 5 } },
];

export const getIsGardeningTime = () => {
  const now = new Date();

  return GARDENING_TIMES.some((time) => {
    const fromTime = new Date().setUTCHours(time.from.hour, time.from.minute, 0, 0);
    const toTime = new Date().setUTCHours(time.to.hour, time.to.minute, 0, 0);
    if (now.getTime() > fromTime && now.getTime() < toTime) return true;

    return false;
  });
};

export const getNextGardeningTime = () => {
  const now = new Date();

  let nextGardenTime = new Date();
  nextGardenTime.setUTCDate(now.getUTCDate() + 7); // an arbitrary future date
  let nextGardenEndTime = new Date();
  nextGardenEndTime.setUTCDate(now.getUTCDate() + 7);
  GARDENING_TIMES.forEach((time) => {
    const newTime = new Date();
    newTime.setUTCHours(time.from.hour, time.from.minute, 0);
    if (newTime < now) {
      newTime.setUTCDate(newTime.getUTCDate() + 1);
    }
    if (newTime < nextGardenTime) {
      nextGardenTime = newTime;
      nextGardenEndTime = new Date();
      nextGardenEndTime.setUTCHours(time.to.hour, time.to.minute, 0);
    }
  });

  return {
    timeDiffMS: nextGardenTime.getTime() - now.getTime(),
    endTimeDiffMS: nextGardenEndTime.getTime() - now.getTime(),
    nextGardenTime,
    nextGardenEndTime,
  };
};
