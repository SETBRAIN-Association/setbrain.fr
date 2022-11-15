import React, { ReactNode, useEffect, useRef } from 'react';
import styles from './_project-card.module.scss';
import gsap from 'gsap';

export type ProjectCardProps = {
  backgroundColor: string;
  position: 'left' | 'right';
  children: ReactNode;
  color: string;
  disabled?: boolean;
};

export const ProjectCard = ({
  children,
  backgroundColor,
  position,
  color,
  disabled = false,
}: ProjectCardProps) => {
  const projectCardRef = useRef(null);

  useEffect(() => {
    gsap.from(projectCardRef.current, {
      marginTop: 30,
      duration: 0.5,
    });
  });

  return (
    <div
      className={styles['project-card'] + (disabled ? ' ' + styles['disabled'] : '')}
      style={{
        backgroundImage: backgroundColor,
        justifyContent: position,
        boxShadow: '0 0 124px rgba(' + color + ', 0.24)',
      }}
      ref={projectCardRef}
      data-scroll='true'
      data-scroll-speed='0.5'
    >
      <div className={styles['inner']}>{children}</div>
    </div>
  );
};
