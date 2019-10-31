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
    this.deletePage = this.deletePage.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
    this.getPages(null, null);
    console.log(this.state);
  }

  // getPages(link, type) {
  //   this.setState({
  //     loading: true,
  //   });
  //   let url = '';
  //   if (link) {
  //     url = link;
  //   } else {
  //     url = '/api/page/all';
  //   }
  //   this.fetchRequest(url);
  // }

  // fetchRequest(url) {
  //   axios.get(url).then(response => {
  //     this.setState({
  //       loading: false,
  //       pages: response.data.data,
  //       pagination: {
  //         links: response.data.links,
  //         meta: response.data.meta,
  //       },
  //     });
  //   });
  // }

  // deletePage(id) {
  //   const url = `/api/page/delete/${id}`;
  //   axios.delete(url).then(response => {
  //     M.toast({ html: 'Successfully Deleted' });
  //     this.getPages();
  //   });
  // }
  render() {
    <Resource path='/api/page/all' render={data => {
      if (data.loading) return <p> Loading pages ... </p>
      return data.payload.map(page => <div>{page.id}</div>)
    }} />
    // const { pages, loading } = this.state;
    // const { links, meta } = this.state.pagination;
    // const pageRow =
    //   pages.length > 0 &&
    //   pages.map(page => (
    //     <Row
    //       sn={page.id}
    //       key={page.id}
    //       id={page.id}
    //       name={page.name}
    //       slug={page.slug}
    //       onDelete={this.deletePage}
    //     />
    //   ));
  }
}

export { PageList };
