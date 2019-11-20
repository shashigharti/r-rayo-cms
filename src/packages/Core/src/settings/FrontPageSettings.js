import React, { Component } from 'react';
import { Button } from '../../Components/Button';

class FrontPageSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelRowCount: 1,
      priceRowCount: 1,
      frontPageJSX: null,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      rowCount: 1,
    });
    // Fix text overlap with labels on pre-filled inputs
    M.updateTextFields();
  }

  handleAdd(type) {
    if (type === 'label') {
      this.setState(prevState => ({
        labelRowCount: prevState.labelRowCount + 1,
      }));
    } else {
      this.setState(prevState => ({
        priceRowCount: prevState.priceRowCount + 1,
      }));
    }
  }

  handleSubmit() { }

  componentDidUpdate(prevProps, prevState, snapshot) {
    M.AutoInit();
    M.updateTextFields();
  }

  render() {
    const labelDiv = [];
    const priceDiv = [];
    (function renderDiv() {
      for (let i = 0; i < this.state.labelRowCount; i++) {
        labelDiv.push(
          <div className="row" key={i}>
            <div className="col s4">
              <div className="input-field">
                <select name="type" id="type">
                  <option value="city">City</option>
                </select>
                <label htmlFor="type">Type</label>
              </div>
            </div>
            <div className="col s4">
              <div className="input-field">
                <textarea name="values" className="auto--height materialize-textarea" />
                <label htmlFor="values">Values</label>
              </div>
            </div>
            <div className="col s4">
              <div className="input-field">
                <textarea name="content" className="auto--height materialize-textarea" />
                <label htmlFor="content">Content</label>
              </div>
            </div>
          </div>,
        );
      }

      for (let i = 0; i < this.state.priceRowCount; i++) {
        priceDiv.push(
          <div className="row" key={i}>
            <div className="col s4">
              <div className="input-field">
                <select name="type" id="type">
                  <option value="city">City</option>
                </select>
                <label htmlFor="type">Type</label>
              </div>
            </div>
            <div className="col s4">
              <div className="input-field">
                <textarea name="values" className="auto--height materialize-textarea" />
                <label htmlFor="values">Values</label>
              </div>
            </div>
            <div className="col s4">
              <div className="input-field">
                <textarea name="content" className="auto--height materialize-textarea" />
                <label htmlFor="content">Content</label>
              </div>
            </div>
          </div>,
        );
      }
    }.bind(this)());

    return (
      <>
        <form onSubmit={this.handleSubmit} className="mb-10">
          <h5>Label</h5>
          {labelDiv}
          <div className="row">
            <div className="col s2">
              <Button
                onClick={() => {
                  this.handleAdd('label');
                }}
                customClasses="mr-4 btn-small"
              >
                Add
              </Button>
              <Button type="submit" customClasses="btn-small purple">
                Save
              </Button>
            </div>
          </div>
        </form>

        <form onSubmit={this.handleSubmit}>
          <h5>Price</h5>
          {priceDiv}
          <div className="row">
            <div className="col s2">
              <Button
                onClick={() => {
                  this.handleAdd('price');
                }}
                customClasses="mr-4 btn-small"
              >
                Add
              </Button>
              <Button type="submit" customClasses="btn-small purple">
                Save
              </Button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default FrontPageSettings;
