import React, { Component } from 'react';
import axios from 'axios';
import Choices from 'choices.js';

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      id: 'cities' + props.mode,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/cities/all').then(response => {
      this.setState(
        {
          cities: response.data.data,
        },
        () => {
          let elem = document.getElementById(this.state.id);
          let values = this.state.cities.map(city => ({
            value: city.name,
            label: city.name,
            disabled: false,
          }));

          let choice = new Choices(elem, {
            choices: values,
            placeholder: true,
            placeholderValue: 'Select options',
            removeItems: true,
            removeItemButton: true,
          });

          this.setState({
            choice,
          });
        },
      );
    });
  }

  handleChange(e) {
    const { choice } = this.state;
    let name = e.target.name;
    this.props.onChoiceChange(name, choice.getValue(true));
  }

  render() {
    const { cities } = this.props.values;
    const { choice } = this.state;
    if (choice) {
      choice.highlightAll();
      choice.removeHighlightedItems();
      choice && choice.setChoiceByValue(cities);
    }
    return (
      <>
        <p>City</p>
        <div className="input-field">
          <select
            id={this.state.id}
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
