import React, { Component } from 'react';
import axios from 'axios';
import { BreadCrumbs } from '../../../components/BreadCrumbs';
import { Media } from '../../../components/Media';
import M from 'materialize-css';
import CrudTrait from '../../../helpers/Crud/CrudTrait';

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

class CityEdit extends Component {
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
      city: {
        name: '',
        slug: '',
        frontpage: '',
        dropdown: '',
        footer: '',
        navigation: '',
        marketreport: '',
        frontpage_order: '',
        menu_order: '',
        footer_order: '',
        latitude: '',
        longitude: '',
      },
      id: id,
      status: status,
    };
    if (id !== null) {
      this.getCity(id);
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

  getCity(id) {
    const self = this;
    const url = `/api/city/${id}`;
    CrudTrait.getApi(url, 'city', self);
  }

  handleChange(event) {
    const self = this;
    CrudTrait.handleChange(event, 'city', self);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { city, id } = this.state;
    if (id !== null) {
      const url = `/api/city/${this.state.id}`;
      CrudTrait.putApi(url, city);
    } else {
      const url = '/api/city';
      CrudTrait.postApi(url, city);
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
    const { city, status } = this.state;
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
                          City
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
                                value={city.name}
                                onChange={this.handleChange}
                              />
                              <label>Name</label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="slug"
                                value={city.slug}
                                onChange={this.handleChange}
                              />
                              <label>Slug</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <select
                                className=""
                                defaultValue={city.frontpage ? city.frontpage : ''}
                                name="frontpage"
                                onChange={this.handleChange}
                              >
                                <option value="" disabled>
                                  Choose your option
                                </option>
                                <option value="0">Show</option>
                                <option value="1">Hide</option>
                              </select>
                              <label>frontpage</label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="frontpage_order"
                                value={city.frontpage_order ? city.frontpage_order : ''}
                                onChange={this.handleChange}
                              />
                              <label>Frontpage Order</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <select
                                className=""
                                defaultValue={city.dropdown ? city.dropdown : ''}
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
                                value={city.menu_order ? city.menu_order : ''}
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
                                value={city.latitude ? city.latitude : ''}
                                onChange={this.handleChange}
                              />
                              <label>Latitude</label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="longitude"
                                value={city.longitude ? city.longitude : ''}
                                onChange={this.handleChange}
                              />
                              <label>Longitude</label>
                            </div>
                          </div>
                          {/* {status && <Media id={this.callback} thumbnail={page.thumbnail} />} */}

                          <div className="row">
                            <div className="input-field col s6">
                              <select
                                className=""
                                defaultValue={city.navigation ? city.navigation : ''}
                                name="navigation"
                                onChange={this.handleChange}
                              >
                                <option value="" disabled>
                                  Choose your option
                                </option>
                                <option value="0">Show</option>
                                <option value="1">Hide</option>
                              </select>
                              <label>Navigation</label>
                            </div>
                            <div className="input-field col s6">
                              <select
                                className=""
                                defaultValue={city.marketreport ? city.marketreport : ''}
                                name="marketreport"
                                onChange={this.handleChange}
                              >
                                <option value="" disabled>
                                  Choose your option
                                </option>
                                <option value="0">Show</option>
                                <option value="1">Hide</option>
                              </select>
                              <label>Market Report</label>
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

export { CityEdit };
