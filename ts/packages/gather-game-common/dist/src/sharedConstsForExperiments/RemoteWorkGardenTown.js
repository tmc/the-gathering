"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var RemoteWorkGardenTown_exports = {};
__export(RemoteWorkGardenTown_exports, {
  CraftingAbilityRewardName: () => CraftingAbilityRewardName,
  CraftingRewardName: () => CraftingRewardName,
  CraftingRewardObjectName: () => CraftingRewardObjectName,
  DEFAULT_PLANT_STAGES: () => DEFAULT_PLANT_STAGES,
  GARDENTOWN_PLANTER_PREFIX: () => GARDENTOWN_PLANTER_PREFIX,
  GARDENTOWN_REWARD_TO_PLANT: () => GARDENTOWN_REWARD_TO_PLANT,
  GARDENTOWN_SEED_TO_PLANT: () => GARDENTOWN_SEED_TO_PLANT,
  MIN_NUM_PLAYERS_HARVEST: () => MIN_NUM_PLAYERS_HARVEST,
  PLANT_INFO_MAP: () => PLANT_INFO_MAP,
  PlantDifficulty: () => PlantDifficulty,
  PlantHealth: () => PlantHealth,
  PlantName: () => PlantName,
  PlantRewardName: () => PlantRewardName,
  PlantStage: () => PlantStage,
  RewardName: () => RewardName,
  SeedName: () => SeedName,
  getAllCraftingRewardItems: () => getAllCraftingRewardItems,
  getAllPlantRewardItems: () => getAllPlantRewardItems,
  getAllSeedItems: () => getAllSeedItems,
  getCraftedRewardImage: () => getCraftedRewardImage,
  getCraftingRewardItem: () => getCraftingRewardItem,
  getHarvestImage: () => getHarvestImage,
  getIsGardeningTime: () => getIsGardeningTime,
  getNextGardeningTime: () => getNextGardeningTime,
  getPlantData: () => getPlantData,
  getPlantImage: () => getPlantImage,
  getPlantNameFromTemplateId: () => getPlantNameFromTemplateId,
  getPlantRewardItem: () => getPlantRewardItem,
  getPlayersAllowedHarvest: () => getPlayersAllowedHarvest,
  getSeedImage: () => getSeedImage,
  getSeedItem: () => getSeedItem,
  getSeedUnplacedObj: () => getSeedUnplacedObj,
  happenedToday: () => happenedToday,
  isGardenTownPlant: () => isGardenTownPlant,
  isGardenTownPlanter: () => isGardenTownPlanter
});
module.exports = __toCommonJS(RemoteWorkGardenTown_exports);
var import_gameMap = require("../public/gameMap");
var import_utils = require("../public/utils");
const GARDENTOWN_OBJ_TEMPLATE_PREFIX = "GARDENTOWN_";
const GARDENTOWN_PLANTER_PREFIX = "GardenTownRaisedBed_";
var PlantDifficulty = /* @__PURE__ */ ((PlantDifficulty2) => {
  PlantDifficulty2["EASY"] = "Easy";
  PlantDifficulty2["MEDIUM"] = "Medium";
  PlantDifficulty2["HARD"] = "Hard";
  PlantDifficulty2["VERY_HARD"] = "Very Hard";
  return PlantDifficulty2;
})(PlantDifficulty || {});
var PlantStage = /* @__PURE__ */ ((PlantStage2) => {
  PlantStage2["DIRT"] = "DIRT";
  PlantStage2["SEEDLING"] = "SEEDLING";
  PlantStage2["SPROUT"] = "SPROUT";
  PlantStage2["BUDDING"] = "BUDDING";
  PlantStage2["FLOWERING"] = "FLOWERING";
  PlantStage2["HARVESTABLE"] = "HARVESTABLE";
  return PlantStage2;
})(PlantStage || {});
const DEFAULT_PLANT_STAGES = [
  "DIRT" /* DIRT */,
  "SEEDLING" /* SEEDLING */,
  "SPROUT" /* SPROUT */,
  "BUDDING" /* BUDDING */,
  "FLOWERING" /* FLOWERING */,
  "HARVESTABLE" /* HARVESTABLE */
];
var PlantHealth = /* @__PURE__ */ ((PlantHealth2) => {
  PlantHealth2["HEALTHY"] = "HEALTHY";
  PlantHealth2["WILTING"] = "WILTING";
  PlantHealth2["DEAD"] = "DEAD";
  return PlantHealth2;
})(PlantHealth || {});
var SeedName = /* @__PURE__ */ ((SeedName2) => {
  SeedName2["GRASS_SEED"] = "Grass Seed";
  SeedName2["ROSE_SEED"] = "Rose Seed";
  SeedName2["MUM_SEED"] = "Mum Seed";
  SeedName2["POPPY_SEED"] = "Poppy Seed";
  SeedName2["ORCHID_SEED"] = "Orchid Seed";
  SeedName2["RASPBERRY_SEED"] = "Raspberry Seed";
  SeedName2["BROCCOLI_SEED"] = "Broccoli Seed";
  SeedName2["POTATO_SEED"] = "Potato Seed";
  SeedName2["SWEETPOTATO_SEED"] = "Sweet Potato Seed";
  SeedName2["PINEAPPLE_SEED"] = "Pineapple Seed";
  SeedName2["TULIP_SEED"] = "Tulip Seed";
  SeedName2["WATERMELON_SEED"] = "Watermelon Seed";
  return SeedName2;
})(SeedName || {});
var PlantRewardName = /* @__PURE__ */ ((PlantRewardName2) => {
  PlantRewardName2["GRASS_HARVEST"] = "Grass";
  PlantRewardName2["ROSE_HARVEST"] = "Rose";
  PlantRewardName2["MUM_HARVEST"] = "Mum";
  PlantRewardName2["POPPY_HARVEST"] = "Poppy";
  PlantRewardName2["ORCHID_HARVEST"] = "Orchid";
  PlantRewardName2["RASPBERRY_HARVEST"] = "Raspberry";
  PlantRewardName2["BROCCOLI_HARVEST"] = "Broccoli";
  PlantRewardName2["POTATO_HARVEST"] = "Potato";
  PlantRewardName2["SWEETPOTATO_HARVEST"] = "Sweet Potato";
  PlantRewardName2["PINEAPPLE_HARVEST"] = "Pineapple";
  PlantRewardName2["TULIP_HARVEST"] = "Tulip";
  PlantRewardName2["WATERMELON_HARVEST"] = "Watermelon";
  return PlantRewardName2;
})(PlantRewardName || {});
var CraftingRewardObjectName = /* @__PURE__ */ ((CraftingRewardObjectName2) => {
  CraftingRewardObjectName2["GRASS_PATCH"] = "Grass Patch";
  CraftingRewardObjectName2["BROCCOLI_BENCH"] = "Broccoli Bench";
  CraftingRewardObjectName2["PINEAPPLE_HEAD_SCARECROW"] = "Pineapple Head Scarecrow";
  CraftingRewardObjectName2["DANCING_FLOWER_POT"] = "Dancing Flower Pot";
  return CraftingRewardObjectName2;
})(CraftingRewardObjectName || {});
var CraftingAbilityRewardName = /* @__PURE__ */ ((CraftingAbilityRewardName2) => {
  CraftingAbilityRewardName2["FROG_GUN"] = "Frog Gun";
  CraftingAbilityRewardName2["DANCE_BOMB"] = "Dance Bomb";
  CraftingAbilityRewardName2["SPEED_POTION"] = "Speed Potion";
  return CraftingAbilityRewardName2;
})(CraftingAbilityRewardName || {});
const CraftingRewardName = { ...CraftingRewardObjectName, ...CraftingAbilityRewardName };
const RewardName = {
  ...PlantRewardName,
  ...CraftingRewardName
};
var PlantName = /* @__PURE__ */ ((PlantName2) => {
  PlantName2["GRASS"] = "GRASS";
  PlantName2["ROSE"] = "ROSE";
  PlantName2["MUM"] = "MUM";
  PlantName2["POPPY"] = "POPPY";
  PlantName2["ORCHID"] = "ORCHID";
  PlantName2["RASPBERRY"] = "RASPBERRY";
  PlantName2["POTATO"] = "POTATO";
  PlantName2["BROCCOLI"] = "BROCCOLI";
  PlantName2["SWEETPOTATO"] = "SWEETPOTATO";
  PlantName2["PINEAPPLE"] = "PINEAPPLE";
  PlantName2["TULIP"] = "TULIP";
  PlantName2["WATERMELON"] = "WATERMELON";
  return PlantName2;
})(PlantName || {});
const GARDENTOWN_SEED_TO_PLANT = {
  ["Grass Seed" /* GRASS_SEED */]: "GRASS" /* GRASS */,
  ["Rose Seed" /* ROSE_SEED */]: "ROSE" /* ROSE */,
  ["Mum Seed" /* MUM_SEED */]: "MUM" /* MUM */,
  ["Poppy Seed" /* POPPY_SEED */]: "POPPY" /* POPPY */,
  ["Orchid Seed" /* ORCHID_SEED */]: "ORCHID" /* ORCHID */,
  ["Raspberry Seed" /* RASPBERRY_SEED */]: "RASPBERRY" /* RASPBERRY */,
  ["Broccoli Seed" /* BROCCOLI_SEED */]: "BROCCOLI" /* BROCCOLI */,
  ["Potato Seed" /* POTATO_SEED */]: "POTATO" /* POTATO */,
  ["Sweet Potato Seed" /* SWEETPOTATO_SEED */]: "SWEETPOTATO" /* SWEETPOTATO */,
  ["Pineapple Seed" /* PINEAPPLE_SEED */]: "PINEAPPLE" /* PINEAPPLE */,
  ["Tulip Seed" /* TULIP_SEED */]: "TULIP" /* TULIP */,
  ["Watermelon Seed" /* WATERMELON_SEED */]: "WATERMELON" /* WATERMELON */
};
const GARDENTOWN_REWARD_TO_PLANT = {
  [RewardName.GRASS_HARVEST]: "GRASS" /* GRASS */,
  [RewardName.ROSE_HARVEST]: "ROSE" /* ROSE */,
  [RewardName.MUM_HARVEST]: "MUM" /* MUM */,
  [RewardName.POPPY_HARVEST]: "POPPY" /* POPPY */,
  [RewardName.ORCHID_HARVEST]: "ORCHID" /* ORCHID */,
  [RewardName.RASPBERRY_HARVEST]: "RASPBERRY" /* RASPBERRY */,
  [RewardName.BROCCOLI_HARVEST]: "BROCCOLI" /* BROCCOLI */,
  [RewardName.POTATO_HARVEST]: "POTATO" /* POTATO */,
  [RewardName.SWEETPOTATO_HARVEST]: "SWEETPOTATO" /* SWEETPOTATO */,
  [RewardName.PINEAPPLE_HARVEST]: "PINEAPPLE" /* PINEAPPLE */,
  [RewardName.TULIP_HARVEST]: "TULIP" /* TULIP */,
  [RewardName.WATERMELON_HARVEST]: "WATERMELON" /* WATERMELON */
};
const PLANT_INFO_MAP = {
  ["GRASS" /* GRASS */]: {
    displayName: "Grass",
    difficulty: "Easy" /* EASY */,
    growTime: 1,
    numDailyWaters: 2,
    reward: RewardName.GRASS_HARVEST
  },
  ["ROSE" /* ROSE */]: {
    displayName: "Rose",
    difficulty: "Easy" /* EASY */,
    growTime: 1,
    numDailyWaters: 2,
    reward: RewardName.ROSE_HARVEST
  },
  ["MUM" /* MUM */]: {
    displayName: "Mum",
    difficulty: "Easy" /* EASY */,
    growTime: 1,
    numDailyWaters: 2,
    reward: RewardName.MUM_HARVEST
  },
  ["POPPY" /* POPPY */]: {
    displayName: "Poppy",
    difficulty: "Easy" /* EASY */,
    growTime: 1,
    numDailyWaters: 2,
    reward: RewardName.POPPY_HARVEST
  },
  ["ORCHID" /* ORCHID */]: {
    displayName: "Orchid",
    difficulty: "Easy" /* EASY */,
    growTime: 1,
    numDailyWaters: 2,
    reward: RewardName.ORCHID_HARVEST
  },
  ["RASPBERRY" /* RASPBERRY */]: {
    displayName: "Raspberry",
    difficulty: "Easy" /* EASY */,
    growTime: 2,
    numDailyWaters: 2,
    reward: RewardName.RASPBERRY_HARVEST
  },
  ["POTATO" /* POTATO */]: {
    displayName: "Potato",
    difficulty: "Easy" /* EASY */,
    growTime: 2,
    numDailyWaters: 2,
    reward: RewardName.POTATO_HARVEST
  },
  ["BROCCOLI" /* BROCCOLI */]: {
    displayName: "Broccoli",
    difficulty: "Medium" /* MEDIUM */,
    growTime: 7,
    numDailyWaters: 4,
    reward: RewardName.BROCCOLI_HARVEST
  },
  ["TULIP" /* TULIP */]: {
    displayName: "Tulip",
    difficulty: "Medium" /* MEDIUM */,
    growTime: 7,
    numDailyWaters: 4,
    reward: RewardName.TULIP_HARVEST
  },
  ["SWEETPOTATO" /* SWEETPOTATO */]: {
    displayName: "Sweet Potato",
    difficulty: "Medium" /* MEDIUM */,
    growTime: 7,
    numDailyWaters: 4,
    reward: RewardName.SWEETPOTATO_HARVEST
  },
  ["PINEAPPLE" /* PINEAPPLE */]: {
    displayName: "Pineapple",
    difficulty: "Very Hard" /* VERY_HARD */,
    growTime: 21,
    numDailyWaters: 10,
    reward: RewardName.PINEAPPLE_HARVEST
  },
  ["WATERMELON" /* WATERMELON */]: {
    displayName: "Watermelon",
    difficulty: "Very Hard" /* VERY_HARD */,
    growTime: 21,
    numDailyWaters: 10,
    reward: RewardName.WATERMELON_HARVEST
  }
};
const getPlantImage = (plant) => {
  if (plant.stage === "DIRT" /* DIRT */)
    return `https://cdn.gather.town/v0/b/gather-town.appspot.com/o/manually-uploaded%2Fgardentown_new%2FDIRT_MOUND.png?alt=media`;
  if (plant.health === "DEAD" /* DEAD */)
    return "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/manually-uploaded%2Fgardentown_new%2FBROCCOLI_BUDDING_DEAD.png?alt=media&token=b3d75aa9-318c-4f4c-939f-3f692acda074";
  return `https://cdn.gather.town/v0/b/gather-town.appspot.com/o/manually-uploaded%2Fgardentown_new%2F${plant.name}_${plant.stage}_${plant.health}.png?alt=media`;
};
const getSeedImage = (seedName) => {
  const plantName = GARDENTOWN_SEED_TO_PLANT[seedName];
  return `https://cdn.gather.town/v0/b/gather-town.appspot.com/o/manually-uploaded%2Fgardentown_new%2F${plantName}_SEED.png?alt=media`;
};
const getHarvestImage = (rewardName) => {
  const plantName = GARDENTOWN_REWARD_TO_PLANT[rewardName];
  return `https://cdn.gather.town/v0/b/gather-town.appspot.com/o/manually-uploaded%2Fgardentown_new%2F${plantName}_HARVEST.png?alt=media`;
};
const getCraftedRewardImage = (rewardName) => `https://cdn.gather.town/v0/b/gather-town.appspot.com/o/manually-uploaded%2Fgardentown_new%2F${rewardName}_CRAFTED.png?alt=media`;
const isGardenTownPlant = (templateId) => templateId.startsWith(GARDENTOWN_OBJ_TEMPLATE_PREFIX);
const isGardenTownPlanter = (templateId) => templateId.startsWith(GARDENTOWN_PLANTER_PREFIX);
const getPlantNameFromTemplateId = (templateId) => {
  if (isGardenTownPlant(templateId)) {
    const suffix = templateId.slice(11);
    if (Object.values(PlantName).includes(suffix))
      return suffix;
  }
  return null;
};
const getSeedItem = (seedName) => {
  const plant = GARDENTOWN_SEED_TO_PLANT[seedName];
  const previewUrl = getSeedImage(seedName);
  const item = {
    name: seedName,
    category: "Gardentown Seeds",
    previewUrl,
    meta: { plant },
    abilities: {}
  };
  return item;
};
const getAllSeedItems = () => Object.values(SeedName).reduce(
  (prev, seedName) => ({ ...prev, [seedName]: getSeedItem(seedName) }),
  {}
);
const getPlantRewardItem = (rewardName) => {
  const plant = GARDENTOWN_REWARD_TO_PLANT[rewardName];
  const previewUrl = getHarvestImage(rewardName);
  const item = {
    name: rewardName,
    category: "Gardentown Rewards",
    previewUrl,
    meta: { plant },
    abilities: {}
  };
  return item;
};
const getAllPlantRewardItems = () => Object.values(PlantRewardName).reduce(
  (prev, rewardName) => ({ ...prev, [rewardName]: getPlantRewardItem(rewardName) }),
  {}
);
const getCraftingRewardItem = (rewardName) => {
  const previewUrl = getCraftedRewardImage(rewardName);
  const item = {
    name: rewardName,
    category: "Gardentown Rewards",
    previewUrl,
    meta: {},
    abilities: {}
  };
  return item;
};
const getAllCraftingRewardItems = () => Object.values(CraftingRewardName).reduce(
  (prev, rewardName) => ({ ...prev, [rewardName]: getCraftingRewardItem(rewardName) }),
  {}
);
const getSeedUnplacedObj = (seedName) => {
  const plantName = GARDENTOWN_SEED_TO_PLANT[seedName];
  const seedImg = getSeedImage(seedName);
  const unplacedObj = {
    _name: `Gardentown ${plantName}`,
    templateId: `${GARDENTOWN_OBJ_TEMPLATE_PREFIX}${plantName}`,
    type: import_gameMap.Interaction.COMPONENT_MODAL,
    distThreshold: 1,
    highlighted: seedImg,
    normal: seedImg,
    orientation: 0,
    width: 1,
    height: 1,
    properties: {
      componentModal: "plantInfo"
    }
  };
  return unplacedObj;
};
const MIN_NUM_PLAYERS_HARVEST = 3;
const getPlayersAllowedHarvest = (plant) => {
  var _a;
  const players = Object.entries(plant.wateredBy).sort((a, b) => b[1].count - a[1].count);
  let topPlayers = players.slice(0, MIN_NUM_PLAYERS_HARVEST);
  if (topPlayers.length === MIN_NUM_PLAYERS_HARVEST) {
    const lastPlace = (_a = topPlayers[MIN_NUM_PLAYERS_HARVEST - 1]) == null ? void 0 : _a[1].count;
    const tiedForLast = players.slice(MIN_NUM_PLAYERS_HARVEST).filter((player) => player[1].count === lastPlace);
    topPlayers = [...topPlayers, ...tiedForLast];
  }
  return topPlayers.map((p) => p[0]);
};
const TIMEZONE = "America/Los_Angeles";
const happenedToday = (epochTime) => {
  const convertedTime = convertToTZ(new Date(epochTime));
  const today = convertToTZ(new Date(Date.now()));
  return convertedTime.getFullYear() === today.getFullYear() && convertedTime.getMonth() === today.getMonth() && convertedTime.getDate() === today.getDate();
};
const getPlantData = (plantObj) => (0, import_utils.parseObjCustomState)(plantObj);
const convertToTZ = (date) => new Date(date.toLocaleString("en-US", { timeZone: TIMEZONE }));
const GARDENING_TIMES = [
  { from: { hour: 16, minute: 55 }, to: { hour: 17, minute: 5 } },
  { from: { hour: 19, minute: 55 }, to: { hour: 20, minute: 5 } },
  { from: { hour: 4, minute: 55 }, to: { hour: 5, minute: 5 } }
];
const getIsGardeningTime = () => {
  const now = new Date();
  return GARDENING_TIMES.some((time) => {
    const fromTime = new Date().setUTCHours(time.from.hour, time.from.minute, 0, 0);
    const toTime = new Date().setUTCHours(time.to.hour, time.to.minute, 0, 0);
    if (now.getTime() > fromTime && now.getTime() < toTime)
      return true;
    return false;
  });
};
const getNextGardeningTime = () => {
  const now = new Date();
  let nextGardenTime = new Date();
  nextGardenTime.setUTCDate(now.getUTCDate() + 7);
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
    nextGardenEndTime
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftingAbilityRewardName,
  CraftingRewardName,
  CraftingRewardObjectName,
  DEFAULT_PLANT_STAGES,
  GARDENTOWN_PLANTER_PREFIX,
  GARDENTOWN_REWARD_TO_PLANT,
  GARDENTOWN_SEED_TO_PLANT,
  MIN_NUM_PLAYERS_HARVEST,
  PLANT_INFO_MAP,
  PlantDifficulty,
  PlantHealth,
  PlantName,
  PlantRewardName,
  PlantStage,
  RewardName,
  SeedName,
  getAllCraftingRewardItems,
  getAllPlantRewardItems,
  getAllSeedItems,
  getCraftedRewardImage,
  getCraftingRewardItem,
  getHarvestImage,
  getIsGardeningTime,
  getNextGardeningTime,
  getPlantData,
  getPlantImage,
  getPlantNameFromTemplateId,
  getPlantRewardItem,
  getPlayersAllowedHarvest,
  getSeedImage,
  getSeedItem,
  getSeedUnplacedObj,
  happenedToday,
  isGardenTownPlant,
  isGardenTownPlanter
});
//# sourceMappingURL=RemoteWorkGardenTown.js.map
