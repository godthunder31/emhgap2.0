import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AssessStep6Pg1.module.css'; 

const AssessStep6Pg1 = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((o) => o !== option);
      } else {
        return [...prevOptions, option];
      }
    });
  };

  const handleProceed = () => {
    if (selectedOptions.length > 4) {
      console.log('More than 4 options selected. Redirecting to AssessStep6Pg1Yes');
      navigate('/AssessStep6Pg1Yes', { state: { selectedOptions } });
    } else {
      console.log('Redirecting to AssessStep6Pg2');
      navigate('/AssessStep6Pg2', { state: { selectedOptions } });
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
        <h2>STEP VI: Assess for HOME ENVIRONMENT</h2>
      </header>
      <main className={styles['content']}>
        <p className={styles['question']}>
          Are the emotional, behavioral or developmental problems a reaction to or aggravated by a distressing or frightening situation? Assess for clinical features of maltreatment like:
        </p>
        <div className={styles['options']}>
          <h3>Physical Abuse:</h3>
          <label>
            <input
              type="checkbox"
              name="physicalAbuse"
              value="injuriesWithBelt"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Injuries with belt/burns/another object.
          </label>
          <label>
            <input
              type="checkbox"
              name="physicalAbuse"
              value="seriousInjury"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Any serious injury without unsuitable explanation.
          </label>
          <h3>Sexual Abuse:</h3>
          <label>
            <input
              type="checkbox"
              name="sexualAbuse"
              value="genitalAnalInjuries"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Genital or anal injuries.
          </label>
          <label>
            <input
              type="checkbox"
              name="sexualAbuse"
              value="STIOrPregnancy"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            STI or pregnancy.
          </label>
          <label>
            <input
              type="checkbox"
              name="sexualAbuse"
              value="sexualizedBehaviour"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Sexualized behaviour.
          </label>
          <h3>Neglect:</h3>
          <label>
            <input
              type="checkbox"
              name="neglect"
              value="dirtyUnsuitableClothing"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Being excessively dirty, unsuitable clothing.
          </label>
          <label>
            <input
              type="checkbox"
              name="neglect"
              value="signsOfMalnutrition"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Signs of malnutrition, very poor dental health.
          </label>
          <h3>Emotional Abuse and Other Forms of Maltreatment:</h3>
          <label>
            <input
              type="checkbox"
              name="emotionalAbuse"
              value="unusualFearfulness"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Unusual fearfulness or severe distress.
          </label>
          <label>
            <input
              type="checkbox"
              name="emotionalAbuse"
              value="selfHarmOrWithdrawal"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Self-harm or social withdrawal.
          </label>
          <label>
            <input
              type="checkbox"
              name="emotionalAbuse"
              value="aggressionRunningAway"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Aggression or running away from home.
          </label>
          <label>
            <input
              type="checkbox"
              name="emotionalAbuse"
              value="indiscriminateAffection"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Indiscriminate affection seeking from adults.
          </label>
          <label>
            <input
              type="checkbox"
              name="emotionalAbuse"
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

export default AssessStep6Pg1;

