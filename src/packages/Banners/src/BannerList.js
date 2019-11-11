import React, { Component, useState } from 'react';
import Resource from '../../Core/Components/Resource';
import DataList from '../../Core/Components/DataList';
import BannerRow from './BannerRow';
import * as constants from '../constants';
import ToolBar from '../../Core/Components/ToolBar';

const BannerList = () => {
  return (
    <div id="main">
      <ToolBar breadcrumbs={constants.BREADCRUMB_BANNER} toolbar={constants.TOOLBAR} />
      <Resource
        path={constants.API_BANNER}
        render={data => {
          if (data.loading) return <p> Loading banners ... </p>;
          if (data.payload.data != undefined) {
            return (
              <DataList
                data={data.payload.data}
                component={BannerRow}
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

export default BannerList;
