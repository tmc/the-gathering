package main

import (
	"context"
	"crypto/tls"
	"log"
	"net"
	"net/http"

	"connectrpc.com/connect"
	agentsv1 "github.com/tmc/the-gathering/go/gen/gathering/agents/v1"
	"github.com/tmc/the-gathering/go/gen/gathering/agents/v1/agentsv1connect"
	"golang.org/x/net/http2"
)

func main() {
	client := agentsv1connect.NewAgentServiceClient(
		newInsecureClient(),
		"http://localhost:8080",
		connect.WithGRPC(),
	)
	req := connect.NewRequest(&agentsv1.HealthCheckRequest{})
	req.Header().Set("Some-Header", "hello from connect")
	res, err := client.HealthCheck(context.Background(), req)
	if err != nil {
		log.Fatalln("issue with healthcheck:", err)
	}
	log.Println(res.Msg)
	log.Println(res.Header().Get("Some-Other-Header"))

	stream := client.Run(context.Background())

	stream.Send(&agentsv1.ClientServerAction{
		Action: &agentsv1.ClientServerAction_Init{
			Init: &agentsv1.Init{
				SpaceId: "foo",
				Auth: &agentsv1.Init_ApiKey{
					ApiKey: "bar",
				},
			},
		},
	})

	for {
		msg, err := stream.Receive()
		if err != nil {
			log.Fatalln("issue with receive:", err)
		}
		log.Println(msg.Event)
	}
}

func newInsecureClient() *http.Client {
	return &http.Client{
		Transport: &http2.Transport{
			AllowHTTP: true,
			DialTLS: func(network, addr string, _ *tls.Config) (net.Conn, error) {
				// If you're also using this client for non-h2c traffic, you may want
				// to delegate to tls.Dial if the network isn't TCP or the addr isn't
				// in an allowlist.
				return net.Dial(network, addr)
			},
			// Don't forget timeouts!
		},
	}
}
