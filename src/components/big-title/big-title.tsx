import React from 'react';
import styles from './_big-title.module.scss';

export type BigTitleProps = {
  children: React.ReactNode;
  position: 'left' | 'center';
  margin?: string;
};

export default function BigTitle({ children, position = 'center', margin = '0' }: BigTitleProps) {
  return (
    <div className={styles['big-title']} style={{ alignItems: position, marginTop: margin }}>
      {children}
    </div>
  );
}
