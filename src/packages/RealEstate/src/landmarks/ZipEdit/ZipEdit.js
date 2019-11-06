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
    name: 'Zips',
    subPath: '/zips',
    path: '/zips',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: 'zip-edit',
  },
];
const model = 'zips';
class ZipEdit extends Component {
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
        footer: '',
        navigation: '',
        marketreport: '',
        frontpage_order: '',
        menu_order: '',
        footer_order: '',
        latitude: '',
        longitude: '',
        city_id: '',
        county_id: '',
      },
      cities: {},
      counties: {},
      id: id,
      status: status,
    };
    this.getCity();
    this.getCounties();
    if (id !== null) {
      this.getZip(id);
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
  getCity() {
    const self = this;
    const url = `/api/city`;
    CrudTrait.getApi(url, 'cities', self);
  }
  getCounties() {
    const self = this;
    const url = `/api/counties`;
    CrudTrait.getApi(url, 'counties', self);
  }
  getZip(id) {
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
    const { zips, cities, counties } = this.state;
    const cityOptions =
      cities.length > 0 &&
      cities.map(city => {
        return (
          <option key={city.id} value={city.id} checked={city.id === zips.city_id}>
            {city.name}
          </option>
        );
      });
    const countyOptions =
      counties.length > 0 &&
      counties.map(county => {
        return (
          <option key={county.id} value={county.id} checked={counties.id === zips.county_id}>
            {county.name}
          </option>
        );
      });
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
                                value={zips.name}
                                onChange={this.handleChange}
                              />
                              <label>Name</label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="slug"
                                value={zips.slug}
                                onChange={this.handleChange}
                              />
                              <label>Slug</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="frontpage_order"
                                value={zips.frontpage_order ? zips.frontpage_order : ''}
                                onChange={this.handleChange}
                              />
                              <label>Frontpage Order</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <select
                                className=""
                                defaultValue={zips.dropdown ? zips.dropdown : ''}
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
                                value={zips.menu_order ? zips.menu_order : ''}
                                onChange={this.handleChange}
                              />
                              <label>Menu Order</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <select
                                className=""
                                defaultValue={zips.city_id ? zips.city_id : ''}
                                name="city_id"
                                onChange={this.handleChange}
                              >
                                <option value="" disabled>
                                  Choose your option
                                </option>
                                {cityOptions}
                              </select>
                              <label>City</label>
                            </div>
                            <div className="input-field col s6">
                              <select
                                className=""
                                defaultValue={zips.county_id ? zips.county_id : ''}
                                name="county_id"
                                onChange={this.handleChange}
                              >
                                <option value="" disabled>
                                  Choose your option
                                </option>
                                {countyOptions}
                              </select>
                              <label>County</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="latitude"
                                value={zips.latitude ? zips.latitude : ''}
                                onChange={this.handleChange}
                              />
                              <label>Latitude</label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="longitude"
                                value={zips.longitude ? zips.longitude : ''}
                                onChange={this.handleChange}
                              />
                              <label>Longitude</label>
                            </div>
                          </div>

                          <div className="row">
                            <div className="input-field col s6">
                              <select
                                className=""
                                defaultValue={zips.marketreport ? zips.marketreport : ''}
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

export { ZipEdit };
