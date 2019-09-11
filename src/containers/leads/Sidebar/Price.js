import React, { Component } from 'react';
import slider from 'nouislider';
import numeral from 'numeral';
import 'nouislider/distribute/nouislider.min.css';
import './range.css';

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {
        min: props.metadata.min_price,
        max: props.metadata.max_price,
      },
    };
  }

  componentDidMount() {
    const { price } = this.state;
    // Init the slider
    let html5Slider = document.getElementById('price-range');
    let start = price.min && price.max ? [price.min, price.max] : [0, 0];
    slider.create(html5Slider, {
      start,
      connect: true,
      range: {
        min: [1],
        max: [99999999],
      },
    });

    // Disable editing
    html5Slider.setAttribute('disabled', true);
  }

  render() {
    const { metadata } = this.props;
    const { price } = this.state;
    let min = numeral(price.min).format('($ 0.00 a)');
    let max = numeral(price.max).format('($ 0.00 a)');
    return (
      <div className="row mt-5">
        <div className="col s12">
          <h5>
            Price
            <a href="#add" className="modal-trigger">
              <i className="material-icons right">add</i>
            </a>
          </h5>
          <div className="mt-5">
            <div id="price-range" />
            <div className="price-info mt-3">
              {min} - {max}
            </div>
          </div>
          <div className="mt-7">
            <p>MEDIAN PRICE: {metadata.median_price || 'N/A'}</p>
            <p>AVERAGE PRICE: {metadata.average_price || 'N/A'}</p>
          </div>
        </div>
      </div>
    );
  }
}

export { Price };
