"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarNav = SidebarNav;
var _reactRouterDom = require("react-router-dom");
var _utils = require("@/lib/utils");
var _button = require("@/components/ui/button");
var _excluded = ["className", "items"]; //import { usePathname } from "next/navigation"
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function SidebarNav(_ref) {
  var className = _ref.className,
    items = _ref.items,
    props = _objectWithoutProperties(_ref, _excluded);
  var location = (0, _reactRouterDom.useLocation)();
  var pathname = location.pathname;
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: (0, _utils.cn)("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className)
  }, props), items.map(function (item) {
    return /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
      key: item.href,
      to: item.href,
      className: (0, _utils.cn)((0, _button.buttonVariants)({
        variant: "ghost"
      }), pathname === item.href ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline", "justify-start")
    }, item.title);
  }));
}