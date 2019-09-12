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
        { value: 'PriceFilter', label: 'Price', id: 1 },
        { value: 'BedsFilter', label: 'Beds', id: 2 },
        { value: 'BathroomsFilter', label: 'Bathrooms', id: 3 },
      ],
      filters: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let elem = document.getElementById('filters');
    let choices = new Choices(elem, {
      placeholder: true,
      placeholderValue: 'Choose filters',
      removeItems: true,
      removeItemButton: true,
      choices: this.state.filterOptions,
    });
    this.setState({ choices });

    // Get existing searches
    axios
      .get('/api/settings/filter_setting')
      .then(response => {
        choices.setChoiceByValue(response.data.data.values);
      })
      .catch(e => {
        console.log('Unavailable');
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = this.state.choices.getValue(true);
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
    const { filterOptions } = this.state;
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleSubmit}>
          <div className="row mb-4">
            <select className="browser-default" name="filters" id="filters" multiple={true} />
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
