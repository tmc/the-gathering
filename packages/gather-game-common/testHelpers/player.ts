import { factories } from "./factories";

export const buildTestPlayer = (playerId: string, mapId: string) =>
  factories.player.transient({ id: playerId }).build({ map: mapId });
