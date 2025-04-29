import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonPage, IonContent, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { personCircleOutline, lockClosedOutline } from 'ionicons/icons';
import './LoginPage.module.css';

const NurseLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/NurseAssesseeDetails');
    } catch (error: unknown) {
      handleError(error);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage('Successfully signed up! Redirecting to login...');
      setEmail('');
      setPassword('');
      setTimeout(() => {
        setIsSigningUp(false);
        setSuccessMessage(null);
        setError(null);
        navigate('/NurseLoginPage');
      }, 2000);
    } catch (error: unknown) {
      handleError(error);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage('Password reset email sent! Check your inbox.');
    } catch (error: unknown) {
      handleError(error);
    }
  };

  const handleError = (error: unknown) => {
    if (error instanceof Error) {
      setError(error.message);
    } else {
      setError('An unknown error occurred');
    }
  };

  const handleInputChange = (e: CustomEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.name === 'email') {
      setEmail(target.value);
    } else if (target.name === 'password') {
      setPassword(target.value);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol size="12" sizeMd="6" offsetMd="3">
              <div className="login-form">
                <div className="login-header">
                  <IonIcon icon={isSigningUp ? personCircleOutline : lockClosedOutline} className="login-icon" />
                  <h1 className="login-title">{isSigningUp ? 'Sign Up' : 'Login'}</h1>
                </div>

                <IonItem className="ion-margin-top">
                  <IonLabel position="stacked">Email</IonLabel>
                  <IonInput type="email" name="email" value={email} onIonInput={handleInputChange} />
                </IonItem>
                <IonItem className="ion-margin-top">
                  <IonLabel position="stacked">Password</IonLabel>
                  <IonInput type="password" name="password" value={password} onIonInput={handleInputChange} />
                </IonItem>
                <IonButton expand="full" onClick={isSigningUp ? handleSignUp : handleLogin}>
                  {isSigningUp ? 'Sign Up' : 'Login'}
                </IonButton>
                <IonButton expand="full" fill="clear" onClick={handleForgotPassword}>
                  Forgot Password?
                </IonButton>

                {!isSigningUp && (
                  <IonButton expand="full" fill="clear" onClick={() => setIsSigningUp(true)}>
                    New User? Sign Up
                  </IonButton>
                )}
                {successMessage && <p className="success-message">{successMessage}</p>}
                {error && <p className="error-message">{error}</p>}
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NurseLoginPage;