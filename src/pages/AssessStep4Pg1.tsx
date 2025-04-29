import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AssessStep4Pg1.module.css';  
import styles from './AssessStep4Pg1.module.css'; 

const AssessStep4Pg1 = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((o) => o !== option);
      } else {
        return [...prevOptions, option];
      }
    });
  };

  const handleProceed = () => {
    if (selectedOptions.length >= 3) {
      console.log('Criteria met. Redirecting to AssessStep4Pg2');
      navigate('/AssessStep4Pg2', { state: { selectedOptions } });
    } else {
      console.log('Criteria not met. Redirecting to AssessStep5Pg1');
      navigate('/AssessStep5Pg1', { state: { selectedOptions } });
    }
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
          A period of at least one month with recurrence of excessive, disproportionate, and intrusive anxieties or worries, as indicated by at least three of the following:
        </p>
        <div className={styles['options']}>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="performanceConcerns"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Excessive concerns about the quality of one's performance in areas such as schoolwork, sports, and other regular activities.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="healthConcerns"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Excessive concerns about physical health (despite evident good health, or, if hurt or sick, concerns that go beyond normal apprehension) or about being injured.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="nonHealthConcerns"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Excessive concerns or anticipatory worries in relation to particular non-health themes (money or financial well-being, punctuality, appearance, catastrophes, disasters, etc.).
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="freeFloatingAnxiety"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Free-floating anxiety unrelated to specific situations.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="reassuranceNeed"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            A frequent need for reassurance that persists in spite of several appropriate attempts to reassure the child.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="tensionSymptoms"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Marked feelings of tension, inability to relax or to concentrate, nervousness, difficulty getting to sleep, autonomic symptoms (such as palpitations, sweating, dry mouth, etc.).
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="somaticComplaints"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Recurrent somatic complaints (headaches, stomachaches, etc.) for which no physical basis can be demonstrated.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="none"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            NONE OF THE ABOVE
          </label>
        </div>
        <div className="buttons">
          <button
            className={`${styles['btn']} ${styles['proceed-btn']}`}
            onClick={handleProceed}
          >
            Proceed
          </button>
        </div>
      </main>
    </div>
  );
};

export default AssessStep4Pg1;
