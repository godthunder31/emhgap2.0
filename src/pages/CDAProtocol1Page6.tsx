import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonIcon, IonButton, IonButtons, IonFooter } from '@ionic/react';
import { menuOutline, homeOutline, eyeOutline,arrowBackOutline } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import './CDAProtocol1Page6.css'; // Import your CSS file

const CDAProtocol1Page6:  React.FC = () => {
    const navigate = useNavigate();
  
    const handleBack = () => {
      navigate(-1);
    };
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="light">
            <IonButtons slot="start">
              <IonButton onClick={handleBack}>
                <IonIcon icon={arrowBackOutline} />
              </IonButton>
              <IonButton>
                <IonIcon icon={menuOutline} />
              </IonButton>
            </IonButtons>
            <IonTitle className="ion-text-center">
              mhGAP<br />Intervention Guide
            </IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon icon={homeOutline} />
              </IonButton>
            </IonButtons>
            </IonToolbar>
            <IonToolbar color="success">
          <IonTitle className="centered-title">CHILD/ADOLESCENTS | MANAGEMENT</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="psychosocial-interventions">
          <IonToolbar color="light">
            <IonTitle className="centered-title1">PSYCHOSOCIAL INTERVENTIONS</IonTitle>
          </IonToolbar>
          <div className="content">
            <h3>2.6 Carer support
            </h3>
            <ul className="bullet-points">
              <li>Assess the psychosocial impact of the child/adolescent's disorders on the carers, and offer support for their personal, social, and mental health needs.</li>
              <li>Promote necessary support and resources for their family life, employment, social activities, and health.</li>
              <li>Arrange for respite care (trustworthy carers taking over care on a short term basis) to give primary carers a break, especially if the child has a developmental disorder.</li>
              <li>Support family to handle social and familial problems and help to problem solve.</li>
            </ul>
        </div>
         </div>
      </IonContent>
      <IonFooter>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
          <span>III</span>
          <span>○</span>
          <span>&lt;</span>
        </div>
      </IonFooter>
    </IonPage>
  );
};
export default CDAProtocol1Page6;