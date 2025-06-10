"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = Page;
var _react = _interopRequireDefault(require("react"));
var _userAuthForm = require("./user-auth-form");
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
function Page() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-zinc-900"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative z-20 flex items-center text-lg font-medium"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "mr-2 h-6 w-6"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
  })), "Acme Inc"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative z-20 mt-auto"
  }, /*#__PURE__*/_react["default"].createElement("blockquote", {
    className: "space-y-2"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-lg"
  }, "\u201CThis library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.\u201D"), /*#__PURE__*/_react["default"].createElement("footer", {
    className: "text-sm"
  }, "Sofia Davis")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "lg:p-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
  }, /*#__PURE__*/_react["default"].createElement(_userAuthForm.UserAuthForm, null), /*#__PURE__*/_react["default"].createElement("p", {
    className: "px-8 text-center text-sm text-muted-foreground"
  }, "By clicking continue, you agree to our", " ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "/terms",
    className: "underline underline-offset-4 hover:text-primary"
  }, "Terms of Service"), " ", "and", " ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "/privacy",
    className: "underline underline-offset-4 hover:text-primary"
  }, "Privacy Policy"), ".")))));
}