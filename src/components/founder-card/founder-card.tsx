import React, {ReactNode} from 'react';
import './_founder-card.scss';

export type FounderCardProps = {
  image: string;
  founderName: string;
  children: ReactNode
};

export const FounderCard = ({image, founderName, children}: FounderCardProps) => {
  return (
      <div className="FounderCard">
        <div className="image" style={{backgroundImage: 'url(' + image + ')'}}></div>
        <div className="text">
          <h1 className='founder-name'>{ founderName }</h1>
          <h2 className='founder-role'>Co-Président</h2>
          <p className='founder-description'>{ children }</p>
        </div>
      </div>
  );
};