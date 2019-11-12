import React, { useContext, useEffect, useState } from 'react';
import ToolBar from '../../../Core/Components/ToolBar';
import * as constants from './../../constants';
import { CategoryContext } from '../../';
import { apiService } from '../../../Core';

const AddPageCategory = () => {
  const { dispatch: pdispatch } = useContext(CategoryContext);
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
    let response = apiService.store(constants.API_PAGE_CATEGORIES_STORE, state);
    response.then(response => {
      console.log('success', response);
      M.toast({ 'html': 'Successfully Added' });
    });
    response.catch(err => {
      console.log('error', err);
      M.toast({ 'html': 'Something went wrong !' });
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
                        Page Categories
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
                      <div className="row">
                        <div className="input-field col s12">
                          <textarea
                            className="materialize-textarea"
                            name="content"
                            value={state.description}
                            onChange={e => setFieldValue('description', e.target.value)}
                            required
                          />
                          <label htmlFor="content">Descriptions</label>
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

export default AddPageCategory;
