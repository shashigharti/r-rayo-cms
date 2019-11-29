import React from 'react';
export default props => {
  const { firstname, lastname, reports } = props;
  return (
    <div className="view-box">
      <div className="box-title">
        {firstname} {lastname} - "Reports"
      </div>
      <div className="box-content">
        {reports.length > 0 &&
          reports.map(report => {
            return (
              <div className="row viewed-lead">
                <p>{report.name}</p>
                <p>{report.type}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
