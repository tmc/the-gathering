import { SpaceItem } from "../generated_DO_NOT_TOUCH/events";
import { SeedName } from "./RemoteWorkGardenTown";

export type FishingItem = {
  name: FishName | SeedName | JunkName;
  rarity?: number;
  personality?: string;
  category?: string;
};

export enum FishName {
  Salmon = "Salmon",
  Trout = "Trout",
  Bass = "Bass",
}

export enum JunkName {
  CyberpunkWaste = "Cyberpunk Waste",
  Anchor = "Anchor",
  Kelp = "Kelp",
}

export const getFishingItemNameToImage = (name: string) =>
  `https://cdn.gather.town/v0/b/gather-town.appspot.com/o/manually-uploaded%2Ffishing%2F${name
    .toUpperCase()
    .split(" ")
    .join("_")}.png?alt=media`;

export const getFishItem = (fishName: FishName): SpaceItem => {
  const previewUrl = getFishingItemNameToImage(fishName);

  const item: SpaceItem = {
    name: fishName,
    category: "Fishing",
    previewUrl,
    meta: {},
    abilities: {},
  };
  return item;
};

export const getAllFishItems = (): { [fishName: string]: SpaceItem } =>
  Object.values(FishName).reduce(
    (prev, fishName) => ({ ...prev, [fishName]: getFishItem(fishName) }),
    {},
  );

export const getJunkItem = (junkName: JunkName): SpaceItem => {
  const previewUrl = getFishingItemNameToImage(junkName);

  const item: SpaceItem = {
    name: junkName,
    category: "Fishing Junk",
    previewUrl,
    meta: {},
    abilities: {},
  };
  return item;
};

export const getAllJunkItems = (): { [junkName: string]: SpaceItem } =>
  Object.values(JunkName).reduce(
    (prev, junkName) => ({ ...prev, [junkName]: getJunkItem(junkName) }),
    {},
  );
