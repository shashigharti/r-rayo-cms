import React, { Component } from 'react';
import axios from 'axios';
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
  {
    name: 'Add Role',
    subPath: 'pages',
    path: 'roles-add',
  },
];

class AddRole extends Component {
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
      role: {
        name: '',
        description: '',
        permission: [],
      },
      permissions: {
        name: '',
        display_name: '',
        id: '',
      },
      id: id,
      status: status,
      submitted: false,
    };
    if (id !== null) {
      this.getRole(id);
    }
    this.getRole = this.getRole.bind(this);
    this.getPermissions = this.getPermissions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleAllSelect = this.handleAllSelect.bind(this);
  }
  componentDidMount() {
    this.getPermissions();
    M.updateTextFields();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    M.updateTextFields();
  }
  getPermissions() {
    const url = '/api/permission';
    axios
      .get(url)
      .then(response => {
        return response.data.data;
      })
      .then(data => {
        this.setState({ permissions: data });
      });
  }
  getRole(id) {
    const url = `/api/role/${id}`;
    axios.get(url).then(response => {
      const data = response.data.data;
      this.setState({
        role: data,
        status: true,
      });
    });
  }
  handleChange(event) {
    const { name, value } = event.target;
    const { role } = this.state;
    this.setState({
      role: {
        ...role,
        [name]: value,
      },
    });
  }

  handleCheckbox(event) {
    const { role } = this.state;
    const name = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked === true) {
      role.permission.push({ name: name });
    } else {
      const index = role.permission.findIndex(x => x.name == name);
      role.permission.splice(index, 1);
    }
    this.setState({ role: role });
  }
  handleAllSelect(event) {
    const { role, permissions } = this.state;
    const isChecked = event.target.checked;
    if (isChecked) {
      const allPermissions = [];
      permissions.map(permission => {
        const name = permission.name;
        allPermissions.push({ name: name });
      });
      role.permission = allPermissions;
    } else {
      role.permission = [];
    }
    this.setState({ role: role });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { role, id } = this.state;
    if (id !== null) {
      this.putRequest(role);
    } else {
      this.postRequest(role);
    }
  }
  putRequest(role) {
    const url = `/api/role/${this.state.id}`;
    axios.put(url, role).then(response => {
      M.toast({ html: 'Successfully Edited' });
    });
  }
  postRequest(role) {
    const url = '/api/role';
    axios.post(url, role).then(response => {
      M.toast({ html: 'Successfully Added' });
    });
  }
  render() {
    const { role, permissions } = this.state;
    const prevPermissions = role.permission;
    const prevSelected = [];
    prevPermissions.map(permission => {
      prevSelected.push(permission.name);
    });
    const permissionsSelector =
      permissions.length > 0 &&
      permissions.map(permission => {
        return (
          <div className="col s4" key={permission.id}>
            <label>
              <input
                value={permission.name}
                checked={prevSelected.includes(permission.name)}
                type="checkbox"
                onChange={this.handleCheckbox}
              />
              <span>{permission.display_name}</span>
            </label>
          </div>
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
                    <form onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            type="text"
                            value={role.name}
                            name="name"
                            onChange={this.handleChange}
                          />
                          <label>Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <textarea
                            id="textarea2"
                            className="materialize-textarea"
                            value={role.description}
                            name="description"
                            onChange={this.handleChange}
                          />
                          <label htmlFor="textarea2">Description</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12 permission--box">
                          <p>Permissions</p>
                          <div className="col s12 mb-2">
                            <label>
                              <input
                                type="checkbox"
                                checked={permissions.length == prevSelected.length}
                                onChange={this.handleAllSelect}
                              />
                              <span>Select All</span>
                            </label>
                          </div>
                        </div>
                        <div className="col s12 permission--box">{permissionsSelector}</div>
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

export default AddRole;
