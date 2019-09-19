import React, { Component } from 'react';
import Choices from 'choices.js';

class Garage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      garage: ['1', '2', '3', '4', '5', '6 or More'],
      choice: null,
      id: 'garage' + props.mode
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
    let elem = document.getElementById(this.state.id);
    let choice = new Choices(elem, {
      placeholder: true,
      placeholderValue: 'Select options',
      removeItems: true,
      removeItemButton: true,
      classNames: {
        item: 'choices__item',
      },
    });

    this.setState({
      choice,
    });
  }

  garageOptions = () => {
    return this.state.garage.map(i => (
      <option key={i} value={i}>
        {i} cars
      </option>
    ));
  };

  handleChange(e) {
    const { choice } = this.state;
    let name = e.target.name;
    this.props.onChoiceChange(name, choice.getValue(true));
  }

  render() {
    const garageOptions = this.garageOptions();
    const { garage } = this.props.values;
    const { choice } = this.state;
    if (choice) {
      choice.highlightAll();
      choice.removeHighlightedItems();
      choice && choice.setChoiceByValue(garage);
    }
    return (
      <>
        <p>Garage</p>
        <div className="input-field">
          <select
            id={this.state.id}
            onChange={this.handleChange}
            className="browser-default"
            name="garage"
            value={garage}
            multiple={true}
          >
            {garageOptions}
          </select>
        </div>
      </>
    );
  }
}

export default Garage;
