import React, { Component, useState, useEffect } from 'react';
import Resource from '../../../../../Core/Components/Resource';
import DataList from '../../../../../Core/Components/DataList';
import * as constants from './../constants';
import ToolBar from '../../../../../Core/Components/ToolBar';

const ZipList = () => {
  return (
    <div id='main'>
      <ToolBar breadcrumbs={constants.BREADCRUMB_ZIP} toolbar={constants.TOOLBAR} />
      <Resource
        path={constants.API_ZIP}
        render={data => {
          if (data.loading) return <p> Loading zips ... </p>;
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

export default ZipList;
