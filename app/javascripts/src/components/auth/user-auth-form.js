"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserAuthForm = UserAuthForm;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _zod = require("@hookform/resolvers/zod");
var _zod2 = require("zod");
var _framerMotion = require("framer-motion");
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _GoogleSignin = _interopRequireDefault(require("@/components/GoogleSignin"));
var _utils = require("@/lib/utils");
var _Icons = require("@/components/Icons");
var _button = require("@/components/ui/button");
var _input = require("@/components/ui/input");
var _label = require("@/components/ui/label");
var _form = require("@/components/ui/form");
var _card = require("@/components/ui/card");
var _inputOtp = require("@/components/ui/input-otp");
var _authActions = require("@/features/auth/authActions");
var _excluded = ["className"]; // Import React and dependencies
// Component and utility imports
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
function _interopRequireWildcard(e, t) {
  if ("function" == typeof WeakMap) var r = new WeakMap(),
    n = new WeakMap();
  return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      f = {
        __proto__: null,
        "default": e
      };
    if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;
    if (o = t ? n : r) {
      if (o.has(e)) return o.get(e);
      o.set(e, f);
    }
    for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);
    return f;
  })(e, t);
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine2(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function d(t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () {
    return this;
  }), _regeneratorDefine2(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function _regenerator() {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine2(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) {
    if (r) i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n;else {
      var o = function o(r, n) {
        _regeneratorDefine2(e, r, function (e) {
          return this._invoke(r, n, e);
        });
      };
      o("next", 0), o("throw", 1), o("return", 2);
    }
  }, _regeneratorDefine2(e, r, n, t);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
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
// Interface for props
// interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

// UserAuthForm Component
function UserAuthForm(_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showOtpForm = _useState4[0],
    setShowOtpForm = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    otp_code = _useState6[0],
    setOtpCode = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showNotification = _useState8[0],
    setShowNotification = _useState8[1];
  var _useState9 = (0, _react.useState)(true),
    _useState0 = _slicedToArray(_useState9, 2),
    isResendDisabled = _useState0[0],
    setIsResendDisabled = _useState0[1];
  var _useState1 = (0, _react.useState)(30),
    _useState10 = _slicedToArray(_useState1, 2),
    timer = _useState10[0],
    setTimer = _useState10[1];
  var _useState11 = (0, _react.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    otpError = _useState12[0],
    setOtpError = _useState12[1];
  var navigate = (0, _reactRouterDom.useNavigate)();
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.auth;
    }),
    email = _useSelector.email;

  // Schema validation using Zod
  var formSchema = _zod2.z.object({
    email: _zod2.z.string().email({
      message: "Invalid email address"
    })
  });
  var form = (0, _reactHookForm.useForm)({
    resolver: (0, _zod.zodResolver)(formSchema),
    defaultValues: {
      email: ""
    }
  });
  var otpForm = (0, _reactHookForm.useForm)({
    defaultValues: {
      otp_code: ""
    }
  });
  var onSubmitEmail = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(values) {
      var result;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            setIsLoading(true);
            _context.n = 1;
            return dispatch((0, _authActions.userLogin)(values));
          case 1:
            result = _context.v;
            setIsLoading(false);
            if (_authActions.userLogin.fulfilled.match(result)) {
              setShowOtpForm(true);
              setShowNotification(true);
              setTimeout(function () {
                return setShowNotification(false);
              }, 3000);
              setIsResendDisabled(true);
              setTimer(30);
              startOtpTimer();
            } else {
              console.error("Login failed:", result.error.message);
            }
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function onSubmitEmail(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var onSubmitOtp = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(values) {
      var data, result;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            data = _objectSpread(_objectSpread({}, values), {}, {
              email: email
            });
            _context2.n = 1;
            return dispatch((0, _authActions.verifyOTP)(data));
          case 1:
            result = _context2.v;
            if (_authActions.verifyOTP.fulfilled.match(result)) {
              // OTP verification successful, navigate to the next page
              navigate("/dashboard");
            } else {
              // Show error message when OTP is invalid
              setOtpError("Invalid OTP. Please try again.");
              console.error("OTP verification failed:", result.error.message);
            }
          case 2:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function onSubmitOtp(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleBack = function handleBack() {
    return setShowOtpForm(false);
  };
  var handleOtpChange = function handleOtpChange(value) {
    setOtpCode(value);
    setOtpError(""); // Clear error when OTP is being changed
  };
  var startOtpTimer = function startOtpTimer() {
    var interval = setInterval(function () {
      setTimer(function (prev) {
        if (prev === 1) {
          clearInterval(interval);
          setIsResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  var handleResendOtp = function handleResendOtp() {
    setIsResendDisabled(true);
    setTimer(30);
    startOtpTimer();
  };
  var formVariants = {
    hidden: {
      x: "-100%",
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: "100%",
      opacity: 0
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
  }, showNotification && /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute top-4 right-4 p-2 bg-green-500 text-white rounded-md"
  }, "OTP sent successfully!"), /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    variants: formVariants,
    transition: {
      duration: 0.1
    },
    key: showOtpForm ? "otpForm" : "emailForm"
  }, showOtpForm ? /*#__PURE__*/_react["default"].createElement(_card.Card, null, /*#__PURE__*/_react["default"].createElement(_card.CardHeader, {
    className: "space-y-1"
  }, /*#__PURE__*/_react["default"].createElement(_card.CardTitle, {
    className: "text-2xl font-bold text-center"
  }, "Enter OTP"), /*#__PURE__*/_react["default"].createElement(_card.CardDescription, {
    className: "text-center"
  }, "Please enter the OTP sent to your email")), /*#__PURE__*/_react["default"].createElement(_card.CardContent, null, /*#__PURE__*/_react["default"].createElement(_form.Form, otpForm, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: otpForm.handleSubmit(onSubmitOtp),
    className: "space-y-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center space-x-2"
  }, /*#__PURE__*/_react["default"].createElement(_inputOtp.InputOTP, {
    maxLength: 6,
    className: "justify-center",
    onChange: function onChange(value) {
      handleOtpChange(value);
      otpForm.setValue("otp_code", value);
    }
  }, /*#__PURE__*/_react["default"].createElement(_inputOtp.InputOTPGroup, null, /*#__PURE__*/_react["default"].createElement(_inputOtp.InputOTPSlot, {
    index: 0
  }), /*#__PURE__*/_react["default"].createElement(_inputOtp.InputOTPSlot, {
    index: 1
  }), /*#__PURE__*/_react["default"].createElement(_inputOtp.InputOTPSlot, {
    index: 2
  })), /*#__PURE__*/_react["default"].createElement(_inputOtp.InputOTPSeparator, null), /*#__PURE__*/_react["default"].createElement(_inputOtp.InputOTPGroup, null, /*#__PURE__*/_react["default"].createElement(_inputOtp.InputOTPSlot, {
    index: 3
  }), /*#__PURE__*/_react["default"].createElement(_inputOtp.InputOTPSlot, {
    index: 4
  }), /*#__PURE__*/_react["default"].createElement(_inputOtp.InputOTPSlot, {
    index: 5
  })))), otpError && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-center text-red-500 text-sm"
  }, otpError), /*#__PURE__*/_react["default"].createElement(_button.Button, {
    type: "submit",
    className: "w-full",
    disabled: otp_code.length < 6 || isLoading
  }, isLoading ? /*#__PURE__*/_react["default"].createElement(_Icons.Icons.spinner, {
    className: "mr-2 h-4 w-4 animate-spin"
  }) : "Submit OTP"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between items-center mt-4"
  }, /*#__PURE__*/_react["default"].createElement(_button.Button, {
    type: "button",
    variant: "link",
    onClick: handleResendOtp,
    disabled: isResendDisabled
  }, "Resend OTP"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-sm"
  }, isResendDisabled ? "Resend in ".concat(timer, "s") : "You can now resend OTP")), /*#__PURE__*/_react["default"].createElement(_button.Button, {
    type: "button",
    variant: "link",
    onClick: handleBack,
    className: "mt-2"
  }, "Back"))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col space-y-2 text-center"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-2xl font-semibold tracking-tight"
  }, "Let's get started"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-muted-foreground"
  }, "Enter your email below to create your account")), /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: (0, _utils.cn)("grid gap-6", className)
  }, props), /*#__PURE__*/_react["default"].createElement(_form.Form, form, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: form.handleSubmit(onSubmitEmail),
    className: "space-y-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid gap-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid gap-1"
  }, /*#__PURE__*/_react["default"].createElement(_label.Label, {
    className: "sr-only",
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/_react["default"].createElement(_form.FormField, {
    control: form.control,
    name: "email",
    render: function render(_ref4) {
      var field = _ref4.field;
      return /*#__PURE__*/_react["default"].createElement(_form.FormItem, null, /*#__PURE__*/_react["default"].createElement(_form.FormControl, null, /*#__PURE__*/_react["default"].createElement(_input.Input, _extends({
        type: "email",
        placeholder: "Enter your email address"
      }, field))), /*#__PURE__*/_react["default"].createElement(_form.FormMessage, null));
    }
  })), /*#__PURE__*/_react["default"].createElement(_button.Button, {
    type: "submit",
    disabled: isLoading
  }, isLoading && /*#__PURE__*/_react["default"].createElement(_Icons.Icons.spinner, {
    className: "mr-2 h-4 w-4 animate-spin"
  }), "Continue with Email"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "w-full border-t"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex justify-center text-xs uppercase"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "bg-background px-2 text-muted-foreground"
  }, "Or continue with")))), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isLoading ? /*#__PURE__*/_react["default"].createElement(_Icons.Icons.spinner, {
    className: "mr-2 h-4 w-4 animate-spin"
  }) : /*#__PURE__*/_react["default"].createElement(_GoogleSignin["default"], null))))));
}