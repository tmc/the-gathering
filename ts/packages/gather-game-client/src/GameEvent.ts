import { ServerClientEvent } from ".";
import { SyntheticEvent } from "./synthetic/SyntheticEvent";

export type GameEvent = ServerClientEvent | SyntheticEvent;
