import React, {ReactNode, useEffect, useRef} from 'react';
import './_history-step.scss';
import gsap from "gsap";

export type HistoryStepProps = {
  stepTitle: string;
  stepDate: string;
  children: ReactNode;
};

export const HistoryStep = ({stepTitle, stepDate, children}: HistoryStepProps) => {

  const stepRef = useRef(null);

  useEffect(() => {
    gsap.from(stepRef.current,{ scrollTrigger: {
        trigger: stepRef.current,
        start: 'bottom bottom',
      }, opacity: 0, marginTop: 10, duration: 0.5 });
  });

  return (
      <div className="HistoryStep">
        <div className="left">
          <div className="step-date">{stepDate}</div>
          <span className="point"></span>
        </div>
        <div className="right" ref={stepRef}>
          <div className="step-title"><span><h1>{stepTitle}</h1></span></div>
          <p className="step-description">{children}</p>
        </div>
      </div>
  );
};