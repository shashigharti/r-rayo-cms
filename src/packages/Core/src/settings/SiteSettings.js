import React, { Component } from 'react';
import { Button } from '../../Components/Button';
import axios from 'axios';
import M from 'materialize-css';

const model = 'site';
class SiteSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [model]: {
        name: '',
        phone: '',
        action: '',
        footer_upper: '',
        realtor_info: '',
        footer_left: '',
        footer_right: '',
        terms_condition: '',
        footer_eula: '',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getDefaultSettings();
    M.AutoInit();
  }
  getDefaultSettings() {
    const url = '/api/settings/' + model;
    axios.get(url).then(response => {
      const data = response.data;
      console.log(data);
      if (data === 'null') {
        const url = '/api/settings/update/' + model;
        const data = this.state[model];
        axios.put(url, data).then(response => {
          this.getDefaultSettings();
        });
      } else {
        const data = response.data.data.values;
        this.setState({
          [model]: data,
        });
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const url = '/api/settings/update/' + model;
    const data = this.state[model];
    axios.put(url, data).then(response => {
      M.toast({ html: 'Successfully Updated' });
    });
  }
  handleChange() {
    const { name, value } = event.target;
    const data = this.state[model];
    this.setState({
      [model]: {
        ...data,
        [name]: value,
      },
    });
  }
  render() {
    const { site } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="mb-10">
          <div className="row">
            <div className="input-field col s6">
              <input type="text" value={site.name || ''} name="name" onChange={this.handleChange} />
              <label>Main Location Name</label>
            </div>
            <div className="input-field col s6">
              <input
                type="text"
                value={site.phone || ''}
                name="phone"
                onChange={this.handleChange}
              />
              <label>Phone Number</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                value={site.action || ''}
                name="action"
                onChange={this.handleChange}
              />
              <label>Homepage call to action</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                name="realtor_info"
                value={site.realtor_info || ''}
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
              <label>Realtor info</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                name="footer_left"
                value={site.footer_left || ''}
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
              <label>Footer's Text (Left)</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                name="footer_right"
                value={site.footer_right || ''}
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
              <label>Footer's Text (Right)</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                name="terms_condition"
                value={site.terms_condition || ''}
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
              <label>Terms and condition</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                name="footer_eula"
                value={site.footer_eula || ''}
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
              <label>Footer EULA</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <Button type="submit" className="purple btn">
                Save
              </Button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default SiteSettings;
