import asyncio
import logging
from dataclasses import dataclass
from typing import AsyncIterator

from grpclib.client import Channel
import betterproto
from betterproto.grpc.util.async_channel import AsyncChannel

import logging
logging.basicConfig(level=logging.DEBUG)

from pb.agents.v1 import (
    AgentServiceStub,
    PlayerEvent,
    GameEvent,
    Message,
    Player,

    HealthCheckRequest, HealthCheckResponse
)


AGENT_ID=42

import time;

async def main():
    async with Channel(host="127.0.0.1", port=8080) as channel:
        client = AgentServiceStub(channel)
        print(channel, channel._state, channel._connected)
        await channel.__connect__()
        print(channel, channel._state, channel._connected)
        try:
            resp = await client.health_check(HealthCheckRequest())
            print("resp:",resp)
        except Exception as e:
            print("exception:",e)
        await asyncio.sleep(0)


    '''
    request_channel = AsyncChannel()

    initial_calls = [
        PlayerEvent(
            player=Player(id=AGENT_ID, name="Agent Smith"),
            message=Message(content="Hello, world!"),
        ),
    ]
    await request_channel.send_from(initial_calls)
    async for response in client.interact(request_channel):
        print("Received response:", response)
    '''


if __name__ == '__main__':
    asyncio.run(main(), debug=True)
