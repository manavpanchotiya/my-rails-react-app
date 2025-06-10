"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourceForm = ResourceForm;
var _react = require("react");
var _button = require("@/components/ui/button");
var _input = require("@/components/ui/input");
var _zod = require("@hookform/resolvers/zod");
var _reactHookForm = require("react-hook-form");
var _sonner = require("sonner");
var _sheet = require("@/components/ui/sheet");
var _form = require("@/components/ui/form");
var _resourceFormSchema = require("../resourceFormSchema");
var _categoriesApi = require("@/apis/categoriesApi");
var _Icons = require("@/components/Icons");
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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
function ResourceForm(_ref) {
  var resource = _ref.resource,
    onSave = _ref.onSave,
    onOpenChange = _ref.onOpenChange;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isProcessing = _useState2[0],
    setIsProcessing = _useState2[1];
  var form = (0, _reactHookForm.useForm)({
    resolver: (0, _zod.zodResolver)(_resourceFormSchema.resourceFormSchema),
    defaultValues: {
      name: (resource === null || resource === void 0 ? void 0 : resource.name) || ""
    }
  });
  (0, _react.useEffect)(function () {
    // Reset form when the resource changes
    form.reset({
      name: (resource === null || resource === void 0 ? void 0 : resource.name) || ""
    });
  }, [resource, form]);
  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(input) {
      var response, notice, _err$response, errorMessages, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            setIsProcessing(true);
            _context.p = 1;
            if (!resource) {
              _context.n = 3;
              break;
            }
            _context.n = 2;
            return (0, _categoriesApi.update)(resource.id, input);
          case 2:
            response = _context.v;
            _context.n = 5;
            break;
          case 3:
            _context.n = 4;
            return (0, _categoriesApi.create)(input);
          case 4:
            response = _context.v;
          case 5:
            notice = response.data.notice; // Backend message
            form.reset();
            onOpenChange === null || onOpenChange === void 0 || onOpenChange(false);
            onSave(input);
            _sonner.toast.success(notice); // Show backend-provided success message
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            // Display backend-provided error messages
            errorMessages = ((_err$response = _t.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.errors) || "An error occurred";
            _sonner.toast.error(errorMessages);
          case 7:
            _context.p = 7;
            setIsProcessing(false);
            return _context.f(7);
          case 8:
            return _context.a(2);
        }
      }, _callee, null, [[1, 6, 7, 8]]);
    }));
    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(_form.Form, form, /*#__PURE__*/React.createElement("form", {
    onSubmit: form.handleSubmit(onSubmit),
    className: "flex flex-col gap-4"
  }, /*#__PURE__*/React.createElement(_form.FormField, {
    control: form.control,
    name: "name",
    render: function render(_ref3) {
      var field = _ref3.field;
      return /*#__PURE__*/React.createElement(_form.FormItem, null, /*#__PURE__*/React.createElement(_form.FormLabel, null, "Name"), /*#__PURE__*/React.createElement(_form.FormControl, null, /*#__PURE__*/React.createElement(_input.Input, _extends({
        placeholder: "Enter Category Name"
      }, field))), /*#__PURE__*/React.createElement(_form.FormMessage, null));
    }
  }), /*#__PURE__*/React.createElement(_sheet.SheetFooter, {
    className: "gap-2 pt-2 sm:space-x-0"
  }, /*#__PURE__*/React.createElement(_sheet.SheetClose, {
    asChild: true
  }, /*#__PURE__*/React.createElement(_button.Button, {
    type: "button",
    variant: "outline"
  }, "Cancel")), /*#__PURE__*/React.createElement(_button.Button, {
    type: "submit",
    disabled: isProcessing
  }, isProcessing && /*#__PURE__*/React.createElement(_Icons.Icons.spinner, {
    className: "mr-2 size-4 animate-spin",
    "aria-hidden": "true"
  }), "Save"))));
}