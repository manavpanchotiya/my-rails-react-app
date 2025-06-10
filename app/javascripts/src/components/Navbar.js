"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = void 0;
var _react = require("react");
var _navigationMenu = require("@/components/ui/navigation-menu");
var _sheet = require("@/components/ui/sheet");
var _button = require("@/components/ui/button");
var _reactRouterDom = require("react-router-dom");
var _reactIcons = require("@radix-ui/react-icons");
var _button2 = require("./ui/button");
var _lucideReact = require("lucide-react");
var _modeToggle = require("./mode-toggle");
var _Icons = require("./Icons");
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
var routeList = [{
  href: "#features",
  label: "Features"
}, {
  href: "#testimonials",
  label: "Testimonials"
}, {
  href: "#pricing",
  label: "Pricing"
}, {
  href: "#faq",
  label: "FAQ"
}];
var Navbar = exports.Navbar = function Navbar() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  return /*#__PURE__*/React.createElement("header", {
    className: "sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background"
  }, /*#__PURE__*/React.createElement(_navigationMenu.NavigationMenu, {
    className: "mx-auto"
  }, /*#__PURE__*/React.createElement(_navigationMenu.NavigationMenuList, {
    className: "container h-14 px-4 w-screen flex justify-between "
  }, /*#__PURE__*/React.createElement(_navigationMenu.NavigationMenuItem, {
    className: "font-bold flex"
  }, /*#__PURE__*/React.createElement("a", {
    rel: "noreferrer noopener",
    href: "/",
    className: "ml-2 font-bold text-xl flex"
  }, /*#__PURE__*/React.createElement(_Icons.LogoIcon, null), "Rails-Vite Wheel")), /*#__PURE__*/React.createElement("span", {
    className: "flex md:hidden"
  }, /*#__PURE__*/React.createElement(_modeToggle.ModeToggle, null), /*#__PURE__*/React.createElement(_sheet.Sheet, {
    open: isOpen,
    onOpenChange: setIsOpen
  }, /*#__PURE__*/React.createElement(_sheet.SheetTrigger, {
    className: "px-2"
  }, /*#__PURE__*/React.createElement(_lucideReact.Menu, {
    className: "flex md:hidden h-5 w-5",
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Menu Icon"))), /*#__PURE__*/React.createElement(_sheet.SheetContent, {
    side: "left"
  }, /*#__PURE__*/React.createElement(_sheet.SheetHeader, null, /*#__PURE__*/React.createElement(_sheet.SheetTitle, {
    className: "font-bold text-xl"
  }, "Shadcn/React")), /*#__PURE__*/React.createElement("nav", {
    className: "flex flex-col justify-center items-center gap-2 mt-4"
  }, routeList.map(function (_ref) {
    var href = _ref.href,
      label = _ref.label;
    return /*#__PURE__*/React.createElement("a", {
      rel: "noreferrer noopener",
      key: label,
      href: href,
      onClick: function onClick() {
        return setIsOpen(false);
      },
      className: (0, _button2.buttonVariants)({
        variant: "ghost"
      })
    }, label);
  }), /*#__PURE__*/React.createElement("a", {
    rel: "noreferrer noopener",
    href: "https://github.com/leoMirandaa/shadcn-landing-page.git",
    target: "_blank",
    className: "w-[110px] border ".concat((0, _button2.buttonVariants)({
      variant: "secondary"
    }))
  }, /*#__PURE__*/React.createElement(_reactIcons.GitHubLogoIcon, {
    className: "mr-2 w-5 h-5"
  }), "Github"))))), /*#__PURE__*/React.createElement("nav", {
    className: "hidden md:flex gap-2"
  }, routeList.map(function (route, i) {
    return /*#__PURE__*/React.createElement("a", {
      rel: "noreferrer noopener",
      href: route.href,
      key: i,
      className: "text-[17px] ".concat((0, _button2.buttonVariants)({
        variant: "ghost"
      }))
    }, route.label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex gap-2"
  }, /*#__PURE__*/React.createElement(_button.Button, {
    asChild: true
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/signin"
  }, "Get Started")), /*#__PURE__*/React.createElement("a", {
    rel: "noreferrer noopener",
    href: "https://github.com/arish-me/rails-vite-wheel",
    target: "_blank",
    className: "border ".concat((0, _button2.buttonVariants)({
      variant: "secondary"
    }))
  }, /*#__PURE__*/React.createElement(_reactIcons.GitHubLogoIcon, {
    className: "mr-2 w-5 h-5"
  }), "Github"), /*#__PURE__*/React.createElement(_modeToggle.ModeToggle, null)))));
};