import React, { useContext, useEffect, useState } from 'react';
import ToolBar from '../../../../Core/Components/ToolBar';
import * as constants from '../constants';
import { MenuContext } from '../../../';
import { apiService, alertService } from '../../../../Core';
import { EditResource } from '../../../../Core/Components/CRUD';

const MenuEdit = (props) => {
    const { dispatch: pdispatch } = useContext(MenuContext);
    const [state, setState] = useState({
        id: '',
        name: '',
        items: '',
        menu_limit: '',
        type: '',
    });

    useEffect(() => {
        M.AutoInit();
        setState({
            id: props.payload.id,
            name: props.payload.name,
            items: props.payload.items,
            menu_limit: props.payload.menu_limit,
            type: props.payload.type,
        });
        M.updateTextFields();
    }, [props]);

    const handleSubmit = e => {
        event.preventDefault();
        const { id } = state;
        const response = apiService.update(constants.API_MENU_UPDATE + id, state);
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
            <ToolBar breadcrumbs={constants.BREADCRUMB_MENU_CREATE} toolbar={constants.TOOLBAR} />
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col s12">
                        <div className="container-fluid edit--page">
                            <div className="row">
                                <div className="col s12">
                                    <ul className="tabs">
                                        <li className="tab">
                                            <a className="active" href="#pages">
                                                Edit Banner
                      </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col s12">
                                    <div className="panel card tab--content">
                                        <div id="menus" className="col s12">
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
                                                        name="items"
                                                        value={state.items}
                                                        onChange={e => setFieldValue('items', e.target.value)}
                                                    />
                                                    <label>Items</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <label>Menu Limit</label>
                                                    <input
                                                        type="number"
                                                        name="menu_limit"
                                                        value={state.menu_limit}
                                                        onChange={e => setFieldValue('menu_limit', e.target.value)}
                                                    />
                                                </div>
                                                <div className="input-field col s6">
                                                    <input
                                                        type="text"
                                                        name="type"
                                                        value={state.type}
                                                        onChange={e => setFieldValue('type', e.target.value)}
                                                        required
                                                    />
                                                    <label>Type</label>
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

export default EditResource(MenuEdit, constants.API_MENU_EDIT);
