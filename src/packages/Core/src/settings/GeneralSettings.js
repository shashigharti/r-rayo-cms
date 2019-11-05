import React, { Component } from 'react';
import { Button } from '../../components/Button';
import axios from 'axios';

const model = 'general';
class GeneralSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [model]: {
        name: '',
        phone: '',
        footer_upper: '',
        realtor_info: '',
        footer_left: '',
        footer_right: '',
        terms_condition: '',
        footer_eula: '',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getDefaultSettings();
    M.AutoInit();
  }
  getDefaultSettings() {
    const url = '/api/settings/general';
    axios.get(url).then(response => {
      console.log(response);
    });
  }
  handleSubmit() { }
  handleChange() { }
  render() {
    const { general } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="mb-10"></form>
      </>
    );
  }
}

export default GeneralSettings;
