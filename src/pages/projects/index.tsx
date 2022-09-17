import React from 'react';
import styles from './_Projects.module.scss';
import projects from '../../components/project-card/_project-card.module.scss';
import BigTitle from '../../components/big-title/big-title';
import { ProjectCard } from '../../components/project-card/project-card';
import { Button } from '../../components/Button/Button';
import Image from 'next/image';
import Head from 'next/head';

export default function Projects() {
  return (
    <div className={styles['Projects']} data-scroll-section='true'>
      <Head>
        <title>Projets | Set Brain</title>
      </Head>
      <BigTitle position='left'>
        <h1>
          <span>Nos projets</span>
        </h1>
      </BigTitle>
      <ProjectCard
        backgroundColor={'linear-gradient(297.24deg, #FBAB7E 8.25%, #F7CE68 91.76%)'}
        position='right'
        color='239, 203, 104'
      >
        <div className={projects['logo']}>
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
        <Button icon='fi-sr-interactive' label='En savoir plus'></Button>
      </ProjectCard>
      <ProjectCard
        backgroundColor={
          'radial-gradient(156.07% 224.28% at -16.47% 144.8%, #050DC6 0.2%, #BB86FC 100%)'
        }
        position='left'
        color='74, 58, 215'
      >
        <div className={projects['logo']}>
          <div style={{ width: '30vw', height: '8vw', position: 'relative' }}>
            <Image
              src='/Stream-assistant-logo.svg'
              alt='Stream assistant Logo'
              layout='fill'
            ></Image>
          </div>
        </div>
        <div className={projects['description']}>
          Stream assistant est notre projet le plus récent, comme sont nom l’indique, c’est
          assistant de stream plus précisément un outils de production à distance. Il permet de
          contrôler le logiciel OBS à distance partout depuis votre navigateur web !
        </div>
        <Button icon='fi-sr-interactive' label='En savoir plus'></Button>
      </ProjectCard>
      <ProjectCard
        backgroundColor={'linear-gradient(145.96deg, #18D1C5 11.24%, #239A5A 99.84%)'}
        position='right'
        color='14, 159, 110'
        disabled={true}
      >
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
        <Button
          icon='fi-sr-interactive'
          label='En savoir plus'
          enabled={false}
          tooltip='Bientôt disponible !'
        ></Button>
      </ProjectCard>
    </div>
  );
}
