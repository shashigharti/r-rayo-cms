import React, { Component } from 'react';
import { userActions } from '../../actions';
import { connect } from 'react-redux';
import { Link, withRouter, NavLink } from 'react-router-dom';
import { ImageSpan } from '../../components/Styled';
import { Navbar } from '../../components/Navbar';
import { Notification } from './Notification.js'
import { Profile } from './Profile';
import { SideMenu } from './SideMenu';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        let elems = document.querySelectorAll(
            '.dropdown-menu, .profile-button, .notification-button, .translation-button, .dropdown-settings',
        );
        M.Dropdown.init(elems, {
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false,
            hover: false,
            gutter: 0,
            coverTrigger: false,
            alignment: 'right',
            stopPropagation: true,
        });
        // Init materialize on update
        M.AutoInit();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Init materialize on update
        M.AutoInit();
    }

    handleLogout() {
        // reset login status
        this.props.dispatch(userActions.logout());
    }

    render() {
        const { user } = this.props;
        const fullName = user ? user.first_name + ' ' + user.last_name : 'NA';
        return (
            <div
                className="vertical-layout page-header-light vertical-menu-collapsible vertical-menu-nav-dark 2-columns  "
                data-open="click"
                data-menu="vertical-menu-nav-dark"
                data-col="2-columns"
            >
                <header className="page-topbar" id="header">
                    <Navbar className="navbar navbar-fixed">
                        <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar--theme gradient-shadow">
                            <div className="nav-wrapper">
                                <div className="header-search-wrapper hide-on-med-and-down">
                                    <i className="material-icons">search</i>
                                    <input
                                        className="header-search-input z-depth-2"
                                        type="text"
                                        name="Search"
                                        placeholder="Search"
                                    />
                                </div>
                                <ul className="navbar-list right">
                                    <li className="hide-on-large-only">
                                        <a className="waves-effect waves-block waves-light search-button" href="#">
                                            <i className="material-icons">search</i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="waves-effect waves-block waves-light notification-button"
                                            href="#"
                                            data-target="notifications-dropdown"
                                        >
                                            <i className="material-icons left">
                                                notifications_none
                                                <small className="notification-badge">5</small>
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="waves-effect waves-block waves-light profile-button"
                                            href="#"
                                            data-target="profile-dropdown"
                                        >
                                            <ImageSpan>
                                                <img
                                                    src={`https://ui-avatars.com/api/?name=${fullName}&rounded=true&bold=true`}
                                                    alt="avatar"
                                                />
                                            </ImageSpan>
                                        </a>
                                    </li>
                                </ul>
                                <Profile />
                                <Notification />
                            </div>
                            <nav className="display-none search-sm">
                                <div className="nav-wrapper">
                                    <form>
                                        <div className="input-field">
                                            <input className="search-box-sm" type="search" required="" />
                                            <label className="label-icon" htmlFor="search">
                                                <i className="material-icons search-sm-icon">search</i>
                                            </label>
                                            <i className="material-icons search-sm-close">close</i>
                                        </div>
                                    </form>
                                </div>
                            </nav>
                        </nav>
                    </Navbar>
                </header>
                <SideMenu />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users,
        authentication,
    };
}

const connectedHeader = connect(mapStateToProps)(Header);
const connectedWithRouter = withRouter(connectedHeader);
export default connectedWithRouter;
