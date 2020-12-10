import { Editor } from '@toast-ui/react-editor';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import '@toast-ui/editor/dist/toastui-editor.css';
import 'codemirror/lib/codemirror.css';

const MarkdownEditor = ({ className, preview, content, uploadImageFunc, onChange, onBlur }) => {
    const editorRef = useRef();
    const editorClassnames = classnames(className, "md-editor");
    const editorHooks = {
        addImageBlobHook: (file, callbackFunc) => {
            uploadImageFunc(file, callbackFunc);
        },
    };
    const editorEvents = {
        change: (e) => {
            if (onChange) {
                const mdCode = getMarkdown();
                onChange(e, mdCode);
            }
        },
        blur: (e) => {
            if (onBlur) {
                const mdCode = getMarkdown();
                onBlur(e, mdCode);
            }
        },
    };

    const getMarkdown = () => {
        if (editorRef.current) {
            const editorInst = editorRef.current["editorInst"];
            if (editorInst) {
                return editorInst.getMarkdown();
            }
        }

        return "";
    };

    return (
        <div className={editorClassnames}>
            <Editor
                height="100%"
                previewStyle={preview}
                initialEditType="markdown"
                initialValue={content}
                useCommandShortcut={true}
                hooks={editorHooks}
                events={editorEvents}
                ref={editorRef}
            />
        </div>
    );
};

MarkdownEditor.prototype = {
    className: PropTypes.string,
    preview: PropTypes.string, // 'tab' | 'vertical';
    content: PropTypes.string,
    uploadImageFunc: (file, callbackFunc) => PropTypes.any,
    onChange: (e, content) => PropTypes.any,
    onBlur: (e, content) => PropTypes.any
}

export default MarkdownEditor;