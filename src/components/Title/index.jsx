import React from 'react';
import classes from './Title.module.scss';
const Title = ({ children }) => {
  return <h2 className={classes['title']}>{children}</h2>;
};

export default Title;
