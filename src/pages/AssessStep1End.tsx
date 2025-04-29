import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AssessStep1End.module.css';

const AssessStep1End = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/AssessStep2Pg1'); // Replace with the actual route
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
          <span className={styles['arrow-text']}>Continue assessment</span>
        </div>
        <ul className={styles['action-list']}>
          <li>*Consult with ENT Specialist for hearing difficulties. </li>  
          <li>*Consult with ophthalmologist for visual difficulties. </li>
          <li>*Go to <strong>PROTOCOL 1</strong> (Developmental delay/disorder)</li>
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

export default AssessStep1End;