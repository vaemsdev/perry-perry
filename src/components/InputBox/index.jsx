import React from 'react';
import styles from './InputBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const InputBox = (props) => (
  <div className={styles.InputBox}>
    {props.icon ? <FontAwesomeIcon className={styles['icon']} size='1x' icon={props.icon} /> : null}
    <input type="text" className={styles.input} placeholder={props?.hint} />
  </div>
);

export default InputBox;