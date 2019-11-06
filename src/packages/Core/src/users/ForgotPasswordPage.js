import React from 'react';
import { Link } from 'react-router-dom';

import { Form } from '../../Components/Form';
import { Button } from '../../Components/Button';
import { InputField } from '../../Components/InputField';

class ForgotPasswordPage extends React.Component {
  state = {
    email: '',
  };

  render() {
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
              <div id="forgot-password" className="row">
                <div className="col s12 m6 l4 z-depth-4 offset-m4 card-panel border-radius-6 forgot-card bg-opacity-8">
                  <Form customClasses="login-form">
                    <div className="row">
                      <InputField customClasses="col s12">
                        <h5 className="ml-4">Forgot Password</h5>
                        <p className="ml-4">You can reset your password</p>
                      </InputField>
                    </div>
                    <div className="row">
                      <InputField customClasses="col s12">
                        <i className="material-icons prefix pt-2">person_outline</i>
                        <input id="email" type="email" />
                        <label htmlFor="email" className="center-align">
                          Email
                        </label>
                      </InputField>
                    </div>
                    <div className="row">
                      <InputField customClasses="col s12">
                        <Button type="submit" customClasses="col s12 mb-1">
                          Reset Password
                        </Button>
                      </InputField>
                    </div>
                    <div className="row">
                      <InputField customClasses="col s6 m6 l6">
                        <p className="margin medium-small">
                          <Link to="/login">Login</Link>
                        </p>
                      </InputField>
                      <InputField customClasses="col s6 m6 l6">
                        <p className="margin right-align medium-small">
                          <Link to="/register">Register</Link>
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

export default ForgotPasswordPage;
