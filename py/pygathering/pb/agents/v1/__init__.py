# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: agents/v1/agents.proto, agents/v1/av_service.proto, agents/v1/game_service.proto
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


class PlayerType(betterproto.Enum):
    PLAYER_TYPE_UNSPECIFIED = 0
    PLAYER_TYPE_HUMAN = 1
    PLAYER_TYPE_BOT = 2


@dataclass(eq=False, repr=False)
class HealthCheckRequest(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class HealthCheckResponse(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class Player(betterproto.Message):
    type: "PlayerType" = betterproto.enum_field(1)
    id: str = betterproto.string_field(2)
    name: str = betterproto.string_field(3)
    x: Optional[int] = betterproto.int32_field(4, optional=True, group="_x")
    y: Optional[int] = betterproto.int32_field(5, optional=True, group="_y")


@dataclass(eq=False, repr=False)
class GameEvent(betterproto.Message):
    """Discriminated union of all events."""

    player_event: "PlayerEvent" = betterproto.message_field(1, group="event")


@dataclass(eq=False, repr=False)
class PlayerEvent(betterproto.Message):
    """Discriminated union of all agent actions."""

    player: "Player" = betterproto.message_field(1)
    joined: "PlayerJoined" = betterproto.message_field(2, group="event")
    message: "Message" = betterproto.message_field(3, group="event")
    """A message was sent by an agent."""

    nearby_players: "NearbyPlayers" = betterproto.message_field(4, group="event")


@dataclass(eq=False, repr=False)
class PlayerJoined(betterproto.Message):
    """PlayerJoined is sent when an agent joins the game."""

    pass


@dataclass(eq=False, repr=False)
class NearbyPlayers(betterproto.Message):
    """NearbyPlayers is a list of players near the agent."""

    players: List["Player"] = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class Message(betterproto.Message):
    """A global chat message sent by an agent."""

    content: str = betterproto.string_field(2)


@dataclass(eq=False, repr=False)
class ProvisionAgentRequest(betterproto.Message):
    agent: "Player" = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class ProvisionAgentResponse(betterproto.Message):
    agent: "Player" = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class WordEvent(betterproto.Message):
    """Words is a stream of words."""

    agent_id: str = betterproto.string_field(1)
    word: str = betterproto.string_field(2)


@dataclass(eq=False, repr=False)
class SpeakResponse(betterproto.Message):
    """Placeholder response"""

    pass


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
        player_event_iterator: Union[
            AsyncIterable["PlayerEvent"], Iterable["PlayerEvent"]
        ],
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> AsyncIterator["GameEvent"]:
        async for response in self._stream_stream(
            "/agents.v1.AgentService/Interact",
            player_event_iterator,
            PlayerEvent,
            GameEvent,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        ):
            yield response

    async def health_check(
        self,
        health_check_request: "HealthCheckRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "HealthCheckResponse":
        return await self._unary_unary(
            "/agents.v1.AgentService/HealthCheck",
            health_check_request,
            HealthCheckResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def provision_agent(
        self,
        provision_agent_request: "ProvisionAgentRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "ProvisionAgentResponse":
        return await self._unary_unary(
            "/agents.v1.AgentService/ProvisionAgent",
            provision_agent_request,
            ProvisionAgentResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )


class AgentAudioVideoServiceStub(betterproto.ServiceStub):
    async def speak(
        self,
        word_event_iterator: Union[AsyncIterable["WordEvent"], Iterable["WordEvent"]],
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "SpeakResponse":
        return await self._stream_unary(
            "/agents.v1.AgentAudioVideoService/Speak",
            word_event_iterator,
            WordEvent,
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
        self, player_event_iterator: AsyncIterator["PlayerEvent"]
    ) -> AsyncIterator["GameEvent"]:
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)
        yield GameEvent()

    async def health_check(
        self, health_check_request: "HealthCheckRequest"
    ) -> "HealthCheckResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def provision_agent(
        self, provision_agent_request: "ProvisionAgentRequest"
    ) -> "ProvisionAgentResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def __rpc_interact(
        self, stream: "grpclib.server.Stream[PlayerEvent, GameEvent]"
    ) -> None:
        request = stream.__aiter__()
        await self._call_rpc_handler_server_stream(
            self.interact,
            stream,
            request,
        )

    async def __rpc_health_check(
        self, stream: "grpclib.server.Stream[HealthCheckRequest, HealthCheckResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.health_check(request)
        await stream.send_message(response)

    async def __rpc_provision_agent(
        self,
        stream: "grpclib.server.Stream[ProvisionAgentRequest, ProvisionAgentResponse]",
    ) -> None:
        request = await stream.recv_message()
        response = await self.provision_agent(request)
        await stream.send_message(response)

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/agents.v1.AgentService/Interact": grpclib.const.Handler(
                self.__rpc_interact,
                grpclib.const.Cardinality.STREAM_STREAM,
                PlayerEvent,
                GameEvent,
            ),
            "/agents.v1.AgentService/HealthCheck": grpclib.const.Handler(
                self.__rpc_health_check,
                grpclib.const.Cardinality.UNARY_UNARY,
                HealthCheckRequest,
                HealthCheckResponse,
            ),
            "/agents.v1.AgentService/ProvisionAgent": grpclib.const.Handler(
                self.__rpc_provision_agent,
                grpclib.const.Cardinality.UNARY_UNARY,
                ProvisionAgentRequest,
                ProvisionAgentResponse,
            ),
        }


class AgentAudioVideoServiceBase(ServiceBase):
    async def speak(
        self, word_event_iterator: AsyncIterator["WordEvent"]
    ) -> "SpeakResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def __rpc_speak(
        self, stream: "grpclib.server.Stream[WordEvent, SpeakResponse]"
    ) -> None:
        request = stream.__aiter__()
        response = await self.speak(request)
        await stream.send_message(response)

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/agents.v1.AgentAudioVideoService/Speak": grpclib.const.Handler(
                self.__rpc_speak,
                grpclib.const.Cardinality.STREAM_UNARY,
                WordEvent,
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
