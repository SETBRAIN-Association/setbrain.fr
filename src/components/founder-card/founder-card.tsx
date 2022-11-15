import React, { ReactNode } from 'react';
import styles from './_founder-card.module.scss';

export type FounderCardProps = {
  image: string;
  founderName: string;
  children: ReactNode;
};

export const FounderCard = ({ image, founderName, children }: FounderCardProps) => {
  return (
    <div className={styles['FounderCard']}>
      <div className={styles['image']} style={{ backgroundImage: 'url(' + image + ')' }}></div>
      <div className={styles['text']} data-scroll='true' data-scroll-speed='1.5'>
        <h1 className={styles['founder-name']}>{founderName}</h1>
        <h2 className={styles['founder-role']}>Co-Président</h2>
        <p className={styles['founder-description']}>{children}</p>
      </div>
    </div>
  );
};
