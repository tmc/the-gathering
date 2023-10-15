import { ConnectRouter } from "@connectrpc/connect";
import { AgentService } from "./agents/v1/agents_connect";
import { Event } from "./agents/v1/agents_pb";

export default (router: ConnectRouter) =>
  // registers connectrpc.eliza.v1.ElizaService
  router.service(AgentService, {
    // implements rpc interact
    async *interact(reqs: AsyncIterable<Event>) {

      for await (const req of reqs) {
        console.log("Received request:", req);
      }

    }
  });