"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroCards = void 0;
var _avatar = require("./ui/avatar");
var _badge = require("./ui/badge");
var _button = require("@/components/ui/button");
var _card = require("@/components/ui/card");
var _lucideReact = require("lucide-react");
var _Icons = require("./Icons");
var _reactIcons = require("@radix-ui/react-icons");
// Import necessary components and icons

// HeroCards Component
var HeroCards = exports.HeroCards = function HeroCards() {
  return /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]"
  }, /*#__PURE__*/React.createElement(_card.Card, {
    className: "absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10"
  }, /*#__PURE__*/React.createElement(_card.CardHeader, {
    className: "flex flex-row items-center gap-4 pb-2"
  }, /*#__PURE__*/React.createElement(_avatar.Avatar, null, /*#__PURE__*/React.createElement(_avatar.AvatarImage, {
    alt: "",
    src: "https://github.com/arish-me.png"
  }), /*#__PURE__*/React.createElement(_avatar.AvatarFallback, null, "AK")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement(_card.CardTitle, {
    className: "text-lg"
  }, "Arish Khan"), /*#__PURE__*/React.createElement(_card.CardDescription, null, "@arishdev"))), /*#__PURE__*/React.createElement(_card.CardContent, null, "This boilerplate makes starting new projects incredibly easy!")), /*#__PURE__*/React.createElement(_card.Card, {
    className: "absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10"
  }, /*#__PURE__*/React.createElement(_card.CardHeader, {
    className: "mt-8 flex justify-center items-center pb-2"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://i.pravatar.cc/150?img=58",
    alt: "user avatar",
    className: "absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
  }), /*#__PURE__*/React.createElement(_card.CardTitle, {
    className: "text-center"
  }, "Arish Khan"), /*#__PURE__*/React.createElement(_card.CardDescription, {
    className: "font-normal text-primary"
  }, "Full Stack Developer")), /*#__PURE__*/React.createElement(_card.CardContent, {
    className: "text-center pb-2"
  }, /*#__PURE__*/React.createElement("p", null, "I am passionate about building scalable and maintainable web applications. This boilerplate helps startups hit the ground running.")), /*#__PURE__*/React.createElement(_card.CardFooter, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    rel: "noreferrer noopener",
    href: "https://github.com/arish-me/arishdev",
    target: "_blank",
    className: (0, _button.buttonVariants)({
      variant: "ghost",
      size: "sm"
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Github icon"), /*#__PURE__*/React.createElement(_reactIcons.GitHubLogoIcon, {
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("a", {
    rel: "noreferrer noopener",
    href: "https://www.linkedin.com/in/arish-khan-784065104/",
    target: "_blank",
    className: (0, _button.buttonVariants)({
      variant: "ghost",
      size: "sm"
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Linkedin icon"), /*#__PURE__*/React.createElement(_lucideReact.Linkedin, {
    size: "20"
  }))))), /*#__PURE__*/React.createElement(_card.Card, {
    className: "absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10"
  }, /*#__PURE__*/React.createElement(_card.CardHeader, null, /*#__PURE__*/React.createElement(_card.CardTitle, {
    className: "flex item-center justify-between"
  }, "Free", /*#__PURE__*/React.createElement(_badge.Badge, {
    variant: "secondary",
    className: "text-sm text-primary"
  }, "Most popular")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl font-bold"
  }, "$0"), /*#__PURE__*/React.createElement("span", {
    className: "text-muted-foreground"
  }, " /month")), /*#__PURE__*/React.createElement(_card.CardDescription, null, "Perfect for startups looking to get off the ground without the cost.")), /*#__PURE__*/React.createElement(_card.CardContent, null, /*#__PURE__*/React.createElement(_button.Button, {
    className: "w-full"
  }, "Start Free Trial")), /*#__PURE__*/React.createElement("hr", {
    className: "w-4/5 m-auto mb-4"
  }), /*#__PURE__*/React.createElement(_card.CardFooter, {
    className: "flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, ["Authentication", "RBAC", "Rails-Vite Integration"].map(function (benefit) {
    return /*#__PURE__*/React.createElement("span", {
      key: benefit,
      className: "flex"
    }, /*#__PURE__*/React.createElement(_lucideReact.Check, {
      className: "text-green-500"
    }), " ", /*#__PURE__*/React.createElement("h3", {
      className: "ml-2"
    }, benefit));
  })))), /*#__PURE__*/React.createElement(_card.Card, {
    className: "absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10"
  }, /*#__PURE__*/React.createElement(_card.CardHeader, {
    className: "space-y-1 flex md:flex-row justify-start items-start gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-1 bg-primary/20 p-1 rounded-2xl"
  }, /*#__PURE__*/React.createElement(_Icons.LightBulbIcon, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_card.CardTitle, null, "Light & dark mode"), /*#__PURE__*/React.createElement(_card.CardDescription, {
    className: "text-md mt-2"
  }, "Seamlessly switch between light and dark themes to match your preference.")))));
};