"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourceSheet = ResourceSheet;
var _sheet = require("@/components/ui/sheet");
var _form = require("./form");
var _excluded = ["resource", "onSave", "modelName"]; // Import form schema
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
    onSave = _ref.onSave,
    modelName = _ref.modelName,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_sheet.Sheet, props, /*#__PURE__*/React.createElement(_sheet.SheetContent, null, /*#__PURE__*/React.createElement(_sheet.SheetHeader, null, /*#__PURE__*/React.createElement(_sheet.SheetTitle, null, resource ? "Edit ".concat(modelName) : "New ".concat(modelName)), /*#__PURE__*/React.createElement(_sheet.SheetDescription, null, resource ? "Make changes to your ".concat(modelName, " here. Click save when you're done.") : "Create a new ".concat(modelName, " here. Click save when you're done."))), /*#__PURE__*/React.createElement(_form.ResourceForm, _extends({
    resource: resource,
    onSave: onSave
  }, props))));
}