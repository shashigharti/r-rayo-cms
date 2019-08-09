import React, { Component } from 'react';
import { userActions } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import M from 'materialize-css';

import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    let elems = document.querySelectorAll(
      '.dropdown-menu, .profile-button, .notification-button, .translation-button, .dropdown-settings',
    );
    let instances = M.Dropdown.init(elems, {
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false,
      hover: false,
      gutter: 0,
      coverTrigger: false,
      alignment: 'right',
      stopPropagation: true,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { authentication, history } = this.props;
    if (!authentication.loggedIn) {
      history.push('/login');
    }
  }

  handleLogout() {
    // reset login status
    this.props.dispatch(userActions.logout());
  }

  render() {
    const { user } = this.props;
    const fullName = user ? user.first_name + ' ' + user.last_name : 'NA';
    return (
      <header className="page-topbar" id="header">
        <div className="navbar navbar-fixed">
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
                  <a
                    className="waves-effect waves-block waves-light search-button"
                    href="javascript:void(0);"
                  >
                    <i className="material-icons">search</i>
                  </a>
                </li>
                <li>
                  <a
                    className="waves-effect waves-block waves-light notification-button"
                    href="javascript:void(0);"
                    data-target="notifications-dropdown"
                  >
                    <i className="material-icons">
                      notifications_none
                      <small className="notification-badge">5</small>
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    className="waves-effect waves-block waves-light profile-button"
                    href="javascript:void(0);"
                    data-target="profile-dropdown"
                  >
                    <span className="avatar-status avatar-online">
                      <img src="../../../assets/images/avatar/avatar-7.png" alt="avatar" />
                      <i></i>
                    </span>
                  </a>
                </li>
              </ul>

              <ul className="dropdown-content" id="notifications-dropdown">
                <li>
                  <h6>
                    NOTIFICATIONS
                    <span className="new badge purple">5</span>
                  </h6>
                </li>
                <li className="divider"></li>
                <li>
                  <a className="grey-text text-darken-2" href="#!">
                    <span className="material-icons icon-bg-circle purple small">
                      add_shopping_cart
                    </span>
                    A new order has been placed!
                  </a>
                  <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">
                    2 hours ago
                  </time>
                </li>
                <li>
                  <a className="grey-text text-darken-2" href="#!">
                    <span className="material-icons icon-bg-circle purple small">stars</span>{' '}
                    Completed the task
                  </a>
                  <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">
                    3 days ago
                  </time>
                </li>
                <li>
                  <a className="grey-text text-darken-2" href="#!">
                    <span className="material-icons icon-bg-circle purple small">settings</span>{' '}
                    Settings updated
                  </a>
                  <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">
                    4 days ago
                  </time>
                </li>
              </ul>
              <ul className="dropdown-content" id="profile-dropdown">
                <li>
                  <a className="grey-text text-darken-1" href="user-profile-page.html">
                    <i className="material-icons">person_outline</i> Profile
                  </a>
                </li>
                <li>
                  <a className="grey-text text-darken-1" href="app-chat.html">
                    <i className="material-icons">settings</i> Settings
                  </a>
                </li>
                <li>
                  <a className="grey-text text-darken-1" onClick={this.handleLogout}>
                    <i className="material-icons">keyboard_tab</i> Logout
                  </a>
                </li>
              </ul>
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
        </div>
      </header>
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
