"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileNav = MobileNav;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _lucideReact = require("lucide-react");
var _button = require("@/components/ui/button");
var _sheet = require("@/components/ui/sheet");
var _scrollArea = require("@/components/ui/scroll-area");
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
var items = [{
  title: "Home",
  href: "/"
}, {
  title: "About",
  href: "/about"
}, {
  title: "Services",
  href: "/services"
}, {
  title: "Contact",
  href: "/contact"
}];
function MobileNav() {
  return /*#__PURE__*/_react["default"].createElement(_sheet.Sheet, null, /*#__PURE__*/_react["default"].createElement(_sheet.SheetTrigger, {
    asChild: true
  }, /*#__PURE__*/_react["default"].createElement(_button.Button, {
    variant: "ghost",
    className: "md:hidden",
    size: "icon"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.Menu, {
    className: "h-5 w-5"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Toggle menu"))), /*#__PURE__*/_react["default"].createElement(_sheet.SheetContent, {
    side: "left",
    className: "w-[300px] sm:w-[400px]"
  }, /*#__PURE__*/_react["default"].createElement(_scrollArea.ScrollArea, {
    className: "my-4 h-[calc(100vh-8rem)] pb-10 pl-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col space-y-3"
  }, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      key: item.href,
      to: item.href,
      className: "text-muted-foreground hover:text-primary"
    }, item.title);
  })))));
}