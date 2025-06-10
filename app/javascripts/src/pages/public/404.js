"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _button = require("@/components/ui/button");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
var NotFoundPage = function NotFoundPage() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center justify-center h-screen bg-gray-100"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-6xl font-bold text-gray-800"
  }, "404"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xl text-gray-600 mt-4"
  }, "Page Not Found"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-md text-gray-500 mt-2"
  }, "Sorry, the page you are looking for does not exist."), /*#__PURE__*/_react["default"].createElement(_button.Button, {
    className: "mt-6",
    onClick: function onClick() {
      return navigate("/");
    }
  }, "Go Back Home")));
};
var _default = exports["default"] = NotFoundPage;