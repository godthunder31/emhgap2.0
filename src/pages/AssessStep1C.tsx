import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonRadioGroup, IonRadio, IonItem, IonButton } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import styles from './AssessStep1C.module.css';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const AssessStep1C: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<'toddlers' | 'olderChildren'>('toddlers');
  const [response, setResponse] = useState<string | null>(null);
  const documentId = "assessmentResponses";
  // Get assesseeId from localStorage or state
  const assesseeId = localStorage.getItem('currentAssesseeId');

  useEffect(() => {
    if (!assesseeId) {
      // Redirect to assessee details if no ID exists
      navigate('/AssesseeDetails');
      return;
    }

    if (location.state && (location.state as any).selectedOption) {
      setSelectedOption((location.state as any).selectedOption);
    }
  }, [location.state, assesseeId, navigate]);

  const handleProceed = async () => {
    if (!assesseeId) {
      alert('Please fill assessee details first');
      navigate('/AssesseeDetails');
      return;
    }

    if (response) {
      try {
        console.log("Starting handleProceed with assesseeId:", assesseeId);
        const assessmentRef = doc(db, "assessments", assesseeId);
        
        const stepData = {
          ageGroup: selectedOption,
          developmentalDifficulties: response,
          timestamp: new Date().toISOString()
        };

        console.log("Saving step data:", stepData);

        try {
          await setDoc(assessmentRef, {
            steps: {
              step1C: stepData
            }
          }, { merge: true });

          console.log("Assessment data saved successfully!");

          if (response === 'yes') {
            navigate('/AssessStep1Pg1Continue', { 
              state: { 
                selectedOption, 
                assesseeId,
                fromStep1C: true  // Add a flag to track flow
              } 
            });
          } else {
            navigate('/AssessStep2Pg1', { 
              state: { 
                selectedOption, 
                assesseeId,
                fromStep1C: true  // Add a flag to track flow
              } 
            });
          }
        } catch (error) {
          console.error("Error saving assessment:", error);
          alert('Error saving your response. Please try again.');
        }
      } catch (error) {
        console.error("Error in handleProceed:", error);
        alert('Error processing your request. Please try again.');
      }
    } else {
      alert('Please select Yes or No before proceeding.');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>STEP 1: Assess for Developmental Disorders</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={`ion-padding ${styles.ionContent}`}>
        <IonSegment
          value={selectedOption}
          onIonChange={(e) => setSelectedOption(e.detail.value as 'toddlers' | 'olderChildren')}
        >
          <IonSegmentButton value="toddlers">
            <IonLabel>Toddlers & Young Children</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="olderChildren">
            <IonLabel>Older Children & Adolescents</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <div className={styles.content}>
          {selectedOption === 'toddlers' ? (
            <p>
              For toddlers and young children: Has the child had any difficulties with age-appropriate milestones across all developmental areas?
            </p>
          ) : (
            <p>
              For older children and adolescents: Are there difficulties with school (learning, reading, and writing), communicating and interacting with others, self-care, and everyday household activities?
            </p>
          )}

          <IonRadioGroup
            value={response}
            onIonChange={(e) => setResponse(e.detail.value)}
          >
            <IonItem>
              <IonLabel>Yes</IonLabel>
              <IonRadio slot="start" value="yes" />
            </IonItem>
            <IonItem>
              <IonLabel>No</IonLabel>
              <IonRadio slot="start" value="no" />
            </IonItem>
          </IonRadioGroup>

          <IonButton
            expand="block"
            color="primary"
            onClick={handleProceed}
          >
            Proceed
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AssessStep1C;



