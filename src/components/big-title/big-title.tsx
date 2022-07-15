import React from 'react';
import styles from './_big-title.module.scss';

export type BigTitleProps = {
  children: React.ReactNode;
  position: 'left' | 'center';
};

export default function BigTitle({ children, position = 'center' }: BigTitleProps) {
  return (
    <div className={styles['big-title']} style={{ alignItems: position }}>
      {children}
    </div>
  );
}
