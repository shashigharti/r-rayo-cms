import React, { useContext } from 'react';

const DataList = (props) => {
    return (
        <div id="main">
            <div className="row">
                <div className="col s12">
                    <div className="container-fluid">
                        <div className="row breadcrumbs-inline" id="breadcrumbs-wrapper">
                            <div className="col s10 m6 l6 breadcrumbs-left">
                                <ol className="breadcrumbs mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <Link to="/pages">Pages</Link>
                                    </li>
                                </ol>
                            </div>
                            <div className="col s2 m6 l6 right--button">
                                <Link
                                    className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                                    to="/page-add"
                                >
                                    <i className="material-icons">add</i>
                                </Link>
                                <a
                                    className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                                    href="#!"
                                >
                                    <i className="material-icons">file_upload</i>
                                </a>
                                <a
                                    className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                                    href="#!"
                                >
                                    <i className="material-icons">file_download</i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                    <tbody>{pageRow}</tbody>
                                </table>
                            </div>
                        </div>
                        <div className="right-align pagination--top">
                            <ul className="pagination theme--pagination right">
                                <li>
                                    <a
                                        href="#"
                                        onClick={() => {
                                            this.getPages(links.prev);
                                        }}
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
        </div>
    );
}

export default DataList;