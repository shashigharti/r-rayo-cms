import React, { useEffect, useState } from 'react';
import { SelectDropDown } from './../../../Core';
import * as constants from '../../constants';

export default props => {
  const { setFieldValue, state } = props;
  useEffect(() => {
    setFieldValue('location_type', 'Cities');
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
            name="location_type"
            onChange={e => setFieldValue('location_type', e.target.value)}
            options={[
              { title: 'Cities', value: 'Cities' },
              { title: 'Counties', value: 'Counties' },
              { title: 'Zips', value: 'Zips' },
            ]}
            maps={{ value: 'value', title: 'title' }}
          />
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <label>Select {state.location_type}</label>
          <SelectDropDown
            key={state.location_type}
            defaultValue={state.location}
            name="location"
            onChange={e => setFieldValue('location', e.target.value)}
            options={[]}
            endpointURL={constants.DROPDOWN_APIS[state.location_type]}
            maps={{ value: 'id', title: 'name' }}
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <label>Sub Areas</label>
          <select
            defaultValue={state.sub_areas}
            name="sub_areas"
            multiple
            onChange={e =>
              setFieldValue('sub_areas', Array.from(e.target.selectedOptions, item => item.value))
            }
          >
            <option value="" disabled>
              Choose your option
            </option>
            <option value="condos">Condos</option>
            <option value="neighbourhood">Neighbourhood</option>
            <option value="communities">Communities</option>
            <option value="acreages">Acreages</option>
            <option value="waterfront">Waterfront</option>
          </select>
        </div>
      </div>
    </div>
  );
};
