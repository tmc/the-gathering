import { ConnectRouter } from "@connectrpc/connect";
import { AgentService } from "./gen/gathering/agents/v1/agents_connect";
import { 
  ClientServerAction, 
  ServerClientEvent,
  ServerHeartbeat,
} from "./gen/gathering/agents/v1/agents_pb";

export default (router: ConnectRouter) =>
  // registers connectrpc.eliza.v1.ElizaService
  router.service(AgentService, {
    // implements rpc interact
    async *run(clientActions: AsyncIterable<ClientServerAction>): AsyncGenerator<ServerClientEvent> {
      // wait but yield after 2 seconds:
      console.log('interact start')
      for await (const action of clientActions) {
        console.log("Received action:", action);
        yield new ServerClientEvent({
          event: {
            case: "serverHeartbeat",
            value: new ServerHeartbeat({}),
          },
        });
      }
      console.log('interact end')
    },
    async healthCheck(req) {
      return {
      };
    }
  });
