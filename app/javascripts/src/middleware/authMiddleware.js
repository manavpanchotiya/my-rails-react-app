"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jwtDecode = require("jwt-decode");
var _authSlice = require("@/features/auth/authSlice");
// Adjusted import for jwt-decode

// Define the type for the token payload

var authMiddleware = function authMiddleware(store) {
  return function (next) {
    return function (action) {
      // Prevent processing the logout action to avoid infinite loops
      if (action.type === _authSlice.logout.type) {
        return next(action);
      }
      var state = store.getState();
      var userToken = state.auth.userToken;
      if (userToken) {
        try {
          // Decode the token to check its expiration
          var tokenPayload = (0, _jwtDecode.jwtDecode)(userToken);
          var isTokenExpired = tokenPayload.exp * 1000 < Date.now();
          if (isTokenExpired) {
            store.dispatch((0, _authSlice.logout)()); // Dispatch the logout action if the token is expired
            return; // Stop further action dispatch
          }
        } catch (_unused) {
          // If decoding fails, assume the token is invalid and log out the user
          store.dispatch((0, _authSlice.logout)());
          return;
        }
      }
      return next(action); // Proceed with the action if the token is valid
    };
  };
};
var _default = exports["default"] = authMiddleware;