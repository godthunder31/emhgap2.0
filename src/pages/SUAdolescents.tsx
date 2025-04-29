import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonText } from '@ionic/react';
import { homeOutline, ellipsisHorizontal, arrowBack, eyeOutline, caretDown, caretForward } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import styles from './SUAdolescents.module.css';

const SUAdolescentsPage: React.FC = () => {
  const navigate = useNavigate();
  const [showAssessment, setShowAssessment] = useState(false);
  const [showPshycoeducation, setShowPshycoeducation] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
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
      <IonContent className={styles.content}>
        <div className={styles.subheader}>
          <IonIcon icon={arrowBack} onClick={() => navigate('/SUSpecialPopulations')} />
          <span>SUBSTANCE USE | MANAGEMENT</span>
          <IonIcon icon={eyeOutline} />
        </div>
        <h1 className={styles.pageTitle}>ADOLESCENTS</h1>
        <div 
          className={styles.assessmentHeader} 
          onClick={() => setShowAssessment(!showAssessment)}
        >
          <IonIcon icon={showAssessment ? caretDown : caretForward} className={styles.caretIcon} />
          <span>How to Assess the Adolescent:</span>
        </div>
        {showAssessment && (
          <div className={styles.assessmentContent}>
            Clarify the confidential nature of the health care discussion, including in what circumstances the adolescent's parents or carers will be given any information. Ask what else is going on in the adolescent's life? Identify the most important underlying issues for the adolescent. Keep in mind that adolescents may not be able to fully articulate what is bothering them. Open-ended questions may be helpful in eliciting information in the following areas: Home, Education & Employment, Eating, Activities, Drugs and Alcohol, Sexuality, Safety, and Suicide/Depression. Allow sufficient time for discussion. Also assess for other priority mental health conditions. If any priority conditions are identified, see CMH.
          </div>
        )}
        <div 
          className={styles.assessmentHeader} 
          onClick={() => setShowPshycoeducation(!showPshycoeducation)}
        >
          <IonIcon icon={showPshycoeducation ? caretDown : caretForward} className={styles.caretIcon} />
          <span>Psychoeducation for the Adolescent:</span>
        </div>
        {showPshycoeducation && (
          <div className={styles.assessmentContent}>
            Clarify the confidential nature of the health care discussion, including in what circumstances the adolescent's parents or carers will be given any information. Ask what else is going on in the adolescent's life? Identify the most important underlying issues for the adolescent. Keep in mind that adolescents may not be able to fully articulate what is bothering them. Open-ended questions may be helpful in eliciting information in the following areas: Home, Education & Employment, Eating, Activities, Drugs and Alcohol, Sexuality, Safety, and Suicide/Depression. Allow sufficient time for discussion. Also assess for other priority mental health conditions. If any priority conditions are identified, see CMH.
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default SUAdolescentsPage;