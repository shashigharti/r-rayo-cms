import React, { Component, useState, useEffect } from 'react';
import Resource from '../../../../../Core/Components/Resource';
import DataList from '../../../../../Core/Components/DataList';
import ZipRow from './ZipRow';
import * as Constants from './../constants';
import ToolBar from '../../../../../Core/Components/ToolBar';

const CityList = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([
    {
      name: 'Home',
      subPath: '',
      path: '',
    },
    {
      name: 'Zips',
      subPath: 'zips',
      path: '/zips',
    },
  ]);

  return (
    <div id="main">
      <ToolBar breadcrumbs={breadcrumbs} />
      <Resource
        path={Constants.ZIPS_URI}
        render={data => {
          if (data.loading) return <p> Loading zips ... </p>;
          if (data.payload.data != undefined) {
            return <DataList data={data.payload.data} component={ZipRow} />;
          }
          return <div>No Data Found</div>;
        }}
      />
    </div>
  );
};

export default CityList;
