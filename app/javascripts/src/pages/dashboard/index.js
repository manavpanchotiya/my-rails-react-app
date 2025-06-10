"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Page;
var _breadcrumb = require("@/components/ui/breadcrumb");
function Page() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_breadcrumb.Breadcrumb, null, /*#__PURE__*/React.createElement(_breadcrumb.BreadcrumbList, null, /*#__PURE__*/React.createElement(_breadcrumb.BreadcrumbItem, {
    className: "hidden md:block"
  }, /*#__PURE__*/React.createElement(_breadcrumb.BreadcrumbLink, {
    href: "#"
  }, "Building Your Application")), /*#__PURE__*/React.createElement(_breadcrumb.BreadcrumbSeparator, {
    className: "hidden md:block"
  }), /*#__PURE__*/React.createElement(_breadcrumb.BreadcrumbItem, null, /*#__PURE__*/React.createElement(_breadcrumb.BreadcrumbPage, null, "Data Fetching")))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 flex-col gap-4 p-4 pt-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid auto-rows-min gap-4 md:grid-cols-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aspect-video rounded-xl bg-muted/50"
  }), /*#__PURE__*/React.createElement("div", {
    className: "aspect-video rounded-xl bg-muted/50"
  }), /*#__PURE__*/React.createElement("div", {
    className: "aspect-video rounded-xl bg-muted/50"
  })), /*#__PURE__*/React.createElement("div", {
    className: "min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min"
  })));
}