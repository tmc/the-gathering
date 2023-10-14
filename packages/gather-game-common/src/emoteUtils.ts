/**
 * Emotes that have a special function inside the app (e.g. when two players emote with Wave, they high five each other)
 */
export enum Emote {
  Wave = "Wave",
  Heart = "Heart",
  PartyPopper = "PartyPopper",
  RaisedHand = "RaisedHand",
}

/**
 * Emojis that correspond to "special" emotes in the app (see above)
 */
export const EMOTE_EMOJIS = {
  [Emote.Wave]: "👋",
  [Emote.Heart]: "❤️",
  [Emote.PartyPopper]: "🎉",
  [Emote.RaisedHand]: "🤚",
};

export const WaveEmotes = ["👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿"];

export const CONSTANT_PERMANENT_EMOTES = [EMOTE_EMOJIS[Emote.RaisedHand]];

export const getAllEmotes = (tempEmotes: string[]) => [...tempEmotes, ...CONSTANT_PERMANENT_EMOTES];

/** Keyboard shortcut to clear the user's current emote */
export const EMOTE_RESET_SHORTCUT = "0";

/** Keys a user can use as a shortcut to emote */
export const EMOTE_SHORTCUTS = [
  EMOTE_RESET_SHORTCUT,
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  // Used to raise hand (which is, for now, done by emoting)
  "h",
];

/** The default list of emotes loaded for a user. They are "temp" because the user can customize this list in the app */
export const DEFAULT_TEMP_EMOTES = ["👋", "❤️", "🎉", "👍", "🤣", "👏", "💯"];
