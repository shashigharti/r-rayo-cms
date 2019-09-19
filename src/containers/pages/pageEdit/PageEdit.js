import React, { Component } from 'react';
import axios from 'axios';
import { BreadCrumbs } from '../../../components/BreadCrumbs';
import { Media } from '../../../components/Media';
import M from 'materialize-css';

const crumbs = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Pages',
    subPath: 'pages',
    path: '/pages',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: 'page-edit',
  },
];

class PageEdit extends Component {
  constructor(props) {
    super(props);
    let id = null;
    let status = null;
    if (this.props.match.params.hasOwnProperty('id')) {
      id = this.props.match.params.id;
    } else {
      status = true;
    }
    this.state = {
      page: {
        name: '',
        excerpt: '',
        category_id: '',
        thumbnail: '',
        slug: '',
        content: '',
        meta_title: '',
        meta_keywords: '',
        meta_description: '',
      },
      id: id,
      status: status,
    };
    if (id !== null) {
      this.getPage(id);
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callback = this.callback.bind(this);
  }
  componentDidMount() {
    M.updateTextFields();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    M.updateTextFields();
  }

  getPage(id) {
    const url = `/api/page/edit/${id}`;
    axios.get(url).then(response => {
      const data = response.data.data;
      this.setState({
        page: data,
        status: true,
      });
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { page } = this.state;
    this.setState({
      page: {
        ...page,
        [name]: value,
      },
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { page, id } = this.state;
    if (id !== null) {
      this.putRequest(page);
    } else {
      this.postRequest(page);
    }
  }
  putRequest(page) {
    const url = `/api/page/update/${this.state.id}`;
    axios.put(url, page).then(response => {
      M.toast({ html: 'Successfully Edited' });
    });
  }
  postRequest(page) {
    const url = '/api/page/store';
    axios.post(url, page).then(response => {
      M.toast({ html: 'Successfully Added' });
    });
  }
  callback(id) {
    const { page } = this.state;
    this.setState({
      page: {
        ...page,
        thumbnail: id,
      },
    });
  }
  render() {
    const { page, status } = this.state;
    return (
      <>
        <div id="main">
          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="row breadcrumbs-inline" id="breadcrumbs-wrapper">
                  <div className="col s10 m6 l6 breadcrumbs-left">
                    <BreadCrumbs rootPath="" crumbs={crumbs} />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                                <button className="btn btn-primary">Submit</button>
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
      </>
    );
  }
}

export { PageEdit };
