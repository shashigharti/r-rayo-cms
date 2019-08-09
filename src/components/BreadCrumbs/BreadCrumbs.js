import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import './breadCrumbs.css';
import { BreadCrumbItem } from './BreadCrumbItem';

const getBreadCrumbLink = (currentCrumb, currentCrumbIndex, crumbs = [], rootPath) => {
  if (_.isString(currentCrumb.path)) {
    return currentCrumb.path;
  }

  return crumbs.reduce((path, crumb, index) => {
    if (index > currentCrumbIndex) {
      return path;
    }

    return `${path}/${crumb.subPath}`;
  }, rootPath || '');
};

export const BreadCrumbs = (props = {}) => {
  const { crumbs, rootPath } = props;

  return (
    <ol className="breadcrumbs mb-0">
      {crumbs &&
        crumbs.map((crumb, index) => {
          const isActive = index === crumbs.length - 1;
          const link = getBreadCrumbLink(crumb, index, crumbs, rootPath);

          return <BreadCrumbItem key={link} name={crumb.name} link={link} isActive={isActive} />;
        })}
    </ol>
  );
};

BreadCrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string,
      subPath: PropTypes.string,
    }),
  ),
  rootPath: PropTypes.string,
};
