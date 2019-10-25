import React, { Component } from 'react';
import { Row } from './Row';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import CrudTrait from '../../../helpers/Crud/CrudTrait';

class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: {},
      loading: false,
      pagination: {
        links: {},
        meta: {},
      },
    };
    this.deleteCity = this.deleteCity.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
    this.getCities(null, null);
  }

  getCities(link, type) {
    const self = this;
    this.setState({
      loading: true,
    });
    let url = '';
    if (link) {
      url = link;
    } else {
      url = '/api/city';
    }
    CrudTrait.getAllApi(url, 'cities', self);
  }

  deleteCity(id) {
    const url = '/api/city/' + id;
    CrudTrait.deleteApi(url).then(response => {
      this.getCities();
    });
  }
  render() {
    const { cities, loading } = this.state;
    const { links, meta } = this.state.pagination;
    const cityRow =
      cities.length > 0 &&
      cities.map(city => (
        <Row
          sn={city.id}
          key={city.id}
          id={city.id}
          name={city.name}
          slug={city.slug}
          active={city.active}
          sold={city.sold}
          onDelete={this.deleteCity}
        />
      ));
    return (
      <>
        <div id="main">
          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="row breadcrumbs-inline" id="breadcrumbs-wrapper">
                  <div className="col s10 m6 l6 breadcrumbs-left">
                    <ol className="breadcrumbs mb-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <Link to="/cities">Cities</Link>
                      </li>
                    </ol>
                  </div>
                  <div className="col s2 m6 l6 right--button">
                    <Link
                      className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                      to="/city-add"
                    >
                      <i className="material-icons">add</i>
                    </Link>
                    <a
                      className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                      href="#!"
                    >
                      <i className="material-icons">file_upload</i>
                    </a>
                    <a
                      className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                      href="#!"
                    >
                      <i className="material-icons">file_download</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="card">
                  <div className="card-content">
                    {loading && (
                      <div className="progress purple">
                        <div className="indeterminate purple lighten-5" />
                      </div>
                    )}
                    <table className="table data-table">
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Name</th>
                          <th>Slug</th>
                          <th>Active Listings</th>
                          <th>Sold Listings</th>
                          <th className="text-nowrap center-align">Action</th>
                        </tr>
                      </thead>
                      <tbody>{cityRow}</tbody>
                    </table>
                  </div>
                </div>
                <div className="right-align pagination--top">
                  <ul className="pagination theme--pagination right">
                    <li>
                      <a
                        href="#"
                        onClick={() => {
                          this.getCities(links.prev);
                        }}
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">«</span>
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">{meta.current_page}</a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => {
                          this.getCities(links.next);
                        }}
                        aria-label="Next"
                      >
                        <span aria-hidden="true">»</span>
                      </a>
                    </li>
                  </ul>
                  <span>Total Pages: {meta.total} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { CityList };
