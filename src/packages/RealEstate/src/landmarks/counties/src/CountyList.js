import React, { Component, useState, useEffect } from 'react';
import Resource from '../../../../../Core/Components/Resource';
import DataList from '../../../../../Core/Components/DataList';
import CountyRow from './CountyRow';
import * as constants from './../constants';
import ToolBar from '../../../../../Core/Components/ToolBar';

const CountyList = () => {
  return (
    <div id="main">
      <ToolBar breadcrumbs={constants.BREADCRUMB_COUNTY} toolbar={constants.TOOLBAR} />
      <Resource
        path={constants.API_COUNTY}
        render={data => {
          if (data.loading) return <p> Loading counties ... </p>;
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

export default CountyList;
