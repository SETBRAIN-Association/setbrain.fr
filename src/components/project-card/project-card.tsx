import React, { ReactNode, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './_project-card.module.scss';
import gsap from 'gsap';

export type ProjectCardProps = {
  image: string;
  position: 'left' | 'right';
  children: ReactNode;
  color: string;
};

export const ProjectCard = ({ children, image, position, color }: ProjectCardProps) => {
  const projectCardRef = useRef(null);

  useEffect(() => {
    gsap.from(projectCardRef.current, {
      scrollTrigger: {
        trigger: projectCardRef.current,
        start: 'top 50%',
      },
      marginTop: 30,
      duration: 0.5,
    });
  });

  return (
    <div
      className={styles['project-card']}
      style={{ justifyContent: position, boxShadow: '0 0 124px rgba(' + color + ', 0.24)' }}
      ref={projectCardRef}
    >
      <Image className={styles['background']} src={image} layout='fill'></Image>
      <div className={styles['inner']}>{children}</div>
    </div>
  );
};
