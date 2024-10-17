// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Notfound.module.css';
function Notfound() {

  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

//17/10
  return (
    <div className={styles.notFoundContainer}>
    <div className={styles.notFoundBox}>
      <h1 className={styles.notFoundTitle}>404</h1>
      <p className={styles.notFoundMessage}>Page Not Found</p>
      <button className={styles.homeButton} onClick={goHome}>Return to Home Page</button>
    </div>
  </div>
  )
}

export default Notfound
