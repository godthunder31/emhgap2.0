import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { chevronBack, home } from 'ionicons/icons';
import styles from './ShVerSUFollowup.module.css';

type LocationState = {
  fromPage: string;
  activeTab: string;
  remainingSubstances: Array<{ name: string; route: string }>;
};

const ShVerSUFollowup: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleProceed = () => {
    const { fromPage, activeTab, remainingSubstances = [] } = location.state || {};

    const handleTabTransition = () => {
      if (activeTab === 'Behavioural Effects') {
        navigate(`/questions/${fromPage}`, {
          state: {
            activeTab: 'Withdrawal Features',
            remainingSubstances,
          },
        });
      } else if (activeTab === 'Withdrawal Features') {
        navigate(`/questions/${fromPage}`, {
          state: {
            activeTab: 'Effects of Prolonged Use',
            remainingSubstances,
          },
        });
      } else if (activeTab === 'Effects of Prolonged Use') {
        if (remainingSubstances.length > 0) {
          const nextSubstance = remainingSubstances[0];
          navigate(nextSubstance.route, {
            state: {
              remainingSubstances: remainingSubstances.slice(1),
            },
          });
        } else {
          navigate('/another-page'); // Or any other final page
        }
      }
    };

    handleTabTransition();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className={styles.toolbar}>
          <IonTitle className={styles.title}>mhGAP Intervention Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={styles.content}>
        <div className={styles.subHeader}>
          <IonIcon icon={chevronBack} />
          <span>SUBSTANCE USE | FOLLOW-UP</span>
          <IonIcon icon={home} />
        </div>
        <div className={styles.mainContent}>
          <h2 className={styles.sectionTitle}>1 – ASSESS FOR IMPROVEMENT</h2>
          <p className={styles.instruction}>At every visit, assess:</p>
          <ul className={styles.assessmentList}>
            <li>
              Quantity and frequency of substance use, mental health, physical
              health, risk and protective factors (e.g. relationships,
              accommodation, employment, etc.)
            </li>
            <li>
              Ask about factors that lead to substance use and consequences of
              substance use
            </li>
          </ul>
          <h3 className={styles.subSectionTitle}>ONGOING SUBSTANCE USE</h3>
          <ul className={styles.assessmentList}>
            <li>Develop strategies to reduce harm</li>
            <li>Treat health problems</li>
            <li>Develop strategies to reduce use</li>
            <li>
              Arrange detoxification or maintenance treatment if the client
              agrees
            </li>
            <li>Conduct frequent review and outreach</li>
          </ul>
          <h3 className={styles.subSectionTitle}>
            RECENT CESSATION OF USE OR SHIFT TO NON-HARMFUL USE
          </h3>
          <ul className={styles.assessmentList}>
            <li>Consider urine testing to confirm abstinence</li>
            <li>
              Give positive feedback to encourage the maintenance of
              abstinence/non-harmful use
            </li>
          </ul>
        </div>
      </IonContent>
      <div className={styles.footer}>
        <IonButton expand="block" onClick={handleProceed}>
          Proceed
        </IonButton>
      </div>
    </IonPage>
  );
};

export default ShVerSUFollowup;



