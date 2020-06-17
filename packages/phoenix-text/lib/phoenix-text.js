import React from 'react';
import cx from 'clsx';
import styles from './styles.css';

const Text = ({ children, className, as = 'p', variant, ...rest }) => {
  const textVariant = styles[variant] || 'Body';
  console.log(textVariant);
  const classes = cx(
    styles.Text,
    {
      [textVariant]: variant,
    },
    className
  );
  return React.createElement(
    as,
    {
      ...rest,
      className: classes,
    },
    children
  );
};

export { Text };
