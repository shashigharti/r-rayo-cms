import React, { Component } from 'react';
import Header from '../../generic/Header';
import { Link } from 'react-router-dom';
import { BreadCrumbs } from '../../../components/BreadCrumbs';

const crumbs = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Users',
    subPath: 'pages',
    path: 'users',
  },
];

class Users extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <>
        <Header />
        <div id="main">
          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="row breadcrumbs-inline" id="breadcrumbs-wrapper">
                  <div className="col s10 m6 l6 breadcrumbs-left">
                    <BreadCrumbs title="Users" rootPath="" crumbs={crumbs} />
                  </div>
                  <div className="col s2 m6 l6 right--button">
                    <Link
                      className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                      title="add"
                      to="/add-user"
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
                          <th>Email</th>
                          <th>Roles</th>
                          <th className="text-nowrap center-align">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Vision</td>
                          <td>info@robustitconcepts.com</td>
                          <td>Super Admin</td>
                          <td className="text right-align">
                            <Link
                              className="waves-effect waves-light btn-small cyan"
                              to="/add-user"
                            >
                              <i className="material-icons left">edit</i>Edit
                            </Link>
                            <a className="waves-effect waves-light btn-small amber">
                              <i className="material-icons left">delete</i>Delete
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Vision</td>
                          <td>info1@robustitconcepts.com</td>
                          <td>Admin</td>
                          <td className="text right-align">
                            <Link
                              className="waves-effect waves-light btn-small cyan"
                              to="/add-user"
                            >
                              <i className="material-icons left">edit</i>Edit
                            </Link>
                            <a className="waves-effect waves-light btn-small amber">
                              <i className="material-icons left">delete</i>Delete
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Alex</td>
                          <td>info2@robustitconcepts.com</td>
                          <td>Client</td>
                          <td className="text right-align">
                            <Link
                              className="waves-effect waves-light btn-small cyan"
                              to="/add-user"
                            >
                              <i className="material-icons left">edit</i>Edit
                            </Link>
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

export { Users };
