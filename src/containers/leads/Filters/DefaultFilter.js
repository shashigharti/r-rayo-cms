import React, { Component } from 'react';

class DefaultFilter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mapStatusClick = this.props.onStatusClick;
    const mapPicClick = this.props.onPicClick;
    return (
      <>
        <p className="mt-10">Property Status</p>
        <div>
          <label>
            <input type="checkbox" />
            <span>Select All</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="active" value="Active" onClick={mapStatusClick} />
            <span>Properties for Sale</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="sold" value="Sold" onClick={mapStatusClick} />
            <span>Sold</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="pending" value="Pending" onClick={mapStatusClick} />
            <span>Pending</span>
          </label>
        </div>
        <p className="mt-10">Pictures</p>
        <div>
          <label>
            <input type="checkbox" name="pic_only" value="yes" onClick={mapPicClick} />
            <span>Only show properties with photos</span>
          </label>
        </div>
      </>
    );
  }
}

export default DefaultFilter;
