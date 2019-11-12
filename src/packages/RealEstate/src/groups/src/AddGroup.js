import React, { useContext, useEffect, useState } from 'react';
import ToolBar from '../../../../Core/Components/ToolBar';
import * as constants from '../constants';
import { GroupContext } from '../../../';
import { apiService } from '../../../../Core';

const AddGroup = () => {
  const { dispatch: pdispatch } = useContext(GroupContext);
  const [state, setState] = useState({
    name: '',
    color: '',
  });

  useEffect(() => {
    M.AutoInit();
    pdispatch({
      type: 'INIT',
      default: {
        all: [],
        current_page: state,
      },
    });
  }, []);

  const handleSubmit = e => {
    event.preventDefault();
    let response = apiService.store(constants.API_GROUP_STORE, state);
    response.then(response => {
      console.log('success', response);
    });
    response.catch(err => {
      console.log('error', err);
    });
  };

  const setFieldValue = (field, value) => {
    setState({
      ...state,
      [field]: value,
    });
    pdispatch({ type: 'SET_FIELD', current_page: { field, value } });
  };

  return (
    <div id="main">
      <ToolBar breadcrumbs={constants.BREADCRUMB_GROUP_CREATE} toolbar={constants.TOOLBAR} />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col s12">
            <div className="container-fluid">
              <div className="row">
                <div className="col s12">
                  <ul className="tabs">
                    <li className="tab">
                      <a className="active" href="#pages">
                        Add Group
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col s12">
                  <div className="panel card tab--content">
                    <div id="users" className="col s12">
                      <div className="row">
                        <div className="input-field col s6">
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            value={state.name}
                            onChange={e => setFieldValue('name', e.target.value)}
                            required
                          />
                        </div>
                        <div className="input-field col s6">
                          <input
                            type="text"
                            name="color"
                            value={state.color}
                            onChange={e => setFieldValue('color', e.target.value)}
                            required
                          />
                          <label>Color</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col s12">
                          <div className="input-field">
                            <button type="submit" className="btn gradient-45deg-purple-deep-orange">
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

export default AddGroup;
