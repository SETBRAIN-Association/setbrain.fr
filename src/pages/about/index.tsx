import React, { useEffect, useState } from 'react';
import styles from './_About.module.scss';
import BigTitle from '../../components/big-title/big-title';
import { FounderCard } from '../../components/founder-card/founder-card';
import Head from 'next/head';
import { LogoSwitcher } from '../../components/logo-switcher/logo-switcher';

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);

    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false);
    });
  });

  return (
    <div className={styles['About']} data-scroll-section='true'>
      <Head>
        <title>Qui sommes nous ? | Set Brain</title>
      </Head>
      <BigTitle position='left'>
        <h1>
          <span>L&#39;association</span>
        </h1>
      </BigTitle>
      <div className={styles['association']}>
        <LogoSwitcher></LogoSwitcher>
        <h1
          className={styles['title']}
          data-scroll='true'
          data-scroll-speed={isMobile ? '1' : '0.5'}
        >
          Setbrain <br /> Association
        </h1>
        <div
          className={styles['text']}
          data-scroll='true'
          data-scroll-speed={isMobile ? '1' : '2.5'}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </div>
      <BigTitle position='left'>
        <h1>
          <span>Les fondateurs</span>
        </h1>
      </BigTitle>
      <div className={styles['founder-cards']}>
        <FounderCard image='/1662818108749.jpg' founderName='Syd Chauviteau'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </FounderCard>
        <FounderCard
          image='/Photo_de_profil_professionel_emmanuel.webp'
          founderName='Emmanuel LINGUET'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </FounderCard>
      </div>
    </div>
  );
}
