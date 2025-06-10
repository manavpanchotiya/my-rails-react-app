"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginForm = LoginForm;
var _reactRouterDom = require("react-router-dom");
var _button = require("@/components/ui/button");
var _card = require("@/components/ui/card");
var _input = require("@/components/ui/input");
var _label = require("@/components/ui/label");
function LoginForm() {
  return /*#__PURE__*/React.createElement(_card.Card, {
    className: "mx-auto max-w-sm"
  }, /*#__PURE__*/React.createElement(_card.CardHeader, null, /*#__PURE__*/React.createElement(_card.CardTitle, {
    className: "text-2xl"
  }, "Login"), /*#__PURE__*/React.createElement(_card.CardDescription, null, "Enter your email below to login to your account")), /*#__PURE__*/React.createElement(_card.CardContent, null, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2"
  }, /*#__PURE__*/React.createElement(_label.Label, {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/React.createElement(_input.Input, {
    id: "email",
    type: "email",
    placeholder: "m@example.com",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement(_label.Label, {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    href: "#",
    className: "ml-auto inline-block text-sm underline"
  }, "Forgot your password?")), /*#__PURE__*/React.createElement(_input.Input, {
    id: "password",
    type: "password",
    required: true
  })), /*#__PURE__*/React.createElement(_button.Button, {
    type: "submit",
    className: "w-full"
  }, "Login"), /*#__PURE__*/React.createElement(_button.Button, {
    variant: "outline",
    className: "w-full"
  }, "Login with Google")), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 text-center text-sm"
  }, "Don't have an account?", " ", /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    href: "#",
    className: "underline"
  }, "Sign up"))));
}