import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const BreadCrumbItem = (props = {}) => {
  const { name, link, isActive } = props;

  return (
    <li className="breadcrumb-item">
      <Link to={link} className={isActive ? 'active disable-click' : ''}>
        {name}
      </Link>
    </li>
  );
};

BreadCrumbItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
