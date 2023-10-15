// Meant to be replaced at compile time by Webpack
// by `EnvironmentPlugin` from modules that will import this
// or default to `window.location.origin` for backward compatibility

export const isBrowser = typeof window !== "undefined" && typeof window.location !== "undefined";

const getApiBasePath = () => {
  if (process.env.API_BASE_PATH) {
    return process.env.API_BASE_PATH.match(/^https?:\/\//)
      ? process.env.API_BASE_PATH
      : `https://${process.env.API_BASE_PATH}`;
  }

  if (process.env.ENVIRONMENT === "local" || process.env.ENVIRONMENT === "test")
    return `http://${isBrowser ? window.location.hostname : "localhost"}:3000`;

  if (isBrowser) return window.location.origin;

  if (process.env.ENVIRONMENT === "prod") return "https://api.gather.town";
  if (process.env.ENVIRONMENT === "staging") return "https://api.staging.gather.town";
  if (process.env.ENVIRONMENT === "dev") {
    // if it's dev, build up the correct api url
    return `https://api-${
      process.env.GAME_SERVER_POOL ?? process.env.GIT_BRANCH
    }.dev.k8s.gather.town`;
  }

  // otherwise... probably a 3rd party. use prod
  return "https://api.gather.town";
};

export const API_BASE_PATH = getApiBasePath();
