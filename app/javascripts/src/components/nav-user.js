"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavUser = NavUser;
var _lucideReact = require("lucide-react");
var _avatar = require("@/components/ui/avatar");
var _dropdownMenu = require("@/components/ui/dropdown-menu");
var _sidebar = require("@/components/ui/sidebar");
var _authActions = require("@/features/auth/authActions");
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
function NavUser(_ref) {
  var user = _ref.user;
  var _useSidebar = (0, _sidebar.useSidebar)(),
    isMobile = _useSidebar.isMobile;
  var dispatch = (0, _reactRedux.useDispatch)();
  var handleLogout = function handleLogout() {
    dispatch((0, _authActions.userLogout)());
  };
  var profile = user.profile;
  var formatName = function formatName(user) {
    var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var profile = user === null || user === void 0 ? void 0 : user.profile;
    if (profile && profile.first_name && profile.last_name) {
      if (placeholder) {
        return "".concat(profile.first_name[0]).concat(profile.last_name[0]).toUpperCase();
      } else {
        return "".concat(profile.first_name, " ").concat(profile.last_name);
      }
    } else {
      // Fallback to first two letters of email if profile or names are missing
      return user.email.slice(0, 2).toUpperCase();
    }
  };
  return /*#__PURE__*/React.createElement(_sidebar.SidebarMenu, null, /*#__PURE__*/React.createElement(_sidebar.SidebarMenuItem, null, /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenu, null, /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuTrigger, {
    asChild: true
  }, /*#__PURE__*/React.createElement(_sidebar.SidebarMenuButton, {
    size: "lg",
    className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
  }, /*#__PURE__*/React.createElement(_avatar.Avatar, {
    className: "h-8 w-8 rounded-lg"
  }, /*#__PURE__*/React.createElement(_avatar.AvatarImage, {
    src: profile === null || profile === void 0 ? void 0 : profile.image_url,
    alt: profile === null || profile === void 0 ? void 0 : profile.first_name
  }), /*#__PURE__*/React.createElement(_avatar.AvatarFallback, {
    className: "rounded-lg"
  }, formatName(user))), /*#__PURE__*/React.createElement("div", {
    className: "grid flex-1 text-left text-sm leading-tight"
  }, /*#__PURE__*/React.createElement("span", {
    className: "truncate font-semibold"
  }, formatName(user, false)), /*#__PURE__*/React.createElement("span", {
    className: "truncate text-xs"
  }, user.email)), /*#__PURE__*/React.createElement(_lucideReact.ChevronsUpDown, {
    className: "ml-auto size-4"
  }))), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuContent, {
    className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg",
    side: isMobile ? "bottom" : "right",
    align: "end",
    sideOffset: 4
  }, /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuLabel, {
    className: "p-0 font-normal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm"
  }, /*#__PURE__*/React.createElement(_avatar.Avatar, {
    className: "h-8 w-8 rounded-lg"
  }, /*#__PURE__*/React.createElement(_avatar.AvatarImage, {
    src: profile === null || profile === void 0 ? void 0 : profile.image_url,
    alt: profile === null || profile === void 0 ? void 0 : profile.first_name
  }), /*#__PURE__*/React.createElement(_avatar.AvatarFallback, {
    className: "rounded-lg"
  }, formatName(user))), /*#__PURE__*/React.createElement("div", {
    className: "grid flex-1 text-left text-sm leading-tight"
  }, /*#__PURE__*/React.createElement("span", {
    className: "truncate font-semibold"
  }, formatName(user, false)), /*#__PURE__*/React.createElement("span", {
    className: "truncate text-xs"
  }, user.email)))), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuGroup, null, /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, {
    asChild: true
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/settings/profile"
  }, /*#__PURE__*/React.createElement(_lucideReact.BadgeCheck, null), "Account")), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, null, /*#__PURE__*/React.createElement(_lucideReact.Bell, null), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/notification"
  }, "Notifications"))), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuSeparator, null), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, {
    onClick: function onClick() {
      return handleLogout();
    }
  }, /*#__PURE__*/React.createElement(_lucideReact.LogOut, null), "Log out")))));
}