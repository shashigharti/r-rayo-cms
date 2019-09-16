import React, { Component } from 'react';

class Acres extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    M.AutoInit();
  }

  min = () => {
    let minOptions = [];
    for (let i = 1; i < 20; i++) {
      minOptions.push(
        <option key={i} value={i}>
          {i}
        </option>,
      );
    }
    return minOptions;
  };
  max = () => {
    let maxOptions = [];
    for (let i = 1; i < 20; i++) {
      maxOptions.push(
        <option key={i} value={i}>
          ${i}
        </option>,
      );
    }
    maxOptions.push(
      <option key="20" value="19+">
        19+
      </option>,
    );
    return maxOptions;
  };

  render() {
    const minOptions = this.min();
    const maxOptions = this.max();
    const mapChanges = this.props.onChange;
    const { acres_max, acres_min } = this.props.values;
    return (
      <>
        <p>Acres(min-max)</p>
        <div className="input-field">
          <select
            className="browser-default"
            name="acres_min"
            value={acres_min}
            onChange={mapChanges}
          >
            <option value="">Min</option>
            {minOptions}
          </select>
        </div>
        <div className="input-field">
          <select
            className="browser-default"
            name="acres_max"
            value={acres_max}
            onChange={mapChanges}
          >
            <option value="">Max</option>
            {maxOptions}
          </select>
        </div>
      </>
    );
  }
}

export default Acres;
