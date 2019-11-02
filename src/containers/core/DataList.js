import React, { useState, lazy } from 'react';
import Pagination from './Pagination';
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
                                        <th>Name</th>
                                        <th className="text-nowrap center-align">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(col => <Component key={col.id} row={col} />)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination />
                </div>
            </div>
        </div>
    );
}

export default DataList;