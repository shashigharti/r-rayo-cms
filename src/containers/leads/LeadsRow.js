import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../components/TimeAgo';

class LeadsRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 1,
      timezone: process.env.TIMEZONE,
    };

    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
    const { status } = this.props.lead;
    this.setState({
      status: status ? status.id : 1,
    });

    M.updateTextFields();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    M.AutoInit();
    M.updateTextFields();
  }

  // Handle status change of lead
  handleStatusChange(e) {
    const id = e.target.value;
    axios
      .put(`/api/lead-status/update/${this.props.lead.id}`, { status_id: id })
      .then(response => {
        this.setState({
          status: id,
        });

        M.toast({ html: response.data.message });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { status } = this.state;
    const { lead, statuses } = this.props;
    const { agent, metadata } = lead;
    const last_login = lead.last_login ? timeAgo(lead.last_login) : '-';
    const age = lead.created_at ? timeAgo(lead.created_at) : '-';
    return (
      <tr>
        <td>
          <input type="checkbox" value="[object Object]" />
        </td>
        <td>
          <div className="row">
            <div className="col s12">
              <span className="name lead">
                <Link to={`/leads/${lead.id}`} className="">
                  {lead.firstname + ' ' + lead.lastname}
                </Link>
              </span>
              {lead.phone_number && (
                <div>
                  <i className="fas fa-phone mr-2" />
                  <small>{lead.phone_number}</small>
                </div>
              )}
              <div>
                <i className="fas fa-envelope mr-2" />
                <small>{lead.email}</small>
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
            <a href="#">{agent && agent.first_name + ' ' + agent.last_name}</a>
          </div>
          <div>
            <select
              className="browser-default"
              name="status"
              onChange={this.handleStatusChange}
              value={status}
            >
              {statuses}
            </select>
          </div>
        </td>
        <td>
          <small>
            <span>{last_login}</span>
          </small>
          <br />
          <small>{metadata ? metadata.login_count + ' times' : 'N/A'}</small>
          <br />
        </td>
        <td>
          <small>{age}</small>
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
                          <sub>{metadata ? metadata.views_count : 0}</sub>
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
                          <sub>{metadata ? metadata.favourites_count : 0}</sub>
                        </small>
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="info-unit has-tooltip" aria-describedby="tooltip_2xmnz29knb">
                    <div>
                      <a href="#" title="Neighborhood Camps">
                        <i aria-hidden="true" className="fa fa-home" />
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
                      <a href="#" title="Market Reports">
                        <small>MR</small>
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
                      <a href="#" title="Listings / Alerts" className="position-relative">
                        <i aria-hidden="true" className="fa fa-bullhorn" />
                        <small>
                          <sub>{metadata ? metadata.search_count : 0}</sub>
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
                          <sub>{metadata ? metadata.distance_count : 0}</sub>
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
                          <sub>{metadata ? metadata.emails_count : 0}</sub>
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
                          <sub>{metadata ? metadata.notes_count : 0}</sub>
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
                          <sub>{metadata ? metadata.calls_count : 0}</sub>
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
                          <sub>{metadata ? metadata.email_replies_count : 0}</sub>
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
                          <sub>{metadata ? metadata.distance_count : 0}</sub>
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
    );
  }
}

export { LeadsRow };
