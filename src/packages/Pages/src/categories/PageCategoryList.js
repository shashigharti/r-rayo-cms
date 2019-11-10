import React, { Component, useState } from 'react';
import Resource from '../../../Core/Components/Resource';
import DataList from '../../../Core/Components/DataList';
import * as constants from './../../constants';
import PageCategoryRow from './PageCategoryRow';
import ToolBar from '../../../Core/Components/ToolBar';

const PageCategoryList = () => {
  return (
    <div id="main">
      <ToolBar breadcrumbs={constants.BREADCRUMB_PAGE} />
      <Resource
        path={constants.API_PAGE_CATEGORY}
        render={data => {
          if (data.loading) return <p>Loading Page categories...</p>;
          if (data.payload.data != undefined) {
            return <DataList data={data.payload.data} component={PageCategoryRow} />;
          }
          return <div>No Data Found</div>;
        }}
      />
    </div>
  );
};
export default PageCategoryList;
