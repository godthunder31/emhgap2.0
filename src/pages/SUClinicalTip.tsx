import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonText } from '@ionic/react';
import { homeOutline, ellipsisHorizontal, arrowBack, eyeOutline } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import styles from './SUClinicalTip.module.css';

const ClinicalTipPage: React.FC = () => {
  const navigate = useNavigate();

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
          <IonIcon icon={arrowBack} onClick={() => navigate(-1)} />
          <span>SUBSTANCE USE | MANAGEMENT</span>
          <IonIcon icon={eyeOutline} />
        </div>
        <h1 className={styles.pageTitle}>CLINICAL TIP</h1>
        <h2 className={styles.subtitle}>HIV/TB/HEPATITIS and SUBSTANCE USE</h2>
        <div className={styles.tipContent}>
          <p><span className={styles.redArrow}>»</span> People who inject drugs are at increased risk of HIV/AIDS and hepatitis, particularly if they do not use sterile injection equipment or have unsafe sex in exchange for drugs; once infected, they also have a worse prognosis. HIV/AIDS also increases the risk of TB infection, and active TB is a main cause of death in people living with HIV/AIDS. People who use alcohol and drugs heavily are also at increased risk for TB. Therefore, a common presentation is of a person who has a combination of drug use, particularly i.v. heroin use, and infection with TB, HIV/AIDS, and hepatitis at the same time.</p>
          <p><span className={styles.redArrow}>»</span> Services that treat people who use drugs and alcohol should regularly test all people who inject drugs for HIV/AIDS and hepatitis, and should have a high level of suspicion for TB in any person with a cough, fever, night sweats, or weight loss.</p>
          <p><span className={styles.redArrow}>»</span> Treatment of HIV/AIDS and TB requires taking daily medications, where every single day is important. Directly observing the treatment can improve treatment adherence. If the person is also opioid dependent, opioid agonist maintenance treatment can help to stabilize the person's lifestyle and improve adherence to HIV and TB medications.</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ClinicalTipPage;