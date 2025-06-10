"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _path = require("path");
var _vite = require("vite");
var _vitePluginRuby = _interopRequireDefault(require("vite-plugin-ruby"));
var _pluginReact = _interopRequireDefault(require("@vitejs/plugin-react"));
var _viteTsconfigPaths = _interopRequireDefault(require("vite-tsconfig-paths"));
var _vitePluginEnvironment = _interopRequireDefault(require("vite-plugin-environment"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
var _default = exports["default"] = (0, _vite.defineConfig)({
  plugins: [(0, _vitePluginRuby["default"])(), (0, _pluginReact["default"])(), (0, _viteTsconfigPaths["default"])(), (0, _vitePluginEnvironment["default"])('all')],
  resolve: {
    alias: {
      '@': (0, _path.resolve)(__dirname, 'app/javascripts/src'),
      components: (0, _path.resolve)(__dirname, 'app/javascripts/components'),
      pages: (0, _path.resolve)(__dirname, 'app/javascripts/pages'),
      layouts: (0, _path.resolve)(__dirname, 'app/javascripts/layouts'),
      images: (0, _path.resolve)(__dirname, 'app/javascripts/images'),
      types: (0, _path.resolve)(__dirname, 'app/javascripts/types')
    }
  },
  build: {
    rollupOptions: {
      external: []
    }
  }
});