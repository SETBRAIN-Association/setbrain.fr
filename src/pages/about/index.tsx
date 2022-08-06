import React, { useEffect, useRef } from 'react';
import styles from './_About.module.scss';
import BigTitle from '../../components/big-title/big-title';
import { FounderCard } from '../../components/founder-card/founder-card';
import { HistoryStep } from '../../components/history-step/history-step';
import gsap from 'gsap';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

export default function About() {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry.intersectionRatio);
        if (entry.intersectionRatio > 0 ) {
          gsap.to(lineRef.current, {
            height: 'calc(100% - 13.5vw)',
            transition: 2,
          });
        }else {
          gsap.to(lineRef.current, {
            height: '0',
            transition: 1,
          });
        }
      }, { rootMargin: '0px 0px -100px 0px' }
    );

    lineRef.current && observer.observe(lineRef.current);
  }, []);


  return (
    <div className={styles['About']} data-scroll-section='true'>
      <BigTitle position='left'>
        <h1>
          <span>Qui sommes nous ?</span>
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

      <div className={styles['history']}>
        <BigTitle position='left'>
          <h1>l&#39;histoire de SetBrain</h1>
        </BigTitle>

        <div className={styles['timeline']}>
          <div className={styles['line']} ref={lineRef}></div>
          <HistoryStep stepTitle='Nos débuts ...' stepDate='Janvier 2019'>
            Alors qu’ils ne sont qu’en cinquième Syd Chauviteau et Emmanuel Linguet, voient déjà les
            choses en grand. C’est par cette pensé que Setbrain naîtra, c’est lors d'un travail
            somme toute normal pour 2 collégiens qu’ils leurs est venues à l’idée de créer un jeu
            vidéo pour celui-ci. Et c’est quelques semaines plus tard, en voyant la réussite de
            leurs collaborations, qu’ils décidèrent de continuer dans l’optique de toujours
            s’améliorer.
          </HistoryStep>
          <HistoryStep stepTitle='Création ...' stepDate='Janvier 2020'>
            Prés d’un 1 an plus tard, l’association Setbrain fut officiellement déclarée auprès des
            administrations françaises. C’est à partir de ce moment où les événements ont commencé à
            dépasser les 2 collégiens qu’ils étaient et se faisant pour toujours mener leurs projets
            à leur paroxysme, tous les bénévoles dont Syd Chauviteau et Emmanuel Linguet ont
            commencé a ce professionnaliser. Ils savaient aussi que gérer une équipe nécessitait des
            compétences qu’ils n’avaient pas et ils décidèrent de prendre une année pour tester de
            leurs compétences en créant un projet factice : Build World.
          </HistoryStep>
          <HistoryStep stepTitle='Wiclass ...' stepDate='Janvier 2021'>
            C’est en constatant les multiples améliorations évidentes à leurs yeux applicables à
            Pronote, le logiciel et site web utilisé pour la gestion de leurs établissements et
            beaucoup d’autres en France. Que l’idée d’y créer un équivalent plus technologique, plus
            beau, plus optimisé et moins cher leurs est parus comme une évidence et c’est le 8
            janvier 2021 que le projet est né.
          </HistoryStep>
          <HistoryStep stepTitle='Tournés vers l’avenir ...' stepDate='Aujourd’hui'>
            Aujourd’hui près, de 3 ans après sa création, Setbrain fait tout pour mener a bien
            Wiclass et cherche aussi un maximum de personnes avec des connaissances et compétences à
            nous porter donc si vous êtes intéressés à faire cela en bénévoles et que vous
            travaillez ou que vous êtes passionnés par un métier dit "du web" ( développeur
            front/back, designer UX/UI, communicant digital... ) vous pouvez nous contacter ici..
          </HistoryStep>
        </div>
      </div>
    </div>
  );
}
