"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logo = void 0;
var _reactRouterDom = require("react-router-dom");
var Logo = exports.Logo = function Logo() {
  return /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 10V3L4 14h7v7l9-11h-7z"
  })), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-xl"
  }, "Your Logo"));
};