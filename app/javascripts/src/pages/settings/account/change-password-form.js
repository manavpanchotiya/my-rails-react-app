"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangePasswordForm = ChangePasswordForm;
var _react = require("react");
var _input = require("@/components/ui/input");
var _button = require("@/components/ui/button");
var _reactHookForm = require("react-hook-form");
var _zod = require("zod");
var _zod2 = require("@hookform/resolvers/zod");
var _Icons = require("@/components/Icons");
var _form = require("@/components/ui/form");
var _CommonSheet = require("@/components/CommonSheet");
var _usersApi = require("@/apis/usersApi");
var _sonner = require("sonner");
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
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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
function ChangePasswordForm() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isProcessing = _useState2[0],
    setIsProcessing = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isSheetOpen = _useState4[0],
    setSheetOpen = _useState4[1];
  var changeEmailFormSchema = _zod.z.object({
    current_password: _zod.z.string().min(6, {
      message: "Password must be at least 6 characters long"
    }),
    password: _zod.z.string().min(6, {
      message: "Password must be at least 6 characters long"
    }),
    password_confirmation: _zod.z.string().min(6, {
      message: "Password must be at least 6 characters long"
    })
  });
  var form = (0, _reactHookForm.useForm)({
    resolver: (0, _zod2.zodResolver)(changeEmailFormSchema),
    mode: "onChange",
    defaultValues: {
      // Set default values here
      current_password: '',
      password: '',
      password_confirmation: ''
    }
  });
  function onSubmit(_x) {
    return _onSubmit.apply(this, arguments);
  }
  function _onSubmit() {
    _onSubmit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data) {
      var response, notice, errors, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            setIsProcessing(true);
            _context.p = 1;
            _context.n = 2;
            return (0, _usersApi.changePassword)({
              user: data
            });
          case 2:
            response = _context.v;
            notice = response.data.notice;
            _sonner.toast.success(notice);
            form.reset(); // Resetting form values
            setSheetOpen(false);
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            errors = _t.response.data.errors;
            _sonner.toast.error(errors);
          case 4:
            _context.p = 4;
            setIsProcessing(false);
            return _context.f(4);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3, 4, 5]]);
    }));
    return _onSubmit.apply(this, arguments);
  }
  (0, _react.useEffect)(function () {
    if (isSheetOpen) {
      form.reset({
        current_password: '',
        password: '',
        password_confirmation: ''
      });
    }
  }, [isSheetOpen, form]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex w-full max-w-sm items-center space-x-2"
  }, /*#__PURE__*/React.createElement(_input.Input, {
    type: "password",
    id: "email",
    placeholder: "Email",
    value: "****************",
    disabled: true
  }), /*#__PURE__*/React.createElement(_button.Button, {
    size: "sm",
    onClick: function onClick() {
      return setSheetOpen(true);
    },
    type: "submit"
  }, "Change Password")), /*#__PURE__*/React.createElement(_CommonSheet.CommonSheet, {
    open: isSheetOpen,
    setSheetOpen: setSheetOpen,
    title: "Change Password"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-4 py-4"
  }, /*#__PURE__*/React.createElement(_form.Form, form, /*#__PURE__*/React.createElement("form", {
    onSubmit: form.handleSubmit(onSubmit),
    className: "space-y-8"
  }, /*#__PURE__*/React.createElement(_form.FormField, {
    control: form.control,
    name: "current_password",
    render: function render(_ref) {
      var field = _ref.field;
      return /*#__PURE__*/React.createElement(_form.FormItem, null, /*#__PURE__*/React.createElement(_form.FormControl, null, /*#__PURE__*/React.createElement(_input.Input, _extends({
        type: "password",
        placeholder: "Current password"
      }, field))), /*#__PURE__*/React.createElement(_form.FormMessage, null));
    }
  }), /*#__PURE__*/React.createElement(_form.FormField, {
    control: form.control,
    name: "password",
    render: function render(_ref2) {
      var field = _ref2.field;
      return /*#__PURE__*/React.createElement(_form.FormItem, null, /*#__PURE__*/React.createElement(_form.FormControl, null, /*#__PURE__*/React.createElement(_input.Input, _extends({
        type: "password",
        placeholder: "New password"
      }, field))), /*#__PURE__*/React.createElement(_form.FormMessage, null));
    }
  }), /*#__PURE__*/React.createElement(_form.FormField, {
    control: form.control,
    name: "password_confirmation",
    render: function render(_ref3) {
      var field = _ref3.field;
      return /*#__PURE__*/React.createElement(_form.FormItem, null, /*#__PURE__*/React.createElement(_form.FormControl, null, /*#__PURE__*/React.createElement(_input.Input, _extends({
        type: "password",
        placeholder: "Confirm password"
      }, field))), /*#__PURE__*/React.createElement(_form.FormMessage, null));
    }
  }), /*#__PURE__*/React.createElement(_button.Button, {
    size: "sm",
    disabled: isProcessing
  }, isProcessing && /*#__PURE__*/React.createElement(_Icons.Icons.spinner, {
    className: "mr-2 size-4 animate-spin",
    "aria-hidden": "true"
  }), "Change Email"))))));
}