import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Card from './Card';
import styles from './TopChart.module.scss';

const TopChart = () => (
  <div className={styles.TopChart} data-testid="TopChart">
    <div className={styles['top-char-heading']}><h2>Top Rated Items <FontAwesomeIcon className={styles['logo']} size='1x' icon={faHeart} /></h2></div>
    <div className={styles.container}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default TopChart;