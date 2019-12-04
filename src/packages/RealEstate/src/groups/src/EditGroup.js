import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ToolBar from '../../../../Core/Components/ToolBar';
import ColorPicker from '../../../../Core/Components/ColorPicker';
import * as constants from '../constants';
import { GroupContext } from '../../../';
import { apiService, alertService } from '../../../../Core';
import { EditResource } from '../../../../Core/Components/CRUD';

const GroupEdit = props => {
  const { dispatch: pdispatch } = useContext(GroupContext);
  const [state, setState] = useState({
    id: '',
    name: '',
    color: '',
    status: '',
  });
  const [toList, setToList] = useState(false);
  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    setState({
      id: props.payload.id,
      name: props.payload.name,
      color: props.payload.color,
      status: props.payload.status,
    });
  }, [props]);

  useEffect(() => {
    M.updateTextFields();
  });

  const handleSubmit = e => {
    event.preventDefault();
    const { id } = state;
    const response = apiService.update(constants.API_GROUP_UPDATE + id, state);
    const process = alertService.update(response);
    process.then(status => {
      if (status === true) {
        pdispatch({ type: 'RESET' });
        setTimeout(() => setToList(true), 500);
      }
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
    <>
      {toList ? <Redirect to={constants.GROUP} /> : null}
      <div id="main">
        <ToolBar breadcrumbs={constants.BREADCRUMB_GROUP_EDIT} toolbar={constants.TOOLBAR} />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col s12">
              <div className="container-fluid edit--page">
                <div className="row">
                  <div className="col s12">
                    <ul className="tabs">
                      <li className="tab">
                        <a className="active" href="#pages">
                          Edit Group
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
                            />
                          </div>
                          <div className="input-field col s6">
                            <select
                              name="status"
                              defaultValue={toString(state.status)}
                              onChange={e => setFieldValue('status', e.target.value)}
                            >
                              <option value="" disabled>
                                Choose your option
                              </option>
                              <option value="1">Active</option>
                              <option value="2">InActive</option>
                            </select>
                            <label>Status</label>
                          </div>
                        </div>
                        <div className="row"></div>
                        <div className="row">
                          <div className="input-field col s6">
                            <ColorPicker color={state.color} setFieldValue={setFieldValue} />
                            <label>Color</label>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col s12">
                            <div className="input-field">
                              <button
                                type="submit"
                                className="btn gradient-45deg-purple-deep-orange"
                              >
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
    </>
  );
};

export default EditResource(GroupEdit, constants.API_GROUP_EDIT);
