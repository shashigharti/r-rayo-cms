import React from 'react';

import './style.css';

const SideMenu = () => (
  <>
    <aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light navbar-full sidenav-active-rounded">
      <div className="brand-sidebar">
        <h1 className="logo-wrapper">
          <a className="brand-logo darken-1" href="index.html">
            <span className="logo-text hide-on-med-and-down">RealEstateNepal</span>
          </a>
          <a className="navbar-toggler" href="#">
            <i className="material-icons">radio_button_checked</i>
          </a>
        </h1>
      </div>
      <ul
        className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow"
        id="slide-out"
        data-menu="menu-navigation"
        data-collapsible="menu-accordion"
      >
        <li className="active bold">
          <a className="active waves-effect waves-cyan " href="#">
            <i className="material-icons">settings_input_svideo</i>
            <span className="menu-title" data-i18n="">
              Dashboard
            </span>
          </a>
        </li>

        <li className="bold">
          <a className="collapsible-header waves-effect waves-cyan ">
            <i className="material-icons">content_paste</i>
            <span className="menu-title" data-i18n="">
              Pages
            </span>
          </a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li>
                <a className="collapsible-body" href="page-edit.html" data-i18n="">
                  <i className="material-icons">radio_button_unchecked</i>
                  <span>Page Categories</span>
                </a>
              </li>
              <li>
                <a className="collapsible-body" href="page-list.html" data-i18n="">
                  <i className="material-icons">radio_button_unchecked</i>
                  <span>Pages</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="bold">
          <a className="waves-effect waves-cyan " href="create-menu.html">
            <i className="material-icons">crop_original</i>
            <span className="menu-title" data-i18n="">
              Menus
            </span>
          </a>
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
          <a className="collapsible-header waves-effect waves-cyan ">
            <i className="material-icons">people_outline</i>
            <span className="menu-title" data-i18n="">
              User Management
            </span>
          </a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li>
                <a className="collapsible-body" href="roles-list.html" data-i18n="">
                  <i className="material-icons">radio_button_unchecked</i>
                  <span>Roles</span>
                </a>
              </li>
              <li>
                <a className="collapsible-body" href="user.html" data-i18n="">
                  <i className="material-icons">radio_button_unchecked</i>
                  <span>Users</span>
                </a>
              </li>
            </ul>
          </div>
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
    </aside>
  </>
);

export default SideMenu;
