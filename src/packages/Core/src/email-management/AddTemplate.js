import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import M from 'materialize-css';
import { BreadCrumbs } from '../../Components/BreadCrumbs';

const crumbs = [
  {
    name: 'Home',
    subPath: '',
    path: '/',
  },
  {
    name: 'Templates',
    subPath: 'pages',
    path: 'templates',
  },
  {
    name: 'Add Template',
    subPath: 'pages',
    path: 'add-email-template',
  },
];

class AddTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false,
      template: {
        title: '',
        template: '',
        group: '',
        subject: '',
        starts_at: '',
        ends_at: '',
        frequency: '',
        status: '',
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleTemplateChange = this.handleTemplateChange.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
  }
  componentDidUpdate(prevProps, prevState, snapshot) { }

  handleTemplateChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    // For switch toggle value
    if (name === 'status') {
      value = value === '1' ? '0' : '1';
    }

    this.setState(prevState => ({
      template: {
        ...prevState.template,
        [name]: value,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { template } = this.state;
    // Format date from form elements
    let starts_at = moment(e.target.elements.starts_at.value).format('YYYY-MM-DD h:m:s');
    let ends_at = moment(e.target.elements.ends_at.value).format('YYYY-MM-DD h:m:s');
    let formData = template;
    formData.starts_at = starts_at;
    formData.ends_at = ends_at;

    axios.post('/api/email-template/store', formData).then(data => {
      if (data.status === 200) {
        M.toast({ html: 'Successfully added.' });
        this.setState({
          template: {
            title: '',
            template: '',
            group: '',
            subject: '',
            starts_at: '',
            ends_at: '',
            frequency: '',
            status: '',
          },
        });
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
    const { template } = this.state;
    return (
      <>
        <div id="main">
          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="row breadcrumbs-inline" id="breadcrumbs-wrapper">
                  <div className="col s12 breadcrumbs-left">
                    <BreadCrumbs title="Email Management" rootPath="" crumbs={crumbs} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="card">
                  <div className="card-content">
                    <form onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input type="hidden" name="id" value={template.id} />
                          <input
                            id="title"
                            name="title"
                            type="text"
                            value={template.title}
                            onChange={this.handleTemplateChange}
                            required
                          />
                          <label htmlFor="title" className="center-align">
                            Title
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            id="subject"
                            name="subject"
                            type="text"
                            value={template.subject}
                            onChange={this.handleTemplateChange}
                            required
                          />
                          <label htmlFor="subject" className="center-align">
                            Subject
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s6">
                          <select
                            id="template"
                            name="template"
                            value={template.template}
                            onChange={this.handleTemplateChange}
                            required
                          >
                            <option value="">Select template</option>
                            <option value="1">Registration Template</option>
                            <option value="2">Listing Template</option>
                            <option value="3">Update Template</option>
                          </select>
                          <label htmlFor="template" className="center-align">
                            Template
                          </label>
                        </div>
                        <div className="input-field col s6">
                          <select
                            name="group"
                            id="group"
                            value={template.group}
                            onChange={this.handleTemplateChange}
                            required
                          >
                            <option value="">Select Group</option>
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
                        <div className="input-field col s12">
                          <select
                            name="frequency"
                            id="frequency"
                            value={template.frequency}
                            onChange={this.handleTemplateChange}
                            required
                          >
                            <option value="">Select Frequency</option>
                            <option value="1">Daily</option>
                            <option value="2">Weekly</option>
                            <option value="3">Bi-Weekly</option>
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
                              <input
                                type="checkbox"
                                name="status"
                                value={template.status}
                                checked={template.status == '1'}
                                onChange={this.handleTemplateChange}
                              />
                              <span className="lever" />
                              Enabled
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s6">
                          <input
                            type="text"
                            name="starts_at"
                            id="starts_at"
                            className="datepicker"
                            value={template.starts_at}
                            onChange={this.handleTemplateChange}
                            required
                          />
                          <label htmlFor="startDate" className="center-align">
                            Start Date
                          </label>
                        </div>

                        <div className="input-field col s6">
                          <input
                            type="text"
                            id="ends_at"
                            name="end_at"
                            className="datepicker"
                            value={template.ends_at}
                            onChange={this.handleTemplateChange}
                            required
                          />
                          <label htmlFor="endDate" className="center-align">
                            End Date
                          </label>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col s12">
                          <button type="submit" className="btn waves-effect waves-light  modal-trigger btn-small">
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddTemplate;

