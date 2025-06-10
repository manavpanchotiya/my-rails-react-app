"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionTrigger = exports.AccordionItem = exports.AccordionContent = exports.Accordion = void 0;
var React = _interopRequireWildcard(require("react"));
var AccordionPrimitive = _interopRequireWildcard(require("@radix-ui/react-accordion"));
var _lucideReact = require("lucide-react");
var _utils = require("@/lib/utils");
var _excluded = ["className"],
  _excluded2 = ["className", "children"],
  _excluded3 = ["className", "children"];
function _interopRequireWildcard(e, t) {
  if ("function" == typeof WeakMap) var r = new WeakMap(),
    n = new WeakMap();
  return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      f = {
        __proto__: null,
        "default": e
      };
    if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;
    if (o = t ? n : r) {
      if (o.has(e)) return o.get(e);
      o.set(e, f);
    }
    for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);
    return f;
  })(e, t);
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
var Accordion = exports.Accordion = AccordionPrimitive.Root;
var AccordionItem = exports.AccordionItem = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(AccordionPrimitive.Item, _extends({
    ref: ref,
    className: (0, _utils.cn)("border-b", className)
  }, props));
});
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = exports.AccordionTrigger = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
    children = _ref2.children,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement(AccordionPrimitive.Header, {
    className: "flex"
  }, /*#__PURE__*/React.createElement(AccordionPrimitive.Trigger, _extends({
    ref: ref,
    className: (0, _utils.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className)
  }, props), children, /*#__PURE__*/React.createElement(_lucideReact.ChevronDown, {
    className: "h-4 w-4 shrink-0 transition-transform duration-200"
  })));
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = exports.AccordionContent = /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
  var className = _ref3.className,
    children = _ref3.children,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/React.createElement(AccordionPrimitive.Content, _extends({
    ref: ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  }, props), /*#__PURE__*/React.createElement("div", {
    className: (0, _utils.cn)("pb-4 pt-0 text-muted-foreground text-[16px]", className)
  }, children));
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;