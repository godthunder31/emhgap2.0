import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonIcon, IonButton, IonButtons, IonFooter } from '@ionic/react';
import { menuOutline, homeOutline, eyeOutline,arrowBackOutline } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import './CDAProtocol1Page7.css'; // Import your CSS file

const CDAProtocol1Page7:  React.FC = () => {
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
            <h3>2.7 Liaise with teachers and other school staff
            </h3>
            <ul className="bullet-points">
              <li>After getting consent from the child/adolescent and carer, contact the child/adolescent's teacher and provide advice/make a plan on how to support the child with learning and participation in school activities.</li>
              <li>Explain that the child/adolescent's mental disorder is affecting their learning/behaviour/social functioning and that there are things the teacher can do to help.</li>
              <li>Ask about any stressful situations that may have an adverse impact on the child's emotional well-being and learning. If the child is being bullied, advise the teacher on appropriate action to stop it.</li>
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
export default CDAProtocol1Page7;