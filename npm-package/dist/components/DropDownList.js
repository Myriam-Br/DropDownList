"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function DropDownList(_ref) {
  let {
    name,
    title,
    label,
    id,
    list,
    onChange
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id
  }, title), /*#__PURE__*/_react.default.createElement("select", {
    defaultValue: 'DEFAULT',
    id: id,
    onChange: onChange
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "DEFAULT",
    disabled: true
  }, "Select a ", label), list.map((option, index) => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: index
    }, option[name]);
  })));
}
;
DropDownList.protoType = {
  name: _propTypes.default.string,
  label: _propTypes.default.string,
  id: _propTypes.default.string,
  list: _propTypes.default.array,
  onChange: _propTypes.default.func
};
var _default = DropDownList;
exports.default = _default;