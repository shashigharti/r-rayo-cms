import React, { Component } from 'react';

import Header from '../generic/Header';
import SideMenu from '../../components/SideMenu';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { Button } from '../../components/Button';

import camerasImage from '../../../assets/images/cards/cameras.png';

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

// eslint-disable-next-line react/prefer-stateless-function
class PageEdit extends Component {
  render() {
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
                  <div className="col s12">
                    <div className="panel card tab--content">
                      <div id="pages" className="col s12">
                        <form>
                          <div className="row">
                            <div className="input-field col s6">
                              <input type="text" />
                              <label>Page Name</label>
                            </div>
                            <div className="input-field col s6">
                              <input type="text" />
                              <label>Slug</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <select defaultValue="">
                                <option value="" disabled>
                                  Choose your option
                                </option>
                                <option value="1">News And Events</option>
                                <option value="2">Publications</option>
                                <option value="3">About Us</option>
                              </select>
                              <label>Category</label>
                            </div>
                            <div className="input-field col s6">
                              <input type="text" />
                              <label>Slug</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col s12">
                              <label>Thumbnail</label>
                              <a
                                className="waves-effect gradient-45deg-purple-deep-orange waves-light btn modal-trigger"
                                href="#modal1"
                              >
                                Add Image
                              </a>
                              <div id="modal1" className="modal modal-fixed-footer">
                                <div className="modal-content">
                                  <h5>Media Manager</h5>
                                  <div className="col s12">
                                    <ul className="tabs">
                                      <li className="tab">
                                        <a className="active" href="#upload">
                                          Pages
                                        </a>
                                      </li>
                                      <li className="tab">
                                        <a href="#images">Downloads</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div id="upload" className="clearfix tab--content">
                                    <div className="col s12">
                                      <input
                                        type="file"
                                        id="input-file-now"
                                        className="dropify"
                                        data-default-file=""
                                      />
                                    </div>
                                  </div>
                                  <div id="images" className="clearfix tab--content">
                                    <div className="col s12">
                                      <div className="col s2">
                                        <div className="media-image">
                                          <img alt="cameras" src={camerasImage} />
                                        </div>
                                      </div>
                                      <div className="col s2">
                                        <div className="media-image">
                                          <img alt="cameras" src={camerasImage} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <a
                                    href="#!"
                                    className="modal-action modal-close waves-effect waves-red btn-flat "
                                  >
                                    Cancel
                                  </a>
                                  <a
                                    href="#!"
                                    className="modal-action modal-close waves-effect waves-green btn-flat "
                                  >
                                    Apply
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input type="text" />
                              <label>Meta Title</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input type="text" />
                              <label>Meta Descriptions</label>
                            </div>
                            <div className="input-field col s6">
                              <input type="text" />
                              <label>Meta Keywords</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col s12">
                              <Button>Save</Button>
                            </div>
                          </div>
                        </form>
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
        </div>
      </>
    );
  }
}

export { PageEdit };
