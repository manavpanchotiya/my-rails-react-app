"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _cypress = require("cypress");
var _default = exports["default"] = (0, _cypress.defineConfig)({
  e2e: {
    baseUrl: "http://localhost:3000",
    // Your Rails app URL
    setupNodeEvents: function setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});