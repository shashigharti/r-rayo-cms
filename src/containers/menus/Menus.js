import React, { Component } from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { Link } from 'react-router-dom';

const crumbs = [
  {
    name: 'Home',
    subPath: '',
    path: '/',
  },
  {
    name: 'Menus',
    subPath: 'pages',
    path: 'menus',
  },
];
class Menus extends Component {
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
                    <BreadCrumbs title="Menus" rootPath="" crumbs={crumbs} />
                  </div>
                  <div className="col s2 m6 l6">
                    <Link
                      className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                      to="/add-menu"
                    >
                      <i className="material-icons">add</i>
                    </Link>
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
                          <th className="text-nowrap center-align">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Main Menu</td>
                          <td className="text right-align">
                            <a className="waves-effect waves-light btn-small cyan">
                              <i className="material-icons left">edit</i>Edit
                            </a>
                            <a className="waves-effect waves-light btn-small amber">
                              <i className="material-icons left">delete</i>Delete
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Quick Links</td>
                          <td className="text right-align">
                            <a className="waves-effect waves-light btn-small cyan">
                              <i className="material-icons left">edit</i>Edit
                            </a>
                            <a className="waves-effect waves-light btn-small amber">
                              <i className="material-icons left">delete</i>Delete
                            </a>
                          </td>
                        </tr>
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

export { Menus };
