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
exports.TeamSwitcher = TeamSwitcher;
var React = _interopRequireWildcard(require("react"));
var _sidebar = require("@/components/ui/sidebar");
var _avatar = require("@/components/ui/avatar");
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
// Define TeamSwitcherProps

function TeamSwitcher(_ref) {
  var user = _ref.user;
  var profile = user.profile;
  //const [activeTeam, set] = React.useState(teams[0])
  var formatName = function formatName(user) {
    var profile = user.profile;
    if (profile && profile.first_name && profile.last_name) {
      // Concatenate first letters of first and last name
      return "".concat(profile.first_name[0]).concat(profile.last_name[0]).toUpperCase();
    } else {
      // Fallback to first two letters of email if profile or names are missing
      return user.email;
    }
  };
  return /*#__PURE__*/React.createElement(_sidebar.SidebarMenu, null, /*#__PURE__*/React.createElement(_sidebar.SidebarMenuItem, null, /*#__PURE__*/React.createElement(_sidebar.SidebarMenuButton, {
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
  }, profile === null || profile === void 0 ? void 0 : profile.first_name, " ", profile === null || profile === void 0 ? void 0 : profile.last_name), /*#__PURE__*/React.createElement("span", {
    className: "truncate text-xs"
  }, user === null || user === void 0 ? void 0 : user.email)))));
}