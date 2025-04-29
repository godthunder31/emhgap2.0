import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonList, IonItem, IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import { homeOutline, ellipsisHorizontal, arrowBack, eyeOutline, chevronForward } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import './SUSpecialPopulations.css';

const SpecialPopulationsSubstanceUse: React.FC = () => {
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
      <IonContent>
        <div className="subheader">
          <IonIcon icon={arrowBack} onClick={() => navigate('/ManagementS')} />
          <span>SUBSTANCE USE | QUICK OVERVIEW</span>
          <IonIcon icon={eyeOutline} />
        </div>
        <h1 className="page-title">Special Populations</h1>
        <IonList lines="full">
          <IonItem button detail={false} routerLink="/SUClinicalTip">
            <IonLabel>CLINICAL TIP: HIV/TB/HEPATITIS and SUBSTANCE USE</IonLabel>
            <IonIcon icon={chevronForward} slot="end" />
          </IonItem>
          <IonItem button detail={false} routerLink="/SUAdolescents">
            <IonLabel>ADOLESCENTS</IonLabel>
            <IonIcon icon={chevronForward} slot="end" />
          </IonItem>
          <IonItem button detail={false} routerLink="/SUWomen">
            <IonLabel>WOMEN WHO ARE OF CHILD-BEARING AGE, PREGNANT, OR BREASTFEEDING</IonLabel>
            <IonIcon icon={chevronForward} slot="end" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SpecialPopulationsSubstanceUse;
