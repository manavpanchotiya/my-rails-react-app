"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyOTP = exports.userLogout = exports.userLogin = exports.socialLogin = exports.destroyUser = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _toolkit = require("@reduxjs/toolkit");
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
// Define the backend URL based on the environment
var backendURL = process.env.APP_URL;

// Define the types for the login and registration payloads

// Define the response type for the login and register actions

// Utility function to get default headers
var getHeaders = function getHeaders(authToken) {
  return _objectSpread({
    'Access-Control-Allow-Origin': '*',
    "Content-Type": "application/json",
    "X-Galaxy-Header": "arish"
  }, authToken && {
    Authorization: authToken
  });
};

// Utility function to handle errors
var handleError = function handleError(error, rejectWithValue) {
  if (error.response && error.response.data) {
    return rejectWithValue(error.response.data);
  } else {
    return rejectWithValue(error.message);
  }
};

// Login action
var userLogin = exports.userLogin = (0, _toolkit.createAsyncThunk)("auth/login", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref, _ref2) {
    var email, rejectWithValue, config, response, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          email = _ref.email;
          rejectWithValue = _ref2.rejectWithValue;
          _context.p = 1;
          config = {
            headers: getHeaders()
          };
          _context.n = 2;
          return _axios["default"].post("".concat(backendURL, "/login"), {
            user: {
              email: email
            }
          }, config);
        case 2:
          response = _context.v;
          return _context.a(2, {
            data: response.data
          });
        case 3:
          _context.p = 3;
          _t = _context.v;
          return _context.a(2, handleError(_t, rejectWithValue));
      }
    }, _callee, null, [[1, 3]]);
  }));
  return function (_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}());

// Login action
var socialLogin = exports.socialLogin = (0, _toolkit.createAsyncThunk)("auth/social_login", /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(_ref4, _ref5) {
    var provider, token, rejectWithValue, config, response, authToken, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          provider = _ref4.provider, token = _ref4.token;
          rejectWithValue = _ref5.rejectWithValue;
          _context2.p = 1;
          config = {
            headers: getHeaders()
          };
          _context2.n = 2;
          return _axios["default"].post("".concat(backendURL, "api/v1/auth/google"), {
            provider: provider,
            token: token
          }, config);
        case 2:
          response = _context2.v;
          authToken = response.headers["authorization"];
          if (authToken) {
            localStorage.setItem("userToken", authToken);
          }
          return _context2.a(2, {
            data: response.data.data,
            userToken: authToken,
            isLoggedIn: response.data.isLoggedIn
          });
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          return _context2.a(2, handleError(_t2, rejectWithValue));
      }
    }, _callee2, null, [[1, 3]]);
  }));
  return function (_x3, _x4) {
    return _ref6.apply(this, arguments);
  };
}());

// Verify OTP action
var verifyOTP = exports.verifyOTP = (0, _toolkit.createAsyncThunk)("auth/verifyOTP", /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(_ref7, _ref8) {
    var otp_code, email, rejectWithValue, config, response, authToken, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          otp_code = _ref7.otp_code, email = _ref7.email;
          rejectWithValue = _ref8.rejectWithValue;
          _context3.p = 1;
          config = {
            headers: getHeaders()
          };
          _context3.n = 2;
          return _axios["default"].post("".concat(backendURL, "/verify_otp"), {
            user: {
              otp_code: otp_code,
              email: email
            }
          }, config);
        case 2:
          response = _context3.v;
          authToken = response.headers["authorization"];
          if (authToken) {
            localStorage.setItem("userToken", authToken);
          }
          return _context3.a(2, {
            data: response.data.data,
            userToken: authToken,
            isLoggedIn: response.data.isLoggedIn
          });
        case 3:
          _context3.p = 3;
          _t3 = _context3.v;
          return _context3.a(2, handleError(_t3, rejectWithValue));
      }
    }, _callee3, null, [[1, 3]]);
  }));
  return function (_x5, _x6) {
    return _ref9.apply(this, arguments);
  };
}());

// Logout action
var userLogout = exports.userLogout = (0, _toolkit.createAsyncThunk)("auth/logout", /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(_, _ref0) {
    var rejectWithValue, authToken, config, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          rejectWithValue = _ref0.rejectWithValue;
          _context4.p = 1;
          authToken = localStorage.getItem("userToken");
          config = {
            headers: getHeaders(authToken || undefined)
          };
          _context4.n = 2;
          return _axios["default"]["delete"]("".concat(backendURL, "/logout"), config);
        case 2:
          localStorage.removeItem("userToken");
          _context4.n = 4;
          break;
        case 3:
          _context4.p = 3;
          _t4 = _context4.v;
          return _context4.a(2, handleError(_t4, rejectWithValue));
        case 4:
          return _context4.a(2);
      }
    }, _callee4, null, [[1, 3]]);
  }));
  return function (_x7, _x8) {
    return _ref1.apply(this, arguments);
  };
}());

// Destroy user action
var destroyUser = exports.destroyUser = (0, _toolkit.createAsyncThunk)("auth/destroyUser", /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(_, _ref10) {
    var rejectWithValue, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          rejectWithValue = _ref10.rejectWithValue;
          _context5.p = 1;
          localStorage.removeItem("userToken");
          _context5.n = 3;
          break;
        case 2:
          _context5.p = 2;
          _t5 = _context5.v;
          return _context5.a(2, handleError(_t5, rejectWithValue));
        case 3:
          return _context5.a(2);
      }
    }, _callee5, null, [[1, 2]]);
  }));
  return function (_x9, _x0) {
    return _ref11.apply(this, arguments);
  };
}());