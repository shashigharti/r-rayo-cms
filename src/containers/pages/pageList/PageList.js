import React, { Component } from 'react';
import axios from 'axios';
import { Row } from './Row';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import Resource from '../../core/Resource';

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
        return data.payload.data.map(page =>
          <div key={page.id}>{page.name}</div>
        )
      }
      return <div>No Data Found</div>;
    }} />
  }
}

export { PageList };
