"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _navigationMenu = require("@/components/ui/navigation-menu");
var _utils = require("@/lib/utils");
var _excluded = ["className", "title", "children"];
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
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
// Define the props interface

var ListItem = exports.ListItem = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var className = _ref.className,
    title = _ref.title,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_navigationMenu.NavigationMenuLink, {
    asChild: true
  }, /*#__PURE__*/_react["default"].createElement("div", _extends({
    ref: ref,
    className: (0, _utils.cn)("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)
  }, props), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm font-medium leading-none"
  }, title), /*#__PURE__*/_react["default"].createElement("p", {
    className: "line-clamp-2 text-sm leading-snug text-muted-foreground"
  }, children))));
});

// Add displayName for debugging
ListItem.displayName = "ListItem";