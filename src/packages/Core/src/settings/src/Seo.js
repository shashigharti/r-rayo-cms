import React, { useEffect, useState } from 'react';
import * as constants from '../constants';
import Editor from '../../../Components/Editor';
import { apiService, alertService } from '../../..';
import { SettingResource } from '../../../Components/CRUD';

const Seo = props => {
  const [state, setState] = useState({
    google: '',
    facebook: '',
  });
  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    setState({
      google: props.payload.google ? props.payload.google : '',
      facebook: props.payload.facebook ? props.payload.facebook : '',
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
    const response = apiService.update(constants.API_SETTING_UPDATE + 'seo', state);
    const status = alertService.update(response);
  };

  return (
    <form onSubmit={handleSubmit} className='mb-10'>
      <div className='row'>
        <div className='input-field col s12'>
          <label>Google Analytics</label>
          <input
            type='text'
            name='google'
            value={state.google}
            onChange={e => setFieldValue('google', e.target.value)}
          />
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s12'>
          <label>Facebook Analytics</label>
          <input
            type='text'
            name='facebook'
            value={state.facebook}
            onChange={e => setFieldValue('facebook', e.target.value)}
          />
        </div>
      </div>

      <div className='row'>
        <div className='col s12'>
          <button type='submit' className='btn gradient-45deg-purple-deep-orange'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SettingResource(Seo, constants.API_SETTING + 'seo');
