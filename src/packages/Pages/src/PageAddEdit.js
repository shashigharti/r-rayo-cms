import React, { useState } from 'react';
import ToolBar from '../../Core/Components/ToolBar';
import * as Constants from '../constants';
import NewPageForm from './NewPageForm';

const PageAddEdit = (props) => {
    const [breadcrumbs, setBreadcrumbs] = useState([
        {
            name: 'Home',
            subPath: '',
            path: '',
        },
        {
            name: 'Pages',
            subPath: 'pages',
            path: '/pages',
        },
        {
            name: 'Edit',
            subPath: 'edit',
            path: '/edit',
        }
    ]);

    console.log(props.match.params.length);
    return (
        <div id="main">
            <ToolBar breadcrumbs={breadcrumbs} />
            {props.match.params != undefined ? (
                <NewPageForm />
            ) : (
                    'Testing add'
                )}
            {/* (props.match.params != '')? <Resource
                path='pages/1/edit'//{Constants.PAGE_EDIT_URI}
                render={data => {
                    if (data.loading) return <p> Loading pages ... </p>;
                    if (data.payload.data != undefined) {
                        return 'Testing edits';
                    }
                    return 'Testing add';
                }}
            /> : return 'Testing' */}
        </div>
    );
};

export default PageAddEdit;