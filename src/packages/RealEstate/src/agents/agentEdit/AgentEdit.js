import React, { Component } from 'react';
import axios from 'axios';
import { BreadCrumbs } from '../../../../Core/Components/BreadCrumbs';
import { Media } from '../../../../Core/Components/Media';
import M from 'materialize-css';

const crumbs = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Agents',
    subPath: 'agents',
    path: '/agents',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: 'agent-edit',
  },
];
class AgentEdit extends Component {
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
      agent: {
        first_name: '',
        last_name: '',
        user_name: '',
        email: '',
        address: '',
        contact: '',
      },
      id: id,
      status: status,
    };
    if (id !== null) {
      this.getAgent(id);
    }
    this.getAgent = this.getAgent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callback = this.callback.bind(this);
  }
  getAgent(id) {
    const url = `/api/agent/edit/${id}`;
    axios.get(url).then(response => {
      const data = response.data.data;
      this.setState({
        agent: data,
        status: true,
      });
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { page } = this.state;
    this.setState({
      page: {
        ...page,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { page, id } = this.state;
    if (id !== null) {
      this.putRequest(page);
    } else {
      this.postRequest(page);
    }
  }
  putRequest(page) {
    const url = `/api/page/update/${this.state.id}`;
    axios.put(url, page).then(response => {
      M.toast({ html: 'Successfully Edited' });
    });
  }
  postRequest(page) {
    const url = '/api/page/store';
    axios.post(url, page).then(response => {
      M.toast({ html: 'Successfully Added' });
    });
  }
  callback(id) {
    const { page } = this.state;
    this.setState({
      page: {
        ...page,
        thumbnail: id,
      },
    });
  }
  render() {
    const { agent, status } = this.state;
    return (
      <>
        <div id="main">
          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="row breadcrumbs-inline" id="breadcrumbs-wrapper">
                  <div className="col s10 m6 l6 breadcrumbs-left">
                    <BreadCrumbs rootPath="" crumbs={crumbs} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="container-fluid edit--page">
                <div className="row">
                  <div className="col s12">
                    <ul className="tabs">
                      <li className="tab">
                        <a className="active" href="#pages">
                          Agents
                        </a>
                      </li>
                      <li className="tab">
                        <a href="#downloads">Downloads</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col s12">
                    <div className="panel card tab--content">
                      <div id="agents" className="col s12">
                        <form onSubmit={this.handleSubmit}>
                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="first_name"
                                value={agent.first_name}
                                onChange={this.handleChange}
                              />
                              <label>First Name</label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="last_name"
                                value={agent.last_name}
                                onChange={this.handleChange}
                              />
                              <label>Last Name</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="email"
                                value={agent.email}
                                onChange={this.handleChange}
                              />
                              <label>Last Name</label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                type="text"
                                name="contact"
                                value={agent.contact}
                                onChange={this.handleChange}
                              />
                              <label>Contact</label>
                            </div>
                          </div>

                          {status && <Media id={this.callback} thumbnail={agent.avatar} />}
                          <div className="row">
                            <div className="input-field col s12">
                              <input
                                type="text"
                                name="meta_title"
                                value={agent.address}
                                onChange={this.handleChange}
                              />
                              <label>Address</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col s12">
                              <div className="input-field">
                                <button className="btn gradient-45deg-purple-deep-orange">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div id="downloads" className="col s12">
                        Test 2
                      </div>
                    </div>
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
export { AgentEdit };
