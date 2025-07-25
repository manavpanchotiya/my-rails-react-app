"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Users;
var _react = require("react");
var _usersApi = require("@/apis/usersApi");
var _dataTable = require("@/components/data-table/data-table");
var _columnDef = require("@/components/data-table/column-def");
var _resourceSheet = require("./resource-sheet");
var _sonner = require("sonner");
var _Loader = require("@/components/common/Loader");
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
} // Categories.tsx
function Users() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    resources = _useState2[0],
    setResources = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    currentResource = _useState8[0],
    setCurrentResource = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    isEditing = _useState0[0],
    setIsEditing = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isDialogOpen = _useState10[0],
    setDialogOpen = _useState10[1];
  var _useState11 = (0, _react.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    rowSelection = _useState12[0],
    setRowSelection = _useState12[1];
  var selectedRows = (0, _react.useMemo)(function () {
    return resources.filter(function (_, index) {
      return rowSelection[index];
    });
  }, [rowSelection, resources]);
  (0, _react.useEffect)(function () {
    fetchResources();
  }, []);
  var fetchResources = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var response, _err$response, _error, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return (0, _usersApi.fetch)();
          case 1:
            response = _context.v;
            setResources(response.data);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            _error = (_t === null || _t === void 0 || (_err$response = _t.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.error) || 'An error occurred';
            setError("Error fetching users ".concat(_error));
          case 3:
            _context.p = 3;
            setLoading(false);
            return _context.f(3);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2, 3, 4]]);
    }));
    return function fetchResources() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleNewResource = function handleNewResource() {
    setCurrentResource(null);
    setIsEditing(true);
  };
  var handleEditResource = function handleEditResource(resource) {
    setCurrentResource(resource);
    setIsEditing(true);
  };
  var handleBulkDelete = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var response, notice, _err$response2, _error2, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (!(selectedRows.length > 0)) {
              _context2.n = 7;
              break;
            }
            _context2.p = 1;
            _context2.n = 2;
            return (0, _usersApi.bulkDelete)({
              ids: selectedRows.map(function (resource) {
                return resource.id;
              })
            });
          case 2:
            response = _context2.v;
            _context2.n = 3;
            return fetchResources();
          case 3:
            notice = response.data.notice;
            _sonner.toast.success(notice);
            setRowSelection({});
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            _error2 = (_t2 === null || _t2 === void 0 || (_err$response2 = _t2.response) === null || _err$response2 === void 0 || (_err$response2 = _err$response2.data) === null || _err$response2 === void 0 ? void 0 : _err$response2.error) || 'An error occurred';
            _sonner.toast.error(_error2);
          case 5:
            _context2.p = 5;
            setRowSelection({});
            setDialogOpen(false);
            return _context2.f(5);
          case 6:
            _context2.n = 8;
            break;
          case 7:
            _sonner.toast.error("No rows selected for deletion.");
          case 8:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 4, 5, 6]]);
    }));
    return function handleBulkDelete() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleSaveResource = function handleSaveResource() {
    fetchResources();
    setIsEditing(false);
  };
  var columns = (0, _columnDef.createColumns)([{
    key: "index",
    header: "ID",
    enableSelection: true,
    renderCell: function renderCell(_value, _row, index) {
      return index + 1;
    }
  }, {
    key: "email",
    header: "Email"
  }, {
    key: "actions",
    dropdownItems: [{
      label: "Edit",
      onClick: function onClick(row) {
        return handleEditResource(row);
      }
    }]
  }]);
  return /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto py-10"
  }, loading ? /*#__PURE__*/React.createElement(_Loader.Loader, null) : error ? /*#__PURE__*/React.createElement("p", null, error) : /*#__PURE__*/React.createElement(_dataTable.DataTable, {
    data: resources,
    columns: columns,
    modelName: "Users",
    filterPlaceholder: "Search Users...",
    filterColumns: [{
      name: "email",
      type: "text"
    }],
    selectedRows: selectedRows,
    rowSelection: rowSelection,
    setRowSelection: setRowSelection,
    onDelete: handleBulkDelete,
    onNewItem: handleNewResource,
    isDialogOpen: isDialogOpen,
    setDialogOpen: setDialogOpen
  }), /*#__PURE__*/React.createElement(_resourceSheet.ResourceSheet, {
    open: isEditing,
    modelName: "User",
    onOpenChange: setIsEditing,
    resource: currentResource,
    onSave: handleSaveResource
  }));
}