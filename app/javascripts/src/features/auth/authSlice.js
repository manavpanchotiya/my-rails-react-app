"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateToken = exports.setCredentials = exports.logout = exports["default"] = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _authActions = require("./authActions");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
// Define the user information type

// Define the initial state type

// Initialize userToken from local storage
var userToken = localStorage.getItem("userToken") || null;
var isLoggedIn = !!userToken;
var initialState = {
  loading: false,
  userInfo: null,
  userToken: userToken,
  error: null,
  success: false,
  isLoggedIn: isLoggedIn
};
var authSlice = (0, _toolkit.createSlice)({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: function logout(state) {
      localStorage.removeItem("userToken");
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        isLoggedIn: false,
        userInfo: null,
        userToken: null,
        error: null
      });
    },
    setCredentials: function setCredentials(state, _ref) {
      var payload = _ref.payload;
      state.userInfo = payload.data;
      state.isLoggedIn = payload.isLoggedIn;
    },
    updateToken: function updateToken(state, _ref2) {
      var payload = _ref2.payload;
      state.userToken = payload;
      localStorage.setItem("userToken", payload);
    }
  },
  extraReducers: function extraReducers(builder) {
    builder
    // Login user
    .addCase(_authActions.userLogin.pending, function (state) {
      state.loading = true;
      state.error = null;
    }).addCase(_authActions.userLogin.fulfilled, function (state, _ref3) {
      var payload = _ref3.payload;
      state.loading = false;
      state.email = payload.data.email;
    }).addCase(_authActions.userLogin.rejected, function (state, _ref4) {
      var payload = _ref4.payload;
      state.loading = false;
      state.isLoggedIn = false;
      state.error = payload || "Login failed";
    })
    //SocialLogin
    .addCase(_authActions.socialLogin.pending, function (state) {
      state.loading = true;
      state.error = null;
    }).addCase(_authActions.socialLogin.fulfilled, function (state, _ref5) {
      var payload = _ref5.payload;
      state.loading = false;
      state.userInfo = payload.data;
      state.email = payload.data.email;
      state.userToken = payload.userToken;
      state.isLoggedIn = true;
    }).addCase(_authActions.socialLogin.rejected, function (state, _ref6) {
      var payload = _ref6.payload;
      state.loading = false;
      state.error = payload || "Something went wrong!";
    })
    // Verify OTP
    .addCase(_authActions.verifyOTP.pending, function (state) {
      state.loading = true;
      state.error = null;
    }).addCase(_authActions.verifyOTP.fulfilled, function (state, _ref7) {
      var payload = _ref7.payload;
      state.loading = false;
      state.userInfo = payload.data;
      state.email = payload.data.email;
      state.userToken = payload.userToken;
      state.isLoggedIn = true;
    }).addCase(_authActions.verifyOTP.rejected, function (state, _ref8) {
      var payload = _ref8.payload;
      state.loading = false;
      state.error = payload || "OTP verification failed";
    })
    // Logout user
    .addCase(_authActions.userLogout.pending, function (state) {
      state.loading = true;
      state.error = null;
    }).addCase(_authActions.userLogout.fulfilled, function (state) {
      state.loading = false;
      state.isLoggedIn = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    }).addCase(_authActions.userLogout.rejected, function (state, _ref9) {
      var payload = _ref9.payload;
      state.loading = false;
      state.error = payload || "Logout failed";
    })
    // Destroy user
    .addCase(_authActions.destroyUser.pending, function (state) {
      state.loading = true;
      state.error = null;
    }).addCase(_authActions.destroyUser.fulfilled, function (state) {
      state.loading = false;
      state.isLoggedIn = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    }).addCase(_authActions.destroyUser.rejected, function (state, _ref0) {
      var payload = _ref0.payload;
      state.loading = false;
      state.error = payload || "Failed to destroy user";
    });
  }
});

// Export actions
var _authSlice$actions = authSlice.actions,
  logout = exports.logout = _authSlice$actions.logout,
  setCredentials = exports.setCredentials = _authSlice$actions.setCredentials,
  updateToken = exports.updateToken = _authSlice$actions.updateToken;

// Export reducer
var _default = exports["default"] = authSlice.reducer;