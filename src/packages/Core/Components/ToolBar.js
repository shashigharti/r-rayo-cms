import React from 'react';
import { Link } from 'react-router-dom';
import { BreadCrumbs } from './BreadCrumbs';

const ToolBar = ({ breadcrumbs, toolbar }) => {
    return (
        <div className="row">
            <div className="col s12">
                <div className="container-fluid">
                    <div className="row breadcrumbs-inline" id="breadcrumbs-wrapper">
                        <div className="col s10 m6 l6 breadcrumbs-left">
                            <BreadCrumbs crumbs={breadcrumbs} />
                        </div>
                        <div className="col s2 m6 l6 right--button">
                            {toolbar.map(function (tool, index) {
                                return <Link
                                    key={index}
                                    className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                                    to={tool.url}
                                >
                                    <i className="material-icons">{tool.classname}</i>
                                </Link>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ToolBar;