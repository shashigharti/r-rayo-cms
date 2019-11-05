import React, { Component } from 'react';
import Choices from 'choices.js';

class Interior extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interior: [
        'Air Exchanger',
        'W &/or Dryer Hookup',
        'Wired-Data',
        'Security System',
        'Range-Downdraft',
        'Intercom',
        'Granite Countertops',
        'Fireplace',
        'Gas Cooktop',
        'Disposal',
        'Elevator',
        'Ceiling Fan(s)',
        'Arctic Entry',
        'BR/BA on Main Level',
        'Carpet',
        'CO Detector(s)',
        'Dishwasher',
        'Electric',
        'Freezer-Stand Alone',
        'Range/Oven',
        'Refrigerator',
        'Smoke Detector(s)',
        'Telephone',
        'Washer &/Or Dryer',
        'Window Coverings',
        'Wood Stove',
        'Workshop',
      ],
      choice: null,
      id: 'interior' + props.mode
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
    return this.state.interior.map(i => (
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
    const interiorOptions = this.styleOptions();
    const { interior } = this.props.values;
    const { choice } = this.state;
    if (choice) {
      choice.highlightAll();
      choice.removeHighlightedItems();
      choice && choice.setChoiceByValue(interior);
    }
    return (
      <>
        <p>Interior</p>
        <div className="input-field">
          <select
            id={this.state.id}
            onChange={this.handleChange}
            className="browser-default"
            name="interior"
            value={interior}
            multiple={true}
          >
            {interiorOptions}
          </select>
        </div>
      </>
    );
  }
}

export default Interior;
