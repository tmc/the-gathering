// Command 11cat turns stdin into a stream of audio
package main

import (
	"bufio"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"
	"strings"
	"time"

	"github.com/gorilla/websocket"
)

var (
	ELEVENLABS_API_KEY = os.Getenv("ELEVENLABS_API_KEY")
	VOICE_ID           = "21m00Tcm4TlvDq8ikWAM"
)

func main() {
	if err := run(); err != nil {
		fmt.Fprintf(os.Stderr, "error: %v\n", err)
		os.Exit(1)
	}
}

func run() error {
	fmt.Fprintln(os.Stderr, time.Now().Sub(t))
	// Create a new client
	client := NewElevenlabsClient(ELEVENLABS_API_KEY)
	if err := client.Dial(); err != nil {
		return fmt.Errorf("error dialing: %v", err)
	}
	defer client.conn.Close()
	fmt.Fprintln(os.Stderr, time.Now().Sub(t))

	inputChunks := make(chan string)
	go textChunker(os.Stdin, inputChunks)
	go func() {
		for chunk := range inputChunks {
			if err := client.Send(chunk); err != nil {
				log.Fatal(err)
			}
		}
		client.Send("")
	}()

	i := 0
	for chunk := range client.Chunks {
		// Here you can use the decoded MP3 chunks as needed
		// For instance, write them to a file or process them further.
		//fmt.Println("Received MP3 audio chunk of size:", len(chunk))
		os.Stdout.Write(chunk)
		if i == 0 {
			fmt.Fprintln(os.Stderr, time.Now().Sub(t))
			i++
		}
	}
	return nil
}

func textChunker(in io.Reader, chunks chan<- string) {
	splitters := []string{".", ",", "?", "!", ";", ":", "—", "-", "(", ")", "[", "]", "}", " "}
	buffer := ""

	scanner := bufio.NewScanner(in)
	scanner.Split(bufio.ScanWords) // this still splits by words, but the logic below handles chunks

	for scanner.Scan() {
		text := scanner.Text()
		if endsWithAny(buffer, splitters) {
			chunks <- buffer + " "
			buffer = text
		} else if startsWithAny(text, splitters) {
			chunks <- buffer + text[:1] + " "
			buffer = text[1:] + " "
		} else {
			buffer += text + " "
		}
	}

	if buffer != "" {
		chunks <- buffer + " "
	}
	close(chunks)
}

func endsWithAny(s string, substrs []string) bool {
	for _, sub := range substrs {
		if strings.HasSuffix(s, sub) {
			return true
		}
	}
	return false
}

func startsWithAny(s string, substrs []string) bool {
	for _, sub := range substrs {
		if strings.HasPrefix(s, sub) {
			return true
		}
	}
	return false
}

func NewElevenlabsClient(apiKey string) *elevenlabsClient {
	return &elevenlabsClient{
		apiKey:                   apiKey,
		optimizeStreamingLatency: 1,
		Chunks:                   make(chan []byte),
	}
}

type elevenlabsClient struct {
	apiKey                   string
	optimizeStreamingLatency int

	conn   *websocket.Conn
	Chunks chan []byte
}

func (c *elevenlabsClient) Dial() error {
	uri := fmt.Sprintf("wss://api.elevenlabs.io/v1/text-to-speech/%s/stream-input?model_id=eleven_monolingual_v1&optimize_streaming_latency=%v", VOICE_ID, c.optimizeStreamingLatency)
	var err error
	c.conn, _, err = websocket.DefaultDialer.Dial(uri, nil)
	if err != nil {
		return err
	}
	// Send initial data to WebSocket
	data := map[string]interface{}{
		"text":           " ",
		"voice_settings": map[string]interface{}{"stability": 0.5, "similarity_boost": true},
		"xi_api_key":     ELEVENLABS_API_KEY,
	}
	err = c.conn.WriteJSON(data)
	if err != nil {
		return err
	}
	// Function to process incoming WebSocket messages
	go func() {
		defer close(c.Chunks)
		for {
			_, message, err := c.conn.ReadMessage()
			if err != nil {
				log.Printf("read error: %v", err)
				return
			}

			var result map[string]interface{}
			err = json.Unmarshal(message, &result)
			if err != nil {
				log.Printf("json unmarshal error: %v", err)
			}

			if audio, ok := result["audio"].(string); ok {
				audioBytes, err := base64.StdEncoding.DecodeString(audio)
				if err != nil {
					log.Printf("base64 decode error: %v", err)
					continue
				}
				c.Chunks <- audioBytes
			}

			if _, ok := result["isFinal"].(bool); ok && result["isFinal"].(bool) {
				return
			}
		}
	}()
	return nil
}

func (c *elevenlabsClient) Send(text string) error {
	// Send the text for conversion
	data := map[string]interface{}{
		"text":                   text,
		"try_trigger_generation": true,
	}
	return c.conn.WriteJSON(data)
}
