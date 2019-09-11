import React, { Component } from 'react';
import axios from 'axios';
import { Button } from '../../components/Button';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteData: {
        note_id: null,
        lead_id: this.props.leadId,
        note_title: '',
        note: '',
        mode: null,
      },
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    M.updateTextFields();
  }

  handleDelete(noteId) {
    axios
      .post('/api/lead-note/delete', { note_id: noteId, lead_id: this.props.leadId })
      .then(response => {
        M.toast({ html: response.data.message });
        this.props.getLead();
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { noteData } = this.state;
    let user = JSON.parse(localStorage.getItem('user'));
    let config = {
      headers: { Authorization: 'bearer ' + user.token },
    };
    let url = noteData.mode === 'add' ? '/api/lead-note/store' : '/api/lead-note/update';
    let method = noteData.mode === 'add' ? 'post' : 'put';
    axios.defaults.headers.common = { Authorization: `Bearer ${user.token}` };
    axios({
      method,
      url,
      data: noteData,
    }).then(response => {
      M.toast({ html: response.data.message });
      this.props.getLead();
    });
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => ({
      noteData: {
        ...prevState.noteData,
        [name]: value,
      },
    }));
  }

  render() {
    const { notes } = this.props;
    const { noteData } = this.state;
    const noteRows = notes.map(note => {
      return (
        <div key={note.id} className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <span className="card-title">{note.title}</span>
              <p>{note.note}</p>
            </div>
            <div className="card-action">
              <a
                onClick={() => {
                  this.setState(prevState => ({
                    noteData: {
                      ...prevState.noteData,
                      note_id: note.id,
                      note_title: note.title,
                      note: note.note,
                      mode: 'edit',
                    },
                  }));
                }}
                href="#editModal"
                className="modal-trigger"
              >
                <i className="material-icons center">edit</i>
              </a>
              <a
                href="#"
                onClick={() => {
                  this.handleDelete(note.id);
                }}
              >
                <i className="material-icons center">delete</i>
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <>
        <div className="row">
          <div className="panel card col s12">
            <div className="row">
              <div className="col s6 mt-2">
                <h5>Notes</h5>
              </div>
              <div className="col s6 mt-2">
                <a
                  href="#editModal"
                  onClick={() => {
                    this.setState(prevState => ({
                      noteData: {
                        ...prevState.noteData,
                        note_id: null,
                        note_title: '',
                        note: '',
                        mode: 'add',
                      },
                    }));
                  }}
                  className="btn-floating btn-sm waves-effect waves-light right modal-trigger"
                >
                  <i className="material-icons">add</i>
                </a>
              </div>
            </div>

            <div className="details">
              <div className="row">
                {noteRows.length > 0 ? noteRows : <p className="col s12">No notes available.</p>}
              </div>
            </div>
          </div>
        </div>

        {/*  Edit Modal  */}
        <div id="editModal" className="modal">
          <div className="modal-content">
            <h4>{noteData.mode === 'add' ? 'New Note' : 'Edit Note'}</h4>
            <form className="mt-4" onSubmit={this.handleSubmit}>
              <div className="input-field">
                <i className="material-icons prefix">title</i>
                <input
                  id="note_title"
                  type="text"
                  value={noteData.note_title}
                  name="note_title"
                  onChange={this.handleChange}
                />
                <label htmlFor="title">Title</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">note</i>
                <textarea
                  id="note"
                  className="materialize-textarea"
                  name="note"
                  value={noteData.note}
                  onChange={this.handleChange}
                />
                <label htmlFor="note">Note</label>
              </div>
              <div className="input-field">
                <Button type="submit">Save</Button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export { Notes };
