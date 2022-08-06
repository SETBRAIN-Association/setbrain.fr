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
              <li><a href="">Wiclass</a></li>
              <li><a href="">DevsNews</a></li>
            </ul>
          </div>
          <div className={styles['category']}>
            <h1>Contact</h1>
            <ul>
              <li><a href="">Email</a></li>
              <li><a href="">Discord</a></li>
              <li><a href="">Twitter</a></li>
            </ul>
          </div>
          <div className={styles['category']}>
            <h1>Réseaux</h1>
            <ul>
              <li><a href="">Discord</a></li>
              <li><a href="">Instagram</a></li>
              <li><a href="">Twitter</a></li>
              <li><a href="">Youtube</a></li>
              <li><a href="">Dribbble</a></li>
              <li><a href="">Facebook</a></li>
            </ul>
          </div>
          <div className={styles['category']}>
            <h1>Réseaux personnels</h1>
            <div className={styles['sub-category']}>
              <h1>Syd.C</h1>
              <ul>
                <li><a href="">Instagram</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">Youtube</a></li>
                <li><a href="">Github</a></li>
              </ul>
            </div>
            <div className={styles['sub-category']}>
              <h1>Emmanuel.L</h1>
              <ul>
                <li><a href="">Twitter</a></li>
                <li><a href="">Github</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['bottom']}>
        <span> © Set Brain - 2022 </span>
        <div className={styles['separator']}></div>
        <Link href='/support'>
          <a>
            Support
          </a>
        </Link>

        <div className={styles['separator']}></div>
        <Link href='/confidentiality'>
          <a>
            Police de confidentialité
          </a>
        </Link>
      </div>
    </div>
  );
};
