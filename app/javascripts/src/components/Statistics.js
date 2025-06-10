"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Statistics = void 0;
var Statistics = exports.Statistics = function Statistics() {
  var stats = [{
    quantity: "2.7K+",
    description: "Users"
  }, {
    quantity: "1.8K+",
    description: "Subscribers"
  }, {
    quantity: "112",
    description: "Downloads"
  }, {
    quantity: "4",
    description: "Products"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "statistics"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 lg:grid-cols-4 gap-8"
  }, stats.map(function (_ref) {
    var quantity = _ref.quantity,
      description = _ref.description;
    return /*#__PURE__*/React.createElement("div", {
      key: description,
      className: "space-y-2 text-center"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-3xl sm:text-4xl font-bold "
    }, quantity), /*#__PURE__*/React.createElement("p", {
      className: "text-xl text-muted-foreground"
    }, description));
  })));
};