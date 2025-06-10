"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SettingsProfilePage;
var _separator = require("@/components/ui/separator");
var _profileForm = require("./profile-form");
function SettingsProfilePage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-medium"
  }, "Profile"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-muted-foreground"
  }, "This is how others will see you on the site.")), /*#__PURE__*/React.createElement(_separator.Separator, null), /*#__PURE__*/React.createElement(_profileForm.ProfileForm, null));
}