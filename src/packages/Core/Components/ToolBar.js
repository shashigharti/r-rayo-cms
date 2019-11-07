import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BreadCrumbs } from './BreadCrumbs';
import { GlobalContext } from '..';

const ToolBar = () => {
    const { state } = useContext(GlobalContext);
    console.log(state);
    return (
        <div className="row">
            <div className="col s12">
                <div className="container-fluid">
                    <div className="row breadcrumbs-inline" id="breadcrumbs-wrapper">
                        <div className="col s10 m6 l6 breadcrumbs-left">
                            <BreadCrumbs rootPath="" crumbs={state.breadcrumbs} />
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
    );
}
export default ToolBar;