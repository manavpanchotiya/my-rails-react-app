"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavProjects = NavProjects;
var _lucideReact = require("lucide-react");
var _dropdownMenu = require("@/components/ui/dropdown-menu");
var _sidebar = require("@/components/ui/sidebar");
function NavProjects(_ref) {
  var projects = _ref.projects;
  var _useSidebar = (0, _sidebar.useSidebar)(),
    isMobile = _useSidebar.isMobile;
  return /*#__PURE__*/React.createElement(_sidebar.SidebarGroup, {
    className: "group-data-[collapsible=icon]:hidden"
  }, /*#__PURE__*/React.createElement(_sidebar.SidebarGroupLabel, null, "Projects"), /*#__PURE__*/React.createElement(_sidebar.SidebarMenu, null, projects.map(function (item) {
    return /*#__PURE__*/React.createElement(_sidebar.SidebarMenuItem, {
      key: item.name
    }, /*#__PURE__*/React.createElement(_sidebar.SidebarMenuButton, {
      asChild: true
    }, /*#__PURE__*/React.createElement("a", {
      href: item.url
    }, /*#__PURE__*/React.createElement(item.icon, null), /*#__PURE__*/React.createElement("span", null, item.name))), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenu, null, /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuTrigger, {
      asChild: true
    }, /*#__PURE__*/React.createElement(_sidebar.SidebarMenuAction, {
      showOnHover: true
    }, /*#__PURE__*/React.createElement(_lucideReact.MoreHorizontal, null), /*#__PURE__*/React.createElement("span", {
      className: "sr-only"
    }, "More"))), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuContent, {
      className: "w-48 rounded-lg",
      side: isMobile ? "bottom" : "right",
      align: isMobile ? "end" : "start"
    }, /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, null, /*#__PURE__*/React.createElement(_lucideReact.Folder, {
      className: "text-muted-foreground"
    }), /*#__PURE__*/React.createElement("span", null, "View Project")), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, null, /*#__PURE__*/React.createElement(_lucideReact.Forward, {
      className: "text-muted-foreground"
    }), /*#__PURE__*/React.createElement("span", null, "Share Project")), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuSeparator, null), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, null, /*#__PURE__*/React.createElement(_lucideReact.Trash2, {
      className: "text-muted-foreground"
    }), /*#__PURE__*/React.createElement("span", null, "Delete Project")))));
  }), /*#__PURE__*/React.createElement(_sidebar.SidebarMenuItem, null, /*#__PURE__*/React.createElement(_sidebar.SidebarMenuButton, {
    className: "text-sidebar-foreground/70"
  }, /*#__PURE__*/React.createElement(_lucideReact.MoreHorizontal, {
    className: "text-sidebar-foreground/70"
  }), /*#__PURE__*/React.createElement("span", null, "More")))));
}