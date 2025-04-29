import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SubAssessStep3Pg1.module.css";

interface SubAssessStep3Pg1Props {
  nextSubstance?: string;
}

const SubAssessStep3Pg1: React.FC<SubAssessStep3Pg1Props> = ({ nextSubstance }) => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const options = [
    "A strong desire or sense of compulsion to take the substance.",
    "Impaired capacity to control substance-taking behaviour in terms of onset, termination or level of use, as evidenced by: the substance being often taken in larger amounts or over a longer period than intended, or any unsuccessful effort or persistent desire to cut down or control substance use.",
    "A physiological withdrawal state when substance use is reduced or ceased, as evidenced by the characteristic withdrawal syndrome for the substance, or use of the same (or closely related) substance with the intention of relieving or avoiding withdrawal symptoms.",
    "Evidence of tolerance to the effects of the substance, such that there is a need for markedly increased amounts of the substance to achieve intoxication or desired effect, or that there is a markedly diminished effect with continued use of the same amount of the substance.",
    "Preoccupation with substance use, as manifested by: important alternative pleasures or interests being given up or reduced because of substance use; or a great deal of time being spent in activities necessary to obtain the substance, take the substance, or recover from its effects.",
    "Persisting with substance use despite clear evidence of harmful consequences, as evidenced by continued use when the person was actually aware of, or could be expected to have been aware of the nature and extent of harm.",
    "NONE OF THE ABOVE",
  ];

  const handleCheckboxChange = (value) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((option) => option !== value)
        : [...prevSelected, value]
    );
  };

  const handleProceed = () => {
    const selectedCount = selectedOptions.length;
    const noneOfTheAboveSelected = selectedOptions.includes("NONE OF THE ABOVE");

    if (selectedCount >= 3 && !noneOfTheAboveSelected) {
      navigate("/SubAssessStep3Pg1Yes");
    } else {
      navigate(`/SubAssessStep1Pg2?nextSubstance=${nextSubstance}`);
    }
  };

  return (
    <div className={styles["container"]}>
      <header className={styles['header']}>
        <div className={styles['top-bar']}>
          <h1 className={styles['title']}>mhGAP Intervention Guide</h1>
        </div>
        <div className={styles['sub-header']}>
          <span>SUBSTANCE USE</span>
          <span>|</span>
          <span>ASSESSMENT</span>
        </div>
        <h2 className={styles['title']}>STEP-3: Assess for Assess for DEPENDANCE </h2>
      </header>

      <main className={styles["content"]}>
        <p>
          Three or more of the following manifestations should have occurred
          together for at least one month or, if persisting for periods of less
          than one month, they have occurred together repeatedly within a
          12-month period. Select all that apply:
        </p>
        <div className={styles["checkbox-group"]}>
          {options.map((option) => (
            <div key={option} className={styles["option-item"]}>
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
      </main>

      <footer className={styles["sub-footer"]}>
        <button className={styles["proceed-button"]} onClick={handleProceed}>
          Proceed
        </button>
      </footer>
    </div>
  );
};

export default SubAssessStep3Pg1;
