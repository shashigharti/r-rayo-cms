import React, { useState, lazy } from 'react';
import Pagination from './Pagination';
import { LinkAction, AnchorAction } from './ActionItems';

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
                    {columns.map(function (column, index) {
                      return <th key={index}>{column.key}</th>;
                    })}
                    <th className="text-nowrap center-align">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Component ? data.map(function (row, index) {
                    return <Component
                      key={index}
                      row={row}
                      actions={actions} />
                  }) : data.map(function (row, index) {
                    return <tr key={index}>
                      {columns.map(function (column, colindex) {
                        return <td key={colindex}>{row[column.key]}</td>
                      })}
                      <td className="text right-align">
                        {actions.map(function (action, index) {
                          {
                            return !action.callback ?
                              <LinkAction
                                key={index}
                                url={action.url}
                                params={{ id: row.id }}
                                classname={action.classname}
                              /> :
                              <AnchorAction
                                key={index}
                                callback={action.callback}
                                classname={action.classname}
                              />
                          }
                        })}
                      </td>
                    </tr>
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
