"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UserManagementLayout;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _separator = require("@/components/ui/separator");
var _tabs = require("@/components/ui/tabs");
var TABS = [{
  value: "users",
  title: "Users",
  path: "/user-management/users"
}, {
  value: "roles",
  title: "Roles",
  path: "/user-management/roles"
}, {
  value: "role-permissions",
  title: "Role Permissions",
  path: "/user-management/role-permissions"
}];
function UserManagementLayout() {
  var _TABS$find;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var location = (0, _reactRouterDom.useLocation)();

  // Determine the active tab based on the current path
  var activeTab = ((_TABS$find = TABS.find(function (tab) {
    return tab.path === location.pathname;
  })) === null || _TABS$find === void 0 ? void 0 : _TABS$find.value) || "users";
  // Handle tab click to navigate
  var handleTabClick = function handleTabClick(path) {
    navigate(path);
  };
  (0, _react.useEffect)(function () {
    if (location.pathname === '/user-management') {
      navigate('/user-management/users');
    }
  }, [location, navigate]);
  return /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden rounded-lg border bg-background shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden space-y-6 p-10 pb-16 md:block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-0.5"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold tracking-tight"
  }, "User Management"), /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground"
  }, "Manage Users and their Roles and Permissions")), /*#__PURE__*/React.createElement(_separator.Separator, {
    className: "my-6"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement(_tabs.Tabs, {
    defaultValue: activeTab
  }, /*#__PURE__*/React.createElement(_tabs.TabsList, {
    className: "grid w-full grid-cols-3 gap-4"
  }, TABS.map(function (tab) {
    return /*#__PURE__*/React.createElement(_tabs.TabsTrigger, {
      key: tab.value,
      value: tab.value,
      onClick: function onClick() {
        return handleTabClick(tab.path);
      }
    }, tab.title);
  })), TABS.map(function (tab) {
    return /*#__PURE__*/React.createElement(_tabs.TabsContent, {
      key: tab.value,
      value: tab.value
    }, /*#__PURE__*/React.createElement(_separator.Separator, {
      className: "my-6"
    }), /*#__PURE__*/React.createElement(_reactRouterDom.Outlet, null));
  }))))));
}