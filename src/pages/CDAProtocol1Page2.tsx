import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonIcon, IonButton, IonButtons, IonFooter } from '@ionic/react';
import { menuOutline, homeOutline, eyeOutline,arrowBackOutline } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import './CDAProtocol1Page2.css'; // Import your CSS file

const CDAProtocol1Page2:  React.FC = () => {
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
            <h3>2.2 Psychoeducation to person and carers and parenting advice</h3>
            <ul className="bullet-points">
              <li>Explain the delay or difficulty to the carer and the child/adolescent as appropriate and help them identify strengths and resources.</li>
              <li>Praise the carer and the child/adolescents for their efforts.</li>
              <li>Explain to the carer that parenting a child/adolescent with an emotional, behavioural or developmental delay or disorder can be rewarding but also very challenging.</li>
              <li>Explain that persons with mental disorders should not be blamed for having the disorder. Encourage carers to be kind and supportive and show love and affection..</li>
              <li>Promote and protect human rights of the</li>
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
export default CDAProtocol1Page2;