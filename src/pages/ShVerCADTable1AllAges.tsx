import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
  IonCheckbox,
  IonLabel,
  IonItem,
  IonList,
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './ShVerCADTable1AllAges.module.css';

// Define the type for the location state
type LocationState = {
  fromPage: string;
  activeTab?: string; // Optional activeTab
};

const ShVerCADTable1AllAges: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const [activeTab, setActiveTab] = useState('Behavioural Effects');

  const [behaviouralEffects, setBehaviouralEffects] = useState([
    { label: 'Poor feeding', checked: false },
    { label: 'Failure to thrive', checked: false },
    { label: 'Poor motor tone', checked: false },
    { label: 'Delay in meeting excpected developmental milestones for appropriate age (eg. smiling, sitting, interacting with others, sharing attention, walking, talking and toilet training', checked: false },
  ]);

  const [withdrawalFeatures, setWithdrawalFeatures] = useState([
    { label: 'Excess over-activity: excessive running around, extreme difficulties remaining seated, excessive talking or moving restlessly ', checked: false },
    { label: ' Excessive inattention, absent-mindedness, repeatedly stopping tasks before completion and switching to other activities ', checked: false },
    { label: 'Excessive impulsivity: frequently doing things without forethought ', checked: false },
    { label: 'Repeated and continued behavior that disturbs others (e.g. unusually frequent and severe tantrums, cruel behavior, persistent and severe disobedience, stealing) ', checked: false },
    { label: 'Sudden changes in behaviour or peer relations, including withdrawal and anger ', checked: false },
  ]);

  const [effectsProlongedUse, setEffectsProlongedUse] = useState([
    { label: 'Excessive crying, clinging to a career, freezing (holding the body very still and being silent) and/or tantrums', checked: false },
    { label: ' Extreme shyness or changes in functioning (e.g. new wetting or soiling behavior or thumb sucking) ', checked: false },
    { label: 'Diminished initiation of play and social interaction ', checked: false },
  ]);

  const tabs = ['Behavioural Effects', 'Withdrawal Features', 'Effects of Prolonged Use'];

  const handleCheckboxChange = (
    index: number,
    setState: React.Dispatch<React.SetStateAction<any[]>>,
    state: any[]
  ) => {
    const updatedList = [...state];
    updatedList[index].checked = !updatedList[index].checked;
    setState(updatedList);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Behavioural Effects':
        return (
          <IonList>
            {behaviouralEffects.map((effect, index) => (
              <IonItem key={index} className={styles.listItem}>
                <IonLabel>{effect.label}</IonLabel>
                <IonCheckbox
                  slot="end"
                  checked={effect.checked}
                  onIonChange={() => handleCheckboxChange(index, setBehaviouralEffects, behaviouralEffects)}
                />
              </IonItem>
            ))}
          </IonList>
        );
      case 'Withdrawal Features':
        return (
          <IonList>
            {withdrawalFeatures.map((feature, index) => (
              <IonItem key={index} className={styles.listItem}>
                <IonLabel>{feature.label}</IonLabel>
                <IonCheckbox
                  slot="end"
                  checked={feature.checked}
                  onIonChange={() => handleCheckboxChange(index, setWithdrawalFeatures, withdrawalFeatures)}
                />
              </IonItem>
            ))}
          </IonList>
        );
      case 'Effects of Prolonged Use':
        return (
          <IonList>
            {effectsProlongedUse.map((effect, index) => (
              <IonItem key={index} className={styles.listItem}>
                <IonLabel>{effect.label}</IonLabel>
                <IonCheckbox
                  slot="end"
                  checked={effect.checked}
                  onIonChange={() => handleCheckboxChange(index, setEffectsProlongedUse, effectsProlongedUse)}
                />
              </IonItem>
            ))}
          </IonList>
        );
      default:
        return null;
    }
  };

  const handleNextClick = () => {
    const countChecked = (list: any[]) => list.filter((item) => item.checked).length;

    // Determine the number of checked items based on the active tab
    let checkedCount = 0;
    switch (activeTab) {
      case 'Behavioural Effects':
        checkedCount = countChecked(behaviouralEffects);
        break;
      case 'Withdrawal Features':
        checkedCount = countChecked(withdrawalFeatures);
        break;
      case 'Effects of Prolonged Use':
        checkedCount = countChecked(effectsProlongedUse);
        break;
      default:
        checkedCount = 0;
    }

    if (checkedCount >= 3) {
      navigate('/ShVerSUFollowup', {
        state: {
          fromPage: 'allages',
          activeTab,
        }
      });
    } else {
      if (activeTab === 'Behavioural Effects') {
        setActiveTab('Withdrawal Features');
      } else if (activeTab === 'Withdrawal Features') {
        setActiveTab('Effects of Prolonged Use');
      } else {
        navigate('/another-page');
      }
    }
  };

  useEffect(() => {
    if (state && state.activeTab) {
      setActiveTab(state.activeTab);
    }
  }, [state]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className={styles.header}>
          <IonIcon icon={arrowBack} onClick={() => navigate(-1)} />
          <IonTitle>mhGAP Intervention Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className={styles.subheader}>
          <span className={styles.assessmentHeader}>SUBSTANCE USE | ASSESSMENT</span>
        </div>
        <div className={styles.titleSection}>
          <h2 className={styles.pageTitle}>ALL AGES</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className={styles.content}>{renderContent()}</div>
        </div>
      </IonContent>
      <div className={styles.footer}>
        <IonButton expand="block" onClick={handleNextClick}>
          {activeTab === 'Effects of Prolonged Use' ? 'Proceed' : 'Next'}
        </IonButton>
      </div>
    </IonPage>
  );
};

export default ShVerCADTable1AllAges;