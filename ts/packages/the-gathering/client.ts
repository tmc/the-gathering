import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";
import { createGrpcTransport } from "@connectrpc/connect-node";

import { AgentService } from "./gen/gathering/agents/v1/agents_connect";
import { ClientHeartbeat, ClientServerAction, Init, Enter, PlayerInitInfo } from "./gen/gathering/agents/v1/agents_pb";

const PLAYER = new PlayerInitInfo({
  name: "Alice",
});

async function* playerEvents(): AsyncGenerator<ClientServerAction> {
  yield new ClientServerAction({action: {
      case: "init",
      value: new Init({}),
    }});
  yield new ClientServerAction({action: {
    case: "enter",
    value: new Enter({
      info: PLAYER,
    }),
  }});
  for (let i = 0; i < 100; i++) {
    console.log("playerEvents");
    await new Promise((resolve) => setTimeout(resolve, 500));
    yield new ClientServerAction({
      action: {
        case: "clientHeartbeat",
        value: new ClientHeartbeat({}),
      },
    });
  };
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
  const stream = client.run(playerEvents());
  for await (const res of stream) {
    console.log("got from stream:", res);
  }
  console.log("stream done");
}
void main();
