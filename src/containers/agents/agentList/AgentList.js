import React, { Component } from 'react';
import axios from 'axios';
import { Row } from './Row';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class AgentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agents: {},
      loading: false,
      pagination: {
        links: {},
        meta: {},
      },
    };
    this.getAgents = this.getAgents.bind(this);
    this.deleteAgent = this.deleteAgent.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
    this.getAgents(null, null);
  }

  getAgents(link, type) {
    this.setState({
      loading: true,
    });
    let url = '';
    if (link) {
      url = link;
    } else {
      url = '/api/agents/all';
    }
    this.fetchRequest(url);
  }
  fetchRequest(url) {
    axios.get(url).then(response => {
      console.log(response);
      this.setState({
        loading: false,
        agents: response.data.data,
        pagination: {
          links: response.data.links,
          meta: response.data.meta,
        },
      });
    });
  }
  deleteAgent(id) {
    const url = `/api/agents/delete/${id}`;
    axios.delete(url).then(response => {
      M.toast({ html: 'Successfully Deleted' });
      this.getAgents();
    });
  }

  render() {
    const { agents, loading } = this.state;
    const { links, meta } = this.state.pagination;
    const pageRow =
      agents.length > 0 &&
      agents.map(agent => (
        <Row
          sn={agent.id}
          key={agent.id}
          id={agent.id}
          firstname={agent.first_name}
          lastname={agent.last_name}
          email={agent.email}
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
                    <ol className="breadcrumbs mb-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <Link to="/pages">Agents</Link>
                      </li>
                    </ol>
                  </div>
                  <div className="col s2 m6 l6 right--button">
                    <Link
                      className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                      to="/page-add"
                    >
                      <i className="material-icons">add</i>
                    </Link>
                    <a
                      className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                      href="#!"
                    >
                      <i className="material-icons">file_upload</i>
                    </a>
                    <a
                      className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                      href="#!"
                    >
                      <i className="material-icons">file_download</i>
                    </a>
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
                    {loading && (
                      <div className="progress purple">
                        <div className="indeterminate purple lighten-5" />
                      </div>
                    )}
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
                      <tbody>{pageRow}</tbody>
                    </table>
                  </div>
                </div>
                <div className="right-align pagination--top">
                  <ul className="pagination theme--pagination right">
                    <li>
                      <a
                        href="#"
                        onClick={() => {
                          this.getAgents(links.prev);
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
                          this.getAgents(links.next);
                        }}
                        aria-label="Next"
                      >
                        <span aria-hidden="true">»</span>
                      </a>
                    </li>
                  </ul>
                  <span>Total Agents: {meta.total} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { AgentList };
