"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavMain = NavMain;
var _lucideReact = require("lucide-react");
var _reactRouterDom = require("react-router-dom");
var _collapsible = require("@/components/ui/collapsible");
var _sidebar = require("@/components/ui/sidebar");
function NavMain(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/React.createElement(_sidebar.SidebarGroup, null, /*#__PURE__*/React.createElement(_sidebar.SidebarGroupLabel, null, "Platform"), /*#__PURE__*/React.createElement(_sidebar.SidebarMenu, null, items.map(function (item) {
    var _item$items;
    return /*#__PURE__*/React.createElement(_collapsible.Collapsible, {
      key: item.title,
      asChild: true,
      defaultOpen: item.isActive,
      className: "group/collapsible"
    }, /*#__PURE__*/React.createElement(_sidebar.SidebarMenuItem, null, /*#__PURE__*/React.createElement(_collapsible.CollapsibleTrigger, {
      asChild: true
    }, /*#__PURE__*/React.createElement(_sidebar.SidebarMenuButton, {
      tooltip: item.title
    }, item.icon && /*#__PURE__*/React.createElement(item.icon, null), /*#__PURE__*/React.createElement("span", null, item.title), /*#__PURE__*/React.createElement(_lucideReact.ChevronRight, {
      className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
    }))), /*#__PURE__*/React.createElement(_collapsible.CollapsibleContent, null, /*#__PURE__*/React.createElement(_sidebar.SidebarMenuSub, null, (_item$items = item.items) === null || _item$items === void 0 ? void 0 : _item$items.map(function (subItem) {
      return /*#__PURE__*/React.createElement(_sidebar.SidebarMenuSubItem, {
        key: subItem.title
      }, /*#__PURE__*/React.createElement(_sidebar.SidebarMenuSubButton, {
        asChild: true
      }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
        to: subItem.url
      }, /*#__PURE__*/React.createElement("span", null, subItem.title))));
    })))));
  })));
}