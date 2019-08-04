import React from 'react';
import PropTypes from 'prop-types';

export const InputField = (props = {}) => {
  const { children, customClasses, ...otherProps } = props;

  return (
    <div className={`input-field ${customClasses}`} {...otherProps}>
      {children}
    </div>
  );
};

InputField.propTypes = {
  children: PropTypes.node.isRequired,
  customClasses: PropTypes.string,
};
