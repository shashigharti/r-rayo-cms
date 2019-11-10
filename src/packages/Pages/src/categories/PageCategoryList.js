import React, { Component, useState } from 'react';
import Resource from '../../../Core/Components/Resource';
import DataList from '../../../Core/Components/DataList';
import * as Constants from './../../constants';
import PageCategoryRow from './PageCategoryRow';
import ToolBar from '../../../Core/Components/ToolBar';

const PageCategoryList = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([
    {
      name: 'Home',
      subPath: '',
      path: '',
    },
    {
      name: 'Pages categories',
      subPath: 'pages-categories',
      path: '/page/categories',
    },
  ]);
  return (
    <div id="main">
      <ToolBar breadcrumbs={breadcrumbs} />
      <Resource
        path={Constants.API_PAGE_CATEGORY}
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
