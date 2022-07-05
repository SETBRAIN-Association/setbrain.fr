import React, { ReactNode } from 'react';
import './_project-card.scss';

export type ProjectCardProps = {
  image: string;
  position: 'left' | 'right';
  children: ReactNode;
  color: string;
};

export const ProjectCard = ({ children, image, position, color }: ProjectCardProps) => {
  return (
    <div
      className='project-card'
      style={{ justifyContent: position, boxShadow: '0 0 124px rgba(' + color + ', 0.24)' }}
    >
      <img className='background' src={image}></img>
      <div className='inner'>{children}</div>
    </div>
  );
};
