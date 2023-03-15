import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { faLocationDot, faAdd, faHome } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './DropDown.module.scss';
import { setModal } from '../../features/commonSlice';
import { useAppDispatch } from '../../store/hooks';

const DropDown = () => {

  const dispatch = useAppDispatch();

  const handleModal = (status) => dispatch(setModal(status));

  return <Dropdown className={styles.Dropdown}>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      <FontAwesomeIcon className={styles['location-icon']} icon={faLocationDot} /> B403, Om Enclave...
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1" className={styles['dropdown-item']}>
        <div className={styles.icon}><FontAwesomeIcon className={styles['home-icon']} icon={faHome} /></div>
        <div className="text"> B302, Ashtha Apartment...
        </div>
      </Dropdown.Item>

      <Dropdown.Item href="#/action-2" className={styles['dropdown-item']} onClick={() => handleModal(true)}>
        <div className={styles.icon}><FontAwesomeIcon className={styles['add-icon']} icon={faAdd} /></div>
        <div className="text">Add Address</div></Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
};

export default DropDown;