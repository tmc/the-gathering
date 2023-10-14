import {
  ServerClientEventCase,
  ServerClientEventEvent,
} from "@gathertown/gather-game-common/dist/src/public/utils";
import { SyntheticEvent } from "./synthetic/SyntheticEvent";
import { GameEvent } from "./GameEvent";

export type {
  ServerClientEventCase,
  ServerClientEventEvent,
  ServerClientEventEventWith,
} from "@gathertown/gather-game-common/dist/src/public/utils";

// This is a union of all possible values for the `event` field of SyntheticEvent.
export type SyntheticEventEvent = Exclude<SyntheticEvent["event"], undefined>;

// This is a union of all possible values for the `event` field of GameEvent.
export type GameEventEvent = Exclude<GameEvent["event"], undefined>;

// This is a union of all possible string values for `$case`,
export type GameEventCase = GameEventEvent["$case"];

type EventByCase<TEvent extends GameEventEvent, TCase extends GameEventCase> = TEvent extends {
  $case: TCase;
}
  ? TEvent
  : never;

export type ServerClientEventByCase<T extends ServerClientEventCase> = EventByCase<
  ServerClientEventEvent,
  T
>;

export type GameEventByCase<T extends GameEventCase> = EventByCase<GameEventEvent, T>;

// FYI: similar types for actions in action-and-event-utils.ts
