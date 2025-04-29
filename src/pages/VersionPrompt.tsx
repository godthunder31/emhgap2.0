import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useNavigate } from 'react-router-dom'; 
import './VersionPrompt.css'; // Import your CSS file

const VersionPrompt: React.FC = () => {
  const navigate = useNavigate();

  const selectVersion = (version: string) => {
    if (version === 'full') {
      navigate('/index');
    } else {
      navigate('/index2');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Choose App Version</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="version-prompt-container">
          <h1>Choose App Version</h1>
          <p>Please select which version of the app you'd like to use:</p>
          <div className="button-container">
            <IonButton className="button full-version" expand="block" onClick={() => selectVersion('full')}>
              Full Version
            </IonButton>
            <IonButton className="button short-version" expand="block" onClick={() => selectVersion('short')}>
              Short Version
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default VersionPrompt;



