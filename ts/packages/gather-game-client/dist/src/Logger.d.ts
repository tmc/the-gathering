export type LogTypes = {
    error?: boolean;
    warn?: boolean;
    log?: boolean;
    debug?: boolean;
};
declare class Logger {
    enabled: LogTypes;
    record: LogTypes;
    history: {
        time: number;
        message: string;
        level: string;
    }[];
    error(message: string): void;
    warn(message: string): void;
    log(message: string): void;
    debug(...args: unknown[]): void;
    checkpoint(message: string): void;
    errString(err: unknown): string;
    exportHistory(): string;
    setDebugState(state: boolean): void;
}
export declare const logger: Logger;
export {};
