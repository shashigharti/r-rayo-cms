import React, { Component } from 'react';
import axios from 'axios';
import { BreadCrumbs } from '../../../components/BreadCrumbs';
import { Button } from '../../../components/Button';
import M from 'materialize-css';

const camerasImage = '../../../assets/images/cards/cameras.png';

const crumbs = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Pages',
    subPath: 'pages',
    path: 'page-list',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: 'page-edit',
  },
];

// eslint-disable-next-line react/prefer-stateless-function
class PageEdit extends Component {
  constructor(props) {
    super(props);
    let id = null;
    if (props.match.params.hasOwnProperty('id')) {
      id = props.match.params.id;
    }
    this.state = {
      submitted: false,
      id: id,
      page: {
        name: '',
        slug: '',
        content: '',
        excerpt: '',
        category_id: '',
        meta_title: '',
        meta_keywords: '',
        meta_description: '',
      },
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { id } = this.state;
    if (id !== null) {
      this.getPage(id);
    }
  }

  getPage(id) {
    const url = `/api/page/edit/${id}`;
    axios.get(url).then(response => {
      const data = response.data.data;
      this.setState({
        page: data,
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
  render() {
    const { page } = this.state;
    return (
      <>
        <div id="main">
          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="row breadcrumbs-inline" id="breadcrumbs-wrapper">
                  <div className="col s10 m6 l6 breadcrumbs-left">
                    <h5 className="breadcrumbs-title mt-0 mb-0 display-inline hide-on-small-and-down">
                      Pages
                    </h5>

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
                                value={page.content}
                                onChange={this.handleChange}
                              />
                              <label>Content</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <select
                                value={`$(page.category_id.toString())`}
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

                          <div className="row">
                            <div className="col s12">
                              <label>Thumbnail</label>
                              <a
                                className="waves-effect gradient-45deg-purple-deep-orange waves-light btn modal-trigger"
                                href="#modal1"
                              >
                                Add Image
                              </a>
                              <div id="modal1" className="modal modal-fixed-footer">
                                <div className="modal-content">
                                  <h5>Media Manager</h5>
                                  <div className="col s12">
                                    <ul className="tabs">
                                      <li className="tab">
                                        <a className="active" href="#upload">
                                          Pages
                                        </a>
                                      </li>
                                      <li className="tab">
                                        <a href="#images">Downloads</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div id="upload" className="clearfix tab--content">
                                    <div className="col s12">
                                      <input
                                        type="file"
                                        id="input-file-now"
                                        className="dropify"
                                        data-default-file=""
                                      />
                                    </div>
                                  </div>
                                  <div id="images" className="clearfix tab--content">
                                    <div className="col s12">
                                      <div className="col s2">
                                        <div className="media-image">
                                          <img alt="cameras" src={camerasImage} />
                                        </div>
                                      </div>
                                      <div className="col s2">
                                        <div className="media-image">
                                          <img alt="cameras" src={camerasImage} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <a
                                    href="#!"
                                    className="modal-action modal-close waves-effect waves-red btn-flat "
                                  >
                                    Cancel
                                  </a>
                                  <a
                                    href="#!"
                                    className="modal-action modal-close waves-effect waves-green btn-flat "
                                  >
                                    Apply
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
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
