import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, setDoc, getDoc } from "firebase/firestore";
import './AssessStep1Pg3.module.css';
import styles from './AssessStep1Pg3.module.css';

const AssessStep1Pg3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visualImpairments, setVisualImpairments] = useState<string[]>([]);
  const [hearingImpairments, setHearingImpairments] = useState<string[]>([]);
  
  const assesseeId = localStorage.getItem('currentAssesseeId');

  useEffect(() => {
    console.log("Component mounted with assesseeId:", assesseeId);
    if (!assesseeId) {
      navigate('/AssesseeDetails');
      return;
    }
  }, [assesseeId, navigate]);

  const handleVisualOptionChange = (option: string) => {
    setVisualImpairments(prev => {
      const newValue = prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option];
      return newValue;
    });
  };

  const handleHearingOptionChange = (option: string) => {
    setHearingImpairments(prev => {
      const newValue = prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option];
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
      const assessmentRef = doc(db, "assessments", assesseeId);
      
      // Get existing data first
      const docSnap = await getDoc(assessmentRef);
      const existingData = docSnap.exists() ? docSnap.data() : {};
      
      const stepData = {
        visualImpairments,
        hearingImpairments,
        timestamp: new Date().toISOString()
      };

      // Merge with existing data
      await setDoc(assessmentRef, {
        steps: {
          ...existingData.steps,
          step1Pg3: stepData
        }
      }, { merge: true });

      // Navigate to next step
      navigate('/AssessStep1End', {
        state: { 
          visualImpairments,
          hearingImpairments,
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
          <h3>Assess the child for visual and/or hearing impairment:</h3>
          
          <div className={styles['subsection']}>
            <h4>a.) For vision, see if child fails to:</h4>
            <div className={styles['options']}>
              <label>
                <input
                  type="checkbox"
                  value="look_at_eyes"
                  checked={visualImpairments.includes('look_at_eyes')}
                  onChange={(e) => handleVisualOptionChange(e.target.value)}
                />
                Look at your eyes
              </label>
              <label>
                <input
                  type="checkbox"
                  value="follow_moving_object"
                  checked={visualImpairments.includes('follow_moving_object')}
                  onChange={(e) => handleVisualOptionChange(e.target.value)}
                />
                Follow a moving object
              </label>
              <label>
                <input
                  type="checkbox"
                  value="grab_object"
                  checked={visualImpairments.includes('grab_object')}
                  onChange={(e) => handleVisualOptionChange(e.target.value)}
                />
                Grab an object
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Recognize_familiar_people"
                  checked={visualImpairments.includes('recognize_people')}
                  onChange={(e) => handleVisualOptionChange(e.target.value)}
                />
                Recognize familiar people
              </label>
              <label>
                <input
                  type="checkbox"
                  value="none_visual"
                  checked={visualImpairments.includes('none_visual')}
                  onChange={(e) => handleVisualOptionChange(e.target.value)}
                />
                NONE OF THE ABOVE
              </label>
            </div>
          </div>

          <div className={styles['subsection']}>
            <h4>b.) For hearing, see if child fails to:</h4>
            <div className={styles['options']}>
              <label>
                <input
                  type="checkbox"
                  value="turn_head"
                  checked={hearingImpairments.includes('turn_head')}
                  onChange={(e) => handleHearingOptionChange(e.target.value)}
                />
                Turn head to see someone behind them when they speak
              </label>
              <label>
                <input
                  type="checkbox"
                  value="react_to_noise"
                  checked={hearingImpairments.includes('react_to_noise')}
                  onChange={(e) => handleHearingOptionChange(e.target.value)}
                />
                Show reaction to loud noise
              </label>
              <label>
                <input
                  type="checkbox"
                  value="make_sounds"
                  checked={hearingImpairments.includes('make_sounds')}
                  onChange={(e) => handleHearingOptionChange(e.target.value)}
                />
                Make a lot of different sounds (tata, dada, baba), if an infant
              </label>
              <label>
                <input
                  type="checkbox"
                  value="none_hearing"
                  checked={hearingImpairments.includes('none_hearing')}
                  onChange={(e) => handleHearingOptionChange(e.target.value)}
                />
                NONE OF THE ABOVE
              </label>
            </div>
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

export default AssessStep1Pg3;
