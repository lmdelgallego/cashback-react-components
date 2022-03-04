import { useField } from 'formik';
import styles from './Checkbox.module.css';

const CheckBox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label className={styles.checkboxContainer} {...props}>
        {children}
        <input type='checkbox' {...field} {...props} />
        <span className={styles.checkmark}></span>
      </label>
      {meta.touched && meta.error ? <div className='checkbox-error'>{meta.error}</div> : null}
    </>
  );
};

export default CheckBox;
