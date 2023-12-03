import React from 'react';
import styles from './styles.module.scss';
import Img from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className={styles['site-header']}>
      <img src={Img} alt="logo" />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
