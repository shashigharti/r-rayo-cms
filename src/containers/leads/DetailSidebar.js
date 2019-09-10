import React, { Component } from 'react';
import axios from 'axios';

class DetailSidebar extends Component {
  constructor(props) {
    super(props);
    const { lead } = props;
    this.state = {
      nameData: {
        firstname: lead.firstname,
        lastname: lead.lastname,
      },
      emailData: {
        email: '',
        mode: 'add',
      },
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGroupChange = this.handleGroupChange.bind(this);
    this.editLead = this.editLead.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.handleEmailDelete = this.handleEmailDelete.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    M.updateTextFields();
  }

  handleNameChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => ({
      nameData: {
        ...prevState.nameData,
        [name]: value,
      },
    }));
  }

  handleEmailChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => ({
      emailData: {
        ...prevState.emailData,
        [name]: value,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.editLead(this.state.nameData);
  }

  handleEmailSubmit(e) {
    e.preventDefault();
    const { emailData } = this.state;

    if (this.props.lead.additional_email && emailData.mode === 'add') {
      M.toast({ html: 'Lead already has two emails. Please remove one to continue' });
    } else {
      let formData =
        emailData.type === 'primary'
          ? { email: emailData.email }
          : { additional_email: emailData.email };
      this.editLead(formData);
    }
  }

  handleEmailDelete() {
    let formData = { additional_email: null };
    this.editLead(formData);
  }

  editLead(data) {
    axios.put(`/api/lead/edit/${this.props.lead.id}`, data).then(response => {
      M.toast({ html: response.data.message });
      this.props.getLead();
    });
  }

  findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  }

  handleCategoryDelete(id) {
    axios.delete(`/api/lead-category/delete/${id}`).then(response => {
      M.toast({ html: response.data.message });
      this.props.getLead();
    });
  }

  handleGroupChange(e) {
    let category_id = e.target.value;
    let lead_id = this.props.lead.id;
    let name = this.findObjectByKey(this.props.groups, 'id', parseInt(category_id)).name;
    axios.put('/api/lead-category/store', { lead_id, category_id, name }).then(response => {
      M.toast({ html: response.data.message });
      this.props.getLead();
    });
  }

  render() {
    const { lead, groups } = this.props;
    const { metadata, categories } = lead;
    const { nameData, emailData } = this.state;
    const groupOptions =
      groups &&
      groups.map(group => {
        return (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
        );
      });
    const groupChips =
      groups &&
      categories.map(s => {
        const group = this.findObjectByKey(groups, 'id', s.category_id);

        return (
          group && (
            <div
              key={s.id}
              className="chip-custom"
              style={{
                backgroundColor: group.color,
              }}
            >
              {group.name}
              <i
                onClick={() => {
                  this.handleCategoryDelete(s.id);
                }}
                className="close material-icons"
              >
                close
              </i>
            </div>
          )
        );
      });
    return (
      <div className="col s3">
        <div className="panel card fixed--bar">
          <h3 className="title">
            {lead.firstname + ' ' + lead.lastname}
            <a href="#edit" className="modal-trigger">
              <i className="material-icons">edit</i>
            </a>
          </h3>
          <div id="edit" className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <span>Edit Lead Name</span>
                <a href="#!" className="modal-action modal-close right ">
                  <i className="material-icons">clear</i>
                </a>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="text"
                        name="firstname"
                        onChange={this.handleNameChange}
                        value={nameData.firstname}
                      />
                      <label className="">First Name</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="text"
                        name="lastname"
                        onChange={this.handleNameChange}
                        value={nameData.lastname}
                      />
                      <label>Last Name</label>
                    </div>
                    <div className="col s12">
                      <button type="submit" className=" btn purple">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bar-btn">
            <a href="#" className="btn btn-small cyan">
              <i className="material-icons">email</i>Send Email
            </a>
            <a href="#" className="btn btn-small cyan">
              <i className="material-icons">search</i>Add Search
            </a>
          </div>
          <div className="row">
            <div className="tags col s12">{groupChips}</div>
            <div className="col s12">
              <select onChange={this.handleGroupChange}>
                <option value="">Assign group</option>
                {groupOptions}
              </select>
            </div>
          </div>
          <div className="form-element">
            <div className="row">
              <div className="col s12">
                <h5>
                  Email
                  <a
                    onClick={() => {
                      this.setState({
                        emailData: {
                          email: '',
                          mode: 'add',
                          type: 'additional',
                        },
                      });
                    }}
                    href="#email-edit"
                    className="modal-trigger"
                  >
                    <i className="material-icons right">add</i>
                  </a>
                </h5>
                <div>
                  {lead.email}
                  <a
                    href="#email-edit"
                    onClick={() => {
                      this.setState({
                        emailData: {
                          email: lead.email,
                          mode: 'edit',
                          type: 'primary',
                        },
                      });
                    }}
                    className="right modal-trigger"
                  >
                    <i className="material-icons">edit</i>
                  </a>
                </div>
                {lead.additional_email && (
                  <div>
                    {lead.additional_email}
                    <a href="#" onClick={this.handleEmailDelete} className="right">
                      <i className="material-icons">delete</i>
                    </a>
                    <a
                      href="#email-edit"
                      onClick={() => {
                        this.setState({
                          emailData: {
                            email: lead.additional_email,
                            mode: 'edit',
                            type: 'additional',
                          },
                        });
                      }}
                      className="right modal-trigger"
                    >
                      <i className="material-icons">edit</i>
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="row mt-5">
              <div className="col s12">
                <h5>
                  Phone
                  <a href="#add" className="modal-trigger">
                    <i className="material-icons right">add</i>
                  </a>
                </h5>
                <div>
                  {lead.phone_number}
                  <a href="#" className="right">
                    <i className="material-icons">delete</i>
                  </a>
                  <a href="#email-edit" className="right modal-trigger">
                    <i className="material-icons">edit</i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col s12">
                <h5>
                  Address
                  <a href="#add" className="modal-trigger">
                    <i className="material-icons right">add</i>
                  </a>
                </h5>
                <div>
                  {lead.address}
                  <a href="#" className="right">
                    <i className="material-icons">delete</i>
                  </a>
                  <a href="#email-edit" className="right modal-trigger">
                    <i className="material-icons">edit</i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col s12">
                <h5>
                  Price
                  <a href="#add" className="modal-trigger">
                    <i className="material-icons right">add</i>
                  </a>
                </h5>
                <div>
                  908764322
                  <a href="#" className="right">
                    <i className="material-icons">delete</i>
                  </a>
                  <a href="#email-edit" className="right modal-trigger">
                    <i className="material-icons">edit</i>
                  </a>
                </div>
                <div className="mt-7">
                  <p>MEDIAN PRICE: {metadata.median_price || 'N/A'}</p>
                  <p>AVERAGE PRICE: {metadata.average_price || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Email edit Modal */}
        <div id="email-edit" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span>{emailData.mode === 'add' ? 'New Email' : 'Edit Email'}</span>
              <a href="#!" className="modal-action modal-close right ">
                <i className="material-icons">clear</i>
              </a>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleEmailSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      type="email"
                      name="email"
                      onChange={this.handleEmailChange}
                      value={emailData.email}
                      required
                    />
                    <label>Email</label>
                  </div>
                  <div className="col s12">
                    <button type="submit" className="btn purple">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { DetailSidebar };
