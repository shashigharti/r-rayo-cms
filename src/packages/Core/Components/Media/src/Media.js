import React, { Component, useState, useEffect, useContext } from 'react';
import { apiService, alertService } from '../../../';
import * as constants from '../constants';
import Images from './Images';
import { string } from 'prop-types';

class Media extends Component {
  constructor(props) {
    super(props);
    this.intialState = {
      file: '',
      name: '',
      slug: '',
      selected: '',
      images: [],
      filteredImages: [],
    };
    this.state = {
      ...this.intialState,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getImages = this.getImages.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
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
    data.append('name', this.state.name);
    data.append('slug', this.state.slug);
    const response = apiService.store(constants.MEDIA_STORE, data);
    const process = alertService.store(response);
    process.then(status => {
      const input = document.getElementById('input-file-now');
      const input_file = document.getElementById('input-file-text');
      input.value = null;
      input_file.value = null;
      if (status == true) {
        this.setState({
          ...this.intialState,
        });
      }
    });
  };

  handleSelected = value => {
    this.setState({
      ...this.state,
      selected: value,
    });
  };

  getImages() {
    const response = apiService.getByUrl(constants.MEDIA_API);
    response.then(payload => {
      this.setState({
        ...this.state,
        images: payload.data,
        filteredImages: payload.data,
      });
    });
  }
  filterImages = value => {
    const { images } = this.state;
    let filteredImages = [];
    if (value === '') {
      filteredImages = images;
    } else {
      images.map(image => {
        const name = image.name.toLowerCase();
        console.log(name);
        if (name.search(value.toLowerCase()) !== -1) {
          filteredImages.push(image);
        }
      });
    }
    this.setState({
      filteredImages: filteredImages,
    });
  };
  render() {
    const { selected, filteredImages } = this.state;
    return (
      <>
        <div className="row" key={this.props.selected}>
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
                      <a href="#images" onClick={this.getImages}>
                        Images
                      </a>
                    </li>
                  </ul>
                </div>
                <div id="upload" className="clearfix tab--content">
                  <div className="input-field col s6">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={e => this.setFieldValue('name', e.target.value)}
                    />
                  </div>
                  <div className="input-field col s6">
                    <input
                      type="text"
                      name="slug"
                      value={this.state.slug}
                      onChange={e => this.setFieldValue('slug', e.target.value)}
                    />
                    <label>Slug</label>
                  </div>
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

                <Images
                  action={this.handleSelected}
                  selected={selected}
                  images={filteredImages}
                  filterImages={this.filterImages}
                />
              </div>
              <div className="modal-footer">
                <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat ">
                  Cancel
                </a>
                <a
                  href="#!"
                  className="modal-action modal-close waves-effect waves-green btn-flat "
                  onClick={e => {
                    e.preventDefault();
                    return this.props.callback(this.props.field, selected);
                  }}
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
