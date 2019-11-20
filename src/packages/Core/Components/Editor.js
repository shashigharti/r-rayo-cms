import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

const Editor = props => {
  const [state, setState] = useState({
    modules: {
      toolbar: [
        [{ font: [] }],
        [{ size: ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
        [{ color: [] }],
        [{ background: [] }],
        ['clean'],
      ],
    },
    formats: [
      'font',
      'size',
      'bold',
      'italic',
      'underline',
      'list',
      'bullet',
      'align',
      'color',
      'background',
    ],
  });
  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    setState({
      ...state,
      value: props.value,
      onChange: props.onChange,
    });
  }, [props]);

  useEffect(() => {
    M.updateTextFields();
  });

  return (
    <div>
      <ReactQuill
        theme="snow"
        modules={state.modules}
        formats={state.formats}
        onChange={state.onChange}
        value={state.value}
        className="material-editor"
      />
    </div>
  );
};

export default Editor;
