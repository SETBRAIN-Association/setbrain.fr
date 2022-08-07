import React, { useState } from 'react';
import styles from './_Header.module.scss';
import Link from 'next/link';

export const Header = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  function toggleMenu() {
    setHamburgerActive((a) => !a);
  }

  return (
    <div className={hamburgerActive ? styles.active + ' ' + styles.header : styles.header} onClick={toggleMenu}>
      <Link href='/'>
        <a className={styles['logo']}>SetBrain.</a>
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
      <div className={styles['hamburger']}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
