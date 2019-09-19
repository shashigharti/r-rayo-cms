import React, { Component } from 'react';
import axios from 'axios';
import Choices from 'choices.js';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grids: [],
      id: 'grids' + props.mode,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/grids/all').then(response => {
      this.setState(
        {
          grids: response.data.data,
        },
        () => {
          let elem = document.getElementById(this.state.id);
          let values = this.state.grids.map(grid => ({
            value: grid.name,
            label: grid.name,
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
    const { grids } = this.props.values;
    const { choice } = this.state;
    if (choice) {
      choice.highlightAll();
      choice.removeHighlightedItems();
      choice && choice.setChoiceByValue(grids);
    }
    return (
      <>
        <p>Grids</p>
        <div className="input-field">
          <select
            id={this.state.id}
            className="browser-default"
            onChange={this.handleChange}
            name="grids"
            multiple={true}
          />
        </div>
      </>
    );
  }
}

export default Grid;
