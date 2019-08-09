import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import materialize
import M from 'materialize-css';

// import global css which can be overriden
// TODO: Check if following to css for materialize are redundant
// import 'materialize-css/dist/css/materialize.min.css';
import '../assets/fonts/fontawesome/css/font-awesome.css';
import '../assets/css/themes/cms/materialize.css';
import '../assets/css/themes/cms/style.css';
import '../assets/css/components/color.css';
import '../assets/vendors/dropify/css/dropify.min.css';
import '../assets/css/components/table.css';

import './app.css';

import { HomePage } from './containers/home/Dashboard';
import { LoginPage } from './containers/login/LoginPage';
import { PageList } from './containers/pageList/PageList';
import { RegisterPage } from './containers/register/RegisterPage';
import { ForgotPasswordPage } from './containers/forgot-password/ForgotPasswordPage';

import { PrivateRoute } from './components';
import * as serviceWorker from './serviceWorker';
import { PageEdit } from './containers/pageEdit';

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
        <Route path="/page-list" component={PageList} />
        <Route path="/page-edit" component={PageEdit} />
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
