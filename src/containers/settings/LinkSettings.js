import React, { Component } from 'react';
import { Button } from '../../components/Button';
import Select from 'react-select';

class LinkSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowCount: 1,
      frontPageJSX: null,
      valueOptions: [
        { value: 'ames', label: 'Ames' },
        { value: 'santabarbara', label: 'Santa Barbara' },
        { value: 'stpetersburg', label: 'St. Petersburg' },
      ],
      displayLinksOptions: [
        { value: 'condos', label: 'Condos' },
        { value: 'waterfront', label: 'Waterfront' },
        { value: 'subdivisions', label: 'Subdivisions' },
        { value: 'acerages', label: 'Acerages' },
        { value: 'uniqueproperties', label: 'Unique Properties' },
        { value: 'golf', label: 'Golf' },
        { value: 'historichomes', label: 'Historic Homes' },
        { value: 'townhomes', label: 'Townhomes' },
        { value: 'homeswithland', label: 'Homes With Land' },
      ],
      conditionTypeOptions: [{ value: 'city', label: 'City' }, { value: 'acres', label: 'Acres' }],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Init values based on row count
    for (let i = 0; i < this.state.rowCount; i++) {
      this.setState({
        ['selectedConditions' + i]: [],
        ['selectedConditions' + i]: [],
        ['selectedValues' + i]: [],
        ['selectedLinks' + i]: [],
      });
    }
    // Fix text overlap with labels on pre-filled inputs
    M.updateTextFields();
  }

  handleAdd() {
    this.setState(prevState => ({
      rowCount: prevState.rowCount + 1,
    }));
  }
  handleChange(fieldName) {
    const self = this;
    return function(newValue) {
      self.setState({
        [fieldName]: newValue,
      });
    };
  }

  handleSubmit() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    M.AutoInit();
    M.updateTextFields();
  }

  render() {
    const { displayLinksOptions, valueOptions, conditionTypeOptions, selectedOptions } = this.state;
    const labelDiv = [];
    (function renderDiv() {
      for (let i = 0; i < this.state.rowCount; i++) {
        labelDiv.push(
          <div className="row" key={i}>
            <div className="col s4">
              <div className="input-field">
                <Select
                  options={conditionTypeOptions}
                  value={this.state['selectedConditions' + i]}
                  onChange={this.handleChange('selectedConditions' + i)}
                  placeholder="Condition Type"
                />
              </div>
            </div>
            <div className="col s4">
              <div className="input-field">
                <Select
                  options={valueOptions}
                  value={this.state['selectedValues' + i]}
                  onChange={this.handleChange('selectedValues' + i)}
                  placeholder="Values"
                  isMulti="true"
                />
              </div>
            </div>
            <div className="col s4">
              <div className="input-field">
                <Select
                  options={displayLinksOptions}
                  value={this.state['selectedLinks' + i]}
                  onChange={this.handleChange('selectedLinks' + i)}
                  placeholder="Display Links"
                  isMulti="true"
                />
              </div>
            </div>
          </div>,
        );
      }
    }.bind(this)());

    return (
      <>
        <form onSubmit={this.handleSubmit} className="mb-10">
          <div className="row">
            <div className="col s10">
              <h5>Link Conditions</h5>
            </div>
            <div className="col s2">
              <Button onClick={this.handleAdd} customClasses="mr-4">
                <i className="material-icons center">add</i>
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </div>
          {labelDiv}
        </form>
      </>
    );
  }
}

export { LinkSettings };
