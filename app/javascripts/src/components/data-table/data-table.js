"use strict";
"use client";

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
exports.DataTable = DataTable;
var React = _interopRequireWildcard(require("react"));
var _reactTable = require("@tanstack/react-table");
var _lucideReact = require("lucide-react");
var _confirmationDialog = require("@/components/confirmation-dialog");
var _button = require("@/components/ui/button");
var _input = require("@/components/ui/input");
var _reactIcons = require("@radix-ui/react-icons");
var _table = require("@/components/ui/table");
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
function DataTable(_ref) {
  var _table$getRowModel$ro;
  var data = _ref.data,
    disabled = _ref.disabled,
    columns = _ref.columns,
    filterColumns = _ref.filterColumns,
    modelName = _ref.modelName,
    _ref$selectedRows = _ref.selectedRows,
    selectedRows = _ref$selectedRows === void 0 ? [] : _ref$selectedRows,
    _ref$filterPlaceholde = _ref.filterPlaceholder,
    filterPlaceholder = _ref$filterPlaceholde === void 0 ? "Filter..." : _ref$filterPlaceholde,
    onDelete = _ref.onDelete,
    onNewItem = _ref.onNewItem,
    setRowSelection = _ref.setRowSelection,
    _ref$rowSelection = _ref.rowSelection,
    rowSelection = _ref$rowSelection === void 0 ? [] : _ref$rowSelection,
    isDialogOpen = _ref.isDialogOpen,
    setDialogOpen = _ref.setDialogOpen;
  var _React$useState = React.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sorting = _React$useState2[0],
    setSorting = _React$useState2[1];
  var _React$useState3 = React.useState([]),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    columnFilters = _React$useState4[0],
    setColumnFilters = _React$useState4[1];
  var _React$useState5 = React.useState({}),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    columnVisibility = _React$useState6[0],
    setColumnVisibility = _React$useState6[1];
  var table = (0, _reactTable.useReactTable)({
    data: data,
    columns: columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: (0, _reactTable.getCoreRowModel)(),
    getPaginationRowModel: (0, _reactTable.getPaginationRowModel)(),
    getSortedRowModel: (0, _reactTable.getSortedRowModel)(),
    getFilteredRowModel: (0, _reactTable.getFilteredRowModel)(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting: sorting,
      columnFilters: columnFilters,
      columnVisibility: columnVisibility,
      rowSelection: rowSelection
    }
  });
  var handleTextFilterChange = function handleTextFilterChange(columnId, value) {
    var _table$getColumn;
    (_table$getColumn = table.getColumn(columnId)) === null || _table$getColumn === void 0 || _table$getColumn.setFilterValue(value);
  };
  var handleDropdownFilterChange = function handleDropdownFilterChange(columnId, value) {
    var _table$getColumn2;
    (_table$getColumn2 = table.getColumn(columnId)) === null || _table$getColumn2 === void 0 || _table$getColumn2.setFilterValue(value);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex space-x-4"
  }, (filterColumns === null || filterColumns === void 0 ? void 0 : filterColumns.length) > 0 && filterColumns.map(function (filter) {
    var _ref2, _table$getColumn3;
    return /*#__PURE__*/React.createElement("div", {
      key: filter.name
    }, filter.type === "text" && /*#__PURE__*/React.createElement(_input.Input, {
      placeholder: filterPlaceholder || "Filter by ".concat(filter.name),
      value: (_ref2 = (_table$getColumn3 = table.getColumn(filter.name)) === null || _table$getColumn3 === void 0 ? void 0 : _table$getColumn3.getFilterValue()) !== null && _ref2 !== void 0 ? _ref2 : "",
      onChange: function onChange(event) {
        return handleTextFilterChange(filter.name, event.target.value);
      },
      className: "max-w-sm"
    }), filter.type === "dropdown" && filter.options && /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenu, null, /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuTrigger, {
      asChild: true
    }, /*#__PURE__*/React.createElement(_button.Button, {
      variant: "outline",
      className: "w-40"
    }, "Filter by ".concat(filter.name), /*#__PURE__*/React.createElement(_lucideReact.ChevronDown, {
      className: "ml-2 h-4 w-4"
    }))), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuContent, null, /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuLabel, null, "Select ", filter.name), filter.options.map(function (option) {
      return /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, {
        key: option,
        onClick: function onClick() {
          return handleDropdownFilterChange(filter.name, option);
        }
      }, option);
    }))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, selectedRows.length > 0 && !disabled && /*#__PURE__*/React.createElement(_button.Button, {
    size: "sm",
    variant: "destructive",
    className: "ml-4",
    onClick: function onClick() {
      return setDialogOpen(true);
    }
  }, "(".concat(selectedRows.length, ") Delete Selected")), onNewItem && !disabled && /*#__PURE__*/React.createElement(_button.Button, {
    size: "sm",
    onClick: onNewItem
  }, /*#__PURE__*/React.createElement(_reactIcons.PlusIcon, {
    className: "size-4",
    "aria-hidden": "true"
  }), "New ", modelName))), /*#__PURE__*/React.createElement(_confirmationDialog.ConfirmationDialog, {
    open: isDialogOpen,
    onOpenChange: setDialogOpen,
    onConfirm: onDelete,
    title: "Delete ".concat(selectedRows.length > 0 ? "Selected ".concat(modelName, "s") : modelName),
    description: "Are you sure you want to delete ".concat(selectedRows.length, " selected ").concat(modelName.toLowerCase(), "(s)?")
  }), /*#__PURE__*/React.createElement("div", {
    className: "rounded-md border"
  }, /*#__PURE__*/React.createElement(_table.Table, null, /*#__PURE__*/React.createElement(_table.TableHeader, null, table.getHeaderGroups().map(function (headerGroup) {
    return /*#__PURE__*/React.createElement(_table.TableRow, {
      key: headerGroup.id
    }, headerGroup.headers.map(function (header) {
      return /*#__PURE__*/React.createElement(_table.TableHead, {
        key: header.id
      }, header.isPlaceholder ? null : (0, _reactTable.flexRender)(header.column.columnDef.header, header.getContext()));
    }));
  })), /*#__PURE__*/React.createElement(_table.TableBody, null, (_table$getRowModel$ro = table.getRowModel().rows) !== null && _table$getRowModel$ro !== void 0 && _table$getRowModel$ro.length ? table.getRowModel().rows.map(function (row) {
    return /*#__PURE__*/React.createElement(_table.TableRow, {
      key: row.id,
      "data-state": row.getIsSelected() && "selected"
    }, row.getVisibleCells().map(function (cell) {
      return /*#__PURE__*/React.createElement(_table.TableCell, {
        key: cell.id
      }, (0, _reactTable.flexRender)(cell.column.columnDef.cell, cell.getContext()));
    }));
  }) : /*#__PURE__*/React.createElement(_table.TableRow, null, /*#__PURE__*/React.createElement(_table.TableCell, {
    colSpan: columns.length,
    className: "h-24 text-center"
  }, "No results."))))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-end space-x-2 py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 text-sm text-muted-foreground"
  }, table.getFilteredSelectedRowModel().rows.length, " of ", table.getFilteredRowModel().rows.length, " row(s) selected."), /*#__PURE__*/React.createElement("div", {
    className: "space-x-2"
  }, /*#__PURE__*/React.createElement(_button.Button, {
    variant: "outline",
    size: "sm",
    onClick: function onClick() {
      return table.previousPage();
    },
    disabled: !table.getCanPreviousPage()
  }, "Previous"), /*#__PURE__*/React.createElement(_button.Button, {
    variant: "outline",
    size: "sm",
    onClick: function onClick() {
      return table.nextPage();
    },
    disabled: !table.getCanNextPage()
  }, "Next"))));
}