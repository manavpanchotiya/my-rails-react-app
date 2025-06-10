"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetUserDetailsQuery = exports.authApi = void 0;
var _baseService = require("../baseService");
var _react = require("@reduxjs/toolkit/query/react");
// authService.ts

// Define a type for the user details response

// Create a type for the query function

var authApi = exports.authApi = (0, _react.createApi)({
  reducerPath: "authApi",
  baseQuery: _baseService.baseQueryWithReauth,
  endpoints: function endpoints(build) {
    return {
      getUserDetails: build.query({
        query: function query() {
          return {
            url: "api/v1/users",
            method: "GET"
          };
        }
      })
    };
  }
});

// Export the generated hook
var useGetUserDetailsQuery = exports.useGetUserDetailsQuery = authApi.useGetUserDetailsQuery;