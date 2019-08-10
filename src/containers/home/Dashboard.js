import React from 'react';
import { connect } from 'react-redux';
import { userActions } from './../../actions';
import Header from '../generic/Header';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  handleDeleteUser(id) {
    return e => this.props.dispatch(userActions.delete(id));
  }

  render() {
    const { user, users } = this.props;
    return (
      <>
        <Header />
        <div id="main">Welcome User</div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users,
  };
}

const connectedHomePage = connect(mapStateToProps)(Dashboard);
export { connectedHomePage as HomePage };
