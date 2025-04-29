import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import styles from './SubAssessment.module.css';

const SubAssessment = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Navigation handlers
  const handleNavigation = (path: string) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className={styles['container']}>
      {/* Header */}
      <header className={styles['header']}>
        <div className={styles['top-bar']}>
          <button className={styles['menu-icon']} aria-label="Menu"></button>
          <h1 className={styles['title']}>mhGAP Intervention Guide</h1>
          <div className={styles['icons']}>
            <button
              className={styles['home-icon']}
              aria-label="Home"
              onClick={() => handleNavigation('/home')}
            ></button>
            <button
              className={styles['info-icon']}
              aria-label="Quick Overview"
              onClick={() => handleNavigation('/quick-overview')}
            ></button>
          </div>
        </div>
      </header>

      {/* Sub-header */}
      <div className={styles['sub-header']}>
        <span>SUBSTANCE USE</span>
        <span>|</span>
        <span>QUICK OVERVIEW</span>
      </div>

      {/* Main Content */}
      <main className={styles['content']}>
        <section className={styles['section']}>
          <h2 className={styles['question']}>
            EMERGENCY ASSESSMENT: Is intoxication or withdrawal suspected?
          </h2>
          <p className={styles['description']}>
            Does the person appear sedated; overstimulated, anxious, or agitated; confused?
          </p>
        </section>

        <section className={styles['navigation']}>
          {/* Navigation buttons */}
          <div className={styles['nav-item']}>
            <span>Common Presentations of Disorders due to substance use</span>
            <button
              className={styles['arrow']}
              onClick={() => handleNavigation('/common-presentations')}
            >
              &#9654;
            </button>
          </div>
          <div className={styles['nav-item']}>
            <span>BOX 1: Psychoactive substances</span>
            <button
              className={styles['arrow']}
              onClick={() => handleNavigation('/box1-psychoactive-substances')}
            >
              &#9654;
            </button>
          </div>
          <div className={styles['nav-item']}>
            <span>STEP 1: Assess for the use of substances</span>
            <button
              className={styles['arrow']}
              onClick={() => handleNavigation('/SubAssessStep1Pg1')}
            >
              &#9654;
            </button>
          </div>
          <div className={styles['nav-item']}>
            <span>STEP 2: Assess for harmful substance use</span>
            <button
              className={styles['arrow']}
              onClick={() => handleNavigation('/step2-assess-harmful')}
            >
              &#9654;
            </button>
          </div>
          <div className={styles['nav-item']}>
            <span>STEP 3: Assess for dependence</span>
            <button
              className={styles['arrow']}
              onClick={() => handleNavigation('/step2-assess-harmful')}
            >
              &#9654;
            </button>
          </div>
          <div className={styles['nav-item']}>
            <span>Assess for concurrent MNS conditions</span>
            <button
              className={styles['arrow']}
              onClick={() => handleNavigation('/step2-assess-harmful')}
            >
              &#9654;
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SubAssessment;


