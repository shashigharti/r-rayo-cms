import React, { Component } from 'react';
import axios from 'axios';
import { Button } from '../Button';
import './media.css';

class Media extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      uploading: false,
      file: null,
      medias: {},
      loaded: false,
      selected: null,
      thumbnail: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.getThumbnail = this.getThumbnail.bind(this);
  }
  componentDidMount() {
    const thumbnail = this.props.thumbnail;
    if (thumbnail !== null && thumbnail !== '') {
      this.getThumbnail();
    }
    this.getImages();
  }

  getImages() {
    const url = '/api/images/all';
    axios.get(url).then(response => {
      this.setState({
        medias: response.data,
        loaded: true,
      });
    });
  }
  getThumbnail(id) {
    const url = '/api/media/' + this.props.thumbnail;
    axios.get(url).then(res => {
      this.setState({ thumbnail: res.data });
    });
  }
  handleChange(event) {
    const file = event.target.files[0];
    this.setState({
      file: file,
      loaded: true,
    });
  }
  handleApply() {
    this.props.id(this.state.selected);
  }
  onCancel() {
    this.setState({
      selected: null,
    });
    this.props.id(this.state.selected);
  }
  uploadFile() {
    const loaded = this.state.loaded;
    const input = document.getElementById('input-file-now');
    if (loaded) {
      const data = new FormData();
      data.append('file', this.state.file);
      const { medias } = this.state;
      axios.post('/api/upload', data).then(res => {
        const data = res.data;
        data.forEach(function(item, index) {
          medias.push(item);
        });
        this.setState({ medias: medias, file: null, loaded: false });
        input.value = null;
      });
    }
  }
  handleClick(event) {
    const id = event.target.getAttribute('data-id');
    this.setState({
      selected: id,
    });
  }
  render() {
    const url = 'http://localhost:8000';
    const { medias, selected, thumbnail } = this.state;
    const showMedia =
      medias.length > 0 &&
      medias.map(media => {
        return (
          <div className="col s4" key={media.id}>
            <div className={selected === media.id ? 'overlay media-image' : 'media-image'}>
              <img
                data-id={media.id}
                onClick={this.handleClick}
                src={`${url}/uploads/${media.id}/${media.file}`}
              />
            </div>
          </div>
        );
      });
    return (
      <div className="row">
        <div className="col s12">
          <label>Thumbnail</label>
          <br/>
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
                <div className="col s12">
                  <div className="file-field input-field">
                    <div className="btn">
                      <span>File</span>
                      <input
                          type="file"
                          onChange={this.handleChange}
                          id="input-file-now"
                          className="dropify"
                          data-default-file=""
                      />
                    </div>
                    <div className="file-path-wrapper">
                      <input className="file-path validate" type="text" />
                    </div>
                  </div>
                </div>
                <div className="col s12">
                  <Button onClick={this.uploadFile} children="Upload" />
                </div>
              </div>

              <div id="images" className="clearfix tab--content">
                <div className="col s12">{showMedia}</div>
              </div>
            </div>
            <div className="modal-footer">
              <a
                href="#!"
                className="modal-action modal-close waves-effect waves-red btn-flat "
                onClick={this.onCancel}
              >
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
        <div className="col s4">
          {thumbnail && <img src={`${url}/uploads/${thumbnail.id}/${thumbnail.file}`}></img>}
        </div>
      </div>
    );
  }
}

export { Media };
