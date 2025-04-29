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
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const assessorDetails: React.FC = () => {
  const [nuid, setNuid] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [qualification, setQualification] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [specialization, setSpecialization] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [centreName, setCentreName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const documentId = "assessorDetails";
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

  const handleSubmit = async () => {
    console.log("Submitting data:", { nuid, name, age, gender, phone, qualification, job, specialization, experience, centreName, address });
    try {
      const docRef = doc(db, "details", documentId);

      const docSnap = await getDoc(docRef);
      const currentResponses = docSnap.exists() ? docSnap.data().responses || [] : [];

      const newResponse = {
        nuid,
        name,
        age,
        gender,
        phone,
        qualification,
        job,
        specialization,
        experience,
        centreName,
        address
      };

      await updateDoc(docRef, {
        responses: [...currentResponses, newResponse]
      });

      setNuid("");
      setName("");
      setAge("");
      setGender("");
      setPhone("");
      setQualification("");
      setJob("");
      setSpecialization("");
      setExperience("");
      setCentreName("");
      setAddress("");

      // Redirect to assesseeDetails page
      navigate('/NurseLoginPage');
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="form-container">
          <IonItem>
            <IonLabel position="stacked">NUID</IonLabel>
            <IonInput value={nuid} onIonInput={(e) => setNuid(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Name</IonLabel>
            <IonInput value={name} onIonInput={(e) => setName(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Age</IonLabel>
            <IonInput value={age} onIonInput={(e) => setAge(e.detail.value!)} />
          </IonItem>
          <IonItem className="ion-select-custom">
            <IonLabel position = "stacked"className="ion-select-label">Gender</IonLabel>
            <IonSelect
              className="ion-select-arrow"
              value={gender}
              onIonChange={(e) => setGender(e.detail.value!)}>
              <IonSelectOption value="male">Male</IonSelectOption>
              <IonSelectOption value="female">Female</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Phone Number / Email</IonLabel>
            <IonInput value={phone} onIonInput={(e) => setPhone(e.detail.value!)} />
          </IonItem>
          <IonItem className="ion-select-custom">
            <IonLabel position = "stacked"className="ion-select-label">Qualification</IonLabel>
            <IonSelect
              className="ion-select-arrow"
              value={qualification}
              onIonChange={(e) => setQualification(e.detail.value!)}>
              <IonSelectOption value="ANM">ANM</IonSelectOption>
              <IonSelectOption value="GNM">GNM</IonSelectOption>
              <IonSelectOption value="Post Basic Nursing">Post Basic Nursing</IonSelectOption>
              <IonSelectOption value="B.Sc. Nursing">B.Sc. Nursing</IonSelectOption>
              <IonSelectOption value="M.Sc. Nursing">M.Sc. Nursing</IonSelectOption>
              <IonSelectOption value="MBBS">MBBS</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Job</IonLabel>
            <IonInput value={job} onIonInput={(e) => setJob(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Specialization</IonLabel>
            <IonInput value={specialization} onIonInput={(e) => setSpecialization(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Years of Experience</IonLabel>
            <IonInput value={experience} onIonInput={(e) => setExperience(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Name of the Centre</IonLabel>
            <IonInput value={centreName} onIonInput={(e) => setCentreName(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Address of the Centre</IonLabel>
            <IonInput value={address} onIonInput={(e) => setAddress(e.detail.value!)} />
          </IonItem>
          <IonButton expand="block" onClick={handleSubmit}>Submit</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default assessorDetails;