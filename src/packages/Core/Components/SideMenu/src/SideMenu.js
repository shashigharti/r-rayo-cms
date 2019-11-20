import React, { useEffect, useState, useContext } from 'react';
import { SideNav } from './SideNav';
import { Link, NavLink } from 'react-router-dom';
import { MenuResource } from '../../CRUD';
import * as constants from './../constants';
import NavList from './NavList';
import { AuthContext } from '../../../contexts/AuthContext';

const SideMenu = props => {
  const [state, setState] = useState({
    menus: [],
  });
  useEffect(() => {
    setState({
      menus: props.payload,
    });
  }, [props]);

  const { auth } = useContext(AuthContext);
  const roles = auth.isAuthenticated ? auth.user.roles : [];

  const permissions = roles.map(role => {
    const userPermissions = role.permissions;
    return userPermissions.map(permission => {
      return permission.name;
    });
  });
  const menus = state.menus;
  return (
    <SideNav className='nav-expanded nav-lock nav-collapsible sidenav-light navbar-full sidenav-active-rounded'>
      <div className='brand-sidebar'>
        <h1 className='logo-wrapper'>
          <Link className='brand-logo darken-1' to='/'>
            <span className='logo-text hide-on-med-and-down'>RealEstateNepal</span>
          </Link>
        </h1>
      </div>
      <ul
        className='sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow'
        id='slide-out'
        data-menu='menu-navigation'
        data-collapsible='menu-accordion'
      >
        {menus.length != 0
          ? menus.map(menu => {
              return permissions[0].includes(menu.permission) ? (
                <NavList
                  key={menu.id}
                  url={menu.url}
                  display_name={menu.display_name}
                  icon={menu.icon}
                  childrens={menu.children}
                />
              ) : null;
            })
          : null}
      </ul>
      <div className='navigation-background'></div>
      <a
        className='sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only'
        href='#'
        data-target='slide-out'
      >
        <i className='material-icons'>menu</i>
      </a>
    </SideNav>
  );
};

export default MenuResource(SideMenu, constants.API_SIDEMENU);
