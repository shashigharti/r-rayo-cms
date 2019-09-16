import React, { Component } from 'react';

class Price extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    M.AutoInit();
  }
  min = () => {
    let minOptions = [];
    for (let i = 1; i < 40; i++) {
      let val = i * 25000;
      minOptions.push(
        <option key={i} value={val}>
          ${val}
        </option>,
      );
    }
    return minOptions;
  };
  max = () => {
    let maxOptions = [];
    for (let i = 1; i < 40; i++) {
      let val = i * 25000;
      maxOptions.push(
        <option key={i} value={val}>
          ${val}
        </option>,
      );
    }
    maxOptions.push(
      <option key="40" value="1000000 +">
        $1000000+
      </option>,
    );
    return maxOptions;
  };

  render() {
    const minOptions = this.min();
    const maxOptions = this.max();
    const mapChanges = this.props.onChange;
    const { price_max, price_min } = this.props.values;
    return (
      <>
        <p>Price(min-max)</p>
        <div className="input-field">
          <select
            className="browser-default"
            name="price_min"
            value={price_min}
            onChange={mapChanges}
          >
            <option value="">Min</option>
            {minOptions}
          </select>
        </div>
        <div className="input-field">
          <select
            className="browser-default"
            name="price_max"
            value={price_max}
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

export default Price;
