import React from 'react';
export default props => {
  const { firstname, lastname, results, id, closeBox } = props;
  return (
    <>
      <div className="view-box calls" data-id={id}>
        <div className="box-title">
          {firstname} {lastname} - "Communications"
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
                    <p>{result.observations}</p>
                    <p>{result.duration}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
