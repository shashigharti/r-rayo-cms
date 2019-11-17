import React, { useContext, useEffect, useState } from 'react';
import ToolBar from '../../../../Core/Components/ToolBar';
import * as constants from '../constants';
import { MenuContext } from '../../../';
import { apiService, alertService } from '../../../../Core';

const AddMenu = () => {
  const { dispatch: pdispatch } = useContext(MenuContext);
  const [state, setState] = useState({
    name: '',
    items: '',
    menu_limit: '',
    type: '',
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
    const response = apiService.store(constants.API_MENU_STORE, state);
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
      <ToolBar breadcrumbs={constants.BREADCRUMB_MENU_CREATE} toolbar={constants.TOOLBAR} />
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col s12'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col s12'>
                  <ul className='tabs'>
                    <li className='tab'>
                      <a className='active' href='#pages'>
                        Add Menus
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col s12'>
                  <div className='panel card tab--content'>
                    <div id='menus' className='col s12'>
                      <div className='row'>
                        <div className='input-field col s6'>
                          <label>Name</label>
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
                            name='items'
                            value={state.items}
                            onChange={e => setFieldValue('items', e.target.value)}
                          />
                          <label>Items</label>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='input-field col s6'>
                          <label>Menu Limit</label>
                          <input
                            type='number'
                            name='menu_limit'
                            value={state.menu_limit}
                            onChange={e => setFieldValue('menu_limit', e.target.value)}
                          />
                        </div>
                        <div className='input-field col s6'>
                          <input
                            type='text'
                            name='type'
                            value={state.type}
                            onChange={e => setFieldValue('type', e.target.value)}
                          />
                          <label>Type</label>
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

export default AddMenu;
