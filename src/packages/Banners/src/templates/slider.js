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
            onChange={e =>
              setFieldValue('area_types', Array.from(e.target.selectedOptions, item => item.value))
            }
            multiple
          >
            <option value="" disabled>
              Choose your option
            </option>
            <option value="cities">Cities</option>
            <option value="counties">Counties</option>
            <option value="school">High School</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <label>Cities</label>
          <select
            defaultValue={state.sub_areas}
            name="sub_areas"
            onChange={e => setFieldValue('sub_areas', e.target.value)}
          >
            <option value="" disabled>
              Choose your option
            </option>
            <option value="1">City 1</option>
            <option value="2">City 2</option>
            <option value="3">City 3</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <label>Items</label>
          <select
            defaultValue={state.property_ids}
            name="property_ids"
            onChange={e => setFieldValue('property_ids', e.target.value)}
          >
            <option value="" disabled>
              Choose your option
            </option>
            <option value="1">Property 1</option>
            <option value="2">Property 2</option>
            <option value="3">Property 3</option>
          </select>
        </div>
      </div>
    </div>
  );
};
