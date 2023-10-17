# The Gathering

## Multi-modal Agent Infrastructure for gather.town

### Introduction

The Gathering project aims to extend the capabilities of gather.town (as a bootstrapping tool) by focusing on a restricted subset of its features and augmenting them with multi-modal interactions, namely audio and video streams. By doing so, we aim to enhance user-agent interactions within the gather.town virtual environment.

We belive that lowering the cost and burden of authoring autonomous actors in this game world will
accelerate open research in development of open multi-modal agents.

### Architecture

#### Agent Service
- **Purpose**: To serve as the central hub for agent interactions with game worlds.
- **Design**: This service will expose a modifed and limited subset of the gather.town API and
    extend it to bring multi-modal interactions to first class interactions (exposing agent speech, audio transcription, and simple control of 'screen' content from the agents). 

#### High level SDKs
- **Purpose**: We will make authoring new agents trivial by supplying easy to use high level SDKs
    for Python and TypeScript.

#### Integration with gather.town
- **Focus on Restricted Subset**: By narrowing our focus to specific features of gather.town, we ensure a more polished and efficient user experience.
- **Audio and Video as Key Modalities**: Agents will be able to receive audio inputs and respond with both audio and video (webcam output), making interactions more immersive.

### Hackthon Demo Target

#### Overview
Showcase a human actor's interaction with an agent in a gather.town space, highlighting the enhanced audio and video capabilities.

#### Features
- **Verbal Interaction**: Actors can converse with agents, with agents processing and understanding the audio context.
- **Visual Feedback**: Agents can provide feedback using video (webcam output), enhancing the communication experience.
  
#### Success Criteria
- Clear and contextual interactions between the actor and agent.
- Minimal latency in audio and video streams.

### "Bring Your Own Agent" Philosophy

- **Customizable SDKs**: We aim to provide easy-to-use SDKs, allowing developers to craft their own agents tailored to their needs. 
- **Flexibility**: The architecture will be modular, enabling developers to integrate their custom agents effortlessly.
- **Community Engagement**: By allowing users to author agents, we hope to foster a vibrant community around The Gathering project.
