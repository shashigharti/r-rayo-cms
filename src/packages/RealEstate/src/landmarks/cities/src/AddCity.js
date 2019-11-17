import React, { useContext, useEffect, useState } from 'react';
import ToolBar from '../../../../../Core/Components/ToolBar';
import * as constants from '../constants';
import { CityContext } from '../../../../';
import { apiService, alertService } from '../../../../../Core';

const AddCity = () => {
  const { dispatch: pdispatch } = useContext(CityContext);
  const [state, setState] = useState({
    name: '',
    slug: '',
    frontpage: '',
    dropdown: '',
    footer: '',
    navigation: '',
    marketreport: '',
    frontpage_order: '',
    menu_order: '',
    footer_order: '',
  });

  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    pdispatch({
      type: 'INIT',
      default: {
        all: [],
        current_page: state,
      },
    });
  }, []);

  useEffect(() => {
    M.updateTextFields();
  });

  const handleSubmit = e => {
    event.preventDefault();
    const response = apiService.store(constants.API_CITY_STORE, state);
    const status = alertService.store(response);
  };

  const setFieldValue = (field, value) => {
    setState({
      ...state,
      [field]: value,
    });
    pdispatch({ type: 'SET_FIELD', current_page: { field, value } });
  };

  return (
    <div id='main'>
      <ToolBar breadcrumbs={constants.BREADCRUMB_CITY_CREATE} toolbar={constants.TOOLBAR} />
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col s12'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col s12'>
                  <ul className='tabs'>
                    <li className='tab'>
                      <a className='active' href='#pages'>
                        Add City
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col s12'>
                  <div className='panel card tab--content'>
                    <div id='pages' className='col s12'>
                      <div className='row'>
                        <div className='input-field col s6'>
                          <label>City Name</label>
                          <input
                            type='text'
                            name='name'
                            value={state.name}
                            onChange={e => setFieldValue('name', e.target.value)}
                          />
                        </div>
                        <div className='input-field col s6'>
                          <input
                            type='text'
                            name='slug'
                            value={state.slug}
                            onChange={e => setFieldValue('slug', e.target.value)}
                          />
                          <label>Slug</label>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='input-field col s6'>
                          <select
                            name='frontpage'
                            defaultValue=''
                            onChange={e => setFieldValue('frontpage', e.target.value)}
                          >
                            <option value='' disabled>
                              Choose your option
                            </option>
                            <option value='0'>Show</option>
                            <option value='1'>Hide</option>
                          </select>
                          <label>Frontpage</label>
                        </div>
                        <div className='input-field col s6'>
                          <input
                            type='text'
                            name='frontpage_order'
                            value={state.frontpage_order}
                            onChange={e => setFieldValue('frontpage_order', e.target.value)}
                          />
                          <label>Frontpage order</label>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='input-field col s6'>
                          <select
                            name='dropdown'
                            defaultValue=''
                            onChange={e => setFieldValue('dropdown', e.target.value)}
                          >
                            <option value='' disabled>
                              Choose your option
                            </option>
                            <option value='0'>Show</option>
                            <option value='1'>Hide</option>
                          </select>
                          <label>Dropdown</label>
                        </div>
                        <div className='input-field col s6'>
                          <input
                            type='text'
                            name='menu_order'
                            value={state.menu_order}
                            onChange={e => setFieldValue('menu_order', e.target.value)}
                          />
                          <label>Dropdown order</label>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='input-field col s6'>
                          <select
                            name='footer'
                            defaultValue=''
                            onChange={e => setFieldValue('footer', e.target.value)}
                          >
                            <option value='' disabled>
                              Choose your option
                            </option>
                            <option value='0'>Show</option>
                            <option value='1'>Hide</option>
                          </select>
                          <label>Footer</label>
                        </div>
                        <div className='input-field col s6'>
                          <input
                            type='text'
                            name='footer_order'
                            value={state.footer_order}
                            onChange={e => setFieldValue('footer_order', e.target.value)}
                          />
                          <label>Footer order</label>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='input-field col s6'>
                          <select
                            name='navigation'
                            defaultValue=''
                            onChange={e => setFieldValue('navigation', e.target.value)}
                          >
                            <option value='' disabled>
                              Choose your option
                            </option>
                            <option value='0'>Show</option>
                            <option value='1'>Hide</option>
                          </select>
                          <label>Navigation</label>
                        </div>
                        <div className='input-field col s6'>
                          <select
                            name='marketreport'
                            defaultValue=''
                            onChange={e => setFieldValue('marketreport', e.target.value)}
                          >
                            <option value='' disabled>
                              Choose your option
                            </option>
                            <option value='0'>Show</option>
                            <option value='1'>Hide</option>
                          </select>
                          <label>Market Report</label>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col s12'>
                          <div className='input-field'>
                            <button type='submit' className='btn gradient-45deg-purple-deep-orange'>
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCity;
