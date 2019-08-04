import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import materialize
import M from 'materialize-css';

// import global css which can be overriden
// TODO: Check if following to css for materialize are redundant
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/themes/cms/materialize.css';
import '../assets/css/themes/cms/style.css';
import '../assets/css/components/color.css';

import { HomePage } from './containers/home/Dashboard';
import { LoginPage } from './containers/login/LoginPage';
import { RegisterPage } from './containers/register/RegisterPage';
import { ForgotPasswordPage } from './containers/forgot-password/ForgotPasswordPage';

import { PrivateRoute } from './components';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  componentDidMount() {
    M.AutoInit();

    // Register service worker
    serviceWorker.register();
  }

  render() {
    return (
      <Router>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
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
