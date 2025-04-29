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
import styles from './ShVerCADTable1.module.css';

const ShVerCADTable: React.FC = () => {
  const navigate = useNavigate();
  const [AgeCategory, setAgeCategory] = useState([
    { name: 'Infants and Young Children (age<5)', checked: false, route: '/questions/infants' },
    { name: 'Middle Childhood (age 6-12)', checked: false, route: '/questions/middle' },
    { name: 'Adolescents (age 13-18)', checked: false, route: '/questions/adolescents' },
    { name: 'All Ages', checked: false, route: '/questions/allages' }
  ]);

  const handleCheckboxChange = (index: number) => {
    // Uncheck all other checkboxes
    const updatedAgeCategory = AgeCategory.map((AgeCategory, i) => ({
      ...AgeCategory,
      checked: i === index // Only check the selected checkbox
    }));
    setAgeCategory(updatedAgeCategory);
  };

  const handleProceed = () => {
    const selectedAgeCategory = AgeCategory.find((AgeCategory) => AgeCategory.checked);
    if (selectedAgeCategory) {
      navigate(selectedAgeCategory.route);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonIcon icon={arrowBack} className={styles.backIcon} onClick={() => navigate('/ShVerCADAssessment')} />
          <IonTitle>mhGAP Intervention Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className={styles.subheader}>
          <span>CHILD / ADOLESCENTS | ASSESSMENT</span>
        </div>
        <div className={styles.substanceUseContainer}>
          <h3 className={styles.subtitle}>TABLE 1: COMMON PRESENTATIONS</h3>
          <p className={styles.description}>CHILD & ADOLESCENT MENTAL & BEHAVIOURAL DISORDERS BY AGE GROUP</p>
          <IonList>
            {AgeCategory.map((AgeCategory, index) => (
              <IonItem key={index}>
                <IonLabel>{AgeCategory.name}</IonLabel>
                <IonCheckbox
                  slot="end"
                  checked={AgeCategory.checked}
                  onIonChange={() => handleCheckboxChange(index)}
                />
              </IonItem>
            ))}
          </IonList>
          <IonButton expand="block" className={styles.proceedButton} onClick={handleProceed}>
            PROCEED
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ShVerCADTable;
