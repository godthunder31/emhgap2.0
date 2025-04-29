import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AssessStep4Pg3.module.css';
import styles from './AssessStep4Pg3.module.css';

const AssessStep4Pg3 = () => {
  const navigate = useNavigate();
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const handleCheckboxChange = (condition: string) => {
    setSelectedConditions((prevConditions) => {
      if (prevConditions.includes(condition)) {
        return prevConditions.filter((c) => c !== condition);
      } else {
        return [...prevConditions, condition];
      }
    });
  };

  const handleProceed = () => {
    if (selectedConditions.includes('none')) {
      console.log('Redirecting to AssessStep4Pg3No');
      navigate('/AssessStep4Pg3No', { state: { selectedConditions } });
    } else if (selectedConditions.length > 0) {
      console.log('Redirecting to AssessStep4Pg3Yes');
      navigate('/AssessStep4Pg3Yes', { state: { selectedConditions } });
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
        <h2>STEP 4: Rule out physical conditions</h2>
      </header>
      <main className={styles['content']}>
        <p className={styles['question']}>
          Rule out physical conditions that can resemble or exacerbate emotional disorders. Are there any signs/symptoms suggesting:
        </p>
        <div className={styles['options']}>
          <label>
            <input
              type="checkbox"
              name="condition"
              value="thyroidDiseases"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Thyroid diseases
          </label>
          <label>
            <input
              type="checkbox"
              name="condition"
              value="infectiousIllness"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Infectious illness, including HIV/AIDS
          </label>
          <label>
            <input
              type="checkbox"
              name="condition"
              value="anemia"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Anemia
          </label>
          <label>
            <input
              type="checkbox"
              name="condition"
              value="obesity"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Obesity
          </label>
          <label>
            <input
              type="checkbox"
              name="condition"
              value="malnutrition"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Malnutrition
          </label>
          <label>
            <input
              type="checkbox"
              name="condition"
              value="asthma"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Asthma
          </label>
          <label>
            <input
              type="checkbox"
              name="condition"
              value="medicationSideEffects"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Medication side-effects (e.g., from corticosteroids or inhaled asthma medications)
          </label>
          <label>
            <input
              type="checkbox"
              name="condition"
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

export default AssessStep4Pg3;
