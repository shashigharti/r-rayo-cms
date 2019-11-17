import React, { Component } from 'react';
import { BreadCrumbs } from '../../../components/BreadCrumbs';
import { Media } from '../../../components/Media';
import M from 'materialize-css';
//import CrudTrait from '../../../helpers/Crud/CrudTrait';

const crumbs = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Landmarks',
    subPath: '/landmarks',
    path: '/landmarks',
  },
  {
    name: 'Counties',
    subPath: '/counties',
    path: '/counties',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: 'county-edit',
  },
];
const model = 'counties';
class CountyEdit extends Component {
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
      [model]: {
        name: '',
        slug: '',
        dropdown: '',
        frontpage: '',
        frontpage_order: '',
        menu_order: '',
        latitude: '',
        longitude: '',
        active: '',
        sold: '',
      },
      id: id,
      status: status,
    };
    if (id !== null) {
      this.getCounty(id);
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
  getCounty(id) {
    const self = this;
    const url = `/api/${model}/${id}`;
    CrudTrait.getApi(url, model, self);
  }

  handleChange(event) {
    const self = this;
    CrudTrait.handleChange(event, model, self);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { id } = this.state;
    const data = this.state[model];
    if (id !== null) {
      const url = `/api/${model}/${this.state.id}`;
      CrudTrait.putApi(url, data);
    } else {
      const url = `/api/${model}`;
      CrudTrait.postApi(url, data);
    }
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
    const { counties } = this.state;
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
              <div className="container-fluid edit--page">
                <div className="row">
                  <div className="col s12">
                    <ul className="tabs">
                      <li className="tab">
                        <a className="active" href="#pages">
                          Zip
                        </a>
                      </li>
                      <li className="tab">
                        <a href="#downloads">Downloads</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col s12">
                    <div className="panel card tab--content">
                      <div id="cities" className="col s12">
                        <form onSubmit={this.handleSubmit}>
                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="name"
                                value={counties.name}
                                onChange={this.handleChange}
                              />
                              <label>Name</label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="slug"
                                value={counties.slug}
                                onChange={this.handleChange}
                              />
                              <label>Slug</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <select
                                className=""
                                defaultValue={counties.frontpage ? counties.frontpage : ''}
                                name="frontpage"
                                onChange={this.handleChange}
                              >
                                <option value="" disabled>
                                  Choose your option
                                </option>
                                <option value="0">Show</option>
                                <option value="1">Hide</option>
                              </select>
                              <label>Frontpage</label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="frontpage_order"
                                value={counties.frontpage_order ? counties.frontpage_order : ''}
                                onChange={this.handleChange}
                              />
                              <label>Frontpage Order</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <select
                                className=""
                                defaultValue={counties.dropdown ? counties.dropdown : ''}
                                name="dropdown"
                                onChange={this.handleChange}
                              >
                                <option value="" disabled>
                                  Choose your option
                                </option>
                                <option value="0">Show</option>
                                <option value="1">Hide</option>
                              </select>
                              <label>Menu</label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="menu_order"
                                value={counties.menu_order ? counties.menu_order : ''}
                                onChange={this.handleChange}
                              />
                              <label>Menu Order</label>
                            </div>
                          </div>

                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="latitude"
                                value={counties.latitude ? counties.latitude : ''}
                                onChange={this.handleChange}
                              />
                              <label>Latitude</label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="longitude"
                                value={counties.longitude ? counties.longitude : ''}
                                onChange={this.handleChange}
                              />
                              <label>Longitude</label>
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

export { CountyEdit };
