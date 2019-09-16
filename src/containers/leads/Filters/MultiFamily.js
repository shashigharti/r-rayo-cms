import React, { Component } from 'react';

class MultiFamily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { name: 'duplex', value: 'Duplex' },
        { name: 'tri-plex;', value: 'Tri-Plex' },
        { name: 'four-plex', value: 'Four-Plex' },
        { name: 'five-plus', value: '5+ Units' },
      ],
    };
  }

  render() {
    const { options } = this.state;
    const checkBoxes = options.map((option, key) => {
      return (
        <div key={key}>
          <label>
            <input
              type="checkbox"
              onClick={this.props.onClick}
              name={option.name}
              value={option.value}
            />
            <span>{option.value}</span>
          </label>
        </div>
      );
    });
    return (
      <>
        <p>Multi-Family</p>
        <div>
          <label>
            <input type="checkbox" />
            <span>All Multi-Family</span>
          </label>
        </div>
        {checkBoxes}
      </>
    );
  }
}

export default MultiFamily;
