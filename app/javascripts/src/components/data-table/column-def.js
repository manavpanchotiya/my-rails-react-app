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
exports.createColumns = createColumns;
var React = _interopRequireWildcard(require("react"));
var _lucideReact = require("lucide-react");
var _button = require("@/components/ui/button");
var _checkbox = require("@/components/ui/checkbox");
var _dropdownMenu = require("@/components/ui/dropdown-menu");
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
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
// Generic function to create column definitions

function createColumns(configs) {
  // Column for row selection
  var selectColumn = {
    id: "select",
    header: function header(_ref) {
      var table = _ref.table;
      return /*#__PURE__*/React.createElement(_checkbox.Checkbox, {
        checked: table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected() && "indeterminate",
        onCheckedChange: function onCheckedChange(value) {
          return table.toggleAllPageRowsSelected(!!value);
        },
        "aria-label": "Select all"
      });
    },
    cell: function cell(_ref2) {
      var row = _ref2.row;
      return /*#__PURE__*/React.createElement(_checkbox.Checkbox, {
        checked: row.getIsSelected(),
        onCheckedChange: function onCheckedChange(value) {
          return row.toggleSelected(!!value);
        },
        "aria-label": "Select row"
      });
    },
    enableSorting: false,
    enableHiding: false
  };

  // Column for actions
  var actionColumn = {
    id: "actions",
    enableHiding: false,
    cell: function cell(_ref3) {
      var _config$dropdownItems;
      var row = _ref3.row;
      var data = row.original;
      var config = configs.find(function (c) {
        return c.dropdownItems;
      });

      // Generate a unique key for dropdown items
      return /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenu, null, /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuTrigger, {
        asChild: true
      }, /*#__PURE__*/React.createElement(_button.Button, {
        variant: "ghost",
        className: "h-8 w-8 p-0"
      }, /*#__PURE__*/React.createElement("span", {
        className: "sr-only"
      }, "Open menu"), /*#__PURE__*/React.createElement(_lucideReact.MoreHorizontal, {
        className: "h-4 w-4"
      }))), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuContent, {
        align: "end"
      }, /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuLabel, null, "Actions"), config === null || config === void 0 || (_config$dropdownItems = config.dropdownItems) === null || _config$dropdownItems === void 0 ? void 0 : _config$dropdownItems.map(function (item, index) {
        return /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, {
          key: "".concat(row.id || row.index, "_").concat(index, "_").concat(item.label) // Ensure unique keys for dropdown items
          ,

          onClick: function onClick() {
            return item.onClick(data);
          }
        }, item.label);
      }), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuSeparator, null)));
    }
  };
  var mainColumns = configs.filter(function (config) {
    return config.key !== "" && config.key !== "actions";
  }) // Filter out columns with empty keys or "actions"
  .map(function (config) {
    return {
      accessorKey: config.key,
      header: config.isSortable ? function (_ref4) {
        var column = _ref4.column;
        return /*#__PURE__*/React.createElement(_button.Button, {
          variant: "ghost",
          onClick: function onClick() {
            return column.toggleSorting(column.getIsSorted() === "asc");
          }
        }, config.header, /*#__PURE__*/React.createElement(_lucideReact.ArrowUpDown, {
          className: "ml-2 h-4 w-4"
        }));
      } : config.header,
      cell: function cell(_ref5) {
        var row = _ref5.row,
          index = _ref5.row.index;
        var value = row.getValue(config.key);
        // Check if it's the "index" column, and display the row's index + 1
        if (config.key === "index") {
          return index + 1; // Display serialized ID (index + 1)
        }
        return config.renderCell ? config.renderCell(value, row, index) : value;
      }
    };
  });
  var includeSelectColumn = configs.some(function (c) {
    return c.enableSelection;
  });
  var includeActionColumn = configs.some(function (c) {
    return c.dropdownItems;
  });

  // Return columns with conditional selection and actions
  return [].concat(_toConsumableArray(includeSelectColumn ? [selectColumn] : []), _toConsumableArray(mainColumns), _toConsumableArray(includeActionColumn ? [actionColumn] : []));
}