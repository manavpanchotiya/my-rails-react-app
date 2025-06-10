"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollToTop = void 0;
var _react = require("react");
var _button = require("./ui/button");
var _lucideReact = require("lucide-react");
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
var ScrollToTop = exports.ScrollToTop = function ScrollToTop() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showTopBtn = _useState2[0],
    setShowTopBtn = _useState2[1];
  (0, _react.useEffect)(function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  var goToTop = function goToTop() {
    window.scroll({
      top: 0,
      left: 0
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, showTopBtn && /*#__PURE__*/React.createElement(_button.Button, {
    onClick: goToTop,
    className: "fixed bottom-4 right-4 opacity-90 shadow-md",
    size: "icon"
  }, /*#__PURE__*/React.createElement(_lucideReact.ArrowUpToLine, {
    className: "h-4 w-4"
  })));
};