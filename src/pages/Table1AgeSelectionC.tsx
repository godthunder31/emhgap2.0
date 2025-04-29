import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import { useNavigate } from 'react-router-dom';
import styles from './Table1AgeSelectionC.module.css';

const Table1AgeSelectionC: React.FC = () => {
  const navigate = useNavigate();

  const navigateToStep1 = (ageGroup: 'toddlers' | 'olderChildren') => {
    navigate('/AssessStep1C', {
      state: { selectedOption: ageGroup }, // Pass state to Step1 page
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Table 1: Common Presentations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={`ion-padding ${styles.ionContent}`}>
        <IonList>
          <IonItem button onClick={() => navigateToStep1('toddlers')}>
            <IonLabel>
              Toddler & Young Children (1-5 years)
            </IonLabel>
          </IonItem>
          <IonItem button onClick={() => navigateToStep1('olderChildren')}>
            <IonLabel>
              Older Children & Adolescents (6-17 years)
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Table1AgeSelectionC;


