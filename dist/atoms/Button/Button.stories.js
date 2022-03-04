"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Link = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/components/Button.stories.js
var _default = {
  title: 'UI/Atoms/Button',
  component: _Button.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  children: 'Button',
  typeClass: 'default'
};
var Link = Template.bind({});
exports.Link = Link;
Link.args = {
  children: 'Button Link',
  typeClass: 'link'
};