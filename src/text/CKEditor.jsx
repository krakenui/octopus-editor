import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

const loadScript = require("load-script");
const defaultScriptUrl = "https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js";

class CKEditorContainer extends React.Component {
  constructor(props) {
    super(props);

    //Bindings
    this.onLoad = this.onLoad.bind(this);

    //State initialization
    this.state = {
      isScriptLoaded: props.isScriptLoaded,
    };
  }

  //load ckeditor script as soon as component mounts if not already loaded
  componentDidMount() {
    if (!this.state.isScriptLoaded) {
      loadScript(this.props.scriptUrl, this.onLoad);
    } else {
      this.onLoad();
    }
  }

  componentWillReceiveProps(props) {
    const editor = this.editorInstance;
    if (editor && editor.getData() !== props.content) {
      editor.setData(props.content);
    }
  }

  componentWillUnmount() {
    this.unmounting = true;
  }

  onLoad() {
    if (this.unmounting) return;

    this.setState({
      isScriptLoaded: true,
    });

    if (!window.CKEDITOR) {
      console.error("CKEditor not found");
      return;
    }

    this.editorInstance = window.CKEDITOR.appendTo(ReactDOM.findDOMNode(this), this.props.config, this.props.content);

    //Register listener for custom events if any
    for (var event in this.props.events) {
      var eventHandler = this.props.events[event];

      this.editorInstance.on(event, eventHandler);
    }
  }

  render() {
    return <div className={this.props.activeClass} />;
  }
}

CKEditorContainer.defaultProps = {
  content: "",
  config: {},
  isScriptLoaded: false,
  scriptUrl: defaultScriptUrl,
  activeClass: "",
  events: {},
};

CKEditorContainer.propTypes = {
  content: PropTypes.any,
  config: PropTypes.object,
  isScriptLoaded: PropTypes.bool,
  scriptUrl: PropTypes.string,
  activeClass: PropTypes.string,
  events: PropTypes.object,
};

const CKEditor = ({ defaultValue, onChange }) => {
  const onChangeHandle = (e) => {
    if (onChange != null) {
      const content = e.editor.getData();
      onChange(content);
    }
  };

  return (
    <CKEditorContainer
      activeClass="ck-editor"
      content={defaultValue}
      events={{
        change: onChangeHandle,
      }}
    />
  );
};

CKEditor.prototype = {
  defaultValue: PropTypes.string,
  onChange: (content) => PropTypes.any,
};

export default CKEditor;
