import { faHome, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Dropdown } from "react-bootstrap"
import styles from './Profilemenu.module.scss'

const ProfileMenu = (props) => {
    return <Dropdown className={styles.Dropdown} id="profile-menu">
        <Dropdown.Toggle variant="success" id="dropdown-basic1" className={styles['DropdownToggle']}>
            {props.children}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" className={styles['dropdown-item']}>
                <div className={styles.icon}><FontAwesomeIcon className={styles['home-icon']} icon={faUser} /></div>
                <div className="text">Profile</div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1" className={styles['dropdown-item']}>
                <div className={styles.icon}><FontAwesomeIcon className={styles['home-icon']} icon={faHome} /></div>
                <div className="text">Profile</div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1" className={styles['dropdown-item']}>
                <div className={styles.icon}><FontAwesomeIcon className={styles['home-icon']} icon={faHome} /></div>
                <div className="text">Profile</div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1" className={styles['dropdown-item']}>
                <div className={styles.icon}><FontAwesomeIcon className={styles['home-icon']} icon={faHome} /></div>
                <div className="text">Profile</div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-1" className={styles['dropdown-item']}>
                <div className={styles.icon}><FontAwesomeIcon className={styles['home-icon']} icon={faSignOut} /></div>
                <div className="text">Logout</div>
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
}

export default ProfileMenu