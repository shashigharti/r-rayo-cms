import React, { useEffect, useState } from 'react';
import { SideNav } from './SideNav';
import { Link, NavLink } from 'react-router-dom';
import { MenuResource } from '../../CRUD';
import * as constants from './../constants';
import NavList from './NavList';

const SideMenu = props => {
  const [state, setState] = useState({
    menus: [],
  });
  useEffect(() => {
    setState({
      menus: props.payload,
    });
  }, [props]);
  const menus = state.menus;
  const List = () => {
    console.log(menus);
    if (menus.length != 0) {
      return menus.map(menu => {
        return;
      });
    }
    return <p>Loading menus...</p>;
  };

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
              return (
                <NavList
                  key={menu.id}
                  url={menu.url}
                  display_name={menu.display_name}
                  icon={menu.icon}
                  childrens={menu.children}
                />
              );
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
