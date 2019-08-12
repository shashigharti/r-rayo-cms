import React, { Component } from 'react';
import Header from '../generic/Header';
import axios from 'axios';
import moment from 'moment';
import M from 'materialize-css';

class AddTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    console.log('mounted');
    M.AutoInit();
  }

  handleSubmit(e) {
    e.preventDefault();
    let values = {
      title: e.target.elements.title.value,
      subject: e.target.elements.subject.value,
      template: e.target.elements.template.value,
      group: e.target.elements.group.value,
      starts_at: moment(e.target.elements.startDate.value).format('YYYY-MM-DD h:m:s'),
      ends_at: moment(e.target.elements.endDate.value).format('YYYY-MM-DD h:m:s'),
      frequency: e.target.elements.frequency.value,
      status: this.state.status,
    };

    axios.post('/api/email-template/store', values).then(data => {
      if (data.status === 200) {
        M.toast({ html: 'Successfully added.' });
      }
    });
  }

  handleStatusChange(e) {
    // Reverse status on toggle
    this.setState({
      status: !this.state.status,
    });
  }

  render() {
    return (
      <>
        <Header />
        <div id="main">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <h5>Add Email Template</h5>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="title" name="title" type="text" required />
                  <label htmlFor="title" className="center-align">
                    Title
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="subject" name="subject" type="text" required />
                  <label htmlFor="subject" className="center-align">
                    Subject
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <select name="template" id="template" required>
                    <option>Select template</option>
                    <option value="1">Registration Template</option>
                    <option value="2">Listing Template</option>
                    <option value="3">Update Template</option>
                  </select>
                  <label htmlFor="template" className="center-align">
                    Template
                  </label>
                </div>
                <div className="input-field col s6">
                  <select name="group" id="group" required>
                    <option>Select Group</option>
                    <option value="1">Group 1</option>
                    <option value="2">Group 2</option>
                    <option value="3">Group 3</option>
                  </select>
                  <label htmlFor="group" className="center-align">
                    Group
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s6">
                  <input
                    type="text"
                    name="startDate"
                    id="startDate"
                    className="datepicker"
                    required
                  />
                  <label htmlFor="startDate" className="center-align">
                    Start Date
                  </label>
                </div>

                <div className="input-field col s6">
                  <input type="text" id="endDate" name="endDate" className="datepicker" required />
                  <label htmlFor="endDate" className="center-align">
                    End Date
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <select name="frequency" id="frequency" required>
                    <option>Select Frequency</option>
                    <option value="1">Daily</option>
                    <option value="2">Weekly</option>
                    <option value="3">Bi Weekly</option>
                    <option value="4">Monthly</option>
                  </select>
                  <label htmlFor="frequency" className="center-align">
                    Frequency
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <div className="switch">
                    <label>
                      Disabled
                      <input type="checkbox" name="status" onChange={this.handleStatusChange} />
                      <span className="lever" />
                      Enabled
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <button className="btn mr-2">Preview</button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default AddTemplate;
