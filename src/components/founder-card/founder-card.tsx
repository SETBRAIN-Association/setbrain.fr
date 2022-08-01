import React, { ReactNode, useEffect, useRef } from 'react';
import styles from './_founder-card.module.scss';
import gsap from 'gsap';

export type FounderCardProps = {
  image: string;
  founderName: string;
  children: ReactNode;
};

export const FounderCard = ({ image, founderName, children }: FounderCardProps) => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, { opacity: 0, marginTop: 0, duration: 0.5 });
  });

  return (
    <div className={styles['FounderCard']}>
      <div className={styles['image']} style={{ backgroundImage: 'url(' + image + ')' }}></div>
      <div className={styles['text']} ref={textRef}>
        <h1 className={styles['founder-name']}>{founderName}</h1>
        <h2 className={styles['founder-role']}>Co-Président</h2>
        <p className={styles['founder-description']}>{children}</p>
      </div>
    </div>
  );
};
