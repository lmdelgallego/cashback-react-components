"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formik = require("formik");

var _InputModule = _interopRequireDefault(require("./Input.module.scss"));

var _excluded = ["label", "style", "clearButton", "locale"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextInput = function TextInput(_ref) {
  var label = _ref.label,
      style = _ref.style,
      _ref$clearButton = _ref.clearButton,
      clearButton = _ref$clearButton === void 0 ? true : _ref$clearButton,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? 'en' : _ref$locale,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useField = (0, _formik.useField)(props),
      _useField2 = _slicedToArray(_useField, 3),
      field = _useField2[0],
      meta = _useField2[1],
      helpers = _useField2[2];

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _InputModule.default.inputText,
    style: _objectSpread({}, style)
  }, /*#__PURE__*/_react.default.createElement("label", null, label), /*#__PURE__*/_react.default.createElement("div", {
    className: _InputModule.default.inputContainer
  }, /*#__PURE__*/_react.default.createElement("input", _extends({}, field, props)), clearButton && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_InputModule.default.clearButton, " ").concat(locale === 'ar' ? _InputModule.default.clearButtonRtl : ''),
    type: "button",
    hidden: !field.value,
    onClick: function onClick() {
      return helpers.setValue('');
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Clear",
    src: '/icons/cross.svg',
    layout: "fill"
  }))), meta.touched && meta.error ? /*#__PURE__*/_react.default.createElement("div", {
    className: _InputModule.default.inputError
  }, meta.error) : null);
};

var _default = TextInput;
exports.default = _default;
TextInput.propTypes = {
  label: _propTypes.default.string.isRequired,
  style: _propTypes.default.object,
  clearButton: _propTypes.default.bool,
  locale: _propTypes.default.string
};