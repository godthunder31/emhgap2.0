import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AssessStep2Pg2.module.css'; 
import styles from './AssessStep2Pg2.module.css';

const AssessStep2Pg2 = () => {
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
    const meetsCriteria =
      selectedSymptoms.includes('directObservation') &&
      selectedSymptoms.includes('abnormalActivity') &&
      selectedSymptoms.includes('impairmentAttention') &&
      selectedSymptoms.includes('onsetBeforeSeven') &&
      selectedSymptoms.includes('durationSixMonths') &&
      !selectedSymptoms.includes('none');

    if (meetsCriteria) {
      console.log('Criteria met. Redirecting to AssessStep2Pg2Yes');
      navigate('/AssessStep2Pg2Yes', { state: { selectedSymptoms } });
    } else {
      console.log('Criteria not met. Redirecting to AssessStep2Pg2No');
      navigate('/AssessStep2Pg2No', { state: { selectedSymptoms } });
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
          Are symptoms persistent, severe, and causing considerable difficulty with daily functioning?
        </p>
        <p className={styles['question']}>
          Are ALL of the following true?
        </p>
        <div className={styles['options']}>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="directObservation"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Direct observation of the above symptoms, i.e. not solely the report of parent or teacher
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="abnormalActivity"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Observation of abnormal levels of motor activity, or off-task behaviour, or lack of persistence in activities, in a setting outside home or school (e.g. clinic or laboratory)
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="impairmentAttention"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Significant impairment of performance on psychometric tests of attention
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="onsetBeforeSeven"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Onset before the age of seven years
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="durationSixMonths"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Duration of at least six months
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

export default AssessStep2Pg2;
