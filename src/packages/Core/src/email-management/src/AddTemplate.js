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
    template: '',
    status: '',
    subject: '',
    frequency: '',
    starts_at: '',
    ends_at: '',
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
    let response = apiService.store(constants.API_TEMPLATES_STORE, state);
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
                          <label>Group</label>
                          <input
                            type="text"
                            name="group"
                            value={state.group}
                            onChange={e => setFieldValue('group', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <textarea
                            className="materialize-textarea"
                            name="template"
                            value={state.template}
                            onChange={e => setFieldValue('template', e.target.value)}
                            required
                          />
                          <label htmlFor="template">Template</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s6">
                          <label>Frequency</label>
                          <input
                            type="text"
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
                        <div className="input-field col s6">
                          <label>Start At</label>
                          <input
                            type="text"
                            name="starts_at"
                            value={state.starts_at}
                            onChange={e => setFieldValue('starts_at', e.target.value)}
                            required
                          />
                        </div>

                        <div className="input-field col s6">
                          <label>Ends At</label>
                          <input
                            type="text"
                            name="ends_at"
                            value={state.ends_at}
                            onChange={e => setFieldValue('ends_at', e.target.value)}
                            required
                          />
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
