import { Link } from '@reach/router';
import React, { useState } from 'react';
import './_Header.scss';

export type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  function toggleMenu() {
    setHamburgerActive((a) => !a);
  }

  return (
    <div className={hamburgerActive ? 'active header' : 'header'}>
      <Link className='logo' to='home'>
        SetBrain.
      </Link>
      <nav className='menu'>
        <ul>
          <Link className='link' to='projects' onClick={toggleMenu}>
            Nos Projets
          </Link>
          <Link className='link' to='news' onClick={toggleMenu}>
            Nos actualités
          </Link>
          <Link className='link' to='about' onClick={toggleMenu}>
            Qui sommes nous
          </Link>
          <Link className='link' to='contact' onClick={toggleMenu}>
            Nous contacter
          </Link>
        </ul>
      </nav>
      <div className='hamburger' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
