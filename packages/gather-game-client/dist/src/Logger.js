"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const start = Date.now();
const MAX_LOG_LENGTH = 333;
class Logger {
    constructor() {
        this.enabled = {
            error: true,
            warn: true,
            log: true,
            debug: false,
        };
        this.record = {
            error: true,
            warn: true,
        };
        this.history = [];
    }
    error(message) {
        message = message.slice(0, MAX_LOG_LENGTH);
        if (this.enabled.error) {
            if (this.record.error) {
                this.history.push({ time: Date.now() - start, message, level: "error" });
            }
            console.error(message);
        }
    }
    warn(message) {
        message = message.slice(0, MAX_LOG_LENGTH);
        if (this.enabled.warn) {
            if (this.record.warn) {
                this.history.push({ time: Date.now() - start, message, level: "warn" });
            }
            console.warn(message);
        }
    }
    log(message) {
        message = message.slice(0, MAX_LOG_LENGTH);
        if (this.enabled.log) {
            if (this.record.log) {
                this.history.push({ time: Date.now() - start, message, level: "log" });
            }
            console.log(message);
        }
    }
    debug(...args) {
        if (this.enabled.debug) {
            console.debug(...args);
        }
    }
    checkpoint(message) {
        message = message.slice(0, MAX_LOG_LENGTH);
        this.history.push({ time: Date.now() - start, message, level: "checkpoint" });
    }
    errString(err) {
        let propertyNames = Object.getOwnPropertyNames(err);
        if (propertyNames.includes("message")) {
            propertyNames = ["message"].concat(propertyNames.filter((n) => n !== "message"));
        }
        if (propertyNames.includes("stack")) {
            propertyNames = propertyNames.filter((n) => n !== "stack").concat(["stack"]);
        }
        return JSON.stringify(err, propertyNames);
    }
    exportHistory() {
        const maxItems = 200;
        const startIndex = this.history.length - maxItems;
        return (this.history
            .slice(Math.max(0, startIndex), this.history.length)
            .map((entry) => `${entry.time} ${entry.level} : ${entry.message}`)
            .join("\n") + `\n${Date.now() - start}: current time`);
    }
    setDebugState(state) {
        this.enabled.debug = state;
    }
}
const _logger = new Logger();
exports.logger = _logger;
//# sourceMappingURL=Logger.js.map