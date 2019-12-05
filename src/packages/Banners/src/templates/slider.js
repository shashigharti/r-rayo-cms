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
          <label>Areas</label>
          <select
            defaultValue={state.area_types}
            name="area_types"
            onChange={e => setFieldValue('area_types', e.target.value)}
          >
            <option value="" disabled>
              Choose your option
            </option>
            <option value="city">Cities</option>
            <option value="county">Counties</option>
            <option value="subdivision">Subdivision</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <label>Cities</label>
          <select
            defaultValue={state.location}
            name="location"
            onChange={e => setFieldValue('location', e.target.value)}
          >
            <option value="" disabled>
              Choose your option
            </option>
            <option value="Atlantis">Atlantis</option>
            <option value="Aventura">Aventura</option>
            <option value="Belle Glade">Belle Glade</option>
            <option value="Casa de Campo">Casa de Campo</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <label>Properties count</label>
          <input
            name="property_count"
            value={state.property_count}
            className="materialize-textarea"
            onChange={e => setFieldValue('property_count', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
