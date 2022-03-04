"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  title: 'UI/Atoms/CheckBox',
  component: _Checkbox.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_formik.Formik, {
    initialValues: {
      check: false
    }
  }, /*#__PURE__*/_react.default.createElement(_formik.Form, null, /*#__PURE__*/_react.default.createElement(_Checkbox.default, _extends({
    name: "check"
  }, args))));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  children: 'Lorem ipsum dolor sit amet'
};