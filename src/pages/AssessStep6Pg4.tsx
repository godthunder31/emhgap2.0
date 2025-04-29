import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AssessStep6Pg4.module.css';
import styles from './AssessStep6Pg4.module.css';

const AssessStep6Pg4 = () => {
  const [answers, setAnswers] = useState<string[]>(["", "", "", ""]);
  const navigate = useNavigate();
  const handleInputChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleProceed = () => {
    console.log("User Responses:", answers);
    navigate('/AssessStep7Pg1');
    alert("Proceeding with responses!");
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
        <h2>STEP-VI: Assess for HOME ENVIRONMENT:</h2>
      </header>
      <main className={styles['content']}>
        <p className={styles['question']}>Consider asking the following questions:</p>
        <ol className={styles['questions-list']}>
          <li>
            With whom does the child spend most of their time?  
            <input
              type="text"
              className={styles['input-line']}
              value={answers[0]}
              onChange={(e) => handleInputChange(0, e.target.value)}
            />
          </li>
          <li>
            How do you/they play with the child? How often?  
            <input
              type="text"
              className={styles['input-line']}
              value={answers[1]}
              onChange={(e) => handleInputChange(1, e.target.value)}
            />
          </li>
          <li>
            How do you/they communicate with the child?  
            <input
              type="text"
              className={styles['input-line']}
              value={answers[2]}
              onChange={(e) => handleInputChange(2, e.target.value)}
            />
          </li>
          <li>
            How often?  
            <input
              type="text"
              className={styles['input-line']}
              value={answers[3]}
              onChange={(e) => handleInputChange(3, e.target.value)}
            />
          </li>
        </ol>
        <div className={styles['buttons']}>
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

export default AssessStep6Pg4;

