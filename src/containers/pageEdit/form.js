import React from 'react';
import { Button } from '../../components/Button';

const Form = ({ name, slug, category_id, content, excerpt, status, onSubmit, onChange }) => (
  <form>
    <div className="row">
      <div className="input-field col s6">
        <input onChange={onChange} type="text" id="name" name="name" defaultValue={name} />
        <label htmlFor="name"> Page </label>
      </div>
      <div className="input-field col s6">
        <input type="text" onChange={onChange} id="slug" name="slug" defaultValue={slug} />
        <label htmlFor="slug">Slug</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s6">
        <select id="category" onChange={onChange} name="category_id" defaultValue={category_id}>
          <option value="" disabled>
            Choose your option
          </option>
          <option value="1">News And Events</option>
          <option value="2">Publications</option>
          <option value="3">About Us</option>
        </select>
        <label htmlFor="category">Category</label>
      </div>

      <div className="input-field col s6">
        <select id="status" onChange={onChange} name="status" defaultValue={status}>
          <option value="" disabled>
            Choose your option
          </option>
          <option value="1">Active</option>
          <option value="2">Inactive</option>
        </select>
        <label htmlFor="status">Status</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input type="text" onChange={onChange} id="excerpt" name="excerpt" defaultValue={excerpt} />
      </div>
      <label htmlFor="excerpt"> Excerpt </label>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <textarea
          onChange={onChange}
          className="textarea"
          type="text"
          id="content"
          name="content"
          defaultValue={content}
        />
      </div>
      <label htmlFor="content"> Content </label>
    </div>
    <div className="row">
      <div className="input-field col">
        <Button type="submit" onClick={onSubmit} customClasses="col s12">
          Submit
        </Button>
      </div>
    </div>
  </form>
);

export default Form;
