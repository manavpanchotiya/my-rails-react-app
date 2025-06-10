"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PrivateLayout;
exports.iframeHeight = exports.description = void 0;
var _react = require("react");
var _appSidebar = require("@/components/app-sidebar");
var _breadcrumb = require("@/components/ui/breadcrumb");
var _separator = require("@/components/ui/separator");
var _sidebar = require("@/components/ui/sidebar");
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _authSlice = require("@/features/auth/authSlice");
var _modeToggle = require("@/components/mode-toggle");
var _notification = require("@/components/notification");
var _authService = require("@/app/services/auth/authService");
var iframeHeight = exports.iframeHeight = "800px";
var description = exports.description = "A sidebar that collapses to icons.";
var routes = [{
  path: "/dashboard",
  breadcrumb: "Dashboard"
}, {
  path: "/settings",
  breadcrumb: "Settings"
}, {
  path: "/settings/account",
  breadcrumb: "Account"
}, {
  path: "/settings/profile",
  breadcrumb: "Profile"
}
// Add other routes as necessary
];
function generateBreadcrumbs(location) {
  var matchedRoutes = (0, _reactRouterDom.matchRoutes)(routes, location);
  if (!matchedRoutes) return null;
  return matchedRoutes.map(function (match, index) {
    var _match$route = match.route,
      breadcrumb = _match$route.breadcrumb,
      path = _match$route.path;
    var isLast = index === matchedRoutes.length - 1;
    return /*#__PURE__*/React.createElement(_breadcrumb.BreadcrumbItem, {
      key: path,
      className: "hidden md:block"
    }, isLast ? /*#__PURE__*/React.createElement(_breadcrumb.BreadcrumbPage, null, breadcrumb) : /*#__PURE__*/React.createElement(_breadcrumb.BreadcrumbLink, {
      as: _reactRouterDom.Link,
      to: path
    }, breadcrumb), !isLast && /*#__PURE__*/React.createElement(_breadcrumb.BreadcrumbSeparator, {
      className: "hidden md:block"
    }));
  });
}
function PrivateLayout() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.auth;
    }),
    loading = _useSelector.loading,
    isLoggedIn = _useSelector.isLoggedIn,
    userInfo = _useSelector.userInfo;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useGetUserDetailsQue = (0, _authService.useGetUserDetailsQuery)('userDetails', {
      pollingInterval: 900000 // 15mins
    }),
    data = _useGetUserDetailsQue.data,
    isFetching = _useGetUserDetailsQue.isFetching,
    error = _useGetUserDetailsQue.error;
  (0, _react.useEffect)(function () {
    if (data) {
      dispatch((0, _authSlice.setCredentials)(data));
    } else if (error && !loading) {
      if (error.originalStatus === 401) {
        dispatch((0, _authSlice.logout)());
      }
    }
  }, [data, error, dispatch, isFetching]);
  if (!isLoggedIn) {
    return /*#__PURE__*/React.createElement(_reactRouterDom.Navigate, {
      to: "/sigin",
      replace: true
    });
  }
  var location = (0, _reactRouterDom.useLocation)();
  var breadcrumbs = generateBreadcrumbs(location);
  return /*#__PURE__*/React.createElement(_sidebar.SidebarProvider, null, !userInfo ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex h-screen w-full items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500 dark:text-gray-400"
  }, "Loading...")))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_appSidebar.AppSidebar, {
    user: userInfo
  }), /*#__PURE__*/React.createElement(_sidebar.SidebarInset, null, /*#__PURE__*/React.createElement("header", {
    className: "flex h-16 shrink-0 items-center gap-2 px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(_sidebar.SidebarTrigger, {
    className: "-ml-1"
  }), /*#__PURE__*/React.createElement(_separator.Separator, {
    orientation: "vertical",
    className: "mr-2 h-4"
  }), /*#__PURE__*/React.createElement(_breadcrumb.Breadcrumb, null, /*#__PURE__*/React.createElement(_breadcrumb.BreadcrumbList, null, breadcrumbs))), /*#__PURE__*/React.createElement("div", {
    className: "ml-auto flex items-center gap-4"
  }, /*#__PURE__*/React.createElement(_notification.Notification, null), /*#__PURE__*/React.createElement(_modeToggle.ModeToggle, null), " ")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 flex-col gap-4 p-4 pt-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Outlet, null))))));
}