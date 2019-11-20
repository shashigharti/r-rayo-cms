import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import { Redirect } from 'react-router-dom';
import { LoginDiv } from '../../../../Components/LoginDiv';
import { LoginBg } from '../../../../Components/LoginBg';
import { apiService } from '../../../..';

const RegsiterPage = props => {
  const { dispatch } = useContext(AuthContext);
  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    M.AutoInit();
  });

  const setFieldValue = (field, value) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();

    //api call for register
    const response = apiService.store('/api/register', state);
    response
      .then(response => {
        console.log('success', response);
        dispatch({
          type: 'REGISTER_SUCCESS',
          user: response.data.user,
          status: response.data.success,
        });
        props.history.push('/');
      })
      .catch(err => {
        console.log(err.response);
        M.toast({ html: 'Something went wrong !' });
        if (err.response.status == '422') {
          const errors = err.response.data.errors;
          Object.keys(errors).map(function(keys) {
            errors[keys].map(function(message) {
              M.toast({ html: message });
            });
          });
        }
      });
  };
  const { auth } = useContext(AuthContext);
  return (
    <>
      {auth.isAuthenticated ? <Redirect to="/" /> : null}
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
                  <form name="form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="input-field col s12">
                        <h5 className="ml-4">Register</h5>
                        <p className="ml-4">Join to our community now !</p>
                      </div>
                    </div>
                    <div className="input-field">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        value={state.first_name}
                        onChange={e => setFieldValue('first_name', e.target.value)}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        value={state.last_name}
                        onChange={e => setFieldValue('last_name', e.target.value)}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={state.email}
                        onChange={e => setFieldValue('email', e.target.value)}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={state.password}
                        onChange={e => setFieldValue('password', e.target.value)}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="cpassword">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="c_password"
                        value={state.c_password}
                        onChange={e => setFieldValue('c_password', e.target.value)}
                      />
                    </div>
                    <div className="input-field">
                      <button className="btn btn-primary">Register</button>
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
    </>
  );
};

export default RegsiterPage;
