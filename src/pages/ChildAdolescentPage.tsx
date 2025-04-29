import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import './ChildAdolescentPage.module.css'; // Import your CSS file
import DescriptionIcon from '../assets/description-icon.jpeg';
import AssessmentIcon from '../assets/assessment-icon.jpeg';
import ManagementIcon from '../assets/management-icon.jpeg';
import FollowupIcon from '../assets/followup-icon.jpeg';
import { useNavigate } from 'react-router-dom';
const ChildAdolescentPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center">mhGAP Intervention Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="subheader"style={{ backgroundColor: 'green', color: 'white', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <span className="back-icon" onClick={() => navigate('/ModulesPage')}>←</span>
          <span>CHILD/ADOLESCENTS | QUICK OVERVIEW</span>
        </div>
        <div className="container">
          <IonCard routerLink="/DescriptionC" className="card">
            <img src={DescriptionIcon} alt="Description Icon"/>
            <IonCardHeader>
              <IonCardTitle>Description</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard routerLink="/AssesseeDetails" className="card">
            <img src={AssessmentIcon} alt="Assessment Icon"/>
            <IonCardHeader>
              <IonCardTitle>Assessment</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard routerLink="/ManagementC" className="card">
            <img src={ManagementIcon} alt="Management Icon"/>
            <IonCardHeader>
              <IonCardTitle>Management</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard routerLink="/CDAFollowUp" className="card">
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

export default ChildAdolescentPage;
