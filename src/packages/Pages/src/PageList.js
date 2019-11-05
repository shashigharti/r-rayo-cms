import React, { Component, useState } from 'react';
import Resource from '../../Core/libraries/Resource';
import DataList from '../../Core/partials/DataList';
import PageRow from './PageRow';


const PageList = () => {
  return (
    <Resource
      path="/api/pages"
      render={data => {
        if (data.loading) return <p> Loading pages ... </p>;
        if (data.payload.data != undefined) {
          return <DataList data={data.payload.data} component={PageRow} />;
        }
        return <div>No Data Found</div>;
      }}
    />
  );
};

export default PageList;