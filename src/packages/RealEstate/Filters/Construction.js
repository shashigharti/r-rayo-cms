import React, { Component } from 'react';
import Choices from 'choices.js';

class Construction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      construction: [
        'Block',
        'Concrete',
        'Wood Frame',
        'Wood Frame - 2x6',
        'Unknown-BTV',
        'Log',
        'Metal',
        'Post & Beam',
        'Other - See Remarks',
      ],
      id: 'construction' + props.mode,
      choice: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
    let elem = document.getElementById(this.state.id);
    let choice = new Choices(elem, {
      placeholder: true,
      placeholderValue: 'Select options',
      removeItems: true,
      removeItemButton: true,
    });

    this.setState({
      choice,
    });
  }

  styleOptions = () => {
    return this.state.construction.map(i => (
      <option key={i} value={i}>
        {i}
      </option>
    ));
  };

  handleChange(e) {
    const { choice } = this.state;
    let name = e.target.name;
    this.props.onChoiceChange(name, choice.getValue(true));
  }

  render() {
    const constructionOptions = this.styleOptions();
    const { construction } = this.props.values;
    const { choice } = this.state;
    if (choice) {
      choice.highlightAll();
      choice.removeHighlightedItems();
      choice && choice.setChoiceByValue(construction);
    }
    return (
      <>
        <p>Construction</p>
        <div className="input-field">
          <select
            id={this.state.id}
            onChange={this.handleChange}
            className="browser-default"
            name="construction"
            value={construction}
            multiple={true}
          >
            {constructionOptions}
          </select>
        </div>
      </>
    );
  }
}

export default Construction;
