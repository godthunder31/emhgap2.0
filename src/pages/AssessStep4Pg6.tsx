import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AssessStep4Pg6.module.css';

const AssessStep4Pg6 = () => {
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
    const selectedExcludingNone = selectedSymptoms.filter((s) => s !== 'none');
    if (selectedExcludingNone.length > 4) {
      console.log('Redirecting to AssessStep4Pg7');
      navigate('/AssessStep4Pg7', { state: { selectedSymptoms } });
    } else {
      console.log('Redirecting to AssessStep5Pg1');
      navigate('/AssessStep5Pg1', { state: { selectedSymptoms } });
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
        <h2>STEP 4: Emotional Disorders Assessment</h2>
      </header>
      <main className={styles['content']}>
        <p className={styles['question']}>
          Has the adolescent had several of the following additional symptoms most days for the last 2 weeks?
        </p>
        <div className={styles['options']}>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="disturbedSleep"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Disturbed sleep or sleeping too much
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="changeInAppetite"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Significant change in appetite or weight (decrease or increase)
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="worthlessness"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Beliefs of worthlessness or excessive guilt
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="fatigue"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Fatigue or loss of energy
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="reducedConcentration"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Reduced concentration
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="indecisiveness"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Indecisiveness
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="physicalRestlessness"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Observable agitation or physical restlessness
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="slowedTalking"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Talking or moving more slowly than usual
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="hopelessness"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Hopelessness
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="suicidalThoughts"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Suicidal thoughts or acts
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

export default AssessStep4Pg6;
