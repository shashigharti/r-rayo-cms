import React, { useEffect, useState } from 'react';
import * as constants from '../constants';
import Editor from '../../../Components/Editor';
import { apiService, alertService } from '../../..';
import { SettingResource } from '../../../Components/CRUD';

const Price = props => {
  const [state, setState] = useState({
    slug: 'price',
    package_name: 'real-estate',
    display_name: 'Price',
    values: {
      rp_from: 0,
      rp_to: 0,
      lp_from: 0,
      lp_to: 0,
      vn_luxury: 0,
      v_price: 0,
      v_number: 0,
    },
  });
  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    setState({
      slug: 'price',
      package_name: 'real-estate',
      display_name: 'Price',
      values: {
        rp_from: props.payload.values.rp_from || '',
        rp_to: props.payload.values.rp_to || '',
        lp_from: props.payload.values.lp_from || '',
        lp_to: props.payload.values.lp_to || '',
        vn_luxury: props.payload.values.vn_luxury || '',
        v_price: props.payload.values.v_price || '',
        v_number: props.payload.values.v_number || '',
      },
    });
  }, [props]);

  useEffect(() => {
    M.updateTextFields();
  });

  const setFieldValue = (field, value) => {
    setState({
      ...state,
      values: {
        ...state.values,
        [field]: value,
      },
    });
  };

  const handleSubmit = e => {
    event.preventDefault();
    const response = apiService.update(constants.API_SETTING_UPDATE + 'price', state);
    const status = alertService.update(response);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <div className="row">
        <div className="input-field col s6">
          <label>Regular Price From</label>
          <input
            type="text"
            name="rp_from"
            value={state.values.rp_from}
            onChange={e => setFieldValue('rp_from', e.target.value)}
          />
        </div>
        <div className="input-field col s6">
          <label>Regular Price To</label>
          <input
            type="text"
            name="rp_to"
            value={state.values.rp_to}
            onChange={e => setFieldValue('rp_to', e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <label>Luxury Price From</label>
          <input
            type="text"
            name="lp_from"
            value={state.values.lp_from}
            onChange={e => setFieldValue('lp_from', e.target.value)}
          />
        </div>
        <div className="input-field col s6">
          <label>Luxury Price To</label>
          <input
            type="text"
            name="lp_to"
            value={state.values.lp_to}
            onChange={e => setFieldValue('lp_to', e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <label>View Number Luxury</label>
          <input
            type="text"
            name="vn_luxury"
            value={state.values.vn_luxury}
            onChange={e => setFieldValue('vn_luxury', e.target.value)}
          />
        </div>
        <div className="input-field col s6">
          <label>View Price</label>
          <input
            type="text"
            name="v_price"
            value={state.values.v_price}
            onChange={e => setFieldValue('v_price', e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <label>View Number</label>
          <input
            type="text"
            name="v_number"
            value={state.values.v_number}
            onChange={e => setFieldValue('v_number', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col s12 mt-3">
          <button type="submit" className="btn gradient-45deg-purple-deep-orange">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SettingResource(Price, constants.API_SETTING + 'price');
