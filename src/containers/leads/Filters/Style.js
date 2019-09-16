import React, { Component } from 'react';
import Choices from 'choices.js';

class Style extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: [
        'Chalet/A-Frame',
        'Cabin',
        'Multi-Level',
        'Prow Front Split',
        'Two-Story W/Bsmnt',
        'Log',
        'Ranch-Traditional',
        'Two-Story Reverse',
        'Split Entry',
      ],
      choice: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
    let elem = document.getElementById('style');
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
    return this.state.style.map(i => (
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
    const styleOptions = this.styleOptions();
    const { style } = this.props.values;
    return (
      <>
        <p>Style</p>
        <div className="input-field">
          <select
            id="style"
            onChange={this.handleChange}
            className="browser-default"
            name="style"
            value={style}
            multiple={true}
          >
            {styleOptions}
          </select>
        </div>
      </>
    );
  }
}

export default Style;
