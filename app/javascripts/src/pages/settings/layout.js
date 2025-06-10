"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SettingsLayout;
var _reactRouterDom = require("react-router-dom");
var _separator = require("@/components/ui/separator");
var _sidebarNav = require("@/components/sidebar-nav");
// CategoriesPage.tsx

function SettingsLayout() {
  var sidebarNavItems = [{
    title: "Profile",
    href: "/settings/profile"
  }, {
    title: "Account",
    href: "/settings/account"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden rounded-[0.5rem] border bg-background shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden space-y-6 p-10 pb-16 md:block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-0.5"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold tracking-tight"
  }, "Settings"), /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground"
  }, "Manage your account settings and set e-mail preferences.")), /*#__PURE__*/React.createElement(_separator.Separator, {
    className: "my-6"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "-mx-4 lg:w-1/5"
  }, /*#__PURE__*/React.createElement(_sidebarNav.SidebarNav, {
    items: sidebarNavItems
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 lg:max-w-2xl"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Outlet, null)))));
}