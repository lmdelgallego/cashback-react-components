"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _spinnerModule = _interopRequireDefault(require("./spinner.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// react function spinner component
var Spinner = function Spinner() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _spinnerModule.default.loading
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _spinnerModule.default.loading__spinner
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/spinner.svg",
    width: 40,
    height: 40
  })));
};

var _default = Spinner;
exports.default = _default;