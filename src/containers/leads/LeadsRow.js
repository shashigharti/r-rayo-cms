import React, { Component } from 'react';

class LeadsRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lead } = this.props;
    const { agent, metadata, status } = lead;
    return (
      <tr>
        <td>
          <input type="checkbox" value="[object Object]" />
        </td>
        <td>
          <div className="row">
            <div className="col s12">
              <span className="name lead">
                <a href="#" className="">
                  {lead.firstname + ' ' + lead.lastname}
                </a>
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
          <div className="status-dlg">
            <a href="#">{status ? status.status : 'Untouched'}</a>
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
                  <div className="info-unit has-tooltip" aria-describedby="tooltip_2xmnz29knb">
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
                      <a href="#" title="Listings / Alerts" className="position-relative">
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
    );
  }
}

export { LeadsRow };
