import React, { useContext, useEffect, useState } from 'react';
import * as constants from '../../constants';
import { apiService, alertService } from '../../../../../Core';

const AddFollowUp = props => {
  const { closeBox } = props;
  const [state, setState] = useState({
    lead_id: '',
    date: '',
    type: '',
    agent_id: '',
    assigned_by: '',
    note: '',
  });

  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    setState({
      ...state,
      ['lead_id']: props.id || '',
    });
  }, [props]);

  useEffect(() => {
    M.updateTextFields();
  });

  const handleSubmit = e => {
    event.preventDefault();
    const response = apiService.store(constants.API_LEAD_FOLLOWUP_STORE, state);
    const process = alertService.store(response);
    process.then(status => {
      if (status === true) {
        setState({
          ...state,
          ['date']: '',
          ['type']: '',
          ['agent_id']: '',
          ['assigned_by']: '',
          ['note']: '',
        });
        return closeBox();
      }
    });
  };

  const setFieldValue = (field, value) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <>
      <div className="view-box followups edit--page" data-id={state.lead_id}>
        <div className="box-content">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col s12">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col s12">
                      <h6 className="">
                        Add Followup
                        <i
                          className="fa fa-times right clickable"
                          onClick={e => {
                            e.preventDefault();
                            return closeBox();
                          }}
                        ></i>
                      </h6>
                    </div>
                    <div className="col s12">
                      <div className="panel">
                        <div id="users" className="col s12">
                          <div className="row">
                            <div className="input-field col s12">
                              <label>Date</label>
                              <input
                                type="date"
                                name="date"
                                value={state.date}
                                onChange={e => setFieldValue('date', e.target.value)}
                              />
                            </div>
                            <div className="input-field col s12">
                              <select onChange={e => setFieldValue('type', e.target.value)}>
                                <option value="">Select Followup Type</option>
                                <option value="1">Follow up</option>
                                <option value="2">To do</option>
                                <option value="3">Reminder</option>
                              </select>
                            </div>
                            <div className="input-field col s12">
                              <select onChange={e => setFieldValue('agent_id', e.target.value)}>
                                <option value="">Select Agent</option>
                                <option value="1">Follow up</option>
                                <option value="2">To do</option>
                                <option value="3">Reminder</option>
                              </select>
                            </div>
                            <div className="input-field col s12">
                              <textarea
                                type="textarea"
                                name="note"
                                value={state.note}
                                placeholder="Notes"
                                rows={10}
                                onChange={e => setFieldValue('note', e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="row">
                            <div className="col s6">
                              <div className="input-field">
                                <button
                                  type="submit"
                                  className="btn gradient-45deg-purple-deep-orange"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                            <div className="col s6">
                              <div className="input-field">
                                <button
                                  className="btn gradient-45deg-purple-deep-orange"
                                  onClick={e => {
                                    e.preventDefault();
                                    return closeBox();
                                  }}
                                >
                                  Cancel
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
      </div>
    </>
  );
};

export default AddFollowUp;
