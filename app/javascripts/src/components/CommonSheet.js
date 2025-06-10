"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonSheet = void 0;
var _react = _interopRequireDefault(require("react"));
var _sheet = require("@/components/ui/sheet");
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
var CommonSheet = exports.CommonSheet = function CommonSheet(_ref) {
  var open = _ref.open,
    title = _ref.title,
    description = _ref.description,
    setSheetOpen = _ref.setSheetOpen,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_sheet.Sheet, {
    open: open,
    onOpenChange: setSheetOpen
  }, /*#__PURE__*/_react["default"].createElement(_sheet.SheetContent, null, /*#__PURE__*/_react["default"].createElement(_sheet.SheetHeader, null, /*#__PURE__*/_react["default"].createElement(_sheet.SheetTitle, null, title), /*#__PURE__*/_react["default"].createElement(_sheet.SheetDescription, null, description)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid gap-4 py-4"
  }, children)));
};