import React from 'react';
export default props => {
  const { firstname, lastname, distances } = props;
  return (
    <div className="view-box">
      <div className="box-title">
        {firstname} {lastname} - "Distance / Drives"
      </div>
      <div className="box-content">
        {distances.length > 0 &&
          distances.map(distance => {
            return (
              <div className="row viewed-lead">
                <p>{distance.data}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
