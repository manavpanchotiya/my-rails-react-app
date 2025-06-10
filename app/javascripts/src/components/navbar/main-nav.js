"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainNav = MainNav;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _utils = require("@/lib/utils");
var _navigationMenu = require("@/components/ui/navigation-menu");
var _list_item = require("@/components/navbar/list_item");
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
function MainNav() {
  var location = (0, _reactRouterDom.useLocation)();
  return /*#__PURE__*/_react["default"].createElement(_navigationMenu.NavigationMenu, {
    className: "hidden md:flex"
  }, /*#__PURE__*/_react["default"].createElement(_navigationMenu.NavigationMenuList, null, /*#__PURE__*/_react["default"].createElement(_navigationMenu.NavigationMenuItem, null, /*#__PURE__*/_react["default"].createElement(_navigationMenu.NavigationMenuTrigger, null, "Getting started"), /*#__PURE__*/_react["default"].createElement(_navigationMenu.NavigationMenuContent, null, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
  }, /*#__PURE__*/_react["default"].createElement("li", {
    className: "row-span-3"
  }, /*#__PURE__*/_react["default"].createElement(_navigationMenu.NavigationMenuLink, {
    asChild: true
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-2 mt-4 text-lg font-medium"
  }, "shadcn/ui"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm leading-tight text-muted-foreground"
  }, "Beautifully designed components built with Radix UI and Tailwind CSS.")))), /*#__PURE__*/_react["default"].createElement(_list_item.ListItem, {
    href: "/docs",
    title: "Introduction"
  }, "Re-usable components built using Radix UI and Tailwind CSS."), /*#__PURE__*/_react["default"].createElement(_list_item.ListItem, {
    href: "/docs/installation",
    title: "Installation"
  }, "How to install dependencies and structure your app."), /*#__PURE__*/_react["default"].createElement(_list_item.ListItem, {
    href: "/docs/primitives/typography",
    title: "Typography"
  }, "Styles for headings, paragraphs, lists...etc")))), items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_navigationMenu.NavigationMenuItem, {
      key: item.href
    }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: item.href,
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_navigationMenu.NavigationMenuLink, {
      className: (0, _utils.cn)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 group w-max", item.href === location.pathname ? "bg-accent text-accent-foreground" : "text-muted-foreground")
    }, item.title)));
  })));
}