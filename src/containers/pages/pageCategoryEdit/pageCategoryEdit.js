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
    name: 'Page Categories',
    subPath: 'pages-categories',
    path: '/pages-categories',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: 'page-edit',
  },
];

class PageCategoryEdit extends Component {
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
      category: {
        name: '',
        slug: '',
        description: '',
      },
      id: id,
      status: status,
    };
    if (id !== null) {
      this.getPageCategory(id);
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

  getPageCategory(id) {
    const url = `/api/page-categories/${id}`;
    axios.get(url).then(response => {
      const data = response.data.data;
      this.setState({
        category: data,
        status: true,
      });
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { category } = this.state;
    this.setState({
      category: {
        ...category,
        [name]: value,
      },
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { category, id } = this.state;
    if (id !== null) {
      this.putRequest(category);
    } else {
      this.postRequest(category);
    }
  }
  putRequest(category) {
    const url = `/api/page-categories/${this.state.id}`;
    axios.put(url, category).then(response => {
      M.toast({ html: 'Successfully Edited' });
    });
  }
  postRequest(category) {
    const url = '/api/page-categories';
    axios.post(url, category).then(response => {
      M.toast({ html: 'Successfully Added' });
    });
  }
  callback(id) {
    const { category } = this.state;
    this.setState({
      category: {
        ...category,
        thumbnail: id,
      },
    });
  }
  render() {
    const { category } = this.state;
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
                          Page Category
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
                                value={category.name}
                                onChange={this.handleChange}
                              />
                              <label>Category Name</label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="slug"
                                value={category.slug}
                                onChange={this.handleChange}
                              />
                              <label>Slug</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <textarea
                                value={category.description}
                                onChange={this.handleChange}
                              ></textarea>
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
        </div>
      </>
    );
  }
}

export { PageCategoryEdit };
