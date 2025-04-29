import { useState, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonSelect,
  IonSelectOption
} from '@ionic/react';
import { db } from '../firebaseConfig';
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import './AssesseeDetails.module.css';

const AssesseeDetails: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    qualification: "",
    job: "",
    parentname: "",
    parentno: "",
    monthlysavings: "",
    area: "",
    namearea: "",
    housing: "",
    otherillness: "",
    disease: ""
  });

  const documentId = "assesseeDetails";
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const docRef = doc(db, "details", documentId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          await updateDoc(docRef, { responses: [] });
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      // Generate a unique ID
      const assesseeId = Date.now().toString();
      
      // Save assessee details in 'assessees' collection
      const assesseeRef = doc(db, "assessees", assesseeId);
      await setDoc(assesseeRef, {
        ...formData,
        assesseeId,
        createdAt: new Date().toISOString()
      });

      // Create initial assessment document with reference to assessee
      const assessmentRef = doc(db, "assessments", assesseeId);
      await setDoc(assessmentRef, {
        assesseeId,
        assesseeDetails: {
          name: formData.name,
          age: formData.age,
          gender: formData.gender
        },
        createdAt: new Date().toISOString(),
        steps: {}  // Will be populated by assessment steps
      });

      // Store assesseeId in localStorage
      localStorage.setItem('currentAssesseeId', assesseeId);
      console.log("Stored assesseeId:", assesseeId);

      // Navigate to next page
      navigate('/AssessStep1C');
    } catch (error) {
      console.error("Error saving assessee details:", error);
      alert('Error saving details. Please try again.');
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="form-container">
          {Object.keys(formData).map((key) => (
            <IonItem key={key} className="ion-item-custom">
              <IonLabel position="stacked">{key.replace(/([A-Z])/g, ' $1').trim()}</IonLabel>
              {key === "gender" ? (
                <IonSelect name={key} value={formData[key as keyof typeof formData]} onIonChange={handleChange}>
                  <IonSelectOption value="male">Male</IonSelectOption>
                  <IonSelectOption value="female">Female</IonSelectOption>
                </IonSelect>
              ) : (
                <IonInput name={key} value={formData[key as keyof typeof formData]} onIonInput={handleChange} />
              )}
            </IonItem>
          ))}
          <IonButton expand="block" onClick={handleSubmit}>Submit</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AssesseeDetails;
