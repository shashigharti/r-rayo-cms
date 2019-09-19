import React, { Component } from 'react';
import Choices from 'choices.js';

class ConstructionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      construction_status: [
        'New - Construction Complete',
        'New - To Be Built',
        'New - Under Construction',
        '',
      ],
      id: 'cStatus' + props.mode,
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
    return this.state.construction_status.map(i => (
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
    const construction_statusOptions = this.styleOptions();
    const { construction_status } = this.props.values;
    const { choice } = this.state;
    if (choice) {
      choice.highlightAll();
      choice.removeHighlightedItems();
      choice && choice.setChoiceByValue(construction_status);
    }
    return (
      <>
        <p>Construction Status</p>
        <div className="input-field">
          <select
            id={this.state.id}
            onChange={this.handleChange}
            className="browser-default"
            name="construction_status"
            value={construction_status}
            multiple={true}
          >
            {construction_statusOptions}
          </select>
        </div>
      </>
    );
  }
}

export default ConstructionStatus;
