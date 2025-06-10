"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Services = void 0;
var _card = require("./ui/card");
var _Icons = require("./Icons");
var _cubeLeg = _interopRequireDefault(require("../assets/cube-leg.png"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
var serviceList = [{
  title: "Code Collaboration",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
  icon: /*#__PURE__*/React.createElement(_Icons.ChartIcon, null)
}, {
  title: "Project Management",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
  icon: /*#__PURE__*/React.createElement(_Icons.WalletIcon, null)
}, {
  title: "Task Automation",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
  icon: /*#__PURE__*/React.createElement(_Icons.MagnifierIcon, null)
}];
var Services = exports.Services = function Services() {
  return /*#__PURE__*/React.createElement("section", {
    className: "container py-24 sm:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-4xl font-bold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
  }, "Client-Centric", " "), "Services"), /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground text-xl mt-4 mb-8 "
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-8"
  }, serviceList.map(function (_ref) {
    var icon = _ref.icon,
      title = _ref.title,
      description = _ref.description;
    return /*#__PURE__*/React.createElement(_card.Card, {
      key: title
    }, /*#__PURE__*/React.createElement(_card.CardHeader, {
      className: "space-y-1 flex md:flex-row justify-start items-start gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mt-1 bg-primary/20 p-1 rounded-2xl"
    }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_card.CardTitle, null, title), /*#__PURE__*/React.createElement(_card.CardDescription, {
      className: "text-md mt-2"
    }, description))));
  }))), /*#__PURE__*/React.createElement("img", {
    src: _cubeLeg["default"],
    className: "w-[300px] md:w-[500px] lg:w-[600px] object-contain",
    alt: "About services"
  })));
};