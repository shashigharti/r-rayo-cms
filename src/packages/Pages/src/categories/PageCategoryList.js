import React, { Component } from 'react';
import Resource from '../../../Core/Components/Resource';
import DataList from '../../../Core/Components/DataList';
import * as Constants from './../../constants';
import PageCategoryRow from './PageCategoryRow';

const PageCategoryList = () => {
  return <Resource path={Constants.PAGE_CATEGORY_URI}
    render={data => {
      if (data.loading) return <p> Loading pages ... </p>
      if (data.payload.data != undefined) {
        return <DataList data={data.payload.data} component={PageCategoryRow} />
      }
      return <div>No Data Found</div>;
    }} />;
}
export default PageCategoryList;
