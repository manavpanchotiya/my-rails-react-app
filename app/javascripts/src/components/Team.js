"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Team = void 0;
var _button = require("@/components/ui/button");
var _card = require("@/components/ui/card");
var _lucideReact = require("lucide-react");
var teamList = [{
  imageUrl: "https://i.pravatar.cc/150?img=35",
  name: "Emma Smith",
  position: "Product Manager",
  socialNetworks: [{
    name: "Linkedin",
    url: "https://www.linkedin.com/in/leopoldo-miranda/"
  }, {
    name: "Facebook",
    url: "https://www.facebook.com/"
  }, {
    name: "Instagram",
    url: "https://www.instagram.com/"
  }]
}, {
  imageUrl: "https://i.pravatar.cc/150?img=60",
  name: "John Doe",
  position: "Tech Lead",
  socialNetworks: [{
    name: "Linkedin",
    url: "https://www.linkedin.com/in/leopoldo-miranda/"
  }, {
    name: "Facebook",
    url: "https://www.facebook.com/"
  }, {
    name: "Instagram",
    url: "https://www.instagram.com/"
  }]
}, {
  imageUrl: "https://i.pravatar.cc/150?img=36",
  name: "Ashley Ross",
  position: "Frontend Developer",
  socialNetworks: [{
    name: "Linkedin",
    url: "https://www.linkedin.com/in/leopoldo-miranda/"
  }, {
    name: "Instagram",
    url: "https://www.instagram.com/"
  }]
}, {
  imageUrl: "https://i.pravatar.cc/150?img=17",
  name: "Bruce Rogers",
  position: "Backend Developer",
  socialNetworks: [{
    name: "Linkedin",
    url: "https://www.linkedin.com/in/leopoldo-miranda/"
  }, {
    name: "Facebook",
    url: "https://www.facebook.com/"
  }]
}];
var Team = exports.Team = function Team() {
  var socialIcon = function socialIcon(iconName) {
    switch (iconName) {
      case "Linkedin":
        return /*#__PURE__*/React.createElement(_lucideReact.Linkedin, {
          size: "20"
        });
      case "Facebook":
        return /*#__PURE__*/React.createElement(_lucideReact.Facebook, {
          size: "20"
        });
      case "Instagram":
        return /*#__PURE__*/React.createElement(_lucideReact.Instagram, {
          size: "20"
        });
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "team",
    className: "container py-24 sm:py-32"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-4xl font-bold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
  }, "Our Dedicated", " "), "Crew"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 mb-10 text-xl text-muted-foreground"
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor pariatur sit!"), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10"
  }, teamList.map(function (_ref) {
    var imageUrl = _ref.imageUrl,
      name = _ref.name,
      position = _ref.position,
      socialNetworks = _ref.socialNetworks;
    return /*#__PURE__*/React.createElement(_card.Card, {
      key: name,
      className: "bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
    }, /*#__PURE__*/React.createElement(_card.CardHeader, {
      className: "mt-8 flex justify-center items-center pb-2"
    }, /*#__PURE__*/React.createElement("img", {
      src: imageUrl,
      alt: "".concat(name, " ").concat(position),
      className: "absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
    }), /*#__PURE__*/React.createElement(_card.CardTitle, {
      className: "text-center"
    }, name), /*#__PURE__*/React.createElement(_card.CardDescription, {
      className: "text-primary"
    }, position)), /*#__PURE__*/React.createElement(_card.CardContent, {
      className: "text-center pb-2"
    }, /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")), /*#__PURE__*/React.createElement(_card.CardFooter, null, socialNetworks.map(function (_ref2) {
      var name = _ref2.name,
        url = _ref2.url;
      return /*#__PURE__*/React.createElement("div", {
        key: name
      }, /*#__PURE__*/React.createElement("a", {
        rel: "noreferrer noopener",
        href: url,
        target: "_blank",
        className: (0, _button.buttonVariants)({
          variant: "ghost",
          size: "sm"
        })
      }, /*#__PURE__*/React.createElement("span", {
        className: "sr-only"
      }, name, " icon"), socialIcon(name)));
    })));
  })));
};