import React, { Component } from 'react';
import { Media } from '../../Core/Components/Media';

const EditPageForm = (props) => {
    const [page, setPage] = useState('');
    return (
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
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={page.name}
                                                    onChange={this.handleChange}
                                                />
                                                <label>Page Name</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <input
                                                    type="text"
                                                    name="slug"
                                                    value={page.slug}
                                                    onChange={this.handleChange}
                                                />
                                                <label>Slug</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea
                                                    name="content"
                                                    id="content"
                                                    value={page.content}
                                                    className="materialize-textarea"
                                                    onChange={this.handleChange}
                                                />
                                                <label htmlFor="content">Content</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <select
                                                    className=""
                                                    value={page.category_id}
                                                    name="category_id"
                                                    onChange={this.handleChange}
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
                                                    value={page.excerpt}
                                                    name="excerpt"
                                                    onChange={this.handleChange}
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
                                                    value={page.meta_title !== null ? page.meta_title : ''}
                                                    onChange={this.handleChange}
                                                />
                                                <label>Meta Title</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input
                                                    type="text"
                                                    name="meta_description"
                                                    value={page.meta_description !== null ? page.meta_description : ''}
                                                    onChange={this.handleChange}
                                                />
                                                <label>Meta Descriptions</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <input
                                                    type="text"
                                                    name="meta_keywords"
                                                    value={page.meta_keywords !== null ? page.meta_keywords : ''}
                                                    onChange={this.handleChange}
                                                />
                                                <label>Meta Keywords</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col s12">
                                                <div className="input-field">
                                                    <button className="btn gradient-45deg-purple-deep-orange">
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
    );
}

export default EditPageForm;
