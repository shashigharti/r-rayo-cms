import React, { Component } from 'react';
import M from 'materialize-css';
import Resource from '../../core/Resource';
import DataList from '../../core/DataList';
import PageRow from '../../core/PageRow';

class PageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: {},
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
    return <Resource path='/api/page/all' render={data => {
      if (data.loading) return <p> Loading pages ... </p>
      if (data.payload.data != undefined) {
        return <DataList data={data.payload.data} component={PageRow} />
      }
      return <div>No Data Found</div>;
    }} />
  }
}

export { PageList };
