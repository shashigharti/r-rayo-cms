import React, { Component, useState } from 'react';
import Resource from '../../core/Resource';
import DataList from '../../core/DataList';
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

export { PageList };
