import React, { Component } from 'react';

class Zip extends Component {
  render() {
    return (
      <>
        <p className="mt-10">City</p>
        <div className="input-field">
          <select>
            <option value="">Select options</option>
            <option value="1">$2500</option>
            <option value="2">$3000</option>
            <option value="3">$4000</option>
          </select>
        </div>
      </>
    );
  }
}

export default Zip;
