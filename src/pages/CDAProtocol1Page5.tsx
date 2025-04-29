import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonIcon, IonButton, IonButtons, IonFooter } from '@ionic/react';
import { menuOutline, homeOutline, eyeOutline,arrowBackOutline } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import './CDAProtocol1Page5.css'; // Import your CSS file

const CDAProtocol1Page5:  React.FC = () => {
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
            <h3>2.5 Psychoeducation for emotional problems/disorders including depression in adolescents

            </h3>
            <ul className="bullet-points">
              <li>Address any stressful situation in the family environment such as parental discord or a parent's mental disorder. With the help of teachers explore possible adverse circumstances in the school environment.</li>
              <li>Provide opportunities for quality time with the carer and the family.</li>
              <li>Encourage and help the child/adolescent to continue (or restart) pleasurable and social activities.</li>
              <li>Encourage the child/adolescent to practice regular physical activity, gradually increasing the duration of sessions.</li>
              <li>Consider training the child/adolescent and</li>
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
export default CDAProtocol1Page5;