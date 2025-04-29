import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SubAssessStep2Pg2.module.css';

const SubAssessStep2Pg2 = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    "Clear evidence that the substance use was responsible for (or substantially contributed to) physical or psychological harm, including impaired judgement or dysfunctional behaviour.",
    "The nature of the harm should be clearly identifiable (and specified).",
    "The pattern of use has persisted for at least one month or has occurred repeatedly within a twelve-month period.",
    "The disorder does not meet the criteria for any other mental or behavioral disorder related to the same drug in the same time period",
    "none of the above",
  ];

  const handleCheckboxChange = (value) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((option) => option !== value)
        : [...prevSelected, value]
    );
  };

  const handleProceed = () => {
    const noneOfTheAboveSelected = selectedOptions.includes("none of the above");
    const allOtherOptionsSelected =
      options.slice(0, -1).every((option) => selectedOptions.includes(option));

    if (allOtherOptionsSelected && !noneOfTheAboveSelected) {
      navigate('/SubAssessStep2Pg2Yes');
    } else {
      navigate('/SubAssessStep2Pg2NO');
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
        <h2 className={styles['title']}>STEP-2: Assess for SUBSTANCE USE HARMFUL </h2>
      </header>

      <main className={styles['content']}>
        <section>
          <p>Select all that apply for the symptoms observed from the individual:</p>
          <div className={styles['checkbox-group']}>
            {options.map((option) => (
              <div key={option} className={styles['option-item']}>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles['sub-footer']}>
        <button className={styles['proceed-button']} onClick={handleProceed}>
          Proceed
        </button>
      </footer>
    </div>
  );
};

export default SubAssessStep2Pg2;
