import React, { useEffect, useState } from 'react';
import * as constants from '../constants';
import { apiService, alertService } from '../../..';
import { SettingResource } from '../../../Components/CRUD';

const Search = props => {
  const [state, setState] = useState({
    slug: 'search',
    package_name: 'real-estate',
    display_name: 'Advance Search',
    values: {
      price_min: '',
      price_max: '',
      price_increase: '',
      beds_min: '',
      beds_max: '',
      beds_increase: '',
      baths_min: '',
      baths_max: '',
      baths_increase: '',
      acres_min: '',
      acres_max: '',
      acres_increase: '',
      square_max: '',
      square_max: '',
      square_increase: '',
      year_min: '',
      year_max: '',
      year_increase: '',
      lot_min: '',
      lot_max: '',
      lot_increase: '',
    },
  });
  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    setState({
      slug: 'search',
      package_name: 'real-estate',
      display_name: 'Advance Search',
      values: {
        price_min: props.payload.values.price_min || '',
        price_max: props.payload.values.price_max || '',
        price_increase: props.payload.values.price_increase || '',
        beds_min: props.payload.values.beds_min || '',
        beds_max: props.payload.values.beds_max || '',
        beds_increase: props.payload.values.beds_increase || '',
        baths_min: props.payload.values.baths_min || '',
        baths_max: props.payload.values.baths_max || '',
        baths_increase: props.payload.values.baths_increase || '',
        acres_min: props.payload.values.acres_min || '',
        acres_max: props.payload.values.acres_max || '',
        acres_increase: props.payload.values.acres_increase || '',
        sqaure_min: props.payload.values.sqaure_min || '',
        square_max: props.payload.values.square_max || '',
        square_increase: props.payload.values.square_increase || '',
        year_min: props.payload.values.year_min || '',
        year_max: props.payload.values.year_max || '',
        year_increase: props.payload.values.year_increase || '',
        lot_min: props.payload.values.lot_min || '',
        lot_max: props.payload.values.lot_max || '',
        lot_increase: props.payload.values.lot_increase || '',
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
    const response = apiService.update(constants.API_SETTING_UPDATE + 'search', state);
    const status = alertService.update(response);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <div className="row">
        <h5>Price</h5>
        <div className="input-field col s4">
          <label>Min Price</label>
          <input
            type="number"
            name="price_min"
            value={state.values.price_min}
            onChange={e => setFieldValue('price_min', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Max Price</label>
          <input
            type="number"
            name="price_max"
            value={state.values.price_max}
            onChange={e => setFieldValue('price_max', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Increase Ratio</label>
          <input
            type="number"
            name="price_increase"
            value={state.values.price_increase}
            onChange={e => setFieldValue('price_increase', e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <h5>Beds</h5>
        <div className="input-field col s4">
          <label>Min Beds</label>
          <input
            type="number"
            name="beds_min"
            value={state.values.beds_min}
            onChange={e => setFieldValue('beds_min', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Max Beds</label>
          <input
            type="number"
            name="beds_max"
            value={state.values.beds_max}
            onChange={e => setFieldValue('beds_max', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Increase Ratio</label>
          <input
            type="number"
            name="beds_increase"
            value={state.values.beds_increase}
            onChange={e => setFieldValue('beds_increase', e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <h5>Bathrooms</h5>
        <div className="input-field col s4">
          <label>Min Bathrooms</label>
          <input
            type="number"
            name="baths_min"
            value={state.values.baths_min}
            onChange={e => setFieldValue('baths_min', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Max Bathrooms</label>
          <input
            type="number"
            name="baths_max"
            value={state.values.baths_max}
            onChange={e => setFieldValue('baths_max', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Increase Ratio</label>
          <input
            type="number"
            name="baths_increase"
            value={state.values.baths_increase}
            onChange={e => setFieldValue('baths_increase', e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <h5>Acres</h5>
        <div className="input-field col s4">
          <label>Min Acres</label>
          <input
            type="number"
            name="acres_min"
            value={state.values.acres_min}
            onChange={e => setFieldValue('acres_min', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Max Acres</label>
          <input
            type="number"
            name="acres_max"
            value={state.values.acres_max}
            onChange={e => setFieldValue('acres_max', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Increase Ratio</label>
          <input
            type="number"
            name="acres_increase"
            value={state.values.acres_increase}
            onChange={e => setFieldValue('acres_increase', e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <h5>Square</h5>
        <div className="input-field col s4">
          <label>Min Square</label>
          <input
            type="number"
            name="square_min"
            value={state.values.square_min}
            onChange={e => setFieldValue('square_min', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Max Square</label>
          <input
            type="number"
            name="square_max"
            value={state.values.square_max}
            onChange={e => setFieldValue('square_max', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Increase Ratio</label>
          <input
            type="number"
            name="square_increase"
            value={state.values.square_increase}
            onChange={e => setFieldValue('square_increase', e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <h5>Built Year</h5>
        <div className="input-field col s4">
          <label>Min Year</label>
          <input
            type="number"
            name="year_min"
            value={state.values.year_min}
            onChange={e => setFieldValue('year_min', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Max Year</label>
          <input
            type="number"
            name="year_max"
            value={state.values.year_max}
            onChange={e => setFieldValue('year_max', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Increase Ratio</label>
          <input
            type="number"
            name="year_increase"
            value={state.values.year_increase}
            onChange={e => setFieldValue('year_increase', e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <h5>Lot</h5>
        <div className="input-field col s4">
          <label>Min Lot</label>
          <input
            type="number"
            name="lot_min"
            value={state.values.lot_min}
            onChange={e => setFieldValue('lot_min', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Max Lot</label>
          <input
            type="number"
            name="lot_max"
            value={state.values.lot_max}
            onChange={e => setFieldValue('lot_max', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Increase Ratio</label>
          <input
            type="number"
            name="lot_increase"
            value={state.values.lot_increase}
            onChange={e => setFieldValue('lot_increase', e.target.value)}
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

export default SettingResource(Search, constants.API_SETTING + 'search');
