import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

import { userActions } from "../../actions";
import { LoginDiv } from "../../components/LoginDiv";
import { LoginBg } from "../../components/LoginBg";
import { connect } from "react-redux";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        c_password: ""
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { alert } = this.props;
    if (alert.type !== prevProps.alert.type) {
      M.toast({ html: alert.message });
      alert.type = ""; // Reset alert after user alerted
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (
      user.first_name &&
      user.last_name &&
      user.email &&
      user.password === user.c_password
    ) {
      dispatch(userActions.register(user));
    }
  }

  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <LoginBg
        className="vertical-layout page-header-light vertical-menu-collapsible vertical-menu-nav-dark 1-column blank-page blank-page"
        data-open="click"
        data-menu="vertical-menu-nav-dark"
        data-col="1-column"
      >
        <div className="row">
          <div className="col s12">
            <div className="container">
              <LoginDiv className="row">
                <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                  <form name="form" onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="input-field col s12">
                        <h5 className="ml-4">Register</h5>
                        <p className="ml-4">Join to our community now !</p>
                      </div>
                    </div>
                    <div
                      className={
                        "input-field" +
                        (submitted && !user.first_name ? " has-error" : "")
                      }
                    >
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        value={user.first_name}
                        onChange={this.handleChange}
                      />
                      {submitted && !user.first_name && (
                        <div className="help-block red-text darken-3">
                          First Name is required
                        </div>
                      )}
                    </div>
                    <div
                      className={
                        "input-field" +
                        (submitted && !user.last_name ? " has-error" : "")
                      }
                    >
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        value={user.last_name}
                        onChange={this.handleChange}
                      />
                      {submitted && !user.last_name && (
                        <div className="help-block red-text darken-3">
                          Last Name is required
                        </div>
                      )}
                    </div>
                    <div
                      className={
                        "input-field" +
                        (submitted && !user.email ? " has-error" : "")
                      }
                    >
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={user.email}
                        onChange={this.handleChange}
                      />
                      {submitted && !user.email && (
                        <div className="help-block red-text darken-3">
                          Email is required
                        </div>
                      )}
                    </div>
                    <div
                      className={
                        "input-field" +
                        (submitted && !user.password ? " has-error" : "")
                      }
                    >
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={user.password}
                        onChange={this.handleChange}
                      />
                      {submitted && !user.password && (
                        <div className="help-block red-text darken-3">
                          Password is required
                        </div>
                      )}
                    </div>
                    <div
                      className={
                        "input-field" +
                        (submitted && !user.password ? " has-error" : "")
                      }
                    >
                      <label htmlFor="cpassword">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="c_password"
                        value={user.c_password}
                        onChange={this.handleChange}
                      />
                      {submitted && user.password !== user.c_password && (
                        <div className="help-block red-text darken-3">
                          Password do not match
                        </div>
                      )}
                    </div>
                    <div className="input-field">
                      <button className="btn btn-primary">Register</button>
                      {registering && (
                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                      )}
                    </div>
                  </form>
                  <p className="center-align">
                    Already registered? <Link to="/login">Login</Link>
                  </p>
                </div>
              </LoginDiv>
            </div>
          </div>
        </div>
      </LoginBg>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  const { alert } = state;
  return {
    registering,
    alert
  };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
