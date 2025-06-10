"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _cable = _interopRequireDefault(require("@/channels/cable"));
var _sonner = require("sonner");
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
// hooks/useNotificationsChannel.ts

var useNotificationsChannel = function useNotificationsChannel(onReceived) {
  (0, _react.useEffect)(function () {
    var subscription = _cable["default"].subscriptions.create('NotificationChannel', {
      received: function received(data) {
        onReceived(data);
        _sonner.toast.info(data.title, {
          position: "top-right",
          description: data.body
        });
      }
    });
    return function () {
      _cable["default"].subscriptions.remove(subscription);
    };
  }, [onReceived]);
};
var _default = exports["default"] = useNotificationsChannel;