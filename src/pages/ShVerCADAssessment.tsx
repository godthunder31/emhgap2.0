import React, { useState } from 'react';
import { 
  IonContent, 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonIcon, 
  IonButton, 
  IonPopover 
} from '@ionic/react';
import { chevronBack, home, ellipsisHorizontal, chevronForward } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import styles from './ShVerCADAssessment.module.css';

const ShVerCADAssessment: React.FC = () => {
  const navigate = useNavigate();
  const [showPopover, setShowPopover] = useState(false); // State to handle Popover visibility

  const assessmentItems = [
    'Note',
    'TABLE 1: Common Presentations by age group',
  ];

  const handleItemClick = (item: string) => {
    if (item === 'Note') {
      setShowPopover(true); // Show popover for 'Note'
    } else if (item === 'TABLE 1: Common Presentations by age group') {
      navigate('/ShVerCADTable1'); // Redirect to Table 1 page
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className={styles.toolbar}>
          <IonTitle className={styles.title}>mhGAP Intervention Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={styles.content}>
        <div className={styles.subHeader}>
          <IonIcon icon={chevronBack} onClick={() => navigate(-1)} className={styles.backIcon} />
          <span>CHILD/ADOLESCENTS | QUICK OVERVIEW</span>
          <div className={styles.icons}>
            <IonIcon icon={home} onClick={() => navigate('/home')} />
            <IonIcon icon={ellipsisHorizontal} />
          </div>
        </div>
        <h2 className={styles.assessmentTitle}>Assessment</h2>
        <IonList lines="full">
          {assessmentItems.map((item, index) => (
            <IonItem key={index} className={styles.item} onClick={() => handleItemClick(item)}>
              <IonLabel>{item}</IonLabel>
              <IonIcon icon={chevronForward} slot="end" />
            </IonItem>
          ))}
        </IonList>

        {/* Popover for Note */}
        <IonPopover
          isOpen={showPopover}
          onDidDismiss={() => setShowPopover(false)} // Close popover when dismissed
        >
          <div className={styles.popoverContent}>
            <p>Condition specific psycho-education can be given to individuals with 2 or more symptoms. Whereas, general psychoeducation can be given to everyone.  </p>
            <p>Follow-up will be done for individuals who are referred to PHCs or hospitals.</p>
            <IonButton onClick={() => setShowPopover(false)}>Close</IonButton>
          </div>
        </IonPopover>
      </IonContent>
    </IonPage>
  );
};

export default ShVerCADAssessment;

