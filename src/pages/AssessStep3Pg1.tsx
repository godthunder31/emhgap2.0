import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AssessStep3Pg1.module.css'; 
import styles from './AssessStep3Pg1.module.css'; 

const AssessStep3Pg1 = () => {
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
    const symptoms1To8 = [
      'frequentTantrums', 'arguesWithAdults', 'defiesAdults', 'annoysOthers', 
      'blamesOthers', 'touchyAnnoyed', 'angryResentful', 'spitefulVindictive'
    ];
    const symptoms9To24 = [
      'frequentLying', 'fighting', 'usesWeapon', 'staysOutAfterDark', 'cruelToPeople', 
      'cruelToAnimals', 'destroyProperty', 'fireSetting', 'stealingObjects', 
      'stealingWithoutConfrontation', 'truancy', 'runningAway', 'confrontationCrime', 
      'sexualActivityAgainstWill', 'bullying', 'breaksIn', 'none'
    ];

    const selectedSymptoms1To8 = selectedSymptoms.filter(symptom => symptoms1To8.includes(symptom));
    const selectedSymptoms9To24 = selectedSymptoms.filter(symptom => symptoms9To24.includes(symptom));

    // Check if 3 or more symptoms from both ranges are selected
    const meetsCriteria = 
      selectedSymptoms1To8.length >= 3 && selectedSymptoms9To24.length >= 3 && !selectedSymptoms.includes('none');

    if (meetsCriteria) {
      console.log('Criteria met. Redirecting to AssessStep3Pg1Yes');
      navigate('/AssessStep3Pg2', { state: { selectedSymptoms } });
    } else {
      console.log('Criteria not met. Redirecting to AssessStep3Pg1No');
      navigate('/AssessStep3Pg1No', { state: { selectedSymptoms } });
    }
  };

  return (
    <div className="assess-container">
      <header className={styles['header']}>
        <div className={styles['top-bar']}>
          <h1>mhGAP Intervention Guide</h1>
        </div>
        <div className={styles['breadcrumb']}>
          <span>CHILD/ADOLESCENTS</span>
          <span>|</span>
          <span>ASSESSMENT</span>
        </div>
        <h2>STEP 3: Assess for Conduct Disorder</h2>
      </header>
      <main className={styles['content']}>
        <p className={styles['question']}>
          Does the child/adolescent show repeated aggressive, disobedient, or defiant behaviour, for example:
        </p>
        <div className={`${styles['options']} ${styles['scrollable-options']}`}>
          {/* Symptoms 1-8 */}
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="frequentTantrums"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (1) Unusually frequent or severe temper tantrums for the child's developmental level.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="arguesWithAdults"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (2) Often argues with adults.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="defiesAdults"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (3) Often actively defies or refuses adults' requests or rules.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="annoysOthers"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (4) Often, apparently deliberately, does things that annoy other people.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="blamesOthers"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (5) Often blames others for one's own mistakes or misbehavior.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="touchyAnnoyed"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (6) Often touchy or easily annoyed by others.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="angryResentful"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (7) Often angry or resentful.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="spitefulVindictive"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (8) Often spiteful or vindictive.
          </label>

          {/* Symptoms 9-24 */}
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="frequentLying"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (9) Frequent and marked lying (except to avoid abusive treatment).
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="fighting"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (10) Excessive fighting with other children, with frequent initiation of fights.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="usesWeapon"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (11) Uses a weapon that can cause serious physical harm to others (e.g. a bat, brick, broken bottle, knife, gun).
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="staysOutAfterDark"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (12) Often stays out after dark without permission (beginning before 13 years of age).
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="cruelToPeople"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (13) Physical cruelty to other people.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="cruelToAnimals"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (14) Physical cruelty to animals.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="destroyProperty"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (15) Deliberate destruction of others' property.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="fireSetting"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (16) Deliberate fire-setting with a risk or intention of causing serious damage.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="stealingObjects"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (17) At least two episodes of stealing of objects of value.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="stealingWithoutConfrontation"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (18) At least two episodes of stealing outside the home.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="truancy"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (19) Frequent truancy from school beginning before 13 years of age.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="runningAway"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (20) Running away from home.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="confrontationCrime"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (21) Any episode of crime involving confrontation with a victim.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="sexualActivityAgainstWill"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (22) Forcing another person into sexual activity against their wishes.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="bullying"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (23) Frequent bullying of others.
          </label>
          <label>
            <input
              type="checkbox"
              name="symptom"
              value="breaksIn"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            (24) Breaks into someone else's house, building, or car.
          </label>

          <label>
            <input
              type="checkbox"
              name="symptom"
              value="none"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            NONE OF THE ABOVE
          </label>
        </div>
        <div className="buttons">
          <button
            className={`${styles['btn']} ${styles['proceed-btn']}`}
            onClick={handleProceed}
          >
            Proceed
          </button>
        </div>
      </main>
    </div>
  );
};

export default AssessStep3Pg1;
