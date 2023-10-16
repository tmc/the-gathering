package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"connectrpc.com/connect"
	v1 "github.com/tmc/the-gathering/go/gen/gathering/agents/v1"
	"github.com/tmc/the-gathering/go/gen/gathering/agents/v1/agentsv1connect"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

type AgentServiceServer struct {
	agentsv1connect.UnimplementedAgentServiceHandler
}

func (s *AgentServiceServer) Run(ctx context.Context, stream *connect.BidiStream[v1.ClientServerAction, v1.ServerClientEvent]) error {
	if err := stream.Send(&v1.ServerClientEvent{
		Event: &v1.ServerClientEvent_Ready{
			Ready: &v1.Ready{},
		},
	}); err != nil {
		return err
	}

	for {
		event, err := stream.Receive()
		if err != nil {
			return err
		}
		j, _ := json.Marshal(event)
		fmt.Println("received event:", string(j))
		if err := stream.Send(&v1.ServerClientEvent{
			Event: &v1.ServerClientEvent_ServerHeartbeat{},
		}); err != nil {
			return err
		}
	}
}
func (srv *AgentServiceServer) HealthCheck(ctx context.Context, r *connect.Request[v1.HealthCheckRequest]) (*connect.Response[v1.HealthCheckResponse], error) {
	resp := connect.NewResponse(&v1.HealthCheckResponse{})
	return resp, nil
}

func main() {
	srv := &AgentServiceServer{}
	mux := http.NewServeMux()
	path, handler := agentsv1connect.NewAgentServiceHandler(srv)
	mux.Handle(path, handler)
	http.ListenAndServe(
		"localhost:8080",
		// Use h2c so we can serve HTTP/2 without TLS.
		h2c.NewHandler(mux, &http2.Server{}),
	)
}
