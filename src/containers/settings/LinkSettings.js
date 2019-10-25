import React, { Component } from 'react';
import { Button } from '../../components/Button';
import Select from 'react-select';
import axios from 'axios';

class LinkSettings extends Component {
  constructor(props) {
    super(props);
    const types = [
      { name: 'cities', url: '/api/city/all' },
      { name: 'middleschools', url: '/api/middle-schools/all' },
    ];
    this.state = {
      links: [],
      loading: true,
      conditions: [{ value: 0, label: 'City' }, { value: 1, label: 'Middle Schools' }],
      defaultlinks: [],
      types: types,
      options: {},
      display: [
        { value: 'subdivision', label: 'Subdivision' },
        { value: 'waterfront', label: 'Waterfront' },
      ],
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeCondition = this.changeCondition.bind(this);
    this.getData = this.getData.bind(this);
    this.getRow = this.getRow.bind(this);
    this.getDefaultLinks = this.getDefaultLinks.bind(this);
  }

  componentDidMount() {
    this.getDefaultLinks();
    const { defaultlinks, types } = this.state;

    // Fix text overlap with labels on pre-filled inputs
    M.updateTextFields();
  }
  getDefaultLinks() {
    const url = '/api/settings/links';
    const { types, conditions } = this.state;
    axios
      .get(url)
      .then(response => {
        return response.data.data.values;
      })
      .then(result => {
        if (result.length > 0) {
          return result;
        }
        return {
          condition: '',
          value: '',
          displaylinks: '',
        };
      })
      .then(defaultlinks => {
        this.setState({ defaultlinks: defaultlinks });
        defaultlinks.map((link, key) => {
          const type = link.condition.value >= 0 ? types[link.condition.value] : 1;
          this.getData(type, key);
        });
      });
  }
  getData(type, key) {
    const { options } = this.state;
    const { url } = type;
    axios
      .get(url)
      .then(response => {
        return response.data.data;
      })
      .then(results => {
        const data = [];
        results.map(result => {
          const { name, slug } = result;
          data.push({ label: name, value: slug });
        });
        options[key] = data;
        this.setState({ options: options });
      });
  }
  handleAdd() {
    const { defaultlinks } = this.state;
    const newlink = {
      condition: '',
      value: '',
      displaylinks: '',
    };
    defaultlinks.push(newlink);
    this.setState({
      defaultlinks: defaultlinks,
    });
  }
  handleChange(field, key) {
    const self = this;
    const { defaultlinks } = self.state;
    return function(newValue) {
      const value = (defaultlinks[key][field] = newValue);
      self.setState({
        defaultlinks: defaultlinks,
      });
    };
  }

  changeCondition(key) {
    const self = this;
    const { defaultlinks } = self.state;
    return function(newValue) {
      defaultlinks[key]['condition'] = newValue;
      self.setState({
        defaultlinks: defaultlinks,
      });
      const val = newValue.value;
      const { types } = self.state;
      const type = types[val];
      self.getData(type, key);
    };
  }
  handleSubmit() {
    event.preventDefault();
    const { defaultlinks } = this.state;
    const url = '/api/settings/update/links';
    axios.put(url, defaultlinks).then(response => {
      console.log(response);
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    M.AutoInit();
    M.updateTextFields();
  }
  getRow(link, key) {
    const { conditions, options, display } = this.state;
    const option = options[key];

    console.log(link.condition);
    return (
      <div className="row">
        <div className="col s4">
          <div className="input-field">
            <Select
              options={conditions}
              data-id={key}
              defaultValue={link.condition}
              placeholder="Condition Type"
              onChange={this.changeCondition(key)}
            />
          </div>
        </div>
        <div className="col s4">
          <div className="input-field">
            <Select
              data-id={key}
              options={option}
              defaultValue={link.value}
              onChange={this.handleChange('value', key)}
              placeholder="Values"
              isMulti="true"
            />
          </div>
        </div>
        <div className="col s4">
          <div className="input-field">
            <Select
              data-id={key}
              options={display}
              defaultValue={link.displaylinks}
              onChange={this.handleChange('displaylinks', key)}
              placeholder="Display Links"
              isMulti="true"
            />
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { defaultlinks } = this.state;
    const $this = this;
    function renderRows() {
      return defaultlinks.map((link, key) => $this.getRow(link, key));
    }

    return (
      <>
        <form onSubmit={this.handleSubmit} className="mb-10">
          <div className="row">
            <div className="col s10">
              <h5>Link Conditions</h5>
            </div>
            <div className="col s2">
              <Button onClick={this.handleAdd} customClasses="btn-small mr-4">
                <i className="material-icons center">add</i>
              </Button>
              <Button type="submit" customClasses="btn-small purple">
                Save
              </Button>
            </div>
          </div>
          {renderRows()}
        </form>
      </>
    );
  }
}

export { LinkSettings };
