import React, { useContext, useEffect, useState } from 'react';
import ToolBar from '../../../Components/ToolBar';
import * as constants from './../constants';
import { TemplateContext } from '../../../';
import { apiService } from '../../../../Core';

const AddTemplate = () => {
  const { dispatch: pdispatch } = useContext(TemplateContext);
  const [state, setState] = useState({
    title: '',
    group: '',
    status: '',
    template: '',
    status: '',
    subject: '',
    frequency: '',
    starts_at: '',
    ends_at: '',
  });

  useEffect(() => {
    M.AutoInit();
    M.updateTextFields();
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
    let response = apiService.store(constants.API_TEMPLATES_STORE, state);
    response.then(response => {
      console.log('success', response);
      M.toast({ 'html': 'Successfully Added' });
    });
    response.catch(err => {
      console.log('error', err);
      M.toast({ 'html': 'Something went wrong !' });
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
      <ToolBar breadcrumbs={constants.BREADCRUMB_TEMPLATES_CREATE} toolbar={constants.TOOLBAR} />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col s12">
            <div className="container-fluid">
              <div className="row">
                <div className="col s12">
                  <ul className="tabs">
                    <li className="tab">
                      <a className="active" href="#pages">
                        Add Template
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col s12">
                  <div className="panel card tab--content">
                    <div id="users" className="col s12">
                      <div className="row">
                        <div className="input-field col s6">
                          <label>Title</label>
                          <input
                            type="text"
                            name="title"
                            value={state.title}
                            onChange={e => setFieldValue('title', e.target.value)}
                            required
                          />
                        </div>
                        <div className="input-field col s6">
                          <select
                            name="group"
                            onChange={e => setFieldValue('group', e.target.value)}
                            required
                          >
                            <option value="" disabled selected>
                              Choose your option
                            </option>
                            <option value="1">Group 1</option>
                            <option value="2">Group 2</option>
                          </select>
                          <label>Group</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12">
                          <select
                            name="template"
                            onChange={e => setFieldValue('template', e.target.value)}
                            required
                          >
                            <option value="" disabled selected>
                              Choose your option
                              </option>
                            <option value="1">Template 1</option>
                            <option value="2">Template 2</option>
                          </select>
                          <label>Group</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s6">
                          <label>Frequency</label>
                          <input
                            type="number"
                            name="frequency"
                            value={state.frequency}
                            onChange={e => setFieldValue('frequency', e.target.value)}
                            required
                          />
                        </div>
                        <div className="input-field col s6">
                          <label>Subject</label>
                          <input
                            type="text"
                            name="subject"
                            value={state.subject}
                            onChange={e => setFieldValue('subject', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field date-field col s6">
                          <p>Start At</p>
                          <input
                            type="date"
                            name="starts_at"
                            value={state.starts_at}
                            onChange={e => setFieldValue('starts_at', e.target.value)}
                            required
                          />
                        </div>

                        <div className="input-field date-field col s6">
                          <p>Ends At</p>
                          <input
                            type="date"
                            name="ends_at"
                            value={state.ends_at}
                            onChange={e => setFieldValue('ends_at', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s6">
                          <select
                            name="status"
                            onChange={e => setFieldValue('status', e.target.value)}
                            required
                          >
                            <option value="" disabled selected>
                              Choose your option
                            </option>
                            <option value="1">Active</option>
                            <option value="2">InActive</option>
                          </select>
                          <label>Status</label>
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

export default AddTemplate;
