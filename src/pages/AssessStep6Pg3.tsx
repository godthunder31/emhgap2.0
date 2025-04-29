import { useNavigate } from 'react-router-dom';
import './AssessStep4Pg2.module.css';
import styles from './AssessStep4Pg2.module.css';

const AssessStep6Pg3 = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    console.log('Redirecting to AssessStep4Pg2Yes');
    navigate('/AssessStep6Pg4');
  };

  const handleNoClick = () => {
    console.log('Redirecting to AssessStep4Pg2No');
    navigate('/AssessStep6Pg3No');
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
        <h2>STEP-VI: Assess for HOME ENVIRONMENT</h2>
      </header>
      <main className={styles['content']}>
        <p className={styles['question']}>
        Is the child getting adequate opportunities for play and social interaction/communication at home? 
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

export default AssessStep6Pg3;