export declare const TRIVIA_MAP_ID = "rw-trivia";
export declare enum TriviaGamePhase {
    UNINITIALIZED = "UNINITIALIZED",
    JOIN = "JOIN",
    SHOW_QUESTION = "SHOW_QUESTION",
    SHOW_ANSWER = "SHOW_ANSWER",
    ENDED = "ENDED"
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
    questionDuration: number;
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
export declare const TRIVIA_COLORS: Set<string>;
export declare enum QUESTION_PACKS {
    GENERAL_174 = "general_174",
    KOREAN_52 = "korean_52",
    MEDIA_74 = "media_74",
    SPORTS_50 = "sports_50",
    TECH_63 = "tech_63"
}
export declare const QUESTION_PACKS_INFO: {
    [id: string]: QuestionPack;
};
export declare const DEFAULT_QUESTION_VALUE = 100;
