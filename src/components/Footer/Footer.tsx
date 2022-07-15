import React from 'react';
import styles from './_Footer.module.scss';
import Link from 'next/link';

export type FooterProps = {};

export const Footer = ({}: FooterProps) => {
  return (
    <div className={styles['footer']}>
      <div className={styles['top']}>
        <div className={styles['links']}>
          <div className={styles['category']}>
            <h1>Projets</h1>
            <ul>
              <li>Wiclass</li>
              <li>DevsNews</li>
            </ul>
          </div>
          <div className={styles['category']}>
            <h1>Contact</h1>
            <ul>
              <li>Email</li>
              <li>Discord</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className={styles['category']}>
            <h1>Réseaux</h1>
            <ul>
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Youtube</li>
              <li>Dribbble</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div className={styles['category']}>
            <h1>Réseaux personnels</h1>
            <div className={styles['sun-category']}>
              <h1>Syd.C</h1>
              <ul>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Youtube</li>
                <li>Github</li>
              </ul>
            </div>
            <div className={styles['sub-category']}>
              <h1>Emmanuel.L</h1>
              <ul>
                <li>Twitter</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['bottom']}>
        <span> © Set Brain - 2022 </span>
        <Link href='/support'>
          <a>
            Support
          </a>
        </Link>
        <div className={styles['separator']}></div>
        <div className='separator'></div>
        <Link href='/confidentiality'>
          <a>
            Police de confidentialité
          </a>
        </Link>
      </div>
    </div>
  );
};
