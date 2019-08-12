import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { HomePage } from './containers/home/Dashboard';
import { LoginPage } from './containers/login/LoginPage';
import { RegisterPage } from './containers/register/RegisterPage';
import { Settings } from './containers/settings/Settings';
import AddTemplate from './containers/email-management/AddTemplate';

import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import { PrivateRoute } from './components';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
  }

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <Router>
        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute exact path="/add-email-template" component={AddTemplate} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
