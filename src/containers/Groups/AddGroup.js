import React, { Component } from 'react';
import Header from '../generic/Header';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import axios from 'axios';

const crumbs = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Groups',
    subPath: 'pages',
    path: 'groups',
  },
  {
    name: 'Add Groups',
    subPath: 'pages',
    path: 'add-group',
  },
];

class AddGroup extends Component {
  constructor(props) {
    super(props);
    // If component came from edit group
    if (this.props.location.state) {
      console.log('Edit mode.');
      const { group } = props.location.state;
      this.state = {
        group,
        edit: true,
      };
    } else {
      this.state = {
        group: {
          name: '',
          status: '',
          color: '#6b4994',
        },
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
    // Fix text overlap with labels on pre-filled inputs
    M.updateTextFields();
  }

  handleStatusChange(e) {
    // Reverse status on toggle
    this.setState(prevProps => ({
      group: {
        ...prevProps.group,
        status: !this.state.group.status,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = this.state.group;

    // If edit mode modify url and method
    let axiosSetup = {
      method: this.state.edit ? 'put' : 'post',
      url: this.state.edit ? '/api/groups/update' : '/api/groups/add',
      data,
    };

    axios(axiosSetup)
      .then(response => {
        let data = response.data;
        if (response.status === 200) {
          M.toast({ html: data.message });
        }
      })
      .catch(e => {
        console.log(e);
        M.toast({ html: 'Failed to save. Try again!' });
      });
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevProps => ({
      group: {
        ...prevProps.group,
        [name]: value,
      },
    }));
  }

  render() {
    const { group } = this.state;
    return (
      <>
        <Header />
        <div id="main">
          <div className="row">
            <div className="col s12">
              <div className="container">
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
              <div className="container">
                <div className="panel card panel--box">
                  <div>
                    <form onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={group.name}
                            onChange={this.handleChange}
                          />
                          <label htmlFor="name">Group Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12">
                          <label>Color</label>
                          <br />
                          <input
                            type="color"
                            name="color"
                            value={group.color}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <div className="switch">
                            <label>
                              Disabled
                              <input
                                type="checkbox"
                                checked={group.status}
                                onChange={this.handleStatusChange}
                              />
                              <span className="lever" />
                              Enabled
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12 mt-5">
                          <button
                            type="submit"
                            className="waves-effect gradient-45deg-purple-deep-orange waves-light btn"
                          >
                            Save
                          </button>
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

export { AddGroup };
