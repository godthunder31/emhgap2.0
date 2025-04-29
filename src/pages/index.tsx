import React, { useState, useRef } from 'react';
import { globe, document, menu as menuIcon } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonPopover, IonButton, IonMenu, IonList, IonMenuToggle, IonButtons, IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import { useNavigate } from 'react-router-dom';
import './index.module.css';
import styles from './index.module.css';
import moduleIcon from '../assets/module-icon.jpeg';
import masterIcon from '../assets/master-chart-icon.jpeg';
import essentialIcon from '../assets/essential-care-icon.jpeg';
import furtherIcon from '../assets/further-info-icon.jpeg';
import whoICOn from '../assets/who-logo.jpeg';

const translations = {
  en: {
    title: "MHGAP Intervention Guide - Full Version",
    modules: "MODULES",
    masterChart: "MASTER CHART",
    essentialCare: "ESSENTIAL CARE & PRACTICE",
    furtherInfo: "FURTHER INFORMATION",
    signIn: "Sign In / Register",
    login: "Login",
    aboutApp: "About App",
    tutorial: "Tutorial",
    fullVersion: "Full Version",
    shortVersion: "Short Version"
  },
  te: {
    title: "MHGAP Intervention Guide - Full Version",
    modules: "మాడ్యూల్స్",
    masterChart: "మాస్టర్ చార్ట్",
    essentialCare: "అత్యవసర శ్రద్ధ & పద్ధతి",
    furtherInfo: "మరింత సమాచారం",
    signIn: "సైన్ ఇన్ / రిజిస్టర్",
    login: "లాగిన్",
    aboutApp: "యాప్ గురించి",
    tutorial: "ట్యుటోరియల్",
    fullVersion: "పూర్తి సంచిక",
    shortVersion: "తక్కువ సంచిక"
  }
};

const index: React.FC = () => {
  const [showDocumentPopover, setShowDocumentPopover] = useState(false);
  const [documentPopoverEvent, setDocumentPopoverEvent] = useState<MouseEvent | undefined>(undefined);
  const [showWorldPopover, setShowWorldPopover] = useState(false);
  const [worldPopoverEvent, setWorldPopoverEvent] = useState<MouseEvent | undefined>(undefined);
  const [language, setLanguage] = useState<'en' | 'te'>('en');
  const navigate = useNavigate();

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

  const closeDocumentPopover = () => {
    setShowDocumentPopover(false);
  };

  const closeWorldPopover = () => {
    setShowWorldPopover(false);
  };

  const navigateToFullVersion = () => {
    setShowDocumentPopover(false);
    navigate('/index');
  };

  const navigateToShortVersion = () => {
    setShowDocumentPopover(false);
    navigate('/index2');
  };

  const switchToEnglish = () => {
    setLanguage('en');
    closeWorldPopover();
  };

  const switchToTelugu = () => {
    setLanguage('te');
    closeWorldPopover();
  };

  const t = translations[language];
  const t_en = translations['en'];
  const t_te = translations['te'];

  return (
    <IonPage>
      <IonMenu contentId="main-content" ref={menuRef}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{t.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle autoHide={false}>
              <IonItem button routerLink="/Login">
                <IonLabel>{t.signIn}</IonLabel>
              </IonItem>
              <IonItem button routerLink="/Login">
                <IonLabel>{t.login}</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>{t.aboutApp}</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>{t.tutorial}</IonLabel>
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
              <IonTitle className="header-title">{t.title}</IonTitle>
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
              <IonTitle size="large">{t.title}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div className="container">
            <IonCard routerLink="/FullModules" className="card">
              <img src={moduleIcon} alt="Modules Icon" />
              <IonCardHeader>
                <IonCardTitle>
                  {language === 'te'
                    ? `${t_en.modules} / ${t_te.modules}`
                    : t.modules}
                </IonCardTitle>
              </IonCardHeader>
            </IonCard>
            <IonCard className="card">
              <img src={masterIcon} alt="Master Chart Icon" />
              <IonCardHeader>
                <IonCardTitle>
                  {language === 'te'
                    ? `${t_en.masterChart} / ${t_te.masterChart}`
                    : t.masterChart}
                </IonCardTitle>
              </IonCardHeader>
            </IonCard>
            <IonCard className="card">
              <img src={essentialIcon} alt="Essential Care Icon" />
              <IonCardHeader>
                <IonCardTitle>
                  {language === 'te'
                    ? `${t_en.essentialCare} / ${t_te.essentialCare}`
                    : t.essentialCare}
                </IonCardTitle>
              </IonCardHeader>
            </IonCard>
            <IonCard className="card">
              <img src={furtherIcon} alt="Further Information Icon" />
              <IonCardHeader>
                <IonCardTitle>
                  {language === 'te'
                    ? `${t_en.furtherInfo} / ${t_te.furtherInfo}`
                    : t.furtherInfo}
                </IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </div>

          <div className={styles['page']}>
             <footer className={styles['footer']}>
              <img src={whoICOn} alt="WHO Logo" />
             </footer>
          </div>
          <IonPopover
            isOpen={showWorldPopover}
            event={worldPopoverEvent}
            onDidDismiss={closeWorldPopover}
          >
            <IonItem button onClick={switchToTelugu}>
              <IonLabel>Telugu</IonLabel>
            </IonItem>
            <IonItem button onClick={switchToEnglish}>
              <IonLabel>English</IonLabel>
            </IonItem>
          </IonPopover>

          <IonPopover
            isOpen={showDocumentPopover}
            event={documentPopoverEvent}
            onDidDismiss={closeDocumentPopover}
          >
            <IonItem button onClick={navigateToFullVersion}>
              <IonLabel>{t.fullVersion}</IonLabel>
            </IonItem>
            <IonItem button onClick={navigateToShortVersion}>
              <IonLabel>{t.shortVersion}</IonLabel>
            </IonItem>
          </IonPopover>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default index;






