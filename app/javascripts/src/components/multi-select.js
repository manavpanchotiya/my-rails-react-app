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
exports.MultiSelect = void 0;
var React = _interopRequireWildcard(require("react"));
var _classVarianceAuthority = require("class-variance-authority");
var _lucideReact = require("lucide-react");
var _utils = require("@/lib/utils");
var _separator = require("@/components/ui/separator");
var _button = require("@/components/ui/button");
var _badge = require("@/components/ui/badge");
var _popover = require("@/components/ui/popover");
var _command = require("@/components/ui/command");
var _excluded = ["options", "onValueChange", "variant", "defaultValue", "placeholder", "animation", "maxCount", "modalPopover", "className"]; // src/components/multi-select.tsx
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
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
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
/**
 * Variants for the multi-select component to handle different styles.
 * Uses class-variance-authority (cva) to define different styles based on "variant" prop.
 */
var multiSelectVariants = (0, _classVarianceAuthority.cva)("m-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300", {
  variants: {
    variant: {
      "default": "border-foreground/10 text-foreground bg-card hover:bg-card/80",
      secondary: "border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      inverted: "inverted"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

/**
 * Props for MultiSelect component
 */

var MultiSelect = exports.MultiSelect = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var options = _ref.options,
    onValueChange = _ref.onValueChange,
    variant = _ref.variant,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? [] : _ref$defaultValue,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Select options" : _ref$placeholder,
    _ref$animation = _ref.animation,
    animation = _ref$animation === void 0 ? 0 : _ref$animation,
    _ref$maxCount = _ref.maxCount,
    maxCount = _ref$maxCount === void 0 ? 3 : _ref$maxCount,
    _ref$modalPopover = _ref.modalPopover,
    modalPopover = _ref$modalPopover === void 0 ? false : _ref$modalPopover,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var _React$useState = React.useState(defaultValue),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    selectedValues = _React$useState2[0],
    setSelectedValues = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    isPopoverOpen = _React$useState4[0],
    setIsPopoverOpen = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    isAnimating = _React$useState6[0],
    setIsAnimating = _React$useState6[1];
  var handleInputKeyDown = function handleInputKeyDown(event) {
    if (event.key === "Enter") {
      setIsPopoverOpen(true);
    } else if (event.key === "Backspace" && !event.currentTarget.value) {
      var newSelectedValues = _toConsumableArray(selectedValues);
      newSelectedValues.pop();
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    }
  };
  var toggleOption = function toggleOption(option) {
    var newSelectedValues = selectedValues.includes(option) ? selectedValues.filter(function (value) {
      return value !== option;
    }) : [].concat(_toConsumableArray(selectedValues), [option]);
    setSelectedValues(newSelectedValues);
    onValueChange(newSelectedValues);
  };
  var handleClear = function handleClear() {
    setSelectedValues([]);
    onValueChange([]);
  };
  var handleTogglePopover = function handleTogglePopover() {
    setIsPopoverOpen(function (prev) {
      return !prev;
    });
  };
  var clearExtraOptions = function clearExtraOptions() {
    var newSelectedValues = selectedValues.slice(0, maxCount);
    setSelectedValues(newSelectedValues);
    onValueChange(newSelectedValues);
  };
  var toggleAll = function toggleAll() {
    if (selectedValues.length === options.length) {
      handleClear();
    } else {
      var allValues = options.map(function (option) {
        return option.value;
      });
      setSelectedValues(allValues);
      onValueChange(allValues);
    }
  };
  return /*#__PURE__*/React.createElement(_popover.Popover, {
    open: isPopoverOpen,
    onOpenChange: setIsPopoverOpen,
    modal: modalPopover
  }, /*#__PURE__*/React.createElement(_popover.PopoverTrigger, {
    asChild: true
  }, /*#__PURE__*/React.createElement(_button.Button, _extends({
    ref: ref
  }, props, {
    onClick: handleTogglePopover,
    className: (0, _utils.cn)("flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between bg-inherit hover:bg-inherit", className)
  }), selectedValues.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center"
  }, selectedValues.slice(0, maxCount).map(function (value) {
    var option = options.find(function (o) {
      return o.value === value;
    });
    var IconComponent = option === null || option === void 0 ? void 0 : option.icon;
    return /*#__PURE__*/React.createElement(_badge.Badge, {
      key: value,
      className: (0, _utils.cn)(isAnimating ? "animate-bounce" : "", multiSelectVariants({
        variant: variant
      })),
      style: {
        animationDuration: "".concat(animation, "s")
      }
    }, IconComponent && /*#__PURE__*/React.createElement(IconComponent, {
      className: "h-4 w-4 mr-2"
    }), option === null || option === void 0 ? void 0 : option.label, /*#__PURE__*/React.createElement(_lucideReact.XCircle, {
      className: "ml-2 h-4 w-4 cursor-pointer",
      onClick: function onClick(event) {
        event.stopPropagation();
        toggleOption(value);
      }
    }));
  }), selectedValues.length > maxCount && /*#__PURE__*/React.createElement(_badge.Badge, {
    className: (0, _utils.cn)("bg-transparent text-foreground border-foreground/1 hover:bg-transparent", isAnimating ? "animate-bounce" : "", multiSelectVariants({
      variant: variant
    })),
    style: {
      animationDuration: "".concat(animation, "s")
    }
  }, "+ ".concat(selectedValues.length - maxCount, " more"), /*#__PURE__*/React.createElement(_lucideReact.XCircle, {
    className: "ml-2 h-4 w-4 cursor-pointer",
    onClick: function onClick(event) {
      event.stopPropagation();
      clearExtraOptions();
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement(_lucideReact.XIcon, {
    className: "h-4 mx-2 cursor-pointer text-muted-foreground",
    onClick: function onClick(event) {
      event.stopPropagation();
      handleClear();
    }
  }), /*#__PURE__*/React.createElement(_separator.Separator, {
    orientation: "vertical",
    className: "flex min-h-6 h-full"
  }), /*#__PURE__*/React.createElement(_lucideReact.ChevronDown, {
    className: "h-4 mx-2 cursor-pointer text-muted-foreground"
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between w-full mx-auto"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-muted-foreground mx-3"
  }, placeholder), /*#__PURE__*/React.createElement(_lucideReact.ChevronDown, {
    className: "h-4 cursor-pointer text-muted-foreground mx-2"
  })))), /*#__PURE__*/React.createElement(_popover.PopoverContent, {
    className: "w-auto p-0",
    align: "start",
    onEscapeKeyDown: function onEscapeKeyDown() {
      return setIsPopoverOpen(false);
    }
  }, /*#__PURE__*/React.createElement(_command.Command, null, /*#__PURE__*/React.createElement(_command.CommandInput, {
    placeholder: "Search...",
    onKeyDown: handleInputKeyDown
  }), /*#__PURE__*/React.createElement(_command.CommandList, null, /*#__PURE__*/React.createElement(_command.CommandEmpty, null, "No results found."), /*#__PURE__*/React.createElement(_command.CommandGroup, null, /*#__PURE__*/React.createElement(_command.CommandItem, {
    key: "all",
    onSelect: toggleAll,
    className: "cursor-pointer"
  }, /*#__PURE__*/React.createElement("div", {
    className: (0, _utils.cn)("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", selectedValues.length === options.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible")
  }, /*#__PURE__*/React.createElement(_lucideReact.CheckIcon, {
    className: "h-4 w-4"
  })), /*#__PURE__*/React.createElement("span", null, "(Select All)")), options.map(function (option) {
    var isSelected = selectedValues.includes(option.value);
    return /*#__PURE__*/React.createElement(_command.CommandItem, {
      key: option.value,
      onSelect: function onSelect() {
        return toggleOption(option.value);
      },
      className: "cursor-pointer"
    }, /*#__PURE__*/React.createElement("div", {
      className: (0, _utils.cn)("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible")
    }, /*#__PURE__*/React.createElement(_lucideReact.CheckIcon, {
      className: "h-4 w-4"
    })), option.icon && /*#__PURE__*/React.createElement(option.icon, {
      className: "mr-2 h-4 w-4 text-muted-foreground"
    }), /*#__PURE__*/React.createElement("span", null, option.label));
  })), /*#__PURE__*/React.createElement(_command.CommandSeparator, null), /*#__PURE__*/React.createElement(_command.CommandGroup, null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, selectedValues.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_command.CommandItem, {
    onSelect: handleClear,
    className: "flex-1 justify-center cursor-pointer"
  }, "Clear"), /*#__PURE__*/React.createElement(_separator.Separator, {
    orientation: "vertical",
    className: "flex min-h-6 h-full"
  })), /*#__PURE__*/React.createElement(_command.CommandItem, {
    onSelect: function onSelect() {
      return setIsPopoverOpen(false);
    },
    className: "flex-1 justify-center cursor-pointer max-w-full"
  }, "Close")))))), animation > 0 && selectedValues.length > 0 && /*#__PURE__*/React.createElement(_lucideReact.WandSparkles, {
    className: (0, _utils.cn)("cursor-pointer my-2 text-foreground bg-background w-3 h-3", isAnimating ? "" : "text-muted-foreground"),
    onClick: function onClick() {
      return setIsAnimating(!isAnimating);
    }
  }));
});
MultiSelect.displayName = "MultiSelect";