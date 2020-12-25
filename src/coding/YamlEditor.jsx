import classnames from "classnames";
import PropTypes from "prop-types";
import AceEditor from "react-ace";
import React, { useEffect, useState } from "react";

import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/snippets/yaml";

import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-monokai";

const YamlEditor = ({ theme: defaultTheme, content: defaultContent, tabSize, className, onChange, onBlur }) => {
  const [content, setContent] = useState(defaultContent);
  const theme = (defaultTheme || "bright") == "bright" ? "xcode" : "monokai";
  const editorClassnames = classnames(className, "yaml-editor", theme);

  useEffect(() => {
    setContent(defaultContent);
  }, [defaultContent]);

  const handleOnChange = (e) => {
    setContent(e);

    if (onChange) {
      onChange(e);
    }
  };

  const handleOnBlur = (e) => {
    if (onBlur) {
      if (content.trim() === "") {
        onBlur(null);
      }

      onBlur(content);
    }
  };

  return (
    <div className={editorClassnames}>
      <AceEditor
        className="ace-code-editor"
        value={content}
        theme={theme}
        mode="yaml"
        tabSize={tabSize}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />
    </div>
  );
};

YamlEditor.prototype = {
  theme: PropTypes.string, // "bright" | "dark",
  content: PropTypes.string,
  tabSize: PropTypes.number,
  className: PropTypes.string,
  onChange: (e) => PropTypes.any,
  onBlur: (e) => PropTypes.any,
};

export default YamlEditor;
