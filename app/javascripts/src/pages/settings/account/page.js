"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SettingsAccountPage;
var _separator = require("@/components/ui/separator");
var _accountForm = require("./account-form");
var _changePasswordForm = require("./change-password-form");
var _destroyUser = require("./destroy-user");
function SettingsAccountPage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-medium"
  }, "Account"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-muted-foreground"
  }, "Update your account settings. Set your preferred language and timezone.")), /*#__PURE__*/React.createElement(_separator.Separator, null), /*#__PURE__*/React.createElement(_accountForm.AccountForm, null), /*#__PURE__*/React.createElement(_changePasswordForm.ChangePasswordForm, null), /*#__PURE__*/React.createElement(_destroyUser.DeleteAccount, null));
}