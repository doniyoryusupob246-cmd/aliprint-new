import React from 'react';
import classNames from 'classnames';

import classes from './Container.module.scss';

const Container = ({ className, children }) => {
  return <div className={classNames(classes['container'], className)}>{children}</div>;
};

export default Container;
