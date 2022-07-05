import React from 'react';
import './_big-title.scss';

export type BigTitleProps = {
  children: React.ReactNode;
  position: 'left' | 'center';
};

export default function BigTitle({ children, position = 'center' }: BigTitleProps) {
  return (
    <div className='big-title' style={{ alignItems: position }}>
      {children}
    </div>
  );
}
