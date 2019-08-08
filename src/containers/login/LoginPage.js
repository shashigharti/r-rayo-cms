import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import materialize
import M from 'materialize-css';

import './login.css';

import { userActions } from '../../actions';
import { Form } from '../../components/Form';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      submitted: false,
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;

    if (email && password) {
      dispatch(userActions.login(email, password));
    } else {
      alert('Please enter valid email / password');
    }
  };

  componentDidUpdate(prevProps) {
    // If Logged in redirect to dashboard.
    const { authentication, alert, history } = this.props;
    authentication.loggedIn && history.push('/');

    if (alert.type !== prevProps.alert.type) {
      M.toast({ html: alert.message });
      alert.type = ''; // Reset alert after user alerted
    }
  }

  render() {
    const { email, password, submitted } = this.state;
    return (
      <div
        className="vertical-layout page-header-light vertical-menu-collapsible vertical-menu-nav-dark 1-column login-bg  blank-page blank-page"
        data-open="click"
        data-menu="vertical-menu-nav-dark"
        data-col="1-column"
      >
        <div className="row">
          <div className="col s12">
            <div className="container">
              <div id="login-page" className="row">
                <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                  <Form customClasses="login-form">
                    <div className="row">
                      <InputField customClasses="col s12">
                        <h5 className="ml-4">Sign in</h5>
                      </InputField>
                    </div>
                    <div className="row margin">
                      <InputField customClasses="col s12">
                        <i className="material-icons prefix pt-2">person_outline</i>
                        <input
                          id="email"
                          name="email"
                          value={email}
                          onChange={this.handleChange}
                          type="text"
                        />
                        <label htmlFor="email" className="center-align">
                          Email
                        </label>
                        {submitted && !email && (
                          <div className="help-block red-text darken-3">Email cannot be empty</div>
                        )}
                      </InputField>
                    </div>
                    <div className="row margin">
                      <InputField customClasses="col s12">
                        <i className="material-icons prefix pt-2">lock_outline</i>
                        <input
                          id="password"
                          name="password"
                          value={password}
                          onChange={this.handleChange}
                          type="password"
                        />
                        <label htmlFor="password">Password</label>
                        {submitted && !password && (
                          <div className="help-block red-text darken-3">
                            Password cannot be empty
                          </div>
                        )}
                      </InputField>
                    </div>
                    <div className="row">
                      <div className="col s12 m12 l12 ml-2 mt-1">
                        <p>
                          <label>
                            <input type="checkbox" />
                            <span>Remember Me</span>
                          </label>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <InputField customClasses="col s12">
                        <Button type="submit" onClick={this.handleSubmit} customClasses="col s12">
                          Login
                        </Button>
                      </InputField>
                    </div>
                    <div className="row">
                      <InputField customClasses="col s6 m6 l6">
                        <p className="margin medium-small">
                          <Link to="/register">Register Now!</Link>
                        </p>
                      </InputField>
                      <InputField customClasses="col s6 m6 l6">
                        <p className="margin right-align medium-small">
                          <Link to="/forgot-password">Forgot password ?</Link>
                        </p>
                      </InputField>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authentication, alert } = state;
  return {
    authentication,
    alert,
  };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
