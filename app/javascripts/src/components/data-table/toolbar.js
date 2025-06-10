"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbar = Toolbar;
var _button = require("@/components/ui/button");
var _reactIcons = require("@radix-ui/react-icons");
// Toolbar component to handle actions like Add New and Delete Selected
function Toolbar(_ref) {
  var onAddNew = _ref.onAddNew,
    onDeleteSelected = _ref.onDeleteSelected,
    hasSelection = _ref.hasSelection;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between py-4"
  }, /*#__PURE__*/React.createElement(_button.Button, {
    size: "sm",
    onClick: onAddNew
  }, /*#__PURE__*/React.createElement(_reactIcons.PlusIcon, {
    className: "mr-2 size-4",
    "aria-hidden": "true"
  }), "New Category"), hasSelection && /*#__PURE__*/React.createElement(_button.Button, {
    size: "sm",
    variant: "destructive",
    onClick: onDeleteSelected
  }, "Delete Selected"));
}