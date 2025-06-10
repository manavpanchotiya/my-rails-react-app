"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouter = require("react-router");
var _publicLayout = _interopRequireDefault(require("@/layouts/public-layout"));
var _privateLayout = _interopRequireDefault(require("@/layouts/private-layout"));
var _layout = _interopRequireDefault(require("@/pages/settings/layout"));
var _userManagement = _interopRequireDefault(require("@/pages/user-management"));
var _roles = _interopRequireDefault(require("@/pages/user-management/roles"));
var _users = _interopRequireDefault(require("@/pages/user-management/users"));
var _role_permissions = _interopRequireDefault(require("@/pages/user-management/role_permissions"));
var _home = _interopRequireDefault(require("@/pages/home"));
var _Login = _interopRequireDefault(require("@/pages/auth/Login"));
var _notification = require("@/pages/notification");
var _dashboard = _interopRequireDefault(require("@/pages/dashboard"));
var _page = _interopRequireDefault(require("@/pages/settings/account/page"));
var _page2 = _interopRequireDefault(require("@/pages/settings/profile/page"));
var _ = _interopRequireDefault(require("@/pages/public/403"));
var _page3 = _interopRequireDefault(require("@/pages/categories/page"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
// src/routes/AppRoutes.jsx

var AppRoutes = function AppRoutes() {
  return /*#__PURE__*/_react["default"].createElement(_reactRouter.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "/",
    element: /*#__PURE__*/_react["default"].createElement(_publicLayout["default"], null)
  }, /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "/",
    element: /*#__PURE__*/_react["default"].createElement(_home["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "/signin",
    element: /*#__PURE__*/_react["default"].createElement(_Login["default"], null)
  })), /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "/",
    element: /*#__PURE__*/_react["default"].createElement(_privateLayout["default"], null)
  }, /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "dashboard",
    element: /*#__PURE__*/_react["default"].createElement(_dashboard["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "notification",
    element: /*#__PURE__*/_react["default"].createElement(_notification.Notifications, null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "categories",
    element: /*#__PURE__*/_react["default"].createElement(_page3["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "/user-management",
    element: /*#__PURE__*/_react["default"].createElement(_userManagement["default"], null)
  }, /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "roles",
    element: /*#__PURE__*/_react["default"].createElement(_roles["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "users",
    element: /*#__PURE__*/_react["default"].createElement(_users["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "role-permissions",
    element: /*#__PURE__*/_react["default"].createElement(_role_permissions["default"], null)
  })), /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "settings",
    element: /*#__PURE__*/_react["default"].createElement(_layout["default"], null)
  }, /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "account",
    element: /*#__PURE__*/_react["default"].createElement(_page["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "profile",
    element: /*#__PURE__*/_react["default"].createElement(_page2["default"], null)
  }))), /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "not-authorized",
    element: /*#__PURE__*/_react["default"].createElement(_["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "*",
    element: /*#__PURE__*/_react["default"].createElement(_reactRouter.Navigate, {
      to: "/",
      replace: true
    })
  }));
};
var _default = exports["default"] = AppRoutes;