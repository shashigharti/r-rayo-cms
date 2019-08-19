import React, { Component } from 'react';
import { Button } from '../../components/Button';
import axios from 'axios';

class PageSettings extends Component {
  constructor(props) {
    super(props);
    // Get pageSettings from parent as props
    let pageSettings = props.values.values;
    this.state = {
      pageSettings,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log('mounted');

    // Fix text overlap with labels on pre-filled inputs
    M.updateTextFields();
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = this.state.pageSettings;

    axios
      .put('/api/settings/update/page_setting', formData)
      .then(response => {
        if (response.status === 200) {
          M.toast({ html: 'Successfully saved!' });
        }
      })
      .catch(e => {
        M.toast({ html: 'Failed to save. Try again!' });
      });
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevProps => ({
      pageSettings: {
        ...prevProps.pageSettings,
        [name]: value,
      },
    }));
  }

  render() {
    const { pageSettings } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="rp_from"
                name="rp_from"
                type="number"
                onChange={this.handleChange}
                value={pageSettings.rp_from}
              />
              <label htmlFor="rp_from">Regular Price From</label>
            </div>
            <div className="input-field col s6">
              <input
                id="rp_to"
                name="rp_to"
                type="number"
                onChange={this.handleChange}
                value={pageSettings.rp_to}
              />
              <label htmlFor="rp_to">Regular Price To</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="lp_from"
                name="lp_from"
                type="number"
                onChange={this.handleChange}
                value={pageSettings.lp_from}
              />
              <label htmlFor="lp_from">Luxury Price From</label>
            </div>
            <div className="input-field col s6">
              <input
                id="lp_to"
                name="lp_to"
                type="number"
                onChange={this.handleChange}
                value={pageSettings.lp_to}
              />
              <label htmlFor="lp_to">Luxury Price To</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="vn_luxury"
                name="vn_luxury"
                type="number"
                onChange={this.handleChange}
                value={pageSettings.vn_luxury}
              />
              <label htmlFor="vn_luxury">View Number Luxury</label>
            </div>
            <div className="input-field col s6">
              <input
                id="v_price"
                name="v_price"
                type="number"
                onChange={this.handleChange}
                value={pageSettings.v_price}
              />
              <label htmlFor="v_price">View Price</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="v_number"
                name="v_number"
                type="number"
                onChange={this.handleChange}
                value={pageSettings.v_number}
              />
              <label htmlFor="v_number">View Number</label>
            </div>
          </div>
          <div className="row">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </>
    );
  }
}

export { PageSettings };
