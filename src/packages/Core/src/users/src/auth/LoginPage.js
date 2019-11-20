import React, { useContext, useState } from 'react';
import { LoginDiv } from '../../../../Components/LoginDiv';
import { LoginBg } from '../../../../Components/LoginBg';
import { AuthContext } from '../../../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = props => {
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();

    // api call for login
    axios
      .post('/api/login', { email, password })
      .then(response => {
        dispatch({
          type: 'LOGIN_SUCCESS',
          user: response.data.user,
          status: response.data.success,
        });
        props.history.push('/');
      })
      .catch(e => {
        dispatch({ type: 'LOGIN_ERROR', status: response.data.success });
        M.toast({ html: 'Please enter valid email / password' });
      });
  };

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
                <form className="login-form" onSubmit={handleLogin}>
                  <div className="row">
                    <div className="input-field col s12">
                      <h5 className="ml-4">Sign in</h5>
                    </div>
                  </div>
                  <div className="row margin">
                    <div className="input-field col s12">
                      <i className="material-icons prefix pt-2">person_outline</i>
                      <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                      <label htmlFor="email" className="center-align">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="row margin">
                    <div className="input-field col s12">
                      <i className="material-icons prefix pt-2">lock_outline</i>
                      <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                      />
                      <label htmlFor="password">Password</label>
                    </div>
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
                    <div className="input-field col s12">
                      <button
                        type="submit"
                        className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
                <p className="center-align">
                  Not Registered ? <Link to="/register">Register</Link>
                </p>
                <p className="center-align">
                  Forgot Password ? <Link to="/forgot-password">Reset Password</Link>
                </p>
              </div>
            </LoginDiv>
          </div>
        </div>
      </div>
    </LoginBg>
  );
};
export default LoginPage;
