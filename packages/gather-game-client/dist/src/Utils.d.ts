export interface SlidingWindowMetrics {
    min: number;
    max: number;
    avg: number;
    last: number;
}
export declare class SlidingWindow {
    maxSize: number;
    values: number[];
    _minValue?: number;
    _maxValue?: number;
    _lastValue?: number;
    constructor(maxSize: number);
    push(value: number): void;
    getLast(): number | undefined;
    getAverage(): number | undefined;
    getMin(): number | undefined;
    getMax(): number | undefined;
    getMetrics(): SlidingWindowMetrics;
}
export declare const anySignal: (signals: AbortSignal[]) => AbortSignal;
export declare const abortable: <T>(promise: Promise<T>, signal: AbortSignal) => Promise<T>;
export declare const fetchGameServerAssignment: (signal: AbortSignal, space: string, overrideHttpServer?: string) => Promise<string>;
export declare const parseCustomAction: <ActionType>(name: string, payload: string) => ActionType;
export declare const testConnection: (serverUrl: string | undefined, testId: string) => Promise<{
    googleTime2: number | null;
    googleError2: string | null;
    cloudflareTime: number | null;
    cloudflareError: string | null;
    gatherTime: number | null;
    gatherError: string | null;
    myGsHttpTime: number | null | undefined;
    myGsHttpError: string | null | undefined;
}>;
