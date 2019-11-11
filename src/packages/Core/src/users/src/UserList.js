import React, { useState } from 'react';
import Resource from '../../../Components/Resource';
import DataList from '../../../Components/DataList';
import * as constants from './../constants';
import ToolBar from '../../../Components/ToolBar';

const UserList = () => {
  return (
    <div id="main">
      <ToolBar breadcrumbs={constants.BREADCRUMB_USER} toolbar={constants.TOOLBAR} />
      <Resource
        path={constants.API_USER}
        render={data => {
          if (data.loading) return <p> Loading users ... </p>;
          if (data.payload.data != undefined) {
            return (
              <DataList
                data={data.payload.data}
                actions={constants.ACTIONS}
                columns={constants.COLUMNS}
              />
            );
          }
          return <div>No Data Found</div>;
        }}
      />
    </div>
  );
};

export default UserList;
