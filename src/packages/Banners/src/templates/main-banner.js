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
          <label>Header</label>
          <input
            name="header"
            value={state.header}
            className="materialize-textarea"
            onChange={e => setFieldValue('header', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
