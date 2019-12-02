import React from 'react';
export default props => {
  const { firstname, lastname, results, id, closeBox } = props;
  return (
    <>
      <div className="view-box rating" data-id={id}>
        <div className="box-title">
          {firstname} {lastname} - "Rating"
          <i
            className="fa fa-times right clickable"
            onClick={e => {
              e.preventDefault();
              return closeBox();
            }}
          ></i>
        </div>
        <div className="box-content">
          <div className="row viewed-lead">
            <div className="col s8">
              <p>{results ? results.ratings : 'No Rating Yet'}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
