import React, { Component } from 'react';
import { Button } from '../../components/Button';
import axios from 'axios';

class PriceSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceSettings: {
        rp_from: 0,
        rp_to: 0,
        lp_from: 0,
        lp_to: 0,
        vn_luxury: 0,
        v_price: 0,
        v_number: 0,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Fix text overlap with labels on pre-filled inputs
    M.updateTextFields();

    axios
      .get('/api/settings/price_setting')
      .then(response => {
        this.setState({
          priceSettings: response.data.data.values,
        });
      })
      .catch(e => {
        console.log('Unavailable');
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = this.state.priceSettings;

    axios
      .put('/api/settings/update/price_setting', formData)
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
    this.setState(prevState => ({
      priceSettings: {
        ...prevState.priceSettings,
        [name]: value,
      },
    }));
    console.log(this.state);
  }

  render() {
    const { priceSettings } = this.state;
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
                value={priceSettings.rp_from}
              />
              <label htmlFor="rp_from">Regular Price From</label>
            </div>
            <div className="input-field col s6">
              <input
                id="rp_to"
                name="rp_to"
                type="number"
                onChange={this.handleChange}
                value={priceSettings.rp_to}
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
                value={priceSettings.lp_from}
              />
              <label htmlFor="lp_from">Luxury Price From</label>
            </div>
            <div className="input-field col s6">
              <input
                id="lp_to"
                name="lp_to"
                type="number"
                onChange={this.handleChange}
                value={priceSettings.lp_to}
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
                value={priceSettings.vn_luxury}
              />
              <label htmlFor="vn_luxury">View Number Luxury</label>
            </div>
            <div className="input-field col s6">
              <input
                id="v_price"
                name="v_price"
                type="number"
                onChange={this.handleChange}
                value={priceSettings.v_price}
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
                value={priceSettings.v_number}
              />
              <label htmlFor="v_number">View Number</label>
            </div>
          </div>
          <div className="row">
            <Button type="submit" className="purple btn">
              Save
            </Button>
          </div>
        </form>
      </>
    );
  }
}

export { PriceSettings };
