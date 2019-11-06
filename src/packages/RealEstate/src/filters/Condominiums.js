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
    const { values } = this.props;
    const checkBoxes = options.map((option, key) => {
      let checked = false;
      if (values.type.length > 0) {
        values.type.some(arr => {
          checked = arr === option.value;
          return arr === option.value;
        });
      }
      return (
        <div key={key}>
          <label>
            <input
              type="checkbox"
              onChange={this.props.onClick}
              name={option.name}
              value={option.value}
              checked={checked}
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
