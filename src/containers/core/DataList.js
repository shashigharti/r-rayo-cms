import React, { useContext } from 'react';

const DataList = (props) => {
    return (
        <div className="row">
            <div className="col s12">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-content">
                            {loading && (
                                <div className="progress purple">
                                    <div className="indeterminate purple lighten-5" />
                                </div>
                            )}
                            <table className="table data-table">
                                <thead>
                                    <tr>
                                        <th>SN</th>
                                        <th>Name</th>
                                        <th>Excerpt</th>
                                        <th className="text-nowrap center-align">Action</th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                    <div className="right-align pagination--top">
                        <ul className="pagination theme--pagination right">
                            <li>
                                <a
                                    href="#"
                                    aria-label="Previous"
                                >
                                    <span aria-hidden="true">«</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#"></a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    aria-label="Next"
                                >
                                    <span aria-hidden="true">»</span>
                                </a>
                            </li>
                        </ul>
                        <span>Total Pages: 0 </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataList;