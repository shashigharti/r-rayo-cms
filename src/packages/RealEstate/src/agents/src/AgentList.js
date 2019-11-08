import React, { Component, useState } from 'react';
import Resource from '../../../../Core/Components/Resource';
import DataList from '../../../../Core/Components/DataList';
import AgentRow from './AgentRow';
import * as Constants from './../constants';
import ToolBar from '../../../../Core/Components/ToolBar';

const AgentList = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([
    {
      name: 'Home',
      subPath: '',
      path: '',
    },
    {
      name: 'Agents',
      subPath: 'agents',
      path: '/agents',
    },
  ]);

  return (
    <div id="main">
      <ToolBar breadcrumbs={breadcrumbs} />
      <Resource
        path={Constants.AGENTS_URI}
        render={data => {
          if (data.loading) return <p> Loading agents ... </p>;
          if (data.payload.data != undefined) {
            return <DataList data={data.payload.data} component={AgentRow} />;
          }
          return <div>No Data Found</div>;
        }}
      />
    </div>
  );
};

export default AgentList;
