"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Features = void 0;
var _badge = require("./ui/badge");
var _card = require("@/components/ui/card");
var _growth = _interopRequireDefault(require("../assets/growth.png"));
var _reflecting = _interopRequireDefault(require("../assets/reflecting.png"));
var _lookingAhead = _interopRequireDefault(require("../assets/looking-ahead.png"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
var features = [{
  title: "Responsive Design",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
  image: _lookingAhead["default"]
}, {
  title: "Intuitive user interface",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
  image: _reflecting["default"]
}, {
  title: "AI-Powered insights",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
  image: _growth["default"]
}];
var featureList = ["Dark/Light theme", "Reviews", "Features", "Pricing", "Contact form", "Our team", "Responsive design", "Newsletter", "Minimalist"];
var Features = exports.Features = function Features() {
  return /*#__PURE__*/React.createElement("section", {
    id: "features",
    className: "container py-24 sm:py-32 space-y-8"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl lg:text-4xl font-bold md:text-center"
  }, "Many", " ", /*#__PURE__*/React.createElement("span", {
    className: "bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
  }, "Great Features")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap md:justify-center gap-4"
  }, featureList.map(function (feature) {
    return /*#__PURE__*/React.createElement("div", {
      key: feature
    }, /*#__PURE__*/React.createElement(_badge.Badge, {
      variant: "secondary",
      className: "text-sm"
    }, feature));
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
  }, features.map(function (_ref) {
    var title = _ref.title,
      description = _ref.description,
      image = _ref.image;
    return /*#__PURE__*/React.createElement(_card.Card, {
      key: title
    }, /*#__PURE__*/React.createElement(_card.CardHeader, null, /*#__PURE__*/React.createElement(_card.CardTitle, null, title)), /*#__PURE__*/React.createElement(_card.CardContent, null, description), /*#__PURE__*/React.createElement(_card.CardFooter, null, /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: "About feature",
      className: "w-[200px] lg:w-[300px] mx-auto"
    })));
  })));
};