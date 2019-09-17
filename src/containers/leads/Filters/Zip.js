import React, { Component } from 'react';
import axios from 'axios';
import Choices from 'choices.js';

class Zip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zips: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/zips/all').then(response => {
      this.setState(
        {
          zips: response.data.data,
        },
        () => {
          let elem = document.getElementById('zips');
          let values = this.state.zips.map(zip => ({
            value: zip.name,
            label: zip.name,
            disabled: false,
          }));

          let choices = new Choices(elem, {
            choices: values,
            placeholder: true,
            placeholderValue: 'Select options',
            removeItems: true,
            removeItemButton: true,
          });

          this.setState({
            choices,
          });
        },
      );
    });
  }

  handleChange(e) {
    const { choices } = this.state;
    let name = e.target.name;
    this.props.onChoiceChange(name, choices.getValue(true));
  }

  render() {
    return (
      <>
        <p>Zip</p>
        <div className="input-field">
          <select
            id="zips"
            className="browser-default"
            onChange={this.handleChange}
            name="zips"
            multiple={true}
          />
        </div>
      </>
    );
  }
}

export default Zip;
