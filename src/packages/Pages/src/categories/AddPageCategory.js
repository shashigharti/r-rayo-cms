import React, { useContext, useEffect, useState } from 'react';
import ToolBar from '../../../Core/Components/ToolBar';
import * as constants from './../../constants';
import { PageCategoryContext } from '../../';
import { apiService } from '../../../Core';

const PageCategoryAdd = () => {
  const { dispatch: pdispatch } = useContext(PageCategoryContext);
  const [state, setState] = useState({
    name: '',
    slug: '',
    description: '',
  });

  useEffect(() => {
    M.AutoInit();
    pdispatch({
      type: 'INIT',
      default: {
        all: [],
        current_page: state,
      },
    });
  }, []);

  const handleSubmit = e => {
    event.preventDefault();
    console.log(constants);
    let response = apiService.store(constants.API_PAGE_CATEGORIES_STORE, state);
    response.then(response => {
      console.log('success', response);
    });
    response.catch(err => {
      console.log('error', err);
    });
  };

  const setFieldValue = (field, value) => {
    setState({
      ...state,
      [field]: value,
    });
    pdispatch({ type: 'SET_FIELD', current_page: { field, value } });
  };

  return (
    <div id="main">
      <ToolBar
        breadcrumbs={constants.BREADCRUMB_PAGE_CATEGORIES_EDIT}
        toolbar={constants.CATEGORIES_TOOLBAR}
      />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col s12">
            <div className="container-fluid">
              <div className="row">
                <div className="col s12">
                  <ul className="tabs">
                    <li className="tab">
                      <a className="active" href="#pages">
                        Page Category
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col s12">
                  <div className="panel card tab--content">
                    <div id="pages" className="col s12">
                      <div className="row">
                        <div className="input-field col s6">
                          <label>Category Name</label>
                          <input
                            type="text"
                            name="name"
                            value={state.name}
                            onChange={e => setFieldValue('name', e.target.value)}
                            required
                          />
                        </div>
                        <div className="input-field col s6">
                          <input
                            type="text"
                            name="slug"
                            value={state.slug}
                            onChange={e => setFieldValue('slug', e.target.value)}
                            required
                          />
                          <label>Slug</label>
                        </div>
                      </div>

                      {/* {status && <Media id={this.callback} thumbnail={page.thumbnail} />} */}
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            type="text"
                            name="description"
                            value={state.meta_title}
                            onChange={e => setFieldValue('description', e.target.value)}
                          />
                          <label>Description</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12">
                          <div className="input-field">
                            <button type="submit" className="btn gradient-45deg-purple-deep-orange">
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
  );
};

export default PageCategoryAdd;
