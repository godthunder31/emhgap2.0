import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonList, IonItem, IonLabel } from '@ionic/react';
import { homeOutline, ellipsisHorizontal, arrowBack, eyeOutline, chevronForward } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import './ManagementS.css';

const ManagementS: React.FC = () => {
  const navigate = useNavigate();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
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
      <IonContent>
        <div className="subheader">
          <IonIcon icon={arrowBack} onClick={() => navigate('/DisordersDueToSubstanceUsePage')} />
          <span>SUBSTANCE USE | QUICK OVERVIEW</span>
          <IonIcon icon={eyeOutline} />
        </div>
        <h1 className="page-title">Management</h1>
        <IonList lines="full">
          <IonItem button detail={false} routerLink="/SUSpecialPopulations">
            <IonLabel>SPECIAL POPULATIONS</IonLabel>
            <IonIcon icon={chevronForward} slot="end" />
          </IonItem>
          <IonItem button detail={false}>
            <IonLabel>Management Protocol 1 (Harmful use)</IonLabel>
            <IonIcon icon={chevronForward} slot="end" />
          </IonItem>
          <IonItem button detail={false}>
            <IonLabel>Management Protocol 2 (Dependence)</IonLabel>
            <IonIcon icon={chevronForward} slot="end" />
          </IonItem>
          <IonItem button detail={false}>
            <IonLabel>Management Protocol 3 (Alcohol withdrawal)</IonLabel>
            <IonIcon icon={chevronForward} slot="end" />
          </IonItem>
          <IonItem button detail={false}>
            <IonLabel>Management Protocol 4 (Opioid withdrawal)</IonLabel>
            <IonIcon icon={chevronForward} slot="end" />
          </IonItem>
          <IonItem button detail={false}>
            <IonLabel>Management Protocol 5 (Opioid agonist maintenance treatment)</IonLabel>
            <IonIcon icon={chevronForward} slot="end" />
          </IonItem>
          <IonItem button detail={false}>
            <IonLabel>Management Protocol 6 (Benzodiazepine withdrawal)</IonLabel>
            <IonIcon icon={chevronForward} slot="end" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ManagementS;