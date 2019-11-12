import React, { useContext, useEffect, useState } from 'react';
import ToolBar from '../../../../Core/Components/ToolBar';
import * as constants from '../constants';
import { AgentContext } from '../../../';
import { apiService } from '../../../../Core';

const AddAgent = () => {
  const { dispatch: pdispatch } = useContext(AgentContext);
  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact: '',
    address: '',
    role: '',
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
    let response = apiService.store(constants.API_AGENT_STORE, state);
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
      <ToolBar breadcrumbs={constants.BREADCRUMB_AGENT_CREATE} toolbar={constants.TOOLBAR} />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col s12">
            <div className="container-fluid">
              <div className="row">
                <div className="col s12">
                  <ul className="tabs">
                    <li className="tab">
                      <a className="active" href="#pages">
                        Add User
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col s12">
                  <div className="panel card tab--content">
                    <div id="users" className="col s12">
                      <div className="row">
                        <div className="input-field col s6">
                          <label>First Name</label>
                          <input
                            type="text"
                            name="first_name"
                            value={state.first_name}
                            onChange={e => setFieldValue('first_name', e.target.value)}
                            required
                          />
                        </div>
                        <div className="input-field col s6">
                          <input
                            type="text"
                            name="last_name"
                            value={state.last_name}
                            onChange={e => setFieldValue('last_name', e.target.value)}
                            required
                          />
                          <label>Last Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s6">
                          <label>Email</label>
                          <input
                            type="text"
                            name="email"
                            value={state.email}
                            onChange={e => setFieldValue('email', e.target.value)}
                            required
                          />
                        </div>
                        <div className="input-field col s6">
                          <input
                            type="text"
                            name="contact"
                            value={state.contact}
                            onChange={e => setFieldValue('contact', e.target.value)}
                            required
                          />
                          <label>Contact</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s6">
                          <label>Address</label>
                          <input
                            type="text"
                            name="address"
                            value={state.address}
                            onChange={e => setFieldValue('address', e.target.value)}
                            required
                          />
                        </div>
                        <div className="input-field col s6">
                          <select
                            name="role"
                            onChange={e => setFieldValue('role', e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Choose your option
                            </option>
                            <option value="1">Super Admin</option>
                            <option value="2">Admin</option>
                            <option value="3">Agent</option>
                          </select>
                          <label>Role</label>
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

export default AddAgent;
