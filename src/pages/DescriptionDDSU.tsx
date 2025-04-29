import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonButtons, IonBackButton } from '@ionic/react';
import './DescriptionDDSU.css'; // Import your CSS file

const DescriptionDDSU: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="white">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/DisordersDueToSubstanceUsePage" />
          </IonButtons>
          <IonTitle className="ion-text-center">mhGAP Intervention Guide</IonTitle>
          <div className="home-menu-icons">🏠 ☰</div>
        </IonToolbar>
      </IonHeader>
      <IonToolbar >
        <div className="subheader1">
          <span>&lt; SUBSTANCE USE |</span>
          <span>DESCRIPTION</span>
          <span>👁</span>
        </div>
      </IonToolbar>
      <IonContent>
        <div className="main-content">
          <IonText>
            <p>Disorders due to substance use include both drug and alcohol use disorders and certain conditions including acute intoxication, overdose and withdrawal.</p>
          </IonText>
          <IonText>
            <h2>ACUTE INTOXICATION</h2>
            <p>is a transient condition following intake of a psychoactive substance resulting in disturbances of consciousness, cognition, perception, affect, or behaviour.</p>
          </IonText>
          <IonText>
            <h2>OVERDOSE</h2>
            <p>is the use of any drug in such an amount that acute adverse physical or mental effects are produced.</p>
          </IonText>
          <IonText>
            <h2>WITHDRAWAL</h2>
            <p>is the experience of a set of unpleasant symptoms following the abrupt cessation or reduction in dose of a psychoactive substance; it has been consumed in high enough doses and for a long enough duration for the person to be physically or mentally dependent on it. Withdrawal symptoms are, essentially, opposite to those that are produced by the psychoactive substance itself.</p>
          </IonText>
          <IonText>
            <h2>HARMFUL USE</h2>
            <p>is a pattern of psychoactive substance use that damages health. This damage may be physical, e.g. liver disease, or mental, e.g. episodes of depressive disorder. It is often associated with social consequences, e.g. family or work problems.</p>
          </IonText>
          <IonText>
            <h2>DEPENDENCE</h2>
            <p>is a cluster of physiological,</p>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DescriptionDDSU;
