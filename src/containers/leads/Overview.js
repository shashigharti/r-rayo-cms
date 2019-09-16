import React, { Component } from 'react';
import { timeAgo } from '../../components/TimeAgo';

class Overview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { logins, loginHistory, activity } = this.props;
    const loginHistoryRows = loginHistory.map(history => {
      return (
        <tr key={history.id}>
          <td>{history.id}</td>
          <td>{timeAgo(history.time_of_login)}</td>
        </tr>
      );
    });

    const activityRows = activity.map(act => {
      return (
        <tr key={act.id}>
          <td>{act.id}</td>
          <td>{act.description}</td>
          <td>{timeAgo(act.created_at)}</td>
        </tr>
      );
    });
    return (
      <>
        <div className="row">
          <div className="panel card col s12">
            <div className="col s12">
              <h5>Login</h5>
            </div>
            <div className="details">
              <div className="col s6">
                <label>Last Login:</label>
                <span>{logins.last_login}</span>
              </div>
              <div className="col s6">
                <label>Logins this month:</label>
                <span>{logins.last_month}</span>
              </div>
              <div className="col s6">
                <label>Logins this year:</label>
                <span>{logins.last_year}</span>
              </div>
              <div className="col s6">
                <label>Logins last year:</label>
                <span>{logins.this_year}</span>
              </div>
            </div>
            <div className="col s12">
              <table className="table mt-5 mb-5">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>When</th>
                  </tr>
                </thead>
                <tbody>{loginHistoryRows}</tbody>
              </table>
            </div>
          </div>
          <div className="panel card col s12 mt-5">
            <div className="col s12">
              <h5>Activity</h5>
            </div>
            <div className="col s12">
              <table className="mt-5 mb-5">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>When</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>{activityRows}</tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Overview;
