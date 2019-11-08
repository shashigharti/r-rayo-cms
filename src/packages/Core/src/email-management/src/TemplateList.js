import React, { useState } from 'react';
import Resource from '../../../Components/Resource';
import DataList from '../../../Components/DataList';
import * as Constants from './../constants';
import ToolBar from '../../../Components/ToolBar';
import TemplateRow from './TemplateRow';

const TemplateList = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([
    {
      name: 'Home',
      subPath: '',
      path: '',
    },
    {
      name: 'Email templates',
      subPath: 'templates',
      path: '/templates',
    },
  ]);
  return (
    <div id="main">
      <ToolBar breadcrumbs={breadcrumbs} />
      <Resource
        path={Constants.TEMPLATES_URI}
        render={data => {
          if (data.loading) return <p> Loading templates ... </p>;
          if (data.payload.data != undefined) {
            return <DataList data={data.payload.data} component={TemplateRow} />;
          }
          return <div>No Data Found</div>;
        }}
      />
    </div>
  );
};

export default TemplateList;
