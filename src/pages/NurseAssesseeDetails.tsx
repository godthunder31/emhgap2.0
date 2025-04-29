import { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonTextarea,
  IonAccordionGroup,
  IonAccordion,
  IonList,
  IonRadioGroup,
  IonRadio
} from '@ionic/react';
import { db } from '../firebaseConfig';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
const NurseAssesseeDetails: React.FC = () => {
  const [nuid, setNuid] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [qualification, setQualification] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [parentname, setParentname] = useState<string>("");
  const [parentno, setParentno] = useState<string>("");
  const [monthlysavings, setMontlysavings]= useState<string>("");
  const [area, setArea] = useState<string>("")
  const [namearea, setNamearea] = useState<string>("")
  const [housing, setHousing] = useState<string>("")
  const [otherillness, setOtherillness] = useState<string>("")
  const [disease, setDisease] = useState<string>("")
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

  const handleSubmit = async () => {
    console.log("Submitting data:", { nuid, name, age, gender, qualification,job, phone, parentname, parentno, monthlysavings, area, namearea, housing, otherillness, disease});
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
        parentname,
        parentno,
        monthlysavings,
        area,
        namearea,
        housing,
        otherillness,
        disease
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
      setParentname("");
      setParentno("");
      setMontlysavings("");
      setArea("");
      setNamearea("");
      setHousing("");
      setOtherillness("");
      setDisease("");
      navigate('/VersionPrompt');

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
          <IonItem className="ion-select-custom">
            <IonLabel position = "stacked"className="ion-select-label">Qualification</IonLabel>
            <IonSelect
              className="ion-select-arrow"
              value={qualification}
              onIonChange={(e) => setQualification(e.detail.value!)}>
              <IonSelectOption value="No Prominent Education">No Education</IonSelectOption>
              <IonSelectOption value="Primary Education">Primary Education</IonSelectOption>
              <IonSelectOption value="Secondary Education">Secondary Education</IonSelectOption>
              <IonSelectOption value="Higher Education">Higher Education</IonSelectOption>
              <IonSelectOption value="Degree">Degree and Higher</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Job</IonLabel>
            <IonInput value={job} onIonInput={(e) => setJob(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Phone Number</IonLabel>
            <IonInput value={phone} onIonInput={(e) => setPhone(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Parent/Guardian Name</IonLabel>
            <IonInput value={parentname} onIonInput={(e) => setParentname(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Parent/Guardian Phone Number</IonLabel>
            <IonInput value={parentno} onIonInput={(e) => setParentno(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Monthly Savings</IonLabel>
            <IonInput value={monthlysavings} onIonInput={(e) => setMontlysavings(e.detail.value!)} />
          </IonItem>
          <IonItem className="ion-select-custom">
            <IonLabel position = "stacked"className="ion-select-label">Area</IonLabel>
            <IonSelect
              className="ion-select-arrow"
              value={area}
              onIonChange={(e) => setArea(e.detail.value!)}>
              <IonSelectOption value="urban">Urban</IonSelectOption>
              <IonSelectOption value="rural">Rural</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Name of the Area</IonLabel>
            <IonInput value={namearea} onIonInput={(e) => setNamearea(e.detail.value!)} />
          </IonItem>
          <IonItem className="ion-select-custom">
            <IonLabel position = "stacked"className="ion-select-label">Housing</IonLabel>
            <IonSelect
              className="ion-select-arrow"
              value={housing}
              onIonChange={(e) => setHousing(e.detail.value!)}>
              <IonSelectOption value="own">Own House</IonSelectOption>
              <IonSelectOption value="rented">Rented House</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Other Illness</IonLabel>
            <IonInput value={otherillness} onIonInput={(e) => setOtherillness(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Time Period</IonLabel>
            <IonInput value={disease} onIonInput={(e) => setDisease(e.detail.value!)} />
          </IonItem>
          <IonButton expand="block" onClick={handleSubmit}>Submit</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NurseAssesseeDetails;