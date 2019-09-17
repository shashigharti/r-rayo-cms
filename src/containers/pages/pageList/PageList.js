import React, { Component } from 'react';
import axios from 'axios';
import { Row } from './Row';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

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
    this.getPages(null, null);
    this.deletePage = this.deletePage.bind(this);
  }

  getPages(link, type) {
    this.setState({
      loading: true,
    });
    let url = '';
    if (link) {
      url = link;
    } else {
      url = '/api/page/all';
    }
    this.fetchRequest(url);
  }

  fetchRequest(url) {
    axios.get(url).then(response => {
      this.setState({
        loading: false,
        pages: response.data.data,
        pagination: {
          links: response.data.links,
          meta: response.data.meta,
        },
      });
    });
  }

  deletePage(id) {
    const url = `/api/page/delete/${id}`;
    axios.delete(url).then(response => {
      M.toast({ html: 'Successfully Deleted' });
      this.getPages();
    });
  }
  render() {
    const { pages, loading } = this.state;
    const { links, meta } = this.state.pagination;
    const pageRow =
      pages.length > 0 &&
      pages.map(page => (
        <Row
          sn={page.id}
          key={page.id}
          id={page.id}
          name={page.name}
          slug={page.slug}
          onDelete={this.deletePage}
        />
      ));
    return (
      <>
        <div id="main">
          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                {loading && (
                  <div className="progress purple">
                    <div className="indeterminate purple lighten-5" />
                  </div>
                )}
                <div className="row breadcrumbs-inline" id="breadcrumbs-wrapper">
                  <div className="col s10 m6 l6 breadcrumbs-left">
                    <ol className="breadcrumbs mb-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <Link to="/pages">Pages</Link>
                      </li>
                    </ol>
                  </div>
                  <div className="col s2 m6 l6 right--button">
                    <Link
                      className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                      to="/page-add"
                    >
                      <i className="material-icons">add</i>
                    </Link>
                    <a
                      className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                      href="#!"
                    >
                      <i className="material-icons">file_upload</i>
                    </a>
                    <a
                      className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                      href="#!"
                    >
                      <i className="material-icons">file_download</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="card">
                  <div className="card-content">
                    <table className="table data-table">
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Name</th>
                          <th>Excerpt</th>
                          <th className="text-nowrap center-align">Action</th>
                        </tr>
                      </thead>
                      <tbody>{pageRow}</tbody>
                    </table>
                  </div>
                </div>
                <div className="right-align pagination--top">
                  <ul className="pagination theme--pagination right">
                    <li>
                      <a
                        href="#"
                        onClick={() => {
                          this.getPages(links.prev);
                        }}
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">«</span>
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">{meta.current_page}</a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => {
                          this.getPages(links.next);
                        }}
                        aria-label="Next"
                      >
                        <span aria-hidden="true">»</span>
                      </a>
                    </li>
                  </ul>
                  <button className="btn btn-sm disabled">Total Pages: {meta.total} </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { PageList };
