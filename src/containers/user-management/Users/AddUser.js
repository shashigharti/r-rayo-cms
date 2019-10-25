import React, { Component } from 'react';
import axios from 'axios';
import { BreadCrumbs } from '../../../components/BreadCrumbs';
import { Media } from '../../../components/Media';

const crumbs = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Users',
    subPath: 'users',
    path: 'users',
  },
  {
    name: 'Add User',
    subPath: 'pages',
    path: 'add-user',
  },
];

class AddUser extends Component {
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
      user: {
        first_name: '',
        last_name: '',
        user_name: '',
        email: '',
        contact: '',
        avatar: '',
        password: '',
        role: '',
        password_confirmation: '',
      },
      id: id,
      status: status,
      roles: {},
    };

    this.getUser = this.getUser.bind(this);
    this.getRoles = this.getRoles.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callback = this.callback.bind(this);
  }
  componentDidMount() {
    M.AutoInit();
    this.getRoles();
    const { id } = this.state;
    if (id !== null) {
      this.getUser(id);
    }
    M.updateTextFields();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    M.updateTextFields();
  }

  getUser(id) {
    const url = `/api/users/${id}`;
    axios.get(url).then(response => {
      const data = response.data.data;
      this.setState({
        user: data,
        status: true,
      });
    });
  }

  getRoles() {
    const url = '/api/role';
    axios.get(url).then(response => {
      const data = response.data.data;
      this.setState({
        roles: data,
      });
    });
  }
  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { user, id } = this.state;
    if (id !== null) {
      this.putRequest(user);
    } else {
      this.postRequest(user);
    }
  }
  putRequest(user) {
    const url = `/api/users/${this.state.id}`;
    axios.put(url, user).then(response => {
      M.toast({ html: 'Successfully Edited' });
    });
  }
  postRequest(user) {
    const url = '/api/users';
    axios.post(url, user).then(response => {
      M.toast({ html: 'Successfully Added' });
    });
  }
  callback(id) {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        avatar: id,
      },
    });
  }
  render() {
    const { user, status, roles } = this.state;
    const roleOptions =
      roles.length > 0 &&
      roles.map(role => {
        return (
          <option key={role.id} value={role.id}>
            {role.name}
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
                    <form onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="input-field col s6">
                          <input
                            type="text"
                            value={user.first_name}
                            name="first_name"
                            onChange={this.handleChange}
                          />
                          <label>First Name</label>
                        </div>
                        <div className="input-field col s6">
                          <input
                            type="text"
                            name="last_name"
                            value={user.last_name}
                            onChange={this.handleChange}
                          />
                          <label>Last Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s6">
                          <input
                            type="text"
                            name="user_name"
                            value={user.user_name}
                            onChange={this.handleChange}
                          />
                          <label>User Name</label>
                        </div>
                        <div className="input-field col s6">
                          <input
                            type="text"
                            name="contact"
                            value={user.contact}
                            onChange={this.handleChange}
                          />
                          <label>Contact</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            type="text"
                            name="email"
                            value={user.email}
                            onChange={this.handleChange}
                          />
                          <label>Email</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <label>Roles</label>
                          <select name="role" onChange={this.handleChange}>
                            <option value="" disabled>
                              Choose your option
                            </option>
                            {roleOptions}
                          </select>
                        </div>
                      </div>
                      {status && (
                        <Media
                          id={this.callback}
                          thumbnail={user.avatar != null ? user.avatar : ''}
                        />
                      )}
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={this.handleChange}
                          />
                          <label>Password</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            type="password"
                            name="password_confirmation"
                            value={user.confirm_password}
                            onChange={this.handleChange}
                          />
                          <label>Password Confirmation</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12 mt-5">
                          <button className="btn gradient-45deg-purple-deep-orange">Submit</button>
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
