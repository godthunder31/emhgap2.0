import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, setDoc, getDoc } from "firebase/firestore";
import './AssessStep1Pg2.module.css';
import styles from './AssessStep1Pg2.module.css';

const AssessStep1Pg2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  const assesseeId = localStorage.getItem('currentAssesseeId');

  useEffect(() => {
    console.log("Component mounted with assesseeId:", assesseeId);
    if (!assesseeId) {
      navigate('/AssesseeDetails');
      return;
    }
  }, [assesseeId, navigate]);

  const handleOptionChange = (option: string) => {
    console.log(`Handling option change: ${option}`);
    setSelectedOptions(prev => {
      const newValue = prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option];
      console.log('Updated selected options:', newValue);
      return newValue;
    });
  };

  const handleProceed = async () => {
    if (!assesseeId) {
      console.error("No assesseeId available");
      alert('Please fill assessee details first');
      navigate('/AssesseeDetails');
      return;
    }

    try {
      console.log("Saving data for assesseeId:", assesseeId);
      console.log("Current selections:", selectedOptions);

      const assessmentRef = doc(db, "assessments", assesseeId);
      
      // Get existing data first
      const docSnap = await getDoc(assessmentRef);
      const existingData = docSnap.exists() ? docSnap.data() : {};
      
      const stepData = {
        selectedSymptoms: selectedOptions,
        timestamp: new Date().toISOString()
      };

      console.log("Saving step data:", stepData);

      // Merge with existing data
      await setDoc(assessmentRef, {
        steps: {
          ...existingData.steps,
          step1Pg2: stepData
        }
      }, { merge: true });

      console.log("Data saved successfully!");

      // Navigate to next step
      navigate('/AssessStep1Pg3', {
        state: { 
          selectedOptions,
          assesseeId 
        }
      });
    } catch (error) {
      console.error("Error saving assessment data:", error);
      alert('Error saving your responses. Please try again.');
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
        <h2>STEP 1: Assess for Developmental Delay/Disorders</h2>
      </header>

      <main className={styles['content']}>
        <div className={styles['section']}>
          <h3>Are there signs/symptoms suggesting any of the following:</h3>
          <div className={styles['options']}>
            <label>
              <input
                type="checkbox"
                value="Nutritional_deficiency"
                checked={selectedOptions.includes('iodine_deficiency')}
                onChange={(e) => handleOptionChange(e.target.value)}
              />
              Nutritional deficiency, including iodine deficiency
            </label>
            <label>
              <input
                type="checkbox"
                value="anemia"
                checked={selectedOptions.includes('anemia')}
                onChange={(e) => handleOptionChange(e.target.value)}
              />
              Anemia
            </label>
            <label>
              <input
                type="checkbox"
                value="malnutrition"
                checked={selectedOptions.includes('malnutrition')}
                onChange={(e) => handleOptionChange(e.target.value)}
              />
              Malnutrition
            </label>
            <label>
              <input
                type="checkbox"
                value="Acute_or_chronic_infectious_illness_including_ear_infection_and_HIV/AIDS"
                checked={selectedOptions.includes('infectious_illness')}
                onChange={(e) => handleOptionChange(e.target.value)}
              />
              Acute or chronic infectious illness, including ear infection and HIV/AIDS
            </label>
            <label>
              <input
                type="checkbox"
                value="none"
                checked={selectedOptions.includes('none')}
                onChange={(e) => handleOptionChange(e.target.value)}
              />
              NONE OF THE ABOVE
            </label>
          </div>
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

export default AssessStep1Pg2;






