import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AssessStep1Pg1Continue.module.css';

const AssessStep1Pg1Continue = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/AssessStep1Pg2'); 
  };

  return (
    <div className={styles['container']}>
      <header className={styles['header']}>
        <div className={styles['top-bar']}>
          <h1>mhGAP Intervention Guide</h1>
        </div>
        <div className={styles['breadcrumb']}>
          <span>CHILD/ADOLESCENTS</span>
          <span>|</span>
          <span>ASSESSMENT</span>
        </div>
      </header>
      <main className={styles['content']}>
        <div className={styles['arrow-box']}>
          <span className={styles['arrow-text']}>Suspect DEVELOPMENTAL DELAY/ DISORDER</span>
        </div>
        <ul className={styles['action-list']}>
          <li> </li>  
          <li> </li>
          <li></li>
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

export default AssessStep1Pg1Continue;