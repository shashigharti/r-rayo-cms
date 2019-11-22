import React, { Component, useState, useEffect, useContext } from 'react';
import { ImageResource } from './../../CRUD';
import * as constants from '../constants';
import { apiService } from '../../..';

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const { selected, images } = this.props;
    const url = 'http://localhost:8000'; //was having problem because of extra /
    return (
      <>
        <div className="input-field col s6">
          <label>Search</label>
          <input type="text" name="name" onChange={e => this.props.filterImages(e.target.value)} />
        </div>
        <div id="images" className="clearfix tab--content">
          <div className="col s12">
            {images.length > 0 &&
              images.map(image => {
                return (
                  <div className="col s4" key={image.id}>
                    <div
                      className={
                        selected.includes(image.id.toString())
                          ? 'media-overlay media-image'
                          : 'media-image'
                      }
                    >
                      <img
                        data-id={image.id}
                        src={`${url}${image.file}`}
                        onClick={this.props.action}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Images;
