import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";
import { createGrpcTransport } from "@connectrpc/connect-node";

import { AgentService } from "./agents/v1/agents_connect";
import { PlayerEvent } from "./agents/v1/agents_pb";

async function* playerEvents(): AsyncGenerator<PlayerEvent> {
  yield new PlayerEvent();
  // sleep 2s:
  await new Promise((resolve) => setTimeout(resolve, 2000));
  yield new PlayerEvent();
}

const ctransport = createConnectTransport({
  //httpVersion: "1.1",
  baseUrl: "http://127.0.0.1:8080",
});
const transport = createGrpcTransport({
  baseUrl: "http://127.0.0.1:8080",
});

async function main() {
  const client = createPromiseClient(AgentService, transport);
  const res = await client.healthCheck({});
  console.log(res);


  const stream = client.interact(playerEvents());
  for await (const res of stream) {
    console.log(res);
  }
}
void main();
