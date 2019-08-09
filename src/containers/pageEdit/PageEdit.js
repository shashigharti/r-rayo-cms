import React, { Component } from 'react';

import Axios from 'axios';
import M from 'materialize-css';
import Header from '../generic/Header';
import SideMenu from '../../components/SideMenu';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import Form from './form';

const crumbs = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Pages',
    subPath: 'pages',
    path: 'page-list',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: 'page-edit',
  },
];

class PageEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getPage(id) {
    Axios.get(`/api/page/edit/${id}`).then(({ data }) => {
      const page = data.data;
      const EditForm = <Form {...page} onSubmit={this.onSubmit} onChange={this.onChange} />;
      this.setState({ EditForm, page });
    });
  }

  onChange = event => {
    const { name, value } = event.target;
    const { page } = this.state;
    this.setState({
      page: {
        ...page,
        [name]: value,
      },
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { page } = this.state;
    Axios.put(`/api/page/update/${page.id}`, { ...page })
      .then(res => {
        const { message } = res.data;
        M.toast({ html: message });
      })
      .catch(err => {
        M.toast({ html: err });
      });
  };

  componentDidMount() {
    const { location } = this.props;
    const { state } = location;
    const { id } = state;
    this.getPage(id);
  }

  render() {
    const { EditForm } = this.state;
    return (
      <>
        <Header />
        <SideMenu />

        <div id="main">
          <div className="row">
            <div className="col s12">
              <div className="container">
                <div className="row breadcrumbs-inline" id="breadcrumbs-wrapper">
                  <div className="col s10 m6 l6 breadcrumbs-left">
                    <h5 className="breadcrumbs-title mt-0 mb-0 display-inline hide-on-small-and-down">
                      Menus
                    </h5>
                    <BreadCrumbs rootPath="" crumbs={crumbs} />
                  </div>
                  <div className="col s12">
                    <div className="panel card tab--content">
                      <div id="pages" className="col s12">
                        {EditForm}
                      </div>
                      <div id="downloads" className="col s12">
                        Test 2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="container">
                <div className="row">
                  <div className="col s12">
                    <ul className="tabs">
                      <li className="tab">
                        <a className="active" href="#pages">
                          Pages
                        </a>
                      </li>
                      <li className="tab">
                        <a href="#downloads">Downloads</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { PageEdit };
