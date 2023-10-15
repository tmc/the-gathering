# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: agents/v1/agents.proto, agents/v1/game_service.proto
# plugin: python-betterproto
# This file has been @generated

from dataclasses import dataclass
from typing import (
    TYPE_CHECKING,
    AsyncIterable,
    AsyncIterator,
    Dict,
    Iterable,
    List,
    Optional,
    Union,
)

import betterproto
import grpclib
from betterproto.grpc.grpclib_server import ServiceBase


if TYPE_CHECKING:
    import grpclib.server
    from betterproto.grpc.grpclib_client import MetadataLike
    from grpclib.metadata import Deadline


class AgentAgentType(betterproto.Enum):
    AGENT_TYPE_UNSPECIFIED = 0
    AGENT_TYPE_HUMAN = 1
    AGENT_TYPE_BOT = 2


@dataclass(eq=False, repr=False)
class Word(betterproto.Message):
    """Words is a stream of words."""

    word: str = betterproto.string_field(2)


@dataclass(eq=False, repr=False)
class SpeakResponse(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class Agent(betterproto.Message):
    type: "AgentAgentType" = betterproto.enum_field(1)
    id: str = betterproto.string_field(2)
    name: str = betterproto.string_field(3)


@dataclass(eq=False, repr=False)
class Event(betterproto.Message):
    """Discriminated union of all events."""

    message: "Message" = betterproto.message_field(1, group="event")
    """A message was sent by an agent."""

    interaction_zone_update: "InteractionZoneUpdate" = betterproto.message_field(
        2, group="event"
    )


@dataclass(eq=False, repr=False)
class InteractionZoneUpdate(betterproto.Message):
    """
    InteractionZoneUpdate is sent by the client to update the interaction zone.
    """

    agents: List["Agent"] = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class AgentAction(betterproto.Message):
    """Discriminated union of all agent actions."""

    message: "Message" = betterproto.message_field(1, group="action")
    """A message was sent by an agent."""


@dataclass(eq=False, repr=False)
class Message(betterproto.Message):
    """A global chat message sent by an agent."""

    agent: "Agent" = betterproto.message_field(1)
    """The agent that sent the message."""

    content: str = betterproto.string_field(2)


@dataclass(eq=False, repr=False)
class JoinGameRequest(betterproto.Message):
    game_id: str = betterproto.string_field(1)
    """e.g. "FCoCBXMZr7OEGG3m/forest-office"""

    room_id: Optional[str] = betterproto.string_field(
        2, optional=True, group="_room_id"
    )
    """e.g. "Room1"""


@dataclass(eq=False, repr=False)
class JoinGameResponse(betterproto.Message):
    session_id: str = betterproto.string_field(1)


class AgentServiceStub(betterproto.ServiceStub):
    async def interact(
        self,
        event_iterator: Union[AsyncIterable["Event"], Iterable["Event"]],
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> AsyncIterator["AgentAction"]:
        async for response in self._stream_stream(
            "/agents.v1.AgentService/Interact",
            event_iterator,
            Event,
            AgentAction,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        ):
            yield response


class AgentAudioVideoServiceStub(betterproto.ServiceStub):
    async def speak(
        self,
        word_iterator: Union[AsyncIterable["Word"], Iterable["Word"]],
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "SpeakResponse":
        return await self._stream_unary(
            "/agents.v1.AgentAudioVideoService/Speak",
            word_iterator,
            Word,
            SpeakResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )


class GameServiceStub(betterproto.ServiceStub):
    async def join_game(
        self,
        join_game_request: "JoinGameRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "JoinGameResponse":
        return await self._unary_unary(
            "/agents.v1.GameService/JoinGame",
            join_game_request,
            JoinGameResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )


class AgentServiceBase(ServiceBase):
    async def interact(
        self, event_iterator: AsyncIterator["Event"]
    ) -> AsyncIterator["AgentAction"]:
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)
        yield AgentAction()

    async def __rpc_interact(
        self, stream: "grpclib.server.Stream[Event, AgentAction]"
    ) -> None:
        request = stream.__aiter__()
        await self._call_rpc_handler_server_stream(
            self.interact,
            stream,
            request,
        )

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/agents.v1.AgentService/Interact": grpclib.const.Handler(
                self.__rpc_interact,
                grpclib.const.Cardinality.STREAM_STREAM,
                Event,
                AgentAction,
            ),
        }


class AgentAudioVideoServiceBase(ServiceBase):
    async def speak(self, word_iterator: AsyncIterator["Word"]) -> "SpeakResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def __rpc_speak(
        self, stream: "grpclib.server.Stream[Word, SpeakResponse]"
    ) -> None:
        request = stream.__aiter__()
        response = await self.speak(request)
        await stream.send_message(response)

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/agents.v1.AgentAudioVideoService/Speak": grpclib.const.Handler(
                self.__rpc_speak,
                grpclib.const.Cardinality.STREAM_UNARY,
                Word,
                SpeakResponse,
            ),
        }


class GameServiceBase(ServiceBase):
    async def join_game(
        self, join_game_request: "JoinGameRequest"
    ) -> "JoinGameResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def __rpc_join_game(
        self, stream: "grpclib.server.Stream[JoinGameRequest, JoinGameResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.join_game(request)
        await stream.send_message(response)

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/agents.v1.GameService/JoinGame": grpclib.const.Handler(
                self.__rpc_join_game,
                grpclib.const.Cardinality.UNARY_UNARY,
                JoinGameRequest,
                JoinGameResponse,
            ),
        }