import React from 'react';
import { Link } from 'react-router-dom';
import * as Partials from './partials';

const LeadRow = ({ row, onDelete }) => {
  const { Views, Alerts, Favourites, Reports, Distance } = Partials;
  return (
    <tr>
      <td>
        <input type="checkbox" value="[object Object]" />
      </td>
      <td>
        <div className="row">
          <div className="col s12">
            <span className="name lead">
              <Link to={`/leads/${row.id}`} className="">
                {row.firstname + ' ' + row.lastname}
              </Link>
            </span>
            {row.phone_number && (
              <div>
                <i className="fas fa-phone mr-2" />
                <small>{row.phone_number || 'NA'}</small>
              </div>
            )}
            <div>
              <i className="fas fa-envelope mr-2" />
              <small>{row.email || 'NA'}</small>
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
          <a href="#">{row.agent && row.agent.first_name + ' ' + row.agent.last_name}</a>
        </div>
        <div>
          <select className="browser-default" name="status"></select>
        </div>
      </td>
      <td>
        <small>
          <span>{row.last_login || 'NA'}</span>
        </small>
        <br />
        <small>{row.metadata ? row.metadata.login_count + ' times' : 'N/A'}</small>
        <br />
      </td>
      <td>
        <small>{row.age || 'NA'}</small>
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
                    <div href="#" title="Click for Properties Viewed">
                      <i aria-hidden="true" className="fa fa-eye fa-fw" />
                      <small>
                        <sub>{row.metadata ? row.metadata.views_count : 0}</sub>
                      </small>
                      <Views views={row.views} firstname={row.firstname} lastname={row.lastname} />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="info-unit">
                  <div>
                    <a href="#" title="Favorite Properties">
                      <i className="fas fa-heart" />
                      <small>
                        <sub>{row.metadata ? row.metadata.favourites_count : 0}</sub>
                      </small>
                    </a>
                    <Favourites
                      favourites={row.favourites}
                      firstname={row.firstname}
                      lastname={row.lastname}
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="info-unit has-tooltip" aria-describedby="tooltip_2xmnz29knb">
                  <div>
                    <a
                      href="#"
                      title="Neighborhood Camps"
                      className="tooltipped"
                      data-position="bottom"
                      data-tooltip="Feature Coming Soon"
                    >
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
                    <Reports
                      reports={row.reports}
                      firstname={row.firstname}
                      lastname={row.lastname}
                    />
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
                        <sub>{row.metadata ? row.metadata.search_count : 0}</sub>
                      </small>
                    </a>
                    <Alerts
                      firstname={row.firstname}
                      lastname={row.lastname}
                      alerts={row.searches}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="info-unit">
                  <div>
                    <a href="#" title="Distance / Drivetime">
                      <i aria-hidden="true" className="fa fa-car fa-fw" />
                      <small>
                        <sub>{row.metadata ? row.metadata.distance_count : 0}</sub>
                      </small>
                    </a>
                    <Distance
                      distances={row.distances}
                      firstname={row.firstname}
                      lastname={row.lastname}
                    />
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
                        <sub>{row.metadata ? row.metadata.emails_count : 0}</sub>
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
                        <sub>{row.metadata ? row.metadata.notes_count : 0}</sub>
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
                        <sub>{row.metadata ? row.metadata.calls_count : 0}</sub>
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
                        <sub>{row.metadata ? row.metadata.email_replies_count : 0}</sub>
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
                        <sub>{row.metadata ? row.metadata.distance_count : 0}</sub>
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
};

export default LeadRow;
