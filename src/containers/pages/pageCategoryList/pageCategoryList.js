import React, { Component } from 'react';
import M from 'materialize-css';
import Resource from '../../core/Resource';
import DataList from '../../core/DataList';
import PageCategoryRow from '../../core/PageCategoryRow';

class PageCategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagesCategories: {},
      loading: false,
      pagination: {
        links: {},
        meta: {},
      },
    };
  }

  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <Resource
        path="api/page-categories"
        render={data => {
          if (data.loading) return <p> Loading page categories ... </p>;
          if (data.payload.data != undefined) {
            return <DataList data={data.payload.data} component={PageCategoryRow} />;
          }
          return <div>No Data Found</div>;
        }}
      />
    );
  }
}

export { PageCategoryList };
