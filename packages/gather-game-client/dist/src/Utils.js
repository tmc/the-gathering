"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConnection = exports.parseCustomAction = exports.fetchGameServerAssignment = exports.abortable = exports.anySignal = exports.SlidingWindow = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
const Error_1 = require("./Error");
const Logger_1 = require("./Logger");
class SlidingWindow {
    constructor(maxSize) {
        this.values = [];
        this.maxSize = maxSize;
    }
    push(value) {
        this._lastValue = value;
        this.values.push(value);
        if (this.values.length > this.maxSize) {
            this.values.shift();
        }
        if (typeof this._minValue === "undefined" || value < this._minValue) {
            this._minValue = value;
        }
        if (typeof this._maxValue === "undefined" || value > this._maxValue) {
            this._maxValue = value;
        }
    }
    getLast() {
        return this._lastValue;
    }
    getAverage() {
        if (!this.values.length)
            return undefined;
        const avg = this.values.reduce((acc, v) => v + acc, 0) / this.values.length;
        return parseFloat(avg.toFixed(2));
    }
    getMin() {
        if (!this._minValue)
            return undefined;
        return parseFloat(this._minValue.toFixed(2));
    }
    getMax() {
        if (!this._maxValue)
            return undefined;
        return parseFloat(this._maxValue?.toFixed(2));
    }
    getMetrics() {
        return {
            max: this.getMax() || -1,
            avg: this.getAverage() || -1,
            min: this.getMin() || -1,
            last: this.getLast() || -1,
        };
    }
}
exports.SlidingWindow = SlidingWindow;
const anySignal = (signals) => {
    const controller = new AbortController();
    function onAbort() {
        controller.abort(this.reason);
        signals.forEach((s) => s.removeEventListener("abort", onAbort));
    }
    for (const signal of signals) {
        if (signal.aborted) {
            onAbort.apply(signal);
            break;
        }
        signal.addEventListener("abort", onAbort, { once: true });
    }
    return controller.signal;
};
exports.anySignal = anySignal;
const abortable = (promise, signal) => {
    if (signal.aborted)
        return Promise.reject(signal.reason);
    return Promise.race([
        promise,
        new Promise((_, reject) => {
            signal.addEventListener("abort", () => reject(signal.reason ?? new Error(`aborted`)), {
                once: true,
            });
        }),
    ]);
};
exports.abortable = abortable;
const fetchGameServerAssignment = async (signal, space, overrideHttpServer) => {
    try {
        const hostname = overrideHttpServer || config_1.API_BASE_PATH;
        if (process.env.ENVIRONMENT === "test") {
            console.error("bad: using axios in a test. it can't be mocked reliably in game-client. don't do this");
        }
        const res = await axios_1.default.get(`${hostname}/api/v2/spaces/${encodeURIComponent(space)}/game-server-assignment`, { signal });
        return res.data;
    }
    catch (e) {
        if (axios_1.default.isAxiosError(e)) {
            const errorJson = JSON.stringify(e.toJSON());
            if (e.response) {
                if (e.response.status >= 400 && e.response.status < 500) {
                    throw new Error_1.ClientError(`Invalid request to fetch game server assignment, ${errorJson}`, `HTTP_${e.response.status}`);
                }
                else if (e.response.status >= 500) {
                    throw new Error_1.ClientError(`Failed to fetch game server assignment, ${errorJson}`, `HTTP_${e.response.status}`);
                }
                else {
                    throw new Error_1.ClientError(`Unknown error when fetching game server assignment, ${errorJson}`, `HTTP_${e.response.status}`);
                }
            }
            else if (e.request) {
                throw new Error_1.ClientError(`Could not reach server, ${errorJson}`, "COULD_NOT_REACH_SERVER");
            }
            else {
                throw new Error_1.ClientError(`Failed to make request to fetch game server assignment, ${errorJson}`, "FAILED_REQUEST");
            }
        }
        else {
            throw e;
        }
    }
};
exports.fetchGameServerAssignment = fetchGameServerAssignment;
const parseCustomAction = (name, payload) => {
    let action;
    try {
        action = JSON.parse(payload);
    }
    catch {
        throw new Error(`Failed to parse payload for ${name} event: ${payload}`);
    }
    return action;
};
exports.parseCustomAction = parseCustomAction;
const testSite = async (url, testId) => {
    const testIdParam = testId ? `?testId=${testId}` : "";
    const start = Date.now();
    if (process.env.ENVIRONMENT === "test") {
        console.error("bad: using axios in a test. it can't be mocked reliably in game-client. don't do this");
    }
    return (axios_1.default
        .get(`${url}${testIdParam}`, {
        timeout: 60000,
    })
        .then(() => ({
        time: Date.now() - start,
        error: null,
    }))
        .catch((err) => {
        if (err?.response?.status === 404) {
            return {
                time: Date.now() - start,
                error: null,
            };
        }
        return {
            time: null,
            error: Logger_1.logger.errString(err),
        };
    }));
};
const testConnection = async (serverUrl, testId) => {
    const gsHttpUrl = serverUrl
        ? `https://${(serverUrl.match(/[^/]*gather\.town/) ?? [null])[0]}/ping`
        : null;
    const [googleResult, cloudflareResult, gatherResult, myGsResult] = await Promise.all([
        testSite(`https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js?q=${Math.random()}`),
        testSite(`https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js?q=${Math.random()}`),
        testSite("https://api.gather.town/networkTest-should404", testId),
        gsHttpUrl ? testSite(gsHttpUrl, testId) : { time: undefined, error: undefined },
    ]);
    return {
        googleTime2: googleResult.time,
        googleError2: googleResult.error,
        cloudflareTime: cloudflareResult.time,
        cloudflareError: cloudflareResult.error,
        gatherTime: gatherResult.time,
        gatherError: gatherResult.error,
        myGsHttpTime: myGsResult.time,
        myGsHttpError: myGsResult.error,
    };
};
exports.testConnection = testConnection;
//# sourceMappingURL=Utils.js.map