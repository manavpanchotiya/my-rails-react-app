"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _authSlice = _interopRequireDefault(require("../features/auth/authSlice"));
var _authService = require("./services/auth/authService");
var _authMiddleware = _interopRequireDefault(require("@/middleware/authMiddleware"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
// Define the type of the store's state

// Define the type of the dispatch function

// Create the store
var store = (0, _toolkit.configureStore)({
  reducer: _defineProperty({
    auth: _authSlice["default"]
  }, _authService.authApi.reducerPath, _authService.authApi.reducer),
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false // Disable serializable check for better performance
    }).concat(_authService.authApi.middleware, _authMiddleware["default"]);
  }
});

// Export the store
var _default = exports["default"] = store;