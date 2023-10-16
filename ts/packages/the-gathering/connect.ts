import { ConnectRouter } from "@connectrpc/connect";
import { AgentService } from "./agents/v1/agents_connect";
import { PlayerEvent, GameEvent } from "./agents/v1/agents_pb";

export default (router: ConnectRouter) =>
  // registers connectrpc.eliza.v1.ElizaService
  router.service(AgentService, {
    // implements rpc interact
    async *interact(playerEvents: AsyncIterable<PlayerEvent>): AsyncGenerator<GameEvent> {
      // wait but yield after 2 seconds:
      console.log('interact start')
      for await (const event of playerEvents) {
        console.log("Received request:", req);
        yield new GameEvent();
      }
      console.log('interact end')
    },
    async healthCheck(req) {
      return {
      };
    }
  });
