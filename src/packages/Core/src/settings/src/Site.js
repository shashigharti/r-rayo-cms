import React, { useEffect, useState } from 'react';
import * as constants from './../constants';
import { EditResource } from './../../../../Core/Components/CRUD';

const Site = () => {
  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    M.updateTextFields();
  });

  return (
    <>
      <form onSubmit={this.handleSubmit} className='mb-10'>
        <div className='row'>
          <div className='input-field col s6'>
            <input type='text' value={site.name || ''} name='name' onChange={this.handleChange} />
            <label>Site Name</label>
          </div>
          <div className='input-field col s6'>
            <input type='text' value={site.phone || ''} name='phone' onChange={this.handleChange} />
            <label>Phone Number</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              type='text'
              value={site.action || ''}
              name='action'
              onChange={this.handleChange}
            />
            <label>Homepage call to action</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <Editor onChange={this.handleChange} value={site.realtor_info || ''} />
            <textarea
              name='realtor_info'
              value={site.realtor_info || ''}
              className='materialize-textarea'
              onChange={this.handleChange}
            ></textarea>
            <label>Realtor info</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <textarea
              name='footer_left'
              value={site.footer_left || ''}
              className='materialize-textarea'
              onChange={this.handleChange}
            ></textarea>
            <label>Footer's Text (Left)</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <textarea
              name='footer_right'
              value={site.footer_right || ''}
              className='materialize-textarea'
              onChange={this.handleChange}
            ></textarea>
            <label>Footer's Text (Right)</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <textarea
              name='terms_condition'
              value={site.terms_condition || ''}
              className='materialize-textarea'
              onChange={this.handleChange}
            ></textarea>
            <label>Terms and condition</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <textarea
              name='footer_eula'
              value={site.footer_eula || ''}
              className='materialize-textarea'
              onChange={this.handleChange}
            ></textarea>
            <label>Footer EULA</label>
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            <Button type='submit' className='purple btn'>
              Save
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditResource(Site, constants.API_SETTING + 'site');
