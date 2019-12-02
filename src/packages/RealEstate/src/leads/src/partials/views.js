import React from 'react';
export default props => {
  const { firstname, lastname, results, id, closeBox } = props;
  return (
    <>
      <div className="view-box views" data-id={id}>
        <div className="box-title">
          {firstname} {lastname} - "Viewed Listing"
          <i
            className="fa fa-times right clickable"
            onClick={e => {
              e.preventDefault();
              return closeBox();
            }}
          ></i>
        </div>
        <div className="box-content">
          {results.length > 0 &&
            results.map(result => {
              return (
                <div className="row viewed-lead" key={result.id}>
                  <a href="#">
                    <div className="col s4">
                      <img
                        src=""
                        alt="6627 Thomas, Panama City Beach 32408"
                        className="img-responsive"
                      />
                    </div>
                    <div className="col s8">
                      <div className="vw-lead-name">{result.listing_name}</div>
                      <div className="vw-lead-price">
                        Price: {result.system_price} Baths Full: {result.baths_full} Beds:
                        {result.bedrooms}
                      </div>
                      <div className="vw-lead-address">Address: {result.address}</div>
                    </div>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
