import React, { Component } from 'react';
import axios from 'axios';
import Header from '../generic/Header';
import M from 'materialize-css';
import { Button } from '../../components/Button/Button';
import moment from 'moment';

class Templates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templates: {},
      editTemplate: {
        id: '',
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
    this.handleEdit = this.handleEdit.bind(this);
    this.handleTemplateChange = this.handleTemplateChange.bind(this);
    this.getTemplates = this.getTemplates.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    let modals = document.querySelectorAll('.modal');
    M.Modal.init(modals, { dismissible: true });

    // Not picking up events for date selection: commenting for now
    // let pickers = document.querySelectorAll('.datepicker');
    // let inst = M.Datepicker.init(pickers, {
    //     onSelect(date) {
    //         console.log(date);
    //         // this.handleDateChange(date);
    //     },
    // });
    // console.log(inst);

    this.getTemplates();
  }

  getTemplates() {
    axios.get('/api/templates').then(response => {
      this.setState({
        templates: response.data,
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Format date from form elements
    let starts_at = moment(e.target.elements.starts_at.value).format('YYYY-MM-DD h:m:s');
    let ends_at = moment(e.target.elements.ends_at.value).format('YYYY-MM-DD h:m:s');
    let formData = this.state.editTemplate;
    formData.starts_at = starts_at;
    formData.ends_at = ends_at;

    axios
      .put('/api/email-template/update', formData)
      .then(response => {
        if (response.status === 200) {
          M.toast({ html: 'Successfully Updated!' });
        }
        this.getTemplates();
      })
      .catch(e => {
        M.toast({ html: 'Failed. Try again.' });
      });
  }

  handleEdit(e) {
    this.setState({
      editTemplate: JSON.parse(e.target.dataset.json),
    });
  }

  handleTemplateChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    // For switch toggle value
    if (name === 'status') {
      value = value === '1' ? '0' : '1';
    }

    // // For date format - materialize datepicker doesn't recognize onChange
    // if (name === 'starts_at' || name === 'ends_at') {
    //     console.log(name, value);
    //     value = moment(value).format('YYYY-MM-DD h:m:s');
    // }

    this.setState(prevState => ({
      editTemplate: {
        ...prevState.editTemplate,
        [name]: value,
      },
    }));
  }

  handleDelete() {
    axios
      .delete(`/api/email-template/delete/${this.state.deleteId}`)
      .then(response => {
        if (response.status === 200) {
          M.toast({ html: 'Successfully Deleted' });
        }
        this.getTemplates();
      })
      .catch(e => {
        M.toast({ html: 'Delete failed!' });
      });
  }

  render() {
    const { templates, editTemplate } = this.state;
    const mapped =
      Object.keys(templates).length > 0 &&
      templates.map(data => {
        return (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.subject}</td>
            <td>{data.group}</td>
            <td>{data.template}</td>
            <td>{data.starts_at}</td>
            <td>{data.ends_at}</td>
            <td>{data.frequency}</td>
            <td>{data.status}</td>
            <td>
              <Button
                customClasses="modal-trigger"
                onClick={e => {
                  this.handleEdit(e);
                }}
                href="#modal1"
                data-json={JSON.stringify(data)}
              >
                Edit
              </Button>
              <Button
                customClasses="red darken-3 modal-trigger"
                href="#deleteModal"
                onClick={() => {
                  this.setState({
                    deleteId: data.id,
                  });
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        );
      });
    return (
      <>
        <Header />
        <div id="main">
          <div className="container-fluid">
            <div className="card">
              <div className="card-content">
                <table>
                  <thead className="highlight">
                    <tr>
                      <th>Id</th>
                      <th>Title</th>
                      <th>Subject</th>
                      <th>Group</th>
                      <th>Template</th>
                      <th>Starts At</th>
                      <th>Ends At</th>
                      <th>Frequency</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>{mapped}</tbody>
                </table>
              </div>
            </div>
          </div>

          {/*  Delete Modal  */}
          <div id="deleteModal" className="modal">
            <div className="modal-content">
              <h4>Delete Confirmation</h4>
              <p>Are you sure?</p>
            </div>
            <div className="modal-footer">
              <button
                className="modal-close waves-effect waves-green btn-flat"
                onClick={this.handleDelete}
              >
                Yes
              </button>
              <button className="modal-close waves-effect waves-green btn-flat">Cancel</button>
            </div>
          </div>

          {/* Edit Modal */}
          <div id="modal1" className="modal">
            <div className="modal-content">
              <h4>Edit Template</h4>
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <input type="hidden" name="id" value={editTemplate.id} />
                    <input
                      id="title"
                      name="title"
                      type="text"
                      value={editTemplate.title}
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
                      value={editTemplate.subject}
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
                      value={editTemplate.template}
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
                      value={editTemplate.group}
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
                  <div className="input-field col s6">
                    <input
                      type="text"
                      name="starts_at"
                      id="starts_at"
                      className="datepicker"
                      value={editTemplate.starts_at}
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
                      value={editTemplate.ends_at}
                      onInputCapture={this.handleTemplateChange}
                      onChange={this.handleTemplateChange}
                      required
                    />
                    <label htmlFor="endDate" className="center-align">
                      End Date
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <select
                      name="frequency"
                      id="frequency"
                      value={editTemplate.frequency}
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
                          value={editTemplate.status}
                          checked={editTemplate.status == '1'}
                          onChange={this.handleTemplateChange}
                        />
                        <span className="lever" />
                        Enabled
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { Templates };
