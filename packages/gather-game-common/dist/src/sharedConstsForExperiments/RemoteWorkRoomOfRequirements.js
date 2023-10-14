"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var RemoteWorkRoomOfRequirements_exports = {};
__export(RemoteWorkRoomOfRequirements_exports, {
  ActivityTimeFilterOptions: () => ActivityTimeFilterOptions,
  HIP_TO_BE_SQUARE_MAP: () => HIP_TO_BE_SQUARE_MAP,
  ParticipantFilterOptions: () => ParticipantFilterOptions,
  ROOM_CONTROLLER_OBJECT_ID: () => ROOM_CONTROLLER_OBJECT_ID,
  ROOM_DOOR_OBJECT_ID: () => ROOM_DOOR_OBJECT_ID,
  ROOM_OF_REQUIREMENTS_EXTENSION: () => ROOM_OF_REQUIREMENTS_EXTENSION,
  SocialRoom: () => SocialRoom,
  SocialRoomInfo: () => SocialRoomInfo,
  SocialRoomSize: () => SocialRoomSize,
  isRoRActive: () => isRoRActive,
  isRorObject: () => isRorObject,
  isRorStandaloneObject: () => isRorStandaloneObject,
  targetMaps: () => targetMaps
});
module.exports = __toCommonJS(RemoteWorkRoomOfRequirements_exports);
const ROOM_OF_REQUIREMENTS_EXTENSION = "RemoteWorkRoomOfRequirements";
const ROOM_CONTROLLER_OBJECT_ID = "CyberpunkKioskWall - ja17fdCaXI-xbC9Imc0Rm_754e70d9-0b7b-4fc2-bebe-e2c1207c95d2";
const ROOM_DOOR_OBJECT_ID = "gBm9cPiE9ORWWatgyeC9_dedd43b1-6d34-4511-a92e-c5e019b8617a";
const isRorObject = (id) => id === ROOM_CONTROLLER_OBJECT_ID || id.startsWith("RoomOfRequirements");
const isRorStandaloneObject = (id) => id.startsWith("RoomOfRequirementsStandalone");
const isRoRActive = (room) => room.rorActive;
const targetMaps = (room) => {
  if ("targetMap" in room.portal)
    return [room.portal.targetMap];
  return Object.values(SocialRoomSize).map((size) => {
    const portals = room.portal;
    const portal = portals[size];
    if ("targetMap" in portal)
      return portal.targetMap;
    return void 0;
  }).filter(Boolean);
};
var SocialRoom = /* @__PURE__ */ ((SocialRoom2) => {
  SocialRoom2["HipToBeSquare"] = "Hip to be Square";
  SocialRoom2["GoKarts"] = "Grand Prix";
  SocialRoom2["SpeedGathering"] = "Speed Gathering";
  SocialRoom2["TetrisTournament"] = "Tetris Tourney";
  SocialRoom2["Trivia"] = "Trivia";
  SocialRoom2["Poker"] = "Poker Night";
  SocialRoom2["TalentShow"] = "Talent Show";
  SocialRoom2["OldPoker"] = "Poker";
  SocialRoom2["OldGoKarts"] = "Go Karts";
  SocialRoom2["BoardGames"] = "Board Game Night";
  return SocialRoom2;
})(SocialRoom || {});
var SocialRoomSize = /* @__PURE__ */ ((SocialRoomSize2) => {
  SocialRoomSize2["Small"] = "Small (1 - 25 people)";
  SocialRoomSize2["Medium"] = "Medium (25 - 50 people)";
  SocialRoomSize2["Large"] = "Large (50 - 100 people)";
  return SocialRoomSize2;
})(SocialRoomSize || {});
const ParticipantFilterOptions = ["2-10", "10-25", "25+"];
const ActivityTimeFilterOptions = ["under 30 mins", "30-60 mins", "60+ mins"];
const HIP_TO_BE_SQUARE_MAP = "hip-to-be-square";
const SocialRoomInfo = {
  ["Hip to be Square" /* HipToBeSquare */]: {
    imageURL: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Factivities-cover%2Fhip-to-be-square.png?alt=media&token=65bcc7ff-d7f2-4805-9d24-089a9b9dfafe",
    guideURL: "https://support.gather.town/help/squares",
    targetMapName: "Hip to be Square",
    portal: {
      targetMap: HIP_TO_BE_SQUARE_MAP,
      targetX: 2,
      targetY: 17
    },
    templatePortals: [{ x: 2, y: 8, targetOffsetX: 4, targetOffsetY: 4 }],
    roomDisplayObject: {
      wall: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/oxrhEtb3sV7VutbQ/93F2epBj3740m3i5xjbahS",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/oxrhEtb3sV7VutbQ/NHgWT2TK2rq95vOVXetowg"
      },
      standalone: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/oxrhEtb3sV7VutbQ/93F2epBj3740m3i5xjbahS",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/oxrhEtb3sV7VutbQ/NHgWT2TK2rq95vOVXetowg"
      }
    },
    participants: "2 - 16",
    participantTags: ["2-10"],
    durationTags: ["under 30 mins"],
    sourceSpace: "ykUtpLVeNLHZHAVs\\Hip To Be Square Template DO NOT MODIFY",
    active: false,
    rorActive: false
  },
  ["Grand Prix" /* GoKarts */]: {
    imageURL: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fror%2Fgrand-prix.png?alt=media&token=228c5e27-06fe-4bda-8fe8-27801cafd6f5",
    guideURL: "https://support.gather.town/hc/en-us/articles/15910382443668",
    targetMapName: "Rose Raceway",
    portal: {
      targetMap: "rose-raceway",
      targetX: 18,
      targetY: 85
    },
    portalToTemplate: {
      portalToTemplate: { x: 1, y: 5 },
      returnPortal: { x: 1, y: 5 }
    },
    templatePortals: [
      { x: 18, y: 87 },
      { x: 19, y: 87, targetOffsetX: 1 }
    ],
    roomDisplayObject: {
      wall: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town-dev.appspot.com/uploads/m4S94FU2KzRo9quK/DSgL3qeRMCaWVbG1LTP3y9",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town-dev.appspot.com/uploads/m4S94FU2KzRo9quK/mVyx2iMwCHn4DH0zMdNzVk"
      },
      standalone: {
        normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work%2Fror%2Fracetrack.png?alt=media&token=9c75f9e9-0bfe-45b1-ba60-a5081db6ba3d",
        highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work%2Fror%2Fracetrack_active.png?alt=media&token=bafe3392-ff12-44ac-82ec-d2798eb3866f"
      }
    },
    participants: "2 - 8",
    participantTags: ["2-10"],
    durationTags: ["under 30 mins"],
    sourceSpace: "iYKZr84o97YLlNsd\\templateRacetrack",
    active: true,
    infoModalNextImageURL: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fgo-kart-onboarding.png?alt=media&token=3680dc00-9373-459a-b0ce-5ce4823adc0d",
    rorActive: true
  },
  ["Go Karts" /* OldGoKarts */]: {
    imageURL: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Factivities-cover%2Fgrand-prix.png?alt=media&token=44865160-2b0b-46dc-8218-ab45e20777a9",
    guideURL: "https://support.gather.town/hc/en-us/articles/15910382443668",
    targetMapName: "Racetrack",
    portal: {
      targetMap: "rw-racetrack",
      targetX: 3,
      targetY: 85
    },
    templatePortals: [
      { x: 2, y: 87 },
      { x: 3, y: 87, targetOffsetX: 1 }
    ],
    roomDisplayObject: {
      wall: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town-dev.appspot.com/uploads/m4S94FU2KzRo9quK/DSgL3qeRMCaWVbG1LTP3y9",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town-dev.appspot.com/uploads/m4S94FU2KzRo9quK/mVyx2iMwCHn4DH0zMdNzVk"
      },
      standalone: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/Nd42XW8xix7dgSiQ/Z9Om7qrQuWlSGs8jaaGtJE",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/Nd42XW8xix7dgSiQ/bWM3HIqI1LjMaVVTIjlZEc"
      }
    },
    participants: "2 - 8",
    participantTags: ["2-10"],
    durationTags: ["under 30 mins"],
    sourceSpace: "g4GPpvgVVntJyyuW\\DRAFT_ror_racetrack",
    active: false,
    infoModalNextImageURL: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fgokarts%2Fgo-kart-onboarding.png?alt=media&token=3680dc00-9373-459a-b0ce-5ce4823adc0d",
    rorActive: false
  },
  ["Speed Gathering" /* SpeedGathering */]: {
    imageURL: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Factivities-cover%2Fspeed-gathering.png?alt=media&token=86b09fe0-52b8-4422-b4c5-d509a88514b2",
    guideURL: "https://support.gather.town/hc/en-us/articles/15910382605076?utm_source=template&utm_medium=app&utm_campaign=experiences",
    targetMapName: "Speed Gathering",
    portal: {
      targetMap: "rw-speed-gathering",
      targetX: 5,
      targetY: 22
    },
    templatePortals: [
      { x: 4, y: 24 },
      { x: 5, y: 24, targetOffsetX: 1 }
    ],
    roomDisplayObject: {
      wall: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/7gByoh17OL7iPxbP/CO4bXwwkwN8IojnFpPxYKF",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/7gByoh17OL7iPxbP/OXjpOmiVlZs7PjPoR60cAe"
      },
      standalone: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/Nd42XW8xix7dgSiQ/wYFNXd9Ih0wvoeRlkLTEH3",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/Nd42XW8xix7dgSiQ/dAFiPWozE4psQAYprUsctW"
      }
    },
    participants: "2 - 25",
    participantTags: ["2-10", "10-25"],
    durationTags: ["30-60 mins"],
    sourceSpace: "aYdAHobCQxXMYfNq\\DRAFT_ror_speed_gathering",
    active: false,
    rorActive: false
  },
  ["Tetris Tourney" /* TetrisTournament */]: {
    imageURL: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Factivities-cover%2Ftetris-tourney.png?alt=media&token=d27b6842-a457-4379-a69b-1c2d04496c42",
    guideURL: "https://support.gather.town/hc/en-us/articles/15910414254868?utm_source=template&utm_medium=app&utm_campaign=experiences",
    targetMapName: "Tetris Tournament",
    portal: {
      targetMap: "rw-tetris-tournament",
      targetX: 3,
      targetY: 35
    },
    templatePortals: [
      { x: 2, y: 37 },
      { x: 3, y: 37, targetOffsetX: 1 }
    ],
    roomDisplayObject: {
      wall: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town-dev.appspot.com/uploads/m4S94FU2KzRo9quK/dZ1Onm5XhUmlZKUnphge5c",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town-dev.appspot.com/uploads/m4S94FU2KzRo9quK/cgqrarZSiY3KRgefvCWAhs"
      },
      standalone: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/Nd42XW8xix7dgSiQ/OfZ6sexRpqQQk6zRWVpxxf",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/Nd42XW8xix7dgSiQ/En1OK1M7I6deVqj8SMVs08"
      }
    },
    participants: "8 - 32",
    participantTags: ["2-10", "10-25", "25+"],
    durationTags: ["under 30 mins", "30-60 mins"],
    sourceSpace: "uOzotFWdPgn3MTZf\\DRAFT_ror_tetris",
    active: false,
    rorActive: false
  },
  ["Trivia" /* Trivia */]: {
    imageURL: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Factivities-cover%2Ftrivia-party.png?alt=media&token=53c12259-2065-42d7-8da9-fecf8f131819",
    guideURL: "https://support.gather.town/help/trivia-pub?utm_source=template&utm_medium=app&utm_campaign=experiences",
    targetMapName: "Trivia Room",
    portal: {
      targetMap: "rw-trivia",
      targetX: 13,
      targetY: 17
    },
    templatePortals: [
      { x: 13, y: 18 },
      { x: 14, y: 18, targetOffsetX: 1 }
    ],
    roomDisplayObject: {
      wall: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/gEjZqny018p3tNJu/AW5hIzlPQ4PVDGCKSjMQYG",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/gEjZqny018p3tNJu/OUcfsxAB7fkkASb5tNODth"
      },
      standalone: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/gEjZqny018p3tNJu/AW5hIzlPQ4PVDGCKSjMQYG",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/gEjZqny018p3tNJu/OUcfsxAB7fkkASb5tNODth"
      }
    },
    participants: "2 - 50",
    participantTags: ["2-10", "10-25", "25+"],
    durationTags: ["30-60 mins", "60+ mins"],
    sourceSpace: "sZQQHbmAy2kC1fdJ\\DRAFT_ror_trivia",
    active: true,
    rorActive: false
  },
  ["Poker Night" /* Poker */]: {
    imageURL: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Factivities-cover%2Fpoker-night.png?alt=media&token=29e78517-7f91-4c09-928d-0009d0f42d7f",
    guideURL: "https://support.gather.town/help/poker-night",
    targetMapName: "Poker Room",
    portal: {
      targetMap: "rw-poker",
      targetX: 16,
      targetY: 33
    },
    templatePortals: [
      { x: 16, y: 34 },
      { x: 17, y: 34, targetOffsetX: 1 }
    ],
    roomDisplayObject: {
      wall: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/gEjZqny018p3tNJu/GjYnIUWWpGReStmRVMDDaG",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/gEjZqny018p3tNJu/T8tyxjy4O0orSKtInoebMS"
      },
      standalone: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/gEjZqny018p3tNJu/GjYnIUWWpGReStmRVMDDaG",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/gEjZqny018p3tNJu/T8tyxjy4O0orSKtInoebMS"
      }
    },
    participants: "2 - 10",
    participantTags: ["2-10", "10-25", "25+"],
    durationTags: ["under 30 mins"],
    sourceSpace: "BzQ5YtGGqktGN0UG\\DRAFT_ror_poker",
    active: false,
    rorActive: false
  },
  ["Poker" /* OldPoker */]: {
    imageURL: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Factivities-cover%2Fpoker-night.png?alt=media&token=29e78517-7f91-4c09-928d-0009d0f42d7f",
    guideURL: "https://support.gather.town/help/poker-night",
    targetMapName: "Poker Room",
    portal: {
      targetMap: "rw-poker",
      targetX: 16,
      targetY: 33
    },
    templatePortals: [
      { x: 16, y: 34 },
      { x: 17, y: 34, targetOffsetX: 1 }
    ],
    roomDisplayObject: {
      wall: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/gEjZqny018p3tNJu/GjYnIUWWpGReStmRVMDDaG",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/gEjZqny018p3tNJu/T8tyxjy4O0orSKtInoebMS"
      },
      standalone: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/gEjZqny018p3tNJu/GjYnIUWWpGReStmRVMDDaG",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/gEjZqny018p3tNJu/T8tyxjy4O0orSKtInoebMS"
      }
    },
    participants: "2 - 10",
    participantTags: ["2-10", "10-25", "25+"],
    durationTags: ["under 30 mins"],
    sourceSpace: "BzQ5YtGGqktGN0UG\\DRAFT_ror_poker",
    active: false,
    rorActive: false
  },
  ["Talent Show" /* TalentShow */]: {
    imageURL: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Factivities-cover%2Ftalent-show.png?alt=media&token=cfde1bdb-6a89-4243-a907-a72479b2d3d7",
    guideURL: "https://support.gather.town/hc/en-us/articles/15910414194196",
    targetMapName: "Talent Show Room",
    portal: {
      targetMap: "talent-show-room",
      targetX: 15,
      targetY: 15
    },
    templatePortals: [
      { x: 11, y: 19 },
      { x: 12, y: 19, targetOffsetX: 1 }
    ],
    roomDisplayObject: {
      wall: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/oxrhEtb3sV7VutbQ/kwBiyDqXFhuTVXoxPHiBhS",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/oxrhEtb3sV7VutbQ/bPAaHeRNw1Imk6unOsPi5K"
      },
      standalone: {
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/oxrhEtb3sV7VutbQ/kwBiyDqXFhuTVXoxPHiBhS",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/oxrhEtb3sV7VutbQ/bPAaHeRNw1Imk6unOsPi5K"
      }
    },
    participants: "2 - 25",
    participantTags: ["2-10", "10-25"],
    durationTags: ["under 30 mins", "30-60 mins"],
    sourceSpace: "fvkyG7Cue2souebG\\templateTalentShow",
    active: true,
    rorActive: false
  },
  ["Board Game Night" /* BoardGames */]: {
    imageURL: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fror%2Fboard-game-night.png?alt=media&token=74f66d6a-7a5d-4b89-83b8-b01e79b9b598",
    targetMapName: "Board Game Room",
    portal: {
      ["Small (1 - 25 people)" /* Small */]: { targetMap: "game-room-small", targetX: 14, targetY: 28 },
      ["Medium (25 - 50 people)" /* Medium */]: { targetMap: "game-room-medium", targetX: 20, targetY: 41 },
      ["Large (50 - 100 people)" /* Large */]: { targetMap: "game-room-large", targetX: 19, targetY: 44 }
    },
    portalToTemplate: {
      portalToTemplate: { x: 2, y: 5 },
      returnPortal: { x: 2, y: 5 }
    },
    templatePortals: {
      ["Small (1 - 25 people)" /* Small */]: [
        { x: 14, y: 29 },
        { x: 15, y: 29, targetOffsetX: 1 }
      ],
      ["Medium (25 - 50 people)" /* Medium */]: [
        { x: 20, y: 42 },
        { x: 21, y: 42, targetOffsetX: 1 }
      ],
      ["Large (50 - 100 people)" /* Large */]: [
        { x: 19, y: 45 },
        { x: 20, y: 45, targetOffsetX: 1 }
      ]
    },
    roomDisplayObject: {
      wall: {
        normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fboard-game-night%2FRoRBoardGame_off.png?alt=media&token=e875d520-c4c0-490b-bb16-211e0991310c",
        highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fboard-game-night%2FRoRBoardGame_on.png?alt=media&token=fac184af-ed52-413b-abb3-dc2f73db3ef3"
      },
      standalone: {
        normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work%2Fror%2Fboardgamecafe.png?alt=media&token=eb17b153-6499-4126-b4cf-8aff0cef408a",
        highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work%2Fror%2Fboardgamecafe_active.png?alt=media&token=04b975c5-ea06-47c2-8b9d-4157ff816055"
      }
    },
    participants: "2 - 100",
    participantTags: ["2-10", "10-25", "25+"],
    durationTags: ["under 30 mins", "30-60 mins"],
    sourceSpace: {
      ["Small (1 - 25 people)" /* Small */]: "F0WleG46HLyZIlYS\\templateGameRoomSmall",
      ["Medium (25 - 50 people)" /* Medium */]: "GpGF5ns1QdnXU1YP\\templateGameRoomMedium",
      ["Large (50 - 100 people)" /* Large */]: "LQr1PAkeqGdzJs8Y\\templateGameRoomLarge"
    },
    active: true,
    infoModalNextImageURL: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/remote-work-events%2Fboard-game-night%2Fboard-game-onboarding.png?alt=media&token=6059b610-d46d-442b-bed7-54e246f998da",
    rorActive: true
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ActivityTimeFilterOptions,
  HIP_TO_BE_SQUARE_MAP,
  ParticipantFilterOptions,
  ROOM_CONTROLLER_OBJECT_ID,
  ROOM_DOOR_OBJECT_ID,
  ROOM_OF_REQUIREMENTS_EXTENSION,
  SocialRoom,
  SocialRoomInfo,
  SocialRoomSize,
  isRoRActive,
  isRorObject,
  isRorStandaloneObject,
  targetMaps
});
//# sourceMappingURL=RemoteWorkRoomOfRequirements.js.map
