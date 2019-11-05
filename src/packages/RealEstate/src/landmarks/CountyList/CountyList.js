import React, { Component } from 'react';
import { Row } from './Row';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
//import CrudTrait from '../../../helpers/Crud/CrudTrait';

const model = 'counties';
class CountyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [model]: {},
      loading: false,
      pagination: {
        links: {},
        meta: {},
      },
    };
    this.deleteCounty = this.deleteCounty.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
    this.getCounties(null, null);
  }

  getCounties(link, type) {
    const self = this;
    this.setState({
      loading: true,
    });
    let url = '';
    if (link) {
      url = link;
    } else {
      url = `/api/${model}`;
    }
    CrudTrait.getAllApi(url, model, self);
  }

  deleteCounty(id) {
    const url = `/api/${model}/${id}`;
    CrudTrait.deleteApi(url).then(response => {
      this.getCounties();
    });
  }
  render() {
    const { counties, loading } = this.state;
    const { links, meta } = this.state.pagination;
    const countyRow =
      counties.length > 0 &&
      counties.map(county => (
        <Row
          sn={county.id}
          key={county.id}
          id={county.id}
          name={county.name}
          slug={county.slug}
          active={county.active}
          sold={county.sold}
          onDelete={this.deleteCounty}
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
                      to="/county-add"
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
                      <tbody>{countyRow}</tbody>
                    </table>
                  </div>
                </div>
                <div className="right-align pagination--top">
                  <ul className="pagination theme--pagination right">
                    <li>
                      <a
                        href="#"
                        onClick={() => {
                          this.getCounties(links.prev);
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
                          this.getCounties(links.next);
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

export { CountyList };
