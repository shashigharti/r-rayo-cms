import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ToolBar from '../../Core/Components/ToolBar';
import * as constants from '../constants';
import { PageContext } from '..';
import { apiService, alertService } from '../../Core';

const PageAdd = () => {
  const { dispatch: pdispatch } = useContext(PageContext);
  const [toList, setToList] = useState(false);
  const [state, setState] = useState({
    name: '',
    slug: '',
    content: '',
    category_id: '',
    excerpt: '',
    meta_title: '',
    meta_description: '',
    meta_keywords: '',
  });

  useEffect(() => {
    M.AutoInit();
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

  useEffect(() => {
    M.updateTextFields();
  });

  const handleSubmit = e => {
    event.preventDefault();
    const response = apiService.store(constants.API_PAGE_STORE, state);
    const process = alertService.store(response);
    process.then(status => {
      if (status === true) {
        pdispatch({ type: 'RESET' });
        setTimeout(() => setToList(true), 500);
      }
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
    <>
      {toList ? <Redirect to={constants.PAGE} /> : null}
      <div id='main'>
        <ToolBar breadcrumbs={constants.BREADCRUMB_PAGE_EDIT} toolbar={constants.TOOLBAR} />
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col s12'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col s12'>
                    <ul className='tabs'>
                      <li className='tab'>
                        <a className='active' href='#pages'>
                          Pages
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='col s12'>
                    <div className='panel card tab--content'>
                      <div id='pages' className='col s12'>
                        <div className='row'>
                          <div className='input-field col s6'>
                            <label>Page Name</label>
                            <input
                              type='text'
                              name='name'
                              value={state.name}
                              onChange={e => setFieldValue('name', e.target.value)}
                            />
                          </div>
                          <div className='input-field col s6'>
                            <input
                              type='text'
                              name='slug'
                              value={state.slug}
                              onChange={e => setFieldValue('slug', e.target.value)}
                            />
                            <label>Slug</label>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='input-field col s12'>
                            <textarea
                              className='materialize-textarea'
                              name='content'
                              value={state.content}
                              onChange={e => setFieldValue('content', e.target.value)}
                            />
                            <label htmlFor='content'>Content</label>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='input-field col s6'>
                            <select
                              name='category_id'
                              defaultValue=''
                              onChange={e => setFieldValue('category_id', e.target.value)}
                            >
                              <option value='' disabled>
                                Choose your option
                              </option>
                              <option value='1'>News And Events</option>
                              <option value='2'>Publications</option>
                              <option value='3'>About Us</option>
                            </select>
                            <label>Category</label>
                          </div>
                          <div className='input-field col s6'>
                            <input
                              type='text'
                              name='excerpt'
                              value={state.excerpt}
                              onChange={e => setFieldValue('excerpt', e.target.value)}
                            />
                            <label>Excerpt</label>
                          </div>
                        </div>
                        {/* {status && <Media id={this.callback} thumbnail={page.thumbnail} />} */}
                        <div className='row'>
                          <div className='input-field col s12'>
                            <input
                              type='text'
                              name='meta_title'
                              value={state.meta_title}
                              onChange={e => setFieldValue('meta_title', e.target.value)}
                            />
                            <label>Meta Title</label>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='input-field col s6'>
                            <input
                              type='text'
                              name='meta_description'
                              value={state.meta_description}
                              onChange={e => setFieldValue('meta_description', e.target.value)}
                            />
                            <label>Meta Descriptions</label>
                          </div>
                          <div className='input-field col s6'>
                            <input
                              type='text'
                              name='meta_keywords'
                              value={state.meta_keywords}
                              onChange={e => setFieldValue('meta_keywords', e.target.value)}
                            />
                            <label>Meta Keywords</label>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col s12'>
                            <div className='input-field'>
                              <button
                                type='submit'
                                className='btn gradient-45deg-purple-deep-orange'
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

export default PageAdd;
