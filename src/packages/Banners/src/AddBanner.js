import React, { useContext, useEffect, useState } from 'react';
import ToolBar from '../../Core/Components/ToolBar';
import * as constants from '../constants';
import { BannerContext } from '..';
import { apiService, alertService } from '../../Core';
import * as BannerTemplates from './../src/templates';
import { Redirect } from 'react-router-dom';
import { Media } from '../../Core/';

const BannerAdd = () => {
  const { dispatch: pdispatch } = useContext(BannerContext);
  const [toList, setToList] = useState(false);
  const [state, setState] = useState({
    name: '',
    slug: '',
    banner_template: 'FullScreenAd',
    area_types: '',
    sub_areas: [],
    property_count: '',
    header: '',
    content: '',
    order: '',
    button_text: '',
    button_url: '',
    prices: [],
    location: '',
    image: '',
    property_counts: [],
  });

  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    pdispatch({
      type: 'INIT',
      default: {
        all: [],
        current_page: state,
      },
    });
  }, []);

  useEffect(() => {
    M.updateTextFields();
  });
  const handleSubmit = e => {
    event.preventDefault();
    const response = apiService.store(constants.API_BANNER_STORE, state);
    const process = alertService.store(response);
    process.then(status => {
      if (status === true) {
        pdispatch({ type: 'RESET' });
        setTimeout(() => setToList(true), 500);
      }
    });
  };

  const renderSelectedTemplate = selectedTemplate => {
    const BannerTemplate = BannerTemplates[selectedTemplate];
    console.log(BannerTemplate);
    return <BannerTemplate setFieldValue={setFieldValue} state={state} />;
  };

  const setFieldValue = (field, value) => {
    setState({
      ...state,
      [field]: value,
    });
    pdispatch({ type: 'SET_FIELD', current_page: { field, value } });
  };

  return (
    <>
      {toList ? <Redirect to={constants.BANNER} /> : null}
      <div id="main">
        <ToolBar breadcrumbs={constants.BREADCRUMB_BANNER_CREATE} toolbar={constants.TOOLBAR} />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col s12">
              <div className="container-fluid edit--page">
                <div className="row">
                  <div className="col s12">
                    <ul className="tabs">
                      <li className="tab">
                        <a className="active" href="#pages">
                          Banners
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col s12">
                    <div className="panel card tab--content">
                      <div id="pages" className="col s12">
                        <div className="row">
                          <div className="input-field col s6">
                            <label>Name</label>
                            <input
                              type="text"
                              name="name"
                              value={state.name}
                              onChange={e => setFieldValue('name', e.target.value)}
                            />
                          </div>
                          <div className="input-field col s6">
                            <input
                              type="text"
                              name="slug"
                              value={state.slug}
                              onChange={e => setFieldValue('slug', e.target.value)}
                            />
                            <label>Slug</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <label>Templates</label>
                            <select
                              defaultValue={state.banner_template}
                              name="banner_template"
                              onChange={e => setFieldValue('banner_template', e.target.value)}
                            >
                              <option value="" disabled>
                                Choose your option
                              </option>
                              <option value="TwoColumnAd">Two Column Ad</option>
                              <option value="FullScreenAd">Full Screen Ad</option>
                              <option value="Slider">Slider</option>
                              <option value="SingleColumnBlock">Single Column Block</option>
                              <option value="BannerSlider">Banner Slider</option>
                              <option value="MainBanner">Main Banner</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s6">
                            <label>Status</label>
                            <select
                              defaultValue={state.status}
                              name="status"
                              onChange={e => setFieldValue('status', e.target.value)}
                            >
                              <option value="" disabled>
                                Choose your option
                              </option>
                              <option value="0">Active</option>
                              <option value="1">Inactive</option>
                            </select>
                          </div>
                          <div className="input-field col s6">
                            <label>Order</label>
                            <input
                              type="text"
                              name="order"
                              value={state.order}
                              onChange={e => setFieldValue('order', e.target.value)}
                            />
                          </div>
                        </div>
                        {renderSelectedTemplate(state.banner_template)}
                        <Media selected={state.image} callback={setFieldValue} field="image" />
                        <div className="row">
                          <div className="col s12">
                            <div className="input-field">
                              <button
                                type="submit"
                                className="btn gradient-45deg-purple-deep-orange"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BannerAdd;
