const baseConfig = require("../../jest.config.base");

const config = {
  ...baseConfig(require("./package.json"), require("./tsconfig.json")),
};

module.exports = config;
