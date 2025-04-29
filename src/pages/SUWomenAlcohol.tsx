import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton, IonButtons, IonFooter } from '@ionic/react';
import { menuOutline, homeOutline, arrowBackOutline } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import styles from './SUWomenAlcohol.module.css';

const SUWomenAlcohol: React.FC = () => {
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
          <IonTitle className={styles.headerTitle}>
            mhGAP<br />Intervention Guide
          </IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={homeOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar className={styles.subheader}>
          <IonTitle className={styles.subheaderTitle}>SUBSTANCE USE | MANAGEMENT</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
          <IonToolbar color="light">
            <IonTitle className={styles.sectionTitle}>WOMEN WHO ARE OF CHILD-BEARING AGE, PREGNANT, OR BREASTFEEDING</IonTitle>
          </IonToolbar>
          <div className={styles.content}>
            <h3>Alcohol Use</h3>
            <ul className={styles.bulletPoints}>
              <li>Advise women who are pregnant or considering becoming pregnant to avoid alcohol completely.</li>
              <li>Inform women that consuming even small amounts of alcohol early in pregnancy can harm the developing fetus, and that larger amounts of alcohol can result in a syndrome of severe developmental problems (Fetal Alcohol Syndrome).</li>
              <li>Advise women who are breastfeeding to avoid alcohol completely.</li>
              <li>Given the benefits of exclusive breastfeeding (particularly in the first 6 months), if mothers continue to drink alcohol they should be advised to limit</li>
            </ul>
          </div>
        </div>
      </IonContent>
      <IonFooter>
        <div className={styles.footer}>
          <span>III</span>
          <span>○</span>
          <span>&lt;</span>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default SUWomenAlcohol;