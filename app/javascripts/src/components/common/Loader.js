"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
// Loader.tsx

var Loader = exports.Loader = function Loader(_ref) {
  var _ref$text = _ref.text,
    text = _ref$text === void 0 ? "Loading..." : _ref$text;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex h-screen w-full items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center space-y-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-500 dark:text-gray-400"
  }, text)));
};