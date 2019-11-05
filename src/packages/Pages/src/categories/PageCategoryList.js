import React, { Component } from 'react';
import PageRow from '../PageRow';
import Resource from '../../../Core/Components/Resource';
import DataList from '../../../Core/Components/DataList';

const PageCategoryList = () => {
  return <Resource path='/api/page/all' render={data => {
    if (data.loading) return <p> Loading pages ... </p>
    if (data.payload.data != undefined) {
      return <DataList data={data.payload.data} component={PageRow} />
    }
    return <div>No Data Found</div>;
  }} />;
}
export default PageCategoryList;
