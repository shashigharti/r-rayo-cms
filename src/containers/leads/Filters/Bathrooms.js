import React, { Component } from 'react';

class Bathrooms extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { baths_min, baths_max } = this.props.values;
    const mapChanges = this.props.onChange;
    return (
      <>
        <p className="mt-10">Bathrooms(min-max)</p>
        <div className="input-field">
          <select
            className="browser-default"
            name="baths_max"
            value={baths_max}
            onChange={mapChanges}
          >
            <option value="">Min</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="input-field">
          <select
            className="browser-default"
            name="baths_min"
            value={baths_min}
            onChange={mapChanges}
          >
            <option value="">Max</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="5+">5+</option>
          </select>
        </div>
      </>
    );
  }
}

export default Bathrooms;
