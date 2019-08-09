import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { HomePage } from "./containers/home/Dashboard";
import { LoginPage } from "./containers/login/LoginPage";
import { RegisterPage } from "./containers/register/RegisterPage";
import M from "materialize-css";
// Import materialize & static css
import "materialize-css/dist/css/materialize.min.css";

import { PrivateRoute } from "./components";

class App extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
  }

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    const { alert } = this.props;
    return (
      <Router>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
