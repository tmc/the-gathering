// @generated by protoc-gen-connect-es v1.1.2 with parameter "target=ts"
// @generated from file agents/v1/av_service.proto (package agents.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { SpeakResponse, WordEvent } from "./av_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service agents.v1.AgentAudioVideoService
 */
export const AgentAudioVideoService = {
  typeName: "agents.v1.AgentAudioVideoService",
  methods: {
    /**
     * Speak is a stream of words to be spoken by the agent.
     *
     * @generated from rpc agents.v1.AgentAudioVideoService.Speak
     */
    speak: {
      name: "Speak",
      I: WordEvent,
      O: SpeakResponse,
      kind: MethodKind.ClientStreaming,
    },
  }
} as const;

