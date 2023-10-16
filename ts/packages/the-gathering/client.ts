import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";
import { createGrpcTransport } from "@connectrpc/connect-node";

import { AgentService } from "./gen/gathering/agents/v1/agents_connect";
import { Player, PlayerEvent } from "./gen/gathering/agents/v1/agents_pb";

const PLAYER = new Player({
  id: "1",
  name: "Alice",
});

async function* playerEvents(): AsyncGenerator<PlayerEvent> {
  for (let i = 0; i < 100; i++) {
  console.log("playerEvents");
    await new Promise((resolve) => setTimeout(resolve, 500));
    yield new PlayerEvent({
      player: PLAYER,
  });
  }
}

const transport = createConnectTransport({
  httpVersion: "2",
  baseUrl: "http://127.0.0.1:8080",
});
// const transport = createGrpcTransport({
//   baseUrl: "http://127.0.0.1:8080",
// });

async function main() {
  const client = createPromiseClient(AgentService, transport);
  const res = await client.healthCheck({});
  const stream = client.interact(playerEvents());
  for await (const res of stream) {
    console.log("got from stream:", res);
  }
  console.log("stream done");
}
void main();
