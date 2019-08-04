import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from '../../components';
import { userActions } from '../../actions';
// import materialize
import M from 'materialize-css';

import './login.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        // const { username, password } = this.state;
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(userActions.login(email, password));
        } else {
            alert('Please enter valid email / password');
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // If Logged in redirect to dashboard.
        const { authentication, alert, history } = this.props;
        authentication.loggedIn && history.push('/');

        if (alert.type !== prevProps.alert.type) {
            M.toast({ html: alert.message });
            alert.type = ''; // Reset alert after user alerted
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
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
                                    <form className="login-form">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <h5 className="ml-4">
                                                    Sign in
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="row margin">
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix pt-2">
                                                    person_outline
                                                </i>
                                                <input
                                                    id="username"
                                                    type="text"
                                                />
                                                <label
                                                    htmlFor="username"
                                                    className="center-align"
                                                >
                                                    Username
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row margin">
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix pt-2">
                                                    lock_outline
                                                </i>
                                                <input
                                                    id="password"
                                                    type="password"
                                                />
                                                <label htmlFor="password">
                                                    Password
                                                </label>
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
                                                <a
                                                    href="index.html"
                                                    className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12"
                                                >
                                                    Login
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6 m6 l6">
                                                <p className="margin medium-small">
                                                    <Link to="/register">
                                                        Register Now!
                                                    </Link>
                                                </p>
                                            </div>
                                            <div className="input-field col s6 m6 l6">
                                                <p className="margin right-align medium-small">
                                                    <Link to="/forgot-password">
                                                        Forgot password ?
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
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
        alert
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
