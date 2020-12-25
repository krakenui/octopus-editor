import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import CKEditorContainer from './CKEditorContainer';

const CKEditor = ({ defaultValue, onChange }) => {
    const onChangeHandle = (e) => {
        if (onChange != null) {
            const content = e.editor.getData();
            onChange(content);
        }
    }

    return (
        <CKEditorContainer
            activeClass="ck-editor"
            content={defaultValue}
            events={{
                change: onChangeHandle,
            }
            }
        />
    );
};

CKEditor.prototype = {
    defaultValue: PropTypes.string,
    onChange: (content) => PropTypes.any
};

export default CKEditor;
