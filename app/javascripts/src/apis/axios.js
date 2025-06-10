"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _store = _interopRequireDefault(require("@/app/store"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
var backendURL = process.env.APP_URL;
console.log(process.env.VITE_SERVER_URL);
var axiosInstance = _axios["default"].create({
  baseURL: backendURL,
  headers: {
    "Content-Type": "application/json"
  }
});

// Attach the token to every request if it exists
axiosInstance.interceptors.request.use(function (config) {
  var _state$auth;
  var staticHeaders = 'arish';
  var state = _store["default"].getState(); // Get the current Redux state
  var token = (_state$auth = state.auth) === null || _state$auth === void 0 ? void 0 : _state$auth.userToken; // Access the token from Redux auth slice
  config.headers["X-Galaxy-Header"] = "arish";
  if (token) {
    config.headers["Authorization"] = "".concat(token);
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// // Handle global responses
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response; // Pass through successful responses
//   },
//   (error) => {
//     if (error.response?.status === 403) {
//       // window.location.href = "/not-authorized";
//     }
//     return Promise.reject(error);
//   }
// );
var _default = exports["default"] = axiosInstance;