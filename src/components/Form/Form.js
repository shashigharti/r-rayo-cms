import React from 'react';
import PropTypes from 'prop-types';

import './form.css';

export const Form = (props = {}) => {
  const { children, onSubmit, classOverrides, ...otherProps } = props;

  return (
    <form className={`form ${classOverrides}`} onSubmit={onSubmit} {...otherProps}>
      {children}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node.isRequired,
  classOverrides: PropTypes.string,
};
