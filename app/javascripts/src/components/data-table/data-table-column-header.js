"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTableColumnHeader = DataTableColumnHeader;
var _reactIcons = require("@radix-ui/react-icons");
var _utils = require("@/lib/utils");
var _button = require("@/components/ui/button");
var _dropdownMenu = require("@/components/ui/dropdown-menu");
function DataTableColumnHeader(_ref) {
  var column = _ref.column,
    title = _ref.title,
    className = _ref.className;
  if (!column.getCanSort() && !column.getCanHide()) {
    return /*#__PURE__*/React.createElement("div", {
      className: (0, _utils.cn)(className)
    }, title);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _utils.cn)("flex items-center space-x-2", className)
  }, /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenu, null, /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuTrigger, {
    asChild: true
  }, /*#__PURE__*/React.createElement(_button.Button, {
    "aria-label": column.getIsSorted() === "desc" ? "Sorted descending. Click to sort ascending." : column.getIsSorted() === "asc" ? "Sorted ascending. Click to sort descending." : "Not sorted. Click to sort ascending.",
    variant: "ghost",
    size: "sm",
    className: "-ml-3 h-8 data-[state=open]:bg-accent"
  }, /*#__PURE__*/React.createElement("span", null, title), column.getCanSort() && column.getIsSorted() === "desc" ? /*#__PURE__*/React.createElement(_reactIcons.ArrowDownIcon, {
    className: "ml-2 size-4",
    "aria-hidden": "true"
  }) : column.getIsSorted() === "asc" ? /*#__PURE__*/React.createElement(_reactIcons.ArrowUpIcon, {
    className: "ml-2 size-4",
    "aria-hidden": "true"
  }) : /*#__PURE__*/React.createElement(_reactIcons.CaretSortIcon, {
    className: "ml-2 size-4",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuContent, {
    align: "start"
  }, column.getCanSort() && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, {
    "aria-label": "Sort ascending",
    onClick: function onClick() {
      return column.toggleSorting(false);
    }
  }, /*#__PURE__*/React.createElement(_reactIcons.ArrowUpIcon, {
    className: "mr-2 size-3.5 text-muted-foreground/70",
    "aria-hidden": "true"
  }), "Asc"), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, {
    "aria-label": "Sort descending",
    onClick: function onClick() {
      return column.toggleSorting(true);
    }
  }, /*#__PURE__*/React.createElement(_reactIcons.ArrowDownIcon, {
    className: "mr-2 size-3.5 text-muted-foreground/70",
    "aria-hidden": "true"
  }), "Desc")), column.getCanSort() && column.getCanHide() && /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuSeparator, null), column.getCanHide() && /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, {
    "aria-label": "Hide column",
    onClick: function onClick() {
      return column.toggleVisibility(false);
    }
  }, /*#__PURE__*/React.createElement(_reactIcons.EyeNoneIcon, {
    className: "mr-2 size-3.5 text-muted-foreground/70",
    "aria-hidden": "true"
  }), "Hide"))));
}