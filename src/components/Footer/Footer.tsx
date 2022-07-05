import { Link } from '@reach/router';
import React from 'react';
import './_Footer.scss';

export type FooterProps = {};

export const Footer = ({}: FooterProps) => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='links'>
          <div className='category'>
            <h1>Projets</h1>
            <ul>
              <li>Wiclass</li>
              <li>DevsNews</li>
            </ul>
          </div>
          <div className='category'>
            <h1>Contact</h1>
            <ul>
              <li>Email</li>
              <li>Discord</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className='category'>
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
          <div className='category'>
            <h1>Réseaux personnels</h1>
            <div className='sub-category'>
              <h1>Syd.C</h1>
              <ul>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Youtube</li>
                <li>Github</li>
              </ul>
            </div>
            <div className='sub-category'>
              <h1>Emmanuel.L</h1>
              <ul>
                <li>Twitter</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <span> © Set Brain - 2022 </span>
        <div className='separator'></div>
        <Link to='/support'>Support</Link>
        <div className='separator'></div>
        <Link to='/confidentiality'>Police de confidentialité</Link>
      </div>
    </div>
  );
};
