"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pricing = void 0;
var _badge = require("@/components/ui/badge");
var _button = require("@/components/ui/button");
var _card = require("@/components/ui/card");
var _lucideReact = require("lucide-react");
var PopularPlanType = /*#__PURE__*/function (PopularPlanType) {
  PopularPlanType[PopularPlanType["NO"] = 0] = "NO";
  PopularPlanType[PopularPlanType["YES"] = 1] = "YES";
  return PopularPlanType;
}(PopularPlanType || {});
var pricingList = [{
  title: "Free",
  popular: 0,
  price: 0,
  description: "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
  buttonText: "Get Started",
  benefitList: ["1 Team member", "2 GB Storage", "Upto 4 pages", "Community support", "lorem ipsum dolor"]
}, {
  title: "Premium",
  popular: 1,
  price: 5,
  description: "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
  buttonText: "Start Free Trial",
  benefitList: ["4 Team member", "4 GB Storage", "Upto 6 pages", "Priority support", "lorem ipsum dolor"]
}, {
  title: "Enterprise",
  popular: 0,
  price: 40,
  description: "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
  buttonText: "Contact US",
  benefitList: ["10 Team member", "8 GB Storage", "Upto 10 pages", "Priority support", "lorem ipsum dolor"]
}];
var Pricing = exports.Pricing = function Pricing() {
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    className: "container py-24 sm:py-32"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-4xl font-bold text-center"
  }, "Get", /*#__PURE__*/React.createElement("span", {
    className: "bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
  }, " ", "Unlimited", " "), "Access"), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl text-center text-muted-foreground pt-4 pb-8"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reiciendis."), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
  }, pricingList.map(function (pricing) {
    return /*#__PURE__*/React.createElement(_card.Card, {
      key: pricing.title,
      className: pricing.popular === PopularPlanType.YES ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10" : ""
    }, /*#__PURE__*/React.createElement(_card.CardHeader, null, /*#__PURE__*/React.createElement(_card.CardTitle, {
      className: "flex item-center justify-between"
    }, pricing.title, pricing.popular === PopularPlanType.YES ? /*#__PURE__*/React.createElement(_badge.Badge, {
      variant: "secondary",
      className: "text-sm text-primary"
    }, "Most popular") : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "text-3xl font-bold"
    }, "$", pricing.price), /*#__PURE__*/React.createElement("span", {
      className: "text-muted-foreground"
    }, " /month")), /*#__PURE__*/React.createElement(_card.CardDescription, null, pricing.description)), /*#__PURE__*/React.createElement(_card.CardContent, null, /*#__PURE__*/React.createElement(_button.Button, {
      className: "w-full"
    }, pricing.buttonText)), /*#__PURE__*/React.createElement("hr", {
      className: "w-4/5 m-auto mb-4"
    }), /*#__PURE__*/React.createElement(_card.CardFooter, {
      className: "flex"
    }, /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, pricing.benefitList.map(function (benefit) {
      return /*#__PURE__*/React.createElement("span", {
        key: benefit,
        className: "flex"
      }, /*#__PURE__*/React.createElement(_lucideReact.Check, {
        className: "text-green-500"
      }), " ", /*#__PURE__*/React.createElement("h3", {
        className: "ml-2"
      }, benefit));
    }))));
  })));
};