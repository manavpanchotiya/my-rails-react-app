"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.containerClassName = void 0;
exports["default"] = Login;
exports.iframeHeight = void 0;
var _page = require("@/components/auth/page");
var iframeHeight = exports.iframeHeight = "870px";
var containerClassName = exports.containerClassName = "w-full h-full";
function Login() {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-screen w-full"
  }, /*#__PURE__*/React.createElement(_page.Page, null));
}