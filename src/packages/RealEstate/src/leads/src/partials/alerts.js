import React from 'react';
export default props => {
  const { firstname, lastname, alerts } = props;
  return (
    <div className="view-box">
      <div className="box-title">
        {firstname} {lastname} - "Listings / Alerts"
      </div>
      <div className="box-content">
        {alerts.length > 0 &&
          alerts.map(alert => {
            return (
              <div className="row viewed-lead">
                <p>{alert.name}</p>
                <p>{alert.frequency}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
