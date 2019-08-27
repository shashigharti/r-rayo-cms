import React, { Component } from 'react';
import Header from '../generic/Header';
import { PageSettings } from './PageSettings';
import { FrontPageSettings } from './FrontPageSettings';
import axios from 'axios';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        page_setting: {},
      },
    };
  }

  componentDidMount() {
    axios.get('/api/settings/all').then(response => {
      this.setState({
        settings: response.data.data,
      });
    });
    console.log('mounted');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Init materialize on update
    M.AutoInit();
  }

  render() {
    const { page_setting } = this.state.settings;
    return (
      <>
        <Header />
        <div id="main">
          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="card">
                  <div className="card-content">
                    <div className="row">
                      <div className="col s12 mb-3">
                        <ul className="tabs">
                          <li className="tab col s3">
                            <a href="#test1">General</a>
                          </li>
                          <li className="tab col s3">
                            <a href="#priceDiv">Price</a>
                          </li>
                          <li className="tab col s3">
                            <a className="active" href="#frontPageDiv">
                              Frontpage
                            </a>
                          </li>
                          <li className="tab col s3">
                            <a href="#test3">Agent</a>
                          </li>
                          <li className="tab col s3">
                            <a href="#test4">Users</a>
                          </li>
                        </ul>
                      </div>
                      <div id="test1" className="col s12">
                        General Settings
                      </div>
                      <div id="priceDiv" className="col s12">
                        {/* Render only when page-setting is fetched from API */}
                        {Object.keys(page_setting).length > 0 && (
                          <PageSettings values={page_setting} />
                        )}
                      </div>
                      <div id="frontPageDiv" className="col s12">
                        <FrontPageSettings />
                      </div>
                      <div id="test3" className="col s12">
                        Agent Settings
                      </div>
                      <div id="test4" className="col s12">
                        Users
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

export { Settings };
