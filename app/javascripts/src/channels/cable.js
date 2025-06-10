"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _actioncable = require("@rails/actioncable");
// cable.ts

var token = localStorage.getItem("userToken"); // Retrieve JWT token from localStorage
var cable = (0, _actioncable.createConsumer)("ws://localhost:3000/cable?token=".concat(token)); // Adjust WS URL accordingly
//const cable = createConsumer('ws://localhost:3000/cable'); // Update URL if needed
var _default = exports["default"] = cable;