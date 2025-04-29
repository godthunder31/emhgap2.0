import { useNavigate } from 'react-router-dom';
import styles from './AssessStep1End.module.css';

const AssessStep4Pg3No = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/AssessStep4Pg4'); // Replace with the actual route
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
          <span className={styles['arrow-text']}>Continue Assessment</span>
        </div>
        <ul className={styles['action-list']}>
          <li> </li>  
          <li> </li>
          <li>*Go to <strong>PROTOCOL 6</strong></li>
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

export default AssessStep4Pg3No;