"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HowItWorks = void 0;
var _card = require("./ui/card");
var _Icons = require("../components/Icons");
var features = [{
  icon: /*#__PURE__*/React.createElement(_Icons.MedalIcon, null),
  title: "Accessibility",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum"
}, {
  icon: /*#__PURE__*/React.createElement(_Icons.MapIcon, null),
  title: "Community",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum"
}, {
  icon: /*#__PURE__*/React.createElement(_Icons.PlaneIcon, null),
  title: "Scalability",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum"
}, {
  icon: /*#__PURE__*/React.createElement(_Icons.GiftIcon, null),
  title: "Gamification",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum"
}];
var HowItWorks = exports.HowItWorks = function HowItWorks() {
  return /*#__PURE__*/React.createElement("section", {
    id: "howItWorks",
    className: "container text-center py-24 sm:py-32"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-4xl font-bold "
  }, "How It", " ", /*#__PURE__*/React.createElement("span", {
    className: "bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
  }, "Works", " "), "Step-by-Step Guide"), /*#__PURE__*/React.createElement("p", {
    className: "md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground"
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor pariatur sit!"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
  }, features.map(function (_ref) {
    var icon = _ref.icon,
      title = _ref.title,
      description = _ref.description;
    return /*#__PURE__*/React.createElement(_card.Card, {
      key: title,
      className: "bg-muted/50"
    }, /*#__PURE__*/React.createElement(_card.CardHeader, null, /*#__PURE__*/React.createElement(_card.CardTitle, {
      className: "grid gap-4 place-items-center"
    }, icon, title)), /*#__PURE__*/React.createElement(_card.CardContent, null, description));
  })));
};