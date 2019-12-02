import React from 'react';
import Resource from '../../../Core/Components/Resource';
export default props => {
  const { setFieldValue, state } = props;

  return (
    <div className="banner-template">
      <div className="row">
        <div className="input-field col s12">
          <label>Header</label>
          <input
            type="text"
            name="header"
            value={state.header}
            onChange={e => setFieldValue('header', e.target.value)}
          />
        </div>
      </div>
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
          <label>Locations</label>
          <select
            defaultValue={state.location}
            onChange={e => {
              e.preventDefault();
              return setFieldValue('location', e.target.value);
            }}
          >
            <option value="" disabled>
              Choose your option
            </option>
            <option value="Atlantis">Atlantis</option>
            <option value="Boca Raton">Boca Raton</option>
            <option value="Boynton Beach">Boynton Beach</option>
            <option value="Clewiston">Clewiston</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <label>Button Text</label>
          <input
            type="text"
            name="button_text"
            value={state.button_text}
            onChange={e => setFieldValue('button_text', e.target.value)}
          />
        </div>
        <div className="input-field col s6">
          <label>Button Url</label>
          <input
            type="text"
            name="button_url"
            value={state.button_url}
            onChange={e => setFieldValue('button_url', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
