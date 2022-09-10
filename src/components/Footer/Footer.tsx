import React from 'react';
import styles from './_Footer.module.scss';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className={styles['footer']} data-scroll-section='true'>
      <div className={styles['top']}>
        <div className={styles['links']}>
          <div className={styles['category']}>
            <h1>Projets</h1>
            <ul>
              <li>
                <a href='https://devsnews.fr'>DevsNews</a>
              </li>
              <li>
                <a href='https://streamassistant.com'>Stream assistant</a>
              </li>
              <li>
                <a href='https://wiclass.fr' className={styles['disabled']}>
                  Wiclass
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['category']}>
            <h1>Contact</h1>
            <ul>
              <li>
                <a href='emailto:contact@setbrain.fr'>Email</a>
              </li>
              <li>
                <a href='https://discord.gg/cB4MvF8'>Discord</a>
              </li>
              <li>
                <a href='https://twitter.com/SetbrainAsso'>Twitter</a>
              </li>
            </ul>
          </div>
          <div className={styles['category']}>
            <h1>Réseaux</h1>
            <ul>
              <li>
                <a href='https://discord.gg/cB4MvF8'>Discord</a>
              </li>
              <li>
                <a href='https://www.instagram.com/setbrainasso/'>Instagram</a>
              </li>
              <li>
                <a href='https://twitter.com/SetbrainAsso'>Twitter</a>
              </li>
              <li>
                <a href='https://www.youtube.com/channel/UCzroitfwmI9BsoR2kcwMPEw'>Youtube</a>
              </li>
              <li>
                <a href='https://dribbble.com/SetBrain?onboarding=true'>Dribbble</a>
              </li>
              <li>
                <a href='https://github.com/SETBRAIN-Association'>GitHub</a>
              </li>
            </ul>
          </div>
          <div className={styles['category']}>
            <h1>Réseaux personnels</h1>
            <div className={styles['sub-category']}>
              <h1>Syd.C</h1>
              <ul>
                <li>
                  <a href='https://instagram.com/haafak_'>Instagram</a>
                </li>
                <li>
                  <a href='https://twitter.com/SChauviteau'>Twitter</a>
                </li>
                <li>
                  <a href='https://www.youtube.com/channel/UC19cvz1ciw545GwfecGNOuQ'>Youtube</a>
                </li>
                <li>
                  <a href='https://github.com/Chauviteau-Syd'>Github</a>
                </li>
              </ul>
            </div>
            <div className={styles['sub-category']}>
              <h1>Emmanuel.L</h1>
              <ul>
                <li>
                  <a href='https://twitter.com/DevXmanu'>Twitter</a>
                </li>
                <li>
                  <a href='https://github.com/xmanu91'>Github</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['bottom']}>
        <span> © Set Brain - 2022 </span>
        <div className={styles['separator']}></div>
        <Link href='/Mentions_Legales_setbrain.fr.pdf'>
          <a>Mentions légales</a>
        </Link>

        <div className={styles['separator']}></div>
        <Link href='/Politique_de_confidentialite_setbrain.fr'>
          <a>Politique de confidentialité</a>
        </Link>
      </div>
    </div>
  );
};
