"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ButtonModule = _interopRequireDefault(require("./Button.module.scss"));

var _excluded = ["children", "typeClass", "onClick", "disabled"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      _ref$typeClass = _ref.typeClass,
      typeClass = _ref$typeClass === void 0 ? 'default' : _ref$typeClass,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded);

  if (typeClass === 'link') {
    return /*#__PURE__*/_react.default.createElement("button", _extends({
      className: _ButtonModule.default.buttonLink,
      onClick: onClick
    }, props, {
      disabled: disabled
    }), children);
  }

  return /*#__PURE__*/_react.default.createElement("button", _extends({
    className: _ButtonModule.default.button,
    onClick: onClick
  }, props, {
    disabled: disabled
  }), children);
};

var _default = Button;
exports.default = _default;
Button.propTypes = {
  children: _propTypes.default.node.isRequired,
  typeClass: _propTypes.default.oneOf(['default', 'link']),
  onClick: _propTypes.default.func,
  disabled: _propTypes.default.bool
};