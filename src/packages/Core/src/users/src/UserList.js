import React, { useState } from 'react';
import Resource from '../../../Components/Resource';
import DataList from '../../../Components/DataList';
import UserRow from './UserRow';
import * as Constants from './../constants';
import ToolBar from '../../../Components/ToolBar';

const UserList = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([
    {
      name: 'Home',
      subPath: '',
      path: '',
    },
    {
      name: 'Users',
      subPath: 'users',
      path: '/users',
    },
  ]);
  return (
    <div id="main">
      <ToolBar breadcrumbs={breadcrumbs} />
      <Resource
        path={Constants.USERS_URI}
        render={data => {
          if (data.loading) return <p> Loading pages ... </p>;
          if (data.payload.data != undefined) {
            return <DataList data={data.payload.data} component={UserRow} />;
          }
          return <div>No Data Found</div>;
        }}
      />
    </div>
  );
};

export default UserList;
