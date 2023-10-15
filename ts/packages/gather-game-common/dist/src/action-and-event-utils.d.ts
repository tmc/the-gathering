import { ServerClientEvent, ClientServerAction } from "./generated_DO_NOT_TOUCH/events";
export type ServerClientEventEvent = Exclude<ServerClientEvent["event"], undefined>;
export type ServerClientEventCase = ServerClientEventEvent["$case"];
export type ClientServerActionAction = Exclude<ClientServerAction["action"], undefined>;
export type ClientServerActionCase = ClientServerActionAction["$case"];
type ActionByCase<TCase extends ClientServerActionCase> = Extract<ClientServerActionAction, {
    $case: TCase;
}>;
type ServerClientEventByCase<TCase extends ServerClientEventCase> = Extract<ServerClientEventEvent, {
    $case: TCase;
}>;
type SingleNonCaseKeyOf<TCase extends ClientServerActionCase> = keyof Omit<ActionByCase<TCase>, "$case">;
type ServerClientEventSingleNonCaseKeyOf<TCase extends ServerClientEventCase> = keyof Omit<ServerClientEventByCase<TCase>, "$case">;
export type ServerClientEventDataByCase<TCase extends ServerClientEventCase> = ServerClientEventByCase<TCase>[ServerClientEventSingleNonCaseKeyOf<TCase>];
export type ActionDataByCase<TCase extends ClientServerActionCase> = ActionByCase<TCase>[SingleNonCaseKeyOf<TCase>];
export type ServerClientEventCaseWith<T> = {
    [P in ServerClientEventCase]: ServerClientEventDataByCase<P> extends T ? Extract<ServerClientEventEvent, {
        $case: P;
    }> : never;
}[ServerClientEventCase]["$case"];
export type ServerClientEventEventWith<T> = {
    [P in ServerClientEventCaseWith<T>]?: ServerClientEventByCase<P>;
}[ServerClientEventCaseWith<T>] & {
    [P in ServerClientEventCaseWith<T>]?: ServerClientEventDataByCase<P>;
};
export {};
