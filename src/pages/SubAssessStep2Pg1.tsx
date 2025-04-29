import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SubAssessStep2Pg1.module.css';

const SubAssessStep2Pg1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    frequency: '',
    quantity: '',
    harmfulBehaviors: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'harmfulBehaviors') {
      setFormData((prevData) => ({
        ...prevData,
        harmfulBehaviors: prevData.harmfulBehaviors.includes(value)
          ? prevData.harmfulBehaviors.filter((item) => item !== value)
          : [...prevData.harmfulBehaviors, value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleProceed = () => {
    if (formData.harmfulBehaviors.length > 0) {
      navigate('/SubAssessStep2Pg2');
    } else {
      navigate('/SubAssessStep3Pg1');
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
          <label>
            1) Frequency of Substance Use
            <input
              type="text"
              name="frequency"
              value={formData.frequency}
              onChange={handleInputChange}
            />
          </label>

          <label>
            2) Quantity of Substance per Use
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
            />
          </label>

          <label>3) Presence of Harmful Behavior (Select all that apply)</label>
          <div className={styles['checkbox-group']}>
            {[
              'Injuries and accidents',
              'Relationship problems as a result of use',
              'Sexual activity while intoxicated that was risky or later regretted',
              'Legal or financial problems',
              'Inability to care for children responsibly',
              'Violence towards others',
              'Poor performance in education, employment roles',
              'Poor performance in expected social roles (e.g. parenting)',
            ].map((item) => (
              <div key={item} className={styles['option-item']}>
                <input
                  type="checkbox"
                  name="harmfulBehaviors"
                  value={item}
                  checked={formData.harmfulBehaviors.includes(item)}
                  onChange={handleInputChange}
                />
                <label>{item}</label>
              </div>
            ))}
            <div className={styles['option-item']}>
              <input
                type="checkbox"
                name="harmfulBehaviors"
                value="NONE OF THE ABOVE"
                checked={formData.harmfulBehaviors.includes('NONE OF THE ABOVE')}
                onChange={handleInputChange}
              />
              <label>NONE OF THE ABOVE</label>
            </div>
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

export default SubAssessStep2Pg1;
