import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonIcon, IonButton, IonButtons, IonFooter, IonText } from '@ionic/react';
import { arrowBackOutline, homeOutline, menuOutline, eyeOutline } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import './CDAFollowUp.css'; // Import your CSS file

const CDAFollowUp: React.FC = () => {
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
          </IonButtons>
          <IonTitle className="ion-text-center">
            mhGAP<br />Intervention Guide
          </IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={homeOutline} />
            </IonButton>
            <IonButton>
              <IonIcon icon={menuOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar color="success">
          <IonTitle className="centered-title">CHILD/ADOLESCENTS | FOLLOW-UP</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={eyeOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="content">
          <h2>1 - ASSESS FOR IMPROVEMENT</h2>
          <h3>Is the person improving?</h3>
          <IonText color="medium">
            <p><em>Reassess and monitor the child/adolescent's symptoms, behaviour, and functioning at every visit.</em></p>
          </IonText>
          <div className="quote">
            <p>» If exposure to one or more types of maltreatment was identified in the assessment, assess ongoing exposure and risks to the child/adolescent.</p>
            <p>» For adolescents, plan to see the adolescent separately from their parent/carer for part of the follow-up visit. Clarify the confidential nature of the health care discussion, including in what circumstances parents or other adults will be given information.</p>
          </div>
          <IonText className="underline">If YES</IonText>
          <div className="quote">
            <p>» Continue with management plan and follow-up until symptoms cease or remit.</p>
            <p>» Provide additional psychoeducation and advice on parenting</p>
            <p>» If on medication, consider gradually reducing medication dose in consultation with a specialist</p>
          </div>
          <p>If not on medication, decrease frequency of</p>
        </div>
      </IonContent>
      <IonFooter></IonFooter>
    </IonPage>
  );
};

export default CDAFollowUp;
