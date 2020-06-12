import React from 'react';
import cx from 'clsx';
import styles from './styles.css';

const Text = ({ children, as = 'p', variant }) => {
  const textVariant = styles[variant] || 'Body';
  console.log(textVariant);
  const classes = cx(styles.Text, {
    [textVariant]: variant,
  });
  return React.createElement(
    as,
    {
      className: classes,
    },
    children
  );
};

export { Text };
