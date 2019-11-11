import React, { useContext, useEffect } from 'react';
import { PageContext } from '..';

const NewPageForm = () => {
  const { pages, dispatch } = useContext(PageContext);
  useEffect(() => {
    console.log(pages)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD', page: state.current_page
    });
  }

  const setFieldValue = (field, value) => {
    dispatch({ type: 'SET_FIELD', current_page: { field, value } })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col s12">
          <div className="container-fluid">
            <div className="row">
              <div className="col s12">
                <ul className="tabs">
                  <li className="tab">
                    <a className="active" href="#pages">
                      Pages
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col s12">
                <div className="panel card tab--content">
                  <div id="pages" className="col s12">
                    <div className="row">
                      <div className="input-field col s6">
                        <label>Page Name</label>
                        <input
                          type="text"
                          name="name"
                          value={state.pages.current_page.name}
                          onChange={(e) => setFieldValue('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="input-field col s6">
                        <input
                          type="text"
                          name="name"
                          value={state.pages.current_page.slug}
                          onChange={(e) => setFieldValue('slug', e.target.value)}
                          required
                        />
                        <label>Slug</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea
                          name="content"
                          className="materialize-textarea"
                          value={state.pages.current_page.content}
                          onChange={(e) => setFieldValue('content', e.target.value)}
                          required
                        />
                        <label htmlFor="content">Content</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s6">
                        <select
                          className=""
                          name="category_id"
                          value={state.pages.current_page.category_id}
                          onChange={(e) => setFieldValue('category_id', e.target.value)}
                          required
                        >
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
                        <input
                          type="text"
                          name="excerpt"
                          value={state.pages.current_page.excerpt}
                          onChange={(e) => setFieldValue('excerpt', e.target.value)}
                        />
                        <label>Excerpt</label>
                      </div>
                    </div>
                    {/* {status && <Media id={this.callback} thumbnail={page.thumbnail} />} */}
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          type="text"
                          name="meta_title"
                          value={state.pages.current_page.meta_title}
                          onChange={(e) => setFieldValue('meta_title', e.target.value)}
                        />
                        <label>Meta Title</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s6">
                        <input
                          type="text"
                          name="meta_description"
                          value={state.pages.current_page.meta_description}
                          onChange={(e) => setFieldValue('meta_description', e.target.value)}
                        />
                        <label>Meta Descriptions</label>
                      </div>
                      <div className="input-field col s6">
                        <input
                          type="text"
                          name="meta_keywords"
                          value={state.pages.current_page.meta_keywords}
                          onChange={(e) => setFieldValue('meta_keywords', e.target.value)}
                        />
                        <label>Meta Keywords</label>
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
  );
}

export default NewPageForm;