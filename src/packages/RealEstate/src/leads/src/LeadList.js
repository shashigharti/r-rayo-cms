import React, { Component, useState } from 'react';
import Resource from '../../../../Core/Components/Resource';
import DataList from '../../../../Core/Components/DataList';
import * as constants from './../constants';
import ToolBar from '../../../../Core/Components/ToolBar';

const LeadList = () => {
  return (
    <div id="main">
      <ToolBar breadcrumbs={constants.BREADCRUMB_LEAD} toolbar={constants.TOOLBAR} />
      <Resource
        path={constants.API_LEAD}
        render={data => {
          if (data.loading) return <p> Loading leads ... </p>;
          if (data.payload.data != undefined) {
            return (
              <DataList
                data={data.payload.data}
                action={constants.ACTIONS}
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

export default LeadList;
