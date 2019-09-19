import React, { Component } from 'react';
import axios from 'axios';
import Choices from 'choices.js';

class Elementary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementarySchools: [],
      id: 'elem' + props.mode
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/elem-schools/all').then(response => {
      this.setState(
        {
          elementarySchools: response.data.data,
        },
        () => {
          let elem = document.getElementById(this.state.id);
          let values = this.state.elementarySchools.map(elem => ({
            value: elem.name,
            label: elem.name,
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
    const { elementarySchools } = this.props.values;
    const { choice } = this.state;
    if (choice) {
      choice.highlightAll();
      choice.removeHighlightedItems();
      choice && choice.setChoiceByValue(elementarySchools);
    }
    return (
      <>
        <p>Elementary Schools</p>
        <div className="input-field">
          <select
            id={this.state.id}
            className="browser-default"
            onChange={this.handleChange}
            name="elementarySchools"
            multiple={true}
          />
        </div>
      </>
    );
  }
}

export default Elementary;
