import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavList = ({ url, icon, display_name, childrens }) => {
  if (childrens.length != 0) {
    return (
      <>
        <li className='bold'>
          <a className='collapsible-header waves-effect waves-cyan ' href={url}>
            <i className='material-icons'>{icon}</i>
            <span className='menu-title' data-i18n=''>
              {display_name}
            </span>
          </a>
          <div className='collapsible-body'>
            <ul className='collapsible collapsible-sub' data-collapsible='accordion'>
              {childrens.map(child => {
                return (
                  <NavList
                    key={child.id}
                    url={child.url}
                    icon={child.icon}
                    display_name={child.display_name}
                    childrens={[]}
                  />
                );
              })}
            </ul>
          </div>
        </li>
      </>
    );
  }
  return (
    <>
      <li className='bold'>
        <NavLink exact className='waves-effect waves-cyan' to={url}>
          <i className='material-icons'>{icon}</i>
          <span className='menu-title' data-i18n=''>
            {display_name}
          </span>
        </NavLink>
      </li>
    </>
  );
};

export default NavList;
