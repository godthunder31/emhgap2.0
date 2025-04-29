import { useNavigate } from 'react-router-dom';
import './AssessStep4Pg2.module.css';
import styles from './AssessStep4Pg2.module.css';

const AssessStep7Pg1 = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    console.log('Redirecting to AssessStep4Pg2Yes');
    navigate('/AssessStep7Pg2');
  };

  const handleNoClick = () => {
    console.log('Redirecting to AssessStep4Pg2No');
    navigate('/AssessStep7Pg1No');
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
        <h2>STEP-7: Assess for SCHOOL ENVIRONMENT;</h2>
      </header>
      <main className={styles['content']}>
        <p className={styles['question']}>
        Is the child or adolescent in school?  
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

export default AssessStep7Pg1;