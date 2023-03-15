import React from 'react';
import styles from '../TopChart.module.scss';

const Card = () => (
  <div className={styles.TopChartCard} data-testid="TopChartCard">
    <div className={styles.TopChartCardContainer}>
      <div className={styles.image} style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg)' }}></div>
      <div className={styles.body}>
        <div  className={styles.title}>Test</div>
        <div className={styles.description}>Test</div>
      </div>
    </div>
  </div>
);

export default Card;