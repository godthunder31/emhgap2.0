import { useNavigate } from 'react-router-dom';
import styles from './AssessStep1End.module.css';

const AssessStep7Pg2Yes = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/ManagementC'); // Replace with the actual route
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
          <span className={styles['arrow-text']}>MANAGEMENT SUMAMRY </span>
        </div>
        <ul className={styles['action-list']}>
          <li>*After consent, liaise with teachers and other school staff </li>  
          <li>*If there has been an absence from school, try to help the child/adolescent return to school as soon as possible and explore reasons for absence.</li>
          <li>*Go to MANAGEMENT (2.7) </li>
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

export default AssessStep7Pg2Yes;