import React, { Component, useState } from 'react';
import Resource from '../../../Core/Components/Resource';
import DataList from '../../../Core/Components/DataList';
import * as constants from './../../constants';
import ToolBar from '../../../Core/Components/ToolBar';

const PageCategoryList = () => {
  return (
    <div id="main">
      <ToolBar
        breadcrumbs={constants.BREADCRUMB_PAGE_CATEGORIES}
        toolbar={constants.CATEGORIES_TOOLBAR}
      />
      <Resource
        path={constants.API_PAGE_CATEGORIES}
        render={data => {
          if (data.loading) return <p>Loading Page categories...</p>;
          if (data.payload.data != undefined) {
            return (
              <DataList
                data={data.payload.data}
                actions={constants.CATEGORIES_ACTIONS}
                columns={constants.CATEGORIES_COLUMNS}
              />
            );
          }
          return <div>No Data Found</div>;
        }}
      />
    </div>
  );
};
export default PageCategoryList;
