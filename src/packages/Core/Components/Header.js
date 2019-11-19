import React, { useContext, useEffect } from 'react';
import { ImageSpan } from './Styled';
import { Navbar } from './Navbar';
import { Notification } from './Notification.js';
import { Profile } from './Profile';
import { SideMenu, SideMenuContextProvider, SideMenuContext } from './../';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
  useEffect(() => {
    M.AutoInit();
  });

  const { auth } = useContext(AuthContext);
  return auth.isAuthenticated ? (
    <div
      className='vertical-layout page-header-light vertical-menu-collapsible vertical-menu-nav-dark 2-columns  '
      data-open='click'
      data-menu='vertical-menu-nav-dark'
      data-col='2-columns'
    >
      <header className='page-topbar' id='header'>
        <Navbar className='navbar navbar-fixed'>
          <nav className='navbar-main navbar-color nav-collapsible sideNav-lock navbar--theme gradient-shadow'>
            <div className='nav-wrapper'>
              <ul className='navbar-list right'>
                <li>
                  <a
                    className='waves-effect waves-block waves-light dropdown-trigger notification-button'
                    href='#'
                    data-target='notifications-dropdown'
                  >
                    <i className='material-icons left'>
                      notifications_none
                      <small className='notification-badge'>5</small>
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    className='waves-effect waves-block waves-light profile-button dropdown-trigger'
                    href='#'
                    data-target='profile-dropdown'
                  >
                    <ImageSpan>
                      <img
                        src={`https://ui-avatars.com/api/?name=ShashiGharti&rounded=true&bold=true`}
                        alt='avatar'
                      />
                    </ImageSpan>
                  </a>
                </li>
              </ul>
              <Profile />
              <Notification />
            </div>
          </nav>
        </Navbar>
      </header>
      <SideMenuContextProvider>
        <SideMenu />
      </SideMenuContextProvider>
    </div>
  ) : (
    ''
  );
};

export default Header;
