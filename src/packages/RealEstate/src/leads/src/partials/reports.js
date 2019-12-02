import React from 'react';
export default props => {
  const { firstname, lastname, results, id, closeBox } = props;
  return (
    <>
      <div className="view-box reports" data-id={id}>
        <div className="box-title">
          {firstname} {lastname} - "Reports"
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
                  <p>{result.name}</p>
                  <p>{result.type}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
