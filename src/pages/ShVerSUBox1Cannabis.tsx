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
import styles from './ShVerSUBox1Cannabis.module.css';

// Define the type for the location state
type LocationState = {
  fromPage: string;
  activeTab?: string; // Mark as optional if it may not always be present
  remainingSubstances: Array<{ name: string; route: string }>;
};

const ShVerSUBox1Cannabis: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const [activeTab, setActiveTab] = useState('Behavioural Effects');
  const [behaviouralEffects, setBehaviouralEffects] = useState([
    { label: 'Slurred speech', checked: false },
    { label: 'Disinhibited behavior', checked: false },
    { label: 'Unsteady gait', checked: false },
  ]);

  const [withdrawalFeatures, setWithdrawalFeatures] = useState([
    { label: 'Anxiety', checked: false },
    { label: 'Insomnia', checked: false },
    { label: 'Tremors', checked: false },
    { label: 'Shaking', checked: false },
    { label: 'Nausea/vomiting', checked: false },
    { label: 'Increased heart rate and blood pressure', checked: false },
    { label: 'Seizures', checked: false },
    { label: 'Agitation', checked: false },
    { label: 'Confusion', checked: false },
    { label: 'Hallucinations', checked: false },
  ]);

  const [effectsProlongedUse, setEffectsProlongedUse] = useState([
    { label: 'Memory impairment', checked: false },
    { label: 'Increased risk of falls in the elderly', checked: false },
    { label: 'Risk of fatal sedative overdose', checked: false },
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
      // Redirect to the follow-up page if 3 or more options are selected in the current tab
      navigate('/ShVerSUFollowup', {
        state: {
          fromPage: 'Cannabis', // or the specific substance
          activeTab,
          remainingSubstances: location.state?.remainingSubstances || [],
        }
      });
    } else {
      // If fewer than 3 checked in the current tab, go to the next tab or substance
      if (activeTab === 'Behavioural Effects') {
        setActiveTab('Withdrawal Features');
      } else if (activeTab === 'Withdrawal Features') {
        setActiveTab('Effects of Prolonged Use');
      } else {
        const { remainingSubstances } = location.state || { remainingSubstances: [] };
        if (remainingSubstances.length > 0) {
          const nextSubstance = remainingSubstances[0];
          navigate(nextSubstance.route, {
            state: {
              remainingSubstances: remainingSubstances.slice(1),
            }
          });
        } else {
          navigate('/another-page'); // Or any other final destination page
        }
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
          <h2 className={styles.pageTitle}>Cannabis</h2>
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

export default ShVerSUBox1Cannabis;