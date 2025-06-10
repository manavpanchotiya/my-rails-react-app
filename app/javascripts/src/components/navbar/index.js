"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _lucideReact = require("lucide-react");
var _button = require("@/components/ui/button");
var _themeContext = require("@/lib/theme-context");
var _logo = require("./logo");
var _mainNav = require("./main-nav");
var _mobileNav = require("./mobile-nav");
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
var Navbar = function Navbar() {
  var _useTheme = (0, _themeContext.useTheme)(),
    theme = _useTheme.theme,
    toggleTheme = _useTheme.toggleTheme;
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "border-b"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex h-16 items-center px-4"
  }, /*#__PURE__*/_react["default"].createElement(_mobileNav.MobileNav, null), /*#__PURE__*/_react["default"].createElement(_logo.Logo, null), /*#__PURE__*/_react["default"].createElement(_mainNav.MainNav, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ml-auto flex items-center space-x-4"
  }, /*#__PURE__*/_react["default"].createElement(_button.Button, {
    variant: "outline",
    asChild: true
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/signin"
  }, "Sign In")), /*#__PURE__*/_react["default"].createElement(_button.Button, {
    asChild: true
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/signup"
  }, "Sign Up")), /*#__PURE__*/_react["default"].createElement(_button.Button, {
    variant: "ghost",
    size: "icon",
    onClick: toggleTheme
  }, theme === 'light' ? /*#__PURE__*/_react["default"].createElement(_lucideReact.Moon, {
    className: "h-5 w-5"
  }) : /*#__PURE__*/_react["default"].createElement(_lucideReact.Sun, {
    className: "h-5 w-5"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Toggle theme")))));
};
var _default = exports["default"] = Navbar;