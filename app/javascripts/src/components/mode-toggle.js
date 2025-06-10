"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModeToggle = ModeToggle;
var _button = require("@/components/ui/button");
var _dropdownMenu = require("@/components/ui/dropdown-menu");
var _themeProvider = require("@/lib/theme-provider");
var _lucideReact = require("lucide-react");
function ModeToggle() {
  var _useTheme = (0, _themeProvider.useTheme)(),
    setTheme = _useTheme.setTheme;
  return /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenu, null, /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuTrigger, {
    asChild: true
  }, /*#__PURE__*/React.createElement(_button.Button, {
    variant: "ghost",
    size: "icon",
    className: "ghost"
  }, /*#__PURE__*/React.createElement(_lucideReact.Sun, {
    className: "h-[1.1rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
  }), /*#__PURE__*/React.createElement(_lucideReact.Moon, {
    className: "absolute h-[1.1rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Toggle theme"))), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuContent, {
    align: "end"
  }, /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, {
    onClick: function onClick() {
      return setTheme("light");
    }
  }, "Light"), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, {
    onClick: function onClick() {
      return setTheme("dark");
    }
  }, "Dark"), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, {
    onClick: function onClick() {
      return setTheme("system");
    }
  }, "System")));
}