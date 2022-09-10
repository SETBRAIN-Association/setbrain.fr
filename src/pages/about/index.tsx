import React from 'react';
import styles from './_About.module.scss';
import BigTitle from '../../components/big-title/big-title';
import { FounderCard } from '../../components/founder-card/founder-card';
import Head from 'next/head';

export default function About() {
  return (
    <div className={styles['About']} data-scroll-section='true'>
      <Head>
        <title>Qui sommes nous ? | Set Brain</title>
      </Head>
      <BigTitle position='left'>
        <h1>
          <span>Les fondateurs</span>
        </h1>
      </BigTitle>
      <div className={styles['founder-cards']}>
        <FounderCard image='' founderName='Syd Chauviteau'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </FounderCard>
        <FounderCard image='' founderName='Emmanuel LINGUET'>
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
