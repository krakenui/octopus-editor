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
var classnames_1 = __importDefault(require("classnames"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_ace_1 = __importDefault(require("react-ace"));
var react_1 = __importStar(require("react"));
require("ace-builds/webpack-resolver");
require("ace-builds/src-noconflict/mode-json");
require("ace-builds/src-noconflict/snippets/json");
require("ace-builds/src-noconflict/theme-xcode");
require("ace-builds/src-noconflict/theme-monokai");
var JsonEditor = function (_a) {
    var defaultTheme = _a.theme, defaultContent = _a.content, tabSize = _a.tabSize, className = _a.className, onChange = _a.onChange, onBlur = _a.onBlur;
    var _b = react_1.useState(JSON.stringify(defaultContent, null, "\t")), content = _b[0], setContent = _b[1];
    var theme = (defaultTheme || "bright") == "bright" ? "xcode" : "monokai";
    var editorClassnames = classnames_1.default(className, "json-editor", theme);
    react_1.useEffect(function () {
        setContent(JSON.stringify(defaultContent, null, "\t"));
    }, [defaultContent]);
    var handleOnChange = function (e) {
        setContent(e);
        if (onChange) {
            onChange(e);
        }
    };
    var handleOnBlur = function (e) {
        if (onBlur) {
            if (content.trim() === "") {
                onBlur(null);
            }
            onBlur(content);
        }
    };
    return (<div className={editorClassnames}>
            <react_ace_1.default className="ace-code-editor" value={content} theme={theme} mode="json" tabSize={tabSize} onChange={handleOnChange} onBlur={handleOnBlur}/>
        </div>);
};
JsonEditor.defaultProps = {
    theme: "dark",
    content: "",
    tabSize: 4,
    className: "",
    onChange: null,
    onBlur: null
};
JsonEditor.prototype = {
    theme: prop_types_1.default.string,
    content: prop_types_1.default.string,
    tabSize: prop_types_1.default.number,
    className: prop_types_1.default.string,
    onChange: function (e) { return prop_types_1.default.any; },
    onBlur: function (e) { return prop_types_1.default.any; }
};
exports.default = JsonEditor;
//# sourceMappingURL=JsonEditor.js.map