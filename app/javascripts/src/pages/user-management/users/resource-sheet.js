"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourceSheet = ResourceSheet;
var _dialog = require("@/components/ui/dialog");
var _form = require("./form");
var _excluded = ["resource", "modelName", "onSave"]; // Import form schema
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function ResourceSheet(_ref) {
  var resource = _ref.resource,
    modelName = _ref.modelName,
    onSave = _ref.onSave,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_dialog.Dialog, props, /*#__PURE__*/React.createElement(_dialog.DialogContent, {
    className: "max-w-4xl"
  }, /*#__PURE__*/React.createElement(_dialog.DialogHeader, null, /*#__PURE__*/React.createElement(_dialog.DialogTitle, null, resource ? "Edit ".concat(modelName) : "New ".concat(modelName)), /*#__PURE__*/React.createElement(_dialog.DialogDescription, null, "Manage your ".concat(modelName, " here.\n              You can add new ").concat(modelName, ", edit existing ones, or remove ").concat(modelName, "\n              as needed. Click save to apply your changes."))), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-4 py-4"
  }, /*#__PURE__*/React.createElement(_form.ResourceForm, _extends({
    resource: resource,
    onSave: onSave
  }, props)))));
}