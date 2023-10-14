// A bunch of facncy helper types for actions and events. Kind of hard to reason about, this TS Playground helped me:
// https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgNLAQa2QbwL4BQoksiKAyhGOWHGAK4DOuByyjtDjAXO2FKADmAbgKEi4aPCTIAwgBtgEcJSgA3aAEEEYYAHsQLNol0GA-LxzIAJAjiMIvAEQPqnJk+HsqNOk16Ubn7MeMgAPrg2dg7OmBiYnshxWLzoWMh4ouIEAPQ5yCb6IAC0cCAAJsUQGuDF9LryjARgAJ4ADigKSirQGlDapiADRcgAvMgAogAeCPL05RAAPF3K1L1aOkUA2k6FBk4AugA0yPQVEDCgEOUAfKKtHXKKq6p9wway9ijjKz3qG4N3iAdrYvodRLl8oI4ABbCBVGpgOoNJrNdooIEAIRanwciwAKriUBAppAKsxfmt-v1Nh8vjcxpNSVATItWE9ulS3rShjyjuyrKCYshCV8MgQ7gQ0Y9yEJ5BAAHJ0hyoCAtADyMAJROQJLJ5Qpzz+3MGRIZ40war0MGQ6phwDAbLYWJxX219P5bCcQogTglEJJbT0UDAyAeGJ5ABE6HBsUT3Q5daTlAaOS91jTTfSxuyXfHRQ4bltZSBBPKlSAiaqNVqCxAbgcIQQEAYOMgAPqQDgARl4QOjtDjbpcPncjCc5siHGCzi7ulLTgyohbIDbnYgHAATH2ozGh3iR0EuBPGVZ7OUYM5XL5j0vkHl2AALPT0eTlZDwYDyKVSh8AcVhCAADowCaGAzh5XVSyuSgKiBAAKPYQF4SlXgBIogQASiMZAV0YPR5SA+Q9EERCeUwrwHxMeg4HkeQWmQco9A3ZA9DAR9oD4egYBtAAjepkAAdxQAArJhQzsKAUDgXiX1DdiUHAkBIMYYBBBAPwpLEX98jsQx1QVAAZABNZBMQmORNEMwyJkjZAAHUAEl8QACUmAANAAFQzHNkZyCh5Rz3wAQlCtgWhfRiDAAclDQQqDDdF2DgGAqAY4AbQdaLmBANjgoIJSVJTIFNwTYlk3JNNjXQ5V63g9kkKC3g609ALBgHOAd3avdXTxOsbn5bCcHZZRBBg4qeXg4a2DYH1eEa8pWrYLYFoOebd1oVqHxgYN2D0OFkCk+wDBOBSPwgwZ2DUjSGCkqCdqgJBmHYugww4tqiiCgoKkYmNkBhOgEEfE5+NDfFyCEmLQ3lUMDv4r93wdZAOK0tgH0ct7QGwJHH3sMM9CioSHUfN7FJMN7XrrXCXzfZBeJQfC4XYoRkEUS1kHgpxkgScJkEPG8PEwk5BMfDASeAZgRYYgwUGtUmk1hNp5WYeniMEp8affT95DpgSmI3EBYvZUI8bOTBcsEww8dQjMgSwrIdLDDdQIIBw4J5TdOevMcnBOKxpy4WdnaERc8Ao12JsGT3+Z9v2CkYC8g44EOMgo+98kYZ9Xy1uAvwj92o690dgl93Aw8ojOs9p7WOYWRg2gdFB6ZZtRaOALXdrSTBMPz8oSs57nS-9sck-nQRQ7Th9BODTBGCAoSIGAKB31Bj8rmaiGYeYCL6GQNp7GYUAk34OAuJ4qU3b7j34IAWToR8gJZCp9vg7DFmQAAGICAFZkDMZBsrFy4NFZAsR4hD3LunDW2cPy5x1qvfWjBDahmKMUTGh9nrvUzsGMALZ7SllYjaZmzAmbPnKLwJGANpYgHonTFAdg6LXCJuxb6SYlYYCRgtXu-cY4lxOHfdij8yhMRhK-ZA78v6-3-jgAO-gnBQCcKESwkCHzYJgdrH8OkcgACpdF6P0QY7Re96AAC8THyl4CLOg2V5blAyqlKSykm5UGEsoPeB8WZH1PoVS6ahmCM3KuwhASNygxjMGYKUPiRiMHoLxRgCABD03xHoIEBJj4pkNJyNCmYihmnqsYQK5CRStXbLjCo8ooC8HgqE2gKEjRchqiAfcSx8Q3GwqMBkag9Dt0GjhPCBFgLEVIgtHu4gokGHYLE+JiSIDJJKmkvUGSqoNJybVG4+SPoGCasU9k7YkJ1KybbHkzSCQDQIENdk-TCJDLIoMIKoyL5TIScAJJKTJq8OPCcRC7SGRXMGSRRCQFvbBEwj3GJcTnmvJ4cCz5uA5p8xhR4E4iKeC4Fkailwiiw6uyeTMuZ7yUWl2+WMX5rYBlEQBXAIC3NQVQLUdXOBOKIV4reYXD5SK4XREcHzQeJxubKLDnSquOcvy61DIg5BTLpkvNmayooRcjwcsQgc9M1I8zDkHm0kl1NVzkpuXAWlqjhWwLzuC6VULr7svHH7eFXNwF8viAK+OyzsnqoPJq7CRrNYmvgXrZiSCjZAA

