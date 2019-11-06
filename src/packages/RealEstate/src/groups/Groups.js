import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import axios from 'axios';
import { Row } from './Row';

const crumbs = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Groups',
    subPath: 'pages',
    path: 'groups',
  },
];

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };

    this.fetchGroups = this.fetchGroups.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.setDelete = this.setDelete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    M.AutoInit();
    this.fetchGroups();
  }

  fetchGroups() {
    axios.get('/api/groups/all').then(response => {
      this.setState({
        groups: response.data.data,
      });
    });
  }

  setDelete(id) {
    this.setState({
      deleteId: id,
    });
  }

  handleDelete() {
    axios
      .delete(`/api/groups/delete/${this.state.deleteId}`)
      .then(response => {
        console.log(response);
        M.toast({ html: response.data.message, classes: response.data.class });
        this.fetchGroups();
      })
      .catch(e => {
        console.log(e);
        M.toast({ html: 'Failed to delete.', classes: 'red darken-1' });
      });
  }

  handleStatus(id, status) {
    let formData = {
      status: !status,
    };
    console.log(formData);
    axios
      .put(`/api/groups/update/${id}`, formData)
      .then(response => {
        console.log(response.data.message);
        M.toast({ html: response.data.message });
        this.fetchGroups();
      })
      .catch(e => {
        console.log(e);
        M.toast({ html: 'Failed. Please try again later.', classes: 'red darken-1' });
      });
  }

  render() {
    const { groups } = this.state;
    const groupRows =
      groups.length > 0 &&
      groups.map(group => {
        return (
          <Row
            sn={group.id}
            status={group.status}
            name={group.name}
            color={group.color}
            key={group.id}
            onClick={this.handleStatus}
            onDeleteClick={this.setDelete}
          />
        );
      });
    return (
      <>
        <div id="main">
          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="row breadcrumbs-inline" id="breadcrumbs-wrapper">
                  <div className="col s10 m6 l6 breadcrumbs-left">
                    <BreadCrumbs title="Groups" rootPath="" crumbs={crumbs} />
                  </div>
                  <div className="col s2 m6 l6 right--button">
                    <Link
                      className="btn btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange breadcrumbs-btn right"
                      title="add"
                      to="/add-group"
                    >
                      <i className="material-icons">add</i>
                    </Link>
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
                    <table className="table data-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Color</th>
                          <th className="text-nowrap center-align">Action</th>
                        </tr>
                      </thead>
                      <tbody>{groupRows}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Edit Modal */}
          <div id="modal1" className="modal">
            <div className="modal-content">
              <h4>Delete Confirmation</h4>
              <p>Are you sure?</p>
            </div>
            <div className="modal-footer">
              <button
                className="modal-close waves-effect waves-green btn-flat"
                onClick={this.handleDelete}
              >
                Confirm
              </button>
              <button className="modal-close waves-effect waves-green btn-flat">Cancel</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { Groups };
