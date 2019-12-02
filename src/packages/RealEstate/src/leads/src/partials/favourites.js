import React from 'react';
export default props => {
  const { firstname, lastname, results, id, closeBox } = props;
  return (
    <>
      <div className="view-box favourites" data-id={id}>
        <div className="box-title">
          {firstname} {lastname} - " favourites"
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
                  <div className="col s8">
                    <p>{result.listing_name}</p>
                    <p>{result.system_price}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
