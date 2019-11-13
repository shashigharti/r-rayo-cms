import React from 'react';
import { SideNav } from './SideNav';
import { Link, NavLink } from 'react-router-dom';
import M from 'materialize-css';

export const SideMenu = () => {
  return (
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
          <NavLink exact className="waves-effect waves-cyan " to="/leads">
            <i className="material-icons">show_chart</i>
            <span className="menu-title" data-i18n="">
              Leads
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
              {/* <li>
                <NavLink exact className="collapsible-body" to="/pages/categories" data-i18n="">
                  <i className="material-icons">radio_button_unchecked</i>
                  <span>Page Categories</span>
                </NavLink>
              </li> */}
              <li>
                <NavLink exact className="collapsible-body" to="/pages" data-i18n="">
                  <i className="material-icons">radio_button_unchecked</i>
                  <span>Pages</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className="bold">
          <a className="collapsible-header waves-effect waves-cyan " href="#">
            <i className="material-icons">people_outline</i>
            <span className="menu-title" data-i18n="">
              Land Marks
            </span>
          </a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li>
                <NavLink exact className="collapsible-body" to="/cities" data-i18n="">
                  <i className="material-icons">radio_button_unchecked</i>
                  <span>Cities</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact className="collapsible-body" to="/zips" data-i18n="">
                  <i className="material-icons">radio_button_unchecked</i>
                  <span>Zips</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact className="collapsible-body" to="/counties" data-i18n="">
                  <i className="material-icons">radio_button_unchecked</i>
                  <span>Counties</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className="bold">
          <NavLink exact className="waves-effect waves-cyan " to="/templates">
            <i className="material-icons">email</i>
            <span className="menu-title" data-i18n="">
              Email Management
            </span>
          </NavLink>
        </li>
        <li className="bold">
          <NavLink exact className="waves-effect waves-cyan " to="/banners">
            <i className="material-icons">perm_media</i>
            <span className="menu-title" data-i18n="">
              Banners
            </span>
          </NavLink>
        </li>
        <li className="bold">
          <NavLink exact className="waves-effect waves-cyan " to="/agents">
            <i className="material-icons">supervised_user_circle</i>
            <span className="menu-title" data-i18n="">
              Agents
            </span>
          </NavLink>
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
              {/* <li>
                <NavLink exact className="collapsible-body" to="/roles" data-i18n="">
                  <i className="material-icons">radio_button_unchecked</i>
                  <span>Roles</span>
                </NavLink>
              </li> */}
              <li>
                <NavLink exact className="collapsible-body" to="/users" data-i18n="">
                  <i className="material-icons">radio_button_unchecked</i>
                  <span>Users</span>
                </NavLink>
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
  );
};
