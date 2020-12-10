import classnames from "classnames";
import PropTypes from 'prop-types';
import AceEditor from "react-ace";
import React, { useEffect, useState } from "react";

import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/snippets/json";

import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-monokai";

const JsonEditor = ({ theme: defaultTheme, content: defaultContent, tabSize, className, onChange, onBlur }) => {
    const [content, setContent] = useState(JSON.stringify(defaultContent, null, "\t"));
    const theme = (defaultTheme || "bright") == "bright" ? "xcode" : "monokai";
    const editorClassnames = classnames(className, "json-editor", theme);

    useEffect(() => {
        setContent(JSON.stringify(defaultContent, null, "\t"));
    }, [defaultContent])

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
                mode="json"
                tabSize={tabSize}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
            />
        </div>
    );
}

JsonEditor.defaultProps = {
    theme: "dark",
    content: "",
    tabSize: 4,
    className: "",
    onChange: null,
    onBlur: null
};

JsonEditor.prototype = {
    theme: PropTypes.string, // "bright" | "dark",
    content: PropTypes.string,
    tabSize: PropTypes.number,
    className: PropTypes.string,
    onChange: (e) => PropTypes.any,
    onBlur: (e) => PropTypes.any
}

export default JsonEditor;