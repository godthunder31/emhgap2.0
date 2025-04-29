import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonIcon, IonButton, IonButtons, IonFooter } from '@ionic/react';
import { menuOutline, homeOutline, eyeOutline,arrowBackOutline } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import './CDAProtocol1Page8.css'; // Import your CSS file

const CDAProtocol1Page8:  React.FC = () => {
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
            <h3>2.8 Brief psychological treatments
            </h3>
            <ul className="bullet-points">
              <li>This guide does not provide specific protocols to implement brief psychological interventions, such as parent skills training, interpersonal therapy and behavioural therapy. WHO has developed Parent Skills Training package for caregivers of children with developmental delay/disorders and is available on request.</li>
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
export default CDAProtocol1Page8;