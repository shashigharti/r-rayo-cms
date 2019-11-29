import React from 'react';
export default props => {
  const { firstname, lastname, favourites } = props;
  return (
    <div className="view-box">
      <div className="box-title">
        {firstname} {lastname} - " favourites"
      </div>
      <div className="box-content">
        {favourites.length > 0 &&
          favourites.map(favourite => {
            return (
              <div className="row viewed-lead">
                <p>{favourite.listing_name}</p>
                <p>{favourite.system_price}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
