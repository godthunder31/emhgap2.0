import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import styles from './ShVerChildAdolescentPage.module.css'; // Import the CSS module
import DescriptionIcon from '../assets/description-icon.jpeg';
import AssessmentIcon from '../assets/assessment-icon.jpeg';
import ManagementIcon from '../assets/management-icon.jpeg';
import FollowupIcon from '../assets/followup-icon.jpeg';
import { useNavigate } from 'react-router-dom';

const ShVerChildAdolescentPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center">mhGAP Intervention Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
    <div className={styles.subheader}>
        <span className={styles.backIcon} onClick={() => navigate('/ModulesPage')}>←</span>
        <span>CHILD/ADOLESCENTS | QUICK OVERVIEW</span>
    </div>
    <div className={styles.container}>
        <IonCard routerLink="/DescriptionC" className={styles.card}>
            <img src={DescriptionIcon} alt="Description Icon"/>
            <IonCardHeader>
                <IonCardTitle>Description</IonCardTitle>
            </IonCardHeader>
        </IonCard>
        <IonCard routerLink="/ShVerCADAssessment" className={styles.card}>
            <img src={AssessmentIcon} alt="Assessment Icon"/>
            <IonCardHeader>
                <IonCardTitle>Assessment</IonCardTitle>
            </IonCardHeader>
        </IonCard>
        <IonCard routerLink="/ManagementC" className={styles.card}>
            <img src={ManagementIcon} alt="Management Icon"/>
            <IonCardHeader>
                <IonCardTitle>Management</IonCardTitle>
            </IonCardHeader>
        </IonCard>
        <IonCard routerLink="/CDAFollowUp" className={styles.card}>
            <img src={FollowupIcon} alt="Follow-up Icon"/>
            <IonCardHeader>
                <IonCardTitle>Follow-up</IonCardTitle>
            </IonCardHeader>
        </IonCard>
    </div>
</IonContent>
    </IonPage>
  );
};

export default ShVerChildAdolescentPage;
