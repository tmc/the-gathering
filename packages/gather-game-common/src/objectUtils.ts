import { WireObject } from "./public/events";
import { MapObject } from "./public/gameMap";
import { nanoid } from "nanoid/non-secure";

export function parseObjCustomState<T>(obj: MapObject | WireObject): T | null {
  const state = obj?.customState;
  if (state) {
    try {
      return JSON.parse(state);
    } catch (e) {
      console.log("error getting custom state");
    }
  }
  return null;
}

// this applies to copying spawn id, private space id, desk id, etc.
export const generateNewId = (currId: string, idList: string[]): string => {
  const digitsAtEndMatch = currId.match(/\d+$/);
  let newId: string;
  if (digitsAtEndMatch && digitsAtEndMatch[0]) {
    const indexOfDigits = currId.indexOf(digitsAtEndMatch[0]);
    newId = currId.substring(0, indexOfDigits) + (parseInt(digitsAtEndMatch[0], 10) + 1);
  } else {
    newId = currId + "-2";
  }

  if (idList.includes(newId)) {
    return generateNewId(newId, idList);
  } else {
    return newId;
  }
};

// returns a string of length 4 which doesn't already exist in the dict
export const getUnusedObjectKey = (takenKeys: { [k: string]: unknown }): string => {
  let count = 0;
  let k = "";
  do {
    if (count++ > 10000) {
      throw new Error("can't find a key after 10k attempts, throwing to avoid an infinite loop");
    }
    // don't make this >4 or you'll create invalid MapObjects
    k = nanoid(4);
  } while (k in takenKeys);
  return k;
};
