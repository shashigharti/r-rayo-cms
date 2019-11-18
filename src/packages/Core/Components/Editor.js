import React, { useContext, useEffect, useState } from 'react';
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
        [{ color: [] }, { background: [] }],
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
    M.updateTextFields();
  });

  return (
    <div>
      <ReactQuill
        theme={'snow'}
        modules={state.modules}
        formats={state.formats}
        onChange={props.onChange}
        value={props.value || ''}
      />
    </div>
  );
};

export default Editor;
