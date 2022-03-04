import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import styles from './Input.module.scss';

const TextInput = ({ label, style, clearButton = true, locale = 'en', ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className={styles.inputText} style={{ ...style }}>
      <label>{label}</label>
      <div className={styles.inputContainer}>
        <input {...field} {...props} />
        {clearButton && (
          <div
            className={`${styles.clearButton} ${locale === 'ar' ? styles.clearButtonRtl : ''}`}
            type='button'
            hidden={!field.value}
            onClick={() => helpers.setValue('')}
          >
            <img alt='Clear' src={'/icons/cross.svg'} layout='fill' />
          </div>
        )}
      </div>
      {meta.touched && meta.error ? <div className={styles.inputError}>{meta.error}</div> : null}
    </div>
  );
};

export default TextInput;
TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  clearButton: PropTypes.bool,
  locale: PropTypes.string,
};
