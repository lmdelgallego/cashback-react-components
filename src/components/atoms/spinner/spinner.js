// react function spinner component
import React from 'react';

import styles from './spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__spinner}>
        <img src='/images/spinner.svg' width={40} height={40} />
      </div>
    </div>
  );
};

export default Spinner;
