import React, { Component } from 'react';

class Condominiums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { name: 'apartment', value: 'Apartment' },
        { name: 'ranch_traditiona;', value: 'Ranch-Traditional' },
        { name: 'patio', value: 'Patio' },
        { name: 'townhouse', value: 'Townhouse' },
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
        <p>Condominiums</p>
        <div>
          <label>
            <input type="checkbox" />
            <span>All Condominiums</span>
          </label>
        </div>
        {checkBoxes}
      </>
    );
  }
}

export default Condominiums;
