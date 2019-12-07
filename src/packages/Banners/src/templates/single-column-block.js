import React, { useEffect, useState } from 'react';
import { SelectDropDown } from './../../../Core';

export default props => {
  const { setFieldValue, state } = props;
  useEffect(() => {
    setFieldValue('location_type', 'cities')
  }, []);

  useEffect(() => {
    M.AutoInit();
    M.updateTextFields();
  });

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
          <label>Location Type</label>
          <SelectDropDown
            defaultValue={state.location_type}
            name="location"
            onChange={e => setFieldValue('location', e.target.value)}
            options={[
              { title: 'Cities', value: 'Cities' },
              { title: 'Counties', value: 'Counties' },
              { title: 'Areas', value: 'areas' },
            ]}
          />
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <label>Select {state.location_type}</label>
          <SelectDropDown
            defaultValue={state.location}
            name="location"
            onChange={e => setFieldValue('location', e.target.value)}
            options={[{ title: 'Atlantis', value: 'Atlantis' }, { title: 'Boca Raton', value: 'CounBoca Ratonties' }]}
          />
        </div>
      </div>
    </div>
  );
};
