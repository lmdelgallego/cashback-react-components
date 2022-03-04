"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _spinner = _interopRequireDefault(require("./spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'UI/Atoms/Spinner',
  component: _spinner.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_spinner.default, args);
};

var Default = Template.bind({});
exports.Default = Default;