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
          <label>Prices</label>
          <select
            defaultValue={state.prices}
            name="prices"
            multiple
            onChange={e =>
              setFieldValue('prices', Array.from(e.target.selectedOptions, item => item.value))
            }
            multiple
          >
            <option value="" disabled>
              Choose your option
            </option>
            <option value="10000-20000">10000-20000</option>
            <option value="20000-30000">20000-30000</option>
            <option value="30000-40000">30000-40000</option>
            <option value="40000-50000">40000-50000</option>
            <option value="50000-60000">50000-60000</option>
            <option value="60000-70000">60000-70000</option>
            <option value="70000-80000">70000-80000</option>
            <option value="80000-90000">80000-90000</option>
            <option value="90000-100000">90000-100000</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <label>Locations</label>
          <select
            defaultValue={state.locations}
            name="locations"
            multiple
            onChange={e =>
              setFieldValue('locations', Array.from(e.target.selectedOptions, item => item.value))
            }
          >
            <option value="" disabled>
              Choose your option
            </option>
            <option value="1">Cities</option>
            <option value="2">Zips</option>
            <option value="3">School</option>
            <option value="4">Subdivision</option>
            <option value="5">All</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <label>Items</label>
          <select
            defaultValue={state.property_ids}
            name="property_ids"
            multiple
            onChange={e =>
              setFieldValue(
                'property_ids',
                Array.from(e.target.selectedOptions, item => item.value),
              )
            }
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
