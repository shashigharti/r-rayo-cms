import React, { useContext, useEffect, useState } from 'react';
import ToolBar from '../../../../Core/Components/ToolBar';
import * as constants from '../constants';
import { LeadContext } from '../../../';
import { apiService, alertService } from '../../../../Core';

const AddLead = () => {
  const { dispatch: pdispatch } = useContext(LeadContext);
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone_number: '',
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
    const response = apiService.store(constants.API_LEAD_STORE, state);
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
    <div id="main">
      <ToolBar breadcrumbs={constants.BREADCRUMB_LEAD_CREATE} toolbar={constants.TOOLBAR} />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col s12">
            <div className="container-fluid">
              <div className="row">
                <div className="col s12">
                  <ul className="tabs">
                    <li className="tab">
                      <a className="active" href="#pages">
                        Add Lead
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
                            name="firstname"
                            value={state.firstname}
                            onChange={e => setFieldValue('firstname', e.target.value)}
                            required
                          />
                        </div>
                        <div className="input-field col s6">
                          <input
                            type="text"
                            name="lastname"
                            value={state.lastname}
                            onChange={e => setFieldValue('lastname', e.target.value)}
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
                          />
                        </div>
                        <div className="input-field col s6">
                          <input
                            type="text"
                            name="phone_number"
                            value={state.phone_number}
                            onChange={e => setFieldValue('phone_number', e.target.value)}
                            required
                          />
                          <label>Phone Number</label>
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

export default AddLead;
