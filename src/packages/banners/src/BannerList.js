import React, { Component, useState } from 'react';
import Resource from '../../Core/Components/Resource';
import DataList from '../../Core/Components/DataList';
import BannerRow from './BannerRow';
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
      name: 'Banners',
      subPath: 'banners',
      path: '/banners',
    },
  ]);

  return (
    <div id="main">
      <ToolBar breadcrumbs={breadcrumbs} />
      <Resource
        path={Constants.BANNERS_URI}
        render={data => {
          if (data.loading) return <p> Loading banners ... </p>;
          if (data.payload.data != undefined) {
            return <DataList data={data.payload.data} component={BannerRow} />;
          }
          return <div>No Data Found</div>;
        }}
      />
    </div>
  );
};

export default PageList;
