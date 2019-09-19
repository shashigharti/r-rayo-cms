import React, { Component } from 'react';

class DefaultFilter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mapStatusClick = this.props.onStatusClick;
    const mapPicClick = this.props.onPicClick;
    const { values } = this.props;
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
            <input type="checkbox" name="active" value="Active" onChange={mapStatusClick} checked={values.status.indexOf('Active') >= 0} />
            <span>Properties for Sale</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="sold" value="Sold" onChange={mapStatusClick} checked={values.status.indexOf('Sold') >= 0} />
            <span>Sold</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="pending" value="Pending" onChange={mapStatusClick} checked={values.status.indexOf('Pending') >= 0} />
            <span>Pending</span>
          </label>
        </div>
        <p className="mt-10">Pictures</p>
        <div>
          <label>
            <input type="checkbox" name="pic_only" value="yes" onChange={mapPicClick} checked={values.pic_only === 'yes'} />
            <span>Only show properties with photos</span>
          </label>
        </div>
      </>
    );
  }
}

export default DefaultFilter;
