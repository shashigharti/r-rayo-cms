import React, { useState, lazy } from 'react';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

const DataList = ({ data, component: Component, actions, columns }) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="container-fluid">
          <div className="card">
            <div className="card-content">
              <table className="table data-table">
                <thead>
                  <tr>
                    {columns.map(function(column, index) {
                      return <th key={index}>{column.key}</th>;
                    })}
                    <th className="text-nowrap center-align">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Component
                    ? data.map(function(row, index) {
                        return <Component key={index} row={row} actions={actions} />;
                      })
                    : data.map(function(row, index) {
                        return (
                          <tr key={index}>
                            {Object.keys(row).map(function(column, colindex) {
                              return <td key={colindex}>{row[column]}</td>;
                            })}
                            <td className="text right-align">
                              <Link
                                className="waves-effect waves-light btn-small cyan"
                                to={{ pathname: `/page-edit/${row.id}`, query: { id: row.id } }}
                              >
                                <i className="material-icons left">edit</i>
                              </Link>
                              <a className="waves-effect waves-light btn-small amber">
                                <i
                                  className="material-icons left"
                                  onClick={() => {
                                    //onDelete(row.id);
                                  }}
                                >
                                  delete
                                </i>
                              </a>
                              <a className="waves-effect waves-light btn-small purple">
                                <i className="material-icons left">check</i>
                              </a>
                            </td>
                          </tr>
                        );
                      })}
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
