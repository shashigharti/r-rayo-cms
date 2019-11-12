import React, { useEffect, useContext, useState } from 'react';
//import { Media } from '../../Core/Components/Media';
import { PageContext } from '..';
import ToolBar from '../../Core/Components/ToolBar';
import * as constants from '../constants';
import Resource from '../../Core/Components/Resource';

const PageEdit = (props) => {
    const { dispatch: pdispatch } = useContext(PageContext);
    const [state, setState] = useState({
        page: {
            name: '',
            slug: '',
            content: '',
            category_id: '',
            excerpt: '',
            meta_title: '',
            meta_description: '',
            meta_keywords: ''
        },
        params: { mode: 'Edit', id: props.match.params.id }
    });
    const setFieldValue = (field, value) => {
        setState({
            ...state,
            [field]: value
        });
        pdispatch({ type: 'SET_FIELD', current_page: { field, value } });
    }
    const handleSubmit = (e) => {
        event.preventDefault();
        let response = apiService.update(constants.API_PAGE_UPDATE, state);
        response.then(response => {
            console.log('success', response);
        });
        response.catch(err => {
            console.log('error', err);
        })
    }

    useEffect(() => {
        M.AutoInit();
        pdispatch({
            type: 'INIT',
            default: {
                all: [],
                current_page: state
            }
        });
    }, []);
    return (
        <div id="main">
            <ToolBar breadcrumbs={constants.BREADCRUMB_PAGE_EDIT} toolbar={constants.TOOLBAR} />
            <Resource
                path={constants.API_PAGE_EDIT}
                params={state.params}
                render={data => {
                    if (data.loading) return <p> Loading pages ... </p>;
                    if (data.payload.data != undefined) {
                        console.log(data);
                        return <div className="row">
                            <div className="col s12">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col s12">
                                            <ul className="tabs">
                                                <li className="tab">
                                                    <a className="active" href="#pages">
                                                        Pages
                                                    </a>
                                                </li>
                                                <li className="tab">
                                                    <a href="#downloads">Downloads</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col s12">
                                            <div className="panel card tab--content">
                                                <div id="pages" className="col s12">
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="row">
                                                            <div className="input-field col s6">
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    value={state.page.name}
                                                                    onChange={(e) => setFieldValue('name', e.target.value)}
                                                                />
                                                                <label>Page Name</label>
                                                            </div>
                                                            <div className="input-field col s6">
                                                                <input
                                                                    type="text"
                                                                    name="slug"
                                                                    value={state.page.slug}
                                                                    onChange={(e) => setFieldValue('slug', e.target.value)}
                                                                />
                                                                <label>Slug</label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="input-field col s12">
                                                                <textarea
                                                                    name="content"
                                                                    value={state.page.content}
                                                                    className="materialize-textarea"
                                                                    onChange={(e) => setFieldValue('content', e.target.value)}
                                                                />
                                                                <label htmlFor="content">Content</label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="input-field col s6">
                                                                <select
                                                                    name="category_id"
                                                                    onChange={(e) => setFieldValue('category_id', e.target.value)}
                                                                >
                                                                    <option value="" disabled>
                                                                        Choose your option
                                                                    </option>
                                                                    <option value="1">News And Events</option>
                                                                    <option value="2">Publications</option>
                                                                    <option value="3">About Us</option>
                                                                </select>
                                                                <label>Category</label>
                                                            </div>
                                                            <div className="input-field col s6">
                                                                <input
                                                                    type="text"
                                                                    value={state.page.excerpt}
                                                                    name="excerpt"
                                                                    onChange={(e) => setFieldValue('excerpt', e.target.value)}
                                                                />
                                                                <label>Excerpt</label>
                                                            </div>
                                                        </div>
                                                        {status && <Media id={this.callback} thumbnail={page.thumbnail} />}
                                                        <div className="row">
                                                            <div className="input-field col s12">
                                                                <input
                                                                    type="text"
                                                                    name="meta_title"
                                                                    value={state.page.meta_title}
                                                                    onChange={(e) => setFieldValue('meta_title', e.target.value)}
                                                                />
                                                                <label>Meta Title</label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="input-field col s6">
                                                                <input
                                                                    type="text"
                                                                    name="meta_description"
                                                                    value={state.page.meta_description}
                                                                    onChange={(e) => setFieldValue('meta_description', e.target.value)}
                                                                />
                                                                <label>Meta Descriptions</label>
                                                            </div>
                                                            <div className="input-field col s6">
                                                                <input
                                                                    type="text"
                                                                    name="meta_keywords"
                                                                    value={state.page.meta_keywords}
                                                                    onChange={(e) => setFieldValue('meta_keywords', e.target.value)}
                                                                />
                                                                <label>Meta Keywords</label>
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
                                                    </form>
                                                </div>
                                                <div id="downloads" className="col s12">
                                                    Test 2
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>;
                    }
                    return <div> No Data Found </div>;
                }}
            />
        </div>
    );
};
export default PageEdit;
