"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_editor_1 = require("@toast-ui/react-editor");
var classnames_1 = __importDefault(require("classnames"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importStar(require("react"));
require("@toast-ui/editor/dist/toastui-editor.css");
require("codemirror/lib/codemirror.css");
var MarkdownEditor = function (_a) {
    var className = _a.className, preview = _a.preview, content = _a.content, uploadImageFunc = _a.uploadImageFunc, onChange = _a.onChange, onBlur = _a.onBlur;
    var editorRef = react_1.useRef();
    var editorClassnames = classnames_1.default(className, "md-editor");
    var editorHooks = {
        addImageBlobHook: function (file, callbackFunc) {
            uploadImageFunc(file, callbackFunc);
        },
    };
    var editorEvents = {
        change: function (e) {
            if (onChange) {
                var mdCode = getMarkdown();
                onChange(e, mdCode);
            }
        },
        blur: function (e) {
            if (onBlur) {
                var mdCode = getMarkdown();
                onBlur(e, mdCode);
            }
        },
    };
    var getMarkdown = function () {
        if (editorRef.current) {
            var editorInst = editorRef.current["editorInst"];
            if (editorInst) {
                return editorInst.getMarkdown();
            }
        }
        return "";
    };
    return (<div className={editorClassnames}>
            <react_editor_1.Editor height="100%" previewStyle={preview} initialEditType="markdown" initialValue={content} useCommandShortcut={true} hooks={editorHooks} events={editorEvents} ref={editorRef}/>
        </div>);
};
MarkdownEditor.prototype = {
    className: prop_types_1.default.string,
    preview: prop_types_1.default.string,
    content: prop_types_1.default.string,
    uploadImageFunc: function (file, callbackFunc) { return prop_types_1.default.any; },
    onChange: function (e, content) { return prop_types_1.default.any; },
    onBlur: function (e, content) { return prop_types_1.default.any; }
};
exports.default = MarkdownEditor;
//# sourceMappingURL=MarkdownEditor.js.map