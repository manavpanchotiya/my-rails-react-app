"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hero = void 0;
var _button = require("./ui/button");
var _HeroCards = require("./HeroCards");
var _reactIcons = require("@radix-ui/react-icons");
var _reactRouterDom = require("react-router-dom");
// Import necessary components and icons

// Hero Component
var Hero = exports.Hero = function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center lg:text-start space-y-6"
  }, /*#__PURE__*/React.createElement("main", {
    className: "text-5xl md:text-6xl font-bold"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "inline"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text"
  }, "Vite-Rails"), " ", "boilerplate for"), " ", /*#__PURE__*/React.createElement("h2", {
    className: "inline"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text"
  }, "React & Shadcn"), " ", "startups")), /*#__PURE__*/React.createElement("p", {
    className: "text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0"
  }, "Kickstart your startup projects with this powerful Vite-Rails boilerplate. It integrates React, Shadcn, and other modern tools, saving you time and effort."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 md:space-y-0 md:space-x-4"
  }, /*#__PURE__*/React.createElement(_button.Button, {
    className: "w-full md:w-1/3",
    asChild: true
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/signin"
  }, "Get Started")), /*#__PURE__*/React.createElement("a", {
    rel: "noreferrer noopener",
    href: "https://github.com/arish-me/rails-vite-wheel",
    target: "_blank",
    className: "w-full md:w-1/3 ".concat((0, _button.buttonVariants)({
      variant: "outline"
    }))
  }, "Github Repository", /*#__PURE__*/React.createElement(_reactIcons.GitHubLogoIcon, {
    className: "ml-2 w-5 h-5"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "z-10"
  }, /*#__PURE__*/React.createElement(_HeroCards.HeroCards, null)), /*#__PURE__*/React.createElement("div", {
    className: "shadow"
  }));
};