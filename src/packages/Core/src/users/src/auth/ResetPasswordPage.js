import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { LoginDiv } from '../../../../Components/LoginDiv';
import { LoginBg } from '../../../../Components/LoginBg';
import { apiService, alertService } from '../../../..';
import { AuthContext } from '../../../../contexts/AuthContext';
import { Redirect } from 'react-router-dom';

const ResetPasswordPage = props => {
  console.log(props);
  const [state, setState] = useState({
    token: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    const values = queryString.parse(props.location.search);
    setState({
      token: values.token,
      email: values.email,
      password: '',
      password_confirmation: '',
    });
  }, [props]);

  useEffect(() => {
    M.updateTextFields();
  });

  const setFieldValue = (field, value) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const hanldeSubmit = e => {
    e.preventDefault();
    const response = apiService.store('/api/password/update', state);
    const process = alertService.reset(response);
    process.then(status => {
      if (status == true) {
        props.history.push('/login');
      }
    });
  };

  const { auth } = useContext(AuthContext);
  return (
    <>
      {auth.isAuthenticated ? <Redirect to="/" /> : null}
      <LoginBg>
        <div
          className="vertical-layout page-header-light vertical-menu-collapsible vertical-menu-nav-dark 1-column login-bg  blank-page blank-page"
          data-open="click"
          data-menu="vertical-menu-nav-dark"
          data-col="1-column"
        >
          <div className="row">
            <div className="col s12">
              <div className="container">
                <LoginDiv className="row">
                  <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                    <form className="login-form" onSubmit={hanldeSubmit}>
                      <div className="row">
                        <div className="col s12">
                          <h5 className="ml-4">Reset Password</h5>
                          <p className="ml-4">Your New Password</p>
                        </div>
                      </div>
                      <div className="row margin">
                        <div className="input-field col s12">
                          <i className="material-icons prefix pt-2">person_outline</i>
                          <input
                            type="password"
                            value={state.password}
                            onChange={e => setFieldValue('password', e.target.value)}
                          />
                          <label htmlFor="email" className="center-align">
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="row margin">
                        <div className="input-field col s12">
                          <i className="material-icons prefix pt-2">person_outline</i>
                          <input
                            type="password"
                            value={state.password_confirmation}
                            onChange={e => setFieldValue('password_confirmation', e.target.value)}
                          />
                          <label htmlFor="email" className="center-align">
                            Password Confirmation
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <button className="btn btn-primary col s12 mb-1">Submit</button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s6 m6 l6">
                          <p className="margin medium-small">
                            <Link to="/login">Login</Link>
                          </p>
                        </div>
                        <div className="col s6 m6 l6">
                          <p className="margin right-align medium-small">
                            <Link to="/register">Register</Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </LoginDiv>
              </div>
            </div>
          </div>
        </div>
      </LoginBg>
    </>
  );
};

export default ResetPasswordPage;
