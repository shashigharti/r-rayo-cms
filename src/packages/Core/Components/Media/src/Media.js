import React, { Component, useState, useEffect, useContext } from 'react';
import { apiService, alertService } from '../../../';
import * as constants from '../constants';
import Images from './Images';

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      title: '',
      content: '',
      selected: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      selected: this.props.selected,
    });
  }

  setFieldValue = (field, value) => {
    this.setState({
      ...this.state,
      [field]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let data = new FormData();
    data.append('file', this.state.file);
    const response = apiService.store(constants.MEDIA_STORE, data);
    const process = alertService.store(response);
  };

  handleSelected = e => {
    const value = e.target.getAttribute('data-id');
    let { selected } = this.state;
    if (selected.includes(value)) {
      selected = selected.filter(e => e !== value);
    } else {
      selected.push(value);
    }
    this.setState({
      ...this.state,
      selected: selected,
    });
  };

  render() {
    const { selected } = this.state;
    return (
      <>
        <div className="row">
          <div className="col s12">
            <label>Thumbnail</label>
            <br />
            <a
              className="waves-effect gradient-45deg-purple-deep-orange waves-light btn modal-trigger"
              href="#modal1"
            >
              Add Image
            </a>
            <div id="modal1" className="modal modal-fixed-footer">
              <div className="modal-content">
                <h5>Media Manager</h5>
                <div className="col s12">
                  <ul className="tabs">
                    <li className="tab">
                      <a className="active" href="#upload">
                        Uploads
                      </a>
                    </li>
                    <li className="tab">
                      <a href="#images">Images</a>
                    </li>
                  </ul>
                </div>
                <div id="upload" className="clearfix tab--content">
                  {/* <div className="input-field col s6">
                    <label>Title</label>
                    <input
                      type="text"
                      name="title"
                      value={this.state.title}
                      onChange={e => this.setFieldValue('title', e.target.value)}
                    />
                  </div>
                  <div className="input-field col s12">
                    <input
                      type="text"
                      name="content"
                      value={this.state.content}
                      onChange={e => this.setFieldValue('content', e.target.value)}
                    />
                    <label>Content</label>
                  </div> */}
                  <div className="col s12">
                    <div className="file-field input-field">
                      <div className="btn">
                        <span>File</span>
                        <input
                          type="file"
                          id="input-file-now"
                          className="dropify"
                          data-default-file=""
                          onChange={e => this.setFieldValue('file', e.target.files[0])}
                        />
                      </div>
                      <div className="file-path-wrapper">
                        <input className="file-path validate" id="input-file-text" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="col s12">
                    <button
                      type="submit"
                      className="btn gradient-45deg-purple-deep-orange"
                      onClick={this.handleSubmit}
                    >
                      Upload
                    </button>
                  </div>
                </div>

                <Images action={this.props.callback} selected={selected} />
              </div>
              <div className="modal-footer">
                <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat ">
                  Cancel
                </a>
                <a
                  href="#!"
                  className="modal-action modal-close waves-effect waves-green btn-flat "
                  onClick={this.handleApply}
                >
                  Apply
                </a>
              </div>
            </div>
          </div>
          <div className="col s4"></div>
        </div>
      </>
    );
  }
}

export default Media;
