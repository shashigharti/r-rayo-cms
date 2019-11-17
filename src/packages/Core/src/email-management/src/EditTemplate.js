import React, { useContext, useEffect, useState } from 'react';
import ToolBar from '../../../Components/ToolBar';
import * as constants from './../constants';
import { TemplateContext } from '../../../';
import { apiService, alertService } from '../../../../Core';
import { EditResource } from '../../../../Core/Components/CRUD';
import { API_AGENT_EDIT } from '../../../../RealEstate/src/agents/constants';

const EditTemplate = props => {
  const { dispatch: pdispatch } = useContext(TemplateContext);
  const [state, setState] = useState({
    id: '',
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
  });

  useEffect(() => {
    setState({
      id: props.payload.id,
      title: props.payload.title,
      group: props.payload.group,
      status: props.payload.status,
      template: props.payload.template,
      status: props.payload.status,
      subject: props.payload.subject,
      frequency: props.payload.frequency,
      starts_at: props.payload.starts_at != null ? props.payload.starts_at : '',
      ends_at: props.payload.ends_at != null ? props.payload.ends_at : '',
    });
  }, [props]);

  useEffect(() => {
    M.updateTextFields();
  });

  const handleSubmit = e => {
    event.preventDefault();
    const { id } = state;
    const response = apiService.update(constants.API_TEMPLATES_UPDATE + id, state);
    const status = alertService.update(response);
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
      <ToolBar breadcrumbs={constants.BREADCRUMB_TEMPLATES_EDIT} toolbar={constants.TOOLBAR} />
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col s12'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col s12'>
                  <ul className='tabs'>
                    <li className='tab'>
                      <a className='active' href='#pages'>
                        Edit Template
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col s12'>
                  <div className='panel card tab--content'>
                    <div id='users' className='col s12'>
                      <div className='row'>
                        <div className='input-field col s6'>
                          <label>Title</label>
                          <input
                            type='text'
                            name='title'
                            value={state.title}
                            onChange={e => setFieldValue('title', e.target.value)}
                          />
                        </div>
                        <div className='input-field col s6'>
                          <select
                            name='group'
                            defaultValue={toString(state.group)}
                            onChange={e => setFieldValue('group', e.target.value)}
                          >
                            <option value='' disabled selected>
                              Choose your option
                            </option>
                            <option value='1'>Group 1</option>
                            <option value='2'>Group 2</option>
                          </select>
                          <label>Group</label>
                        </div>
                      </div>
                      <div className='row'>
                        <select
                          name='template'
                          defaultValue={toString(state.template)}
                          onChange={e => setFieldValue('template', e.target.value)}
                        >
                          <option value='' disabled selected>
                            Choose your option
                          </option>
                          <option value='1'>Template 1</option>
                          <option value='2'>Template 2</option>
                        </select>
                        <label>Group</label>
                      </div>
                      <div className='row'>
                        <div className='input-field col s6'>
                          <label>Frequency</label>
                          <input
                            type='number'
                            name='frequency'
                            value={state.frequency}
                            onChange={e => setFieldValue('frequency', e.target.value)}
                          />
                        </div>
                        <div className='input-field col s6'>
                          <label>Subject</label>
                          <input
                            type='text'
                            name='subject'
                            value={state.subject}
                            onChange={e => setFieldValue('subject', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className='row'>
                        <div className='input-field col s6'>
                          <label>Start At</label>
                          <input
                            type='date'
                            name='starts_at'
                            value={state.starts_at}
                            onChange={e => setFieldValue('starts_at', e.target.value)}
                          />
                        </div>

                        <div className='input-field col s6'>
                          <label>Ends At</label>
                          <input
                            type='date'
                            name='ends_at'
                            value={state.ends_at}
                            onChange={e => setFieldValue('ends_at', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className='row'>
                        <div className='input-field col s6'>
                          <select
                            name='status'
                            defaultValue={toString(state.status)}
                            onChange={e => setFieldValue('status', e.target.value)}
                          >
                            <option value='' disabled selected>
                              Choose your option
                            </option>
                            <option value='1'>Active</option>
                            <option value='2'>InActive</option>
                          </select>
                          <label>Status</label>
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

export default EditResource(EditTemplate, constants.API_TEMPLATES_EDIT);
