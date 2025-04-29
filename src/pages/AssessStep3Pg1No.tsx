import { useNavigate } from 'react-router-dom';
import styles from './AssessStep1End.module.css';

const AssessStep3Pg1No = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/AssessStep4Pg1'); // Replace with the actual route
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
          <span className={styles['arrow-text']}>CONDUCT DISORDER IS UNLIKELY </span>
        </div>
        <ul className={styles['action-list']}>
          <li> </li>  
          <li> </li>
          <li> </li>
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

export default AssessStep3Pg1No;