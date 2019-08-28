import React, { Component } from 'react';
import './leads.css';
import './table.css';
import './pagination.css';

class Leads extends Component {
  render() {
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
                      <button id="filter_leads_btn" className="btn btn-sm">
                        <i className="material-icons left">refresh</i> Refresh
                      </button>
                      <div className="right-align pagination--top">
                        <ul className="pagination theme--pagination right">
                          <li>
                            <a href="#" aria-label="Previous">
                              <span aria-hidden="true">«</span>
                            </a>
                          </li>
                          <li className="active">
                            <a href="#">1</a>
                          </li>
                          <li>
                            <a href="#" aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                        <span className="badge">Total Leads: 3 </span>
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
                      <tbody>
                        <tr>
                          <td>
                            <input type="checkbox" value="[object Object]" />
                          </td>
                          <td>
                            <div className="row">
                              <div className="col s12">
                                <span className="name lead">
                                  <a href="#" className="">
                                    RWS Dev
                                  </a>
                                </span>
                                <div>
                                  <i className="fas fa-phone mr-2" />
                                  <small>9818361595</small>
                                </div>
                                <div>
                                  <i className="fas fa-envelope mr-2" />
                                  <small>pranav.ga.wri@gmail.com</small>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td />
                          <td className="center-align">
                            <small>unknown</small>
                          </td>
                          <td>
                            <div>
                              <a href="#">Glenn Musto</a>
                            </div>
                            <div className="status-dlg">
                              <a href="#">Showing</a>
                            </div>
                          </td>
                          <td>
                            <small>
                              <span>20 days ago</span>
                            </small>
                            <br />
                            <small>19 Total</small>
                            <br />
                          </td>
                          <td>
                            <small>1 Months Ago</small>
                            <br />
                            <small>-</small>
                            <br />
                          </td>
                          <td>
                            <table className="table-custom">
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="info-unit">
                                      <div>
                                        <a href="#" title="Click for Properties Viewed">
                                          <i aria-hidden="true" className="fa fa-eye fa-fw" />
                                          <small>
                                            <sub>3</sub>
                                          </small>
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="info-unit">
                                      <div>
                                        <a href="#" title="Favorite Properties">
                                          <i className="fas fa-heart" />
                                          <small>
                                            <sub>0</sub>
                                          </small>
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      className="info-unit has-tooltip"
                                      aria-describedby="tooltip_2xmnz29knb"
                                    >
                                      <div>
                                        <a href="#" title="Neighborhood Camps">
                                          <i aria-hidden="true" className="fa fa-home" />
                                          <small>
                                            <sub> 0</sub>
                                          </small>
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="info-unit">
                                      <div>
                                        <a href="#" title="Market Reports">
                                          <small>MR</small>
                                          <small>
                                            <sub> 0</sub>
                                          </small>
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="info-unit">
                                      <div>
                                        <a
                                          href="#"
                                          title="Listings / Alerts"
                                          className="position-relative"
                                        >
                                          <i aria-hidden="true" className="fa fa-bullhorn" />
                                          <small>
                                            <sub>1</sub>
                                          </small>
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="info-unit">
                                      <div>
                                        <a href="#" title="Distance / Drivetime">
                                          <i aria-hidden="true" className="fa fa-car fa-fw" />
                                          <small>
                                            <sub> 0</sub>
                                          </small>
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td>
                            <table className="table-custom">
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="info-unit">
                                      <div>
                                        <a title="Click to see communications">
                                          <i aria-hidden="true" className="fa fa-envelope fa-fw" />
                                          <small>
                                            <sub>1</sub>
                                          </small>
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="info-unit">
                                      <div>
                                        <a href="#" title="Click to see notes">
                                          <i className="fas fa-sticky-note" />
                                          <small>
                                            <sub>0</sub>
                                          </small>
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="info-unit">
                                      <div>
                                        <a href="#" title="Click to see calls detail">
                                          <i aria-hidden="true" className="fa fa-phone fa-fw" />
                                          <small>
                                            <sub>0</sub>
                                          </small>
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="info-unit">
                                      <div>
                                        <a title="Click to see replies">
                                          <i className="fas fa-reply" />
                                          <small>
                                            <sub>0</sub>
                                          </small>
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="info-unit">
                                      <div>
                                        <a href="#" title="Click to rate lead.">
                                          <i className="fas fa-star" />
                                          <small>
                                            <sub>0</sub>
                                          </small>
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td>
                            <a href="#">Add</a>
                          </td>
                          <td>
                            <a href="#">
                              Lead review
                              <i className="fas fa-external-link-alt ml-2" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
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
