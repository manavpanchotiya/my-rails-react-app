"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.About = void 0;
var _Statistics = require("./Statistics");
var _pilot = _interopRequireDefault(require("../assets/pilot.png"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
var About = exports.About = function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "container py-24 sm:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-muted/50 border rounded-lg py-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12"
  }, /*#__PURE__*/React.createElement("img", {
    src: _pilot["default"],
    alt: "",
    className: "w-[300px] object-contain rounded-lg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bg-green-0 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-4xl font-bold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
  }, "About", " "), "Company"), /*#__PURE__*/React.createElement("p", {
    className: "text-xl text-muted-foreground mt-4"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.")), /*#__PURE__*/React.createElement(_Statistics.Statistics, null)))));
};