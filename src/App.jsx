import React from 'react';
import styles from './App.module.scss'
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Header />
      <div className={styles['cards']}>
      <Card />
      <Card />
      <Card />
      </div>
      <Footer />
    </div>
  );
};

export default App;

