export const TRIVIA_MAP_ID = "rw-trivia";

export enum TriviaGamePhase {
  UNINITIALIZED = "UNINITIALIZED",
  JOIN = "JOIN",
  SHOW_QUESTION = "SHOW_QUESTION",
  SHOW_ANSWER = "SHOW_ANSWER",
  ENDED = "ENDED",
}

export type Teams = {
  [teamId: string]: TeamInfo;
};

export type TeamInfo = {
  id: string;
  name: string;
  color: string;
  members: string[];
};

export type Scores = {
  [teamId: string]: number;
};

export type Submission = {
  answer: string;
  correct?: boolean;
  timestamp: number;
};

export type CurrentSubmissions = {
  [teamId: string]: Submission;
};

export type TriviaGameState = {
  phase: TriviaGamePhase;
  teams: Teams;
  scores: Scores;
  currentQuestion: QuestionInfo | null;
  currentSubmissions: CurrentSubmissions;
  totalQuestionsNum: number;
  currentQuestionNum: number;
  currentQuestionEndTime: number;
};

export type SubmissionHistoryEntry = {
  question: QuestionInfo;
  submissions: CurrentSubmissions;
  timeStamp: number;
};

export type SubmissionHistory = SubmissionHistoryEntry[];

export type QuestionRow = {
  [key: string]: string;
};

export type QuestionInfo = {
  id: string;
  num?: number;
  question: string;
  category?: string;
  answers: string[];
  correctAnswer: string;
  difficulty?: number;
  value?: number;
};

export type Questions = {
  [id: string]: QuestionInfo;
};

export type TriviaHostJoinsGame = {
  hostId: string;
  clientTime: number;
};

export type TriviaServerTime = {
  serverTime: number;
  clientTime: number;
};

export type TriviaHostStartsGame = {
  hostId: string;
  pack: string;
  numQuestions: number;
  questionDuration: number; // in milliseconds
};

export type TriviaPlayerJoinsGame = {
  playerId: string;
  clientTime: number;
};

export type TriviaPlayerJoinsTeam = {
  playerId: string;
  teamId: string;
  teamColor?: string;
};

export type TriviaPlayerLeavesTeam = {
  playerId: string;
  teamId: string;
};

export type TriviaTeamSetsName = {
  teamId: string;
  name: string;
};

export type TriviaTeamSubmitsAnswer = {
  teamId: string;
  questionId: string;
  answer: string;
};

export type TriviaHostSetsPhase = {
  phase: TriviaGamePhase;
};

export type TriviaGetSubmissionHistory = {
  playerId: string;
};

export type TriviaHostEndsGame = Record<string, never>;

export type QuestionPack = {
  id: string;
  fileName: string;
  numQuestions: number;
  categories: string[];
  maxDifficulty: number;
  displayName: string;
};

export type QuestionPacks = {
  [id: string]: QuestionPack;
};

export const TRIVIA_COLORS = new Set<string>([
  "#FF9DDE",
  "#FBD54E",
  "#64E9D1",
  "#AEE964",
  "#A966FF",
  "#FC7079",
  "#FF9960",
  "#EA36AC",
  "#B67800",
  "#2D62EC",
  "#37C214",
  "#7230FF",
  "#D42E2E",
  "#E85110",
]);

export enum QUESTION_PACKS {
  GENERAL_174 = "general_174",
  KOREAN_52 = "korean_52",
  MEDIA_74 = "media_74",
  SPORTS_50 = "sports_50",
  TECH_63 = "tech_63",
}

export const QUESTION_PACKS_INFO: { [id: string]: QuestionPack } = {
  [QUESTION_PACKS.GENERAL_174]: {
    id: "general_174",
    fileName: "General_174.csv",
    numQuestions: 170,
    categories: [
      "Movies",
      "Music",
      "News Events",
      "Pop Culture",
      "Sports",
      "TV",
      "Video Games",
      "Business",
      "Computers & Technology",
      "Literature",
    ],
    maxDifficulty: 3,
    displayName: "General Trivia",
  },
  [QUESTION_PACKS.KOREAN_52]: {
    id: "korean_52",
    fileName: "Korean_52.csv",
    numQuestions: 50,
    categories: ["Korean Trivia"],
    maxDifficulty: 3,
    displayName: "Korean Trivia",
  },
  [QUESTION_PACKS.MEDIA_74]: {
    id: "media_74",
    fileName: "Media_74.csv",
    numQuestions: 70,
    categories: ["Media Trivia"],
    maxDifficulty: 3,
    displayName: "Media Trivia",
  },
  [QUESTION_PACKS.SPORTS_50]: {
    id: "sports_50",
    fileName: "Sports_50.csv",
    numQuestions: 50,
    categories: ["Sports Trivia"],
    maxDifficulty: 3,
    displayName: "Sports Trivia",
  },
  [QUESTION_PACKS.TECH_63]: {
    id: "tech_63",
    fileName: "Tech_63.csv",
    numQuestions: 60,
    categories: ["Tech Trivia"],
    maxDifficulty: 3,
    displayName: "Tech Trivia",
  },
};

export const DEFAULT_QUESTION_VALUE = 100;
