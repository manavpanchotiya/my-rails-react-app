"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
var PublicLayout = function PublicLayout() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.auth;
    }),
    isLoggedIn = _useSelector.isLoggedIn;
  return !isLoggedIn ? /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Outlet, null) : /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Navigate, {
    to: "/dashboard",
    replace: true
  });
};
var _default = exports["default"] = PublicLayout;