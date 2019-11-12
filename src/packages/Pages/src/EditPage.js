import React, { useEffect, useContext, useState } from 'react';
//import { Media } from '../../Core/Components/Media';
import { PageContext } from '..';
import ToolBar from '../../Core/Components/ToolBar';
import * as constants from '../constants';
import { EditResource } from '../../Core/Components/CRUD';


const PageEdit = (props) => {
    const { dispatch: pdispatch } = useContext(PageContext);
    const [state, setState] = useState({
        id: '',
        name: '',
        slug: '',
        content: '',
        category_id: 0,
        excerpt: '',
        meta_title: '',
        meta_description: '',
        meta_keywords: ''
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
        console.log(state);
    }

    useEffect(() => {
        M.AutoInit();
        M.updateTextFields();
    }, []);

    // Updated when the props change
    useEffect(() => {
        M.AutoInit();
        M.updateTextFields();
        setState({
            id: props.payload.id,
            name: props.payload.name,
            slug: props.payload.slug,
            content: props.payload.content,
            category_id: props.payload.category_id,
            excerpt: props.payload.excerpt,
            meta_title: props.payload.meta_title,
            meta_description: props.payload.meta_description,
            meta_keywords: props.payload.meta_keywords
        });
    }, [props]);


    return (
        <div id="main">
            <ToolBar breadcrumbs={constants.BREADCRUMB_PAGE_EDIT} toolbar={constants.TOOLBAR} />
            <div className="row">
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
                                                        value={state.name}
                                                        onChange={(e) => setFieldValue('name', e.target.value)}
                                                    />
                                                    <label>Page Name</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <input
                                                        type="text"
                                                        name="slug"
                                                        value={state.slug}
                                                        onChange={(e) => setFieldValue('slug', e.target.value)}
                                                    />
                                                    <label>Slug</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <textarea
                                                        name="content"
                                                        value={state.content}
                                                        className="materialize-textarea"
                                                        onChange={(e) => setFieldValue('content', e.target.value)}
                                                    />
                                                    <label htmlFor="content">Content</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <select
                                                        value={state.category_id}
                                                        name="category_id"
                                                        onChange={(e) => setFieldValue('category_id', e.target.value)}
                                                    >
                                                        <option value="0" disabled>
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
                                                        value={state.excerpt}
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
                                                        value={state.meta_title}
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
                                                        value={state.meta_description}
                                                        onChange={(e) => setFieldValue('meta_description', e.target.value)}
                                                    />
                                                    <label>Meta Descriptions</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <input
                                                        type="text"
                                                        name="meta_keywords"
                                                        value={state.meta_keywords}
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
            </div>
        </div>
    );
};
export default EditResource(PageEdit, constants.API_PAGE_EDIT);
