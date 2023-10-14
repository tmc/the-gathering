const start = Date.now();

const MAX_LOG_LENGTH = 333;

export type LogTypes = {
  error?: boolean;
  warn?: boolean;
  log?: boolean;
  debug?: boolean;
};

class Logger {
  enabled: LogTypes = {
    error: true,
    warn: true,
    log: true,
    debug: false,
  };
  record: LogTypes = {
    error: true,
    warn: true,
  };
  history: { time: number; message: string; level: string }[] = [];

  error(message: string) {
    message = message.slice(0, MAX_LOG_LENGTH);
    if (this.enabled.error) {
      if (this.record.error) {
        this.history.push({ time: Date.now() - start, message, level: "error" });
      }
      console.error(message);
    }
  }

  warn(message: string) {
    message = message.slice(0, MAX_LOG_LENGTH);
    if (this.enabled.warn) {
      if (this.record.warn) {
        this.history.push({ time: Date.now() - start, message, level: "warn" });
      }
      console.warn(message);
    }
  }

  log(message: string) {
    message = message.slice(0, MAX_LOG_LENGTH);
    if (this.enabled.log) {
      if (this.record.log) {
        this.history.push({ time: Date.now() - start, message, level: "log" });
      }
      console.log(message);
    }
  }

  debug(...args: unknown[]) {
    if (this.enabled.debug) {
      console.debug(...args);
    }
  }

  checkpoint(message: string) {
    message = message.slice(0, MAX_LOG_LENGTH);
    this.history.push({ time: Date.now() - start, message, level: "checkpoint" });
  }

  /*** utils ***/

  errString(err: unknown): string {
    // tweak the order things are printed in so it's more useful
    let propertyNames = Object.getOwnPropertyNames(err);
    if (propertyNames.includes("message")) {
      // bring 'message' to the front
      propertyNames = ["message"].concat(propertyNames.filter((n) => n !== "message"));
    }
    if (propertyNames.includes("stack")) {
      // send stack to the back
      propertyNames = propertyNames.filter((n) => n !== "stack").concat(["stack"]);
    }
    return JSON.stringify(err, propertyNames);
  }

  // pretty-prints history
  exportHistory(): string {
    const maxItems = 200;
    const startIndex = this.history.length - maxItems;
    return (
      this.history
        .slice(Math.max(0, startIndex), this.history.length)
        .map((entry) => `${entry.time} ${entry.level} : ${entry.message}`)
        .join("\n") + `\n${Date.now() - start}: current time`
    );
  }

  /*** extra error monitoring stuff ***/

  setDebugState(state: boolean) {
    this.enabled.debug = state;
  }
}

const _logger = new Logger();
export const logger = _logger;
