import React, { Component } from 'react';
import axios from 'axios';
import { Row } from './Row';
import { Link } from 'react-router-dom';
import { BreadCrumbs } from '../../Components/BreadCrumbs';

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
];

class Roles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: {},
      loading: false,
      pagination: {
        links: {},
        meta: {},
      },
    };
    this.getRoles = this.getRoles.bind(this);
    this.deleteRole = this.deleteRole.bind(this);
  }
  componentDidMount() {
    M.AutoInit();
    this.getRoles(null, null);
  }

  getRoles(link, type) {
    this.setState({
      loading: true,
    });
    let url = '';
    if (link) {
      url = link;
    } else {
      url = '/api/role';
    }
    this.fetchRequest(url);
  }
  fetchRequest(url) {
    axios.get(url).then(response => {
      console.log(response);
      this.setState({
        loading: false,
        roles: response.data.data,
        pagination: {
          links: response.data.links,
          meta: response.data.meta,
        },
      });
    });
  }
  deleteRole(id) {
    const url = `/api/role/${id}`;
    axios.delete(url).then(response => {
      M.toast({ html: 'Successfully Deleted' });
      this.getRoles();
    });
  }

  render() {
    const { roles } = this.state;
    const { links, meta } = this.state.pagination;
    const rolesRow =
      roles.length > 0 &&
      roles.map(role => (
        <Row
          sn={role.id}
          key={role.id}
          id={role.id}
          name={role.name}
          description={role.description}
          onDelete={this.deleteRole}
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
                    <BreadCrumbs title="Roles" rootPath="" crumbs={crumbs} />
                  </div>
                  <div className="col s2 m6 l6 right--button">
                    <Link
                      className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                      title="add"
                      to="/roles-add"
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
                          <th>Description</th>
                          <th className="text-nowrap center-align">Action</th>
                        </tr>
                      </thead>
                      <tbody>{rolesRow}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-align pagination--top">
            <ul className="pagination theme--pagination right">
              <li>
                <a
                  href="#"
                  onClick={() => {
                    this.getRoles(links.prev);
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
                    this.getRoles(links.next);
                  }}
                  aria-label="Next"
                >
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
            <span>Total Roles: {meta.total} </span>
          </div>
        </div>
      </>
    );
  }
}

export default Roles;
