// @generated by protoc-gen-connect-es v1.1.2 with parameter "target=ts"
// @generated from file agents/v1/agents.proto (package agents.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AgentAction, Event, SpeakResponse, Word } from "./agents_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service agents.v1.AgentService
 */
export const AgentService = {
  typeName: "agents.v1.AgentService",
  methods: {
    /**
     * Interact is a bidirectional stream of agent actions and events.
     *
     * @generated from rpc agents.v1.AgentService.Interact
     */
    interact: {
      name: "Interact",
      I: AgentAction,
      O: Event,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * Speak Sends a stream of words to the agent.
     *
     * @generated from rpc agents.v1.AgentService.Speak
     */
    speak: {
      name: "Speak",
      I: Word,
      O: SpeakResponse,
      kind: MethodKind.ClientStreaming,
    },
  }
} as const;

