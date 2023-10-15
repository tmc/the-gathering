/**
 * Uses Fishery (https://github.com/thoughtbot/fishery) to build factories, similar to Rails factory_bot.
 * Test object factories are ideal ways to create typed, complete test objects that allow the test to
 * focus on the bits of data that actually matter, and none of the extra. Further discussion here:
 * https://thoughtbot.com/blog/announcing-fishery-a-javascript-and-typescript-factory-library
 *
 * We might want to consider breaking out into separate files, following a structure of:
 *
 *     testHelpers/factories/index.ts  (imports all siblings)
 *     testHelpers/factories/*.ts      (one per logical domain model)
 *
 * But let's keep it simple and in a single file for now, and evolve that later.
 */

import { Factory } from "fishery";
import { Player } from "../src/Player";
import { generateDefaultPlayer } from "../src/playerUtils";
import { InteractionEnum_ENUM, WireObject } from "../src/public/events";
import { MapObjectDB, Nook } from "../src";

/**
 * Add new factories here! Follow this pattern: https://github.com/thoughtbot/fishery#define-factories.
 * Then export them at the bottom of the file. Naming convention is mockSomeModel.
 */

export const getDefaultMockPlayerName = (playerId: string | number) => `player ${playerId}`;

const mockPlayer = Factory.define<Player, { id?: string }>(({ sequence, transientParams }) => {
  const playerId = transientParams.id || sequence;
  return {
    ...generateDefaultPlayer(playerId.toString()),
    name: getDefaultMockPlayerName(playerId),
    x: 1,
    y: 1,
  };
});

const baseObjectData = {
  width: 10,
  height: 10,
  normal: "testObject.png",
  x: 0,
  y: 0,
  offsetX: 0,
  offsetY: 0,
  _tags: [],
  type: InteractionEnum_ENUM.NONE,
};
const mockWireObject = Factory.define<WireObject, { interactable?: boolean }>(
  ({ params, transientParams: { interactable = true }, sequence }) => ({
    ...baseObjectData,
    id: params.id ?? `wire-object-${sequence.toString()}`,
    type: interactable ? InteractionEnum_ENUM.EMBEDDED_WEBSITE : InteractionEnum_ENUM.NONE,
    propertiesJson: "{}",
    zIndex: sequence,
  }),
);
const mockMapObjectDB = Factory.define<MapObjectDB>(({ params, sequence }) => ({
  ...baseObjectData,
  id: params.id ?? `map-object-${sequence.toString()}`,
  properties: {},
  zIndex: sequence,
}));

const mockNook = Factory.define<Nook>(({ sequence, params, transientParams }) => {
  const id = sequence.toString();
  return {
    name: `Nook ${id}`,
    nookCoords: {
      coords: transientParams.coords,
    },
    isDesk: params.isDesk ?? false,
  };
});

export const factories = {
  player: mockPlayer,
  wireObject: mockWireObject,
  mapObjectDB: mockMapObjectDB,
  nook: mockNook,
};
