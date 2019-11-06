import React, { Component } from 'react';
import axios from 'axios';
import Choices from 'choices.js';

class Zip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zips: [],
      id: 'zips' + props.mode,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/zips/all').then(response => {
      this.setState(
        {
          zips: response.data.data,
        },
        () => {
          let elem = document.getElementById(this.state.id);
          let values = this.state.zips.map(zip => ({
            value: zip.name,
            label: zip.name,
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
    const { zips } = this.props.values;
    const { choice } = this.state;
    if (choice) {
      choice.highlightAll();
      choice.removeHighlightedItems();
      choice && choice.setChoiceByValue(zips);
    }
    return (
      <>
        <p>Zip</p>
        <div className="input-field">
          <select
            id={this.state.id}
            className="browser-default"
            onChange={this.handleChange}
            name="zips"
            multiple={true}
          />
        </div>
      </>
    );
  }
}

export default Zip;
