import React, { Component } from 'react';
import axios from 'axios';
import { EditSearch } from './Sidebar/EditSearch';
import moment from 'moment'

class Searches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        price_min: 'default',
        price_max: 'default',
        baths_min: 'default',
        baths_max: 'default',
        beds_min: 'default',
        beds_max: 'default',
        status: [],
        type: [],
      },
      searchId: null
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    axios.delete(`/api/lead-search/delete/${id}`).then(response => {
      M.toast({ html: response.data.message });
      this.props.getLead();
    });
  }

  render() {
    const { lead } = this.props;
    const { searches } = lead;
    const { formData, searchId } = this.state;
    const leadName = lead.firstname + ' ' + lead.lastname;

    const searchRows = searches.map(search => {
      return (
        <div key={search.id} className="col s12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">
                {leadName} saved a search {search.name} at {moment(search.created_at).format('llll')} with the following
                references:
              </span>
              {Object.entries(search.content).map((s, ind) => {
                return (
                  <div key={ind} className="chip">
                    {s[0]} : {s[1]}
                  </div>
                );
              })}
            </div>
            <div className="card-action">
              <a
                href="#"
                onClick={() => {
                  this.handleDelete(search.id);
                }}
              >
                <i className="material-icons center">delete</i>
              </a>
              <a
                href="#search-edit-modal"
                className="modal-trigger"
                onClick={() => {
                  let formData = search.content;
                  formData.search_name = search.name;
                  formData.frequency = search.frequency;
                  this.setState({
                    formData,
                    searchId: search.id
                  });
                }}
              >
                <i className="material-icons center">edit</i>
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
                <h5>Searches</h5>
              </div>
            </div>

            <div className="details">
              <div className="row">
                {searchRows.length > 0 ? (
                  searchRows
                ) : (
                  <p className="col s12">No searches available.</p>
                )}
              </div>
            </div>
          </div>
          {/* Search Edit Modal */}
          <div id="search-edit-modal" className="modal">
            <div className="modal-content">
              <h4>Edit Search</h4>
              <EditSearch lead={lead} searchId={searchId} formData={formData} getLead={this.props.getLead} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { Searches };
