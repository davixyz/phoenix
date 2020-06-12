import React from 'react';
import cx from 'clsx';
import styles from './styles.css';

const Button = ({ children, type }) => {
  const classes = cx(styles.Button, {
    [styles.ButtonSecondary]: type === 'secondary',
  });
  return <button className={classes}>{children}</button>;
};

export { Button };
