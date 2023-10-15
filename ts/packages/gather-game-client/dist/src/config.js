"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_BASE_PATH = exports.isBrowser = void 0;
exports.isBrowser = typeof window !== "undefined" && typeof window.location !== "undefined";
const getApiBasePath = () => {
    if (process.env.API_BASE_PATH) {
        return process.env.API_BASE_PATH.match(/^https?:\/\//)
            ? process.env.API_BASE_PATH
            : `https://${process.env.API_BASE_PATH}`;
    }
    if (process.env.ENVIRONMENT === "local" || process.env.ENVIRONMENT === "test")
        return `http://${exports.isBrowser ? window.location.hostname : "localhost"}:3000`;
    if (exports.isBrowser)
        return window.location.origin;
    if (process.env.ENVIRONMENT === "prod")
        return "https://api.gather.town";
    if (process.env.ENVIRONMENT === "staging")
        return "https://api.staging.gather.town";
    if (process.env.ENVIRONMENT === "dev") {
        return `https://api-${process.env.GAME_SERVER_POOL ?? process.env.GIT_BRANCH}.dev.k8s.gather.town`;
    }
    return "https://api.gather.town";
};
exports.API_BASE_PATH = getApiBasePath();
//# sourceMappingURL=config.js.map