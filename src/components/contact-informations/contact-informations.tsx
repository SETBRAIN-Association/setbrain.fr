import React, { useEffect, useRef, useState } from 'react';
import styles from './_contact-informations.module.scss';
import gsap from 'gsap';
import { Model } from '../Model/Model';

export const ContactInformations = () => {
  const cardRef = useRef(null);
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1920) setIsWide(true);

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1920) setIsWide(true);
      else setIsWide(false);
    });
  });

  return (
    <div className={styles['contact-informations']}>
      <div className={styles['form']} ref={cardRef}>
        <h1>Informations de contact</h1>
        <p>Notre équipe fait le maximum pour vous répondre sous 24H.</p>
        <div className={styles['contacts']}>
          <div className={styles['media']}>
            <span
              className={styles['icon']}
              style={{ backgroundImage: 'url(/discord.svg)' }}
            ></span>
            <a href='https://discord.gg/cB4MvF8'>Discord</a>
          </div>
          <div className={styles['media']}>
            <span className={styles['icon']} style={{ backgroundImage: 'url(/gmail.svg)' }}></span>
            <a href='mailto:contact@setbrain.fr'>Gmail</a>
          </div>
          <div className={styles['media']}>
            <span
              className={styles['icon']}
              style={{ backgroundImage: 'url(/instagram.svg)' }}
            ></span>
            <a href='https://www.instagram.com/setbrainasso/'>Instagram</a>
          </div>
          <div className={styles['media']}>
            <span
              className={styles['icon']}
              style={{ backgroundImage: 'url(/twitter.svg)' }}
            ></span>
            <a href='https://twitter.com/SetbrainAsso'>Twitter</a>
          </div>
        </div>
      </div>
      <div className={styles['illustration']}>
        {isWide ? (
          <>
            <Model
              model={'/pc.gltf'}
              size={{ height: '80%', width: '50%', z: -2 }}
              position={{ left: '40%', top: '-10%' }}
              rotation={{ x: -0.3, y: 0.2, z: 0.1 }}
              scrollSpeed={1}
            ></Model>
            <Model
              model={'/rocket.gltf'}
              size={{ height: '90%', width: '50%', z: -5 }}
              position={{ left: '65%', top: '20%' }}
              rotation={{ x: -0.3, y: -0.2, z: -0.2 }}
              scrollSpeed={2.5}
            ></Model>
          </>
        ) : (
          <>
            <Model
              model={'/pc.gltf'}
              size={{ height: '100%', width: '50%', z: -2 }}
              position={{ left: '30%', top: '-10%' }}
              rotation={{ x: -0.3, y: 0.2, z: 0.1 }}
              scrollSpeed={1}
            ></Model>
            <Model
              model={'/rocket.gltf'}
              size={{ height: '110%', width: '50%', z: -5 }}
              position={{ left: '65%', top: '0%' }}
              rotation={{ x: -0.3, y: -0.2, z: -0.2 }}
              scrollSpeed={2.5}
            ></Model>
          </>
        )}
      </div>
    </div>
  );
};
