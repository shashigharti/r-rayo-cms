import React from 'react';
export default props => {
  const { firstname, lastname, results, id, closeBox } = props;
  return (
    <>
      <div className="view-box replies" data-id={id}>
        <div className="box-title">
          {firstname} {lastname} - "Replies"
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
                    <p>{result.subject}</p>
                    <p>{result.body_html}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
