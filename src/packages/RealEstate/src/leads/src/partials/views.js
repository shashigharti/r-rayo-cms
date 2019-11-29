import React from 'react';
export default props => {
  const { firstname, lastname, views } = props;
  return (
    <div className="view-box">
      <div className="box-title">
        {firstname} {lastname} - "Viewed Listing"
      </div>
      <div className="box-content">
        {views.length > 0 &&
          views.map(view => {
            return (
              <div className="row viewed-lead">
                <a href="#" target="_blank">
                  {view.listing_name}
                </a>
                <img className=""></img>
              </div>
            );
          })}
      </div>
    </div>
  );
};
