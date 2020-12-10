"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_dom_1 = __importDefault(require("react-dom"));
var loadScript = require('load-script');
var defaultScriptUrl = 'https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js';
var CKEditorContainer = /** @class */ (function (_super) {
    __extends(CKEditorContainer, _super);
    function CKEditorContainer(props) {
        var _this = _super.call(this, props) || this;
        //Bindings
        _this.onLoad = _this.onLoad.bind(_this);
        //State initialization
        _this.state = {
            isScriptLoaded: props.isScriptLoaded
        };
        return _this;
    }
    //load ckeditor script as soon as component mounts if not already loaded
    CKEditorContainer.prototype.componentDidMount = function () {
        if (!this.state.isScriptLoaded) {
            loadScript(this.props.scriptUrl, this.onLoad);
        }
        else {
            this.onLoad();
        }
    };
    CKEditorContainer.prototype.componentWillReceiveProps = function (props) {
        var editor = this.editorInstance;
        if (editor && editor.getData() !== props.content) {
            editor.setData(props.content);
        }
    };
    CKEditorContainer.prototype.componentWillUnmount = function () {
        this.unmounting = true;
    };
    CKEditorContainer.prototype.onLoad = function () {
        if (this.unmounting)
            return;
        this.setState({
            isScriptLoaded: true
        });
        if (!window.CKEDITOR) {
            console.error('CKEditor not found');
            return;
        }
        this.editorInstance = window.CKEDITOR.appendTo(react_dom_1.default.findDOMNode(this), this.props.config, this.props.content);
        //Register listener for custom events if any
        for (var event in this.props.events) {
            var eventHandler = this.props.events[event];
            this.editorInstance.on(event, eventHandler);
        }
    };
    CKEditorContainer.prototype.render = function () {
        return <div className={this.props.activeClass}/>;
    };
    return CKEditorContainer;
}(react_1.default.Component));
CKEditorContainer.defaultProps = {
    content: '',
    config: {},
    isScriptLoaded: false,
    scriptUrl: defaultScriptUrl,
    activeClass: '',
    events: {}
};
CKEditorContainer.propTypes = {
    content: prop_types_1.default.any,
    config: prop_types_1.default.object,
    isScriptLoaded: prop_types_1.default.bool,
    scriptUrl: prop_types_1.default.string,
    activeClass: prop_types_1.default.string,
    events: prop_types_1.default.object
};
var CKEditor = function (_a) {
    var defaultValue = _a.defaultValue, onChange = _a.onChange;
    var onChangeHandle = function (e) {
        if (onChange != null) {
            var content = e.editor.getData();
            onChange(content);
        }
    };
    return (<CKEditorContainer activeClass="ck-editor" content={defaultValue} events={{
        change: onChangeHandle,
    }}/>);
};
CKEditor.prototype = {
    defaultValue: prop_types_1.default.string,
    onChange: function (content) { return prop_types_1.default.any; }
};
exports.default = CKEditor;
//# sourceMappingURL=CKEditor.js.map