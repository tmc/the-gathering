import asyncio
import logging
from dataclasses import dataclass
from typing import AsyncIterator

from grpclib.client import Channel
import betterproto
from betterproto.grpc.util.async_channel import AsyncChannel


from pb.agents.v1 import (
    AgentServiceStub,
    PlayerEvent,
    GameEvent,
    Message,
    Player,

    HealthCheckRequest, HealthCheckResponse
)


AGENT_ID=42

async def main():
    channel = Channel(host="localhost", port=8080)
    client = AgentServiceStub(channel)

    resp = await client.health_check(HealthCheckRequest())
    print("resp:",resp)


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
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
