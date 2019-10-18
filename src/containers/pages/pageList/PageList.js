import React, { Component } from 'react';
import { Row } from './Row';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { pageAction } from '../../../actions';

class PageList extends Component {
  constructor(props) {
    super(props);
    this.deletePage = this.deletePage.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
    this.getPages(null);
  }

  getPages(link) {
    let url = '';
    if (link) {
      url = link;
    } else {
      url = '/api/page/all';
    }
    this.props.dispatch(pageAction.getAll(url));
  }

  deletePage(id) {
    this.props.dispatch(pageAction.delete(id));
    this.getPages(null);
  }
  render() {
    const { pages } = this.props;
    const { data, loading, links, meta } = pages;
    const pageRow =
      data.length > 0 &&
      data.map(page => (
        <Row
          sn={page.id}
          key={page.id}
          id={page.id}
          name={page.name}
          slug={page.slug}
          onDelete={this.deletePage}
        />
      ));

    if (Object.keys(pages).length != 0) {
      return (
        <>
          <div id="main">
            <div className="row">
              <div className="col s12">
                <div className="container-fluid">
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
                      {loading && (
                        <div className="progress purple">
                          <div className="indeterminate purple lighten-5" />
                        </div>
                      )}
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
                    <span>Total Pages: {meta.total} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div></div>
        </>
      );
    }
  }
}

function mapStateToProps(state) {
  const { pages } = state;
  return {
    pages,
  };
}

const connectedPage = connect(mapStateToProps)(PageList);
export { connectedPage as PageList };
