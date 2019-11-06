import React, { Component } from 'react';

class Sqft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sqft: ['100', '250', '500', '650', '800', '1000', '1250', '1500', '2000', '2500'],
    };
  }

  componentDidMount() {
    M.AutoInit();
  }

  min = () => {
    return this.state.sqft.map(i => (
      <option key={i} value={i}>
        ${i}
      </option>
    ));
  };
  max = () => {
    let maxOptions = this.state.sqft.map((i, key) => (
      <option key={key} value={i}>
        {i}
      </option>
    ));
    maxOptions.push(
      <option key="20" value="2500+">
        2500+
      </option>,
    );
    return maxOptions;
  };

  render() {
    const minOptions = this.min();
    const maxOptions = this.max();
    const mapChanges = this.props.onChange;
    const { sqft_max, sqft_min } = this.props.values;
    return (
      <>
        <p>Square Ft. (min-max)</p>
        <div className="input-field">
          <select
            className="browser-default"
            name="sqft_max"
            value={sqft_max}
            onChange={mapChanges}
          >
            <option value="">Min</option>
            {minOptions}
          </select>
        </div>
        <div className="input-field">
          <select
            className="browser-default"
            name="sqft_min"
            value={sqft_min}
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

export default Sqft;
