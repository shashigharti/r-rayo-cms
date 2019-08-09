/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import M from 'materialize-css';

import './register.css';

import { userActions } from '../../actions';
import { Form } from '../../components/Form';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        c_password: '',
      },
      submitted: false,
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { alert } = this.props;
    if (alert.type !== prevProps.alert.type) {
      M.toast({ html: alert.message });
      alert.type = ''; // Reset alert after user alerted
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.first_name && user.last_name && user.email && user.password === user.c_password) {
      dispatch(userActions.register(user));
    }
  };

  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;

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
              <div id="register-page" className="row">
                <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 register-card bg-opacity-8">
                  <Form customClasses="login-form">
                    <div className="row">
                      <InputField customClasses="col s12">
                        <h5 className="ml-4">Register</h5>
                        <p className="ml-4">Join to our community now !</p>
                      </InputField>
                    </div>
                    <div className="row margin">
                      <InputField customClasses="col s12">
                        <i className="material-icons prefix pt-2">person_outline</i>
                        <input
                          id="firstName"
                          name="first_name"
                          value={user.first_name}
                          onChange={this.handleChange}
                          type="text"
                        />
                        <label htmlFor="firstName" className="center-align">
                          First Name
                        </label>
                        {submitted && !user.first_name && (
                          <div className="help-block red-text darken-3">First Name is required</div>
                        )}
                      </InputField>
                    </div>
                    <div className="row margin">
                      <InputField customClasses="col s12">
                        <i className="material-icons prefix pt-2">person_outline</i>
                        <input
                          id="lastName"
                          name="last_name"
                          value={user.last_name}
                          onChange={this.handleChange}
                          type="text"
                        />
                        <label htmlFor="lastName" className="center-align">
                          Last Name
                        </label>
                        {submitted && !user.last_name && (
                          <div className="help-block red-text darken-3">Last Name is required</div>
                        )}
                      </InputField>
                    </div>
                    <div className="row margin">
                      <InputField customClasses="col s12">
                        <i className="material-icons prefix pt-2">mail_outline</i>
                        <input
                          id="email"
                          name="email"
                          value={user.email}
                          onChange={this.handleChange}
                          type="email"
                        />
                        <label htmlFor="email">Email</label>
                        {submitted && !user.email && (
                          <div className="help-block red-text darken-3">Email is required</div>
                        )}
                      </InputField>
                    </div>
                    <div className="row margin">
                      <InputField customClasses="col s12">
                        <i className="material-icons prefix pt-2">lock_outline</i>
                        <input
                          id="password"
                          name="password"
                          value={user.password}
                          onChange={this.handleChange}
                          type="password"
                        />
                        <label htmlFor="password">Password</label>
                        {submitted && !user.password && (
                          <div className="help-block red-text darken-3">Password is required</div>
                        )}
                      </InputField>
                    </div>
                    <div className="row margin">
                      <InputField customClasses="col s12">
                        <i className="material-icons prefix pt-2">lock_outline</i>
                        <input
                          id="confirmPassword"
                          name="c_password"
                          value={user.c_password}
                          onChange={this.handleChange}
                          type="password"
                        />
                        <label htmlFor="confirmPassword">Password again</label>
                        {submitted && user.password !== user.c_password && (
                          <div className="help-block red-text darken-3">Password do not match</div>
                        )}
                      </InputField>
                    </div>
                    <div className="row">
                      <InputField customClasses="col s12">
                        <Button type="submit" onClick={this.handleSubmit} customClasses="col s12">
                          Register
                        </Button>
                        {registering && (
                          <img
                            alt="Loading"
                            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                          />
                        )}
                      </InputField>
                    </div>
                    <div className="row">
                      <InputField customClasses="col s12">
                        <p className="margin medium-small">
                          <Link to="/login">Already have an account? Login</Link>
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
  const { registering } = state.registration;
  const { alert } = state;
  return {
    registering,
    alert,
  };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
