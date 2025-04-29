import { useNavigate } from 'react-router-dom';
import styles from './AssessStep1End.module.css';

const AssessStep6Pg1Yes = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/AssessStep6Pg2'); // Replace with the actual route
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
          <span className={styles['arrow-text']}>CONTINUE</span>
        </div>
        <ul className={styles['action-list']}>
          <li>❖Refer to child protection services if necessary  </li>  
          <li>❖Explore and manage stressors  </li>
          <li>❖Ensure child/adolescent’s safety as a first priority </li>
          <li>❖Reassure the child/adolescent that all children/adolescents need to be protected from abuse  </li>
          <li>❖Provide information about where to seek help for any ongoing abuse </li>    
          <li>❖Arrange additional support including referral to specialist</li>    
          <li>❖Contact legal and community resources, as appropriate and as mandated </li>    
          <li>❖Consider additional psychosocial interventions </li>
          <li>❖Ensure appropriate follow-up </li>    
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

export default AssessStep6Pg1Yes;