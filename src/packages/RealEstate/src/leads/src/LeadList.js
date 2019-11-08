import React, { Component, useState } from 'react';
import Resource from '../../../../Core/Components/Resource';
import DataList from './DataList';
import LeadRow from './LeadRow';
import * as Constants from './../constants';
import ToolBar from '../../../../Core/Components/ToolBar';

const LeadList = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([
    {
      name: 'Home',
      subPath: '',
      path: '',
    },
    {
      name: 'Leads',
      subPath: 'leads',
      path: '/leads',
    },
  ]);

  return (
    <div id="main">
      <ToolBar breadcrumbs={breadcrumbs} />
      <Resource
        path={Constants.LEADS_URI}
        render={data => {
          if (data.loading) return <p> Loading leads ... </p>;
          if (data.payload.data != undefined) {
            return <DataList data={data.payload.data} component={LeadRow} />;
          }
          return <div>No Data Found</div>;
        }}
      />
    </div>
  );
};

export default LeadList;
