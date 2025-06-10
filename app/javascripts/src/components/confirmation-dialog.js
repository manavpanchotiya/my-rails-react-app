"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmationDialog = ConfirmationDialog;
var _dialog = require("@/components/ui/dialog");
var _button = require("@/components/ui/button");
// confirmation-dialog.tsx

function ConfirmationDialog(_ref) {
  var open = _ref.open,
    onOpenChange = _ref.onOpenChange,
    onConfirm = _ref.onConfirm,
    title = _ref.title,
    description = _ref.description;
  return /*#__PURE__*/React.createElement(_dialog.Dialog, {
    open: open,
    onOpenChange: onOpenChange
  }, /*#__PURE__*/React.createElement(_dialog.DialogContent, null, /*#__PURE__*/React.createElement(_dialog.DialogHeader, null, /*#__PURE__*/React.createElement(_dialog.DialogTitle, null, title), /*#__PURE__*/React.createElement(_dialog.DialogDescription, null, description)), /*#__PURE__*/React.createElement(_dialog.DialogFooter, null, /*#__PURE__*/React.createElement(_button.Button, {
    onClick: onConfirm
  }, "Confirm"), /*#__PURE__*/React.createElement(_button.Button, {
    onClick: function onClick() {
      return onOpenChange(false);
    },
    variant: "outline"
  }, "Cancel"))));
}