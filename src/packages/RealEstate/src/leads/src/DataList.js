import React, { useState, lazy } from 'react';
import Pagination from '../../../../Core/Components/Pagination';

const DataList = ({ data, component: Component }) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="container-fluid">
          <div className="card">
            <div className="card-content">
              <table className="table data-table">
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>City</th>
                    <th>Name</th>
                    <th>
                      <div className="sortable-head col-sub-heading">
                        Last Login
                        <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                      </div>
                      <span className="v-line" />
                      <div className="sortable-head col-sub-heading">
                        Login Count
                        <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                      </div>
                    </th>
                    <th>Creted At</th>
                    <th className="text-nowrap center-align">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(col => (
                    <Component key={col.id} row={col} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default DataList;
