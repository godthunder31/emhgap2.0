import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AssessStep5Pg1.module.css';
import styles from './AssessStep5Pg1.module.css'; 

const AssessStep5Pg1 = () => {
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const handleCheckboxChange = (symptom: string) => {
    setSelectedSymptoms((prevSymptoms) => {
      if (prevSymptoms.includes(symptom)) {
        return prevSymptoms.filter((s) => s !== symptom);
      } else {
        return [...prevSymptoms, symptom];
      }
    });
  };

  const handleProceed = () => {
    // Define symptoms for each condition
    const depressionSymptoms = ['persistentPhysicalSymptoms', 'lowEnergy', 'sadMood', 'lossOfInterest'];
    const psychosesSymptoms = ['markedBehavioralChanges', 'aggressiveBehavior', 'falseBeliefs', 'hearingVoices'];
    const epilepsySymptoms = ['convulsions', 'lossOfConsciousness', 'muscleAches', 'confusionAfterSeizures'];
    const dementiaSymptoms = ['memoryDecline', 'moodProblems', 'lossOfControl', 'difficultyInActivities'];
    const substanceUseSymptoms = ['affectedBySubstance', 'withdrawalSymptoms', 'socialDeterioration', 'chronicLiverDisease'];
    const selfHarmSymptoms = ['hopelessness', 'thoughtsOfSelfHarm', 'historyOfSelfHarm'];

    // Check if all options except 'none' are selected for any condition
    const isDepressionYes = depressionSymptoms.every(symptom => selectedSymptoms.includes(symptom));
    const isPsychosesYes = psychosesSymptoms.every(symptom => selectedSymptoms.includes(symptom));
    const isEpilepsyYes = epilepsySymptoms.every(symptom => selectedSymptoms.includes(symptom));
    const isDementiaYes = dementiaSymptoms.every(symptom => selectedSymptoms.includes(symptom));
    const isSubstanceUseYes = substanceUseSymptoms.every(symptom => selectedSymptoms.includes(symptom));
    const isSelfHarmYes = selfHarmSymptoms.every(symptom => selectedSymptoms.includes(symptom));

    // Check if at least one condition has all symptoms selected (excluding 'none')
    const meetsCriteria = 
      isDepressionYes || isPsychosesYes || isEpilepsyYes || isDementiaYes || isSubstanceUseYes || isSelfHarmYes;

    if (meetsCriteria) {
      console.log('Criteria met. Redirecting to AssessStep5Pg1Yes');
      navigate('/AssessStep5Pg1Yes', { state: { selectedSymptoms } });
    } else {
      console.log('Criteria not met. Redirecting to AssessStep6Pg1');
      navigate('/AssessStep6Pg1', { state: { selectedSymptoms } });
    }
  };

  return (
    <div className="assess-container">
      <header className={styles['header']}>
        <div className={styles['top-bar']}>
          <h1>mhGAP Intervention Guide</h1>
        </div>
        <div className={styles['breadcrumb']}>
          <span>OTHER PRIORITY MNS CONDITIONS</span>
        </div>
        <h2>STEP 5: Assess for OTHER PRIORITY MNS CONDITIONS</h2>
      </header>

      <div className={styles['scrollable-content']}>
        <main className={styles['content']}>
          {/* Overview Section */}
          <section className={styles['overview']}>
            <h3>Overview of Priority MNS Conditions</h3>
            <p>1. These common presentations indicate the need for assessment.</p>
            <p>2. If people present with features of more than one condition, then all relevant conditions need to be assessed.</p>
            <p>3. All conditions apply to all ages, unless otherwise specified.</p>
          </section>

          {/* Condition Sections */}
          <div className={styles['condition']} style={{ backgroundColor: 'purple', color: 'white' }}>
            <h3>DEPRESSION (DEP)</h3>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('persistentPhysicalSymptoms')}
              />
              Multiple persistent physical symptoms with no clear cause
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('lowEnergy')}
              />
              Low energy, fatigue, sleep problems
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('sadMood')}
              />
              Persistent sadness or depressed mood, anxiety
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('lossOfInterest')}
              />
              Loss of interest or pleasure in activities that are normally pleasurable
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('noneOfTheAboveDepression')}
              />
              NONE OF THE ABOVE
            </label>
          </div>

          <div className={styles['condition']} style={{ backgroundColor: 'darkblue', color: 'white' }}>
            <h3>PSYCHOSES (PSY)</h3>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('markedBehavioralChanges')}
              />
              Marked behavioral changes; neglecting usual responsibilities related to work, school, domestic or social activities
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('aggressiveBehavior')}
              />
              Agitated, aggressive behavior, decreased or increased activity
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('falseBeliefs')}
              />
              Fixed false beliefs not shared by others in the person’s culture
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('hearingVoices')}
              />
              Hearing voices or seeing things that are not there
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('lackOfRealization')}
              />
              Lack of realization that one is having mental health problems
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('noneOfTheAbovePsychoses')}
              />
              NONE OF THE ABOVE
            </label>
          </div>

          <div className={styles['condition']} style={{ backgroundColor: 'skyblue', color: 'black' }}>
            <h3>EPILEPSY (EPI)</h3>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('convulsions')}
              />
              Convulsive movement or fits/seizures
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('lossOfConsciousness')}
              />
              Loss of consciousness or impaired consciousness
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('muscleAches')}
              />
              Muscle aches or weakness on one side of the body
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('confusionAfterSeizures')}
              />
              After the convulsion: fatigue, confusion, headache
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('noneOfTheAboveEpilepsy')}
              />
              NONE OF THE ABOVE
            </label>
          </div>

          <div className={styles['condition']} style={{ backgroundColor: 'lightgreen', color: 'black' }}>
            <h3>DEMENTIA (DEM)</h3>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('memoryDecline')}
              />
              Decline or problems with memory (severe forgetfulness) and orientation (awareness of time, place and person)
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('moodProblems')}
              />
              Mood or behavioral problems such as apathy (appearing uninterested) or irritability
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('lossOfControl')}
              />
              Loss of emotional control (easily upset, irritable or tearful)
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('difficultyInActivities')}
              />
              Difficulties in carrying out usual work, domestic or social activities
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('noneOfTheAboveDementia')}
              />
              NONE OF THE ABOVE
            </label>
          </div>

          <div className={styles['condition']} style={{ backgroundColor: 'orange', color: 'black' }}>
            <h3>DISORDERS DUE TO SUBSTANCE USE (SUB)</h3>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('affectedBySubstance')}
              />
              Appearing affected by alcohol or other substances (e.g., smell of alcohol, slurred speech, erratic behavior)
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('withdrawalSymptoms')}
              />
              Signs and symptoms of acute behavioral effects, withdrawal features or effects of prolonged use
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('socialDeterioration')}
              />
              Deterioration of social functioning (difficulties at work or home)
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('chronicLiverDisease')}
              />
              Signs of chronic liver disease (jaundiced skin, abnormal liver enzymes)
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('noneOfTheAboveSubstanceUse')}
              />
              NONE OF THE ABOVE
            </label>
          </div>

          <div className={styles['condition']} style={{ backgroundColor: 'red', color: 'white' }}>
            <h3>SELF-HARM/SUICIDE (SUI)</h3>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('hopelessness')}
              />
              Extreme hopelessness and despair
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('thoughtsOfSelfHarm')}
              />
              Current thoughts, plan or act of self-harm/suicide
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('historyOfSelfHarm')}
              />
              Any of the other priority conditions, chronic pain, or extreme emotional distress
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('noneOfTheAboveSelfHarm')}
              />
              NONE OF THE ABOVE
            </label>
          </div>
        </main>
      </div>

      <div className={styles['page-container']}>
        <footer className={styles['footer']}>
          <button onClick={handleProceed}>Proceed</button>
        </footer>
      </div>
    </div>
  );
};

export default AssessStep5Pg1;





