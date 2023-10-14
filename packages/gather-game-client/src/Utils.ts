import axios from "axios";
import { API_BASE_PATH } from "./config";
import { ClientError } from "./Error";
import { logger } from "./Logger";

export interface SlidingWindowMetrics {
  min: number;
  max: number;
  avg: number;
  last: number;
}

export class SlidingWindow {
  maxSize: number;
  values: number[] = [];
  _minValue?: number;
  _maxValue?: number;
  _lastValue?: number;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  push(value: number) {
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
    if (!this.values.length) return undefined;

    const avg = this.values.reduce((acc, v) => v + acc, 0) / this.values.length;
    return parseFloat(avg.toFixed(2));
  }

  getMin() {
    if (!this._minValue) return undefined;

    return parseFloat(this._minValue.toFixed(2));
  }

  getMax() {
    if (!this._maxValue) return undefined;

    return parseFloat(this._maxValue?.toFixed(2));
  }

  getMetrics(): SlidingWindowMetrics {
    return {
      max: this.getMax() || -1,
      avg: this.getAverage() || -1,
      min: this.getMin() || -1,
      last: this.getLast() || -1,
    };
  }
}

/**
 * Returns a new AbortSignal that will be aborted if any of the provided signals are aborted.
 */
export const anySignal = (signals: AbortSignal[]) => {
  const controller = new AbortController();
  function onAbort(this: AbortSignal) {
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

/**
 * Returns a new promise that is rejected if the signal aborts before the original promise is settled
 */
export const abortable = <T>(promise: Promise<T>, signal: AbortSignal): Promise<T> => {
  if (signal.aborted) return Promise.reject(signal.reason);

  return Promise.race([
    promise,
    new Promise<T>((_, reject) => {
      signal.addEventListener("abort", () => reject(signal.reason ?? new Error(`aborted`)), {
        once: true,
      });
    }),
  ]);
};

export const fetchGameServerAssignment = async (
  signal: AbortSignal,
  space: string,
  overrideHttpServer?: string,
): Promise<string> => {
  try {
    // on browser, use the same deployment that we're currently using
    // from the api, always use prod,
    const hostname = overrideHttpServer || API_BASE_PATH;
    if (process.env.ENVIRONMENT === "test") {
      console.error(
        "bad: using axios in a test. it can't be mocked reliably in game-client. don't do this",
      );
    }
    const res = await axios.get(
      `${hostname}/api/v2/spaces/${encodeURIComponent(space)}/game-server-assignment`,
      { signal },
    );
    return res.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const errorJson = JSON.stringify(e.toJSON());
      if (e.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (e.response.status >= 400 && e.response.status < 500) {
          throw new ClientError(
            `Invalid request to fetch game server assignment, ${errorJson}`,
            `HTTP_${e.response.status}`,
          );
        } else if (e.response.status >= 500) {
          throw new ClientError(
            `Failed to fetch game server assignment, ${errorJson}`,
            `HTTP_${e.response.status}`,
          );
        } else {
          throw new ClientError(
            `Unknown error when fetching game server assignment, ${errorJson}`,
            `HTTP_${e.response.status}`,
          );
        }
      } else if (e.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        throw new ClientError(`Could not reach server, ${errorJson}`, "COULD_NOT_REACH_SERVER");
      } else {
        // Something happened in setting up the request that triggered an Error
        throw new ClientError(
          `Failed to make request to fetch game server assignment, ${errorJson}`,
          "FAILED_REQUEST",
        );
      }
    } else {
      throw e;
    }
  }
};

export const parseCustomAction = <ActionType>(name: string, payload: string): ActionType => {
  let action: ActionType;
  try {
    action = JSON.parse(payload);
  } catch {
    throw new Error(`Failed to parse payload for ${name} event: ${payload}`);
  }
  return action;
};

// returns the time it took to ping a site (or null) and null (or the error message)
// uses images to get around cors stuff
const testSite = async (url: string, testId?: string) => {
  const testIdParam = testId ? `?testId=${testId}` : "";
  const start = Date.now();
  if (process.env.ENVIRONMENT === "test") {
    console.error(
      "bad: using axios in a test. it can't be mocked reliably in game-client. don't do this",
    );
  }
  return (
    axios
      .get(`${url}${testIdParam}`, {
        timeout: 60000,
      })
      .then(() => ({
        time: Date.now() - start,
        error: null,
      }))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((err: any) => {
        if (err?.response?.status === 404) {
          // 404 means you're connected to the internet
          return {
            time: Date.now() - start,
            error: null,
          };
        }
        return {
          time: null,
          error: logger.errString(err),
        };
      })
  );
};

// runs a network test and then returns the results
export const testConnection = async (serverUrl: string | undefined, testId: string) => {
  const gsHttpUrl = serverUrl
    ? `https://${(serverUrl.match(/[^/]*gather\.town/) ?? [null])[0]}/ping`
    : null;

  const [googleResult, cloudflareResult, gatherResult, myGsResult] = await Promise.all([
    testSite(`https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js?q=${Math.random()}`), // google url that should never go away
    testSite(
      `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js?q=${Math.random()}`,
    ), // cloudflare url that should never go away
    testSite("https://api.gather.town/networkTest-should404", testId), // importantly: http service, not static site
    gsHttpUrl ? testSite(gsHttpUrl, testId) : { time: undefined, error: undefined }, // current server
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
