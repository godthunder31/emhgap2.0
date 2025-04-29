import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SubAssessStep1Pg2.module.css';

const SubAssessStep1Pg2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    howStarted: '',
    whenStarted: '',
    lifeEvents: '',
    familyUse: '',
    triedToReduce: '',
    whyReduce: '',
    whatHappened: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.howStarted.trim()) newErrors.howStarted = 'This field is required.';
    if (!formData.whenStarted.trim()) newErrors.whenStarted = 'This field is required.';
    if (!formData.lifeEvents.trim()) newErrors.lifeEvents = 'This field is required.';
    if (!formData.familyUse) newErrors.familyUse = 'This field is required.';
    if (!formData.triedToReduce) newErrors.triedToReduce = 'This field is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceed = () => {
    if (validateForm()) {
      navigate('/SubAssessStep2Pg1');
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
        <section className={styles['form-section']}>
          <label>
            1) How the person started using substances? *
            <textarea
              name="howStarted"
              value={formData.howStarted}
              onChange={handleChange}
              className={errors.howStarted ? styles['error-field'] : ''}
            />
          </label>
          {errors.howStarted && <p className={styles['error-message']}>{errors.howStarted}</p>}

          <label>
            2) When they started using them? *
            <textarea
              name="whenStarted"
              value={formData.whenStarted}
              onChange={handleChange}
              className={errors.whenStarted ? styles['error-field'] : ''}
            />
          </label>
          {errors.whenStarted && <p className={styles['error-message']}>{errors.whenStarted}</p>}

          <label>
            3) What was happening in their life at that time? *
            <textarea
              name="lifeEvents"
              value={formData.lifeEvents}
              onChange={handleChange}
              className={errors.lifeEvents ? styles['error-field'] : ''}
            />
          </label>
          {errors.lifeEvents && <p className={styles['error-message']}>{errors.lifeEvents}</p>}

          <label>
            4) If anyone in their family or social circle use substances? *
            <div>
              <label>
                <input
                  type="radio"
                  name="familyUse"
                  value="Yes"
                  checked={formData.familyUse === 'Yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="familyUse"
                  value="No"
                  checked={formData.familyUse === 'No'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </label>
          {errors.familyUse && <p className={styles['error-message']}>{errors.familyUse}</p>}

          <label>
            5) If they have tried to reduce their use? *
            <div>
              <label>
                <input
                  type="radio"
                  name="triedToReduce"
                  value="Yes"
                  checked={formData.triedToReduce === 'Yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="triedToReduce"
                  value="No"
                  checked={formData.triedToReduce === 'No'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </label>
          {errors.triedToReduce && <p className={styles['error-message']}>{errors.triedToReduce}</p>}

          <label>
            6) Why?
            <textarea
              name="whyReduce"
              value={formData.whyReduce}
              onChange={handleChange}
            />
          </label>

          <label>
            7) What happened?
            <textarea
              name="whatHappened"
              value={formData.whatHappened}
              onChange={handleChange}
            />
          </label>
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

export default SubAssessStep1Pg2;