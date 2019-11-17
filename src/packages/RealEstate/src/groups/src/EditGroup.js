import React, { useContext, useEffect, useState } from 'react';
import ToolBar from '../../../../Core/Components/ToolBar';
import * as constants from '../constants';
import { GroupContext } from '../../../';
import { apiService, alertService } from '../../../../Core';
import { EditResource } from '../../../../Core/Components/CRUD'

const GroupEdit = (props) => {
    const { dispatch: pdispatch } = useContext(GroupContext);
    const [state, setState] = useState({
        id: '',
        name: '',
        color: '',
        status: ''
    });

    useEffect(() => {
        M.AutoInit();
        M.updateTextFields();
        setState({
            id: props.payload.id,
            name: props.payload.name,
            color: props.payload.color,
            status: props.payload.status,
        });
    }, [props]);

    const handleSubmit = e => {
        event.preventDefault();
        const { id } = state;
        const response = apiService.update(constants.API_GROUP_UPDATE + id, state);
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
        <div id="main">
            <ToolBar breadcrumbs={constants.BREADCRUMB_GROUP_CREATE} toolbar={constants.TOOLBAR} />
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col s12">
                        <div className="container-fluid edit--page">
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
                                                <div className="input-field col s6">
                                                    <select
                                                        name="status"
                                                        value={state.value}
                                                        onChange={e => setFieldValue('status', e.target.value)}
                                                        required
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

export default EditResource(GroupEdit, constants.API_GROUP_EDIT);
