import React, { Component } from 'react';

class Year extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: [
        '1900',
        '1910',
        '1920',
        '1930',
        '1940',
        '1950',
        '1960',
        '1970',
        '1980',
        '1985',
        '1990',
        '1995',
        '2000',
        '2002',
        '2004',
        '2006',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
      ],
    };
  }

  componentDidMount() {
    M.AutoInit();
  }

  min = () => {
    return this.state.year.map(i => (
      <option key={i} value={i}>
        {i}
      </option>
    ));
  };
  max = () => {
    return this.state.year.map((i, key) => (
      <option key={key} value={i}>
        {i}
      </option>
    ));
  };

  render() {
    const minOptions = this.min();
    const maxOptions = this.max();
    const mapChanges = this.props.onChange;
    const { year_max, year_min } = this.props.values;
    return (
      <>
        <p>Year Built (min-max)</p>
        <div className="input-field">
          <select
            className="browser-default"
            name="year_max"
            value={year_max}
            onChange={mapChanges}
          >
            <option value="">Min</option>
            {minOptions}
          </select>
        </div>
        <div className="input-field">
          <select
            className="browser-default"
            name="year_min"
            value={year_min}
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

export default Year;
