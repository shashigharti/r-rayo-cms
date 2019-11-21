import React, { useEffect } from 'react';
export default props => {
  useEffect(() => {
    M.AutoInit();
  });
  useEffect(() => {
    M.updateTextFields();
  });
  const { setFieldValue, state } = props;

  return (
    <div className="banner-template">
      <div className="row">
        <div className="input-field col s12">
          <label>Content</label>
          <textarea
            name="content"
            value={state.content}
            className="materialize-textarea"
            onChange={e => setFieldValue('content', e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <label>Images</label>
          <select
            defaultValue={state.images}
            name="images"
            multiple
            onChange={e =>
              setFieldValue('images', Array.from(e.target.selectedOptions, item => item.value))
            }
          >
            <option value="" disabled>
              Choose your option
            </option>
            <option value="1">Image 1</option>
            <option value="2">Image 2</option>
            <option value="3">Image 3</option>
            <option value="4">Image 4</option>
            <option value="5">Image 5</option>
          </select>
        </div>
      </div>
    </div>
  );
};
