import React, { useState, useRef } from 'react';
import { globe, document, menu as menuIcon } from 'ionicons/icons'; // Import the necessary icons
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonPopover, IonButton, IonMenu, IonList, IonMenuToggle, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import './Home.css';
import moduleIcon from '../assets/module-icon.jpeg';
import masterIcon from '../assets/master-chart-icon.jpeg';
import essentialIcon from '../assets/essential-care-icon.jpeg';
import furtherIcon from '../assets/further-info-icon.jpeg';
import whoICOn from '../assets/who-logo.jpeg';

const Home: React.FC = () => {
  const [showDocumentPopover, setShowDocumentPopover] = useState(false);
  const [documentPopoverEvent, setDocumentPopoverEvent] = useState<MouseEvent | undefined>(undefined);
  const [showWorldPopover, setShowWorldPopover] = useState(false);
  const [worldPopoverEvent, setWorldPopoverEvent] = useState<MouseEvent | undefined>(undefined);

  const menuRef = useRef<HTMLIonMenuElement>(null);

  const openDocumentPopover = (e: React.MouseEvent<HTMLIonButtonElement>) => {
    e.persist();
    setDocumentPopoverEvent(e.nativeEvent);
    setShowDocumentPopover(true);
  };

  const openWorldPopover = (e: React.MouseEvent<HTMLIonButtonElement>) => {
    e.persist();
    setWorldPopoverEvent(e.nativeEvent);
    setShowWorldPopover(true);
  };

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.open();
    }
  };

  return (
    <IonPage>
      <IonMenu contentId="main-content" ref={menuRef}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle autoHide={false}>
              <IonItem button>
                <IonLabel>Sign In / Register</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Login</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>About App</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Tutorial</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonContent id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton fill="clear" onClick={toggleMenu}>
                <IonIcon icon={menuIcon} />
              </IonButton>
            </IonButtons>
            <div className="header-container">
              <IonTitle className="header-title">MHGAP Intervention Guide</IonTitle>
              <IonButton fill="clear" onClick={openWorldPopover}>
                <IonIcon icon={globe} />
              </IonButton>
              <IonButton fill="clear" onClick={openDocumentPopover}>
                <IonIcon icon={document} />
              </IonButton>
            </div>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">MHGAP Intervention Guide</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div className="container">
            <IonCard routerLink="/ModulesPage" className="card">
              <img src={moduleIcon} alt="Modules Icon" />
              <IonCardHeader>
                <IonCardTitle>MODULES</IonCardTitle>
              </IonCardHeader>
            </IonCard>
            <IonCard className="card">
              <img src={masterIcon} alt="Master Chart Icon" />
              <IonCardHeader>
                <IonCardTitle>MASTER CHART</IonCardTitle>
              </IonCardHeader>
            </IonCard>
            <IonCard className="card">
              <img src={essentialIcon} alt="Essential Care Icon" />
              <IonCardHeader>
                <IonCardTitle>ESSENTIAL CARE & PRACTICE</IonCardTitle>
              </IonCardHeader>
            </IonCard>
            <IonCard className="card">
              <img src={furtherIcon} alt="Further Information Icon" />
              <IonCardHeader>
                <IonCardTitle>FURTHER INFORMATION</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </div>

          <footer className="footer">
            <img src={whoICOn} alt="WHO Logo" />
          </footer>

          <IonPopover
            isOpen={showWorldPopover}
            event={worldPopoverEvent}
            onDidDismiss={() => setShowWorldPopover(false)}
          >
            <IonItem button>
              <IonLabel>Telugu</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>English</IonLabel>
            </IonItem>
          </IonPopover>

          <IonPopover
            isOpen={showDocumentPopover}
            event={documentPopoverEvent}
            onDidDismiss={() => setShowDocumentPopover(false)}
          >
            <IonItem button>
              <IonLabel>Full Version</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Short Version</IonLabel>
            </IonItem>
          </IonPopover>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;