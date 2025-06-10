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
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _rolePermissionsApi = require("@/apis/rolePermissionsApi");
var _dialog = require("@/components/ui/dialog");
var _button = require("@/components/ui/button");
var _sonner = require("sonner");
var _Loader = require("@/components/common/Loader");
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
    for (var _t4 in e) "default" !== _t4 && {}.hasOwnProperty.call(e, _t4) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t4)) && (i.get || i.set) ? o(f, _t4, i) : f[_t4] = e[_t4]);
    return f;
  })(e, t);
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
var RolesList = function RolesList() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    roles = _useState2[0],
    setRoles = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  //const [selectedRoleId, setSelectedRoleId] = useState(null);

  (0, _react.useEffect)(function () {
    var loadRoles = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$fetch, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return (0, _rolePermissionsApi.fetch)();
            case 1:
              _yield$fetch = _context.v;
              data = _yield$fetch.data;
              setRoles(data);
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.warn(_t);
              _sonner.toast.error('Failed to load roles');
            case 3:
              _context.p = 3;
              setLoading(false);
              return _context.f(3);
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2, 3, 4]]);
      }));
      return function loadRoles() {
        return _ref.apply(this, arguments);
      };
    }();
    loadRoles();
  }, []);
  var handleActionChange = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(permissionId, roleId, resource, action) {
      var _response$data, payload, response, notice, _err$response, error, _t2, _t3;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.p = 0;
            payload = {
              resource: resource,
              role_id: roleId,
              action: action
            };
            if (!permissionId) {
              _context2.n = 2;
              break;
            }
            _context2.n = 1;
            return (0, _rolePermissionsApi.update)(roleId, payload);
          case 1:
            _t2 = _context2.v;
            _context2.n = 4;
            break;
          case 2:
            _context2.n = 3;
            return (0, _rolePermissionsApi.create)(payload);
          case 3:
            _t2 = _context2.v;
          case 4:
            response = _t2;
            notice = (response === null || response === void 0 || (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.notice) || 'Action successful';
            _sonner.toast.success(notice);
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t3 = _context2.v;
            error = (_t3 === null || _t3 === void 0 || (_err$response = _t3.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.error) || 'An error occurred';
            _sonner.toast.error(error);
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 5]]);
    }));
    return function handleActionChange(_x, _x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  if (loading) {
    return /*#__PURE__*/_react["default"].createElement(_Loader.Loader, null);
  }
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-2xl font-bold mb-6"
  }, "Roles and Permissions"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
  }, roles.map(function (role) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: role.id,
      className: "p-4 border rounded-lg shadow-md bg-white"
    }, /*#__PURE__*/_react["default"].createElement("h2", {
      className: "text-lg font-bold mb-4"
    }, role.role_name), /*#__PURE__*/_react["default"].createElement(_dialog.Dialog, null, /*#__PURE__*/_react["default"].createElement(_dialog.DialogTrigger, {
      asChild: true
    }, /*#__PURE__*/_react["default"].createElement(_button.Button, null, "Manage Permissions")), /*#__PURE__*/_react["default"].createElement(_dialog.DialogContent, null, /*#__PURE__*/_react["default"].createElement(_dialog.DialogHeader, null, /*#__PURE__*/_react["default"].createElement(_dialog.DialogTitle, null, "Manage Resources for ", role.role_name), /*#__PURE__*/_react["default"].createElement(_dialog.DialogDescription, null, "Select the actions for each resource applicable for the role.")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex-col space-y-4"
    }, role.permissions.map(function (permission) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: permission.resource,
        className: "flex items-center justify-between"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "font-medium"
      }, permission.resource), /*#__PURE__*/_react["default"].createElement("select", {
        className: "ml-4 p-2 border rounded",
        defaultValue: permission.action,
        onChange: function onChange(e) {
          return handleActionChange(permission === null || permission === void 0 ? void 0 : permission.id, role.id, permission.resource, e.target.value);
        }
      }, /*#__PURE__*/_react["default"].createElement("option", {
        value: "view"
      }, "View"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "edit"
      }, "Edit"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "none"
      }, "None")));
    })))));
  })));
};
var _default = exports["default"] = RolesList;