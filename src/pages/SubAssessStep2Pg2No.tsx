import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SubAssessStep2Pg2Yes.module.css';

const SubAssessStep2Pg2No = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/SubAssessStep3Pg1'); // Replace with the actual route
  };

  return (
    <div className={styles['container']}>
      <header className={styles['header']}>
        <div className={styles['top-bar']}>
          <h1>mhGAP Intervention Guide</h1>
        </div>
        <div className={styles['breadcrumb']}>
          <span>SUBSTANCE USE</span>
          <span>|</span>
          <span>ASSESSMENT</span>
        </div>
      </header>
      <main className={styles['content']}>
        <div className={styles['arrow-box']}>
          <span className={styles['arrow-text']}>Continue assessment</span>
        </div>
        <ul className={styles['action-list']}>
          <li>  </li>  
          <li>  </li>
          <li>*Go to <strong>PROTOCOL 1</strong> </li>
        </ul>
        <button
          className={`${styles['btn']} ${styles['proceed-btn']}`}
          onClick={handleProceed}
        >
          Proceed
        </button>
      </main>
    </div>
  );
};

export default SubAssessStep2Pg2No;