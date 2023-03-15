import { faArrowUpRightFromSquare, faEyeSlash, faHeart, faHome, faRemove, faSignOut, faSquareUpRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Dropdown } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import styles from '../../ProductContainer.module.scss'

const CardMenu = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/product');
    }

    return <Dropdown className={styles.Dropdown} id="profile-menu">
        <Dropdown.Toggle variant="success" id="dropdown-basic1" className={styles['DropdownToggle']}>
            {props.children}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" className={styles['dropdown-item']}>
                <div className={styles.icon}><FontAwesomeIcon className={styles['home-icon']} icon={faHeart} /></div>
                <div className="text">Add to Favourite</div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className={styles['dropdown-item']}>
                <div className={styles.icon}><FontAwesomeIcon className={styles['home-icon']} icon={faEyeSlash} /></div>
                <div className="text">Hide</div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className={styles['dropdown-item']}>
                <div className={styles.icon}><FontAwesomeIcon className={styles['home-icon']} icon={faArrowUpRightFromSquare} /></div>
                <div className="text" onClick={() => handleClick()}>View Product</div>
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
}

export default CardMenu