import { ServerClientEvent, ClientServerAction } from "./generated_DO_NOT_TOUCH/events";

// This is a union of all possible values for the `event` field of ServerClientEvent.
export type ServerClientEventEvent = Exclude<ServerClientEvent["event"], undefined>;

// This is a union of all possible string values for `$case`.
export type ServerClientEventCase = ServerClientEventEvent["$case"];
// This is a union of all possible values for the `action` field of ClientServerAction.
export type ClientServerActionAction = Exclude<ClientServerAction["action"], undefined>;
export type ClientServerActionCase = ClientServerActionAction["$case"];

type ActionByCase<TCase extends ClientServerActionCase> = Extract<
  ClientServerActionAction,
  { $case: TCase }
>;

type ServerClientEventByCase<TCase extends ServerClientEventCase> = Extract<
  ServerClientEventEvent,
  { $case: TCase }
>;

type SingleNonCaseKeyOf<TCase extends ClientServerActionCase> = keyof Omit<
  ActionByCase<TCase>,
  "$case"
>;

type ServerClientEventSingleNonCaseKeyOf<TCase extends ServerClientEventCase> = keyof Omit<
  ServerClientEventByCase<TCase>,
  "$case"
>;

export type ServerClientEventDataByCase<TCase extends ServerClientEventCase> =
  ServerClientEventByCase<TCase>[ServerClientEventSingleNonCaseKeyOf<TCase>];

export type ActionDataByCase<TCase extends ClientServerActionCase> =
  ActionByCase<TCase>[SingleNonCaseKeyOf<TCase>];

// example usage:
// const actionData: ActionDataByCase<"setStatus"> = { status: "testing" };

// FYI: similar types for events in action-and-event-utils.ts (because they need some extra game-client only stuff)

// Finds all the matching event `$case`'s where the event data extends T
export type ServerClientEventCaseWith<T> = {
  [P in ServerClientEventCase]: ServerClientEventDataByCase<P> extends T
    ? Extract<ServerClientEventEvent, { $case: P }>
    : never;
}[ServerClientEventCase]["$case"];

export type ServerClientEventEventWith<T> = {
  [P in ServerClientEventCaseWith<T>]?: ServerClientEventByCase<P>;
}[ServerClientEventCaseWith<T>] & {
  [P in ServerClientEventCaseWith<T>]?: ServerClientEventDataByCase<P>;
};
