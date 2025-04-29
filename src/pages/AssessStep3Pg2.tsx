import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AssessStep3Pg2.module.css';  
import styles from './AssessStep3Pg2.module.css'; 

const AssessStep3Pg2 = () => { 
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
      selectedSymptoms.includes('threeSymptoms') &&
      selectedSymptoms.includes('sixMonths') &&
      selectedSymptoms.includes('conductDisturbance') &&
      selectedSymptoms.includes('poorPeerRelationships') &&
      !selectedSymptoms.includes('none');

    if (meetsCriteria) {
      console.log('Criteria met. Redirecting to AssessStep3Pg2Yes');
      navigate('/AssessStep3Pg2Yes', { state: { selectedSymptoms } }); 
    } else {
      console.log('Criteria not met. Redirecting to AssessStep3Pg2No');
      navigate('/AssessStep3Pg2No', { state: { selectedSymptoms } }); 
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
        <h2>STEP 3: Assess for conduct disorder</h2> 
      </header>
      <main className={styles['content']}>
        <p className={styles['question']}>
          Are symptoms persistent, severe, and inappropriate for the child/adolescent’s developmental level?
        </p>
        <div className={styles['options']}>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="threeSymptoms"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Presence of three or more symptoms from the criterion list above, of which at least three must be from items 9-24.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="sixMonths"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            At least one of the symptoms from items 9-24 must have been present for at least six months.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="conductDisturbance"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Conduct disturbance includes settings inside & outside the home or family context.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="poorPeerRelationships"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Definitely poor relationships with peer group as shown by isolation, rejection or unpopularity and by a lack of lasting close reciprocal friendships.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="peerRelationshipsNormal"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Peer relationships within normal limits.
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

export default AssessStep3Pg2;