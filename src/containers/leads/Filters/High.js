import React, { Component } from 'react';
import axios from 'axios';
import Choices from 'choices.js';

class High extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highSchools: [],
      id: 'high' + props.mode
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/high-schools/all').then(response => {
      this.setState(
        {
          highSchools: response.data.data,
        },
        () => {
          let elem = document.getElementById(this.state.id);
          let values = this.state.highSchools.map(high => ({
            value: high.name,
            label: high.name,
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
            choice
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
    const { highSchools } = this.props.values;
    const { choice } = this.state;
    if (choice) {
      choice.highlightAll();
      choice.removeHighlightedItems();
      choice && choice.setChoiceByValue(highSchools);
    }
    return (
      <>
        <p>High Schools</p>
        <div className="input-field">
          <select
            id={this.state.id}
            className="browser-default"
            onChange={this.handleChange}
            name="highSchools"
            multiple={true}
          />
        </div>
      </>
    );
  }
}

export default High;
