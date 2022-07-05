import React from 'react';
import './_contact-informations.scss';

export type ContactInformationsProps = {};

export const ContactInformations = ({}: ContactInformationsProps) => {
  return (
    <div className='contact-informations'>
      <div className='form'>
        <h1>Informations de contact</h1>
        <p>Notre équipe fait le maximum pour vous répondre sous 24H.</p>
        <div className='contacts'>
          <div className='media'>
            <span
              className='icon'
              style={{ backgroundImage: 'url(src/assets/icons/discord.svg)' }}
            ></span>
            <a href=''>Discord</a>
          </div>
          <div className='media'>
            <span
              className='icon'
              style={{ backgroundImage: 'url(src/assets/icons/gmail.svg)' }}
            ></span>
            <a href=''>Gmail</a>
          </div>
          <div className='media'>
            <span
              className='icon'
              style={{ backgroundImage: 'url(src/assets/icons/instagram.svg)' }}
            ></span>
            <a href=''>Instagram</a>
          </div>
          <div className='media'>
            <span
              className='icon'
              style={{ backgroundImage: 'url(src/assets/icons/twitter.svg)' }}
            ></span>
            <a href=''>Twitter</a>
          </div>
          <div className='media'>
            <span
              className='icon'
              style={{ backgroundImage: 'url(src/assets/icons/facebook.svg)' }}
            ></span>
            <a href=''>Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
};
