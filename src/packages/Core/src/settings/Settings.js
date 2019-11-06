import React from 'react';
import PriceSettings from './PriceSettings';
import FrontPageSettings from './FrontPageSettings';
import LinkSettings from './LinkSettings';
import SearchSettings from './SearchSettings';
import GeneralSettings from './GeneralSettings';
import SiteSettings from './SiteSettings';

const Settings = () => {
  return (
    <div id="main">
      <div className="row">
        <div className="col s12">
          <div className="container-fluid">
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div className="col s12 mb-3">
                    <ul className="tabs">
                      <li className="tab col s2">
                        <a href="#test1">General</a>
                      </li>
                      <li className="tab col s2">
                        <a href="#site">Site</a>
                      </li>
                      <li className="tab col s2">
                        <a href="#priceDiv">Price</a>
                      </li>
                      <li className="tab col s2">
                        <a href="#frontPageDiv">Frontpage</a>
                      </li>
                      <li className="tab col s2">
                        <a href="#linkDiv">Link</a>
                      </li>
                      <li className="tab col s2">
                        <a className="active" href="#searchDiv">
                          Search
                          </a>
                      </li>
                      <li className="tab col s2">
                        <a href="#test3">Agent</a>
                      </li>
                      <li className="tab col s3">
                        <a href="#test4">Users</a>
                      </li>
                    </ul>
                  </div>
                  <div id="test1" className="col s12">
                    <GeneralSettings />
                  </div>
                  <div id="site" className="col s12">
                    <SiteSettings />
                  </div>
                  <div id="priceDiv" className="col s12 scale-transition">
                    <PriceSettings />
                  </div>
                  <div id="frontPageDiv" className="col s12">
                    <FrontPageSettings />
                  </div>
                  <div id="linkDiv" className="col s12">
                    <LinkSettings />
                  </div>
                  <div id="searchDiv" className="col s12">
                    <SearchSettings />
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
  );
};

export default Settings;
