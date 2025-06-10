"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Testimonials = void 0;
var _avatar = require("./ui/avatar");
var _card = require("@/components/ui/card");
var testimonials = [{
  image: "https://github.com/shadcn.png",
  name: "John Doe React",
  userName: "@john_Doe",
  comment: "This landing page is awesome!"
}, {
  image: "https://github.com/shadcn.png",
  name: "John Doe React",
  userName: "@john_Doe1",
  comment: "Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
}, {
  image: "https://github.com/shadcn.png",
  name: "John Doe React",
  userName: "@john_Doe2",
  comment: "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
}, {
  image: "https://github.com/shadcn.png",
  name: "John Doe React",
  userName: "@john_Doe3",
  comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
}, {
  image: "https://github.com/shadcn.png",
  name: "John Doe React",
  userName: "@john_Doe4",
  comment: "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud."
}, {
  image: "https://github.com/shadcn.png",
  name: "John Doe React",
  userName: "@john_Doe5",
  comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}];
var Testimonials = exports.Testimonials = function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    id: "testimonials",
    className: "container py-24 sm:py-32"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-4xl font-bold"
  }, "Discover Why", /*#__PURE__*/React.createElement("span", {
    className: "bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
  }, " ", "People Love", " "), "This Landing Page"), /*#__PURE__*/React.createElement("p", {
    className: "text-xl text-muted-foreground pt-4 pb-8"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error facere hic reiciendis illo"), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6"
  }, testimonials.map(function (_ref) {
    var image = _ref.image,
      name = _ref.name,
      userName = _ref.userName,
      comment = _ref.comment;
    return /*#__PURE__*/React.createElement(_card.Card, {
      key: userName,
      className: "max-w-md md:break-inside-avoid overflow-hidden"
    }, /*#__PURE__*/React.createElement(_card.CardHeader, {
      className: "flex flex-row items-center gap-4 pb-2"
    }, /*#__PURE__*/React.createElement(_avatar.Avatar, null, /*#__PURE__*/React.createElement(_avatar.AvatarImage, {
      alt: "",
      src: image
    }), /*#__PURE__*/React.createElement(_avatar.AvatarFallback, null, "OM")), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col"
    }, /*#__PURE__*/React.createElement(_card.CardTitle, {
      className: "text-lg"
    }, name), /*#__PURE__*/React.createElement(_card.CardDescription, null, userName))), /*#__PURE__*/React.createElement(_card.CardContent, null, comment));
  })));
};