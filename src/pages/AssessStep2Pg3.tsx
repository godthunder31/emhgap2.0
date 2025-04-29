import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AssessStep2Pg3.module.css'; 
import styles from './AssessStep2Pg3.module.css'; 

const AssessStep2Pg3 = () => {
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const handleCheckboxChange = (symptom: string) => {
    setSelectedSymptoms((prevSymptoms) => {
      if (prevSymptoms.includes(symptom)) {
        return prevSymptoms.filter((s) => s !== symptom);
      } else {
        return [...prevSymptoms, symptom];
      }
    });
  };

  const handleProceed = () => {
    const hasSelectedOtherThanNone = selectedSymptoms.some(symptom => symptom !== 'none');

    if (hasSelectedOtherThanNone) {
      console.log('Selected Symptoms: ', selectedSymptoms);
      navigate('/AssessStep2EndYes', { state: { selectedSymptoms } }); // Redirect to AssessStep2EndYes if any symptom other than 'NONE OF THE ABOVE' is selected
    } else {
      console.log('Selected Symptoms: ', selectedSymptoms);
      navigate('/AssessStep2EndNo', { state: { selectedSymptoms } }); // Redirect to AssessStep2EndNo if only 'NONE OF THE ABOVE' is selected
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
        <h2>STEP 2: Assess for Inattention or Hyperactivity</h2>
      </header>
      <main className={styles['content']}>
        <p className={styles['question']}>
          Rule out physical conditions that can resemble ADHD:
        </p>
        <div className={styles['options']}>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="thyroidDisease"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Thyroid disease
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="infectiousIllness"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Acute or chronic infectious illness
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="uncontrolledPain"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Uncontrolled pain
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

export default AssessStep2Pg3;
