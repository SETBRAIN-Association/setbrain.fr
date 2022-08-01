import React, { ReactNode, useEffect, useRef } from 'react';
import styles from './_history-step.module.scss';
import gsap from 'gsap';

export type HistoryStepProps = {
  stepTitle: string;
  stepDate: string;
  children: ReactNode;
};

export const HistoryStep = ({ stepTitle, stepDate, children }: HistoryStepProps) => {
  const stepRef = useRef(null);

  useEffect(() => {
    gsap.from(stepRef.current, {
      scrollTrigger: {
        trigger: stepRef.current,
        start: 'bottom bottom',
      },
      opacity: 0,
      marginTop: 10,
      duration: 0.5,
    });
  });

  return (
    <div className={styles['HistoryStep']}>
      <div className={styles['left']}>
        <div className={styles['step-date']}>{stepDate}</div>
        <span className={styles['point']}></span>
      </div>
      <div className={styles['right']} ref={stepRef}>
        <div className={styles['step-title']}>
          <span>
            <h1>{stepTitle}</h1>
          </span>
        </div>
        <p className={styles['step-description']}>{children}</p>
      </div>
    </div>
  );
};
