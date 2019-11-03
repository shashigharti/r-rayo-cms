import React, { useContext, useState } from "react";
import { LoginDiv } from "../../components/LoginDiv";
import { LoginBg } from "../../components/LoginBg";
import { AuthContext } from "../../contexts/AuthContext";

export const LoginPage = () => {
  const { dispatch } = useContext(AuthContext);
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN', user: { user, token } });
  }
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
                      <i className="material-icons prefix pt-2">
                        person_outline
                        </i>
                      <input id="email" name="email" type="text" />
                      <label htmlFor="email" className="center-align">
                        Email
                        </label>
                    </div>
                  </div>
                  <div className="row margin">
                    <div className="input-field col s12">
                      <i className="material-icons prefix pt-2">
                        lock_outline
                        </i>
                      <input id="password" type="password" name="password" />
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
              </div>
            </LoginDiv>
          </div>
        </div>
      </div>
    </LoginBg>
  );
}