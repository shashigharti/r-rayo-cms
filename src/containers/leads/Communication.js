import React, { Component } from 'react';

class Communication extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { emails } = this.props;
    const emailRows = emails.map(email => {
      return (
        <li key={email.id}>
          <div className="collapsible-header">
            <i className="material-icons">mail_outline</i>
            {email.subject}
          </div>
          <div className="collapsible-body">
            <span className="content" dangerouslySetInnerHTML={{ __html: email.email }} />
          </div>
        </li>
      );
    });

    return (
      <>
        <div className="row">
          <div className="panel card col s12">
            <div className="col s12 mt-2">
              <h5>Sent Emails</h5>
            </div>
            <div className="details">
              {emailRows.length > 0 ? (
                <ul className="collapsible">{emailRows}</ul>
              ) : (
                <p className="col s12">No communications available.</p>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { Communication };
