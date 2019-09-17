import React, { Component } from 'react';
import axios from 'axios';
import Choices from 'choices.js';

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/city/all').then(response => {
      this.setState(
        {
          cities: response.data.data,
        },
        () => {
          let elem = document.getElementById('cities');
          let values = this.state.cities.map(city => ({
            value: city.name,
            label: city.name,
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
        <p>City</p>
        <div className="input-field">
          <select
            id="cities"
            className="browser-default"
            onChange={this.handleChange}
            name="cities"
            multiple={true}
          />
        </div>
      </>
    );
  }
}

export default City;
