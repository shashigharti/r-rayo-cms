import React from 'react';
import PropTypes from 'prop-types';

import './form.css';

export const Form = (props = {}) => {
  const { children, onSubmit, customClasses, ...otherProps } = props;

  return (
    <form className={`form ${customClasses}`} onSubmit={onSubmit} {...otherProps}>
      {children}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node.isRequired,
  customClasses: PropTypes.string,
};
