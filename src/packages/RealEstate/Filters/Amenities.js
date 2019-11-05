import React, { Component } from 'react';
import Choices from 'choices.js';

class Amenities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: [
        'Airplane Access',
        'Barn/Shop',
        'Cable TV',
        'Covenant/Restriction',
        'Deck/Patio',
        'Dock',
        'DSL/Cable Available',
        'Fire Service Area',
        'Garage Door Opener',
        'Generator',
        'Handicap Accessible',
        'Horse Property',
        'Hot Tub',
        'Landscaping',
        'Motion Lighting,Private Yard',
        'Road Service Area',
        'RV Parking',
        'Satellite Components',
        'Satellite Dish',
        'Shed',
        'View',
        'Waterfront',
        'Waterfront Access',
      ],
      id: 'amenities' + props.mode,
      choice: null,
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
    });

    this.setState({
      choice,
    });
  }

  styleOptions = () => {
    return this.state.amenities.map(i => (
      <option key={i} value={i}>
        {i}
      </option>
    ));
  };

  handleChange(e) {
    const { choice } = this.state;
    let name = e.target.name;
    this.props.onChoiceChange(name, choice.getValue(true));
  }

  render() {
    const amenitiesOptions = this.styleOptions();
    const { amenities } = this.props.values;
    const { choice } = this.state;
    if (choice) {
      choice.highlightAll();
      choice.removeHighlightedItems();
      choice && choice.setChoiceByValue(amenities);
    }
    return (
      <>
        <p>Amenities</p>
        <div className="input-field">
          <select
            id={this.state.id}
            onChange={this.handleChange}
            className="browser-default"
            name="amenities"
            value={amenities}
            multiple={true}
          >
            {amenitiesOptions}
          </select>
        </div>
      </>
    );
  }
}

export default Amenities;
