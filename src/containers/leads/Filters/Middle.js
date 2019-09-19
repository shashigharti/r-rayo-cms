import React, { Component } from 'react';
import axios from 'axios';
import Choices from 'choices.js';

class Middle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      middleSchools: [],
      id: 'middle' + props.mode,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/elem-schools/all').then(response => {
      this.setState(
        {
          middleSchools: response.data.data,
        },
        () => {
          let elem = document.getElementById(this.state.id);
          let values = this.state.middleSchools.map(middle => ({
            value: middle.name,
            label: middle.name,
            disabled: false,
          }));

          let choice = new Choices(elem, {
            choices: values,
            placeholder: true,
            placeholderValue: 'Select options',
            removeItems: true,
            removeItemButton: true,
          });

          this.setState({
            choice,
          });
        },
      );
    });
  }

  handleChange(e) {
    const { choice } = this.state;
    let name = e.target.name;
    this.props.onChoiceChange(name, choice.getValue(true));
  }

  render() {
    const { middleSchools } = this.props.values;
    const { choice } = this.state;
    if (choice) {
      choice.highlightAll();
      choice.removeHighlightedItems();
      choice && choice.setChoiceByValue(middleSchools);
    }

    return (
      <>
        <p>Middle Schools</p>
        <div className="input-field">
          <select
            id={this.state.id}
            className="browser-default"
            onChange={this.handleChange}
            name="middleSchools"
            multiple={true}
          />
        </div>
      </>
    );
  }
}

export default Middle;
