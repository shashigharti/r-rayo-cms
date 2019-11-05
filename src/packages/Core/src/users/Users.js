import React, { Component } from 'react';
import axios from 'axios';
import { Row } from './Row';
import { Link } from 'react-router-dom';
import { BreadCrumbs } from '../../../../components/BreadCrumbs';

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
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      loading: false,
      pagination: {
        links: {},
        meta: {},
      },
    };
    this.getUsers = this.getUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }
  getUsers(link, type) {
    this.setState({
      loading: true,
    });
    let url = '';
    if (link) {
      url = link;
    } else {
      url = '/api/users';
    }
    this.fetchRequest(url);
  }
  deleteUser(id) {
    const url = `/api/user/${id}`;
    axios.delete(url).then(response => {
      M.toast({ html: 'Successfully Deleted' });
      this.getAgents();
    });
  }
  fetchRequest(url) {
    axios.get(url).then(response => {
      console.log(response);
      this.setState({
        loading: false,
        users: response.data.data,
        pagination: {
          links: response.data.links,
          meta: response.data.meta,
        },
      });
    });
  }
  componentDidMount() {
    M.AutoInit();
    this.getUsers(null, null);
  }

  render() {
    const { users } = this.state;
    const { links, meta } = this.state.pagination;
    const usersRow =
      users.length > 0 &&
      users.map(user => (
        <Row
          sn={user.id}
          key={user.id}
          id={user.id}
          firstname={user.first_name}
          lastname={user.last_name}
          email={user.email}
          onDelete={this.deleteAgent}
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
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th className="text-nowrap center-align">Action</th>
                        </tr>
                      </thead>
                      <tbody>{usersRow}</tbody>
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
                    this.getUsers(links.prev);
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
                    this.getUsers(links.next);
                  }}
                  aria-label="Next"
                >
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
            <span>Total Users: {meta.total} </span>
          </div>
        </div>
      </>
    );
  }
}

export default Users;
