import React, { Component } from 'react';

import { Row } from './Row';
import { Link } from 'react-router-dom';
import Header from '../../generic/Header';

class PageList extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
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
                    <ol className="breadcrumbs mb-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <Link to="/pages">Pages</Link>
                      </li>
                    </ol>
                  </div>
                  <div className="col s2 m6 l6 right--button">
                    <Link
                      className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                      to="/page-edit"
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
                    <table className="table data-table">
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Name</th>
                          <th>Excerpt</th>
                          <th className="text-nowrap center-align">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <Row sn={1} name="Vision" excerpt="Lorem ipsum dolor sit" />
                        <Row sn={1} name="Vision" excerpt="Lorem ipsum dolor sit" />
                        <Row sn={1} name="Vision" excerpt="Lorem ipsum dolor sit" />
                        <Row sn={1} name="Vision" excerpt="Lorem ipsum dolor sit" />
                        <Row sn={1} name="Vision" excerpt="Lorem ipsum dolor sit" />
                      </tbody>
                    </table>
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

export { PageList };
