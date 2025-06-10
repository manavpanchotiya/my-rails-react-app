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
exports.SelectValue = exports.SelectTrigger = exports.SelectSeparator = exports.SelectScrollUpButton = exports.SelectScrollDownButton = exports.SelectLabel = exports.SelectItem = exports.SelectGroup = exports.SelectContent = exports.Select = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactIcons = require("@radix-ui/react-icons");
var SelectPrimitive = _interopRequireWildcard(require("@radix-ui/react-select"));
var _utils = require("@/lib/utils");
var _excluded = ["className", "children"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className", "children", "position"],
  _excluded5 = ["className"],
  _excluded6 = ["className", "children"],
  _excluded7 = ["className"];
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
var Select = exports.Select = SelectPrimitive.Root;
var SelectGroup = exports.SelectGroup = SelectPrimitive.Group;
var SelectValue = exports.SelectValue = SelectPrimitive.Value;
var SelectTrigger = exports.SelectTrigger = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(SelectPrimitive.Trigger, _extends({
    ref: ref,
    className: (0, _utils.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className)
  }, props), children, /*#__PURE__*/React.createElement(SelectPrimitive.Icon, {
    asChild: true
  }, /*#__PURE__*/React.createElement(_reactIcons.CaretSortIcon, {
    className: "h-4 w-4 opacity-50"
  })));
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = exports.SelectScrollUpButton = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement(SelectPrimitive.ScrollUpButton, _extends({
    ref: ref,
    className: (0, _utils.cn)("flex cursor-default items-center justify-center py-1", className)
  }, props), /*#__PURE__*/React.createElement(_reactIcons.ChevronUpIcon, null));
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = exports.SelectScrollDownButton = /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/React.createElement(SelectPrimitive.ScrollDownButton, _extends({
    ref: ref,
    className: (0, _utils.cn)("flex cursor-default items-center justify-center py-1", className)
  }, props), /*#__PURE__*/React.createElement(_reactIcons.ChevronDownIcon, null));
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = exports.SelectContent = /*#__PURE__*/React.forwardRef(function (_ref4, ref) {
  var className = _ref4.className,
    children = _ref4.children,
    _ref4$position = _ref4.position,
    position = _ref4$position === void 0 ? "popper" : _ref4$position,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/React.createElement(SelectPrimitive.Portal, null, /*#__PURE__*/React.createElement(SelectPrimitive.Content, _extends({
    ref: ref,
    className: (0, _utils.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
    position: position
  }, props), /*#__PURE__*/React.createElement(SelectScrollUpButton, null), /*#__PURE__*/React.createElement(SelectPrimitive.Viewport, {
    className: (0, _utils.cn)("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")
  }, children), /*#__PURE__*/React.createElement(SelectScrollDownButton, null)));
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = exports.SelectLabel = /*#__PURE__*/React.forwardRef(function (_ref5, ref) {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/React.createElement(SelectPrimitive.Label, _extends({
    ref: ref,
    className: (0, _utils.cn)("px-2 py-1.5 text-sm font-semibold", className)
  }, props));
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = exports.SelectItem = /*#__PURE__*/React.forwardRef(function (_ref6, ref) {
  var className = _ref6.className,
    children = _ref6.children,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/React.createElement(SelectPrimitive.Item, _extends({
    ref: ref,
    className: (0, _utils.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center"
  }, /*#__PURE__*/React.createElement(SelectPrimitive.ItemIndicator, null, /*#__PURE__*/React.createElement(_reactIcons.CheckIcon, {
    className: "h-4 w-4"
  }))), /*#__PURE__*/React.createElement(SelectPrimitive.ItemText, null, children));
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = exports.SelectSeparator = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded7);
  return /*#__PURE__*/React.createElement(SelectPrimitive.Separator, _extends({
    ref: ref,
    className: (0, _utils.cn)("-mx-1 my-1 h-px bg-muted", className)
  }, props));
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;