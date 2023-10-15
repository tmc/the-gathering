import { createPromiseClient } from "@connectrpc/connect";
//import { createConnectTransport } from "@connectrpc/connect-node";
import { createGrpcTransport } from "@connectrpc/connect-node";

import { AgentService } from "./agents/v1/agents_connect";

// const transport = createConnectTransport({
//   httpVersion: "1.1",
//   baseUrl: "http://localhost:8080",
// });
const transport = createGrpcTransport({
  baseUrl: "http://localhost:8080",
  httpVersion: "2",
});

async function main() {
  const client = createPromiseClient(AgentService, transport);
  const res = await client.healthCheck({});
  console.log(res);
}
void main();
