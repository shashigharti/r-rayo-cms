import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

export const Button = (props = {}) => {
  const { children, type, onClick, classOverrides, ...otherProps } = props;

  return (
    <button
      className={`btn waves-effect waves-light border-round ${classOverrides}`}
      type={type || 'button'}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  classOverrides: PropTypes.string,
};
