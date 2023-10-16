// @generated by protoc-gen-es v1.3.3 with parameter "target=ts"
// @generated from file agents/v1/agents.proto (package agents.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message as Message$1, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum agents.v1.PlayerType
 */
export enum PlayerType {
  /**
   * @generated from enum value: PLAYER_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PLAYER_TYPE_HUMAN = 1;
   */
  HUMAN = 1,

  /**
   * @generated from enum value: PLAYER_TYPE_BOT = 2;
   */
  BOT = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(PlayerType)
proto3.util.setEnumType(PlayerType, "agents.v1.PlayerType", [
  { no: 0, name: "PLAYER_TYPE_UNSPECIFIED" },
  { no: 1, name: "PLAYER_TYPE_HUMAN" },
  { no: 2, name: "PLAYER_TYPE_BOT" },
]);

/**
 * @generated from message agents.v1.HealthCheckRequest
 */
export class HealthCheckRequest extends Message$1<HealthCheckRequest> {
  constructor(data?: PartialMessage<HealthCheckRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "agents.v1.HealthCheckRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheckRequest {
    return new HealthCheckRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheckRequest {
    return new HealthCheckRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheckRequest {
    return new HealthCheckRequest().fromJsonString(jsonString, options);
  }

  static equals(a: HealthCheckRequest | PlainMessage<HealthCheckRequest> | undefined, b: HealthCheckRequest | PlainMessage<HealthCheckRequest> | undefined): boolean {
    return proto3.util.equals(HealthCheckRequest, a, b);
  }
}

/**
 * @generated from message agents.v1.HealthCheckResponse
 */
export class HealthCheckResponse extends Message$1<HealthCheckResponse> {
  constructor(data?: PartialMessage<HealthCheckResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "agents.v1.HealthCheckResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheckResponse {
    return new HealthCheckResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheckResponse {
    return new HealthCheckResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheckResponse {
    return new HealthCheckResponse().fromJsonString(jsonString, options);
  }

  static equals(a: HealthCheckResponse | PlainMessage<HealthCheckResponse> | undefined, b: HealthCheckResponse | PlainMessage<HealthCheckResponse> | undefined): boolean {
    return proto3.util.equals(HealthCheckResponse, a, b);
  }
}

/**
 * @generated from message agents.v1.Player
 */
export class Player extends Message$1<Player> {
  /**
   * @generated from field: agents.v1.PlayerType type = 1;
   */
  type = PlayerType.UNSPECIFIED;

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  /**
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   * @generated from field: optional int32 x = 4;
   */
  x?: number;

  /**
   * @generated from field: optional int32 y = 5;
   */
  y?: number;

  constructor(data?: PartialMessage<Player>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "agents.v1.Player";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(PlayerType) },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "x", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 5, name: "y", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Player {
    return new Player().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Player {
    return new Player().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Player {
    return new Player().fromJsonString(jsonString, options);
  }

  static equals(a: Player | PlainMessage<Player> | undefined, b: Player | PlainMessage<Player> | undefined): boolean {
    return proto3.util.equals(Player, a, b);
  }
}

/**
 * Discriminated union of all events.
 *
 * @generated from message agents.v1.GameEvent
 */
export class GameEvent extends Message$1<GameEvent> {
  /**
   * @generated from oneof agents.v1.GameEvent.event
   */
  event: {
    /**
     * @generated from field: agents.v1.PlayerEvent player_event = 1;
     */
    value: PlayerEvent;
    case: "playerEvent";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<GameEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "agents.v1.GameEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "player_event", kind: "message", T: PlayerEvent, oneof: "event" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameEvent {
    return new GameEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameEvent {
    return new GameEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameEvent {
    return new GameEvent().fromJsonString(jsonString, options);
  }

  static equals(a: GameEvent | PlainMessage<GameEvent> | undefined, b: GameEvent | PlainMessage<GameEvent> | undefined): boolean {
    return proto3.util.equals(GameEvent, a, b);
  }
}

/**
 * Discriminated union of all agent actions.
 *
 * @generated from message agents.v1.PlayerEvent
 */
export class PlayerEvent extends Message$1<PlayerEvent> {
  /**
   * @generated from field: agents.v1.Player player = 1;
   */
  player?: Player;

  /**
   * @generated from oneof agents.v1.PlayerEvent.event
   */
  event: {
    /**
     * A message was sent by an agent.
     *
     * @generated from field: agents.v1.Message message = 2;
     */
    value: Message;
    case: "message";
  } | {
    /**
     * @generated from field: agents.v1.NearbyPlayers nearby_players = 3;
     */
    value: NearbyPlayers;
    case: "nearbyPlayers";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<PlayerEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "agents.v1.PlayerEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "player", kind: "message", T: Player },
    { no: 2, name: "message", kind: "message", T: Message, oneof: "event" },
    { no: 3, name: "nearby_players", kind: "message", T: NearbyPlayers, oneof: "event" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PlayerEvent {
    return new PlayerEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PlayerEvent {
    return new PlayerEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PlayerEvent {
    return new PlayerEvent().fromJsonString(jsonString, options);
  }

  static equals(a: PlayerEvent | PlainMessage<PlayerEvent> | undefined, b: PlayerEvent | PlainMessage<PlayerEvent> | undefined): boolean {
    return proto3.util.equals(PlayerEvent, a, b);
  }
}

/**
 * NearbyPlayers is a list of players near the agent.
 *
 * @generated from message agents.v1.NearbyPlayers
 */
export class NearbyPlayers extends Message$1<NearbyPlayers> {
  /**
   * @generated from field: repeated agents.v1.Player players = 1;
   */
  players: Player[] = [];

  constructor(data?: PartialMessage<NearbyPlayers>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "agents.v1.NearbyPlayers";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "players", kind: "message", T: Player, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NearbyPlayers {
    return new NearbyPlayers().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NearbyPlayers {
    return new NearbyPlayers().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NearbyPlayers {
    return new NearbyPlayers().fromJsonString(jsonString, options);
  }

  static equals(a: NearbyPlayers | PlainMessage<NearbyPlayers> | undefined, b: NearbyPlayers | PlainMessage<NearbyPlayers> | undefined): boolean {
    return proto3.util.equals(NearbyPlayers, a, b);
  }
}

/**
 * A global chat message sent by an agent.
 *
 * @generated from message agents.v1.Message
 */
export class Message extends Message$1<Message> {
  /**
   * @generated from field: string content = 2;
   */
  content = "";

  constructor(data?: PartialMessage<Message>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "agents.v1.Message";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Message {
    return new Message().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Message {
    return new Message().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Message {
    return new Message().fromJsonString(jsonString, options);
  }

  static equals(a: Message | PlainMessage<Message> | undefined, b: Message | PlainMessage<Message> | undefined): boolean {
    return proto3.util.equals(Message, a, b);
  }
}

/**
 * @generated from message agents.v1.ProvisionAgentRequest
 */
export class ProvisionAgentRequest extends Message$1<ProvisionAgentRequest> {
  /**
   * @generated from field: agents.v1.Player agent = 1;
   */
  agent?: Player;

  constructor(data?: PartialMessage<ProvisionAgentRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "agents.v1.ProvisionAgentRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "agent", kind: "message", T: Player },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProvisionAgentRequest {
    return new ProvisionAgentRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProvisionAgentRequest {
    return new ProvisionAgentRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProvisionAgentRequest {
    return new ProvisionAgentRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ProvisionAgentRequest | PlainMessage<ProvisionAgentRequest> | undefined, b: ProvisionAgentRequest | PlainMessage<ProvisionAgentRequest> | undefined): boolean {
    return proto3.util.equals(ProvisionAgentRequest, a, b);
  }
}

/**
 * @generated from message agents.v1.ProvisionAgentResponse
 */
export class ProvisionAgentResponse extends Message$1<ProvisionAgentResponse> {
  /**
   * @generated from field: agents.v1.Player agent = 1;
   */
  agent?: Player;

  constructor(data?: PartialMessage<ProvisionAgentResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "agents.v1.ProvisionAgentResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "agent", kind: "message", T: Player },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProvisionAgentResponse {
    return new ProvisionAgentResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProvisionAgentResponse {
    return new ProvisionAgentResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProvisionAgentResponse {
    return new ProvisionAgentResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ProvisionAgentResponse | PlainMessage<ProvisionAgentResponse> | undefined, b: ProvisionAgentResponse | PlainMessage<ProvisionAgentResponse> | undefined): boolean {
    return proto3.util.equals(ProvisionAgentResponse, a, b);
  }
}

