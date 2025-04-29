import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonPage, IonContent, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import { personCircleOutline, lockClosedOutline } from 'ionicons/icons';
import './Login.css'; // Import your custom CSS for Login page styling

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSigningUp, setIsSigningUp] = useState(false); // State to manage sign-up mode
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/VersionPrompt');
    } catch (error: unknown) {
      handleError(error);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage('Successfully signed up! Redirecting to login...');
      // Clear form fields
      setEmail('');
      setPassword('');
      // Delay the redirect for a short period to display the success message
      setTimeout(() => {
        setIsSigningUp(false);
        setSuccessMessage(null);
        setError(null); // Clear any previous error messages
        navigate('/login');
      }, 2000); // Redirect after 2 seconds
    } catch (error: unknown) {
      handleError(error);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage('Password reset email sent! Check your inbox.');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  const handleError = (error: unknown) => {
    if (error instanceof Error) {
      const authError = error as Error;
      if (authError.message.includes('auth/email-already-in-use')) {
        setError('Email address is already in use. Please use a different email or login.');
      } else {
        setError(authError.message);
      }
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
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                {isSigningUp ? (
                  <>
                    <IonButton expand="block" className="ion-margin-top" onClick={handleSignUp}>Sign Up</IonButton>
                    <IonButton expand="block" color="secondary" className="ion-margin-top" onClick={() => { setIsSigningUp(false); setEmail(''); setPassword(''); setError(null); }}>Switch to Login</IonButton>
                  </>
                ) : (
                  <>
                    <IonButton expand="block" className="ion-margin-top" onClick={handleLogin}>Login</IonButton>
                    <IonButton expand="block" color="secondary" className="ion-margin-top" onClick={() => { setIsSigningUp(true); setEmail(''); setPassword(''); setError(null); }}>Switch to Sign Up</IonButton>
                    <IonButton expand="block" color="tertiary" className="ion-margin-top" onClick={handleForgotPassword}>Forgot Password?</IonButton>
                  </>
                )}
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;









