import React, { Component } from 'react';
import axios from 'axios';

class Searches extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    axios.delete(`/api/lead-search/delete/${id}`).then(response => {
      M.toast({ html: response.data.message });
      this.props.getLead();
    });
  }

  render() {
    const { searches, leadName } = this.props;
    const searchRows = searches.map(search => {
      return (
        <div key={search.id} className="col s12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">
                {leadName} saved a search {search.name} at {search.created_at} with the following
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
                {searchRows.length > 0 ? searchRows : <p className="col s12">No searches available.</p>}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { Searches };
