import React, { Component, useState } from 'react';
import Resource from '../../Core/Components/Resource';
import DataList from '../../Core/Components/DataList';
import PageRow from './PageRow';
import * as Constants from './../constants';
import ToolBar from '../../Core/Components/ToolBar';

const PageList = () => {
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
    }
  ]);

  return (
    <div id="main">
      <ToolBar breadcrumbs={breadcrumbs} />
      <Resource
        path={Constants.PAGE_URI}
        render={data => {
          if (data.loading) return <p> Loading pages ... </p>;
          if (data.payload.data != undefined) {
            return <DataList data={data.payload.data} component={PageRow} />;
          }
          return <div>No Data Found</div>;
        }}
      />
    </div>
  );
};

export default PageList;