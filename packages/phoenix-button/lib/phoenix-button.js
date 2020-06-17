import React from 'react';
import cx from 'clsx';
import styles from './styles.css';

const Button = ({ children, className, variant, ...rest }) => {
  const classes = cx(
    styles.Button,
    {
      [styles.ButtonSecondary]: variant === 'secondary',
    },
    className
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export { Button };
