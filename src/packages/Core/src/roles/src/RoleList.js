import React, { useState } from 'react';
import Resource from '../../../Components/Resource';
import DataList from '../../../Components/DataList';
import UserRow from './RoleRow';
import * as Constants from './../constants';
import ToolBar from '../../../Components/ToolBar';
import RoleRow from './RoleRow';

const RoleList = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([
    {
      name: 'Home',
      subPath: '',
      path: '',
    },
    {
      name: 'Roles',
      subPath: 'roles',
      path: '/roles',
    },
  ]);
  return (
    <div id="main">
      <ToolBar breadcrumbs={breadcrumbs} />
      <Resource
        path={Constants.ROLES_URI}
        render={data => {
          if (data.loading) return <p> Loading roles ... </p>;
          if (data.payload.data != undefined) {
            return <DataList data={data.payload.data} component={RoleRow} />;
          }
          return <div>No Data Found</div>;
        }}
      />
    </div>
  );
};

export default RoleList;
