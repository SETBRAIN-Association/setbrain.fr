import React, { useState } from 'react';
import styles from './_Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  function toggleMenu() {
    setHamburgerActive((a) => !a);
  }

  return (
    <div className={hamburgerActive ? styles.active + ' ' + styles.header : styles.header}>
      <Link href='/'>
        <a className={styles['logo']}>
          <Image src='/Logo_Mobile.svg' height='45px' width='40px' alt='logo setbrain' />
          SetBrain.
        </a>
      </Link>
      <nav className={styles['menu']}>
        <ul>
          <Link href='/projects'>
            <a className={styles['link']}>Nos Projets</a>
          </Link>
          <Link href='/news'>
            <a className={styles['link']}>Nos actualités</a>
          </Link>
          <Link href='/about'>
            <a className={styles['link']}>Qui sommes nous</a>
          </Link>
          <Link href='/contact'>
            <a className={styles['link']}>Nous contacter</a>
          </Link>
        </ul>
      </nav>
      <div className={styles['hamburger']} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
