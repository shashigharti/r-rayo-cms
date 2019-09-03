import React, { Component } from 'react';
import { LeadsRow } from './LeadsRow';
import './leads.css';
import './table.css';
import './pagination.css';
import axios from 'axios';

class Leads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leads: [],
      status: [],
      pagination: {
        links: {},
        meta: {},
      },
      loading: true,
    };
    this.getLeads = this.getLeads.bind(this);
  }

  componentDidMount() {
    this.getLeads(null);

    // Get status
    axios.get('/api/lead-status/all').then(response => {
      this.setState({
        status: response.data.data
      });
    })
  }

  getLeads(link) {
    this.setState({
      loading: true,
    });

    let url = link || '/api/leads/all';
    axios.get(url).then(response => {
      this.setState({
        leads: response.data.data,
        pagination: {
          links: response.data.links,
          meta: response.data.meta,
        },
        loading: false,
      });
    });
  }

  render() {
    const { leads, loading, status } = this.state;
    const { links, meta } = this.state.pagination;
    const statusOptions = status.map(s => {
      return (
          <option key={s.id} value={s.id}>{s.status}</option>
      )
    });
    const leadsRow =
      leads.length > 0 && status.length > 0 &&
      leads.map(lead => {
        return <LeadsRow key={lead.id} statuses={statusOptions} lead={lead} />;
      });
    return (
      <>
        <div id="main">
          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="row filter--bar">
                  <div className="col s12">
                    <div className="col left">
                      <ul className="tabs theme__tabs">
                        <li className="tab">
                          <a className="active" href="#">
                            Active
                          </a>
                        </li>
                        <li className="tab">
                          <a href="#">New</a>
                        </li>
                        <li className="tab">
                          <a href="#">Unassigned</a>
                        </li>
                        <li className="tab">
                          <a href="#">Archived</a>
                        </li>
                        <li className="tab">
                          <a href="#">Discarded</a>
                        </li>
                        <li className="tab">
                          <a href="#">Unregistered</a>
                        </li>
                      </ul>
                    </div>
                    <div className="input-field theme--select col s2">
                      <select>
                        <option value="" disabled>
                          All Agents
                        </option>
                        <option value="1">John C</option>
                        <option value="2">Sam Mazor</option>
                      </select>
                    </div>
                    <div className="col s12 btn--bar">
                      <button className="btn btn-sm lead-action-btn">
                        <i className="material-icons">checked</i>
                      </button>
                      <button className="btn btn-sm lead-action-btn">
                        <i className="material-icons left">add</i> Add
                      </button>
                      <button
                        onClick={() => {
                          this.getLeads(null);
                        }}
                        id="filter_leads_btn"
                        className="btn btn-sm"
                      >
                        <i className="material-icons left">refresh</i> Refresh
                      </button>

                      {/*Pagination Area*/}
                      <div className="right-align pagination--top">
                        <ul className="pagination theme--pagination right">
                          <li>
                            <a
                              href="#"
                              onClick={() => {
                                this.getLeads(links.prev);
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
                                this.getLeads(links.next);
                              }}
                              aria-label="Next"
                            >
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                        <button className="btn btn-sm disabled">Total Leads: {meta.total} </button>
                        {loading && (
                          <div className="progress purple">
                            <div className="indeterminate purple lighten-5" />
                          </div>
                        )}
                      </div>
                    </div>
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
                    <table className="table striped leads-table responsive-table">
                      <thead>
                        <tr>
                          <th />
                          <th className="name-col" />
                          <th className="tags-col">Tags</th>
                          <th className="budg-city-time-col text-center">
                            <div className="sortable-head col-sub-heading">
                              <i className="fas fa-dollar-sign" />
                              <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                            </div>
                            <span className="v-line" />
                            <div className="sortable-head col-sub-heading">
                              TimeFrame
                              <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                            </div>
                            <span className="v-line" />
                            <div className="sortable-head col-sub-heading">
                              City
                              <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                            </div>
                          </th>
                          <th>
                            <div className="sortable-head col-sub-heading">
                              Realtor
                              <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                            </div>
                            <span className="v-line" />
                            <div className="sortable-head col-sub-heading">
                              Status
                              <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                            </div>
                          </th>
                          <th>
                            <div className="sortable-head col-sub-heading">
                              Last Login
                              <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                            </div>
                            <span className="v-line" />
                            <div className="sortable-head col-sub-heading">
                              Login Count
                              <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                            </div>
                          </th>
                          <th>
                            <div className="sortable-head col-sub-heading">
                              Age
                              <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                            </div>
                            <span className="v-line" />
                            Source
                          </th>
                          <th className="info-col">
                            <div className="sortable-head col-sub-heading">
                              Info
                              <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                              <div className="sortMenu">
                                <div>
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-eye fa-fw mr-4 aSortable"
                                  />
                                </div>
                                <div>
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-bullhorn fa-fw mr-4 aSortable"
                                  />
                                </div>
                                <div>
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-heart-o fa-fw mr-4 aSortable"
                                  />
                                </div>
                                <div>
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-car fa-fw mr-4 aSortable"
                                  />
                                </div>
                              </div>
                            </div>
                          </th>
                          <th>
                            <div className="sortable-head col-sub-heading">
                              Actions
                              <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                              <div className="sortMenu">
                                <div>
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-envelope-o fa-fw mr-4 aSortable"
                                  />
                                </div>
                                <div>
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-phone fa-fw mr-4 aSortable"
                                  />
                                </div>
                                <div>
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-commenting-o fa-fw mr-4 aSortable"
                                  />
                                </div>
                                <div>
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-sticky-note-o fa-fw mr-4 aSortable"
                                  />
                                </div>
                                <div>
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-reply fa-fw mr-4 aSortable"
                                  />
                                </div>
                                <div>
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-star fa-fw mr-4 aSortable"
                                  />
                                </div>
                              </div>
                            </div>
                          </th>
                          <th id="follow_up">
                            <div className="sortable-head col-sub-heading">
                              Followup
                              <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                            </div>
                          </th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>{leadsRow}</tbody>
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

export { Leads };
