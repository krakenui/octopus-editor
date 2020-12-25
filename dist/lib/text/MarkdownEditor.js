"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactEditor = require("@toast-ui/react-editor");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("@toast-ui/editor/dist/toastui-editor.css");

require("codemirror/lib/codemirror.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkdownEditor = function MarkdownEditor(_ref) {
  var className = _ref.className,
      preview = _ref.preview,
      content = _ref.content,
      uploadImageFunc = _ref.uploadImageFunc,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur;

  var editorRef = (0, _react.useRef)();
  var editorClassnames = (0, _classnames2.default)(className, "md-editor");
  var editorHooks = {
    addImageBlobHook: function addImageBlobHook(file, callbackFunc) {
      uploadImageFunc(file, callbackFunc);
    }
  };
  var editorEvents = {
    change: function change(e) {
      if (onChange) {
        var mdCode = getMarkdown();
        onChange(e, mdCode);
      }
    },
    blur: function blur(e) {
      if (onBlur) {
        var mdCode = getMarkdown();
        onBlur(e, mdCode);
      }
    }
  };

  var getMarkdown = function getMarkdown() {
    if (editorRef.current) {
      var editorInst = editorRef.current["editorInst"];
      if (editorInst) {
        return editorInst.getMarkdown();
      }
    }

    return "";
  };

  return _react2.default.createElement(
    "div",
    { className: editorClassnames },
    _react2.default.createElement(_reactEditor.Editor, {
      height: "100%",
      previewStyle: preview,
      initialEditType: "markdown",
      initialValue: content,
      useCommandShortcut: true,
      hooks: editorHooks,
      events: editorEvents,
      ref: editorRef
    })
  );
};

MarkdownEditor.prototype = {
  className: _propTypes2.default.string,
  preview: _propTypes2.default.string, // 'tab' | 'vertical';
  content: _propTypes2.default.string,
  uploadImageFunc: function uploadImageFunc(file, callbackFunc) {
    return _propTypes2.default.any;
  },
  onChange: function onChange(e, content) {
    return _propTypes2.default.any;
  },
  onBlur: function onBlur(e, content) {
    return _propTypes2.default.any;
  }
};

exports.default = MarkdownEditor;