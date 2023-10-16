import asyncio
import logging
from dataclasses import dataclass
from typing import AsyncIterator

from grpclib.client import Channel
import betterproto
from betterproto.grpc.util.async_channel import AsyncChannel

# import logging
# logging.basicConfig(level=logging.DEBUG)

from pb.agents.v1 import (
    AgentServiceStub,
    PlayerEvent,
    GameEvent,
    Message,
    Player,
    PlayerType,

    HealthCheckRequest, HealthCheckResponse
)

AGENT_ID=42

PLAYER=Player(
    id=AGENT_ID,
    name="Agent Smith",
    type=PlayerType.PLAYER_TYPE_BOT,
)

import time;

async def main():
    async with Channel(host="127.0.0.1", port=8080) as channel:
        client = AgentServiceStub(channel)
        try:
            resp = await client.health_check(HealthCheckRequest())
        except Exception as e:
            print("exception:",e)
        await asyncio.sleep(0)


    request_channel = AsyncChannel()
    initial_calls = [
        PlayerEvent(

            player=PLAYER,
            message=Message(content="Hello, world!"),
        ),
    ]
    print('sending initial calls')
    await request_channel.send_from(initial_calls)
    print('sent initial calls, waiting for responses')
    # fork off and sleep 2s, then send a game event
    async def send_game_event():
        await asyncio.sleep(2)
        await request_channel.send_from([
            GameEvent(
                player=PLAYER,
                message=Message(content="Hello, world!"),
            ),
        ])
    asyncio.create_task(send_game_event())
    async for response in client.interact(request_channel):
        print("Received response:", response)

if __name__ == '__main__':
    asyncio.run(main())
