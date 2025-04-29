import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonButton,
  IonIcon
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import styles from './ShVerSUBox1.module.css';

const ShVerSUBox1: React.FC = () => {
  const navigate = useNavigate();
  const [substances, setSubstances] = useState([
    { name: 'Alcohol', checked: false, route: '/questions/alcohol' },
    { name: 'Benzodiazepines', checked: false, route: '/questions/benzodiazepines' },
    { name: 'Opioids', checked: false, route: '/questions/opioids' },
    { name: 'Tobacco', checked: false, route: '/questions/tobacco' },
    { name: 'Cocaine, Methamphetamines & Amphetamine-type stimulants', checked: false, route: '/questions/stimulants' },
    { name: 'Khat', checked: false, route: '/questions/khat' },
    { name: 'Cannabis', checked: false, route: '/questions/cannabis' },
    { name: 'Tramadol', checked: false, route: '/questions/tramadol' },
    { name: 'Volatile solvents', checked: false, route: '/questions/solvents' },
    { name: 'Hallucinogens', checked: false, route: '/questions/hallucinogens' },
    { name: 'MDMA', checked: false, route: '/questions/mdma' },
  ]);

  const handleCheckboxChange = (index: number) => {
    const newSubstances = [...substances];
    newSubstances[index].checked = !newSubstances[index].checked;
    setSubstances(newSubstances);
  };

  const handleProceed = () => {
    const selectedSubstances = substances.filter(substance => substance.checked);

    if (selectedSubstances.length > 0) {
      redirectSequentially(selectedSubstances);
    }
  };

  const redirectSequentially = (substancesQueue: Array<{ name: string; route: string }>) => {
    if (substancesQueue.length > 0) {
      const { route } = substancesQueue[0];
      navigate(route, { state: { remainingSubstances: substancesQueue.slice(1) } });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonIcon icon={arrowBack} className={styles.backIcon} onClick={() => navigate('/ShVerSUAssesment')} />
          <IonTitle>mhGAP Intervention Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className={styles.subheader}>
          <span>SUBSTANCE USE | ASSESSMENT</span>
        </div>
        <div className={styles.substanceUseContainer}>
          <h3 className={styles.subtitle}>BOX 1: PSYCHOACTIVE SUBSTANCES</h3>
          <p className={styles.description}>ACUTE BEHAVIOURAL EFFECTS, WITHDRAWAL FEATURES, AND EFFECTS OF PROLONGED USE</p>
          <IonList>
            {substances.map((substance, index) => (
              <IonItem key={index} lines="full" className={styles.substanceItem}>
                <IonLabel>{substance.name}</IonLabel>
                <IonCheckbox
                  slot="end"
                  checked={substance.checked}
                  onIonChange={() => handleCheckboxChange(index)}
                />
              </IonItem>
            ))}
          </IonList>
          <IonButton expand="block" className={styles.proceedButton} onClick={handleProceed}>PROCEED</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ShVerSUBox1;



