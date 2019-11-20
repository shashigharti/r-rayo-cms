import React, { useEffect, useState } from 'react';
import * as constants from '../constants';
import Editor from '../../../Components/Editor';
import { apiService, alertService } from '../../..';
import { SettingResource } from '../../../Components/CRUD';

const FrontPage = props => {
  const [state, setState] = useState({
    name: '',
    phone: '',
    action: '',
    footer_upper: '',
    realtor_info: '',
    footer_left: '',
    footer_right: '',
    terms_condition: '',
    footer_eula: '',
  });
  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    setState({
      name: props.payload.name,
      phone: props.payload.phone,
      action: props.payload.action,
      footer_upper: props.payload.footer_upper,
      realtor_info: props.payload.realtor_info,
      footer_left: props.payload.footer_left,
      footer_right: props.payload.footer_right,
      terms_condition: props.payload.terms_condition,
      footer_eula: props.payload.footer_eula,
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
    const response = apiService.store(constants.API_SETTING_UPDATE + 'site', state);
    const status = alertService.store(response);
  };

  return (
    <form onSubmit={handleSubmit} className='mb-10'>
      <div className='row'>
        <div className='input-field col s6'>
          <label>Site Name</label>
          <input
            type='text'
            name='name'
            value={state.name}
            onChange={e => setFieldValue('name', e.target.value)}
          />
        </div>
        <div className='input-field col s6'>
          <label>Phone Number</label>
          <input
            type='text'
            name='phone'
            value={state.phone}
            onChange={e => setFieldValue('phone', e.target.value)}
          />
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s12'>
          <label>Homepage call to action</label>
          <input
            type='text'
            name='action'
            value={state.action}
            onChange={e => setFieldValue('action', e.target.value)}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col s12'>
          <Editor onChange={setFieldValue} value={state.realtor_info || ''} />
        </div>
      </div>

      <div className='row'>
        <div className='col s12'>
          <Editor onChange={setFieldValue} value={state.footer_upper || ''} />
        </div>
      </div>

      <div className='row'>
        <div className='col s12'>
          <Editor onChange={setFieldValue} value={state.footer_left || ''} />
        </div>
      </div>

      <div className='row'>
        <div className='col s12'>
          <Editor onChange={setFieldValue} value={state.footer_right || ''} />
        </div>
      </div>

      <div className='row'>
        <div className='col s12'>
          <Editor onChange={setFieldValue} value={state.terms_condition || ''} />
        </div>
      </div>

      <div className='row'>
        <div className='col s12'>
          <Editor onChange={setFieldValue} value={state.footer_eula || ''} />
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

export default SettingResource(FrontPage, constants.API_SETTING + 'site');
