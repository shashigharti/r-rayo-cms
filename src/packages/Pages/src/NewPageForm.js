import React, { useContext, useState } from 'react';
import { PageContext } from '..';

const NewPageForm = () => {
  const { dispatch } = useContext(PageContext);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [category_id, setCategoryId] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [meta_title, setMetaTitle] = useState('');
  const [meta_description, setMetaDescription] = useState('');
  const [meta_keywords, setMetaKeywords] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_PAGE', page: {
        name,
        slug,
        content,
        category_id,
        excerpt,
        meta_title,
        meta_description,
        meta_keywords
      }
    });
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
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="input-field col s6">
                        <input
                          type="text"
                          name="name"
                          value={slug}
                          onChange={(e) => setSlug(e.target.value)}
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
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
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
                          value={category_id}
                          onChange={(e) => setCategoryId(e.target.value)}
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
                          value={excerpt}
                          onChange={(e) => setExcerpt(e.target.value)}
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
                          value={meta_title}
                          onChange={(e) => setMetaTitle(e.target.value)}
                        />
                        <label>Meta Title</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s6">
                        <input
                          type="text"
                          name="meta_description"
                          value={meta_description}
                          onChange={(e) => setMetaDescription(e.target.value)}
                        />
                        <label>Meta Descriptions</label>
                      </div>
                      <div className="input-field col s6">
                        <input
                          type="text"
                          name="meta_keywords"
                          value={meta_keywords}
                          onChange={(e) => setMetaKeywords(e.target.value)}
                        />
                        <label>Meta Keywords</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12">
                        <div className="input-field">
                          <button className="btn gradient-45deg-purple-deep-orange">
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