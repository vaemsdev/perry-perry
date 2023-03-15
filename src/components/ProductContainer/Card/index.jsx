import { faCircleMinus, faCirclePlus, faEllipsisVertical, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from '../ProductContainer.module.scss';
import CardMenu from './ProductMenu';

const Card = () => (
  <div className={styles['product-card']} data-testid="TopChartCard">
    <div className={styles['product-card-container']}>
      <div className={styles.image} style={{ backgroundImage: 'url(../../../src/assets/image/product-image.jpg)' }}></div>
      <div className={styles.body}>
        <div className={styles.title}>Test</div>
        <div className={styles.description}>serve  for 1 - Veg burger with tomato, onion,1 cheese slice(s)</div>
        <div className={styles.buttons}>
          <span className={styles.count}>0</span>
          <div className={styles['quantity-control']}>
            <span className={styles.count}>
              <FontAwesomeIcon className={styles['icon']} size='2x' icon={faCirclePlus} />
            </span>
            <span className={styles.count}>
              <FontAwesomeIcon className={styles['icon']} size='2x' icon={faCircleMinus} />
            </span>
          </div>
          <CardMenu>
            <FontAwesomeIcon className={styles['icon']} size='2x' icon={faEllipsisVertical} />
          </CardMenu>
        </div>
      </div>
    </div>
  </div>
);

export default Card;