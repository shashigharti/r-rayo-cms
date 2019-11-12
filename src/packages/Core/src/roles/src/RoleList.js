import React, { useState } from 'react';
import Resource from '../../../Components/Resource';
import DataList from '../../../Components/DataList';
import * as constants from './../constants';
import ToolBar from '../../../Components/ToolBar';
import RoleRow from './RoleRow';

const RoleList = () => {
  return (
    <div id="main">
      <ToolBar breadcrumbs={constants.BREADCRUMB_ROLE} toolbar={constants.TOOLBAR} />
      <Resource
        path={constants.API_ROLE}
        render={data => {
          if (data.loading) return <p> Loading roles ... </p>;
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

export default RoleList;
