import React, { useContext, useEffect, useState } from 'react';
import ToolBar from '../../Core/Components/ToolBar';
import * as constants from '../constants';
import { BannerContext } from '..';
import { apiService, alertService } from '../../Core';
import { EditResource } from '../../Core/Components/CRUD';
import * as BannerTemplates from './../src/templates';
import { Redirect } from 'react-router-dom';

const EditBanner = props => {
  const { dispatch: pdispatch } = useContext(BannerContext);
  const [toList, setToList] = useState(false);
  const [state, setState] = useState({
    id: '',
    name: '',
    slug: '',
    banner_template: 'FullScreenAd',
    status: '',
    order: '',
    area_types: [],
    sub_areas: '',
    property_ids: [],
    header: '',
    content: '',
    button_text: '',
    button_url: '',
    prices: [],
    locations: [],
  });

  useEffect(() => {
    M.AutoInit();
  }, [state]);

  useEffect(() => {
    console.log(props);
    setState({
      id: props.payload.id || '',
      name: props.payload.name || '',
      slug: props.payload.slug || '',
      status: props.payload.status,
      order: props.payload.order,
      banner_template: props.payload.banner_template || 'FullScreenAd',
      area_types: props.payload.area_types,
      sub_areas: props.payload.sub_areas,
      property_ids: props.payload.property_ids,
      header: props.payload.header,
      content: props.payload.content,
      button_text: props.payload.button_text,
      button_url: props.payload.button_url,
      prices: props.payload.prices,
      locations: props.payload.locations,
    });
  }, [props]);

  useEffect(() => {
    M.updateTextFields();
  });
  const handleSubmit = e => {
    event.preventDefault();
    const { id } = state;
    const response = apiService.update(constants.API_BANNER_UPDATE + id, state);
    const process = alertService.update(response);
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
        <ToolBar breadcrumbs={constants.BREADCRUMB_BANNER_EDIT} toolbar={constants.TOOLBAR} />
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
                              required
                            />
                          </div>
                          <div className="input-field col s6">
                            <label>Slug</label>
                            <input
                              type="text"
                              name="slug"
                              value={state.slug}
                              onChange={e => setFieldValue('slug', e.target.value)}
                            />
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
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s6">
                            <label>Status</label>
                            <select
                              defaultValue={toString(state.status)}
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

export default EditResource(EditBanner, constants.API_BANNER_EDIT);
