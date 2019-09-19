import React, { Component } from 'react';

class Residential extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { name: 'all_residential', text: 'All Residential', value: 'All Residential' },
        { name: 'single_family_res', text: 'Single Family Res', value: 'Single Family Res' },
        { name: 'ranch', text: 'Ranch', value: 'Ranch' },
        { name: 'split_entry', text: 'Split Entry', value: 'Split Entry' },
        { name: 'log', text: 'Log', value: 'Log' },
        { name: 'ton_home', text: 'Ton Home', value: 'Ton Home' },
        { name: 'multi_level', text: 'Multi-Level', value: 'Multi-Level' },
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
            <span>{option.text}</span>
          </label>
        </div>
      );
    });
    return (
      <>
        <p>Residential</p>
        {checkBoxes}
      </>
    );
  }
}

export default Residential;
