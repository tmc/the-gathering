import { Player } from "@gathertown/gather-game-common/dist/src/public/player";
import { GameEventEvent } from "./GameEventUtils";
import { Game } from "./Game";
import { GameMap } from "./GameMap";

export interface ServerClientEventContext {
  /**
   * The space this client is operating on. Mostly for convenience
   */
  spaceId: string;
  /**
   * If encId is present on the incoming event, then _player_ will be populated here. You are not guaranteed completeness in the player object, some fields may be undefined.
   */
  player?: Partial<Player>;
  /**
   * If encIdTarget is present on the incoming event, then _target_ will be populated. You are not guaranteed completeness, just like player; it's whatever is in the state.
   */
  target?: Partial<Player>;
  /**
   * The uid of the player, if present.
   */
  playerId?: string;
  /**
   * The uid of the target, if present.
   */
  targetId?: string;
  /**
   * If mapId is present on the incoming event, then _map_ will be populated. You are not guaranteed completeness in the map object.
   */
  map?: Partial<GameMap>;
}

export type SyntheticEventContext = ServerClientEventContext;

export type GameEventContext = ServerClientEventContext | SyntheticEventContext;

export function fillOrCreateContext(event: GameEventEvent, game: Game, context?: GameEventContext) {
  if (!context) {
    context = { spaceId: game.spaceId ?? "" };
  }
  // We know what we're doing here, so it's fine+necessary to cast to any. Be careful doing this in general though!
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // Lint warning auto-ignored when enabling the consistent-type-assertions rule. no-explicit-any is also auto-ignored b/c these 2 rules often apply on the same line.
  // You should almost never be using type assertions! TODO: @ENG-4304 Remove these comments and the type assertion next time this code is edited.
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-explicit-any
  const eventAny = (event as any)[event.$case];
  if (eventAny["encId"]) {
    const { encId } = eventAny;
    const uid = game.getPlayerUidFromEncId(encId);
    // don't override player if already set by handler
    // @ts-expect-error Error auto-ignored when enabling TS noUncheckedIndexedAccess. If you're already touching this code, please clean this up while you're at it.
    // TODO: @ENG-4257 Clean these up! See the linear task for more context and advice for cleaning up.
    context.player = context.player || game.players[uid];
    context.playerId = uid;
  }
  if (eventAny["encIdTarget"]) {
    const { encIdTarget } = eventAny;
    const uidTarget = game.getPlayerUidFromEncId(encIdTarget);
    // @ts-expect-error Error auto-ignored when enabling TS noUncheckedIndexedAccess. If you're already touching this code, please clean this up while you're at it.
    // TODO: @ENG-4257 Clean these up! See the linear task for more context and advice for cleaning up.
    context.target = game.players[uidTarget];
    context.targetId = uidTarget;
  }
  if (eventAny["mapId"]) {
    const { mapId } = eventAny;
    context.map = game.partialMaps[mapId];
  }
  return context;
}
