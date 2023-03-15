import React from 'react';
import { Outlet } from 'react-router-dom';
import TopChart from '../TopChart';
import Card from './Card';
import styles from './ProductContainer.module.scss';

const ProductContainer = () => (
  <>
    <TopChart />
    <div className={styles['product-container']} data-testid="ProductContainer">
      <Card />
      <Card />
      <Card />
      <Card />

      <Card />
      <Card />
      <Card />
      <Card />

      <Card />
      <Card />
      <Card />
      <Card />

      <Card />
      <Card />
      <Card />
      <Card />

      <Card />
      <Card />
      <Card />
      <Card />

      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </>
);

export default ProductContainer;