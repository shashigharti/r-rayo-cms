import React, { useState, useEffect } from 'react';
import ToolBar from '../../Core/Components/ToolBar';
import * as constants from '../constants';
import NewPageForm from './NewPageForm';
import EditPageForm from './EditPageForm';

const PageAddEdit = (props) => {
    useEffect(() => {
        M.AutoInit();
    }, []);
    return (
        <div id="main">
            <ToolBar breadcrumbs={constants.BREADCRUMB_PAGE_EDIT} />
            {props.match.params != undefined ? (
                <NewPageForm />
            ) : (
                    <Resource
                        path='pages/1/edit'//{Constants.PAGE_EDIT_URI}
                        render={data => {
                            if (data.loading) return <p> Loading pages ... </p>;
                            if (data.payload.data != undefined) {
                                return <EditPageForm />;
                            }
                            return <div> No Data Found </div>;
                        }}
                    />
                )}
        </div>
    );
};

export default PageAddEdit;