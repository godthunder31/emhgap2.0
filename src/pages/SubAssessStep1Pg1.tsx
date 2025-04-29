import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SubAssessStep1Pg1.module.css';

const SubAssessStep1Pg1 = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleProceed = () => {
    if (selectedOptions.includes('NONE OF THE ABOVE')) {
      navigate('/DisordersDueToSubstanceUse');
    } else if (selectedOptions.length > 0) {
      navigate('/SubAssessStep1Pg2', { state: { selectedOptions } });
    }
  };

  return (
    <div className={styles['container']}>
      <header className={styles['header']}>
        <div className={styles['top-bar']}>
          <h1 className={styles['title']}>mhGAP Intervention Guide</h1>
        </div>
        <div className={styles['sub-header']}>
          <span>SUBSTANCE USE</span>
          <span>|</span>
          <span>ASSESSMENT</span>
        </div>
        <h2 className={styles['title']}>STEP-1: Assess for Use of Substances</h2>
      </header>

      <main className={styles['content']}>
        <p className={styles['description']}>
          Ask about use of tobacco, alcohol, and psychoactive prescription medicines.
          Depending on the setting and presentation, consider asking about cannabis and other substances.
        </p>
        <p className={styles['select-instruction']}>(Select all that apply)</p>

        <ul className={styles['options-list']}>
          {[
            'Alcohol',
            'Tobacco',
            'Opioids',
            'Cannabis',
            'Khat',
            'Cocaine, methamphetamine',
            'Benzodiazepines',
            'Hallucinogens',
            'NONE OF THE ABOVE',
          ].map((option) => (
            <li key={option} className={styles['option-item']}>
              <label>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles['sub-assess-footer']}>
        <button className={styles['proceed-button']} onClick={handleProceed}>
          Proceed
        </button>
      </footer>
    </div>
  );
};

export default SubAssessStep1Pg1;
