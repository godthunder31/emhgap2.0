import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonList, IonItem, IonLabel } from '@ionic/react';
import { homeOutline, ellipsisHorizontal, arrowBack, eyeOutline, chevronForward } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import styles from './ShVerSUAssessment.module.css';  // Import the CSS module

const ShVerSUAssessmentPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>mhGAP Intervention Guide</IonTitle>
          <IonButtons slot="end">
            <IonIcon icon={homeOutline} onClick={() => navigate('/home')} />
            <IonIcon icon={ellipsisHorizontal} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className={styles.subheader}>
          <IonIcon icon={arrowBack} onClick={() => navigate('/ShVerSubstanceUsePage')} />
          <span>SUBSTANCE USE | QUICK OVERVIEW</span>
          <IonIcon icon={eyeOutline} />
        </div>
        <h1 className={styles.pageTitle}>Assessment</h1>
        <IonList lines="full" className={styles.list}>
          <IonItem button detail={false} routerLink="/ShVerSUBox1">
            <IonLabel>BOX 1: Psychoactive substances</IonLabel>
            <IonIcon icon={chevronForward} slot="end" />
          </IonItem>
          
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ShVerSUAssessmentPage;
