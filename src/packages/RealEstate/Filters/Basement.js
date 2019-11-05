import React, { Component } from 'react';
import Choices from 'choices.js';

class Basement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basement: ['Unfinished', 'Finished', 'Partially Finished'],
      choice: null,
      id: 'basement' + props.mode,
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
    return this.state.basement.map(i => (
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
    const basementOptions = this.styleOptions();
    const { basement } = this.props.values;
    const { choice } = this.state;
    if (choice) {
      choice.highlightAll();
      choice.removeHighlightedItems();
      choice && choice.setChoiceByValue(basement);
    }
    return (
      <>
        <p>Basement</p>
        <div className="input-field">
          <select
            id={this.state.id}
            onChange={this.handleChange}
            className="browser-default"
            name="basement"
            value={basement}
            multiple={true}
          >
            {basementOptions}
          </select>
        </div>
      </>
    );
  }
}

export default Basement;
