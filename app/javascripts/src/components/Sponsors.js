"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sponsors = void 0;
var _lucideReact = require("lucide-react");
var sponsors = [{
  icon: /*#__PURE__*/React.createElement(_lucideReact.Radar, {
    size: 34
  }),
  name: "Sponsor 1"
}, {
  icon: /*#__PURE__*/React.createElement(_lucideReact.Radar, {
    size: 34
  }),
  name: "Sponsor 2"
}, {
  icon: /*#__PURE__*/React.createElement(_lucideReact.Radar, {
    size: 34
  }),
  name: "Sponsor 3"
}, {
  icon: /*#__PURE__*/React.createElement(_lucideReact.Radar, {
    size: 34
  }),
  name: "Sponsor 4"
}, {
  icon: /*#__PURE__*/React.createElement(_lucideReact.Radar, {
    size: 34
  }),
  name: "Sponsor 5"
}, {
  icon: /*#__PURE__*/React.createElement(_lucideReact.Radar, {
    size: 34
  }),
  name: "Sponsor 6"
}];
var Sponsors = exports.Sponsors = function Sponsors() {
  return /*#__PURE__*/React.createElement("section", {
    id: "sponsors",
    className: "container pt-24 sm:py-32"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-center text-md lg:text-xl font-bold mb-8 text-primary"
  }, "Investors and founders"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap justify-center items-center gap-4 md:gap-8"
  }, sponsors.map(function (_ref) {
    var icon = _ref.icon,
      name = _ref.name;
    return /*#__PURE__*/React.createElement("div", {
      key: name,
      className: "flex items-center gap-1 text-muted-foreground/60"
    }, /*#__PURE__*/React.createElement("span", null, icon), /*#__PURE__*/React.createElement("h3", {
      className: "text-xl  font-bold"
    }, name));
  })));
};