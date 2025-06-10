"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileForm = ProfileForm;
var _react = require("react");
var _zod = require("@hookform/resolvers/zod");
var _reactHookForm = require("react-hook-form");
var _zod2 = require("zod");
var _sonner = require("sonner");
var _button = require("@/components/ui/button");
var _form = require("@/components/ui/form");
var _input = require("@/components/ui/input");
var _textarea = require("@/components/ui/textarea");
var _select = require("@/components/ui/select");
var _imageUploader = require("@/components/image-uploader");
var _Icons = require("@/components/Icons");
var _profilesApi = require("@/apis/profilesApi");
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
function ProfileForm() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isProcessing = _useState2[0],
    setIsProcessing = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    profile = _useState6[0],
    setProfile = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    genders = _useState8[0],
    setGenders = _useState8[1];
  var profileFormSchema = _zod2.z.object({
    first_name: _zod2.z.string().min(2, {
      message: "First Name must be at least 2 characters."
    }).max(30, {
      message: "First Name must not be longer than 30 characters."
    }),
    middle_name: _zod2.z.string().max(30, {
      message: "Middle Name must not be longer than 30 characters."
    }).optional(),
    last_name: _zod2.z.string().min(2, {
      message: "Last Name must be at least 2 characters."
    }).max(30, {
      message: "Last Name must not be longer than 30 characters."
    }),
    bio: _zod2.z.string().max(160).min(4),
    gender: _zod2.z.string({
      required_error: "Please select pronouns to display."
    })
  });
  var form = (0, _reactHookForm.useForm)({
    resolver: (0, _zod.zodResolver)(profileFormSchema),
    mode: "onChange"
  });
  (0, _react.useEffect)(function () {
    fetchProfile();
  }, []);

  // useEffect(() => {
  //   if (profile) {
  //     console.log("Profile state updated:", profile);
  //   }
  // }, [profile]);

  var fetchProfile = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _responseProfile$firs, _responseProfile$last, _responseProfile$midd, _responseProfile$bio, _responseProfile$gend, response, responseProfile, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            setLoading(true);
            _context.p = 1;
            _context.n = 2;
            return (0, _profilesApi.fetch)();
          case 2:
            response = _context.v;
            responseProfile = response.data.profile;
            setProfile(responseProfile);
            setGenders(response.data.genders);
            console.log(profile);
            // Update form values after profile is fetched
            form.reset({
              first_name: (_responseProfile$firs = responseProfile === null || responseProfile === void 0 ? void 0 : responseProfile.first_name) !== null && _responseProfile$firs !== void 0 ? _responseProfile$firs : "",
              last_name: (_responseProfile$last = responseProfile === null || responseProfile === void 0 ? void 0 : responseProfile.last_name) !== null && _responseProfile$last !== void 0 ? _responseProfile$last : "",
              middle_name: (_responseProfile$midd = responseProfile === null || responseProfile === void 0 ? void 0 : responseProfile.middle_name) !== null && _responseProfile$midd !== void 0 ? _responseProfile$midd : "",
              bio: (_responseProfile$bio = responseProfile === null || responseProfile === void 0 ? void 0 : responseProfile.bio) !== null && _responseProfile$bio !== void 0 ? _responseProfile$bio : "",
              gender: (_responseProfile$gend = responseProfile === null || responseProfile === void 0 ? void 0 : responseProfile.gender) !== null && _responseProfile$gend !== void 0 ? _responseProfile$gend : ""
            });
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.warn(_t);
            _sonner.toast.error('Error fetching profile');
          case 4:
            _context.p = 4;
            setLoading(false);
            return _context.f(4);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3, 4, 5]]);
    }));
    return function fetchProfile() {
      return _ref.apply(this, arguments);
    };
  }();
  function onSubmit(_x) {
    return _onSubmit.apply(this, arguments);
  }
  function _onSubmit() {
    _onSubmit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(data) {
      var response, notice, errors, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            setIsProcessing(true);
            _context2.p = 1;
            _context2.n = 2;
            return (0, _profilesApi.create)(data);
          case 2:
            response = _context2.v;
            notice = response.data.notice;
            _sonner.toast.success(notice);
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            errors = _t2.response.data.errors;
            _sonner.toast.error(errors);
          case 4:
            _context2.p = 4;
            setIsProcessing(false);
            return _context2.f(4);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3, 4, 5]]);
    }));
    return _onSubmit.apply(this, arguments);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, loading ? /*#__PURE__*/React.createElement("p", null, "Loading...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_imageUploader.ImageUploader, {
    labelText: "Upload Profile Picture",
    submitButtonText: "Save Picture",
    acceptedFormats: {
      "image/png": [],
      "image/jpeg": []
    },
    maxSize: 2000000,
    data: profile,
    api: _profilesApi.upload
  }), /*#__PURE__*/React.createElement(_form.Form, form, /*#__PURE__*/React.createElement("form", {
    onSubmit: form.handleSubmit(onSubmit),
    className: "space-y-8"
  }, /*#__PURE__*/React.createElement(_form.FormField, {
    control: form.control,
    name: "first_name",
    render: function render(_ref2) {
      var field = _ref2.field;
      return /*#__PURE__*/React.createElement(_form.FormItem, null, /*#__PURE__*/React.createElement(_form.FormLabel, null, "First Name"), /*#__PURE__*/React.createElement(_form.FormControl, null, /*#__PURE__*/React.createElement(_input.Input, _extends({
        placeholder: "First Name"
      }, field))), /*#__PURE__*/React.createElement(_form.FormMessage, null));
    }
  }), /*#__PURE__*/React.createElement(_form.FormField, {
    control: form.control,
    name: "middle_name",
    render: function render(_ref3) {
      var field = _ref3.field;
      return /*#__PURE__*/React.createElement(_form.FormItem, null, /*#__PURE__*/React.createElement(_form.FormLabel, null, "Middle Name"), /*#__PURE__*/React.createElement(_form.FormControl, null, /*#__PURE__*/React.createElement(_input.Input, _extends({
        placeholder: "Middle Name (optional)"
      }, field))), /*#__PURE__*/React.createElement(_form.FormMessage, null));
    }
  }), /*#__PURE__*/React.createElement(_form.FormField, {
    control: form.control,
    name: "last_name",
    render: function render(_ref4) {
      var field = _ref4.field;
      return /*#__PURE__*/React.createElement(_form.FormItem, null, /*#__PURE__*/React.createElement(_form.FormLabel, null, "Last Name"), /*#__PURE__*/React.createElement(_form.FormControl, null, /*#__PURE__*/React.createElement(_input.Input, _extends({
        placeholder: "Last Name"
      }, field))), /*#__PURE__*/React.createElement(_form.FormMessage, null));
    }
  }), /*#__PURE__*/React.createElement(_form.FormField, {
    control: form.control,
    name: "bio",
    render: function render(_ref5) {
      var field = _ref5.field;
      return /*#__PURE__*/React.createElement(_form.FormItem, null, /*#__PURE__*/React.createElement(_form.FormLabel, null, "Bio"), /*#__PURE__*/React.createElement(_form.FormControl, null, /*#__PURE__*/React.createElement(_textarea.Textarea, _extends({
        placeholder: "Tell us a little bit about yourself",
        className: "resize-none"
      }, field))), /*#__PURE__*/React.createElement(_form.FormMessage, null));
    }
  }), /*#__PURE__*/React.createElement(_form.FormField, {
    control: form.control,
    name: "gender",
    render: function render(_ref6) {
      var field = _ref6.field;
      return /*#__PURE__*/React.createElement(_form.FormItem, null, /*#__PURE__*/React.createElement(_form.FormLabel, null, "Gender"), /*#__PURE__*/React.createElement(_select.Select, {
        onValueChange: field.onChange,
        defaultValue: field.value
      }, /*#__PURE__*/React.createElement(_form.FormControl, null, /*#__PURE__*/React.createElement(_select.SelectTrigger, null, /*#__PURE__*/React.createElement(_select.SelectValue, {
        placeholder: "-----Select-----"
      }))), /*#__PURE__*/React.createElement(_select.SelectContent, null, Object.entries(genders).map(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 1),
          key = _ref8[0];
        return /*#__PURE__*/React.createElement(_select.SelectItem, {
          key: key,
          value: String(key)
        }, key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' '));
      }))), /*#__PURE__*/React.createElement(_form.FormMessage, null));
    }
  }), /*#__PURE__*/React.createElement(_button.Button, {
    disabled: isProcessing
  }, isProcessing && /*#__PURE__*/React.createElement(_Icons.Icons.spinner, {
    className: "mr-2 size-4 animate-spin",
    "aria-hidden": "true"
  }), "Update Profile")))));
}