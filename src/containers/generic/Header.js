import React, { Component } from 'react';
import { userActions } from '../../actions';
import { connect } from 'react-redux';
import { Link, withRouter, NavLink } from 'react-router-dom';
import { ImageSpan } from '../../components/Styled';
import { SideNav } from '../../components/SideNav';
import { Navbar } from '../../components/Navbar';

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
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { authentication, history } = this.props;
    if (!authentication.loggedIn) {
      console.log('Logging out');
      history.push('/login');
    }
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
                      <i className="material-icons">
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
                <ul className="dropdown-content" id="profile-dropdown">
                  <li>
                    <Link className="grey-text text-darken-1" to="/">
                      <i className="material-icons">person_outline</i> Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="grey-text text-darken-1" to="/settings">
                      <i className="material-icons">settings</i> Settings
                    </Link>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a className="grey-text text-darken-1" href="#" onClick={this.handleLogout}>
                      <i className="material-icons">keyboard_tab</i> Logout
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-content" id="notifications-dropdown">
                  <li>
                    <h6>
                      NOTIFICATIONS<span className="new badge purple">5</span>
                    </h6>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a className="grey-text text-darken-2" href="#!">
                      <span className="material-icons icon-bg-circle purple small">
                        add_shopping_cart
                      </span>{' '}
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
        <SideNav className="nav-expanded nav-lock nav-collapsible sidenav-light navbar-full sidenav-active-rounded">
          <div className="brand-sidebar">
            <h1 className="logo-wrapper">
              <Link className="brand-logo darken-1" to="/">
                <span className="logo-text hide-on-med-and-down">RealEstateNepal</span>
              </Link>
            </h1>
          </div>
          <ul
            className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow"
            id="slide-out"
            data-menu="menu-navigation"
            data-collapsible="menu-accordion"
          >
            <li className="bold">
              <NavLink exact className="waves-effect waves-cyan" to="/">
                <i className="material-icons">settings_input_svideo</i>
                <span className="menu-title" data-i18n="">
                  Dashboard
                </span>
              </NavLink>
            </li>

            <li className="bold">
              <a className="collapsible-header waves-effect waves-cyan " href="#">
                <i className="material-icons">content_paste</i>
                <span className="menu-title" data-i18n="">
                  Pages
                </span>
              </a>
              <div className="collapsible-body">
                <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                  <li>
                    <Link className="collapsible-body" to="/page-category" data-i18n="">
                      <i className="material-icons">radio_button_unchecked</i>
                      <span>Page Categories</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="collapsible-body" to="/pages" data-i18n="">
                      <i className="material-icons">radio_button_unchecked</i>
                      <span>Pages</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="bold">
              <a className="collapsible-header waves-effect waves-cyan " href="#">
                <i className="material-icons">email</i>
                <span className="menu-title" data-i18n="">
                  Email Management
                </span>
              </a>
              <div className="collapsible-body">
                <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                  <li>
                    <Link className="collapsible-body" to="templates" data-i18n="">
                      <i className="material-icons">radio_button_unchecked</i>
                      <span>Templates</span>
                    </Link>
                  </li>
                  <li>
                    <NavLink className="collapsible-body" to="add-email-template" data-i18n="">
                      <i className="material-icons">radio_button_unchecked</i>
                      <span>Add template</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="bold">
              <a className="collapsible-header waves-effect waves-cyan " href="#">
                <i className="material-icons">people_outline</i>
                <span className="menu-title" data-i18n="">
                  User Management
                </span>
              </a>
              <div className="collapsible-body">
                <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                  <li>
                    <Link className="collapsible-body" to="/roles" data-i18n="">
                      <i className="material-icons">radio_button_unchecked</i>
                      <span>Roles</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="collapsible-body" to="/users" data-i18n="">
                      <i className="material-icons">radio_button_unchecked</i>
                      <span>Users</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="bold">
              <NavLink exact className="waves-effect waves-cyan " to="/groups">
                <i className="material-icons">group</i>
                <span className="menu-title" data-i18n="">
                  Groups
                </span>
              </NavLink>
            </li>
            <li className="bold">
              <NavLink exact className="waves-effect waves-cyan " to="/menus">
                <i className="material-icons">crop_original</i>
                <span className="menu-title" data-i18n="">
                  Menus
                </span>
              </NavLink>
            </li>
            <li className="bold">
              <a className="waves-effect waves-cyan " href="leads.html">
                <i className="material-icons">show_chart</i>
                <span className="menu-title" data-i18n="">
                  Leads
                </span>
              </a>
            </li>
            <li className="bold">
              <NavLink className="waves-effect waves-cyan " to="/settings">
                <i className="material-icons">settings</i>
                <span className="menu-title" data-i18n="">
                  Settings
                </span>
              </NavLink>
            </li>
          </ul>
          <div className="navigation-background"></div>
          <a
            className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only"
            href="#"
            data-target="slide-out"
          >
            <i className="material-icons">menu</i>
          </a>
        </SideNav>
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
