import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AssessStep7Pg2.module.css';
import styles from './AssessStep7Pg2.module.css';

const AssessStep7Pg2 = () => {
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
    const hasSelectedOtherThanNone = selectedOptions.some((option) => option !== 'none');

    if (hasSelectedOtherThanNone) {
      console.log('Selected Options: ', selectedOptions);
      navigate('/AssessStep7Pg2Yes', { state: { selectedOptions } }); // Redirect to Yes page
    } else {
      console.log('Selected Options: ', selectedOptions);
      navigate('/ManagementC', { state: { selectedOptions } }); // Redirect to No page
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
        <h2>STEP 7: Assess for School-Related Problems</h2>
      </header>
      <main className={styles['content']}>
        <p className={styles['question']}>
          Is the child/adolescent:
        </p>
        <div className={styles['options']}>
          <label>
            <input
              type="checkbox"
              name="option"
              value="beingBullied"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Being bullied or made fun of
          </label>
          <label>
            <input
              type="checkbox"
              name="option"
              value="notAbleToLearn"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Not able to participate & learn
          </label>
          <label>
            <input
              type="checkbox"
              name="option"
              value="notAttendingSchool"
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            Not walking/refusing to attend school
          </label>
          <label>
            <input
              type="checkbox"
              name="option"
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

export default AssessStep7Pg2;
