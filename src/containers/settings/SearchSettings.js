import React, { Component } from 'react';
import { Button } from '../../components/Button';
import axios from 'axios';
import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

class SearchSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOptions: [
        { value: 'Residential', label: 'Residential' },
        { value: 'MultiFamily', label: 'MultiFamily' },
        { value: 'Condominiums', label: 'Condominiums' },
        { value: 'DefaultFilter', label: 'DefaultFilter' },
        { value: 'Price', label: 'Price' },
        { value: 'Beds', label: 'Beds' },
        { value: 'Bathrooms', label: 'Bathrooms' },
        { value: 'Garage', label: 'Garage' },
        { value: 'City', label: 'City' },
        { value: 'Zip', label: 'Zip' },
        { value: 'Acres', label: 'Acres' },
        { value: 'Sqft', label: 'Sqft' },
        { value: 'Year', label: 'Year' },
        { value: 'Style', label: 'Style' },
      ],
      columnOne: [],
      columnTwo: [],
      columnThree: [],
      columnFour: [],
      filters: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const choiceOptions = {
      placeholder: true,
      placeholderValue: 'Choose filters',
      removeItems: true,
      removeItemButton: true,
      choices: this.state.filterOptions,
    };

    let one = document.getElementById('one');
    let two = document.getElementById('two');
    let three = document.getElementById('three');
    let four = document.getElementById('four');
    // Init choices
    let columnOne = new Choices(one, choiceOptions);
    let columnTwo = new Choices(two, choiceOptions);
    let columnThree = new Choices(three, choiceOptions);
    let columnFour = new Choices(four, choiceOptions);
    this.setState({ columnOne, columnTwo, columnThree, columnFour });

    // Get existing searches
    axios
      .get('/api/settings/filter_setting')
      .then(response => {
        let values = response.data.data.values;
        columnOne.setChoiceByValue(values['columnOne']);
        columnTwo.setChoiceByValue(values['columnTwo']);
        columnThree.setChoiceByValue(values['columnThree']);
        columnFour.setChoiceByValue(values['columnFour']);
      })
      .catch(e => {
        console.log('Unavailable');
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { columnOne, columnTwo, columnThree, columnFour } = this.state;
    let data = {
      columnOne: columnOne.getValue(true),
      columnTwo: columnTwo.getValue(true),
      columnThree: columnThree.getValue(true),
      columnFour: columnFour.getValue(true),
    };
    console.log(data);
    axios
      .put('/api/settings/update/filter_setting', data)
      .then(response => {
        if (response.status === 200) {
          M.toast({ html: 'Successfully saved!' });
        }
      })
      .catch(e => {
        M.toast({ html: 'Failed to save. Try again!' });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleSubmit}>
          <div className="row mb-4">
            <label htmlFor="one">First Column</label>
            <select className="browser-default" name="one" id="one" multiple={true} />
          </div>
          <div className="row mb-4">
            <label htmlFor="two">Second Column</label>
            <select className="browser-default" name="two" id="two" multiple={true} />
          </div>
          <div className="row mb-4">
            <label htmlFor="three">Third Column</label>
            <select className="browser-default" name="three" id="three" multiple={true} />
          </div>
          <div className="row mb-4">
            <label htmlFor="four">Fourth Column</label>
            <select className="browser-default" name="four" id="four" multiple={true} />
          </div>
          <div className="row">
            <Button type="submit" className="purple btn">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export { SearchSettings };
