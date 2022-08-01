import React from 'react';
import styles from './_Projects.module.scss';
import projects from '../../components/project-card/_project-card.module.scss';
import BigTitle from '../../components/big-title/big-title';
import { ProjectCard } from '../../components/project-card/project-card';
import { Button } from '../../components/Button/Button';
import Image from 'next/image';

export type ProjectsProps = {
  path: string;
};

export default function Projects({}: ProjectsProps) {
  return (
    <div className={styles['Projects']} data-scroll-section>
      <BigTitle position='left'>
        <h1>
          <span>Nos projets</span>
        </h1>
      </BigTitle>
      <ProjectCard image='/Wiclass.svg' position='left' color='14, 159, 110'>
        <div className={projects['logo']}>
          <div style={{ width: '20vw', height: '5vw', position: 'relative' }}>
            <Image src='/Wiclass-logo.svg' alt='Wiclass Logo' layout='fill'></Image>
          </div>
        </div>
        <div className={projects['description']}>
          Wiclass est notre premier projet très ambitieux, avec celui-ci nous avons comme but de
          révolutionner l’education. Il s’agira très simplement d’une interface, entièrement en
          ligne, d’administration et de gestion dédiée aux enseignement secondaire.
        </div>
        <Button icon='fi-ss-interactive' label='En savoir plus'></Button>
      </ProjectCard>
      <ProjectCard image='/Devsnews.svg' position='right' color='239, 203, 104'>
        <div className={projects['description']}>
          <div style={{ width: '20vw', height: '5vw', position: 'relative' }}>
            <Image src='/Logo-Devsnews.svg' alt='Devsnews Logo' layout='fill'></Image>
          </div>
        </div>
        <div className={projects['description']}>
          DevsNews est notre second projet, il s’agira d’une émission hebdomadaire sur Twitch qui
          seront un mélange entre news et pratiques informatiques. L’émission sera secondée par un
          site web sur lequel vous retrouverez des articles, des rediffusions de nos lives et des
          best of !
        </div>
        <Button icon='fi-ss-interactive' label='En savoir plus'></Button>
      </ProjectCard>
    </div>
  );
}
