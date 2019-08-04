import React, { Component } from 'react';

import Header from '../generic/Header';
import SideMenu from '../../components/SideMenu';

class PageList extends Component {
    render() {
        return (
            <>
                <Header />
                <SideMenu />
                <div id="main">
                    <div classNameName="row">
                        <div classNameName="col s12">
                            <div classNameName="container">
                                <div
                                    classNameName="row breadcrumbs-inline"
                                    id="breadcrumbs-wrapper"
                                >
                                    <div classNameName="col s10 m6 l6 breadcrumbs-left">
                                        <h5 classNameName="breadcrumbs-title mt-0 mb-0 display-inline hide-on-small-and-down">
                                            Menus
                                        </h5>
                                        <ol classNameName="breadcrumbs mb-0">
                                            <li classNameName="breadcrumb-item">
                                                <a href="index.html">Home</a>
                                            </li>
                                            <li classNameName="breadcrumb-item active">
                                                <a href="#">Menus</a>
                                            </li>
                                        </ol>
                                    </div>
                                    <div classNameNameName="col s2 m6 l6 right--button">
                                        <a
                                            classNameName="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                                            href="#!"
                                        >
                                            <i classNameName="material-icons">
                                                add
                                            </i>
                                        </a>
                                        <a
                                            classNameName="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                                            href="#!"
                                        >
                                            <i classNameName="material-icons">
                                                file_upload
                                            </i>
                                        </a>
                                        <a
                                            classNameName="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                                            href="#!"
                                        >
                                            <i classNameName="material-icons">
                                                file_download
                                            </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div classNameName="row">
                        <div classNameName="col s12">
                            <div classNameName="container">
                                <div classNameName="panel card">
                                    <table classNameName="table data-table">
                                        <thead>
                                            <tr>
                                                <th>SN</th>
                                                <th>Name</th>
                                                <th>Excerpt</th>
                                                <th classNameName="text-nowrap center-align">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Vision</td>
                                                <td>
                                                    Lorem ipsum dolor sit amet
                                                </td>
                                                <td classNameName="text right-align">
                                                    <a classNameName="waves-effect waves-light btn-small cyan">
                                                        <i
                                                            aria-hidden="true"
                                                            classNameName="fa fa-pencil"
                                                        ></i>
                                                        Edit
                                                    </a>
                                                    <a classNameName="waves-effect waves-light btn-small amber">
                                                        <i
                                                            aria-hidden="true"
                                                            classNameName="fa fa-trash"
                                                        ></i>
                                                        Delete
                                                    </a>
                                                    <a classNameName="waves-effect waves-light btn-small purple">
                                                        <i
                                                            aria-hidden="true"
                                                            classNameName="fa fa-check-circle-o"
                                                        ></i>
                                                        Enabled
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Vision</td>
                                                <td>
                                                    Lorem ipsum dolor sit amet
                                                </td>
                                                <td classNameName="text right-align">
                                                    <a classNameName="waves-effect waves-light btn-small cyan">
                                                        <i
                                                            aria-hidden="true"
                                                            classNameName="fa fa-pencil"
                                                        ></i>
                                                        Edit
                                                    </a>
                                                    <a classNameName="waves-effect waves-light btn-small amber">
                                                        <i
                                                            aria-hidden="true"
                                                            classNameName="fa fa-trash"
                                                        ></i>
                                                        Delete
                                                    </a>
                                                    <a classNameName="waves-effect waves-light btn-small purple">
                                                        <i
                                                            aria-hidden="true"
                                                            classNameName="fa fa-check-circle-o"
                                                        ></i>
                                                        Enabled
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Vision</td>
                                                <td>
                                                    Lorem ipsum dolor sit amet
                                                </td>
                                                <td classNameName="text right-align">
                                                    <a classNameName="waves-effect waves-light btn-small cyan">
                                                        <i
                                                            aria-hidden="true"
                                                            classNameName="fa fa-pencil"
                                                        ></i>
                                                        Edit
                                                    </a>
                                                    <a classNameName="waves-effect waves-light btn-small amber">
                                                        <i
                                                            aria-hidden="true"
                                                            classNameName="fa fa-trash"
                                                        ></i>
                                                        Delete
                                                    </a>
                                                    <a classNameName="waves-effect waves-light btn-small purple">
                                                        <i
                                                            aria-hidden="true"
                                                            classNameName="fa fa-check-circle-o"
                                                        ></i>
                                                        Enabled
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Vision</td>
                                                <td>
                                                    Lorem ipsum dolor sit amet
                                                </td>
                                                <td classNameName="text right-align">
                                                    <a classNameName="waves-effect waves-light btn-small cyan">
                                                        <i
                                                            aria-hidden="true"
                                                            classNameName="fa fa-pencil"
                                                        ></i>
                                                        Edit
                                                    </a>
                                                    <a classNameName="waves-effect waves-light btn-small amber">
                                                        <i
                                                            aria-hidden="true"
                                                            classNameName="fa fa-trash"
                                                        ></i>
                                                        Delete
                                                    </a>
                                                    <a classNameName="waves-effect waves-light btn-small purple">
                                                        <i
                                                            aria-hidden="true"
                                                            classNameName="fa fa-check-circle-o"
                                                        ></i>
                                                        Enabled
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export { PageList };
