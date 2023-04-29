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
          data-scroll-speed={isMobile ? '1' : '2'}
        >
          Notre objectif principal est d&apos;innover constamment.
          Nous croyons que l&apos;innovation est la clé pour offrir des expériences de qualité supérieure à nos utilisateurs.
          Nous sommes toujours à la recherche de nouvelles idées et de moyens de surprendre et d&apos;étonner notre audience avec des fonctionnalités novatrices.
          Nous sommes passionnés par notre travail et nous espérons que vous serez également enthousiasmé(e) par nos innovations.
        </div>
      </div>
      <BigTitle position='left'>
        <h1>
          <span>Les fondateurs</span>
        </h1>
      </BigTitle>
      <div className={styles['founder-cards']}>
        <FounderCard image='/Photo_de_profil_professionel_syd.webp' founderName='Syd Chauviteau'>
          La création de Set Brain a été une évidence pour moi, en tant que passionné d&apos;informatique depuis mon plus jeune âge.
          Cela m&apos;a permis d&apos;approfondir mes connaissances plus que je ne l&apos;aurais jamais imaginé.
          Les progrès réalisés ces deux dernières années m&apos;ont donné l&apos;impulsion nécessaire pour augmenter nos objectifs et nos ressources,
          et nous sommes maintenant en train de développer notre premier grand projet : Wiclass. Nous sommes impatients de voir ce que l&apos;avenir nous réserve !
        </FounderCard>
        <FounderCard
          image='/Photo_de_profil_professionel_emmanuel.webp'
          founderName='Emmanuel LINGUET'        >
          Depuis mon plus jeune âge, je suis passionné par l&apos;informatique et j&apos;ai passé des années à me perfectionner grâce à des projets personnels et professionnels.
          La création de Set Brain m&apos;a permis de mettre en pratique mes compétences acquises et d&apos;en développer de nouvelles. Cela m&apos;a également donné l&apos;opportunité de partager mes connaissances et d&apos;aider les autres à apprendre.
          Je suis très heureux d&apos;avoir créé Set Brain et j&apos;ai hâte de voir ce que l&apos;avenir nous réserve !
        </FounderCard>
      </div>
    </div>
  );
}