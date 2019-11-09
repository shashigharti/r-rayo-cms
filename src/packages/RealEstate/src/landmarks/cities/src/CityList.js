import React, { Component, useState, useEffect } from 'react';
import Resource from '../../../../../Core/Components/Resource';
import DataList from '../../../../../Core/Components/DataList';
import CityRow from './CityRow';
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
      name: 'Cities',
      subPath: 'cities',
      path: '/cities',
    },
  ]);

  return (
    <div id="main">
      <ToolBar breadcrumbs={breadcrumbs} />
      <Resource
        path={Constants.CITIES_URI}
        render={data => {
          if (data.loading) return <p> Loading cities ... </p>;
          if (data.payload.data != undefined) {
            return <DataList data={data.payload.data} component={CityRow} />;
          }
          return <div>No Data Found</div>;
        }}
      />
    </div>
  );
};

export default CityList;
