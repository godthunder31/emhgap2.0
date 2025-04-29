import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton } from '@ionic/react';
import './DescriptionC.css'; // Import your CSS file

const DescriptionC: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonButton onClick={() => window.history.back()}>←</IonButton>
          </IonButtons>
          <IonTitle className="ion-text-center">mhGAP Intervention Guide</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => window.location.href = '/'}>&#8962;</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="subheader">
          <span>CHILD/ADOLESCENTS | DESCRIPTION</span>
        </div>
        <div className="content">
          <p>This module covers assessment and management of developmental disorders, behavioural disorders, and emotional disorders in children and adolescents.</p>

          <h2>DEVELOPMENTAL DISORDER</h2>
          <p>DEVELOPMENTAL DISORDER is an umbrella term covering disorders such as intellectual disability as well as autism spectrum disorders. These disorders usually have a childhood onset, impairment or delay in functions related to central nervous system maturation, and a steady course rather than the remissions and relapses that tend to characterize many other mental disorders.</p>

          <h2>BEHAVIOURAL DISORDERS</h2>
          <p>BEHAVIOURAL DISORDERS is an umbrella term that includes specific disorders such as attention deficit hyperactivity disorder (ADHD) and conduct disorders. Behavioural symptoms of varying levels of severity are very common in the general population. Only children and adolescents with a moderate to severe degree of psychological, social, educational or occupational impairment in multiple settings should be diagnosed as having behavioural disorders.</p>

          <h2>EMOTIONAL DISORDERS</h2>
          <p>EMOTIONAL DISORDERS are among the leading mental health-related causes of the global burden of disease in young people. Emotional disorders are characterized by increased levels of anxiety, depression, fear, and somatic symptoms.</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DescriptionC;
