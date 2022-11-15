import React from 'react';
import styles from './_big-title.module.scss';

export type BigTitleProps = {
  children: React.ReactNode;
  position: 'left' | 'center';
  isMobile?: boolean;
  margin?: string;
};

export default function BigTitle({ children, position = 'center', margin = '0', isMobile = false }: BigTitleProps) {
  return (
    <div className={styles['big-title']} style={{ alignItems: position, marginTop: margin, width: isMobile ? 'min-content' : '100%' }}>
      {children}
    </div>
  );
}
