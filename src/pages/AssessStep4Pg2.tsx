import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AssessStep4Pg2.module.css';
import styles from './AssessStep4Pg2.module.css';

const AssessStep4Pg2 = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    console.log('Redirecting to AssessStep4Pg2Yes');
    navigate('/AssessStep4Pg2Yes');
  };

  const handleNoClick = () => {
    console.log('Redirecting to AssessStep4Pg2No');
    navigate('/AssessStep4Pg2No');
  };

  return (
    <div className="assess-container">
      <header className={styles['header']}>
        <div className={styles['top-bar']}>
          <h1>mhGAP Intervention Guide</h1>
        </div>
        <div className={styles['breadcrumb']}>
          <span>CHILD/ADOLESCENTS</span>
          <span>|</span>
          <span>ASSESSMENT</span>
        </div>
        <h2>STEP 4: Assess for Emotional Disorders</h2>
      </header>
      <main className={styles['content']}>
        <p className={styles['question']}>
          Is there considerable difficulty with daily functioning in personal, family, social, educational, occupational, or other areas?
        </p>
        <div className={styles['buttons']}>
          <button
            className={`${styles['btn']} ${styles['yes-btn']}`}
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            className={`${styles['btn']} ${styles['no-btn']}`}
            onClick={handleNoClick}
          >
            No
          </button>
        </div>
      </main>
    </div>
  );
};

export default AssessStep4Pg2;
