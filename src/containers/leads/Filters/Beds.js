import React, { Component } from 'react';

class Beds extends Component {
  render() {
    const { beds_min, beds_max } = this.props.values;
    const mapChanges = this.props.onChange;
    return (
      <>
        <p className="mt-10">Beds(min-max)</p>
        <div className="input-field">
          <select
            className="browser-default"
            name="beds_min"
            value={beds_min}
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
            name="beds_max"
            value={beds_max}
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

export default Beds;
