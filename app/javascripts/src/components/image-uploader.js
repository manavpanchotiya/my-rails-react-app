"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageUploader = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");
var _zod = require("@hookform/resolvers/zod");
var _reactDropzone = require("react-dropzone");
var _zod2 = require("zod");
var _input = require("@/components/ui/input");
var _avatar = require("@/components/ui/avatar");
var _form = require("@/components/ui/form");
var _lucideReact = require("lucide-react");
var _sonner = require("sonner");
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
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
} // Ensure you have the correct import for your icon
// Define the props for the reusable component

var ImageUploader = exports.ImageUploader = function ImageUploader(_ref) {
  var _ref$acceptedFormats = _ref.acceptedFormats,
    acceptedFormats = _ref$acceptedFormats === void 0 ? {
      "image/png": [],
      "image/jpg": [],
      "image/jpeg": []
    } : _ref$acceptedFormats,
    _ref$maxSize = _ref.maxSize,
    maxSize = _ref$maxSize === void 0 ? 1000000 : _ref$maxSize,
    api = _ref.api,
    data = _ref.data;
  var _React$useState = _react["default"].useState(data.image_url),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    preview = _React$useState2[0],
    setPreview = _React$useState2[1];
  var formSchema = _zod2.z.object({
    image: _zod2.z["instanceof"](File).refine(function (file) {
      return file.size !== 0;
    }, "Please upload an image")
  });
  var form = (0, _reactHookForm.useForm)({
    resolver: (0, _zod.zodResolver)(formSchema),
    mode: "onBlur",
    defaultValues: {
      image: new File([""], "filename")
    }
  });
  var onDrop = _react["default"].useCallback(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(acceptedFiles) {
      var _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.p = 0;
            setPreview(URL.createObjectURL(acceptedFiles[0]));
            _context.n = 1;
            return uploadImage(acceptedFiles[0]);
          case 1:
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.warn(_t);
            setPreview(null);
            form.resetField("image");
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [form]);
  var _useDropzone = (0, _reactDropzone.useDropzone)({
      onDrop: onDrop,
      maxFiles: 1,
      maxSize: maxSize,
      accept: acceptedFormats
    }),
    getRootProps = _useDropzone.getRootProps,
    getInputProps = _useDropzone.getInputProps,
    fileRejections = _useDropzone.fileRejections;
  var uploadImage = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(file) {
      var formData, response, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            // Replace with your actual API call logic
            formData = new FormData();
            formData.append("image", file);
            _context2.p = 1;
            _context2.n = 2;
            return api(data.id, formData);
          case 2:
            response = _context2.v;
            _sonner.toast.success("".concat(response.data.notice, " \uD83C\uDF89"));
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            _sonner.toast.error("Error uploading image: ".concat(_t2.message));
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    }));
    return function uploadImage(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react["default"].createElement(_form.Form, form, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: form.handleSubmit(function (values) {
      return console.log(values);
    }),
    className: "space-y-4"
  }, /*#__PURE__*/_react["default"].createElement(_form.FormField, {
    control: form.control,
    name: "image",
    render: function render() {
      return /*#__PURE__*/_react["default"].createElement(_form.FormItem, {
        className: "mx-auto"
      }, /*#__PURE__*/_react["default"].createElement(_form.FormLabel, {
        className: "".concat(fileRejections.length !== 0 && "text-destructive")
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "text-xl font-semibold tracking-tight"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: form.formState.errors.image || fileRejections.length !== 0 ? "text-destructive" : "text-muted-foreground"
      }))), /*#__PURE__*/_react["default"].createElement(_form.FormControl, null, /*#__PURE__*/_react["default"].createElement("div", _extends({}, getRootProps(), {
        className: "relative mx-auto flex cursor-pointer flex-col items-center justify-center gap-y-2"
      }), /*#__PURE__*/_react["default"].createElement(_avatar.Avatar, {
        className: "relative rounded-circle h-24 w-24 sm:h-32 sm:w-32 ring-4 ring-white object-cover rounded-full bg-gray-500 hover:bg-gray-500 group"
      }, /*#__PURE__*/_react["default"].createElement(_avatar.AvatarImage, {
        src: preview,
        alt: "Uploaded image",
        className: "rounded-full object-cover border"
      }), /*#__PURE__*/_react["default"].createElement(_avatar.AvatarFallback, {
        className: "relative rounded-circle h-24 w-24 sm:h-32 sm:w-32 ring-4 ring-white object-cover rounded-full bg-gray-300 hover:bg-gray-500 group"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "group-hover:hidden"
      }, " AN "), /*#__PURE__*/_react["default"].createElement(_lucideReact.Camera, {
        className: "absolute top-1/2 left-1/2 h-10 w-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out",
        "aria-hidden": "true"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
      }, /*#__PURE__*/_react["default"].createElement(_lucideReact.Camera, {
        className: "h-10 w-10 cursor-pointer",
        "aria-hidden": "true"
      }))), /*#__PURE__*/_react["default"].createElement(_input.Input, _extends({
        id: "file-input" // Add an id to the input
      }, getInputProps(), {
        type: "file",
        className: "hidden" // Hide the file input
      })))), /*#__PURE__*/_react["default"].createElement(_form.FormMessage, null, fileRejections.length !== 0 && /*#__PURE__*/_react["default"].createElement("p", null, "Image must be less than ", maxSize / 1000000, "MB and of type png, jpg, or jpeg.")));
    }
  })));
};