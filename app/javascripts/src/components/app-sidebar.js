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
exports.AppSidebar = AppSidebar;
var React = _interopRequireWildcard(require("react"));
var _lucideReact = require("lucide-react");
var _navMain = require("@/components/nav-main");
var _navUser = require("@/components/nav-user");
var _teamSwitcher = require("@/components/team-switcher");
var _sidebar = require("@/components/ui/sidebar");
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
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
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
function AppSidebar(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  // Utility to check permissions
  function hasPermission(permissions, resource) {
    return permissions.some(function (permission) {
      return permission[0] === resource;
    });
  }
  var navMain = [{
    title: "Admin",
    url: "#",
    icon: _lucideReact.SquareTerminal,
    isActive: true,
    items: [{
      title: "User Management",
      url: "/user-management",
      permission: "User" // Required resource
    }, {
      title: "Categories",
      url: "/categories",
      permission: "Category" // Required resource
    }]
  }];
  var permissions = props.user.permissions;
  // Filter navMain based on permissions
  var filteredNavMain = navMain.map(function (item) {
    var _item$items;
    return _objectSpread(_objectSpread({}, item), {}, {
      items: (_item$items = item.items) === null || _item$items === void 0 ? void 0 : _item$items.filter(function (subItem) {
        return hasPermission(permissions, subItem.permission);
      })
    });
  }).filter(function (item) {
    var _item$items2;
    return ((_item$items2 = item.items) === null || _item$items2 === void 0 ? void 0 : _item$items2.length) > 0;
  });
  return /*#__PURE__*/React.createElement(_sidebar.Sidebar, _extends({
    collapsible: "icon"
  }, props), /*#__PURE__*/React.createElement(_sidebar.SidebarHeader, null, /*#__PURE__*/React.createElement(_teamSwitcher.TeamSwitcher, {
    user: props.user
  })), /*#__PURE__*/React.createElement(_sidebar.SidebarContent, null, /*#__PURE__*/React.createElement(_navMain.NavMain, {
    items: filteredNavMain
  })), /*#__PURE__*/React.createElement(_sidebar.SidebarFooter, null, /*#__PURE__*/React.createElement(_navUser.NavUser, {
    user: props.user
  })), /*#__PURE__*/React.createElement(_sidebar.SidebarRail, null));
}