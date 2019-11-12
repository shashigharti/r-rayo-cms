import React, { useState, useEffect } from 'react';
import Resource from '../../Core/Components/Resource';
import DataList from '../../Core/Components/DataList';
import * as constants from '../constants';
import ToolBar from '../../Core/Components/ToolBar';

const PageList = () => {
  return (
    <div id="main">
      <ToolBar breadcrumbs={constants.BREADCRUMB_PAGE} toolbar={constants.TOOLBAR} />
      <Resource
        path={constants.API_PAGE}
        render={data => {
          if (data.loading) return <p> Loading pages ... </p>;
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

export default PageList;
