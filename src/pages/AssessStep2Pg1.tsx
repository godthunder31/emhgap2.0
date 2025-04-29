import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, setDoc, getDoc } from "firebase/firestore";
import styles from './AssessStep2Pg1.module.css';

const AssessStep2Pg1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [attentionProblems, setAttentionProblems] = useState<string[]>([]);
  const [activityProblems, setActivityProblems] = useState<string[]>([]);
  const [impulsivityProblems, setImpulsivityProblems] = useState<string[]>([]);
  
  const assesseeId = localStorage.getItem('currentAssesseeId');

  useEffect(() => {
    console.log("Component mounted with assesseeId:", assesseeId);
    if (!assesseeId) {
      navigate('/AssesseeDetails');
      return;
    }
  }, [assesseeId, navigate]);

  const handleOptionChange = (
    option: string,
    section: 'attention' | 'activity' | 'impulsivity'
  ) => {
    console.log(`Handling option change: ${option} for section: ${section}`);
    
    switch(section) {
      case 'attention':
        setAttentionProblems(prev => {
          const newValue = prev.includes(option) 
            ? prev.filter(item => item !== option) 
            : [...prev, option];
          console.log('Updated attention problems:', newValue);
          return newValue;
        });
        break;
      case 'activity':
        setActivityProblems(prev => {
          const newValue = prev.includes(option) 
            ? prev.filter(item => item !== option) 
            : [...prev, option];
          console.log('Updated activity problems:', newValue);
          return newValue;
        });
        break;
      case 'impulsivity':
        setImpulsivityProblems(prev => {
          const newValue = prev.includes(option) 
            ? prev.filter(item => item !== option) 
            : [...prev, option];
          console.log('Updated impulsivity problems:', newValue);
          return newValue;
        });
        break;
    }
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
      console.log("Current selections:", {
        attention: attentionProblems,
        activity: activityProblems,
        impulsivity: impulsivityProblems
      });

      const assessmentRef = doc(db, "assessments", assesseeId);
      
      // Get existing data first
      const docSnap = await getDoc(assessmentRef);
      const existingData = docSnap.exists() ? docSnap.data() : {};
      
      const meetsCriteria =
        attentionProblems.length >= 3 &&
        activityProblems.length >= 3 &&
        impulsivityProblems.length >= 1;

      const stepData = {
        attentionProblems: attentionProblems.filter(p => p !== 'noneAttention'),
        activityProblems: activityProblems.filter(p => p !== 'noneActivity'),
        impulsivityProblems: impulsivityProblems.filter(p => p !== 'noneImpulsivity'),
        meetsCriteria,
        timestamp: new Date().toISOString()
      };

      console.log("Saving step data:", stepData);

      // Merge with existing data
      await setDoc(assessmentRef, {
        steps: {
          ...existingData.steps,
          step2Pg1: stepData
        }
      }, { merge: true });

      console.log("Data saved successfully!");

      // Navigate based on criteria
      if (meetsCriteria) {
        navigate('/AssessStep2Pg2', {
          state: { 
            attentionProblems, 
            activityProblems, 
            impulsivityProblems,
            assesseeId 
          }
        });
      } else {
        navigate('/AssessStep2Pg2No', {
          state: { 
            attentionProblems, 
            activityProblems, 
            impulsivityProblems,
            assesseeId 
          }
        });
      }
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
        <h2>STEP 2: Assess for Inattention or Hyperactivity</h2>
      </header>
      <main className={styles['content']}>
        <div className={styles['section']}>
          <h3>Symptoms: At least three of the following attention problems:</h3>
          <div className={styles['options']}>
            <label>
              <input
                type="checkbox"
                value="shortActivities"
                onChange={(e) => handleOptionChange(e.target.value, 'attention')}
              />
              Short duration of spontaneous activities
            </label>
            <label>
              <input
                type="checkbox"
                value="unfinishedActivities"
                onChange={(e) => handleOptionChange(e.target.value, 'attention')}
              />
              Often leaving play activities unfinished
            </label>
            <label>
              <input
                type="checkbox"
                value="frequentChanges"
                onChange={(e) => handleOptionChange(e.target.value, 'attention')}
              />
              Over-frequent changes between activities
            </label>
            <label>
              <input
                type="checkbox"
                value="lackPersistence"
                onChange={(e) => handleOptionChange(e.target.value, 'attention')}
              />
              Undue lack of persistence at tasks set by adults
            </label>
            <label>
              <input
                type="checkbox"
                value="highDistractibility"
                onChange={(e) => handleOptionChange(e.target.value, 'attention')}
              />
              Unduly high distractibility during study (e.g., homework or reading assignment)
            </label>
            <label>
              <input
                type="checkbox"
                value="noneAttention"
                onChange={(e) => handleOptionChange(e.target.value, 'attention')}
              />
              NONE OF THE ABOVE
            </label>
          </div>
        </div>

        <div className={styles['section']}>
          <h3>At least three of the following activity problems:</h3>
          <div className={styles['options']}>
            <label>
              <input
                type="checkbox"
                value="runsExcessively"
                onChange={(e) => handleOptionChange(e.target.value, 'activity')}
              />
              Very often runs about or climbs excessively in situations where it is inappropriate
            </label>
            <label>
              <input
                type="checkbox"
                value="fidgeting"
                onChange={(e) => handleOptionChange(e.target.value, 'activity')}
              />
              Markedly excessive fidgeting & wriggling during spontaneous activities
            </label>
            <label>
              <input
                type="checkbox"
                value="excessiveActivity"
                onChange={(e) => handleOptionChange(e.target.value, 'activity')}
              />
              Markedly excessive activity in situations expecting relative stillness (e.g., mealtimes, travel, visiting, church)
            </label>
            <label>
              <input
                type="checkbox"
                value="leavesSeat"
                onChange={(e) => handleOptionChange(e.target.value, 'activity')}
              />
              Often leaves seat in classroom or other situations when remaining seated is expected
            </label>
            <label>
              <input
                type="checkbox"
                value="difficultyPlayingQuietly"
                onChange={(e) => handleOptionChange(e.target.value, 'activity')}
              />
              Often has difficulty playing quietly
            </label>
            <label>
              <input
                type="checkbox"
                value="noneActivity"
                onChange={(e) => handleOptionChange(e.target.value, 'activity')}
              />
              NONE OF THE ABOVE
            </label>
          </div>
        </div>

        <div className={styles['section']}>
          <h3>At least one of the following impulsivity problems:</h3>
          <div className={styles['options']}>
            <label>
              <input
                type="checkbox"
                value="difficultyWaitingTurns"
                onChange={(e) => handleOptionChange(e.target.value, 'impulsivity')}
              />
              Often has difficulty awaiting turns in games or group situations
            </label>
            <label>
              <input
                type="checkbox"
                value="interruptsOthers"
                onChange={(e) => handleOptionChange(e.target.value, 'impulsivity')}
              />
              Often interrupts or intrudes on others (e.g., butts into others' conversations or games)
            </label>
            <label>
              <input
                type="checkbox"
                value="blurtsOutAnswers"
                onChange={(e) => handleOptionChange(e.target.value, 'impulsivity')}
              />
              Often blurts out answers to questions before questions have been completed
            </label>
            <label>
              <input
                type="checkbox"
                value="noneImpulsivity"
                onChange={(e) => handleOptionChange(e.target.value, 'impulsivity')}
              />
              NONE OF THE ABOVE
            </label>
          </div>
        </div>

        <div className="buttons">
          <button
            className={`${styles['btn']} ${styles['proceed-btn']}`}
            onClick={handleProceed}>
            Proceed
          </button>
        </div>
      </main>
    </div>
  );
};

export default AssessStep2Pg1;
