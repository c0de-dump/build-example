"use strict";

var _nodeOs = _interopRequireDefault(require("node:os"));
var _nodePath = require("node:path");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
console.log('hello world');
console.log('path', (0, _nodePath.resolve)(__dirname));
console.log('os', _nodeOs["default"].platform());