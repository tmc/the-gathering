# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: gathering/agents/v1/agents.proto, gathering/agents/v1/av_service.proto, gathering/agents/v1/game_service.proto
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


class SpriteDirectionEnumEnum(betterproto.Enum):
    Stand = 0
    Down = 1
    DownAlt = 2
    Up = 3
    UpAlt = 4
    Left = 5
    LeftAlt = 6
    Right = 7
    RightAlt = 8
    Dance1 = 9
    Dance2 = 10
    Dance3 = 11
    Dance4 = 12


class MoveDirectionEnumEnum(betterproto.Enum):
    Left = 0
    Right = 1
    Up = 2
    Down = 3
    Dance = 4


@dataclass(eq=False, repr=False)
class HealthCheckRequest(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class HealthCheckResponse(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class ClientServerAction(betterproto.Message):
    """
    The set of all actions that can be sent from the client to the server.
    """

    client_heartbeat: "ClientHeartbeat" = betterproto.message_field(1, group="action")
    move: "Move" = betterproto.message_field(5, group="action")
    chat: "Chat" = betterproto.message_field(15, group="action")
    set_status: "SetStatus" = betterproto.message_field(8, group="action")
    set_emoji_status: "SetEmojiStatus" = betterproto.message_field(21, group="action")
    set_emote_v2: "SetEmoteV2" = betterproto.message_field(77, group="action")
    set_text_status: "SetTextStatus" = betterproto.message_field(25, group="action")
    set_name: "SetName" = betterproto.message_field(24, group="action")
    set_focus_mode_end_time: "SetFocusModeEndTime" = betterproto.message_field(
        78, group="action"
    )
    set_away: "SetAway" = betterproto.message_field(127, group="action")
    set_currently_equipped_wearables: "SetCurrentlyEquippedWearables" = (
        betterproto.message_field(140, group="action")
    )
    actively_speaking: "ActivelySpeaking" = betterproto.message_field(
        22, group="action"
    )
    exit: "Exit" = betterproto.message_field(27, group="action")
    enter: "Enter" = betterproto.message_field(28, group="action")
    init: "Init" = betterproto.message_field(33, group="action")
    wave: "Wave" = betterproto.message_field(119, group="action")


@dataclass(eq=False, repr=False)
class ServerClientEvent(betterproto.Message):
    """
    The set of all events that can be sent from the server to the client.
    """

    ready: "Ready" = betterproto.message_field(103, group="event")
    server_heartbeat: "ServerHeartbeat" = betterproto.message_field(105, group="event")
    player_moves: "PlayerMoves" = betterproto.message_field(1, group="event")
    player_sets_status: "PlayerSetsStatus" = betterproto.message_field(5, group="event")
    player_chats: "PlayerChats" = betterproto.message_field(9, group="event")
    player_actively_speaks: "PlayerActivelySpeaks" = betterproto.message_field(
        14, group="event"
    )
    player_sets_name: "PlayerSetsName" = betterproto.message_field(17, group="event")
    player_sets_text_status: "PlayerSetsTextStatus" = betterproto.message_field(
        18, group="event"
    )
    player_sets_emoji_status: "PlayerSetsEmojiStatus" = betterproto.message_field(
        19, group="event"
    )
    player_exits: "PlayerExits" = betterproto.message_field(21, group="event")
    player_joins: "PlayerJoins" = betterproto.message_field(81, group="event")
    player_sets_emote_v2: "PlayerSetsEmoteV2" = betterproto.message_field(
        92, group="event"
    )
    player_sets_subtitle: "PlayerSetsSubtitle" = betterproto.message_field(
        114, group="event"
    )
    player_waves: "PlayerWaves" = betterproto.message_field(140, group="event")
    player_sets_away: "PlayerSetsAway" = betterproto.message_field(150, group="event")
    player_sets_last_raised_hand: "PlayerSetsLastRaisedHand" = (
        betterproto.message_field(165, group="event")
    )
    player_sets_currently_equipped_wearables: "PlayerSetsCurrentlyEquippedWearables" = (
        betterproto.message_field(166, group="event")
    )
    map_set_dimensions: "MapSetDimensions" = betterproto.message_field(
        58, group="event"
    )
    map_set_collisions_bits: "MapSetCollisionsBits" = betterproto.message_field(
        151, group="event"
    )


@dataclass(eq=False, repr=False)
class SpriteDirectionEnum(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class MoveDirectionEnum(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class PlayerInitInfo(betterproto.Message):
    name: Optional[str] = betterproto.string_field(1, optional=True, group="_name")
    x: Optional[int] = betterproto.uint32_field(3, optional=True, group="_x")
    y: Optional[int] = betterproto.uint32_field(4, optional=True, group="_y")
    map: Optional[str] = betterproto.string_field(5, optional=True, group="_map")
    affiliation: Optional[str] = betterproto.string_field(
        6, optional=True, group="_affiliation"
    )
    busy: Optional[bool] = betterproto.bool_field(7, optional=True, group="_busy")
    text_status: Optional[str] = betterproto.string_field(
        8, optional=True, group="_textStatus"
    )
    emoji_status: Optional[str] = betterproto.string_field(
        9, optional=True, group="_emojiStatus"
    )
    currently_equipped_wearables: Optional["DbOutfit"] = betterproto.message_field(
        10, optional=True, group="_currentlyEquippedWearables"
    )
    focus_mode_end_time: Optional[str] = betterproto.string_field(
        11, optional=True, group="_focusModeEndTime"
    )
    item_string: Optional[str] = betterproto.string_field(
        14, optional=True, group="_itemString"
    )
    is_npc: Optional[bool] = betterproto.bool_field(15, optional=True, group="_isNpc")


@dataclass(eq=False, repr=False)
class DbOutfit(betterproto.Message):
    skin: str = betterproto.string_field(1)
    hair: str = betterproto.string_field(2)
    facial_hair: str = betterproto.string_field(3)
    top: str = betterproto.string_field(4)
    bottom: str = betterproto.string_field(5)
    shoes: str = betterproto.string_field(6)
    hat: str = betterproto.string_field(7)
    glasses: str = betterproto.string_field(8)
    other: str = betterproto.string_field(9)
    costume: Optional[str] = betterproto.string_field(
        10, optional=True, group="_costume"
    )
    mobility: Optional[str] = betterproto.string_field(
        11, optional=True, group="_mobility"
    )
    jacket: Optional[str] = betterproto.string_field(12, optional=True, group="_jacket")


@dataclass(eq=False, repr=False)
class ServerHeartbeat(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class Ready(betterproto.Message):
    id: str = betterproto.string_field(1)


@dataclass(eq=False, repr=False)
class PlayerJoins(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)


@dataclass(eq=False, repr=False)
class GotRequestMute(betterproto.Message):
    muter_id: str = betterproto.string_field(1)
    video: bool = betterproto.bool_field(2)


@dataclass(eq=False, repr=False)
class PlayerMoves(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    x: Optional[int] = betterproto.uint32_field(2, optional=True, group="_x")
    """all optional, only send what's changed"""

    y: Optional[int] = betterproto.uint32_field(3, optional=True, group="_y")
    direction: Optional["SpriteDirectionEnumEnum"] = betterproto.enum_field(
        4, optional=True, group="_direction"
    )
    map_id: Optional[str] = betterproto.string_field(5, optional=True, group="_mapId")
    last_input_id: int = betterproto.uint32_field(6)


@dataclass(eq=False, repr=False)
class PlayerSetsStatus(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    busy: bool = betterproto.bool_field(2)


@dataclass(eq=False, repr=False)
class PlayerSetsAvailability(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    status: str = betterproto.string_field(2)
    status_updated_at: Optional[str] = betterproto.string_field(
        3, optional=True, group="_statusUpdatedAt"
    )
    status_end_option: Optional[str] = betterproto.string_field(
        4, optional=True, group="_statusEndOption"
    )


@dataclass(eq=False, repr=False)
class PlayerSpotlights(betterproto.Message):
    enc_id: int = betterproto.uint32_field(2)
    spotlighted_by: int = betterproto.uint32_field(1)
    spotlighted: int = betterproto.uint32_field(3)


@dataclass(eq=False, repr=False)
class PlayerRings(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)


@dataclass(eq=False, repr=False)
class PlayerSetsImagePointer(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    object_id: str = betterproto.string_field(2)
    x: float = betterproto.double_field(3)
    y: float = betterproto.double_field(4)


@dataclass(eq=False, repr=False)
class SetScreenPointerServer(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    screen_id: str = betterproto.string_field(2)
    x: float = betterproto.double_field(3)
    y: float = betterproto.double_field(4)
    color: str = betterproto.string_field(5)


@dataclass(eq=False, repr=False)
class PlayerChats(betterproto.Message):
    sender_id: str = betterproto.string_field(1)
    recipient: str = betterproto.string_field(2)
    contents: str = betterproto.string_field(3)
    sender_name: str = betterproto.string_field(4)
    timestamp: Optional["Timestamp"] = betterproto.message_field(
        5, optional=True, group="_timestamp"
    )
    message_type: str = betterproto.string_field(6)
    unix_time: float = betterproto.double_field(7)
    id: Optional[str] = betterproto.string_field(8, optional=True, group="_id")
    room_id: Optional[str] = betterproto.string_field(9, optional=True, group="_roomId")
    approved: Optional[bool] = betterproto.bool_field(
        10, optional=True, group="_approved"
    )
    nook_id: Optional[str] = betterproto.string_field(
        11, optional=True, group="_nookId"
    )


@dataclass(eq=False, repr=False)
class Timestamp(betterproto.Message):
    seconds: float = betterproto.float_field(1)
    nanoseconds: float = betterproto.float_field(2)


@dataclass(eq=False, repr=False)
class PlayerWaves(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    target_id: str = betterproto.string_field(2)
    is_reply: bool = betterproto.bool_field(3)


@dataclass(eq=False, repr=False)
class PlayerActivelySpeaks(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    actively_speaking: int = betterproto.uint32_field(2)


@dataclass(eq=False, repr=False)
class PlayerSetsEmoteV2(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    emote: Optional[str] = betterproto.string_field(2, optional=True, group="_emote")
    count: Optional[int] = betterproto.uint32_field(3, optional=True, group="_count")


@dataclass(eq=False, repr=False)
class PlayerSetsLastRaisedHand(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    last_raised_hand: str = betterproto.string_field(2)


@dataclass(eq=False, repr=False)
class PlayerSetsLastActive(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    last_active: str = betterproto.string_field(2)


@dataclass(eq=False, repr=False)
class PlayerSetsName(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    name: str = betterproto.string_field(2)


@dataclass(eq=False, repr=False)
class PlayerSetsTextStatus(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    text_status: str = betterproto.string_field(2)


@dataclass(eq=False, repr=False)
class PlayerSetsEmojiStatus(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    emoji_status: str = betterproto.string_field(2)


@dataclass(eq=False, repr=False)
class PlayerExits(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)


@dataclass(eq=False, repr=False)
class PlayerSetsCurrentlyEquippedWearables(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    currently_equipped_wearables: "DbOutfit" = betterproto.message_field(2)


@dataclass(eq=False, repr=False)
class PlayerShootsConfetti(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)


@dataclass(eq=False, repr=False)
class PlayerSetsFollowTarget(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    follow_target: str = betterproto.string_field(2)


@dataclass(eq=False, repr=False)
class PlayerSetsIsNpc(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    is_npc: bool = betterproto.bool_field(2)


@dataclass(eq=False, repr=False)
class PlayerSetsSubtitle(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    subtitle: str = betterproto.string_field(2)


@dataclass(eq=False, repr=False)
class PlayerHighFives(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    enc_id_target: int = betterproto.uint32_field(2)
    emote: Optional[str] = betterproto.string_field(3, optional=True, group="_emote")


@dataclass(eq=False, repr=False)
class PlayerSetsAway(betterproto.Message):
    enc_id: int = betterproto.uint32_field(1)
    away: bool = betterproto.bool_field(2)


@dataclass(eq=False, repr=False)
class MapSetDimensions(betterproto.Message):
    map_id: str = betterproto.string_field(1)
    width: int = betterproto.uint32_field(2)
    height: int = betterproto.uint32_field(3)


@dataclass(eq=False, repr=False)
class MapSetCollisionsBits(betterproto.Message):
    map_id: str = betterproto.string_field(1)
    overwrite: bool = betterproto.bool_field(2)
    x: int = betterproto.uint32_field(3)
    y: int = betterproto.uint32_field(4)
    w: int = betterproto.uint32_field(5)
    h: int = betterproto.uint32_field(6)
    mask: bytes = betterproto.bytes_field(7)
    """
    the mask stored as bits where 0 is walkable and 1 is impassable to read a
    single bit:  byteIndex = ((y * w + x) / 8) | 0  bitIndex  = 1 << ((y * w +
    x) % 8)  impassable = (mask[byteIndex] & (1 << bitIndex)) !== 0
    """


@dataclass(eq=False, repr=False)
class ClientHeartbeat(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class Move(betterproto.Message):
    dir: "MoveDirectionEnumEnum" = betterproto.enum_field(1)
    stopped: bool = betterproto.bool_field(2)
    input_id: int = betterproto.uint32_field(3)
    target_id: Optional[str] = betterproto.string_field(
        4, optional=True, group="_targetId"
    )


@dataclass(eq=False, repr=False)
class SetStatus(betterproto.Message):
    status: bool = betterproto.bool_field(1)
    target_id: Optional[str] = betterproto.string_field(
        2, optional=True, group="_targetId"
    )


@dataclass(eq=False, repr=False)
class SetCurrentlyEquippedWearables(betterproto.Message):
    currently_equipped_wearables: "DbOutfit" = betterproto.message_field(1)
    target_id: Optional[str] = betterproto.string_field(
        3, optional=True, group="_targetId"
    )


@dataclass(eq=False, repr=False)
class Chat(betterproto.Message):
    chat_recipient: str = betterproto.string_field(1)
    contents: str = betterproto.string_field(2)
    local_player_ids: List[str] = betterproto.string_field(3)
    map_id: str = betterproto.string_field(4)
    id: Optional[str] = betterproto.string_field(5, optional=True, group="_id")
    nook_id: Optional[str] = betterproto.string_field(6, optional=True, group="_nookId")


@dataclass(eq=False, repr=False)
class ActivelySpeaking(betterproto.Message):
    actively_speaking: bool = betterproto.bool_field(1)


@dataclass(eq=False, repr=False)
class SetEmoteV2(betterproto.Message):
    emote: Optional[str] = betterproto.string_field(1, optional=True, group="_emote")
    target_id: Optional[str] = betterproto.string_field(
        2, optional=True, group="_targetId"
    )
    count: Optional[int] = betterproto.uint32_field(3, optional=True, group="_count")


@dataclass(eq=False, repr=False)
class SetName(betterproto.Message):
    name: str = betterproto.string_field(1)
    target_id: Optional[str] = betterproto.string_field(
        2, optional=True, group="_targetId"
    )


@dataclass(eq=False, repr=False)
class SetTextStatus(betterproto.Message):
    text_status: str = betterproto.string_field(1)
    target_id: Optional[str] = betterproto.string_field(
        2, optional=True, group="_targetId"
    )


@dataclass(eq=False, repr=False)
class Exit(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class Enter(betterproto.Message):
    info: Optional["PlayerInitInfo"] = betterproto.message_field(
        1, optional=True, group="_info"
    )
    spawn_token: Optional[str] = betterproto.string_field(
        2, optional=True, group="_spawnToken"
    )
    target_id: Optional[str] = betterproto.string_field(
        3, optional=True, group="_targetId"
    )


@dataclass(eq=False, repr=False)
class SetEmojiStatus(betterproto.Message):
    emoji_status: str = betterproto.string_field(1)
    target_id: Optional[str] = betterproto.string_field(
        2, optional=True, group="_targetId"
    )


@dataclass(eq=False, repr=False)
class Init(betterproto.Message):
    space_id: str = betterproto.string_field(1)
    token: str = betterproto.string_field(2, group="auth")
    api_key: str = betterproto.string_field(3, group="auth")


@dataclass(eq=False, repr=False)
class ChatReply(betterproto.Message):
    sender_id: str = betterproto.string_field(1)
    sender_name: str = betterproto.string_field(2)
    contents: str = betterproto.string_field(3)


@dataclass(eq=False, repr=False)
class Wave(betterproto.Message):
    user: str = betterproto.string_field(1)
    is_reply: bool = betterproto.bool_field(2)


@dataclass(eq=False, repr=False)
class SetFocusModeEndTime(betterproto.Message):
    focus_mode_end_time: str = betterproto.string_field(1)
    target_id: Optional[str] = betterproto.string_field(
        2, optional=True, group="_targetId"
    )


@dataclass(eq=False, repr=False)
class SetAway(betterproto.Message):
    away: bool = betterproto.bool_field(1)
    target_id: Optional[str] = betterproto.string_field(
        2, optional=True, group="_targetId"
    )


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
    async def health_check(
        self,
        health_check_request: "HealthCheckRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "HealthCheckResponse":
        return await self._unary_unary(
            "/gathering.agents.v1.AgentService/HealthCheck",
            health_check_request,
            HealthCheckResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def run(
        self,
        client_server_action_iterator: Union[
            AsyncIterable["ClientServerAction"], Iterable["ClientServerAction"]
        ],
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> AsyncIterator["ServerClientEvent"]:
        async for response in self._stream_stream(
            "/gathering.agents.v1.AgentService/Run",
            client_server_action_iterator,
            ClientServerAction,
            ServerClientEvent,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        ):
            yield response


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
            "/gathering.agents.v1.AgentAudioVideoService/Speak",
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
            "/gathering.agents.v1.GameService/JoinGame",
            join_game_request,
            JoinGameResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )


class AgentServiceBase(ServiceBase):
    async def health_check(
        self, health_check_request: "HealthCheckRequest"
    ) -> "HealthCheckResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def run(
        self, client_server_action_iterator: AsyncIterator["ClientServerAction"]
    ) -> AsyncIterator["ServerClientEvent"]:
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)
        yield ServerClientEvent()

    async def __rpc_health_check(
        self, stream: "grpclib.server.Stream[HealthCheckRequest, HealthCheckResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.health_check(request)
        await stream.send_message(response)

    async def __rpc_run(
        self, stream: "grpclib.server.Stream[ClientServerAction, ServerClientEvent]"
    ) -> None:
        request = stream.__aiter__()
        await self._call_rpc_handler_server_stream(
            self.run,
            stream,
            request,
        )

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/gathering.agents.v1.AgentService/HealthCheck": grpclib.const.Handler(
                self.__rpc_health_check,
                grpclib.const.Cardinality.UNARY_UNARY,
                HealthCheckRequest,
                HealthCheckResponse,
            ),
            "/gathering.agents.v1.AgentService/Run": grpclib.const.Handler(
                self.__rpc_run,
                grpclib.const.Cardinality.STREAM_STREAM,
                ClientServerAction,
                ServerClientEvent,
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
            "/gathering.agents.v1.AgentAudioVideoService/Speak": grpclib.const.Handler(
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
            "/gathering.agents.v1.GameService/JoinGame": grpclib.const.Handler(
                self.__rpc_join_game,
                grpclib.const.Cardinality.UNARY_UNARY,
                JoinGameRequest,
                JoinGameResponse,
            ),
        }