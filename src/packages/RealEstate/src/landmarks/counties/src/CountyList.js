import React, { Component, useState, useEffect } from 'react';
import Resource from '../../../../../Core/Components/Resource';
import DataList from '../../../../../Core/Components/DataList';
import CountyRow from './CountyRow';
import * as Constants from './../constants';
import ToolBar from '../../../../../Core/Components/ToolBar';

const CountyList = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([
    {
      name: 'Home',
      subPath: '',
      path: '',
    },
    {
      name: 'Counties',
      subPath: 'counties',
      path: '/counties',
    },
  ]);

  return (
    <div id="main">
      <ToolBar breadcrumbs={breadcrumbs} />
      <Resource
        path={Constants.COUNTIES_URI}
        render={data => {
          if (data.loading) return <p> Loading counties ... </p>;
          if (data.payload.data != undefined) {
            return <DataList data={data.payload.data} component={CountyRow} />;
          }
          return <div>No Data Found</div>;
        }}
      />
    </div>
  );
};

export default CountyList;
