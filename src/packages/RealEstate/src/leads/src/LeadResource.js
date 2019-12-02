import React, { Component } from 'react';
import { apiService } from '../../../../Core';
import PropTypes from 'prop-types';
import LeadRow from './LeadRow';
/**
 * Resource class
 *
 * Ref: The React Cookbook: Advanced Recipes to Level Up Your Next App
 */
class LeadResource extends Component {
  constructor(props) {
    super(props);
  }
  //   static propTypes = {
  //     /** API call state */
  //     loading: PropTypes.bool,
  //     /** Response from the API call */
  //     payload: PropTypes.array,
  //   };
  state = {
    loading: false,
    payload: [],
  };
  componentDidMount() {
    this.setState({ loading: true });
    const path = this.props.path;

    apiService
      .getAll(path)
      .then(response => {
        this.setState({
          payload: response.data,
          loading: false,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const data = this.state;
    if (data.loading) return <p className="center-align"> Loading leads ... </p>;
    if (data.payload.data != undefined) {
      const rows = data.payload.data;
      return (
        <div id="">
          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="row filter--bar">
                  <div className="col s12">
                    <div className="left">
                      <ul className="tabs theme__tabs">
                        <li className="tab">
                          <a
                            className="active"
                            onClick={e => {
                              e.preventDefault();
                              return this.props.callback('LEADS_API', '/api/leads/status/1');
                            }}
                          >
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
                        <option value="0">All Agents</option>
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
                    </div>
                    <div className="col s12">
                      <div className="container-fluid">
                        <div className="card">
                          <div className="card-content">
                            <table className="table striped leads-table responsive-table">
                              <thead>
                                <tr>
                                  <th />
                                  <th className="name-col">Name</th>
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
                                    </div>
                                  </th>
                                  <th>
                                    <div className="sortable-head col-sub-heading">
                                      Actions
                                      <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                                    </div>
                                  </th>
                                  <th id="last_contact">
                                    <div className="sortable-head col-sub-heading">
                                      Last Contact
                                      <i aria-hidden="true" className="fa fa-sort sortable-icon" />
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
                                {rows.length > 0 &&
                                  rows.map(row => {
                                    return <LeadRow row={row} key={row.id} />;
                                  })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>No Data Found</div>;
  }
}

export default LeadResource;
