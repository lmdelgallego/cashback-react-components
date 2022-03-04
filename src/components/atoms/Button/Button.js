import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, typeClass = 'default', onClick, disabled, ...props }) => {
  if (typeClass === 'link') {
    return (
      <button className={styles.buttonLink} onClick={onClick} {...props} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <button className={styles.button} onClick={onClick} {...props} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
Button.propTypes = {
  children: PropTypes.node.isRequired,
  typeClass: PropTypes.oneOf(['default', 'link']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
