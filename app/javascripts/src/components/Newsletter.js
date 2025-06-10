"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Newsletter = void 0;
var _button = require("./ui/button");
var _input = require("./ui/input");
var Newsletter = exports.Newsletter = function Newsletter() {
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log("Subscribed!");
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "newsletter"
  }, /*#__PURE__*/React.createElement("hr", {
    className: "w-11/12 mx-auto"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container py-24 sm:py-32"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-center text-4xl md:text-5xl font-bold"
  }, "Join Our Daily", " ", /*#__PURE__*/React.createElement("span", {
    className: "bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
  }, "Newsletter")), /*#__PURE__*/React.createElement("p", {
    className: "text-xl text-muted-foreground text-center mt-4 mb-8"
  }, "Lorem ipsum dolor sit amet consectetur."), /*#__PURE__*/React.createElement("form", {
    className: "flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(_input.Input, {
    placeholder: "leomirandadev@gmail.com",
    className: "bg-muted/50 dark:bg-muted/80 ",
    "aria-label": "email"
  }), /*#__PURE__*/React.createElement(_button.Button, null, "Subscribe"))), /*#__PURE__*/React.createElement("hr", {
    className: "w-11/12 mx-auto"
  }));
};