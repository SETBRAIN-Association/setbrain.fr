import React, {ReactNode} from 'react';
import './_history-step.scss';

export type HistoryStepProps = {
  stepTitle: string;
  stepDate: string;
  children: ReactNode;
};

export const HistoryStep = ({stepTitle, stepDate, children}: HistoryStepProps) => {
  return (
      <div className="HistoryStep">
        <div className="left">
          <div className="step-date">{stepDate}</div>
          <span className="point"></span>
        </div>
        <div className="right">
          <div className="step-title"><span><h1>{stepTitle}</h1></span></div>
          <p className="step-description">{children}</p>
        </div>
      </div>
  );
};