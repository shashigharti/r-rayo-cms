import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import M from 'materialize-css';

import './register.css';

// import { userActions } from '../../actions';
import { Form } from '../../components/Form';
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

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   const { alert } = this.props;
  //   if (alert.type !== prevProps.alert.type) {
  //     M.toast({ html: alert.message });
  //     alert.type = ''; // Reset alert after user alerted
  //   }
  // }

  // handleChange(event) {
  //   const { name, value } = event.target;
  //   const { user } = this.state;
  //   this.setState({
  //     user: {
  //       ...user,
  //       [name]: value,
  //     },
  //   });
  // }

  //   handleSubmit(event) {
  //     event.preventDefault();

  //     this.setState({ submitted: true });
  //     const { user } = this.state;
  //     const { dispatch } = this.props;
  //     if (user.first_name && user.last_name && user.email && user.password === user.c_password) {
  //       dispatch(userActions.register(user));
  //     }
  //   }

  render() {
    // const { registering } = this.props;
    // const { user, submitted } = this.state;

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
                        <input id="username" type="text" />
                        <label htmlFor="username" className="center-align">
                          Username
                        </label>
                      </InputField>
                    </div>
                    <div className="row margin">
                      <InputField customClasses="col s12">
                        <i className="material-icons prefix pt-2">mail_outline</i>
                        <input id="email" type="email" />
                        <label htmlFor="email">Email</label>
                      </InputField>
                    </div>
                    <div className="row margin">
                      <InputField customClasses="col s12">
                        <i className="material-icons prefix pt-2">lock_outline</i>
                        <input id="password" type="password" />
                        <label htmlFor="password">Password</label>
                      </InputField>
                    </div>
                    <div className="row margin">
                      <InputField customClasses="col s12">
                        <i className="material-icons prefix pt-2">lock_outline</i>
                        <input id="password-again" type="password" />
                        <label htmlFor="password-again">Password again</label>
                      </InputField>
                    </div>
                    <div className="row">
                      <InputField customClasses="col s12">
                        <a
                          href="index.html"
                          className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12"
                        >
                          Register
                        </a>
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
