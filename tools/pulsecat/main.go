package main

import (
	"flag"
	"fmt"
	"os"
	"os/exec"
)

func main() {
	var sinkName string
	flag.StringVar(&sinkName, "sink", "MicOutput", "PulseAudio sink name")
	flag.Parse()

	cmd := exec.Command("ffplay", "-v", "0", "-nodisp", "-autoexit", "-")
	cmd.Stdin = os.Stdin
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	cmd.Env = append(os.Environ(), "PULSE_SINK="+sinkName)

	err := cmd.Run()
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error:", err)
		os.Exit(1)
	}
}

