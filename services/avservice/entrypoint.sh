#!/bin/bash

# PulseAudio setup
pulseaudio -D --exit-idle-time=-1
pactl load-module module-null-sink sink_name=MicOutput sink_properties=device.description="Virtual_Microphone_Output"
pacmd set-default-source MicOutput.monitor

# Virtual webcam setup
modprobe v4l2loopback

set -x
# Find the video device (usually /dev/video0 if no other camera is connected)
VIDEO_DEVICE=$(ls /dev/video*)

# Use ffmpeg to feed the virtual camera (modify this line as needed)
# ffmpeg -re -i /path/to/video.mp4 -f v4l2 $VIDEO_DEVICE &

xvfb-run npx playwright test --headed

# Start Chromium
xvfb-run chromium-browser --no-sandbox --use-fake-ui-for-media-stream --disable-web-security

# Keep the container running
tail -f /dev/null

