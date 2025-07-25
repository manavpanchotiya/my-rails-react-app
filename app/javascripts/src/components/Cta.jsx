"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cta = void 0;
var _button = require("./ui/button");
var Cta = exports.Cta = function Cta() {
  return /*#__PURE__*/React.createElement("section", {
    id: "cta",
    className: "bg-muted/50 py-16 my-24 sm:my-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container lg:grid lg:grid-cols-2 place-items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-start-1"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-4xl font-bold "
  }, "All Your", /*#__PURE__*/React.createElement("span", {
    className: "bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
  }, " ", "Ideas & Concepts", " "), "In One Interface"), /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground text-xl mt-4 mb-8 lg:mb-0"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, beatae. Ipsa tempore ipsum iste quibusdam illum ducimus eos. Quasi, sed!")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 lg:col-start-2"
  }, /*#__PURE__*/React.createElement(_button.Button, {
    className: "w-full md:mr-4 md:w-auto"
  }, "Request a Demo"), /*#__PURE__*/React.createElement(_button.Button, {
    variant: "outline",
    className: "w-full md:w-auto"
  }, "View all features"))));
};