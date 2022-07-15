import React from 'react';
import './_Projects.scss';
import BigTitle from '../../components/big-title/big-title';
import { ProjectCard } from '../../components/project-card/project-card';
import { Button } from '../../components/Button/Button';

export type ProjectsProps = {
  path: string;
};

export const Projects = ({}: ProjectsProps) => {
  return (
    <div className='Projects' data-scroll-section>
      <BigTitle position='left'>
        <h1>
          <span>Nos projets</span>
        </h1>
      </BigTitle>
      <ProjectCard image='src/assets/images/Wiclass.svg' position='left' color='14, 159, 110'>
        <div className='logo'>
          <img src='src/assets/Logos/Wiclass-logo.svg' alt='Wiclass Logo' />
        </div>
        <div className='description'>
          Wiclass est notre premier projet très ambitieux, avec celui-ci nous avons comme but de
          révolutionner l’education. Il s’agira très simplement d’une interface, entièrement en
          ligne, d’administration et de gestion dédiée aux enseignement secondaire.
        </div>
        <Button icon='fi-ss-interactive' label='En savoir plus'></Button>
      </ProjectCard>
      <ProjectCard image='src/assets/images/Devsnews.svg' position='right' color='239, 203, 104'>
        <div className='logo'>
          <img src='src/assets/Logos/Logo-Devsnews.svg' alt='Devsnews Logo' />
        </div>
        <div className='description'>
          DevsNews est notre second projet, il s’agira d’une émission hebdomadaire sur Twitch qui
          seront un mélange entre news et pratiques informatiques. L’émission sera secondée par un
          site web sur lequel vous retrouverez des articles, des rediffusions de nos lives et des
          best of !
        </div>
        <Button icon='fi-ss-interactive' label='En savoir plus'></Button>
      </ProjectCard>
    </div>
  );
};
