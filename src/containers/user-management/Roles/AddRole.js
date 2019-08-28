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
    name: 'Roles',
    subPath: 'pages',
    path: 'roles',
  },
  {
    name: 'Add Role',
    subPath: 'pages',
    path: 'roles-add',
  },
];

class AddRole extends Component {
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
                  <div className="col s12 m6 l6 breadcrumbs-left">
                    <BreadCrumbs title="Roles" rootPath="" crumbs={crumbs} />
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
                        <div className="input-field col s12">
                          <input type="text" />
                          <label>Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <textarea id="textarea2" className="materialize-textarea" />
                          <label htmlFor="textarea2">Description</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12 permission--box">
                          <p>Permissions</p>
                          <div className="col s12 mb-2">
                            <label>
                              <input type="checkbox" />
                              <span>Select All</span>
                            </label>
                          </div>
                        </div>
                        <div className="col s12 permission--box">
                          <div className="col s2">
                            <label>
                              <input type="checkbox" />
                              <span>Admin</span>
                            </label>
                          </div>
                          <div className="col s10">
                            <label>
                              <input type="checkbox" />
                              <span>Edit Settings</span>
                            </label>
                            <label>
                              <input type="checkbox" />
                              <span>View Admin Panel</span>
                            </label>
                            <label>
                              <input type="checkbox" />
                              <span>Manage Users</span>
                            </label>
                            <label>
                              <input type="checkbox" />
                              <span>Add User</span>
                            </label>
                            <label>
                              <input type="checkbox" />
                              <span>User Edit</span>
                            </label>
                          </div>
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

export { AddRole };
