import React, { Component } from 'react';
import axios from 'axios';

class LeadDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lead: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    axios.get(`/api/lead/${params.id}`).then(response => {
      this.setState({
        loading: false,
        lead: response.data.data,
      });
    });
  }

  render() {
    return (
      <div id="main">
        <div className="row">
          <div className="col s12">
            <div className="container-fluid">
              <div className="col s12 filter--bar">
                <ul className="tabs theme__tabs">
                  <li className="tab">
                    <a className="active" href="#">
                      Overview
                    </a>
                  </li>
                  <li className="tab">
                    <a href="#">Communication</a>
                  </li>
                  <li className="tab">
                    <a href="#">Notes</a>
                  </li>
                  <li className="tab">
                    <a href="#">Views / Favs</a>
                  </li>
                  <li className="tab">
                    <a href="#">Searches</a>
                  </li>
                  <li className="tab">
                    <a href="#">Bookmarks</a>
                  </li>
                  <li className="tab">
                    <a href="#">Reports</a>
                  </li>
                  <li className="tab">
                    <a href="#">Alerts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { LeadDetails };
