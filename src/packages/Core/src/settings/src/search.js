import React, { useEffect, useState } from 'react';
import * as constants from '../constants';
import { apiService, alertService } from '../../..';
import { SettingResource } from '../../../Components/CRUD';

const SearchBlock = props => {
  const [state, setState] = useState({
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
    sqaure_min: '',
    square_max: '',
    square_increase: '',
    year_min: '',
    year_max: '',
    year_increase: '',
    lot_min: '',
    lot_max: '',
    lot_increase: '',
  });
  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    setState({
      price_min: props.payload.price_min || '',
      price_max: props.payload.price_max || '',
      price_increase: props.payload.price_increase || '',
      beds_min: props.payload.beds_min || '',
      beds_max: props.payload.beds_max || '',
      beds_increase: props.payload.beds_increase || '',
      baths_min: props.payload.baths_min || '',
      baths_max: props.payload.baths_max || '',
      baths_increase: props.payload.baths_increase || '',
      acres_min: props.payload.acres_min || '',
      acres_max: props.payload.acres_max || '',
      acres_increase: props.payload.acres_increase || '',
      sqaure_min: props.payload.sqaure_min || '',
      square_max: props.payload.square_max || '',
      square_increase: props.payload.square_increase || '',
      year_min: props.payload.year_min || '',
      year_max: props.payload.year_max || '',
      year_increase: props.payload.year_increase || '',
      lot_min: props.payload.lot_min || '',
      lot_max: props.payload.lot_max || '',
      lot_increase: props.payload.lot_increase || '',
    });
  }, [props]);

  useEffect(() => {
    M.updateTextFields();
  });

  const setFieldValue = (field, value) => {
    setState({
      ...state,
      [field]: value,
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
            value={state.price_min}
            onChange={e => setFieldValue('price_min', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Max Price</label>
          <input
            type="number"
            name="price_max"
            value={state.price_max}
            onChange={e => setFieldValue('price_max', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Increase Ratio</label>
          <input
            type="number"
            name="price_increase"
            value={state.price_increase}
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
            value={state.beds_min}
            onChange={e => setFieldValue('beds_min', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Max Beds</label>
          <input
            type="number"
            name="beds_max"
            value={state.beds_max}
            onChange={e => setFieldValue('beds_max', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Increase Ratio</label>
          <input
            type="number"
            name="beds_increase"
            value={state.beds_increase}
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
            value={state.baths_min}
            onChange={e => setFieldValue('baths_min', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Max Bathrooms</label>
          <input
            type="number"
            name="baths_max"
            value={state.baths_max}
            onChange={e => setFieldValue('baths_max', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Increase Ratio</label>
          <input
            type="number"
            name="baths_increase"
            value={state.baths_increase}
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
            value={state.acres_min}
            onChange={e => setFieldValue('acres_min', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Max Acres</label>
          <input
            type="number"
            name="acres_max"
            value={state.acres_max}
            onChange={e => setFieldValue('acres_max', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Increase Ratio</label>
          <input
            type="number"
            name="acres_increase"
            value={state.acres_increase}
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
            value={state.square_min}
            onChange={e => setFieldValue('square_min', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Max Square</label>
          <input
            type="number"
            name="square_max"
            value={state.square_max}
            onChange={e => setFieldValue('square_max', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Increase Ratio</label>
          <input
            type="number"
            name="square_increase"
            value={state.square_increase}
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
            value={state.year_min}
            onChange={e => setFieldValue('year_min', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Max Year</label>
          <input
            type="number"
            name="year_max"
            value={state.year_max}
            onChange={e => setFieldValue('year_max', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Increase Ratio</label>
          <input
            type="number"
            name="year_increase"
            value={state.year_increase}
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
            value={state.lot_min}
            onChange={e => setFieldValue('lot_min', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Max Lot</label>
          <input
            type="number"
            name="lot_max"
            value={state.lot_max}
            onChange={e => setFieldValue('lot_max', e.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label>Increase Ratio</label>
          <input
            type="number"
            name="lot_increase"
            value={state.lot_increase}
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

export default SettingResource(SearchBlock, constants.API_SETTING + 'search');
