"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAce = require("react-ace");

var _reactAce2 = _interopRequireDefault(_reactAce);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("ace-builds/webpack-resolver");

require("ace-builds/src-noconflict/mode-yaml");

require("ace-builds/src-noconflict/snippets/yaml");

require("ace-builds/src-noconflict/theme-xcode");

require("ace-builds/src-noconflict/theme-monokai");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YamlEditor = function YamlEditor(_ref) {
  var defaultTheme = _ref.theme,
      defaultContent = _ref.content,
      tabSize = _ref.tabSize,
      className = _ref.className,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur;

  var _useState = (0, _react.useState)(defaultContent),
      _useState2 = _slicedToArray(_useState, 2),
      content = _useState2[0],
      setContent = _useState2[1];

  var theme = (defaultTheme || "bright") == "bright" ? "xcode" : "monokai";
  var editorClassnames = (0, _classnames2.default)(className, "yaml-editor", theme);

  (0, _react.useEffect)(function () {
    setContent(defaultContent);
  }, [defaultContent]);

  var handleOnChange = function handleOnChange(e) {
    setContent(e);

    if (onChange) {
      onChange(e);
    }
  };

  var handleOnBlur = function handleOnBlur(e) {
    if (onBlur) {
      if (content.trim() === "") {
        onBlur(null);
      }

      onBlur(content);
    }
  };

  return _react2.default.createElement(
    "div",
    { className: editorClassnames },
    _react2.default.createElement(_reactAce2.default, {
      className: "ace-code-editor",
      value: content,
      theme: theme,
      mode: "yaml",
      tabSize: tabSize,
      onChange: handleOnChange,
      onBlur: handleOnBlur
    })
  );
};

YamlEditor.prototype = {
  theme: _propTypes2.default.string, // "bright" | "dark",
  content: _propTypes2.default.string,
  tabSize: _propTypes2.default.number,
  className: _propTypes2.default.string,
  onChange: function onChange(e) {
    return _propTypes2.default.any;
  },
  onBlur: function onBlur(e) {
    return _propTypes2.default.any;
  }
};

exports.default = YamlEditor;