import React, {ReactNode, useEffect, useRef} from 'react';
import './_founder-card.scss';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export type FounderCardProps = {
  image: string;
  founderName: string;
  children: ReactNode;
};

export const FounderCard = ({image, founderName, children}: FounderCardProps) => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current,{ scrollTrigger: {
        trigger: '.text',
        start: 'bottom bottom'
      }, opacity: 0, marginTop: 0, duration: 0.5 });
  });

  return (
      <div className="FounderCard">
        <div className="image" style={{backgroundImage: 'url(' + image + ')'}}></div>
        <div className="text" ref={textRef}>
          <h1 className='founder-name'>{ founderName }</h1>
          <h2 className='founder-role'>Co-Président</h2>
          <p className='founder-description'>{ children }</p>
        </div>
      </div>
  );
};