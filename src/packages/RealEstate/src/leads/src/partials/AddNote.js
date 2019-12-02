import React, { useContext, useEffect, useState } from 'react';
import * as constants from '../../constants';
import { apiService, alertService } from '../../../../../Core';

const AddNote = props => {
  const { showBox, closeBox } = props;
  const intialState = {};
  const [state, setState] = useState({
    lead_id: '',
    title: '',
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
    const response = apiService.store(constants.API_LEAD_NOTE_STORE, state);
    const process = alertService.store(response);
    process.then(status => {
      if (status === true) {
        setState({
          ...state,
          ['title']: '',
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
      <div className="view-box add-notes edit--page" data-id={state.lead_id}>
        <div className="box-content">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col s12">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col s12">
                      <h6 className="">
                        Add Note
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
                              <label>Title</label>
                              <input
                                type="text"
                                name="title"
                                value={state.title}
                                onChange={e => setFieldValue('title', e.target.value)}
                              />
                            </div>
                            <div className="input-field col s12">
                              <textarea
                                type="textarea"
                                name="note"
                                rows={10}
                                value={state.note}
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

export default AddNote;
