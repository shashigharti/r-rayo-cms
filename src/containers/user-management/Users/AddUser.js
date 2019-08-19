import React, { Component } from 'react';
import Header from '../../generic/Header';
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
  {
    name: 'Add User',
    subPath: 'pages',
    path: 'add-user',
  },
];

class AddUser extends Component {
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
                  <div className="col s12 m6 l6 breadcrumbs-left">
                    <BreadCrumbs title="Users" rootPath="" crumbs={crumbs} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="panel card panel--box">
                  <div>
                    <form>
                      <div className="row">
                        <div className="input-field col s6">
                          <input type="text" />
                          <label>First Name</label>
                        </div>
                        <div className="input-field col s6">
                          <input type="text" />
                          <label>Last Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input type="text" />
                          <label>User Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input type="text" />
                          <label>Email</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <select>
                            <option value="" disabled>
                              Choose your option
                            </option>
                            <option value="1">Super Admin</option>
                            <option value="2">Admin</option>
                            <option value="3">Client</option>
                          </select>
                          <label>Roles</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input type="password" />
                          <label>Password</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input type="password" />
                          <label>Password Confirmation</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12 mt-5">
                          <a
                            className="waves-effect gradient-45deg-purple-deep-orange waves-light btn"
                            href="#"
                          >
                            Save
                          </a>
                        </div>
                      </div>
                    </form>
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

export { AddUser };
