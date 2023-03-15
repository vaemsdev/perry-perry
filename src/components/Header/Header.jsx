import React from 'react';

import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faBurger, faHome, faLocationDot, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import InputBox from '../InputBox';
import ProfileMenu from './ProfileMenu'
import DropDown from '../DropDown';

const profileMenuItems = [
]

const Header = () => {

  const handleClick = (path) => {

    window.location = path;
  }

  return (
    <header className={styles.Header}>
      <div className={styles.brand} onClick={() => handleClick('/')}>
        <FontAwesomeIcon className={styles['logo']} size='2x' style={{ '--fa-animation-duration': '2s', '--fa-animation-iteration-count': 3 }} bounce icon={faBurger} />
        <span className={styles['brand-name']}>test <div className={styles.quote}>Happy Meal. Happy Day!</div></span>
      </div>
      <div className={styles['search-bar']}>
        <InputBox icon={faSearch} hint='Search Your Food Here...' />
      </div>
      <div className="addresses">
        <DropDown />
      </div>
      <ProfileMenu>
        <div className={styles.profile}>
          <span className={styles['user-name']}>Vimal<div className={styles.quote}>Dudakiya</div></span>
          <FontAwesomeIcon className={styles['logo']} size='2x' style={{ '--fa-animation-duration': '2s', '--fa-animation-iteration-count': 1 }} flip icon={faUserCircle} />
        </div>
      </ProfileMenu>
    </header>
  )
}

export default Header;
