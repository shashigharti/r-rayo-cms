import React, { Component } from 'react';
import Choices from 'choices.js';

class Exterior extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exterior: [
        'Airplane Access',
        'Building Present',
        'Driveway',
        'Fire Service Area',
        'Gravel Pad',
        'Meter Loop',
        'Service Area',
        'Southern Exposure',
        'Trees - Sparse',
        'View',
        'Wetlands',
        'Mobile Home Ok',
        'Multi-Family Ok',
        'Outhouse',
        'Road Service Area',
        'Southern Exposure',
        'Trailside',
        'Trees - Cleared',
        'Trees - Heavy',
        'View',
      ],
      id: 'exterior' + props.mode,
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
    return this.state.exterior.map((i, key) => (
      <option key={key} value={i}>
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
    const exteriorOptions = this.styleOptions();
    const { exterior } = this.props.values;
    const { choice } = this.state;
    if (choice) {
      choice.highlightAll();
      choice.removeHighlightedItems();
      choice && choice.setChoiceByValue(exterior);
    }
    return (
      <>
        <p>Exterior</p>
        <div className="input-field">
          <select
            id={this.state.id}
            onChange={this.handleChange}
            className="browser-default"
            name="exterior"
            value={exterior}
            multiple={true}
          >
            {exteriorOptions}
          </select>
        </div>
      </>
    );
  }
}

export default Exterior;
