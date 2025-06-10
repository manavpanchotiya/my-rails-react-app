"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _store = _interopRequireDefault(require("@/app/store"));
var _themeProvider = require("@/lib/theme-provider");
var _reactRouterDom = require("react-router-dom");
var _sonner = require("sonner");
var _AppRoutes = _interopRequireDefault(require("@/routes/AppRoutes"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
// Import React and hooks

// Main App Component
var App = function App() {
  return /*#__PURE__*/_react["default"].createElement(_themeProvider.ThemeProvider, null, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: _store["default"]
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_AppRoutes["default"], null)), /*#__PURE__*/_react["default"].createElement(_sonner.Toaster, {
    richColors: true
  })));
};
var _default = exports["default"] = App;