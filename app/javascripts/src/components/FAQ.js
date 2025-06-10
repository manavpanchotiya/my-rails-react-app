"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FAQ = void 0;
var _accordion = require("@/components/ui/accordion");
var FAQList = [{
  question: "Is this template free?",
  answer: "Yes. It is a free ChadcnUI template.",
  value: "item-1"
}, {
  question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
  answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
  value: "item-2"
}, {
  question: "Lorem ipsum dolor sit amet  Consectetur natus dolores minus quibusdam?",
  answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis necessitatibus maxime quis ipsa vitae cumque quo?",
  value: "item-3"
}, {
  question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?",
  answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  value: "item-4"
}, {
  question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus?",
  answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
  value: "item-5"
}];
var FAQ = exports.FAQ = function FAQ() {
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    className: "container py-24 sm:py-32"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-4xl font-bold mb-4"
  }, "Frequently Asked", " ", /*#__PURE__*/React.createElement("span", {
    className: "bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
  }, "Questions")), /*#__PURE__*/React.createElement(_accordion.Accordion, {
    type: "single",
    collapsible: true,
    className: "w-full AccordionRoot"
  }, FAQList.map(function (_ref) {
    var question = _ref.question,
      answer = _ref.answer,
      value = _ref.value;
    return /*#__PURE__*/React.createElement(_accordion.AccordionItem, {
      key: value,
      value: value
    }, /*#__PURE__*/React.createElement(_accordion.AccordionTrigger, {
      className: "text-left"
    }, question), /*#__PURE__*/React.createElement(_accordion.AccordionContent, null, answer));
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-medium mt-4"
  }, "Still have questions?", " ", /*#__PURE__*/React.createElement("a", {
    rel: "noreferrer noopener",
    href: "#",
    className: "text-primary transition-all border-primary hover:border-b-2"
  }, "Contact us")));
};