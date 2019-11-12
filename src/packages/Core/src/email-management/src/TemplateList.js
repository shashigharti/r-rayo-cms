import React, { useState } from 'react';
import Resource from '../../../Components/Resource';
import DataList from '../../../Components/DataList';
import * as constants from './../constants';
import ToolBar from '../../../Components/ToolBar';

const TemplateList = () => {
  return (
    <div id="main">
      <ToolBar breadcrumbs={constants.BREADCRUMB_TEMPLATES} toolbar={constants.TOOLBAR} />
      <Resource
        path={constants.API_TEMPLATES}
        render={data => {
          if (data.loading) return <p> Loading templates ... </p>;
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

export default TemplateList;
